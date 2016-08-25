// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('rerenderer.platform.android.bus');
goog.require('cljs.core');
goog.require('rerenderer.platform.utils');
/**
 * Returns `true` when interop object available.
 */
rerenderer.platform.android.bus.available_QMARK_ = (function rerenderer$platform$android$bus$available_QMARK_(){
return (window["android"]);
});
/**
 * Renders tree on android side.
 */
rerenderer.platform.android.bus.render_BANG_ = (function rerenderer$platform$android$bus$render_BANG_(tree,options){
return android.render(rerenderer.platform.utils.to_json(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tree,tree,cljs.core.cst$kw$scale,cljs.core.boolean$(cljs.core.cst$kw$scale.cljs$core$IFn$_invoke$arity$1(options))], null)));
});
/**
 * Subscribes to events, event have format {:event name **props}
 */
rerenderer.platform.android.bus.on_event_BANG_ = (function rerenderer$platform$android$bus$on_event_BANG_(callback){
return window.androidEventsCallback = (function (p1__8832_SHARP_){
var G__8834 = rerenderer.platform.utils.from_json(p1__8832_SHARP_);
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__8834) : callback.call(null,G__8834));
});
});
rerenderer.platform.android.bus.on_event_BANG_((function (p1__8835_SHARP_){
return console.log("Event listener not set, skip:",p1__8835_SHARP_);
}));
rerenderer.platform.android.bus.information = (function (){var G__8836 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,(0),cljs.core.cst$kw$height,(0),cljs.core.cst$kw$input,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$touch,null], null), null)], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__8836) : cljs.core.atom.call(null,G__8836));
})();
window.androidUpdateInformation = (function (p1__8837_SHARP_,p2__8838_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(rerenderer.platform.android.bus.information,cljs.core.assoc,cljs.core.cst$kw$width,p1__8837_SHARP_,cljs.core.array_seq([cljs.core.cst$kw$height,p2__8838_SHARP_], 0));
});
