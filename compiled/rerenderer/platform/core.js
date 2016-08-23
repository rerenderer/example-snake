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
rerenderer.platform.core.listen_BANG_ = (function (){var method_table__7069__auto__ = (function (){var G__16047 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16047) : cljs.core.atom.call(null,G__16047));
})();
var prefer_table__7070__auto__ = (function (){var G__16048 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16048) : cljs.core.atom.call(null,G__16048));
})();
var method_cache__7071__auto__ = (function (){var G__16049 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16049) : cljs.core.atom.call(null,G__16049));
})();
var cached_hierarchy__7072__auto__ = (function (){var G__16050 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16050) : cljs.core.atom.call(null,G__16050));
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
rerenderer.platform.core.render = (function (){var method_table__7069__auto__ = (function (){var G__16051 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16051) : cljs.core.atom.call(null,G__16051));
})();
var prefer_table__7070__auto__ = (function (){var G__16052 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16052) : cljs.core.atom.call(null,G__16052));
})();
var method_cache__7071__auto__ = (function (){var G__16053 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16053) : cljs.core.atom.call(null,G__16053));
})();
var cached_hierarchy__7072__auto__ = (function (){var G__16054 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16054) : cljs.core.atom.call(null,G__16054));
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
rerenderer.platform.core.information = (function (){var method_table__7069__auto__ = (function (){var G__16055 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16055) : cljs.core.atom.call(null,G__16055));
})();
var prefer_table__7070__auto__ = (function (){var G__16056 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16056) : cljs.core.atom.call(null,G__16056));
})();
var method_cache__7071__auto__ = (function (){var G__16057 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16057) : cljs.core.atom.call(null,G__16057));
})();
var cached_hierarchy__7072__auto__ = (function (){var G__16058 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16058) : cljs.core.atom.call(null,G__16058));
})();
var hierarchy__7073__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("rerenderer.platform.core","information"),rerenderer.platform.core.get_platform,cljs.core.cst$kw$default,hierarchy__7073__auto__,method_table__7069__auto__,prefer_table__7070__auto__,method_cache__7071__auto__,cached_hierarchy__7072__auto__));
})();
}
