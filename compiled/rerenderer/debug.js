// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('rerenderer.debug');
goog.require('cljs.core');
/**
 * Rerenders game manualy, useful with figwheel.
 * 
 *   * `game` - `Game` record.
 */
rerenderer.debug.rerender_BANG_ = (function rerenderer$debug$rerender_BANG_(game){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Rerender game manually!"], 0));

var map__22481 = game;
var map__22481__$1 = ((((!((map__22481 == null)))?((((map__22481.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22481.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22481):map__22481);
var render_state_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22481__$1,cljs.core.cst$kw$render_DASH_state_BANG_);
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22481__$1,cljs.core.cst$kw$state_DASH_atom);
var G__22483 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state_atom) : cljs.core.deref.call(null,state_atom));
return (render_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? render_state_BANG_.cljs$core$IFn$_invoke$arity$1(G__22483) : render_state_BANG_.call(null,G__22483));
});
/**
 * Swaps game state, works like atom's `swap!`.
 * 
 *   * `game` - `Game` record;
 *   * `args` - `swap!` args.
 */
rerenderer.debug.swap_state_BANG_ = (function rerenderer$debug$swap_state_BANG_(var_args){
var args__7221__auto__ = [];
var len__7214__auto___22486 = arguments.length;
var i__7215__auto___22487 = (0);
while(true){
if((i__7215__auto___22487 < len__7214__auto___22486)){
args__7221__auto__.push((arguments[i__7215__auto___22487]));

var G__22488 = (i__7215__auto___22487 + (1));
i__7215__auto___22487 = G__22488;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((1) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((1)),(0))):null);
return rerenderer.debug.swap_state_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7222__auto__);
});

rerenderer.debug.swap_state_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (game,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.swap_BANG_,cljs.core.cst$kw$state_DASH_atom.cljs$core$IFn$_invoke$arity$1(game),args);
});

rerenderer.debug.swap_state_BANG_.cljs$lang$maxFixedArity = (1);

rerenderer.debug.swap_state_BANG_.cljs$lang$applyTo = (function (seq22484){
var G__22485 = cljs.core.first(seq22484);
var seq22484__$1 = cljs.core.next(seq22484);
return rerenderer.debug.swap_state_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22485,seq22484__$1);
});
/**
 * Resets game state, works like atom's `reset!`.
 * 
 *   * `game` - `Game` record;
 *   * `value` - new value.
 */
rerenderer.debug.reset_state_BANG_ = (function rerenderer$debug$reset_state_BANG_(game,value){
var G__22491 = cljs.core.cst$kw$state_DASH_atom.cljs$core$IFn$_invoke$arity$1(game);
var G__22492 = value;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__22491,G__22492) : cljs.core.reset_BANG_.call(null,G__22491,G__22492));
});
/**
 * Resets game state to initial value.
 * 
 *   * `game` - `Game` record.
 */
rerenderer.debug.reset_state_to_initial_BANG_ = (function rerenderer$debug$reset_state_to_initial_BANG_(game){
var G__22495 = cljs.core.cst$kw$state_DASH_atom.cljs$core$IFn$_invoke$arity$1(game);
var G__22496 = cljs.core.cst$kw$initial_DASH_state.cljs$core$IFn$_invoke$arity$1(game);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__22495,G__22496) : cljs.core.reset_BANG_.call(null,G__22495,G__22496));
});
/**
 * Add listener to state changes.
 */
rerenderer.debug.watch_state_BANG_ = (function rerenderer$debug$watch_state_BANG_(game,listener){
return cljs.core.add_watch(cljs.core.cst$kw$state_DASH_atom.cljs$core$IFn$_invoke$arity$1(game),cljs.core.cst$kw$debug,(function (p1__22498_SHARP_,p2__22499_SHARP_,p3__22500_SHARP_,p4__22497_SHARP_){
return (listener.cljs$core$IFn$_invoke$arity$1 ? listener.cljs$core$IFn$_invoke$arity$1(p4__22497_SHARP_) : listener.call(null,p4__22497_SHARP_));
}));
});
