// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('rerenderer.platform.browser.utils');
goog.require('cljs.core');
rerenderer.platform.browser.utils.get_image = cljs.core.memoize((function (src){
var img = (new Image());
img.src = src;

return img;
}));
