// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('rerenderer.platform.browser.core');
goog.require('cljs.core');
goog.require('rerenderer.platform.core');
goog.require('rerenderer.platform.browser.events');
goog.require('rerenderer.component');
if(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(rerenderer.platform.core.platform) : cljs.core.deref.call(null,rerenderer.platform.core.platform)))){
} else {
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(rerenderer.platform.core.platform,cljs.core.cst$kw$browser) : cljs.core.reset_BANG_.call(null,rerenderer.platform.core.platform,cljs.core.cst$kw$browser));
}

/**
 * Component that implement that protocol support rendering in browser.
 * @interface
 */
rerenderer.platform.browser.core.IBrowser = function(){};

/**
 * Render component on canvas context.
 * 
 *                Example:
 * 
 *                ```
 *                (reify
 *                  IComponent
 *                  ...
 *                  IBrowser
 *                  (render-browser [_ ctx]
 *                    (set! (.-fillStyle ctx) "rgb(255, 0, 0)")
 *                    (.fillRect ctx 0 0 100 100)))
 *                ```
 */
rerenderer.platform.browser.core.render_browser = (function rerenderer$platform$browser$core$render_browser(_,ctx){
if((!((_ == null))) && (!((_.rerenderer$platform$browser$core$IBrowser$render_browser$arity$2 == null)))){
return _.rerenderer$platform$browser$core$IBrowser$render_browser$arity$2(_,ctx);
} else {
var x__6811__auto__ = (((_ == null))?null:_);
var m__6812__auto__ = (rerenderer.platform.browser.core.render_browser[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return (m__6812__auto__.cljs$core$IFn$_invoke$arity$2 ? m__6812__auto__.cljs$core$IFn$_invoke$arity$2(_,ctx) : m__6812__auto__.call(null,_,ctx));
} else {
var m__6812__auto____$1 = (rerenderer.platform.browser.core.render_browser["_"]);
if(!((m__6812__auto____$1 == null))){
return (m__6812__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__6812__auto____$1.cljs$core$IFn$_invoke$arity$2(_,ctx) : m__6812__auto____$1.call(null,_,ctx));
} else {
throw cljs.core.missing_protocol("IBrowser.render-browser",_);
}
}
}
});

/**
 * Return canvas from options or first canvas in the document.
 */
rerenderer.platform.browser.core.get_canvas = (function rerenderer$platform$browser$core$get_canvas(options){
var or__6156__auto__ = cljs.core.cst$kw$canvas.cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return (document.getElementsByTagName("canvas")[(0)]);
}
});
rerenderer.platform.browser.core.cache = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
rerenderer.platform.core.listen_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$browser,(function (ch,options){
return rerenderer.platform.browser.events.bind_events_BANG_(ch,rerenderer.platform.browser.core.get_canvas(options));
}));
rerenderer.platform.browser.core.render_component = (function rerenderer$platform$browser$core$render_component(parent_canvas,component){
if(((!((component == null)))?(((false) || (component.rerenderer$component$IComponent$))?true:(((!component.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(rerenderer.component.IComponent,component):false)):cljs.core.native_satisfies_QMARK_(rerenderer.component.IComponent,component))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$satisfies_QMARK_,cljs.core.cst$sym$IComponent,cljs.core.cst$sym$component)], 0)))].join('')));
}

if(((!((component == null)))?(((false) || (component.rerenderer$platform$browser$core$IBrowser$))?true:(((!component.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(rerenderer.platform.browser.core.IBrowser,component):false)):cljs.core.native_satisfies_QMARK_(rerenderer.platform.browser.core.IBrowser,component))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$satisfies_QMARK_,cljs.core.cst$sym$IBrowser,cljs.core.cst$sym$component)], 0)))].join('')));
}

