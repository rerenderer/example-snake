// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('devtools.formatters.state');
goog.require('cljs.core');
devtools.formatters.state._STAR_current_state_STAR_ = null;
devtools.formatters.state.valid_current_state_QMARK_ = (function devtools$formatters$state$valid_current_state_QMARK_(){
return cljs.core.some_QMARK_(devtools.formatters.state._STAR_current_state_STAR_);
});
devtools.formatters.state.get_default_state = (function devtools$formatters$state$get_default_state(){
return cljs.core.PersistentArrayMap.EMPTY;
});
devtools.formatters.state.get_current_state = (function devtools$formatters$state$get_current_state(){
if(cljs.core.truth_(devtools.formatters.state.valid_current_state_QMARK_())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$valid_DASH_current_DASH_state_QMARK_)], 0)))].join('')));
}

return devtools.formatters.state._STAR_current_state_STAR_;
});
devtools.formatters.state.update_current_state_BANG_ = (function devtools$formatters$state$update_current_state_BANG_(var_args){
var args__7221__auto__ = [];
var len__7214__auto___14858 = arguments.length;
var i__7215__auto___14859 = (0);
while(true){
if((i__7215__auto___14859 < len__7214__auto___14858)){
args__7221__auto__.push((arguments[i__7215__auto___14859]));

var G__14860 = (i__7215__auto___14859 + (1));
i__7215__auto___14859 = G__14860;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((1) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((1)),(0))):null);
return devtools.formatters.state.update_current_state_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7222__auto__);
});

devtools.formatters.state.update_current_state_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(cljs.core.truth_(devtools.formatters.state.valid_current_state_QMARK_())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$valid_DASH_current_DASH_state_QMARK_)], 0)))].join('')));
}

return devtools.formatters.state._STAR_current_state_STAR_ = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,devtools.formatters.state._STAR_current_state_STAR_,args);
});

devtools.formatters.state.update_current_state_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.state.update_current_state_BANG_.cljs$lang$applyTo = (function (seq14856){
var G__14857 = cljs.core.first(seq14856);
var seq14856__$1 = cljs.core.next(seq14856);
return devtools.formatters.state.update_current_state_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14857,seq14856__$1);
});
devtools.formatters.state.push_object_to_current_history_BANG_ = (function devtools$formatters$state$push_object_to_current_history_BANG_(object){
return devtools.formatters.state.update_current_state_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.update,cljs.core.array_seq([cljs.core.cst$kw$history,cljs.core.conj,object], 0));
});
devtools.formatters.state.get_current_history = (function devtools$formatters$state$get_current_history(){
return cljs.core.cst$kw$history.cljs$core$IFn$_invoke$arity$1(devtools.formatters.state.get_current_state());
});
devtools.formatters.state.is_circular_QMARK_ = (function devtools$formatters$state$is_circular_QMARK_(object){
var history = devtools.formatters.state.get_current_history();
return cljs.core.some(((function (history){
return (function (p1__14861_SHARP_){
return (p1__14861_SHARP_ === object);
});})(history))
,history);
});
devtools.formatters.state.prevent_recursion_QMARK_ = (function devtools$formatters$state$prevent_recursion_QMARK_(){
return cljs.core.boolean$(cljs.core.cst$kw$prevent_DASH_recursion.cljs$core$IFn$_invoke$arity$1(devtools.formatters.state.get_current_state()));
});
devtools.formatters.state.set_prevent_recursion = (function devtools$formatters$state$set_prevent_recursion(state,val){
if(cljs.core.some_QMARK_(val)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$prevent_DASH_recursion,val);
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,cljs.core.cst$kw$prevent_DASH_recursion);
}
});
devtools.formatters.state.get_managed_print_level = (function devtools$formatters$state$get_managed_print_level(){
return cljs.core.cst$kw$managed_DASH_print_DASH_level.cljs$core$IFn$_invoke$arity$1(devtools.formatters.state.get_current_state());
});
devtools.formatters.state.set_managed_print_level = (function devtools$formatters$state$set_managed_print_level(state,val){
if(cljs.core.some_QMARK_(val)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$managed_DASH_print_DASH_level,val);
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,cljs.core.cst$kw$managed_DASH_print_DASH_level);
}
});
devtools.formatters.state.get_depth_budget = (function devtools$formatters$state$get_depth_budget(){
return cljs.core.cst$kw$depth_DASH_budget.cljs$core$IFn$_invoke$arity$1(devtools.formatters.state.get_current_state());
});
devtools.formatters.state.set_depth_budget = (function devtools$formatters$state$set_depth_budget(state,val){
if(cljs.core.some_QMARK_(val)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$depth_DASH_budget,val);
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,cljs.core.cst$kw$depth_DASH_budget);
}
});
devtools.formatters.state.reset_depth_limits = (function devtools$formatters$state$reset_depth_limits(state){
return devtools.formatters.state.set_managed_print_level(devtools.formatters.state.set_depth_budget(state,null),null);
});
