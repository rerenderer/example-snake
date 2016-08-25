// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('rerenderer_example.snake.core');
goog.require('cljs.core');
goog.require('rerenderer.core');
goog.require('rerenderer.debug');
goog.require('devtools.core');
goog.require('rerenderer_example.snake.views');
goog.require('rerenderer_example.snake.handler');
rerenderer_example.snake.core.is_debug_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(location.hash,"#debug");
cljs.core.enable_console_print_BANG_();
rerenderer_example.snake.core.init_stats_BANG_ = (function rerenderer_example$snake$core$init_stats_BANG_(){
if(cljs.core.truth_(rerenderer_example.snake.core.is_debug_QMARK_)){
var stats = (new Stats());
stats.showPanel((0));

document.body.appendChild(stats.domElement);

return stats;
} else {
return null;
}
});
if(typeof rerenderer_example.snake.core.stats !== 'undefined'){
} else {
rerenderer_example.snake.core.stats = rerenderer_example.snake.core.init_stats_BANG_();
}
if(typeof rerenderer_example.snake.core.game !== 'undefined'){
} else {
rerenderer_example.snake.core.game = rerenderer.core.init_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$root_DASH_view,new cljs.core.Var(function(){return rerenderer_example.snake.views.root_view;},cljs.core.cst$sym$rerenderer_DASH_example$snake$views_SLASH_root_DASH_view,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$rerenderer_DASH_example$snake$views,cljs.core.cst$sym$root_DASH_view,"/home/nvbn/work/farley/rerenderer-example.snake/src/rerenderer_example/snake/views.cljs",16,1,152,152,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keys,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$status,cljs.core.cst$sym$score,cljs.core.cst$sym$lives,cljs.core.cst$sym$candy,cljs.core.cst$sym$snake], null)], null)], null)),null,(cljs.core.truth_(rerenderer_example.snake.views.root_view)?rerenderer_example.snake.views.root_view.cljs$lang$test:null)])),cljs.core.cst$kw$event_DASH_handler,new cljs.core.Var(function(){return rerenderer_example.snake.handler.event_handler;},cljs.core.cst$sym$rerenderer_DASH_example$snake$handler_SLASH_event_DASH_handler,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$rerenderer_DASH_example$snake$handler,cljs.core.cst$sym$event_DASH_handler,"/home/nvbn/work/farley/rerenderer-example.snake/src/rerenderer_example/snake/handler.cljs",20,1,109,109,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$event_DASH_ch,cljs.core.cst$sym$state_DASH_atom,cljs.core.cst$sym$_], null)),null,(cljs.core.truth_(rerenderer_example.snake.handler.event_handler)?rerenderer_example.snake.handler.event_handler.cljs$lang$test:null)])),cljs.core.cst$kw$state,rerenderer_example.snake.handler.initial_state,cljs.core.cst$kw$stats,rerenderer_example.snake.core.stats,cljs.core.cst$kw$is_DASH_debug_QMARK_,rerenderer_example.snake.core.is_debug_QMARK_], 0));
}
rerenderer_example.snake.core.on_reload = (function rerenderer_example$snake$core$on_reload(){
return rerenderer.debug.rerender_BANG_(rerenderer_example.snake.core.game);
});
if(cljs.core.truth_(rerenderer_example.snake.core.is_debug_QMARK_)){
devtools.core.install_BANG_.cljs$core$IFn$_invoke$arity$0();

rerenderer.debug.watch_state_BANG_(rerenderer_example.snake.core.game,(function (p1__22922_SHARP_){
return console.log(p1__22922_SHARP_);
}));
} else {
}
