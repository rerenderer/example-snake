// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('devtools.async');
goog.require('cljs.core');
goog.require('goog.async.nextTick');
devtools.async.available_QMARK_ = (function devtools$async$available_QMARK_(){
return typeof Promise !== 'undefined';
});
devtools.async._STAR_installed_STAR_ = false;
devtools.async._STAR_original_set_immediate_STAR_ = null;
devtools.async.rethrow_outside_promise = (function devtools$async$rethrow_outside_promise(e){
var G__22681 = (function (){
throw e;
});
var G__22682 = (0);
return setTimeout(G__22681,G__22682);
});
devtools.async.promise_based_set_immediate = (function devtools$async$promise_based_set_immediate(callback){
var o__12554__auto___22683 = (function (){var o__12554__auto__ = (function (){var o__12554__auto__ = Promise;
return goog.object.get(o__12554__auto__,"resolve").call(o__12554__auto__);
})();
return goog.object.get(o__12554__auto__,"then").call(o__12554__auto__,callback);
})();
goog.object.get(o__12554__auto___22683,"catch").call(o__12554__auto___22683,devtools.async.rethrow_outside_promise);

return null;
});
devtools.async.install_async_set_immediate_BANG_ = (function devtools$async$install_async_set_immediate_BANG_(){
devtools.async._STAR_original_set_immediate_STAR_ = goog.async.nextTick.setImmediate_;

return goog.async.nextTick.setImmediate_ = devtools.async.promise_based_set_immediate;
});
devtools.async.uninstall_async_set_immediate_BANG_ = (function devtools$async$uninstall_async_set_immediate_BANG_(){
return goog.async.nextTick.setImmediate_ = devtools.async._STAR_original_set_immediate_STAR_;
});
devtools.async.installed_QMARK_ = (function devtools$async$installed_QMARK_(){
return devtools.async._STAR_installed_STAR_;
});
devtools.async.install_BANG_ = (function devtools$async$install_BANG_(){
if(cljs.core.truth_(devtools.async._STAR_installed_STAR_)){
return null;
} else {
devtools.async._STAR_installed_STAR_ = true;

var G__22688_22692 = Error;
var target__12573__auto___22693 = G__22688_22692;
if(cljs.core.truth_(target__12573__auto___22693)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("unable to locate object path "),cljs.core.str(null),cljs.core.str(" in "),cljs.core.str(G__22688_22692)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$sym$target__12573__auto__], 0)))].join('')));
}

var G__22689_22694 = target__12573__auto___22693;
var G__22690_22695 = cljs.core.last(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["stackTraceLimit"], null));
var G__22691_22696 = Infinity;
goog.object.set(G__22689_22694,G__22690_22695,G__22691_22696);


devtools.async.install_async_set_immediate_BANG_();

return true;
}
});
devtools.async.uninstall_BANG_ = (function devtools$async$uninstall_BANG_(){
if(cljs.core.truth_(devtools.async._STAR_installed_STAR_)){
devtools.async._STAR_installed_STAR_ = false;

return devtools.async.uninstall_async_set_immediate_BANG_();
} else {
return null;
}
});
