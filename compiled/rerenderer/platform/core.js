// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('rerenderer.platform.core');
goog.require('cljs.core');
rerenderer.platform.core.platform = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
rerenderer.platform.core.get_platform = (function rerenderer$platform$core$get_platform(){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(rerenderer.platform.core.platform) : cljs.core.deref.call(null,rerenderer.platform.core.platform));
});
if(typeof rerenderer.platform.core.listen_BANG_ !== 'undefined'){
} else {
/**
 * (event-ch options) -> null
 *   Should put events to `event-ch`, supported events:
 *  - [:click {:x :y}]
 *  - [:keydown {:keycode}]
 *  - [:keyup {:keycode}]
 */
rerenderer.platform.core.listen_BANG_ = (function (){var method_table__7069__auto__ = (function (){var G__19260 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19260) : cljs.core.atom.call(null,G__19260));
})();
var prefer_table__7070__auto__ = (function (){var G__19261 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19261) : cljs.core.atom.call(null,G__19261));
})();
var method_cache__7071__auto__ = (function (){var G__19262 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19262) : cljs.core.atom.call(null,G__19262));
})();
var cached_hierarchy__7072__auto__ = (function (){var G__19263 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19263) : cljs.core.atom.call(null,G__19263));
})();
var hierarchy__7073__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("rerenderer.platform.core","listen!"),rerenderer.platform.core.get_platform,cljs.core.cst$kw$default,hierarchy__7073__auto__,method_table__7069__auto__,prefer_table__7070__auto__,method_cache__7071__auto__,cached_hierarchy__7072__auto__));
})();
}
if(typeof rerenderer.platform.core.render !== 'undefined'){
} else {
/**
 * Renders root component.
 * 
 *   (component options) -> result-canvas
 */
rerenderer.platform.core.render = (function (){var method_table__7069__auto__ = (function (){var G__19264 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19264) : cljs.core.atom.call(null,G__19264));
})();
var prefer_table__7070__auto__ = (function (){var G__19265 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19265) : cljs.core.atom.call(null,G__19265));
})();
var method_cache__7071__auto__ = (function (){var G__19266 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19266) : cljs.core.atom.call(null,G__19266));
})();
var cached_hierarchy__7072__auto__ = (function (){var G__19267 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19267) : cljs.core.atom.call(null,G__19267));
})();
var hierarchy__7073__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("rerenderer.platform.core","render"),rerenderer.platform.core.get_platform,cljs.core.cst$kw$default,hierarchy__7073__auto__,method_table__7069__auto__,prefer_table__7070__auto__,method_cache__7071__auto__,cached_hierarchy__7072__auto__));
})();
}
if(typeof rerenderer.platform.core.information !== 'undefined'){
} else {
/**
 * Returns platform information in format:
 *   {:width int-px
 * :height int-px
 * :input #{:mouse :keyboard :touch}}
 */
rerenderer.platform.core.information = (function (){var method_table__7069__auto__ = (function (){var G__19268 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19268) : cljs.core.atom.call(null,G__19268));
})();
var prefer_table__7070__auto__ = (function (){var G__19269 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19269) : cljs.core.atom.call(null,G__19269));
})();
var method_cache__7071__auto__ = (function (){var G__19270 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19270) : cljs.core.atom.call(null,G__19270));
})();
var cached_hierarchy__7072__auto__ = (function (){var G__19271 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19271) : cljs.core.atom.call(null,G__19271));
})();
var hierarchy__7073__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("rerenderer.platform.core","information"),rerenderer.platform.core.get_platform,cljs.core.cst$kw$default,hierarchy__7073__auto__,method_table__7069__auto__,prefer_table__7070__auto__,method_cache__7071__auto__,cached_hierarchy__7072__auto__));
})();
}
