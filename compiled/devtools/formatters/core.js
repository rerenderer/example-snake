// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('devtools.formatters.core');
goog.require('cljs.core');
goog.require('devtools.prefs');
goog.require('devtools.format');
goog.require('devtools.protocols');
goog.require('devtools.formatters.templating');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.state');
goog.require('devtools.formatters.markup');
goog.require('devtools.formatters.budgeting');
devtools.formatters.core.want_value_QMARK__STAR_ = (function devtools$formatters$core$want_value_QMARK__STAR_(value){
var and__6144__auto__ = cljs.core.not(devtools.formatters.state.prevent_recursion_QMARK_());
if(and__6144__auto__){
var or__6156__auto__ = devtools.formatters.helpers.cljs_value_QMARK_(value);
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return devtools.formatters.templating.surrogate_QMARK_(value);
}
} else {
return and__6144__auto__;
}
});
devtools.formatters.core.header_STAR_ = (function devtools$formatters$core$header_STAR_(value){
var json_ml = (cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_(value))?devtools.formatters.templating.render_markup(devtools.formatters.markup._LT_surrogate_header_GT_(value)):(cljs.core.truth_((function (){try{if(!((value == null))){
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
}catch (e15271){var e__12579__auto__ = e15271;
return false;
}})())?devtools.format._header(value):(cljs.core.truth_((function (){try{if(!((value == null))){
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
}catch (e15273){var e__12579__auto__ = e15273;
return false;
}})())?devtools.protocols._header(value):devtools.formatters.templating.render_markup(devtools.formatters.markup._LT_header_GT_(value))
)));
return devtools.formatters.budgeting.alter_json_ml_to_fit_in_remaining_budget_BANG_(value,json_ml);
});
devtools.formatters.core.has_body_STAR_ = (function devtools$formatters$core$has_body_STAR_(value){
if(cljs.core.truth_(devtools.formatters.budgeting.was_over_budget_QMARK__BANG_(value))){
return false;
} else {
return cljs.core.boolean$((cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_(value))?cljs.core.some_QMARK_(devtools.formatters.templating.get_surrogate_body(value)):(cljs.core.truth_((function (){try{if(!((value == null))){
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
}catch (e15279){var e__12579__auto__ = e15279;
return false;
}})())?devtools.format._has_body(value):(cljs.core.truth_((function (){try{if(!((value == null))){
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
}catch (e15281){var e__12579__auto__ = e15281;
return false;
}})())?devtools.protocols._has_body(value):false
))));
}
});
devtools.formatters.core.body_STAR_ = (function devtools$formatters$core$body_STAR_(value){
devtools.formatters.state.update_current_state_BANG_(devtools.formatters.state.reset_depth_limits);

if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_(value))){
return devtools.formatters.templating.render_markup(devtools.formatters.markup._LT_surrogate_body_GT_(value));
} else {
if(cljs.core.truth_((function (){try{if(!((value == null))){
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
}catch (e15287){var e__12579__auto__ = e15287;
return false;
}})())){
return devtools.format._body(value);
} else {
if(cljs.core.truth_((function (){try{if(!((value == null))){
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
}catch (e15289){var e__12579__auto__ = e15289;
return false;
}})())){
return devtools.protocols._body(value);
} else {
return null;
}
}
}
});
devtools.formatters.core.config_wrapper = (function devtools$formatters$core$config_wrapper(raw_fn){
return (function (value,config){
var _STAR_current_state_STAR_15292 = devtools.formatters.state._STAR_current_state_STAR_;
devtools.formatters.state._STAR_current_state_STAR_ = (function (){var or__6156__auto__ = config;
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return devtools.formatters.state.get_default_state();
}
})();

try{return (raw_fn.cljs$core$IFn$_invoke$arity$1 ? raw_fn.cljs$core$IFn$_invoke$arity$1(value) : raw_fn.call(null,value));
}finally {devtools.formatters.state._STAR_current_state_STAR_ = _STAR_current_state_STAR_15292;
}});
});
devtools.formatters.core.want_value_QMARK_ = devtools.formatters.core.config_wrapper(devtools.formatters.core.want_value_QMARK__STAR_);
devtools.formatters.core.header = devtools.formatters.core.config_wrapper(devtools.formatters.core.header_STAR_);
devtools.formatters.core.has_body = devtools.formatters.core.config_wrapper(devtools.formatters.core.has_body_STAR_);
devtools.formatters.core.body = devtools.formatters.core.config_wrapper(devtools.formatters.core.body_STAR_);
devtools.formatters.core.wrap_with_exception_guard = (function devtools$formatters$core$wrap_with_exception_guard(f){
return (function() { 
var G__15295__delegate = function (args){
try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}catch (e15294){var e = e15294;
console.error("CLJS DevTools internal error:",e);

return null;
}};
var G__15295 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15296__i = 0, G__15296__a = new Array(arguments.length -  0);
while (G__15296__i < G__15296__a.length) {G__15296__a[G__15296__i] = arguments[G__15296__i + 0]; ++G__15296__i;}
  args = new cljs.core.IndexedSeq(G__15296__a,0);
} 
return G__15295__delegate.call(this,args);};
G__15295.cljs$lang$maxFixedArity = 0;
G__15295.cljs$lang$applyTo = (function (arglist__15297){
var args = cljs.core.seq(arglist__15297);
return G__15295__delegate(args);
});
G__15295.cljs$core$IFn$_invoke$arity$variadic = G__15295__delegate;
return G__15295;
})()
;
});
devtools.formatters.core.build_api_call = (function devtools$formatters$core$build_api_call(raw_fn,pre_handler_key,post_handler_key){

var handler = (function (value,config){
var pre_handler = (function (){var or__6156__auto__ = devtools.prefs.pref(pre_handler_key);
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return cljs.core.identity;
}
})();
var post_handler = (function (){var or__6156__auto__ = devtools.prefs.pref(post_handler_key);
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return cljs.core.identity;
}
})();
var preprocessed_value = (pre_handler.cljs$core$IFn$_invoke$arity$1 ? pre_handler.cljs$core$IFn$_invoke$arity$1(value) : pre_handler.call(null,value));
var result = (cljs.core.truth_((devtools.formatters.core.want_value_QMARK_.cljs$core$IFn$_invoke$arity$2 ? devtools.formatters.core.want_value_QMARK_.cljs$core$IFn$_invoke$arity$2(preprocessed_value,config) : devtools.formatters.core.want_value_QMARK_.call(null,preprocessed_value,config)))?(raw_fn.cljs$core$IFn$_invoke$arity$2 ? raw_fn.cljs$core$IFn$_invoke$arity$2(preprocessed_value,config) : raw_fn.call(null,preprocessed_value,config)):null);
return (post_handler.cljs$core$IFn$_invoke$arity$1 ? post_handler.cljs$core$IFn$_invoke$arity$1(result) : post_handler.call(null,result));
});
return devtools.formatters.core.wrap_with_exception_guard(handler);
});
devtools.formatters.core.header_api_call = devtools.formatters.core.build_api_call(devtools.formatters.core.header,cljs.core.cst$kw$header_DASH_pre_DASH_handler,cljs.core.cst$kw$header_DASH_post_DASH_handler);
devtools.formatters.core.has_body_api_call = devtools.formatters.core.build_api_call(devtools.formatters.core.has_body,cljs.core.cst$kw$has_DASH_body_DASH_pre_DASH_handler,cljs.core.cst$kw$has_DASH_body_DASH_post_DASH_handler);
devtools.formatters.core.body_api_call = devtools.formatters.core.build_api_call(devtools.formatters.core.body,cljs.core.cst$kw$body_DASH_pre_DASH_handler,cljs.core.cst$kw$body_DASH_post_DASH_handler);
