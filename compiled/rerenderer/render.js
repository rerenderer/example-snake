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
try{var G__22634 = (root.cljs$core$IFn$_invoke$arity$1 ? root.cljs$core$IFn$_invoke$arity$1(state) : root.call(null,state));
var G__22635 = options;
return (rerenderer.platform.core.render.cljs$core$IFn$_invoke$arity$2 ? rerenderer.platform.core.render.cljs$core$IFn$_invoke$arity$2(G__22634,G__22635) : rerenderer.platform.core.render.call(null,G__22634,G__22635));
}catch (e22633){var e = e22633;
return console.error("Rendering failed",e);
}});