var map__14662 = rerenderer.component.props(component);
var map__14662__$1 = ((((!((map__14662 == null)))?((((map__14662.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14662.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14662):map__14662);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14662__$1,cljs.core.cst$kw$width);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14662__$1,cljs.core.cst$kw$height);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14662__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14662__$1,cljs.core.cst$kw$y);
var parent_ctx = parent_canvas.getContext("2d");
var component_path = (rerenderer.component.path.cljs$core$IFn$_invoke$arity$1 ? rerenderer.component.path.cljs$core$IFn$_invoke$arity$1(component) : rerenderer.component.path.call(null,component));
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(rerenderer.platform.browser.core._STAR_used_STAR_,component_path);

var temp__4655__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(rerenderer.platform.browser.core.cache,component_path);
if(cljs.core.truth_(temp__4655__auto__)){
var canvas = temp__4655__auto__;
parent_ctx.drawImage(canvas,x,y);

return canvas;
} else {
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = width;

canvas.height = height;

rerenderer.platform.browser.core.render_browser(component,ctx);

var seq__14664_14668 = cljs.core.seq(rerenderer.component.childs(component));
var chunk__14665_14669 = null;
var count__14666_14670 = (0);
var i__14667_14671 = (0);
while(true){
if((i__14667_14671 < count__14666_14670)){
var child_14672 = chunk__14665_14669.cljs$core$IIndexed$_nth$arity$2(null,i__14667_14671);
rerenderer$platform$browser$core$render_component(canvas,child_14672);

var G__14673 = seq__14664_14668;
var G__14674 = chunk__14665_14669;
var G__14675 = count__14666_14670;
var G__14676 = (i__14667_14671 + (1));
seq__14664_14668 = G__14673;
chunk__14665_14669 = G__14674;
count__14666_14670 = G__14675;
i__14667_14671 = G__14676;
continue;
} else {
var temp__4657__auto___14677 = cljs.core.seq(seq__14664_14668);
if(temp__4657__auto___14677){
var seq__14664_14678__$1 = temp__4657__auto___14677;
if(cljs.core.chunked_seq_QMARK_(seq__14664_14678__$1)){
var c__6959__auto___14679 = cljs.core.chunk_first(seq__14664_14678__$1);
var G__14680 = cljs.core.chunk_rest(seq__14664_14678__$1);
var G__14681 = c__6959__auto___14679;
var G__14682 = cljs.core.count(c__6959__auto___14679);
var G__14683 = (0);
seq__14664_14668 = G__14680;
chunk__14665_14669 = G__14681;
count__14666_14670 = G__14682;
i__14667_14671 = G__14683;
continue;
} else {
var child_14684 = cljs.core.first(seq__14664_14678__$1);
rerenderer$platform$browser$core$render_component(canvas,child_14684);

var G__14685 = cljs.core.next(seq__14664_14678__$1);
var G__14686 = null;
var G__14687 = (0);
var G__14688 = (0);
seq__14664_14668 = G__14685;
chunk__14665_14669 = G__14686;
count__14666_14670 = G__14687;
i__14667_14671 = G__14688;
continue;
}
} else {
}
}
break;
}

cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(rerenderer.platform.browser.core.cache,component_path,canvas);

parent_ctx.drawImage(canvas,x,y);

return canvas;
}
});
rerenderer.platform.browser.core.render_top_component = (function rerenderer$platform$browser$core$render_top_component(canvas,component,stats){
if(cljs.core.truth_(stats)){
stats.begin();
} else {
}

var result = rerenderer.platform.browser.core.render_component(canvas,component);
if(cljs.core.truth_(stats)){
stats.end();
} else {
}

return result;
});
rerenderer.platform.core.render.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$browser,(function (component,options){
if(((!((component == null)))?(((false) || (component.rerenderer$component$IComponent$))?true:(((!component.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(rerenderer.component.IComponent,component):false)):cljs.core.native_satisfies_QMARK_(rerenderer.component.IComponent,component))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$satisfies_QMARK_,cljs.core.cst$sym$IComponent,cljs.core.cst$sym$component)], 0)))].join('')));
}

if(((!((component == null)))?(((false) || (component.rerenderer$platform$browser$core$IBrowser$))?true:(((!component.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(rerenderer.platform.browser.core.IBrowser,component):false)):cljs.core.native_satisfies_QMARK_(rerenderer.platform.browser.core.IBrowser,component))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$satisfies_QMARK_,cljs.core.cst$sym$IBrowser,cljs.core.cst$sym$component)], 0)))].join('')));
}

