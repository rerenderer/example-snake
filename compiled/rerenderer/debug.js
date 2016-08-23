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

var map__23322 = game;
var map__23322__$1 = ((((!((map__23322 == null)))?((((map__23322.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23322.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23322):map__23322);
var render_state_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23322__$1,cljs.core.cst$kw$render_DASH_state_BANG_);
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23322__$1,cljs.core.cst$kw$state_DASH_atom);
var G__23324 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state_atom) : cljs.core.deref.call(null,state_atom));
return (render_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? render_state_BANG_.cljs$core$IFn$_invoke$arity$1(G__23324) : render_state_BANG_.call(null,G__23324));
});
/**
 * Swaps game state, works like atom's `swap!`.
 * 
 *   * `game` - `Game` record;
 *   * `args` - `swap!` args.
 */
rerenderer.debug.swap_state_BANG_ = (function rerenderer$debug$swap_state_BANG_(var_args){
var args__7221__auto__ = [];
var len__7214__auto___23327 = arguments.length;
var i__7215__auto___23328 = (0);
while(true){
if((i__7215__auto___23328 < len__7214__auto___23327)){
args__7221__auto__.push((arguments[i__7215__auto___23328]));

var G__23329 = (i__7215__auto___23328 + (1));
i__7215__auto___23328 = G__23329;
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

rerenderer.debug.swap_state_BANG_.cljs$lang$applyTo = (function (seq23325){
var G__23326 = cljs.core.first(seq23325);
var seq23325__$1 = cljs.core.next(seq23325);
return rerenderer.debug.swap_state_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23326,seq23325__$1);
});
/**
 * Resets game state, works like atom's `reset!`.
 * 
 *   * `game` - `Game` record;
 *   * `value` - new value.
 */
rerenderer.debug.reset_state_BANG_ = (function rerenderer$debug$reset_state_BANG_(game,value){
var G__23332 = cljs.core.cst$kw$state_DASH_atom.cljs$core$IFn$_invoke$arity$1(game);
var G__23333 = value;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23332,G__23333) : cljs.core.reset_BANG_.call(null,G__23332,G__23333));
});
/**
 * Resets game state to initial value.
 * 
 *   * `game` - `Game` record.
 */
rerenderer.debug.reset_state_to_initial_BANG_ = (function rerenderer$debug$reset_state_to_initial_BANG_(game){
var G__23336 = cljs.core.cst$kw$state_DASH_atom.cljs$core$IFn$_invoke$arity$1(game);
var G__23337 = cljs.core.cst$kw$initial_DASH_state.cljs$core$IFn$_invoke$arity$1(game);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23336,G__23337) : cljs.core.reset_BANG_.call(null,G__23336,G__23337));
});
