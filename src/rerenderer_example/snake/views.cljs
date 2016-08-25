(ns rerenderer-example.snake.views
  (:require [rerenderer.primitives :as p]))

(def colors {:background "#F3FFE2"
             :interface "#1695A3"
             :text "#225378"
             :game-item "#EB7F00"})

(defn background
  [& children]
  (p/rectangle {:width 800
                :height 600
                :x 0
                :y 0
                :color (:background colors)}
    children))


(defn button
  [{:keys [text]}]
  (p/rectangle {:width 600
                :height 100
                :x 100
                :y 400
                :color (:interface colors)}
    (p/text {:width 600
             :height 100
             :x 20
             :y 20
             :color (:text colors)
             :font-size 32
             :value text})))

(defn title
  [{:keys [text]}]
  (p/text {:width 600
           :height 200
           :x 100
           :y 100
           :color (:text colors)
           :font-size 96
           :value text}))

(defn start-menu
  []
  (background
    (title {:text "SNAKE"})
    (button {:text "Touch or press space to start"})))

(defn game-over
  [score]
  (background
    (title {:text "GAME OVER"})
    (p/text {:width 600
             :height 100
             :x 100
             :y 270
             :color (:text colors)
             :font-size 48
             :value (str "SCORE: " score)})
    (button {:text "Touch or press space to start again"})))

(defn pause
  [score]
  (background
    (title {:text "PAUSE"})
    (p/text {:width 600
             :height 100
             :x 100
             :y 270
             :color (:text colors)
             :font-size 48
             :value (str "SCORE: " score)})
    (button {:text "Touch or press space to continue"})))

(defn live
  [{:keys [x y]}]
  (p/image {:width 36
            :height 32
            :x x
            :y y
            :sx 0
            :sy 0
            :src "/sprite.png"}))

(defn panel
  [score lives]
  (p/rectangle {:width 800
                :height 50
                :x 0
                :y 0
                :color (:interface colors)}
    (p/text {:width 300
             :height 50
             :color (:text colors)
             :font-size 24
             :x 10
             :y 8
             :value (str "SCORE: " score)})
    (p/text {:width 100
             :height 50
             :color (:text colors)
             :font-size 24
             :x 530
             :y 8
             :value "LIVES:"})
    (for [n (range lives)]
      (live {:x (+ 610 (* n 36))
             :y 8}))))

(defn translate [pos] (* pos 20))

(defn bread
  [{:keys [x y]}]
  (p/image {:width 20
            :height 20
            :x x
            :y y
            :sx 40
            :sy 0
            :src "/sprite.png"}))

(defn snake-part
  [{:keys [x y]}]
  (p/image {:width 20
            :height 20
            :x x
            :y y
            :sx 70
            :sy 0
            :src "/sprite.png"}))

(defn field
  [candy snake]
  (p/rectangle {:width 800
                :height 550
                :x 0
                :y 50
                :color (:background colors)}
    (for [[x y] snake]
      (snake-part {:x (translate x)
                   :y (translate y)}))
    (bread {:x (-> candy first translate)
            :y (-> candy second translate)})))

(defn game-scene
  [score lives candy snake]
  (background
    (panel score lives)
    (field candy snake)))

(defn root-view
  [{:keys [status score lives candy snake]}]
  (condp = status
    :start-menu (start-menu)
    :game-over (game-over score)
    :in-progress (game-scene score lives candy snake)
    :pause (pause score)))
