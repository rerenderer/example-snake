(defproject rerenderer-example.snake "0.1.0"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.7.228"]
                 [org.clojure/core.match "0.3.0-alpha4"]
                 [org.clojure/core.async "0.2.371"]
                 [org.rerenderer/rerenderer "0.4.4"]
                 [cljsjs/stats "16.0-0"]
                 [binaryage/devtools "0.8.1"]]
  :plugins [[lein-cljsbuild "1.1.2"]
            [lein-figwheel "0.5.0-6"]]
  :source-paths ["src"]
  :jvm-opts ["-Xss32m"]
  :cljsbuild {:builds {:main {:source-paths ["src"]
                              :figwheel {:on-jsload "rerenderer-example.snake.core/on-reload"}
                              :compiler {:output-to "resources/public/compiled/main.js"
                                         :output-dir "resources/public/compiled"
                                         :asset-path "./compiled"
                                         :source-map true
                                         :main "rerenderer-example.snake.core"
                                         :optimizations :none
                                         :pretty-print false}}
                       :production {:source-paths ["src"]
                                    :compiler {:output-to "build/compiled/main.js"
                                               :output-dir "build/compiled"
                                               :asset-path "./compiled"
                                               :main "rerenderer-example.snake.core"
                                               :optimizations :advanced
                                               :pretty-print false}}}})
