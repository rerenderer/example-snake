(ns ^:figwheel-always rerenderer-example.snake.handler
  (:require-macros [cljs.core.async.macros :refer [go-loop go]])
  (:require [cljs.core.match :refer-macros [match]]
            [cljs.core.async :refer [<! chan >! sliding-buffer timeout alts!]]
            [clojure.set :refer [intersection]]))

(def initial-state {:status :start-menu})

(defn start-game
  [state]
  (assoc state
    :status :in-progress
    :candys [[2 5]]
    :snake [[6 6] [6 7] [6 8]]
    :direction :right
    :ignore-intersections []
    :lives 5))

(defn resume-game
  [state]
  state)

(defn on-button-click
  [state]
  (condp = (:status state)
    :start-menu (start-game state)
    :game-over (start-game state)
    :pause (resume-game state)))

(defn create-timer!
  [name time]
  (let [ch (chan (sliding-buffer 1))]
    (js/setInterval #(go (>! ch [:timer name])) time)
    ch))

(defn get-snake
  [snake direction]
  (let [[x y] (last snake)
        [nx ny] (condp = direction
                  :left [(dec x) y]
                  :right [(inc x) y]
                  :up [x (dec y)]
                  :down [x (inc y)])
        nx (if (> nx 40) 0 nx)
        nx (if (< nx 0) 40 nx)
        ny (if (> ny 27) 0 ny)
        ny (if (< ny 0) 27 ny)]
    (conj (vec snake) [nx ny])))

(defn on-candy?
  [snake candys]
  (intersection (set snake) (set candys)))

(defn get-snake-intersections
  [snake]
  (->> snake
       frequencies
       (filter #(> (second %) 1))
       (map first)))

(defn check-intersection
  [{:keys [snake ignore-intersections lives] :as state}]
  (let [intersections (get-snake-intersections snake)
        without-ignored (remove (set ignore-intersections) intersections)]
    (assoc state
      :ignore-intersctions intersections
      :lives (if (empty? without-ignored) lives (dec lives)))))

(defn check-lives
  [{:keys [lives] :as state}]
  (if (zero? lives)
    (assoc state :status :game-over)
    state))

(defn check-move-on-candy
  [{:keys [snake direction candys score] :as state}]
  (let [on-candys (on-candy? snake candys)
        snake (get-snake snake direction)]
    (if (empty? on-candys)
      (assoc state
        :snake (rest snake)
        :score (inc score))
      (assoc state
        :score (+ 10 score)
        :snake snake
        :candys (conj (remove on-candys candys)
                      [(rand-int 40) (rand-int 27)])))))

(defn move-snake
  [state]
  (-> state
      check-move-on-candy
      check-intersection
      check-lives))

(defn change-direction
  [{:keys [direction] :as state} code]
  (assoc state
    :direction (if (or (= direction :up) (= direction :down))
                 (condp = code
                   37 :left
                   39 :right
                   direction)
                 (condp = code
                   38 :up
                   40 :down
                   direction))))

(defn event-handler
  [event-ch state-atom _]
  (let [move-snake-ch (create-timer! :move-snake 200)]
    (go-loop []
      (match [(-> [event-ch move-snake-ch] alts! first) @state-atom]
        [[:click {:x (x :guard #(> 700 % 100))
                  :y (y :guard #(> 500 % 400))}]
         {:status (_ :guard #(not= % :in-progress))}]
        (swap! state-atom on-button-click)

        [[:keyup {:keycode (code :guard #(>= 40 % 37))}]
         {:status :in-progress}]
        (swap! state-atom change-direction code)

        [[:keyup {:keycode 32}]
         {:status (_ :guard #(not= % :in-progress))}]
        (swap! state-atom on-button-click)

        [[:timer :move-snake]
         {:status :in-progress}]
        (swap! state-atom move-snake)

        [event state]
        (println "Not handled:" event "for state:" state))
      (recur))))
