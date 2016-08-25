// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('devtools.prefs');
goog.require('cljs.core');
goog.require('devtools.defaults');
devtools.prefs._STAR_prefs_STAR_ = devtools.defaults.prefs;
devtools.prefs.get_prefs = (function devtools$prefs$get_prefs(){
return devtools.prefs._STAR_prefs_STAR_;
});
devtools.prefs.pref = (function devtools$prefs$pref(key){
return (key.cljs$core$IFn$_invoke$arity$1 ? key.cljs$core$IFn$_invoke$arity$1(devtools.prefs._STAR_prefs_STAR_) : key.call(null,devtools.prefs._STAR_prefs_STAR_));
});
devtools.prefs.set_prefs_BANG_ = (function devtools$prefs$set_prefs_BANG_(new_prefs){
return devtools.prefs._STAR_prefs_STAR_ = new_prefs;
});
devtools.prefs.set_pref_BANG_ = (function devtools$prefs$set_pref_BANG_(key,val){
return devtools.prefs.set_prefs_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(devtools.prefs.get_prefs(),key,val));
});
devtools.prefs.merge_prefs_BANG_ = (function devtools$prefs$merge_prefs_BANG_(m){
return devtools.prefs.set_prefs_BANG_(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([devtools.prefs.get_prefs(),m], 0)));
});
devtools.prefs.update_pref_BANG_ = (function devtools$prefs$update_pref_BANG_(var_args){
var args__7221__auto__ = [];
var len__7214__auto___13097 = arguments.length;
var i__7215__auto___13098 = (0);
while(true){
if((i__7215__auto___13098 < len__7214__auto___13097)){
args__7221__auto__.push((arguments[i__7215__auto___13098]));

var G__13099 = (i__7215__auto___13098 + (1));
i__7215__auto___13098 = G__13099;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((2) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((2)),(0))):null);
return devtools.prefs.update_pref_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7222__auto__);
});

devtools.prefs.update_pref_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (key,f,args){
var new_val = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,devtools.prefs.pref(key),args);
return devtools.prefs.set_pref_BANG_(key,new_val);
});

devtools.prefs.update_pref_BANG_.cljs$lang$maxFixedArity = (2);

devtools.prefs.update_pref_BANG_.cljs$lang$applyTo = (function (seq13094){
var G__13095 = cljs.core.first(seq13094);
var seq13094__$1 = cljs.core.next(seq13094);
var G__13096 = cljs.core.first(seq13094__$1);
var seq13094__$2 = cljs.core.next(seq13094__$1);
return devtools.prefs.update_pref_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13095,G__13096,seq13094__$2);
});
