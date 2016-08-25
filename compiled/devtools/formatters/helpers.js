// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('devtools.formatters.helpers');
goog.require('cljs.core');
goog.require('devtools.prefs');
goog.require('devtools.munging');
goog.require('devtools.format');
goog.require('devtools.protocols');
devtools.formatters.helpers.pref = (function devtools$formatters$helpers$pref(v){
while(true){
if((v instanceof cljs.core.Keyword)){
var G__14826 = devtools.prefs.pref(v);
v = G__14826;
continue;
} else {
return v;
}
break;
}
});
devtools.formatters.helpers.get_constructor = (function devtools$formatters$helpers$get_constructor(o){
return goog.object.get(o,"constructor");
});
devtools.formatters.helpers.is_prototype_QMARK_ = (function devtools$formatters$helpers$is_prototype_QMARK_(o){
return (o.constructor.prototype === o);
});
devtools.formatters.helpers.is_js_symbol_QMARK_ = (function devtools$formatters$helpers$is_js_symbol_QMARK_(o){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(goog.typeOf(o),"symbol");
});
devtools.formatters.helpers.cljs_function_QMARK_ = (function devtools$formatters$helpers$cljs_function_QMARK_(value){
var and__6144__auto__ = cljs.core.not(devtools.formatters.helpers.pref(cljs.core.cst$kw$disable_DASH_cljs_DASH_fn_DASH_formatting));
if(and__6144__auto__){
var and__6144__auto____$1 = !(cljs.core.var_QMARK_(value));
if(and__6144__auto____$1){
return devtools.munging.cljs_fn_QMARK_(value);
} else {
return and__6144__auto____$1;
}
} else {
return and__6144__auto__;
}
});
devtools.formatters.helpers.has_formatting_protocol_QMARK_ = (function devtools$formatters$helpers$has_formatting_protocol_QMARK_(value){
var or__6156__auto__ = (function (){try{if(!((value == null))){
if(((value.cljs$lang$protocol_mask$partition0$ & (2147483648))) || (value.cljs$core$IPrintWithWriter$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IPrintWithWriter,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IPrintWithWriter,value);
}
}catch (e14839){var e__12579__auto__ = e14839;
return false;
}})();
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
var or__6156__auto____$1 = (function (){try{if(!((value == null))){
if((false) || (value.devtools$format$IDevtoolsFormat$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(devtools.format.IDevtoolsFormat,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(devtools.format.IDevtoolsFormat,value);
}
}catch (e14843){var e__12579__auto__ = e14843;
return false;
}})();
if(cljs.core.truth_(or__6156__auto____$1)){
return or__6156__auto____$1;
} else {
try{if(!((value == null))){
if((false) || (value.devtools$protocols$IFormat$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(devtools.protocols.IFormat,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(devtools.protocols.IFormat,value);
}
}catch (e14845){var e__12579__auto__ = e14845;
return false;
}}
}
});
devtools.formatters.helpers.cljs_type_QMARK_ = (function devtools$formatters$helpers$cljs_type_QMARK_(f){
var and__6144__auto__ = goog.isObject(f);
if(cljs.core.truth_(and__6144__auto__)){
var and__6144__auto____$1 = cljs.core.not(devtools.formatters.helpers.is_prototype_QMARK_(f));
if(and__6144__auto____$1){
return goog.object.get(f,"cljs$lang$type");
} else {
return and__6144__auto____$1;
}
} else {
return and__6144__auto__;
}
});
devtools.formatters.helpers.cljs_instance_QMARK_ = (function devtools$formatters$helpers$cljs_instance_QMARK_(value){
var and__6144__auto__ = goog.isObject(value);
if(cljs.core.truth_(and__6144__auto__)){
return devtools.formatters.helpers.cljs_type_QMARK_(devtools.formatters.helpers.get_constructor(value));
} else {
return and__6144__auto__;
}
});
devtools.formatters.helpers.cljs_land_value_QMARK_ = (function devtools$formatters$helpers$cljs_land_value_QMARK_(value){
var or__6156__auto__ = devtools.formatters.helpers.cljs_instance_QMARK_(value);
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return devtools.formatters.helpers.has_formatting_protocol_QMARK_(value);
}
});
devtools.formatters.helpers.cljs_value_QMARK_ = (function devtools$formatters$helpers$cljs_value_QMARK_(value){
var and__6144__auto__ = (function (){var or__6156__auto__ = devtools.formatters.helpers.cljs_land_value_QMARK_(value);
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return devtools.formatters.helpers.cljs_function_QMARK_(value);
}
})();
if(cljs.core.truth_(and__6144__auto__)){
return (cljs.core.not(devtools.formatters.helpers.is_prototype_QMARK_(value))) && (cljs.core.not(devtools.formatters.helpers.is_js_symbol_QMARK_(value)));
} else {
return and__6144__auto__;
}
});
devtools.formatters.helpers.bool_QMARK_ = (function devtools$formatters$helpers$bool_QMARK_(value){
return (value === true) || (value === false);
});
devtools.formatters.helpers.instance_of_a_well_known_type_QMARK_ = (function devtools$formatters$helpers$instance_of_a_well_known_type_QMARK_(value){
var well_known_types = devtools.formatters.helpers.pref(cljs.core.cst$kw$well_DASH_known_DASH_types);
var constructor_fn = devtools.formatters.helpers.get_constructor(value);
var vec__14848 = devtools.munging.parse_constructor_info(constructor_fn);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14848,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14848,(1),null);
var fully_qualified_type_name = [cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(name)].join('');
return cljs.core.contains_QMARK_(well_known_types,fully_qualified_type_name);
});
devtools.formatters.helpers.should_render_instance_QMARK_ = (function devtools$formatters$helpers$should_render_instance_QMARK_(value){
var and__6144__auto__ = devtools.formatters.helpers.cljs_instance_QMARK_(value);
if(cljs.core.truth_(and__6144__auto__)){
return cljs.core.not(devtools.formatters.helpers.instance_of_a_well_known_type_QMARK_(value));
} else {
return and__6144__auto__;
}
});
devtools.formatters.helpers.directly_printable_QMARK_ = (function devtools$formatters$helpers$directly_printable_QMARK_(value){
var or__6156__auto__ = typeof value === 'string';
if(or__6156__auto__){
return or__6156__auto__;
} else {
var or__6156__auto____$1 = typeof value === 'number';
if(or__6156__auto____$1){
return or__6156__auto____$1;
} else {
return devtools.formatters.helpers.bool_QMARK_(value);
}
}
});
devtools.formatters.helpers.abbreviated_QMARK_ = (function devtools$formatters$helpers$abbreviated_QMARK_(template){
return cljs.core.some((function (p1__14849_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(devtools.formatters.helpers.pref(cljs.core.cst$kw$more_DASH_marker),p1__14849_SHARP_);
}),template);
});
devtools.formatters.helpers.abbreviate_long_string = (function devtools$formatters$helpers$abbreviate_long_string(string,marker,prefix_limit,postfix_limit){
var prefix = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.take.cljs$core$IFn$_invoke$arity$2(prefix_limit,string));
var postfix = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.take_last(postfix_limit,string));
return [cljs.core.str(prefix),cljs.core.str(marker),cljs.core.str(postfix)].join('');
});
devtools.formatters.helpers.get_more_marker = (function devtools$formatters$helpers$get_more_marker(more_count){
return [cljs.core.str(devtools.formatters.helpers.pref(cljs.core.cst$kw$plus_DASH_symbol)),cljs.core.str(more_count),cljs.core.str(devtools.formatters.helpers.pref(cljs.core.cst$kw$more_DASH_symbol))].join('');
});
devtools.formatters.helpers.wrap_arity = (function devtools$formatters$helpers$wrap_arity(arity){
var args_open_symbol = devtools.formatters.helpers.pref(cljs.core.cst$kw$args_DASH_open_DASH_symbol);
var args_close_symbol = devtools.formatters.helpers.pref(cljs.core.cst$kw$args_DASH_close_DASH_symbol);
return [cljs.core.str(args_open_symbol),cljs.core.str(arity),cljs.core.str(args_close_symbol)].join('');
});
devtools.formatters.helpers.fetch_field_value = (function devtools$formatters$helpers$fetch_field_value(obj,field){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [field,(function (){var G__14852 = obj;
var G__14853 = cljs.core.munge(field);
return goog.object.get(G__14852,G__14853);
})()], null);
});
devtools.formatters.helpers.fetch_fields_values = (function devtools$formatters$helpers$fetch_fields_values(obj,fields){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(devtools.formatters.helpers.fetch_field_value,obj),fields);
});
devtools.formatters.helpers.expandable_QMARK_ = (function devtools$formatters$helpers$expandable_QMARK_(obj){
if(cljs.core.seqable_QMARK_(obj)){
var temp__4655__auto__ = devtools.formatters.helpers.pref((cljs.core.truth_(devtools.formatters.helpers.instance_of_a_well_known_type_QMARK_(obj))?cljs.core.cst$kw$min_DASH_expandable_DASH_sequable_DASH_count_DASH_for_DASH_well_DASH_known_DASH_types:cljs.core.cst$kw$min_DASH_expandable_DASH_sequable_DASH_count));
if(cljs.core.truth_(temp__4655__auto__)){
var min_count = temp__4655__auto__;
if(!(cljs.core.empty_QMARK_(obj))){
var actual_count = cljs.core.bounded_count(min_count,obj);
return (actual_count >= min_count);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
devtools.formatters.helpers.should_render_QMARK_ = (function devtools$formatters$helpers$should_render_QMARK_(pref_key,value,default_check){
var temp__4655__auto__ = devtools.formatters.helpers.pref(pref_key);
if(cljs.core.truth_(temp__4655__auto__)){
var render_pref = temp__4655__auto__;
if(render_pref === true){
return (default_check.cljs$core$IFn$_invoke$arity$1 ? default_check.cljs$core$IFn$_invoke$arity$1(value) : default_check.call(null,value));
} else {
if(cljs.core.fn_QMARK_(render_pref)){
return (render_pref.cljs$core$IFn$_invoke$arity$1 ? render_pref.cljs$core$IFn$_invoke$arity$1(value) : render_pref.call(null,value));
} else {
return null;
}
}
} else {
return null;
}
});
