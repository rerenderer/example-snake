// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('devtools.formatters');
goog.require('cljs.core');
goog.require('goog.labs.userAgent.browser');
goog.require('devtools.prefs');
goog.require('devtools.util');
goog.require('devtools.formatters.core');
devtools.formatters._STAR_installed_STAR_ = false;
devtools.formatters._STAR_sanitizer_enabled_STAR_ = true;
devtools.formatters._STAR_monitor_enabled_STAR_ = false;
devtools.formatters.obsolete_formatter_key = "devtoolsFormatter";
devtools.formatters.available_QMARK_ = (function devtools$formatters$available_QMARK_(){
var and__6144__auto__ = goog.labs.userAgent.browser.isChrome();
if(cljs.core.truth_(and__6144__auto__)){
return goog.labs.userAgent.browser.isVersionOrHigher((47));
} else {
return and__6144__auto__;
}
});

/**
* @constructor
*/
devtools.formatters.CLJSDevtoolsFormatter = (function (){
})

devtools.formatters.CLJSDevtoolsFormatter.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

devtools.formatters.CLJSDevtoolsFormatter.cljs$lang$type = true;

devtools.formatters.CLJSDevtoolsFormatter.cljs$lang$ctorStr = "devtools.formatters/CLJSDevtoolsFormatter";

devtools.formatters.CLJSDevtoolsFormatter.cljs$lang$ctorPrWriter = (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write(writer__6755__auto__,"devtools.formatters/CLJSDevtoolsFormatter");
});

devtools.formatters.__GT_CLJSDevtoolsFormatter = (function devtools$formatters$__GT_CLJSDevtoolsFormatter(){
return (new devtools.formatters.CLJSDevtoolsFormatter());
});

devtools.formatters.find_fn_in_debug_ns = (function devtools$formatters$find_fn_in_debug_ns(fn_name){
try{return (window["devtools"]["debug"][fn_name]);
}catch (e22700){var _ = e22700;
return null;
}});
devtools.formatters.monitor_api_call_if_avail = (function devtools$formatters$monitor_api_call_if_avail(name,api_call,args){
var temp__4655__auto__ = devtools.formatters.find_fn_in_debug_ns("monitor_api_call");
if(cljs.core.truth_(temp__4655__auto__)){
var monitor_api_call = temp__4655__auto__;
return (monitor_api_call.cljs$core$IFn$_invoke$arity$3 ? monitor_api_call.cljs$core$IFn$_invoke$arity$3(name,api_call,args) : monitor_api_call.call(null,name,api_call,args));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(api_call,args);
}
});
devtools.formatters.log_exception_if_avail = (function devtools$formatters$log_exception_if_avail(var_args){
var args__7221__auto__ = [];
var len__7214__auto___22702 = arguments.length;
var i__7215__auto___22703 = (0);
while(true){
if((i__7215__auto___22703 < len__7214__auto___22702)){
args__7221__auto__.push((arguments[i__7215__auto___22703]));

var G__22704 = (i__7215__auto___22703 + (1));
i__7215__auto___22703 = G__22704;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((0) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((0)),(0))):null);
return devtools.formatters.log_exception_if_avail.cljs$core$IFn$_invoke$arity$variadic(argseq__7222__auto__);
});

devtools.formatters.log_exception_if_avail.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var temp__4655__auto__ = devtools.formatters.find_fn_in_debug_ns("log_exception");
if(cljs.core.truth_(temp__4655__auto__)){
var log_exception = temp__4655__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(log_exception,args);
} else {
return null;
}
});

devtools.formatters.log_exception_if_avail.cljs$lang$maxFixedArity = (0);

