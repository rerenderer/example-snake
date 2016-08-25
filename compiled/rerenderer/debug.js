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

var map__19107 = game;
var map__19107__$1 = ((((!((map__19107 == null)))?((((map__19107.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19107.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19107):map__19107);
var render_state_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19107__$1,cljs.core.cst$kw$render_DASH_state_BANG_);
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19107__$1,cljs.core.cst$kw$state_DASH_atom);
var G__19109 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state_atom) : cljs.core.deref.call(null,state_atom));
return (render_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? render_state_BANG_.cljs$core$IFn$_invoke$arity$1(G__19109) : render_state_BANG_.call(null,G__19109));
});
/**
 * Swaps game state, works like atom's `swap!`.
 * 
 *   * `game` - `Game` record;
 *   * `args` - `swap!` args.
 */
rerenderer.debug.swap_state_BANG_ = (function rerenderer$debug$swap_state_BANG_(var_args){
var args__7221__auto__ = [];
var len__7214__auto___19112 = arguments.length;
var i__7215__auto___19113 = (0);
while(true){
if((i__7215__auto___19113 < len__7214__auto___19112)){
args__7221__auto__.push((arguments[i__7215__auto___19113]));

var G__19114 = (i__7215__auto___19113 + (1));
i__7215__auto___19113 = G__19114;
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

rerenderer.debug.swap_state_BANG_.cljs$lang$applyTo = (function (seq19110){
var G__19111 = cljs.core.first(seq19110);
var seq19110__$1 = cljs.core.next(seq19110);
return rerenderer.debug.swap_state_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19111,seq19110__$1);
});
/**
 * Resets game state, works like atom's `reset!`.
 * 
 *   * `game` - `Game` record;
 *   * `value` - new value.
 */
rerenderer.debug.reset_state_BANG_ = (function rerenderer$debug$reset_state_BANG_(game,value){
var G__19117 = cljs.core.cst$kw$state_DASH_atom.cljs$core$IFn$_invoke$arity$1(game);
var G__19118 = value;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__19117,G__19118) : cljs.core.reset_BANG_.call(null,G__19117,G__19118));
});
/**
 * Resets game state to initial value.
 * 
 *   * `game` - `Game` record.
 */
rerenderer.debug.reset_state_to_initial_BANG_ = (function rerenderer$debug$reset_state_to_initial_BANG_(game){
var G__19121 = cljs.core.cst$kw$state_DASH_atom.cljs$core$IFn$_invoke$arity$1(game);
var G__19122 = cljs.core.cst$kw$initial_DASH_state.cljs$core$IFn$_invoke$arity$1(game);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__19121,G__19122) : cljs.core.reset_BANG_.call(null,G__19121,G__19122));
});
/**
 * Add listener to state changes.
 */
rerenderer.debug.watch_state_BANG_ = (function rerenderer$debug$watch_state_BANG_(game,listener){
return cljs.core.add_watch(cljs.core.cst$kw$state_DASH_atom.cljs$core$IFn$_invoke$arity$1(game),cljs.core.cst$kw$debug,(function (p1__19124_SHARP_,p2__19125_SHARP_,p3__19126_SHARP_,p4__19123_SHARP_){
return (listener.cljs$core$IFn$_invoke$arity$1 ? listener.cljs$core$IFn$_invoke$arity$1(p4__19123_SHARP_) : listener.call(null,p4__19123_SHARP_));
}));
});
