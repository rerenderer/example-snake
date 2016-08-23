(ns rerenderer-example.snake.core
  (:require [rerenderer.core :refer [init!]]
            [rerenderer.debug :as debug]
            [cljsjs.stats]
            [rerenderer-example.snake.views :refer [root-view]]
            [rerenderer-example.snake.handler :refer [initial-state event-handler]]))

(enable-console-print!)

(defn init-stats!
  []
  (when (= (.-hash js/location) "#debug")
    (let [stats (js/Stats.)]
      (.showPanel stats 0)
      (.. js/document -body (appendChild (.-domElement stats)))
      stats)))

(defonce stats (init-stats!))

(defonce game (init! :root-view #'root-view
                     :event-handler #'event-handler
                     :state initial-state
                     :stats stats))

(defn on-reload [] (debug/rerender! game))
