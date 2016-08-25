// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('rerenderer.render');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('rerenderer.platform.core');
goog.require('rerenderer.component');
/**
 * Returns channel that waits for states.
 */
rerenderer.render.render_BANG_ = (function rerenderer$render$render_BANG_(root,state,options){
try{var G__19559 = (root.cljs$core$IFn$_invoke$arity$1 ? root.cljs$core$IFn$_invoke$arity$1(state) : root.call(null,state));
var G__19560 = options;
return (rerenderer.platform.core.render.cljs$core$IFn$_invoke$arity$2 ? rerenderer.platform.core.render.cljs$core$IFn$_invoke$arity$2(G__19559,G__19560) : rerenderer.platform.core.render.call(null,G__19559,G__19560));
}catch (e19558){var e = e19558;
return console.error("Rendering failed",e);
}});
