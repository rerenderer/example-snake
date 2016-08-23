// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('rerenderer.component');
goog.require('cljs.core');
goog.require('clojure.string');

/**
 * For creating component you should implement IComponent, platform-specific protocls
 * (IAndroid, etc) and Object with toString, like:
 * 
 * ```
 * (reify
 *   IComponent
 *   (tag [_] "rectangle")
 *   (childs [_] list-of-childs)
 *   (props [_] map-of-props)
 *   Object
 *   (toString [this] (component->string this))
 *   IBrowser
 *   ...
 *   IAndroid
 *   ...)
 * ```
 * @interface
 */
rerenderer.component.IComponent = function(){};

/**
 * Component's tag, like `rectangle`.
 */
rerenderer.component.tag = (function rerenderer$component$tag(this$){
if((!((this$ == null))) && (!((this$.rerenderer$component$IComponent$tag$arity$1 == null)))){
return this$.rerenderer$component$IComponent$tag$arity$1(this$);
} else {
var x__6811__auto__ = (((this$ == null))?null:this$);
var m__6812__auto__ = (rerenderer.component.tag[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return (m__6812__auto__.cljs$core$IFn$_invoke$arity$1 ? m__6812__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__6812__auto__.call(null,this$));
} else {
var m__6812__auto____$1 = (rerenderer.component.tag["_"]);
if(!((m__6812__auto____$1 == null))){
return (m__6812__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__6812__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__6812__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IComponent.tag",this$);
}
}
}
});

/**
 * Component's childs if it nested.
 */
rerenderer.component.childs = (function rerenderer$component$childs(this$){
if((!((this$ == null))) && (!((this$.rerenderer$component$IComponent$childs$arity$1 == null)))){
return this$.rerenderer$component$IComponent$childs$arity$1(this$);
} else {
var x__6811__auto__ = (((this$ == null))?null:this$);
var m__6812__auto__ = (rerenderer.component.childs[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return (m__6812__auto__.cljs$core$IFn$_invoke$arity$1 ? m__6812__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__6812__auto__.call(null,this$));
} else {
var m__6812__auto____$1 = (rerenderer.component.childs["_"]);
if(!((m__6812__auto____$1 == null))){
return (m__6812__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__6812__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__6812__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IComponent.childs",this$);
}
}
}
});

/**
 * Component's properties, like `{:width 100}`.
 */
rerenderer.component.props = (function rerenderer$component$props(this$){
if((!((this$ == null))) && (!((this$.rerenderer$component$IComponent$props$arity$1 == null)))){
return this$.rerenderer$component$IComponent$props$arity$1(this$);
} else {
var x__6811__auto__ = (((this$ == null))?null:this$);
var m__6812__auto__ = (rerenderer.component.props[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return (m__6812__auto__.cljs$core$IFn$_invoke$arity$1 ? m__6812__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__6812__auto__.call(null,this$));
} else {
var m__6812__auto____$1 = (rerenderer.component.props["_"]);
if(!((m__6812__auto____$1 == null))){
return (m__6812__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__6812__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__6812__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IComponent.props",this$);
}
}
}
});

/**
 * Returns flatten list of non-empty childs.
 */
rerenderer.component.prepare_childs = (function rerenderer$component$prepare_childs(childs){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten(childs));
});
/**
 * Translates component to string, thath looks like component usage in views.
 */
rerenderer.component.component__GT_string = (function rerenderer$component$component__GT_string(component){
var indent = clojure.string.join.cljs$core$IFn$_invoke$arity$1((function (){var iter__6928__auto__ = (function rerenderer$component$component__GT_string_$_iter__11811(s__11812){
return (new cljs.core.LazySeq(null,(function (){
var s__11812__$1 = s__11812;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__11812__$1);
if(temp__4657__auto__){
var s__11812__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__11812__$2)){
var c__6926__auto__ = cljs.core.chunk_first(s__11812__$2);
var size__6927__auto__ = cljs.core.count(c__6926__auto__);
var b__11814 = cljs.core.chunk_buffer(size__6927__auto__);
if((function (){var i__11813 = (0);
while(true){
if((i__11813 < size__6927__auto__)){
var _ = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6926__auto__,i__11813);
cljs.core.chunk_append(b__11814," ");

var G__11817 = (i__11813 + (1));
i__11813 = G__11817;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__11814),rerenderer$component$component__GT_string_$_iter__11811(cljs.core.chunk_rest(s__11812__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__11814),null);
}
} else {
var _ = cljs.core.first(s__11812__$2);
return cljs.core.cons(" ",rerenderer$component$component__GT_string_$_iter__11811(cljs.core.rest(s__11812__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__6928__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(rerenderer.component.tag(component))));
})());
var childs_lines = cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (indent){
return (function (p1__11804_SHARP_){
return clojure.string.split_lines(rerenderer$component$component__GT_string(p1__11804_SHARP_));
});})(indent))
,rerenderer.component.childs(component)));
var childs_text = clojure.string.join.cljs$core$IFn$_invoke$arity$2([cljs.core.str("\n"),cljs.core.str(indent)].join(''),childs_lines);
return [cljs.core.str("("),cljs.core.str(rerenderer.component.tag(component)),cljs.core.str(" "),cljs.core.str(rerenderer.component.props(component)),cljs.core.str((((cljs.core.count(childs_text) > (0)))?[cljs.core.str("\n"),cljs.core.str(indent),cljs.core.str(childs_text)].join(''):"")),cljs.core.str(")")].join('');
});
rerenderer.component.child_path = (function rerenderer$component$child_path(child){
var map__11820 = rerenderer.component.props(child);
var map__11820__$1 = ((((!((map__11820 == null)))?((((map__11820.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11820.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11820):map__11820);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11820__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11820__$1,cljs.core.cst$kw$y);
return [cljs.core.str((rerenderer.component.path.cljs$core$IFn$_invoke$arity$1 ? rerenderer.component.path.cljs$core$IFn$_invoke$arity$1(child) : rerenderer.component.path.call(null,child))),cljs.core.str(":("),cljs.core.str(x),cljs.core.str(", "),cljs.core.str(y),cljs.core.str(")")].join('');
});
/**
 * Returns full reversed components path, from childs to component.
 */
rerenderer.component.path = cljs.core.memoize((function (component){
var cache_props = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(rerenderer.component.props(component),cljs.core.cst$kw$x,cljs.core.array_seq([cljs.core.cst$kw$y], 0));
return [cljs.core.str(rerenderer.component.tag(component)),cljs.core.str(":"),cljs.core.str(cache_props),cljs.core.str(":["),cljs.core.str(clojure.string.join.cljs$core$IFn$_invoke$arity$2(":",cljs.core.map.cljs$core$IFn$_invoke$arity$2(rerenderer.component.child_path,rerenderer.component.childs(component)))),cljs.core.str("]")].join('');
}));
/**
 * Converts color to rgba, supported formats: `#ff0000`, `rgb(255, 255, 0)`, `argb(255, 0, 0, 0)`, `red`.
 */
rerenderer.component.__GT_rgba = cljs.core.memoize((function (color){
var map__11822 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic((function (){var G__11823 = cljs.core.clj__GT_js(color);
return tinycolor(G__11823);
})().toRgb(),cljs.core.array_seq([cljs.core.cst$kw$keywordize_DASH_keys,true], 0));
var map__11822__$1 = ((((!((map__11822 == null)))?((((map__11822.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11822.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11822):map__11822);
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11822__$1,cljs.core.cst$kw$r);
var g = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11822__$1,cljs.core.cst$kw$g);
var b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11822__$1,cljs.core.cst$kw$b);
var a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11822__$1,cljs.core.cst$kw$a);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b,((255) * a)], null);
}));
/**
 * Get full url from relative or absolute url.
 */
rerenderer.component.__GT_url = (function rerenderer$component$__GT_url(src){
if((clojure.string.starts_with_QMARK_(src,"http://")) || (clojure.string.starts_with_QMARK_(src,"https://"))){
return src;
} else {
return [cljs.core.str(document.location.protocol),cljs.core.str("//"),cljs.core.str(document.location.host),cljs.core.str(src)].join('');
}
});
