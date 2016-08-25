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

var map__15396 = rerenderer.component.props(component);
var map__15396__$1 = ((((!((map__15396 == null)))?((((map__15396.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15396.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15396):map__15396);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15396__$1,cljs.core.cst$kw$width);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15396__$1,cljs.core.cst$kw$height);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15396__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15396__$1,cljs.core.cst$kw$y);
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

var seq__15398_15402 = cljs.core.seq(rerenderer.component.childs(component));
var chunk__15399_15403 = null;
var count__15400_15404 = (0);
var i__15401_15405 = (0);
while(true){
if((i__15401_15405 < count__15400_15404)){
var child_15406 = chunk__15399_15403.cljs$core$IIndexed$_nth$arity$2(null,i__15401_15405);
rerenderer$platform$browser$core$render_component(canvas,child_15406);

var G__15407 = seq__15398_15402;
var G__15408 = chunk__15399_15403;
var G__15409 = count__15400_15404;
var G__15410 = (i__15401_15405 + (1));
seq__15398_15402 = G__15407;
chunk__15399_15403 = G__15408;
count__15400_15404 = G__15409;
i__15401_15405 = G__15410;
continue;
} else {
var temp__4657__auto___15411 = cljs.core.seq(seq__15398_15402);
if(temp__4657__auto___15411){
var seq__15398_15412__$1 = temp__4657__auto___15411;
if(cljs.core.chunked_seq_QMARK_(seq__15398_15412__$1)){
var c__6959__auto___15413 = cljs.core.chunk_first(seq__15398_15412__$1);
var G__15414 = cljs.core.chunk_rest(seq__15398_15412__$1);
var G__15415 = c__6959__auto___15413;
var G__15416 = cljs.core.count(c__6959__auto___15413);
var G__15417 = (0);
seq__15398_15402 = G__15414;
chunk__15399_15403 = G__15415;
count__15400_15404 = G__15416;
i__15401_15405 = G__15417;
continue;
} else {
var child_15418 = cljs.core.first(seq__15398_15412__$1);
rerenderer$platform$browser$core$render_component(canvas,child_15418);

var G__15419 = cljs.core.next(seq__15398_15412__$1);
var G__15420 = null;
var G__15421 = (0);
var G__15422 = (0);
seq__15398_15402 = G__15419;
chunk__15399_15403 = G__15420;
count__15400_15404 = G__15421;
i__15401_15405 = G__15422;
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

var G__15434 = (function (){
var _STAR_used_STAR_15435 = rerenderer.platform.browser.core._STAR_used_STAR_;
rerenderer.platform.browser.core._STAR_used_STAR_ = cljs.core.transient$(cljs.core.PersistentHashSet.EMPTY);

try{rerenderer.platform.browser.core.render_top_component(rerenderer.platform.browser.core.get_canvas(options),component,cljs.core.cst$kw$stats.cljs$core$IFn$_invoke$arity$1(options));

var used = cljs.core.persistent_BANG_(rerenderer.platform.browser.core._STAR_used_STAR_);
var next_cache = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
var seq__15436_15444 = cljs.core.seq(used);
var chunk__15439_15445 = null;
var count__15440_15446 = (0);
var i__15441_15447 = (0);
while(true){
if((i__15441_15447 < count__15440_15446)){
var path_15448 = chunk__15439_15445.cljs$core$IIndexed$_nth$arity$2(null,i__15441_15447);
var canvas_15449 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(rerenderer.platform.browser.core.cache,path_15448);
if(cljs.core.truth_(canvas_15449)){
cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(next_cache,path_15448,canvas_15449);

var G__15450 = seq__15436_15444;
var G__15451 = chunk__15439_15445;
var G__15452 = count__15440_15446;
var G__15453 = (i__15441_15447 + (1));
seq__15436_15444 = G__15450;
chunk__15439_15445 = G__15451;
count__15440_15446 = G__15452;
i__15441_15447 = G__15453;
continue;
} else {
var G__15454 = seq__15436_15444;
var G__15455 = chunk__15439_15445;
var G__15456 = count__15440_15446;
var G__15457 = (i__15441_15447 + (1));
seq__15436_15444 = G__15454;
chunk__15439_15445 = G__15455;
count__15440_15446 = G__15456;
i__15441_15447 = G__15457;
continue;
}
} else {
var temp__4657__auto___15458 = cljs.core.seq(seq__15436_15444);
if(temp__4657__auto___15458){
var seq__15436_15459__$1 = temp__4657__auto___15458;
if(cljs.core.chunked_seq_QMARK_(seq__15436_15459__$1)){
var c__6959__auto___15460 = cljs.core.chunk_first(seq__15436_15459__$1);
var G__15461 = cljs.core.chunk_rest(seq__15436_15459__$1);
var G__15462 = c__6959__auto___15460;
var G__15463 = cljs.core.count(c__6959__auto___15460);
var G__15464 = (0);
seq__15436_15444 = G__15461;
chunk__15439_15445 = G__15462;
count__15440_15446 = G__15463;
i__15441_15447 = G__15464;
continue;
} else {
var path_15465 = cljs.core.first(seq__15436_15459__$1);
var canvas_15466 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(rerenderer.platform.browser.core.cache,path_15465);
if(cljs.core.truth_(canvas_15466)){
cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(next_cache,path_15465,canvas_15466);

var G__15467 = cljs.core.next(seq__15436_15459__$1);
var G__15468 = null;
var G__15469 = (0);
var G__15470 = (0);
seq__15436_15444 = G__15467;
chunk__15439_15445 = G__15468;
count__15440_15446 = G__15469;
i__15441_15447 = G__15470;
continue;
} else {
var G__15471 = cljs.core.next(seq__15436_15459__$1);
var G__15472 = null;
var G__15473 = (0);
var G__15474 = (0);
seq__15436_15444 = G__15471;
chunk__15439_15445 = G__15472;
count__15440_15446 = G__15473;
i__15441_15447 = G__15474;
continue;
}
}
} else {
}
}
break;
}

return rerenderer.platform.browser.core.cache = next_cache;
}finally {rerenderer.platform.browser.core._STAR_used_STAR_ = _STAR_used_STAR_15435;
}});
return requestAnimationFrame(G__15434);
}));
rerenderer.platform.core.information.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$browser,(function (options){
var canvas = rerenderer.platform.browser.core.get_canvas(options);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,canvas.width,cljs.core.cst$kw$height,canvas.height,cljs.core.cst$kw$input,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$keyboard,null,cljs.core.cst$kw$mouse,null], null), null)], null);
}));
