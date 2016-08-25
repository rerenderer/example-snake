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
rerenderer.platform.core.listen_BANG_ = (function (){var method_table__7069__auto__ = (function (){var G__14638 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14638) : cljs.core.atom.call(null,G__14638));
})();
var prefer_table__7070__auto__ = (function (){var G__14639 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14639) : cljs.core.atom.call(null,G__14639));
})();
var method_cache__7071__auto__ = (function (){var G__14640 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14640) : cljs.core.atom.call(null,G__14640));
})();
var cached_hierarchy__7072__auto__ = (function (){var G__14641 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14641) : cljs.core.atom.call(null,G__14641));
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
rerenderer.platform.core.render = (function (){var method_table__7069__auto__ = (function (){var G__14642 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14642) : cljs.core.atom.call(null,G__14642));
})();
var prefer_table__7070__auto__ = (function (){var G__14643 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14643) : cljs.core.atom.call(null,G__14643));
})();
var method_cache__7071__auto__ = (function (){var G__14644 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14644) : cljs.core.atom.call(null,G__14644));
})();
var cached_hierarchy__7072__auto__ = (function (){var G__14645 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14645) : cljs.core.atom.call(null,G__14645));
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
rerenderer.platform.core.information = (function (){var method_table__7069__auto__ = (function (){var G__14646 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14646) : cljs.core.atom.call(null,G__14646));
})();
var prefer_table__7070__auto__ = (function (){var G__14647 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14647) : cljs.core.atom.call(null,G__14647));
})();
var method_cache__7071__auto__ = (function (){var G__14648 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14648) : cljs.core.atom.call(null,G__14648));
})();
var cached_hierarchy__7072__auto__ = (function (){var G__14649 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14649) : cljs.core.atom.call(null,G__14649));
})();
var hierarchy__7073__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("rerenderer.platform.core","information"),rerenderer.platform.core.get_platform,cljs.core.cst$kw$default,hierarchy__7073__auto__,method_table__7069__auto__,prefer_table__7070__auto__,method_cache__7071__auto__,cached_hierarchy__7072__auto__));
})();
}
