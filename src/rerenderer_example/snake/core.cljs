(ns rerenderer-example.snake.core
  (:require [rerenderer.core :refer [init!]]
            [rerenderer.debug :as debug]
            [rerenderer-example.snake.views :refer [root-view]]
            [rerenderer-example.snake.handler :refer [initial-state event-handler]]))

(enable-console-print!)

(defonce game (init! :root-view #'root-view
                     :event-handler #'event-handler
                     :state initial-state))

(defn on-reload [] (debug/rerender! game))
