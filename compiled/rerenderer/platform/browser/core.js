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

var map__19284 = rerenderer.component.props(component);
var map__19284__$1 = ((((!((map__19284 == null)))?((((map__19284.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19284.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19284):map__19284);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19284__$1,cljs.core.cst$kw$width);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19284__$1,cljs.core.cst$kw$height);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19284__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19284__$1,cljs.core.cst$kw$y);
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

var seq__19286_19290 = cljs.core.seq(rerenderer.component.childs(component));
var chunk__19287_19291 = null;
var count__19288_19292 = (0);
var i__19289_19293 = (0);
while(true){
if((i__19289_19293 < count__19288_19292)){
var child_19294 = chunk__19287_19291.cljs$core$IIndexed$_nth$arity$2(null,i__19289_19293);
rerenderer$platform$browser$core$render_component(canvas,child_19294);

var G__19295 = seq__19286_19290;
var G__19296 = chunk__19287_19291;
var G__19297 = count__19288_19292;
var G__19298 = (i__19289_19293 + (1));
seq__19286_19290 = G__19295;
chunk__19287_19291 = G__19296;
count__19288_19292 = G__19297;
i__19289_19293 = G__19298;
continue;
} else {
var temp__4657__auto___19299 = cljs.core.seq(seq__19286_19290);
if(temp__4657__auto___19299){
var seq__19286_19300__$1 = temp__4657__auto___19299;
if(cljs.core.chunked_seq_QMARK_(seq__19286_19300__$1)){
var c__6959__auto___19301 = cljs.core.chunk_first(seq__19286_19300__$1);
var G__19302 = cljs.core.chunk_rest(seq__19286_19300__$1);
var G__19303 = c__6959__auto___19301;
var G__19304 = cljs.core.count(c__6959__auto___19301);
var G__19305 = (0);
seq__19286_19290 = G__19302;
chunk__19287_19291 = G__19303;
count__19288_19292 = G__19304;
i__19289_19293 = G__19305;
continue;
} else {
var child_19306 = cljs.core.first(seq__19286_19300__$1);
rerenderer$platform$browser$core$render_component(canvas,child_19306);

var G__19307 = cljs.core.next(seq__19286_19300__$1);
var G__19308 = null;
var G__19309 = (0);
var G__19310 = (0);
seq__19286_19290 = G__19307;
chunk__19287_19291 = G__19308;
count__19288_19292 = G__19309;
i__19289_19293 = G__19310;
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

var G__19322 = (function (){
var _STAR_used_STAR_19323 = rerenderer.platform.browser.core._STAR_used_STAR_;
rerenderer.platform.browser.core._STAR_used_STAR_ = cljs.core.transient$(cljs.core.PersistentHashSet.EMPTY);

try{rerenderer.platform.browser.core.render_top_component(rerenderer.platform.browser.core.get_canvas(options),component,cljs.core.cst$kw$stats.cljs$core$IFn$_invoke$arity$1(options));

var used = cljs.core.persistent_BANG_(rerenderer.platform.browser.core._STAR_used_STAR_);
var next_cache = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
var seq__19324_19332 = cljs.core.seq(used);
var chunk__19327_19333 = null;
var count__19328_19334 = (0);
var i__19329_19335 = (0);
while(true){
if((i__19329_19335 < count__19328_19334)){
var path_19336 = chunk__19327_19333.cljs$core$IIndexed$_nth$arity$2(null,i__19329_19335);
var canvas_19337 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(rerenderer.platform.browser.core.cache,path_19336);
if(cljs.core.truth_(canvas_19337)){
cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(next_cache,path_19336,canvas_19337);

var G__19338 = seq__19324_19332;
var G__19339 = chunk__19327_19333;
var G__19340 = count__19328_19334;
var G__19341 = (i__19329_19335 + (1));
seq__19324_19332 = G__19338;
chunk__19327_19333 = G__19339;
count__19328_19334 = G__19340;
i__19329_19335 = G__19341;
continue;
} else {
var G__19342 = seq__19324_19332;
var G__19343 = chunk__19327_19333;
var G__19344 = count__19328_19334;
var G__19345 = (i__19329_19335 + (1));
seq__19324_19332 = G__19342;
chunk__19327_19333 = G__19343;
count__19328_19334 = G__19344;
i__19329_19335 = G__19345;
continue;
}
} else {
var temp__4657__auto___19346 = cljs.core.seq(seq__19324_19332);
if(temp__4657__auto___19346){
var seq__19324_19347__$1 = temp__4657__auto___19346;
if(cljs.core.chunked_seq_QMARK_(seq__19324_19347__$1)){
var c__6959__auto___19348 = cljs.core.chunk_first(seq__19324_19347__$1);
var G__19349 = cljs.core.chunk_rest(seq__19324_19347__$1);
var G__19350 = c__6959__auto___19348;
var G__19351 = cljs.core.count(c__6959__auto___19348);
var G__19352 = (0);
seq__19324_19332 = G__19349;
chunk__19327_19333 = G__19350;
count__19328_19334 = G__19351;
i__19329_19335 = G__19352;
continue;
} else {
var path_19353 = cljs.core.first(seq__19324_19347__$1);
var canvas_19354 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(rerenderer.platform.browser.core.cache,path_19353);
if(cljs.core.truth_(canvas_19354)){
cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(next_cache,path_19353,canvas_19354);

var G__19355 = cljs.core.next(seq__19324_19347__$1);
var G__19356 = null;
var G__19357 = (0);
var G__19358 = (0);
seq__19324_19332 = G__19355;
chunk__19327_19333 = G__19356;
count__19328_19334 = G__19357;
i__19329_19335 = G__19358;
continue;
} else {
var G__19359 = cljs.core.next(seq__19324_19347__$1);
var G__19360 = null;
var G__19361 = (0);
var G__19362 = (0);
seq__19324_19332 = G__19359;
chunk__19327_19333 = G__19360;
count__19328_19334 = G__19361;
i__19329_19335 = G__19362;
continue;
}
}
} else {
}
}
break;
}

return rerenderer.platform.browser.core.cache = next_cache;
}finally {rerenderer.platform.browser.core._STAR_used_STAR_ = _STAR_used_STAR_19323;
}});
return requestAnimationFrame(G__19322);
}));
rerenderer.platform.core.information.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$browser,(function (options){
var canvas = rerenderer.platform.browser.core.get_canvas(options);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,canvas.width,cljs.core.cst$kw$height,canvas.height,cljs.core.cst$kw$input,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$keyboard,null,cljs.core.cst$kw$mouse,null], null), null)], null);
}));
