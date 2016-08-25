(ns rerenderer-example.snake.core
  (:require [rerenderer.core :refer [init!]]
            [rerenderer.debug :as debug]
            [cljsjs.stats]
            [devtools.core :as devtools]
            [rerenderer-example.snake.views :refer [root-view]]
            [rerenderer-example.snake.handler :refer [initial-state event-handler]]))

(def is-debug? (= (.-hash js/location) "#debug"))

(enable-console-print!)

(defn init-stats!
  []
  (when is-debug?
    (let [stats (js/Stats.)]
      (.showPanel stats 0)
      (.. js/document -body (appendChild (.-domElement stats)))
      stats)))

(defonce stats (init-stats!))

(defonce game (init! :root-view #'root-view
                     :event-handler #'event-handler
                     :state initial-state
                     :stats stats
                     :is-debug? is-debug?
                     :preload-images ["sprite.png"]))

(defn on-reload [] (debug/rerender! game))

(when is-debug?
  (devtools/install!)
  (debug/watch-state! game #(.log js/console %)))
