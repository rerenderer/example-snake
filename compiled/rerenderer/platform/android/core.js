// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('rerenderer.platform.android.core');
goog.require('cljs.core');
goog.require('rerenderer.platform.core');
goog.require('rerenderer.platform.android.bus');
goog.require('rerenderer.platform.android.events');
goog.require('rerenderer.component');
if(cljs.core.truth_(rerenderer.platform.android.bus.available_QMARK_())){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(rerenderer.platform.core.platform,cljs.core.cst$kw$android) : cljs.core.reset_BANG_.call(null,rerenderer.platform.core.platform,cljs.core.cst$kw$android));
} else {
}

/**
 * Component that implement that protocol support rendering on Android.
 * @interface
 */
rerenderer.platform.android.core.IAndroid = function(){};

/**
 * Name of android-side primitive.
 */
rerenderer.platform.android.core.android_primitive = (function rerenderer$platform$android$core$android_primitive(this$){
if((!((this$ == null))) && (!((this$.rerenderer$platform$android$core$IAndroid$android_primitive$arity$1 == null)))){
return this$.rerenderer$platform$android$core$IAndroid$android_primitive$arity$1(this$);
} else {
var x__6811__auto__ = (((this$ == null))?null:this$);
var m__6812__auto__ = (rerenderer.platform.android.core.android_primitive[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return (m__6812__auto__.cljs$core$IFn$_invoke$arity$1 ? m__6812__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__6812__auto__.call(null,this$));
} else {
var m__6812__auto____$1 = (rerenderer.platform.android.core.android_primitive["_"]);
if(!((m__6812__auto____$1 == null))){
return (m__6812__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__6812__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__6812__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IAndroid.android-primitive",this$);
}
}
}
});

rerenderer.platform.android.core.serialize_component = (function rerenderer$platform$android$core$serialize_component(component){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [rerenderer.platform.android.core.android_primitive(component),rerenderer.component.props(component),(function (){var iter__6928__auto__ = (function rerenderer$platform$android$core$serialize_component_$_iter__21415(s__21416){
return (new cljs.core.LazySeq(null,(function (){
var s__21416__$1 = s__21416;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__21416__$1);
if(temp__4657__auto__){
var s__21416__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21416__$2)){
var c__6926__auto__ = cljs.core.chunk_first(s__21416__$2);
var size__6927__auto__ = cljs.core.count(c__6926__auto__);
var b__21418 = cljs.core.chunk_buffer(size__6927__auto__);
if((function (){var i__21417 = (0);
while(true){
if((i__21417 < size__6927__auto__)){
var child = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6926__auto__,i__21417);
cljs.core.chunk_append(b__21418,rerenderer$platform$android$core$serialize_component(child));

var G__21421 = (i__21417 + (1));
i__21417 = G__21421;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21418),rerenderer$platform$android$core$serialize_component_$_iter__21415(cljs.core.chunk_rest(s__21416__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21418),null);
}
} else {
var child = cljs.core.first(s__21416__$2);
return cljs.core.cons(rerenderer$platform$android$core$serialize_component(child),rerenderer$platform$android$core$serialize_component_$_iter__21415(cljs.core.rest(s__21416__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__6928__auto__(rerenderer.component.childs(component));
})(),(rerenderer.component.path.cljs$core$IFn$_invoke$arity$1 ? rerenderer.component.path.cljs$core$IFn$_invoke$arity$1(component) : rerenderer.component.path.call(null,component))], null);
});
rerenderer.platform.core.render.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$android,(function (component,options){
return rerenderer.platform.android.bus.render_BANG_(rerenderer.platform.android.core.serialize_component(component),options);
}));
rerenderer.platform.core.listen_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$android,(function (ch,_){
return rerenderer.platform.android.events.bind_event_BANG_(ch);
}));
rerenderer.platform.core.information.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$android,(function (_){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(rerenderer.platform.android.bus.information) : cljs.core.deref.call(null,rerenderer.platform.android.bus.information));
}));