var G__14700 = (function (){
var _STAR_used_STAR_14701 = rerenderer.platform.browser.core._STAR_used_STAR_;
rerenderer.platform.browser.core._STAR_used_STAR_ = cljs.core.transient$(cljs.core.PersistentHashSet.EMPTY);

try{rerenderer.platform.browser.core.render_top_component(rerenderer.platform.browser.core.get_canvas(options),component,cljs.core.cst$kw$stats.cljs$core$IFn$_invoke$arity$1(options));

var used = cljs.core.persistent_BANG_(rerenderer.platform.browser.core._STAR_used_STAR_);
var next_cache = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
var seq__14702_14710 = cljs.core.seq(used);
var chunk__14705_14711 = null;
var count__14706_14712 = (0);
var i__14707_14713 = (0);
while(true){
if((i__14707_14713 < count__14706_14712)){
var path_14714 = chunk__14705_14711.cljs$core$IIndexed$_nth$arity$2(null,i__14707_14713);
var canvas_14715 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(rerenderer.platform.browser.core.cache,path_14714);
if(cljs.core.truth_(canvas_14715)){
cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(next_cache,path_14714,canvas_14715);

var G__14716 = seq__14702_14710;
var G__14717 = chunk__14705_14711;
var G__14718 = count__14706_14712;
var G__14719 = (i__14707_14713 + (1));
seq__14702_14710 = G__14716;
chunk__14705_14711 = G__14717;
count__14706_14712 = G__14718;
i__14707_14713 = G__14719;
continue;
} else {
var G__14720 = seq__14702_14710;
var G__14721 = chunk__14705_14711;
var G__14722 = count__14706_14712;
var G__14723 = (i__14707_14713 + (1));
seq__14702_14710 = G__14720;
chunk__14705_14711 = G__14721;
count__14706_14712 = G__14722;
i__14707_14713 = G__14723;
continue;
}
} else {
var temp__4657__auto___14724 = cljs.core.seq(seq__14702_14710);
if(temp__4657__auto___14724){
var seq__14702_14725__$1 = temp__4657__auto___14724;
if(cljs.core.chunked_seq_QMARK_(seq__14702_14725__$1)){
var c__6959__auto___14726 = cljs.core.chunk_first(seq__14702_14725__$1);
var G__14727 = cljs.core.chunk_rest(seq__14702_14725__$1);
var G__14728 = c__6959__auto___14726;
var G__14729 = cljs.core.count(c__6959__auto___14726);
var G__14730 = (0);
seq__14702_14710 = G__14727;
chunk__14705_14711 = G__14728;
count__14706_14712 = G__14729;
i__14707_14713 = G__14730;
continue;
} else {
var path_14731 = cljs.core.first(seq__14702_14725__$1);
var canvas_14732 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(rerenderer.platform.browser.core.cache,path_14731);
if(cljs.core.truth_(canvas_14732)){
cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(next_cache,path_14731,canvas_14732);

var G__14733 = cljs.core.next(seq__14702_14725__$1);
var G__14734 = null;
var G__14735 = (0);
var G__14736 = (0);
seq__14702_14710 = G__14733;
chunk__14705_14711 = G__14734;
count__14706_14712 = G__14735;
i__14707_14713 = G__14736;
continue;
} else {
var G__14737 = cljs.core.next(seq__14702_14725__$1);
var G__14738 = null;
var G__14739 = (0);
var G__14740 = (0);
seq__14702_14710 = G__14737;
chunk__14705_14711 = G__14738;
count__14706_14712 = G__14739;
i__14707_14713 = G__14740;
continue;
}
}
} else {
}
}
break;
}

return rerenderer.platform.browser.core.cache = next_cache;
}finally {rerenderer.platform.browser.core._STAR_used_STAR_ = _STAR_used_STAR_14701;
}});
return requestAnimationFrame(G__14700);
}));
rerenderer.platform.core.information.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$browser,(function (options){
var canvas = rerenderer.platform.browser.core.get_canvas(options);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,canvas.width,cljs.core.cst$kw$height,canvas.height,cljs.core.cst$kw$input,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$keyboard,null,cljs.core.cst$kw$mouse,null], null), null)], null);
}));
