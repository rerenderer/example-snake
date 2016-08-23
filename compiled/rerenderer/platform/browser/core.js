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

var map__16172 = rerenderer.component.props(component);
var map__16172__$1 = ((((!((map__16172 == null)))?((((map__16172.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16172.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16172):map__16172);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16172__$1,cljs.core.cst$kw$width);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16172__$1,cljs.core.cst$kw$height);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16172__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16172__$1,cljs.core.cst$kw$y);
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

var seq__16174_16178 = cljs.core.seq(rerenderer.component.childs(component));
var chunk__16175_16179 = null;
var count__16176_16180 = (0);
var i__16177_16181 = (0);
while(true){
if((i__16177_16181 < count__16176_16180)){
var child_16182 = chunk__16175_16179.cljs$core$IIndexed$_nth$arity$2(null,i__16177_16181);
rerenderer$platform$browser$core$render_component(canvas,child_16182);

var G__16183 = seq__16174_16178;
var G__16184 = chunk__16175_16179;
var G__16185 = count__16176_16180;
var G__16186 = (i__16177_16181 + (1));
seq__16174_16178 = G__16183;
chunk__16175_16179 = G__16184;
count__16176_16180 = G__16185;
i__16177_16181 = G__16186;
continue;
} else {
var temp__4657__auto___16187 = cljs.core.seq(seq__16174_16178);
if(temp__4657__auto___16187){
var seq__16174_16188__$1 = temp__4657__auto___16187;
if(cljs.core.chunked_seq_QMARK_(seq__16174_16188__$1)){
var c__6959__auto___16189 = cljs.core.chunk_first(seq__16174_16188__$1);
var G__16190 = cljs.core.chunk_rest(seq__16174_16188__$1);
var G__16191 = c__6959__auto___16189;
var G__16192 = cljs.core.count(c__6959__auto___16189);
var G__16193 = (0);
seq__16174_16178 = G__16190;
chunk__16175_16179 = G__16191;
count__16176_16180 = G__16192;
i__16177_16181 = G__16193;
continue;
} else {
var child_16194 = cljs.core.first(seq__16174_16188__$1);
rerenderer$platform$browser$core$render_component(canvas,child_16194);

var G__16195 = cljs.core.next(seq__16174_16188__$1);
var G__16196 = null;
var G__16197 = (0);
var G__16198 = (0);
seq__16174_16178 = G__16195;
chunk__16175_16179 = G__16196;
count__16176_16180 = G__16197;
i__16177_16181 = G__16198;
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

var G__16210 = (function (){
var _STAR_used_STAR_16211 = rerenderer.platform.browser.core._STAR_used_STAR_;
rerenderer.platform.browser.core._STAR_used_STAR_ = cljs.core.transient$(cljs.core.PersistentHashSet.EMPTY);

try{rerenderer.platform.browser.core.render_top_component(rerenderer.platform.browser.core.get_canvas(options),component,cljs.core.cst$kw$stats.cljs$core$IFn$_invoke$arity$1(options));

var used = cljs.core.persistent_BANG_(rerenderer.platform.browser.core._STAR_used_STAR_);
var next_cache = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
var seq__16212_16220 = cljs.core.seq(used);
var chunk__16215_16221 = null;
var count__16216_16222 = (0);
var i__16217_16223 = (0);
while(true){
if((i__16217_16223 < count__16216_16222)){
var path_16224 = chunk__16215_16221.cljs$core$IIndexed$_nth$arity$2(null,i__16217_16223);
var canvas_16225 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(rerenderer.platform.browser.core.cache,path_16224);
if(cljs.core.truth_(canvas_16225)){
cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(next_cache,path_16224,canvas_16225);

var G__16226 = seq__16212_16220;
var G__16227 = chunk__16215_16221;
var G__16228 = count__16216_16222;
var G__16229 = (i__16217_16223 + (1));
seq__16212_16220 = G__16226;
chunk__16215_16221 = G__16227;
count__16216_16222 = G__16228;
i__16217_16223 = G__16229;
continue;
} else {
var G__16230 = seq__16212_16220;
var G__16231 = chunk__16215_16221;
var G__16232 = count__16216_16222;
var G__16233 = (i__16217_16223 + (1));
seq__16212_16220 = G__16230;
chunk__16215_16221 = G__16231;
count__16216_16222 = G__16232;
i__16217_16223 = G__16233;
continue;
}
} else {
var temp__4657__auto___16234 = cljs.core.seq(seq__16212_16220);
if(temp__4657__auto___16234){
var seq__16212_16235__$1 = temp__4657__auto___16234;
if(cljs.core.chunked_seq_QMARK_(seq__16212_16235__$1)){
var c__6959__auto___16236 = cljs.core.chunk_first(seq__16212_16235__$1);
var G__16237 = cljs.core.chunk_rest(seq__16212_16235__$1);
var G__16238 = c__6959__auto___16236;
var G__16239 = cljs.core.count(c__6959__auto___16236);
var G__16240 = (0);
seq__16212_16220 = G__16237;
chunk__16215_16221 = G__16238;
count__16216_16222 = G__16239;
i__16217_16223 = G__16240;
continue;
} else {
var path_16241 = cljs.core.first(seq__16212_16235__$1);
var canvas_16242 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(rerenderer.platform.browser.core.cache,path_16241);
if(cljs.core.truth_(canvas_16242)){
cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(next_cache,path_16241,canvas_16242);

var G__16243 = cljs.core.next(seq__16212_16235__$1);
var G__16244 = null;
var G__16245 = (0);
var G__16246 = (0);
seq__16212_16220 = G__16243;
chunk__16215_16221 = G__16244;
count__16216_16222 = G__16245;
i__16217_16223 = G__16246;
continue;
} else {
var G__16247 = cljs.core.next(seq__16212_16235__$1);
var G__16248 = null;
var G__16249 = (0);
var G__16250 = (0);
seq__16212_16220 = G__16247;
chunk__16215_16221 = G__16248;
count__16216_16222 = G__16249;
i__16217_16223 = G__16250;
continue;
}
}
} else {
}
}
break;
}

return rerenderer.platform.browser.core.cache = next_cache;
}finally {rerenderer.platform.browser.core._STAR_used_STAR_ = _STAR_used_STAR_16211;
}});
return requestAnimationFrame(G__16210);
}));
rerenderer.platform.core.information.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$browser,(function (options){
var canvas = rerenderer.platform.browser.core.get_canvas(options);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,canvas.width,cljs.core.cst$kw$height,canvas.height,cljs.core.cst$kw$input,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$keyboard,null,cljs.core.cst$kw$mouse,null], null), null)], null);
}));