devtools.formatters.log_exception_if_avail.cljs$lang$applyTo = (function (seq22701){
return devtools.formatters.log_exception_if_avail.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22701));
});
devtools.formatters.monitor_api_calls = (function devtools$formatters$monitor_api_calls(name,api_call){
return (function() { 
var G__22705__delegate = function (args){
if(cljs.core.not(devtools.formatters._STAR_monitor_enabled_STAR_)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(api_call,args);
} else {
return devtools.formatters.monitor_api_call_if_avail(name,api_call,args);
}
};
var G__22705 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22706__i = 0, G__22706__a = new Array(arguments.length -  0);
while (G__22706__i < G__22706__a.length) {G__22706__a[G__22706__i] = arguments[G__22706__i + 0]; ++G__22706__i;}
  args = new cljs.core.IndexedSeq(G__22706__a,0);
} 
return G__22705__delegate.call(this,args);};
G__22705.cljs$lang$maxFixedArity = 0;
G__22705.cljs$lang$applyTo = (function (arglist__22707){
var args = cljs.core.seq(arglist__22707);
return G__22705__delegate(args);
});
G__22705.cljs$core$IFn$_invoke$arity$variadic = G__22705__delegate;
return G__22705;
})()
;
});
devtools.formatters.sanitize = (function devtools$formatters$sanitize(name,api_call){
return (function() { 
var G__22710__delegate = function (args){
if(cljs.core.not(devtools.formatters._STAR_sanitizer_enabled_STAR_)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(api_call,args);
} else {
try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(api_call,args);
}catch (e22709){var e = e22709;
devtools.formatters.log_exception_if_avail.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str(name),cljs.core.str(": "),cljs.core.str(e)].join('')], 0));

return null;
}}
};
var G__22710 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22711__i = 0, G__22711__a = new Array(arguments.length -  0);
while (G__22711__i < G__22711__a.length) {G__22711__a[G__22711__i] = arguments[G__22711__i + 0]; ++G__22711__i;}
  args = new cljs.core.IndexedSeq(G__22711__a,0);
} 
return G__22710__delegate.call(this,args);};
G__22710.cljs$lang$maxFixedArity = 0;
G__22710.cljs$lang$applyTo = (function (arglist__22712){
var args = cljs.core.seq(arglist__22712);
return G__22710__delegate(args);
});
G__22710.cljs$core$IFn$_invoke$arity$variadic = G__22710__delegate;
return G__22710;
})()
;
});
devtools.formatters.build_cljs_formatter = (function devtools$formatters$build_cljs_formatter(){
var wrap = (function (name,api_call){
var monitor = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(devtools.formatters.monitor_api_calls,name);
var sanitizer = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(devtools.formatters.sanitize,name);
cljs.core.comp.cljs$core$IFn$_invoke$arity$2(monitor,sanitizer).call(null,api_call);

return api_call;
});
var formatter = (new devtools.formatters.CLJSDevtoolsFormatter());
var define_BANG_ = ((function (wrap,formatter){
return (function (name,fn){
return (formatter[name] = wrap(name,fn));
});})(wrap,formatter))
;
define_BANG_("header",devtools.formatters.core.header_api_call);

define_BANG_("hasBody",devtools.formatters.core.has_body_api_call);

define_BANG_("body",devtools.formatters.core.body_api_call);

return formatter;
});
devtools.formatters.is_ours_QMARK_ = (function devtools$formatters$is_ours_QMARK_(o){
return (o instanceof devtools.formatters.CLJSDevtoolsFormatter);
});
devtools.formatters.present_QMARK_ = (function devtools$formatters$present_QMARK_(){
var formatters = devtools.util.get_formatters_safe();
return cljs.core.boolean$(cljs.core.some(devtools.formatters.is_ours_QMARK_,formatters));
});
devtools.formatters.install_our_formatter_BANG_ = (function devtools$formatters$install_our_formatter_BANG_(formatter){
var formatters = devtools.util.get_formatters_safe().slice();
formatters.push(formatter);

devtools.util.set_formatters_safe_BANG_(formatters);

if(cljs.core.truth_(devtools.prefs.pref(cljs.core.cst$kw$legacy_DASH_formatter))){
return (window[devtools.formatters.obsolete_formatter_key] = formatter);
} else {
return null;
}
});
devtools.formatters.uninstall_our_formatters_BANG_ = (function devtools$formatters$uninstall_our_formatters_BANG_(){
var new_formatters = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(devtools.formatters.is_ours_QMARK_,cljs.core.vec(devtools.util.get_formatters_safe()));
var new_formatters_js = ((cljs.core.empty_QMARK_(new_formatters))?null:cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new_formatters));
return devtools.util.set_formatters_safe_BANG_(new_formatters_js);
});
devtools.formatters.installed_QMARK_ = (function devtools$formatters$installed_QMARK_(){
return devtools.formatters._STAR_installed_STAR_;
});
devtools.formatters.install_BANG_ = (function devtools$formatters$install_BANG_(){
if(cljs.core.truth_(devtools.formatters._STAR_installed_STAR_)){
return null;
} else {
devtools.formatters._STAR_installed_STAR_ = true;

devtools.formatters.install_our_formatter_BANG_(devtools.formatters.build_cljs_formatter());

return true;
}
});
devtools.formatters.uninstall_BANG_ = (function devtools$formatters$uninstall_BANG_(){
if(cljs.core.truth_(devtools.formatters._STAR_installed_STAR_)){
devtools.formatters._STAR_installed_STAR_ = false;

return devtools.formatters.uninstall_our_formatters_BANG_();
} else {
return null;
}
});
