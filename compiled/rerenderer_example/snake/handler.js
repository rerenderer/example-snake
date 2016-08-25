// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('rerenderer_example.snake.handler');
goog.require('cljs.core');
goog.require('cljs.core.match');
goog.require('cljs.core.async');
goog.require('clojure.set');
rerenderer_example.snake.handler.initial_state = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$status,cljs.core.cst$kw$start_DASH_menu], null);
rerenderer_example.snake.handler.start_game = (function rerenderer_example$snake$handler$start_game(state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$status,cljs.core.cst$kw$in_DASH_progress,cljs.core.array_seq([cljs.core.cst$kw$candy,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(5)], null),cljs.core.cst$kw$snake,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(6)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(7)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(8)], null)], null),cljs.core.cst$kw$direction,cljs.core.cst$kw$right,cljs.core.cst$kw$ignore_DASH_intersections,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$lives,(5)], 0));
});
rerenderer_example.snake.handler.resume_game = (function rerenderer_example$snake$handler$resume_game(state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$status,cljs.core.cst$kw$in_DASH_progress);
});
rerenderer_example.snake.handler.pause_game = (function rerenderer_example$snake$handler$pause_game(state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$status,cljs.core.cst$kw$pause);
});
rerenderer_example.snake.handler.change_game_state = (function rerenderer_example$snake$handler$change_game_state(state){
var pred__19856 = cljs.core._EQ_;
var expr__19857 = cljs.core.cst$kw$status.cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_((pred__19856.cljs$core$IFn$_invoke$arity$2 ? pred__19856.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$start_DASH_menu,expr__19857) : pred__19856.call(null,cljs.core.cst$kw$start_DASH_menu,expr__19857)))){
return rerenderer_example.snake.handler.start_game(state);
} else {
if(cljs.core.truth_((pred__19856.cljs$core$IFn$_invoke$arity$2 ? pred__19856.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$game_DASH_over,expr__19857) : pred__19856.call(null,cljs.core.cst$kw$game_DASH_over,expr__19857)))){
return rerenderer_example.snake.handler.start_game(state);
} else {
if(cljs.core.truth_((pred__19856.cljs$core$IFn$_invoke$arity$2 ? pred__19856.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pause,expr__19857) : pred__19856.call(null,cljs.core.cst$kw$pause,expr__19857)))){
return rerenderer_example.snake.handler.resume_game(state);
} else {
if(cljs.core.truth_((pred__19856.cljs$core$IFn$_invoke$arity$2 ? pred__19856.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$in_DASH_progress,expr__19857) : pred__19856.call(null,cljs.core.cst$kw$in_DASH_progress,expr__19857)))){
return rerenderer_example.snake.handler.pause_game(state);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__19857)].join('')));
}
}
}
}
});
rerenderer_example.snake.handler.create_timer_BANG_ = (function rerenderer_example$snake$handler$create_timer_BANG_(name,time){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var G__19906_19923 = ((function (ch){
return (function (){
var c__10184__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10184__auto__,ch){
return (function (){
var f__10185__auto__ = (function (){var switch__10117__auto__ = ((function (c__10184__auto__,ch){
return (function (state_19914){
var state_val_19915 = (state_19914[(1)]);
if((state_val_19915 === (1))){
var inst_19908 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19909 = [cljs.core.cst$kw$timer,name];
var inst_19910 = (new cljs.core.PersistentVector(null,2,(5),inst_19908,inst_19909,null));
var state_19914__$1 = state_19914;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19914__$1,(2),ch,inst_19910);
} else {
if((state_val_19915 === (2))){
var inst_19912 = (state_19914[(2)]);
var state_19914__$1 = state_19914;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19914__$1,inst_19912);
} else {
return null;
}
}
});})(c__10184__auto__,ch))
;
return ((function (switch__10117__auto__,c__10184__auto__,ch){
return (function() {
var rerenderer_example$snake$handler$create_timer_BANG__$_state_machine__10118__auto__ = null;
var rerenderer_example$snake$handler$create_timer_BANG__$_state_machine__10118__auto____0 = (function (){
var statearr_19919 = [null,null,null,null,null,null,null];
(statearr_19919[(0)] = rerenderer_example$snake$handler$create_timer_BANG__$_state_machine__10118__auto__);

(statearr_19919[(1)] = (1));

return statearr_19919;
});
var rerenderer_example$snake$handler$create_timer_BANG__$_state_machine__10118__auto____1 = (function (state_19914){
while(true){
var ret_value__10119__auto__ = (function (){try{while(true){
var result__10120__auto__ = switch__10117__auto__(state_19914);
if(cljs.core.keyword_identical_QMARK_(result__10120__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10120__auto__;
}
break;
}
}catch (e19920){if((e19920 instanceof Object)){
var ex__10121__auto__ = e19920;
var statearr_19921_19925 = state_19914;
(statearr_19921_19925[(5)] = ex__10121__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19914);

return cljs.core.cst$kw$recur;
} else {
throw e19920;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10119__auto__,cljs.core.cst$kw$recur)){
var G__19926 = state_19914;
state_19914 = G__19926;
continue;
} else {
return ret_value__10119__auto__;
}
break;
}
});
rerenderer_example$snake$handler$create_timer_BANG__$_state_machine__10118__auto__ = function(state_19914){
switch(arguments.length){
case 0:
return rerenderer_example$snake$handler$create_timer_BANG__$_state_machine__10118__auto____0.call(this);
case 1:
return rerenderer_example$snake$handler$create_timer_BANG__$_state_machine__10118__auto____1.call(this,state_19914);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rerenderer_example$snake$handler$create_timer_BANG__$_state_machine__10118__auto__.cljs$core$IFn$_invoke$arity$0 = rerenderer_example$snake$handler$create_timer_BANG__$_state_machine__10118__auto____0;
rerenderer_example$snake$handler$create_timer_BANG__$_state_machine__10118__auto__.cljs$core$IFn$_invoke$arity$1 = rerenderer_example$snake$handler$create_timer_BANG__$_state_machine__10118__auto____1;
return rerenderer_example$snake$handler$create_timer_BANG__$_state_machine__10118__auto__;
})()
;})(switch__10117__auto__,c__10184__auto__,ch))
})();
var state__10186__auto__ = (function (){var statearr_19922 = (f__10185__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10185__auto__.cljs$core$IFn$_invoke$arity$0() : f__10185__auto__.call(null));
(statearr_19922[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10184__auto__);

return statearr_19922;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10186__auto__);
});})(c__10184__auto__,ch))
);

return c__10184__auto__;
});})(ch))
;
var G__19907_19924 = time;
setInterval(G__19906_19923,G__19907_19924);

return ch;
});
rerenderer_example.snake.handler.get_snake = (function rerenderer_example$snake$handler$get_snake(snake,direction){
var vec__19932 = cljs.core.last(snake);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19932,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19932,(1),null);
var vec__19933 = (function (){var pred__19934 = cljs.core._EQ_;
var expr__19935 = direction;
if(cljs.core.truth_((pred__19934.cljs$core$IFn$_invoke$arity$2 ? pred__19934.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$left,expr__19935) : pred__19934.call(null,cljs.core.cst$kw$left,expr__19935)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - (1)),y], null);
} else {
if(cljs.core.truth_((pred__19934.cljs$core$IFn$_invoke$arity$2 ? pred__19934.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$right,expr__19935) : pred__19934.call(null,cljs.core.cst$kw$right,expr__19935)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (1)),y], null);
} else {
if(cljs.core.truth_((pred__19934.cljs$core$IFn$_invoke$arity$2 ? pred__19934.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$up,expr__19935) : pred__19934.call(null,cljs.core.cst$kw$up,expr__19935)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y - (1))], null);
} else {
if(cljs.core.truth_((pred__19934.cljs$core$IFn$_invoke$arity$2 ? pred__19934.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$down,expr__19935) : pred__19934.call(null,cljs.core.cst$kw$down,expr__19935)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y + (1))], null);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__19935)].join('')));
}
}
}
}
})();
var nx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19933,(0),null);
var ny = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19933,(1),null);
var nx__$1 = (((nx > (39)))?(0):nx);
var nx__$2 = (((nx__$1 < (0)))?(39):nx__$1);
var ny__$1 = (((ny > (27)))?(0):ny);
var ny__$2 = (((ny__$1 < (0)))?(27):ny__$1);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(snake),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nx__$2,ny__$2], null));
});
rerenderer_example.snake.handler.get_snake_intersections = (function rerenderer_example$snake$handler$get_snake_intersections(snake){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__19937_SHARP_){
return (cljs.core.second(p1__19937_SHARP_) > (1));
}),cljs.core.frequencies(snake)));
});
rerenderer_example.snake.handler.check_intersection = (function rerenderer_example$snake$handler$check_intersection(p__19938){
var map__19941 = p__19938;
var map__19941__$1 = ((((!((map__19941 == null)))?((((map__19941.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19941.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19941):map__19941);
var state = map__19941__$1;
var snake = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19941__$1,cljs.core.cst$kw$snake);
var ignore_intersections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19941__$1,cljs.core.cst$kw$ignore_DASH_intersections);
var lives = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19941__$1,cljs.core.cst$kw$lives);
var intersections = rerenderer_example.snake.handler.get_snake_intersections(snake);
var without_ignored = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(ignore_intersections),intersections);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$ignore_DASH_intersections,intersections,cljs.core.array_seq([cljs.core.cst$kw$lives,((cljs.core.empty_QMARK_(without_ignored))?lives:(lives - (1)))], 0));
});
rerenderer_example.snake.handler.check_lives = (function rerenderer_example$snake$handler$check_lives(p__19943){
var map__19946 = p__19943;
var map__19946__$1 = ((((!((map__19946 == null)))?((((map__19946.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19946.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19946):map__19946);
var state = map__19946__$1;
var lives = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19946__$1,cljs.core.cst$kw$lives);
if((lives === (0))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$status,cljs.core.cst$kw$game_DASH_over);
} else {
return state;
}
});
rerenderer_example.snake.handler.check_move_on_candy = (function rerenderer_example$snake$handler$check_move_on_candy(p__19948){
var map__19951 = p__19948;
var map__19951__$1 = ((((!((map__19951 == null)))?((((map__19951.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19951.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19951):map__19951);
var state = map__19951__$1;
var snake = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19951__$1,cljs.core.cst$kw$snake);
var direction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19951__$1,cljs.core.cst$kw$direction);
var candy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19951__$1,cljs.core.cst$kw$candy);
var score = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19951__$1,cljs.core.cst$kw$score);
var on_candy = cljs.core.some(cljs.core.PersistentHashSet.fromArray([candy], true),snake);
var snake__$1 = rerenderer_example.snake.handler.get_snake(snake,direction);
if((on_candy == null)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$snake,cljs.core.rest(snake__$1),cljs.core.array_seq([cljs.core.cst$kw$score,(score + (1))], 0));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$score,((10) + score),cljs.core.array_seq([cljs.core.cst$kw$snake,snake__$1,cljs.core.cst$kw$candy,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand_int((39)),cljs.core.rand_int((27))], null)], 0));
}
});
rerenderer_example.snake.handler.move_snake = (function rerenderer_example$snake$handler$move_snake(state){
return rerenderer_example.snake.handler.check_lives(rerenderer_example.snake.handler.check_intersection(rerenderer_example.snake.handler.check_move_on_candy(state)));
});
rerenderer_example.snake.handler.change_direction = (function rerenderer_example$snake$handler$change_direction(p__19953,code){
var map__19962 = p__19953;
var map__19962__$1 = ((((!((map__19962 == null)))?((((map__19962.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19962.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19962):map__19962);
var state = map__19962__$1;
var direction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19962__$1,cljs.core.cst$kw$direction);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$direction,(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,cljs.core.cst$kw$up)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,cljs.core.cst$kw$down)))?(function (){var pred__19964 = cljs.core._EQ_;
var expr__19965 = code;
if(cljs.core.truth_((pred__19964.cljs$core$IFn$_invoke$arity$2 ? pred__19964.cljs$core$IFn$_invoke$arity$2((37),expr__19965) : pred__19964.call(null,(37),expr__19965)))){
return cljs.core.cst$kw$left;
} else {
if(cljs.core.truth_((pred__19964.cljs$core$IFn$_invoke$arity$2 ? pred__19964.cljs$core$IFn$_invoke$arity$2((39),expr__19965) : pred__19964.call(null,(39),expr__19965)))){
return cljs.core.cst$kw$right;
} else {
return direction;
}
}
})():(function (){var pred__19967 = cljs.core._EQ_;
var expr__19968 = code;
if(cljs.core.truth_((pred__19967.cljs$core$IFn$_invoke$arity$2 ? pred__19967.cljs$core$IFn$_invoke$arity$2((38),expr__19968) : pred__19967.call(null,(38),expr__19968)))){
return cljs.core.cst$kw$up;
} else {
if(cljs.core.truth_((pred__19967.cljs$core$IFn$_invoke$arity$2 ? pred__19967.cljs$core$IFn$_invoke$arity$2((40),expr__19968) : pred__19967.call(null,(40),expr__19968)))){
return cljs.core.cst$kw$down;
} else {
return direction;
}
}
})()));
});
rerenderer_example.snake.handler.event_handler = (function rerenderer_example$snake$handler$event_handler(event_ch,state_atom,_){
var move_snake_ch = rerenderer_example.snake.handler.create_timer_BANG_(cljs.core.cst$kw$move_DASH_snake,(100));
var c__10184__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10184__auto__,move_snake_ch){
return (function (){
var f__10185__auto__ = (function (){var switch__10117__auto__ = ((function (c__10184__auto__,move_snake_ch){
return (function (state_21709){
var state_val_21710 = (state_21709[(1)]);
if((state_val_21710 === (275))){
var inst_21634 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,rerenderer_example.snake.handler.change_game_state);
var state_21709__$1 = state_21709;
var statearr_21711_22120 = state_21709__$1;
(statearr_21711_22120[(2)] = inst_21634);

(statearr_21711_22120[(1)] = (277));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (291))){
var state_21709__$1 = state_21709;
var statearr_21712_22121 = state_21709__$1;
(statearr_21712_22121[(2)] = null);

(statearr_21712_22121[(1)] = (292));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (249))){
var state_21709__$1 = state_21709;
var statearr_21713_22122 = state_21709__$1;
(statearr_21713_22122[(1)] = (284));



return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (121))){
var state_21709__$1 = state_21709;
var statearr_21715_22123 = state_21709__$1;
(statearr_21715_22123[(2)] = null);

(statearr_21715_22123[(1)] = (122));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (287))){
var inst_21667 = (function(){throw cljs.core.match.backtrack})();
var state_21709__$1 = state_21709;
var statearr_21716_22124 = state_21709__$1;
(statearr_21716_22124[(2)] = inst_21667);

(statearr_21716_22124[(1)] = (289));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (65))){
var inst_21201 = (state_21709[(7)]);
var inst_21201__$1 = (state_21709[(2)]);
var inst_21202 = (inst_21201__$1 === cljs.core.match.backtrack);
var state_21709__$1 = (function (){var statearr_21717 = state_21709;
(statearr_21717[(7)] = inst_21201__$1);

return statearr_21717;
})();
if(cljs.core.truth_(inst_21202)){
var statearr_21718_22125 = state_21709__$1;
(statearr_21718_22125[(1)] = (66));

} else {
var statearr_21719_22126 = state_21709__$1;
(statearr_21719_22126[(1)] = (67));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (70))){
var inst_21204 = (state_21709[(8)]);
var inst_21204__$1 = (state_21709[(2)]);
var inst_21205 = (inst_21204__$1 === cljs.core.match.backtrack);
var state_21709__$1 = (function (){var statearr_21720 = state_21709;
(statearr_21720[(8)] = inst_21204__$1);

return statearr_21720;
})();
if(cljs.core.truth_(inst_21205)){
var statearr_21721_22127 = state_21709__$1;
(statearr_21721_22127[(1)] = (71));

} else {
var statearr_21722_22128 = state_21709__$1;
(statearr_21722_22128[(1)] = (72));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (218))){
var inst_21518 = (state_21709[(9)]);
var inst_21523 = (function(){throw inst_21518})();
var state_21709__$1 = state_21709;
var statearr_21723_22129 = state_21709__$1;
(statearr_21723_22129[(2)] = inst_21523);

(statearr_21723_22129[(1)] = (219));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (62))){
var inst_21198 = (state_21709[(10)]);
var inst_21509 = (function(){throw inst_21198})();
var state_21709__$1 = state_21709;
var statearr_21724_22130 = state_21709__$1;
(statearr_21724_22130[(2)] = inst_21509);

(statearr_21724_22130[(1)] = (63));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (74))){
var inst_21087 = (state_21709[(11)]);
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_21709,(70),Error,null,(69));
var inst_21215 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(inst_21087,(0));
var inst_21216 = cljs.core.keyword_identical_QMARK_(inst_21215,cljs.core.cst$kw$timer);
var state_21709__$1 = state_21709;
if(inst_21216){
var statearr_21725_22131 = state_21709__$1;
(statearr_21725_22131[(1)] = (75));

} else {
var statearr_21726_22132 = state_21709__$1;
(statearr_21726_22132[(1)] = (76));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (164))){
var inst_21391 = (state_21709[(2)]);
var state_21709__$1 = state_21709;
var statearr_21727_22133 = state_21709__$1;
(statearr_21727_22133[(2)] = inst_21391);

(statearr_21727_22133[(1)] = (161));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (282))){
var state_21709__$1 = state_21709;
var statearr_21728_22134 = state_21709__$1;
(statearr_21728_22134[(2)] = null);

(statearr_21728_22134[(1)] = (283));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (273))){
var inst_21626 = (state_21709[(2)]);
var state_21709__$1 = state_21709;
var statearr_21729_22135 = state_21709__$1;
(statearr_21729_22135[(2)] = inst_21626);


cljs.core.async.impl.ioc_helpers.process_exception(state_21709__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (186))){
var inst_21475 = (state_21709[(2)]);
var state_21709__$1 = state_21709;
var statearr_21730_22136 = state_21709__$1;
(statearr_21730_22136[(2)] = inst_21475);


cljs.core.async.impl.ioc_helpers.process_exception(state_21709__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (233))){
var inst_21674 = (state_21709[(2)]);
var state_21709__$1 = state_21709;
var statearr_21731_22137 = state_21709__$1;
(statearr_21731_22137[(2)] = inst_21674);

(statearr_21731_22137[(1)] = (232));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (298))){
var inst_21700 = (state_21709[(2)]);
var state_21709__$1 = state_21709;
var statearr_21732_22138 = state_21709__$1;
(statearr_21732_22138[(2)] = inst_21700);

(statearr_21732_22138[(1)] = (58));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (188))){
var inst_21442 = (state_21709[(12)]);
var inst_21442__$1 = (state_21709[(2)]);
var inst_21443 = (inst_21442__$1 === cljs.core.match.backtrack);
var state_21709__$1 = (function (){var statearr_21733 = state_21709;
(statearr_21733[(12)] = inst_21442__$1);

return statearr_21733;
})();
if(cljs.core.truth_(inst_21443)){
var statearr_21734_22139 = state_21709__$1;
(statearr_21734_22139[(1)] = (189));

} else {
var statearr_21735_22140 = state_21709__$1;
(statearr_21735_22140[(1)] = (190));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (240))){
var state_21709__$1 = state_21709;
var statearr_21736_22141 = state_21709__$1;
(statearr_21736_22141[(1)] = (287));



return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (110))){
var inst_21088 = (state_21709[(13)]);
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_21709,(106),Error,null,(105));
var inst_21278 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_21088,cljs.core.cst$kw$status,cljs.core.cst$kw$clojure$core$match_SLASH_not_DASH_found);
var inst_21279 = cljs.core.keyword_identical_QMARK_(inst_21278,cljs.core.cst$kw$in_DASH_progress);
var state_21709__$1 = state_21709;
if(inst_21279){
var statearr_21738_22142 = state_21709__$1;
(statearr_21738_22142[(1)] = (111));

} else {
var statearr_21739_22143 = state_21709__$1;
(statearr_21739_22143[(1)] = (112));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (130))){
var inst_21497 = (state_21709[(2)]);
var state_21709__$1 = state_21709;
var statearr_21740_22144 = state_21709__$1;
(statearr_21740_22144[(2)] = inst_21497);

(statearr_21740_22144[(1)] = (129));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (128))){
var state_21709__$1 = state_21709;
var statearr_21741_22145 = state_21709__$1;
(statearr_21741_22145[(1)] = (208));



return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (259))){
var inst_21617 = (state_21709[(2)]);
var state_21709__$1 = state_21709;
if(cljs.core.truth_(inst_21617)){
var statearr_21743_22146 = state_21709__$1;
(statearr_21743_22146[(1)] = (266));

} else {
var statearr_21744_22147 = state_21709__$1;
(statearr_21744_22147[(1)] = (267));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (210))){
var inst_21503 = (state_21709[(2)]);
var state_21709__$1 = state_21709;
var statearr_21745_22148 = state_21709__$1;
(statearr_21745_22148[(2)] = inst_21503);

(statearr_21745_22148[(1)] = (129));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (229))){
var inst_21546 = (state_21709[(2)]);
var state_21709__$1 = state_21709;
var statearr_21746_22149 = state_21709__$1;
(statearr_21746_22149[(2)] = inst_21546);

(statearr_21746_22149[(1)] = (226));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (153))){
var inst_21395 = (state_21709[(2)]);
var state_21709__$1 = state_21709;
var statearr_21747_22150 = state_21709__$1;
(statearr_21747_22150[(2)] = inst_21395);

(statearr_21747_22150[(1)] = (152));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (213))){
var state_21709__$1 = state_21709;
var statearr_21748_22151 = state_21709__$1;
(statearr_21748_22151[(1)] = (293));



return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (7))){
var state_21709__$1 = state_21709;
var statearr_21750_22152 = state_21709__$1;
(statearr_21750_22152[(2)] = null);

(statearr_21750_22152[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (59))){
var inst_21694 = (state_21709[(2)]);
var state_21709__$1 = state_21709;
var statearr_21751_22153 = state_21709__$1;
(statearr_21751_22153[(2)] = inst_21694);

(statearr_21751_22153[(1)] = (58));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (86))){
var inst_21309 = (state_21709[(2)]);
var state_21709__$1 = state_21709;
var statearr_21752_22154 = state_21709__$1;
(statearr_21752_22154[(2)] = inst_21309);


cljs.core.async.impl.ioc_helpers.process_exception(state_21709__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (154))){
var inst_21371 = (state_21709[(14)]);
var inst_21371__$1 = (state_21709[(2)]);
var inst_21372 = (inst_21371__$1 === cljs.core.match.backtrack);
var state_21709__$1 = (function (){var statearr_21753 = state_21709;
(statearr_21753[(14)] = inst_21371__$1);

return statearr_21753;
})();
if(cljs.core.truth_(inst_21372)){
var statearr_21754_22155 = state_21709__$1;
(statearr_21754_22155[(1)] = (155));

} else {
var statearr_21755_22156 = state_21709__$1;
(statearr_21755_22156[(1)] = (156));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (20))){
var inst_21088 = (state_21709[(13)]);
var inst_21112 = inst_21088.cljs$lang$protocol_mask$partition0$;
var inst_21113 = (!inst_21112);
var state_21709__$1 = state_21709;
if(cljs.core.truth_(inst_21113)){
var statearr_21756_22157 = state_21709__$1;
(statearr_21756_22157[(1)] = (22));

} else {
var statearr_21757_22158 = state_21709__$1;
(statearr_21757_22158[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (224))){
var state_21709__$1 = state_21709;
var statearr_21758_22159 = state_21709__$1;
(statearr_21758_22159[(2)] = true);

(statearr_21758_22159[(1)] = (226));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (72))){
var inst_21204 = (state_21709[(8)]);
var inst_21209 = (function(){throw inst_21204})();
var state_21709__$1 = state_21709;
var statearr_21759_22160 = state_21709__$1;
(statearr_21759_22160[(2)] = inst_21209);

(statearr_21759_22160[(1)] = (73));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (58))){
var inst_21702 = (state_21709[(2)]);
var state_21709__$1 = state_21709;
var statearr_21760_22161 = state_21709__$1;
(statearr_21760_22161[(2)] = inst_21702);


cljs.core.async.impl.ioc_helpers.process_exception(state_21709__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (205))){
var inst_21490 = (function(){throw cljs.core.match.backtrack})();
var state_21709__$1 = state_21709;
var statearr_21761_22162 = state_21709__$1;
(statearr_21761_22162[(2)] = inst_21490);

(statearr_21761_22162[(1)] = (207));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (60))){
var inst_21198 = (state_21709[(10)]);
var inst_21198__$1 = (state_21709[(2)]);
var inst_21199 = (inst_21198__$1 === cljs.core.match.backtrack);
var state_21709__$1 = (function (){var statearr_21762 = state_21709;
(statearr_21762[(10)] = inst_21198__$1);

return statearr_21762;
})();
if(cljs.core.truth_(inst_21199)){
var statearr_21763_22163 = state_21709__$1;
(statearr_21763_22163[(1)] = (61));

} else {
var statearr_21764_22164 = state_21709__$1;
(statearr_21764_22164[(1)] = (62));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (175))){
var inst_21088 = (state_21709[(13)]);
var inst_21422 = inst_21088.cljs$lang$protocol_mask$partition0$;
var inst_21423 = (inst_21422 & (256));
var inst_21424 = inst_21088.cljs$core$ILookup$;
var inst_21425 = (inst_21423) || (inst_21424);
var state_21709__$1 = state_21709;
if(cljs.core.truth_(inst_21425)){
var statearr_21765_22165 = state_21709__$1;
(statearr_21765_22165[(1)] = (178));

} else {
var statearr_21766_22166 = state_21709__$1;
(statearr_21766_22166[(1)] = (179));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (27))){
var inst_21183 = (state_21709[(2)]);
var state_21709__$1 = state_21709;
var statearr_21767_22167 = state_21709__$1;
(statearr_21767_22167[(2)] = inst_21183);


cljs.core.async.impl.ioc_helpers.process_exception(state_21709__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (1))){
var state_21709__$1 = state_21709;
var statearr_21768_22168 = state_21709__$1;
(statearr_21768_22168[(2)] = null);

(statearr_21768_22168[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (69))){
var inst_21321 = (state_21709[(2)]);
var state_21709__$1 = state_21709;
var statearr_21769_22169 = state_21709__$1;
(statearr_21769_22169[(2)] = inst_21321);

(statearr_21769_22169[(1)] = (68));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (101))){
var inst_21259 = (state_21709[(2)]);
var state_21709__$1 = state_21709;
var statearr_21770_22170 = state_21709__$1;
(statearr_21770_22170[(2)] = inst_21259);

(statearr_21770_22170[(1)] = (98));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (24))){
var inst_21118 = (state_21709[(2)]);
var state_21709__$1 = state_21709;
var statearr_21771_22171 = state_21709__$1;
(statearr_21771_22171[(2)] = inst_21118);

(statearr_21771_22171[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (102))){
var state_21709__$1 = state_21709;
var statearr_21772_22172 = state_21709__$1;
(statearr_21772_22172[(2)] = null);

(statearr_21772_22172[(1)] = (110));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (135))){
var inst_21343 = (state_21709[(15)]);
var inst_21087 = (state_21709[(11)]);
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_21709,(131),Error,null,(130));
var inst_21343__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(inst_21087,(1));
var inst_21345 = (inst_21343__$1 == null);
var inst_21346 = cljs.core.not(inst_21345);
var state_21709__$1 = (function (){var statearr_21773 = state_21709;
(statearr_21773[(15)] = inst_21343__$1);

return statearr_21773;
})();
if(inst_21346){
var statearr_21774_22173 = state_21709__$1;
(statearr_21774_22173[(1)] = (136));

} else {
var statearr_21775_22174 = state_21709__$1;
(statearr_21775_22174[(1)] = (137));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (55))){
var inst_21087 = (state_21709[(11)]);
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_21709,(6),Error,null,(5));
var inst_21193 = cljs.core.vector_QMARK_(inst_21087);
var inst_21194 = cljs.core.count(inst_21087);
var inst_21195 = (inst_21194 === 2);
var inst_21196 = (inst_21193) && (inst_21195);
var state_21709__$1 = state_21709;
if(cljs.core.truth_(inst_21196)){
var statearr_21776_22175 = state_21709__$1;
(statearr_21776_22175[(1)] = (56));

} else {
var statearr_21777_22176 = state_21709__$1;
(statearr_21777_22176[(1)] = (57));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (269))){
var inst_21644 = (state_21709[(2)]);
var state_21709__$1 = state_21709;
var statearr_21778_22177 = state_21709__$1;
(statearr_21778_22177[(2)] = inst_21644);

(statearr_21778_22177[(1)] = (268));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (206))){
var state_21709__$1 = state_21709;
var statearr_21779_22178 = state_21709__$1;
(statearr_21779_22178[(2)] = null);

(statearr_21779_22178[(1)] = (207));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (165))){
var inst_21088 = (state_21709[(13)]);
var inst_21329 = (state_21709[(16)]);
var inst_21343 = (state_21709[(15)]);
var inst_21198 = (state_21709[(10)]);
var inst_21087 = (state_21709[(11)]);
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_21709,(149),Error,null,(148));
var inst_21403 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_21343,cljs.core.cst$kw$keycode,cljs.core.cst$kw$clojure$core$match_SLASH_not_DASH_found);
var inst_21404 = (function (){var ocr_21048 = inst_21087;
var ocr_21049 = inst_21088;
var e__19059__auto__ = inst_21198;
var ocr_21048_0__21058 = inst_21329;
var ocr_21048_1__21059 = inst_21343;
var ocr_21048_1__21059_keycode__21070 = inst_21403;
return ((function (ocr_21048,ocr_21049,e__19059__auto__,ocr_21048_0__21058,ocr_21048_1__21059,ocr_21048_1__21059_keycode__21070,inst_21088,inst_21329,inst_21343,inst_21198,inst_21087,___$1,inst_21403,state_val_21710,c__10184__auto__,move_snake_ch){
return (function (p1__19973_SHARP_){
return (((40) >= p1__19973_SHARP_)) && ((p1__19973_SHARP_ >= (37)));
});
;})(ocr_21048,ocr_21049,e__19059__auto__,ocr_21048_0__21058,ocr_21048_1__21059,ocr_21048_1__21059_keycode__21070,inst_21088,inst_21329,inst_21343,inst_21198,inst_21087,___$1,inst_21403,state_val_21710,c__10184__auto__,move_snake_ch))
})();
var inst_21405 = (inst_21404.cljs$core$IFn$_invoke$arity$1 ? inst_21404.cljs$core$IFn$_invoke$arity$1(inst_21403) : inst_21404.call(null,inst_21403));
var state_21709__$1 = state_21709;
if(cljs.core.truth_(inst_21405)){
var statearr_21780_22179 = state_21709__$1;
(statearr_21780_22179[(1)] = (166));

} else {
var statearr_21781_22180 = state_21709__$1;
(statearr_21781_22180[(1)] = (167));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (85))){
var state_21709__$1 = state_21709;
var statearr_21782_22181 = state_21709__$1;
(statearr_21782_22181[(1)] = (120));



return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (225))){
var inst_21529 = (state_21709[(17)]);
var inst_21540 = inst_21529.cljs$lang$protocol_mask$partition0$;
var inst_21541 = (!inst_21540);
var state_21709__$1 = state_21709;
if(cljs.core.truth_(inst_21541)){
var statearr_21784_22182 = state_21709__$1;
(statearr_21784_22182[(1)] = (227));

} else {
var statearr_21785_22183 = state_21709__$1;
(statearr_21785_22183[(1)] = (228));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (297))){
var state_21709__$1 = state_21709;
var statearr_21786_22184 = state_21709__$1;
(statearr_21786_22184[(2)] = null);

(statearr_21786_22184[(1)] = (298));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (39))){
var inst_21143 = (function(){throw cljs.core.match.backtrack})();
var state_21709__$1 = state_21709;
var statearr_21787_22185 = state_21709__$1;
(statearr_21787_22185[(2)] = inst_21143);

(statearr_21787_22185[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (274))){
var inst_21088 = (state_21709[(13)]);
var inst_21565 = (state_21709[(18)]);
var inst_21529 = (state_21709[(17)]);
var inst_21580 = (state_21709[(19)]);
var inst_21515 = (state_21709[(20)]);
var inst_21087 = (state_21709[(11)]);
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_21709,(270),Error,null,(269));
var inst_21630 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_21088,cljs.core.cst$kw$status,cljs.core.cst$kw$clojure$core$match_SLASH_not_DASH_found);
var inst_21631 = (function (){var ocr_21048 = inst_21087;
var ocr_21049 = inst_21088;
var ocr_21048_0__21058 = inst_21515;
var ocr_21048_1__21059 = inst_21529;
var ocr_21048_1__21059_y__21063 = inst_21565;
var ocr_21048_1__21059_x__21064 = inst_21580;
var ocr_21049_status__21067 = inst_21630;
return ((function (ocr_21048,ocr_21049,ocr_21048_0__21058,ocr_21048_1__21059,ocr_21048_1__21059_y__21063,ocr_21048_1__21059_x__21064,ocr_21049_status__21067,inst_21088,inst_21565,inst_21529,inst_21580,inst_21515,inst_21087,___$1,inst_21630,state_val_21710,c__10184__auto__,move_snake_ch){
return (function (p1__19972_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__19972_SHARP_,cljs.core.cst$kw$in_DASH_progress);
});
;})(ocr_21048,ocr_21049,ocr_21048_0__21058,ocr_21048_1__21059,ocr_21048_1__21059_y__21063,ocr_21048_1__21059_x__21064,ocr_21049_status__21067,inst_21088,inst_21565,inst_21529,inst_21580,inst_21515,inst_21087,___$1,inst_21630,state_val_21710,c__10184__auto__,move_snake_ch))
})();
var inst_21632 = (inst_21631.cljs$core$IFn$_invoke$arity$1 ? inst_21631.cljs$core$IFn$_invoke$arity$1(inst_21630) : inst_21631.call(null,inst_21630));
var state_21709__$1 = state_21709;
if(cljs.core.truth_(inst_21632)){
var statearr_21788_22186 = state_21709__$1;
(statearr_21788_22186[(1)] = (275));

} else {
var statearr_21789_22187 = state_21709__$1;
(statearr_21789_22187[(1)] = (276));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (88))){
var inst_21232 = (state_21709[(21)]);
var inst_21232__$1 = (state_21709[(2)]);
var inst_21233 = (inst_21232__$1 === cljs.core.match.backtrack);
var state_21709__$1 = (function (){var statearr_21790 = state_21709;
(statearr_21790[(21)] = inst_21232__$1);

return statearr_21790;
})();
if(cljs.core.truth_(inst_21233)){
var statearr_21791_22188 = state_21709__$1;
(statearr_21791_22188[(1)] = (89));

} else {
var statearr_21792_22189 = state_21709__$1;
(statearr_21792_22189[(1)] = (90));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (217))){
var inst_21521 = (function(){throw cljs.core.match.backtrack})();
var state_21709__$1 = state_21709;
var statearr_21793_22190 = state_21709__$1;
(statearr_21793_22190[(2)] = inst_21521);

(statearr_21793_22190[(1)] = (219));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (46))){
var inst_21158 = (function(){throw cljs.core.match.backtrack})();
var state_21709__$1 = state_21709;
var statearr_21794_22191 = state_21709__$1;
(statearr_21794_22191[(2)] = inst_21158);

(statearr_21794_22191[(1)] = (48));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (149))){
var inst_21368 = (state_21709[(22)]);
var inst_21368__$1 = (state_21709[(2)]);
var inst_21369 = (inst_21368__$1 === cljs.core.match.backtrack);
var state_21709__$1 = (function (){var statearr_21795 = state_21709;
(statearr_21795[(22)] = inst_21368__$1);

return statearr_21795;
})();
if(cljs.core.truth_(inst_21369)){
var statearr_21796_22192 = state_21709__$1;
(statearr_21796_22192[(1)] = (150));

} else {
var statearr_21797_22193 = state_21709__$1;
(statearr_21797_22193[(1)] = (151));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (239))){
var state_21709__$1 = state_21709;
var statearr_21798_22194 = state_21709__$1;
(statearr_21798_22194[(2)] = null);

(statearr_21798_22194[(1)] = (247));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (157))){
var inst_21378 = (state_21709[(2)]);
var state_21709__$1 = state_21709;
var statearr_21799_22195 = state_21709__$1;
(statearr_21799_22195[(2)] = inst_21378);


cljs.core.async.impl.ioc_helpers.process_exception(state_21709__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (4))){
var inst_21086 = (state_21709[(2)]);
var inst_21087 = cljs.core.first(inst_21086);
var inst_21088 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state_atom) : cljs.core.deref.call(null,state_atom));
var state_21709__$1 = (function (){var statearr_21800 = state_21709;
(statearr_21800[(13)] = inst_21088);

(statearr_21800[(11)] = inst_21087);

return statearr_21800;
})();
var statearr_21801_22196 = state_21709__$1;
(statearr_21801_22196[(2)] = null);

(statearr_21801_22196[(1)] = (55));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (204))){
var inst_21483 = (state_21709[(2)]);
var state_21709__$1 = state_21709;
var statearr_21802_22197 = state_21709__$1;
(statearr_21802_22197[(2)] = inst_21483);

(statearr_21802_22197[(1)] = (168));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (77))){
var inst_21319 = (state_21709[(2)]);
var state_21709__$1 = state_21709;
var statearr_21803_22198 = state_21709__$1;
(statearr_21803_22198[(2)] = inst_21319);


cljs.core.async.impl.ioc_helpers.process_exception(state_21709__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (106))){
var inst_21267 = (state_21709[(23)]);
var inst_21267__$1 = (state_21709[(2)]);
var inst_21268 = (inst_21267__$1 === cljs.core.match.backtrack);
var state_21709__$1 = (function (){var statearr_21804 = state_21709;
(statearr_21804[(23)] = inst_21267__$1);

return statearr_21804;
})();
if(cljs.core.truth_(inst_21268)){
var statearr_21805_22199 = state_21709__$1;
(statearr_21805_22199[(1)] = (107));

} else {
var statearr_21806_22200 = state_21709__$1;
(statearr_21806_22200[(1)] = (108));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (197))){
var state_21709__$1 = state_21709;
var statearr_21807_22201 = state_21709__$1;
(statearr_21807_22201[(2)] = null);

(statearr_21807_22201[(1)] = (198));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (232))){
var inst_21682 = (state_21709[(2)]);
var state_21709__$1 = state_21709;
var statearr_21808_22202 = state_21709__$1;
(statearr_21808_22202[(2)] = inst_21682);


cljs.core.async.impl.ioc_helpers.process_exception(state_21709__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (260))){
var state_21709__$1 = state_21709;
var statearr_21809_22203 = state_21709__$1;
(statearr_21809_22203[(2)] = true);

(statearr_21809_22203[(1)] = (262));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (267))){
var state_21709__$1 = state_21709;
var statearr_21810_22204 = state_21709__$1;
(statearr_21810_22204[(1)] = (281));



return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (119))){
var inst_21297 = (state_21709[(2)]);
var state_21709__$1 = state_21709;
var statearr_21812_22205 = state_21709__$1;
(statearr_21812_22205[(2)] = inst_21297);

(statearr_21812_22205[(1)] = (104));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (222))){
var inst_21529 = (state_21709[(17)]);
var inst_21550 = cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,inst_21529);
var state_21709__$1 = state_21709;
var statearr_21813_22206 = state_21709__$1;
(statearr_21813_22206[(2)] = inst_21550);

(statearr_21813_22206[(1)] = (223));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (293))){
var inst_21687 = (function(){throw cljs.core.match.backtrack})();
var state_21709__$1 = state_21709;
var statearr_21814_22207 = state_21709__$1;
(statearr_21814_22207[(2)] = inst_21687);

(statearr_21814_22207[(1)] = (295));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (95))){
var inst_21265 = (state_21709[(2)]);
var state_21709__$1 = state_21709;
if(cljs.core.truth_(inst_21265)){
var statearr_21815_22208 = state_21709__$1;
(statearr_21815_22208[(1)] = (102));

} else {
var statearr_21816_22209 = state_21709__$1;
(statearr_21816_22209[(1)] = (103));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (144))){
var inst_21360 = (state_21709[(2)]);
var state_21709__$1 = state_21709;
var statearr_21817_22210 = state_21709__$1;
(statearr_21817_22210[(2)] = inst_21360);

(statearr_21817_22210[(1)] = (141));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (176))){
var inst_21088 = (state_21709[(13)]);
var inst_21438 = cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,inst_21088);
var state_21709__$1 = state_21709;
var statearr_21818_22211 = state_21709__$1;
(statearr_21818_22211[(2)] = inst_21438);

(statearr_21818_22211[(1)] = (177));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (192))){
var inst_21088 = (state_21709[(13)]);
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_21709,(188),Error,null,(187));
var inst_21453 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_21088,cljs.core.cst$kw$status,cljs.core.cst$kw$clojure$core$match_SLASH_not_DASH_found);
var inst_21454 = cljs.core.keyword_identical_QMARK_(inst_21453,cljs.core.cst$kw$in_DASH_progress);
var state_21709__$1 = state_21709;
if(inst_21454){
var statearr_21819_22212 = state_21709__$1;
(statearr_21819_22212[(1)] = (193));

} else {
var statearr_21820_22213 = state_21709__$1;
(statearr_21820_22213[(1)] = (194));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (54))){
var inst_21181 = (state_21709[(2)]);
var state_21709__$1 = state_21709;
var statearr_21821_22214 = state_21709__$1;
(statearr_21821_22214[(2)] = inst_21181);

(statearr_21821_22214[(1)] = (27));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (92))){
var inst_21088 = (state_21709[(13)]);
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_21709,(88),Error,null,(87));
var inst_21244 = (inst_21088 == null);
var inst_21245 = cljs.core.not(inst_21244);
var state_21709__$1 = state_21709;
if(inst_21245){
var statearr_21822_22215 = state_21709__$1;
(statearr_21822_22215[(1)] = (93));

} else {
var statearr_21823_22216 = state_21709__$1;
(statearr_21823_22216[(1)] = (94));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (221))){
var inst_21529 = (state_21709[(17)]);
var inst_21534 = inst_21529.cljs$lang$protocol_mask$partition0$;
var inst_21535 = (inst_21534 & (256));
var inst_21536 = inst_21529.cljs$core$ILookup$;
var inst_21537 = (inst_21535) || (inst_21536);
var state_21709__$1 = state_21709;
if(cljs.core.truth_(inst_21537)){
var statearr_21824_22217 = state_21709__$1;
(statearr_21824_22217[(1)] = (224));

} else {
var statearr_21825_22218 = state_21709__$1;
(statearr_21825_22218[(1)] = (225));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (141))){
var inst_21362 = (state_21709[(2)]);
var state_21709__$1 = state_21709;
var statearr_21826_22219 = state_21709__$1;
(statearr_21826_22219[(2)] = inst_21362);

(statearr_21826_22219[(1)] = (138));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (290))){
var inst_21677 = (function(){throw cljs.core.match.backtrack})();
var state_21709__$1 = state_21709;
var statearr_21827_22220 = state_21709__$1;
(statearr_21827_22220[(2)] = inst_21677);

(statearr_21827_22220[(1)] = (292));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (264))){
var state_21709__$1 = state_21709;
var statearr_21828_22221 = state_21709__$1;
(statearr_21828_22221[(2)] = false);

(statearr_21828_22221[(1)] = (265));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (137))){
var inst_21343 = (state_21709[(15)]);
var inst_21364 = cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,inst_21343);
var state_21709__$1 = state_21709;
var statearr_21829_22222 = state_21709__$1;
(statearr_21829_22222[(2)] = inst_21364);

(statearr_21829_22222[(1)] = (138));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (234))){
var inst_21554 = (state_21709[(24)]);
var inst_21554__$1 = (state_21709[(2)]);
var inst_21555 = (inst_21554__$1 === cljs.core.match.backtrack);
var state_21709__$1 = (function (){var statearr_21830 = state_21709;
(statearr_21830[(24)] = inst_21554__$1);

return statearr_21830;
})();
if(cljs.core.truth_(inst_21555)){
var statearr_21831_22223 = state_21709__$1;
(statearr_21831_22223[(1)] = (235));

} else {
var statearr_21832_22224 = state_21709__$1;
(statearr_21832_22224[(1)] = (236));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (104))){
var inst_21299 = (state_21709[(2)]);
var state_21709__$1 = state_21709;
var statearr_21833_22225 = state_21709__$1;
(statearr_21833_22225[(2)] = inst_21299);


cljs.core.async.impl.ioc_helpers.process_exception(state_21709__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (15))){
var inst_21088 = (state_21709[(13)]);
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_21709,(11),Error,null,(10));
var inst_21103 = (inst_21088 == null);
var inst_21104 = cljs.core.not(inst_21103);
var state_21709__$1 = state_21709;
if(inst_21104){
var statearr_21834_22226 = state_21709__$1;
(statearr_21834_22226[(1)] = (16));

} else {
var statearr_21835_22227 = state_21709__$1;
(statearr_21835_22227[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (48))){
var inst_21161 = (state_21709[(2)]);
var state_21709__$1 = state_21709;
var statearr_21836_22228 = state_21709__$1;
(statearr_21836_22228[(2)] = inst_21161);

(statearr_21836_22228[(1)] = (45));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (242))){
var inst_21664 = (state_21709[(2)]);
var state_21709__$1 = state_21709;
var statearr_21837_22229 = state_21709__$1;
(statearr_21837_22229[(2)] = inst_21664);

(statearr_21837_22229[(1)] = (241));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (50))){
var state_21709__$1 = state_21709;
var statearr_21838_22230 = state_21709__$1;
(statearr_21838_22230[(2)] = null);

(statearr_21838_22230[(1)] = (51));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (251))){
var inst_21654 = (state_21709[(2)]);
var state_21709__$1 = state_21709;
var statearr_21839_22231 = state_21709__$1;
(statearr_21839_22231[(2)] = inst_21654);

(statearr_21839_22231[(1)] = (250));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (116))){
var inst_21287 = (state_21709[(2)]);
var state_21709__$1 = state_21709;
var statearr_21840_22232 = state_21709__$1;
(statearr_21840_22232[(2)] = inst_21287);

(statearr_21840_22232[(1)] = (113));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (75))){
var state_21709__$1 = state_21709;
var statearr_21841_22233 = state_21709__$1;
(statearr_21841_22233[(2)] = null);

(statearr_21841_22233[(1)] = (83));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (159))){
var inst_21385 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,rerenderer_example.snake.handler.change_game_state);
var state_21709__$1 = state_21709;
var statearr_21842_22234 = state_21709__$1;
(statearr_21842_22234[(2)] = inst_21385);

(statearr_21842_22234[(1)] = (161));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (99))){
var inst_21088 = (state_21709[(13)]);
var inst_21256 = cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,inst_21088);
var state_21709__$1 = state_21709;
var statearr_21843_22235 = state_21709__$1;
(statearr_21843_22235[(2)] = inst_21256);

(statearr_21843_22235[(1)] = (101));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (281))){
var inst_21647 = (function(){throw cljs.core.match.backtrack})();
var state_21709__$1 = state_21709;
var statearr_21844_22236 = state_21709__$1;
(statearr_21844_22236[(2)] = inst_21647);

(statearr_21844_22236[(1)] = (283));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (21))){
var inst_21120 = (state_21709[(2)]);
var state_21709__$1 = state_21709;
var statearr_21845_22237 = state_21709__$1;
(statearr_21845_22237[(2)] = inst_21120);

(statearr_21845_22237[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (31))){
var inst_21126 = (state_21709[(25)]);
var inst_21131 = (function(){throw inst_21126})();
var state_21709__$1 = state_21709;
var statearr_21846_22238 = state_21709__$1;
(statearr_21846_22238[(2)] = inst_21131);

(statearr_21846_22238[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (113))){
var inst_21289 = (state_21709[(2)]);
var state_21709__$1 = state_21709;
var statearr_21847_22239 = state_21709__$1;
(statearr_21847_22239[(2)] = inst_21289);


cljs.core.async.impl.ioc_helpers.process_exception(state_21709__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (32))){
var inst_21133 = (state_21709[(2)]);
var state_21709__$1 = state_21709;
var statearr_21848_22240 = state_21709__$1;
(statearr_21848_22240[(2)] = inst_21133);


cljs.core.async.impl.ioc_helpers.process_exception(state_21709__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (136))){
var inst_21343 = (state_21709[(15)]);
var inst_21348 = inst_21343.cljs$lang$protocol_mask$partition0$;
var inst_21349 = (inst_21348 & (256));
var inst_21350 = inst_21343.cljs$core$ILookup$;
var inst_21351 = (inst_21349) || (inst_21350);
var state_21709__$1 = state_21709;
if(cljs.core.truth_(inst_21351)){
var statearr_21849_22241 = state_21709__$1;
(statearr_21849_22241[(1)] = (139));

} else {
var statearr_21850_22242 = state_21709__$1;
(statearr_21850_22242[(1)] = (140));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (139))){
var state_21709__$1 = state_21709;
var statearr_21851_22243 = state_21709__$1;
(statearr_21851_22243[(2)] = true);

(statearr_21851_22243[(1)] = (141));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (174))){
var inst_21088 = (state_21709[(13)]);
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_21709,(170),Error,null,(169));
var inst_21419 = (inst_21088 == null);
var inst_21420 = cljs.core.not(inst_21419);
var state_21709__$1 = state_21709;
if(inst_21420){
var statearr_21852_22244 = state_21709__$1;
(statearr_21852_22244[(1)] = (175));

} else {
var statearr_21853_22245 = state_21709__$1;
(statearr_21853_22245[(1)] = (176));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (284))){
var inst_21657 = (function(){throw cljs.core.match.backtrack})();
var state_21709__$1 = state_21709;
var statearr_21854_22246 = state_21709__$1;
(statearr_21854_22246[(2)] = inst_21657);

(statearr_21854_22246[(1)] = (286));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (208))){
var inst_21500 = (function(){throw cljs.core.match.backtrack})();
var state_21709__$1 = state_21709;
var statearr_21855_22247 = state_21709__$1;
(statearr_21855_22247[(2)] = inst_21500);

(statearr_21855_22247[(1)] = (210));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (182))){
var state_21709__$1 = state_21709;
var statearr_21856_22248 = state_21709__$1;
(statearr_21856_22248[(2)] = false);

(statearr_21856_22248[(1)] = (183));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (256))){
var inst_21088 = (state_21709[(13)]);
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_21709,(252),Error,null,(251));
var inst_21596 = (inst_21088 == null);
var inst_21597 = cljs.core.not(inst_21596);
var state_21709__$1 = state_21709;
if(inst_21597){
var statearr_21857_22249 = state_21709__$1;
(statearr_21857_22249[(1)] = (257));

} else {
var statearr_21858_22250 = state_21709__$1;
(statearr_21858_22250[(1)] = (258));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (214))){
var inst_21692 = (state_21709[(2)]);
var state_21709__$1 = state_21709;
var statearr_21859_22251 = state_21709__$1;
(statearr_21859_22251[(2)] = inst_21692);


cljs.core.async.impl.ioc_helpers.process_exception(state_21709__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (193))){
var inst_21343 = (state_21709[(15)]);
var inst_21456 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21343,cljs.core.cst$kw$keycode);
var inst_21457 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,rerenderer_example.snake.handler.change_direction,inst_21456);
var state_21709__$1 = state_21709;
var statearr_21860_22252 = state_21709__$1;
(statearr_21860_22252[(2)] = inst_21457);

(statearr_21860_22252[(1)] = (195));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (241))){
var inst_21672 = (state_21709[(2)]);
var state_21709__$1 = state_21709;
var statearr_21861_22253 = state_21709__$1;
(statearr_21861_22253[(2)] = inst_21672);


cljs.core.async.impl.ioc_helpers.process_exception(state_21709__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (226))){
var inst_21548 = (state_21709[(2)]);
var state_21709__$1 = state_21709;
var statearr_21862_22254 = state_21709__$1;
(statearr_21862_22254[(2)] = inst_21548);

(statearr_21862_22254[(1)] = (223));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (235))){
var inst_21557 = (function(){throw cljs.core.match.backtrack})();
var state_21709__$1 = state_21709;
var statearr_21863_22255 = state_21709__$1;
(statearr_21863_22255[(2)] = inst_21557);

(statearr_21863_22255[(1)] = (237));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (262))){
var inst_21613 = (state_21709[(2)]);
var state_21709__$1 = state_21709;
var statearr_21864_22256 = state_21709__$1;
(statearr_21864_22256[(2)] = inst_21613);

(statearr_21864_22256[(1)] = (259));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (263))){
var inst_21088 = (state_21709[(13)]);
var inst_21608 = cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,inst_21088);
var state_21709__$1 = state_21709;
var statearr_21865_22257 = state_21709__$1;
(statearr_21865_22257[(2)] = inst_21608);

(statearr_21865_22257[(1)] = (265));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (40))){
var inst_21140 = (state_21709[(26)]);
var inst_21145 = (function(){throw inst_21140})();
var state_21709__$1 = state_21709;
var statearr_21866_22258 = state_21709__$1;
(statearr_21866_22258[(2)] = inst_21145);

(statearr_21866_22258[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (129))){
var inst_21505 = (state_21709[(2)]);
var state_21709__$1 = state_21709;
var statearr_21867_22259 = state_21709__$1;
(statearr_21867_22259[(2)] = inst_21505);


cljs.core.async.impl.ioc_helpers.process_exception(state_21709__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (294))){
var state_21709__$1 = state_21709;
var statearr_21868_22260 = state_21709__$1;
(statearr_21868_22260[(2)] = null);

(statearr_21868_22260[(1)] = (295));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (91))){
var inst_21239 = (state_21709[(2)]);
var state_21709__$1 = state_21709;
var statearr_21869_22261 = state_21709__$1;
(statearr_21869_22261[(2)] = inst_21239);


cljs.core.async.impl.ioc_helpers.process_exception(state_21709__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (117))){
var inst_21294 = (function(){throw cljs.core.match.backtrack})();
var state_21709__$1 = state_21709;
var statearr_21870_22262 = state_21709__$1;
(statearr_21870_22262[(2)] = inst_21294);

(statearr_21870_22262[(1)] = (119));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (172))){
var inst_21407 = (state_21709[(27)]);
var inst_21412 = (function(){throw inst_21407})();
var state_21709__$1 = state_21709;
var statearr_21871_22263 = state_21709__$1;
(statearr_21871_22263[(2)] = inst_21412);

(statearr_21871_22263[(1)] = (173));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (108))){
var inst_21267 = (state_21709[(23)]);
var inst_21272 = (function(){throw inst_21267})();
var state_21709__$1 = state_21709;
var statearr_21872_22264 = state_21709__$1;
(statearr_21872_22264[(2)] = inst_21272);

(statearr_21872_22264[(1)] = (109));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (156))){
var inst_21371 = (state_21709[(14)]);
var inst_21376 = (function(){throw inst_21371})();
var state_21709__$1 = state_21709;
var statearr_21873_22265 = state_21709__$1;
(statearr_21873_22265[(2)] = inst_21376);

(statearr_21873_22265[(1)] = (157));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (223))){
var inst_21552 = (state_21709[(2)]);
var state_21709__$1 = state_21709;
if(cljs.core.truth_(inst_21552)){
var statearr_21874_22266 = state_21709__$1;
(statearr_21874_22266[(1)] = (230));

} else {
var statearr_21875_22267 = state_21709__$1;
(statearr_21875_22267[(1)] = (231));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (181))){
var inst_21088 = (state_21709[(13)]);
var inst_21431 = cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,inst_21088);
var state_21709__$1 = state_21709;
var statearr_21876_22268 = state_21709__$1;
(statearr_21876_22268[(2)] = inst_21431);

(statearr_21876_22268[(1)] = (183));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (278))){
var inst_21637 = (function(){throw cljs.core.match.backtrack})();
var state_21709__$1 = state_21709;
var statearr_21877_22269 = state_21709__$1;
(statearr_21877_22269[(2)] = inst_21637);

(statearr_21877_22269[(1)] = (280));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (56))){
var state_21709__$1 = state_21709;
var statearr_21878_22270 = state_21709__$1;
(statearr_21878_22270[(2)] = null);

(statearr_21878_22270[(1)] = (211));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (33))){
var inst_21088 = (state_21709[(13)]);
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_21709,(29),Error,null,(28));
var inst_21137 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_21088,cljs.core.cst$kw$debug,cljs.core.cst$kw$clojure$core$match_SLASH_not_DASH_found);
var inst_21138 = (inst_21137 === true);
var state_21709__$1 = state_21709;
if(cljs.core.truth_(inst_21138)){
var statearr_21879_22271 = state_21709__$1;
(statearr_21879_22271[(1)] = (34));

} else {
var statearr_21880_22272 = state_21709__$1;
(statearr_21880_22272[(1)] = (35));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (13))){
var inst_21092 = (state_21709[(28)]);
var inst_21096 = (function(){throw inst_21092})();
var state_21709__$1 = state_21709;
var statearr_21881_22273 = state_21709__$1;
(statearr_21881_22273[(2)] = inst_21096);

(statearr_21881_22273[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (22))){
var inst_21088 = (state_21709[(13)]);
var inst_21115 = cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,inst_21088);
var state_21709__$1 = state_21709;
var statearr_21882_22274 = state_21709__$1;
(statearr_21882_22274[(2)] = inst_21115);

(statearr_21882_22274[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (257))){
var inst_21088 = (state_21709[(13)]);
var inst_21599 = inst_21088.cljs$lang$protocol_mask$partition0$;
var inst_21600 = (inst_21599 & (256));
var inst_21601 = inst_21088.cljs$core$ILookup$;
var inst_21602 = (inst_21600) || (inst_21601);
var state_21709__$1 = state_21709;
if(cljs.core.truth_(inst_21602)){
var statearr_21883_22275 = state_21709__$1;
(statearr_21883_22275[(1)] = (260));

} else {
var statearr_21884_22276 = state_21709__$1;
(statearr_21884_22276[(1)] = (261));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (168))){
var inst_21485 = (state_21709[(2)]);
var state_21709__$1 = state_21709;
var statearr_21885_22277 = state_21709__$1;
(statearr_21885_22277[(2)] = inst_21485);


cljs.core.async.impl.ioc_helpers.process_exception(state_21709__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (90))){
var inst_21232 = (state_21709[(21)]);
var inst_21237 = (function(){throw inst_21232})();
var state_21709__$1 = state_21709;
var statearr_21886_22278 = state_21709__$1;
(statearr_21886_22278[(2)] = inst_21237);

(statearr_21886_22278[(1)] = (91));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (237))){
var inst_21561 = (state_21709[(2)]);
var state_21709__$1 = state_21709;
var statearr_21887_22279 = state_21709__$1;
(statearr_21887_22279[(2)] = inst_21561);


cljs.core.async.impl.ioc_helpers.process_exception(state_21709__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (292))){
var inst_21680 = (state_21709[(2)]);
var state_21709__$1 = state_21709;
var statearr_21888_22280 = state_21709__$1;
(statearr_21888_22280[(2)] = inst_21680);

(statearr_21888_22280[(1)] = (232));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (109))){
var inst_21274 = (state_21709[(2)]);
var state_21709__$1 = state_21709;
var statearr_21889_22281 = state_21709__$1;
(statearr_21889_22281[(2)] = inst_21274);


cljs.core.async.impl.ioc_helpers.process_exception(state_21709__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (216))){
var inst_21518 = (state_21709[(9)]);
var inst_21518__$1 = (state_21709[(2)]);
var inst_21519 = (inst_21518__$1 === cljs.core.match.backtrack);
var state_21709__$1 = (function (){var statearr_21890 = state_21709;
(statearr_21890[(9)] = inst_21518__$1);

return statearr_21890;
})();
if(cljs.core.truth_(inst_21519)){
var statearr_21891_22282 = state_21709__$1;
(statearr_21891_22282[(1)] = (217));

} else {
var statearr_21892_22283 = state_21709__$1;
(statearr_21892_22283[(1)] = (218));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (191))){
var inst_21449 = (state_21709[(2)]);
var state_21709__$1 = state_21709;
var statearr_21893_22284 = state_21709__$1;
(statearr_21893_22284[(2)] = inst_21449);


cljs.core.async.impl.ioc_helpers.process_exception(state_21709__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (143))){
var state_21709__$1 = state_21709;
var statearr_21894_22285 = state_21709__$1;
(statearr_21894_22285[(2)] = false);

(statearr_21894_22285[(1)] = (144));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (178))){
var state_21709__$1 = state_21709;
var statearr_21895_22286 = state_21709__$1;
(statearr_21895_22286[(2)] = true);

(statearr_21895_22286[(1)] = (180));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (247))){
var inst_21088 = (state_21709[(13)]);
var inst_21565 = (state_21709[(18)]);
var inst_21529 = (state_21709[(17)]);
var inst_21580 = (state_21709[(19)]);
var inst_21515 = (state_21709[(20)]);
var inst_21087 = (state_21709[(11)]);
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_21709,(243),Error,null,(242));
var inst_21580__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_21529,cljs.core.cst$kw$x,cljs.core.cst$kw$clojure$core$match_SLASH_not_DASH_found);
var inst_21581 = (function (){var ocr_21048 = inst_21087;
var ocr_21049 = inst_21088;
var ocr_21048_0__21058 = inst_21515;
var ocr_21048_1__21059 = inst_21529;
var ocr_21048_1__21059_y__21063 = inst_21565;
var ocr_21048_1__21059_x__21064 = inst_21580__$1;
return ((function (ocr_21048,ocr_21049,ocr_21048_0__21058,ocr_21048_1__21059,ocr_21048_1__21059_y__21063,ocr_21048_1__21059_x__21064,inst_21088,inst_21565,inst_21529,inst_21580,inst_21515,inst_21087,___$1,inst_21580__$1,state_val_21710,c__10184__auto__,move_snake_ch){
return (function (p1__19970_SHARP_){
return (((700) > p1__19970_SHARP_)) && ((p1__19970_SHARP_ > (100)));
});
;})(ocr_21048,ocr_21049,ocr_21048_0__21058,ocr_21048_1__21059,ocr_21048_1__21059_y__21063,ocr_21048_1__21059_x__21064,inst_21088,inst_21565,inst_21529,inst_21580,inst_21515,inst_21087,___$1,inst_21580__$1,state_val_21710,c__10184__auto__,move_snake_ch))
})();
var inst_21582 = (inst_21581.cljs$core$IFn$_invoke$arity$1 ? inst_21581.cljs$core$IFn$_invoke$arity$1(inst_21580__$1) : inst_21581.call(null,inst_21580__$1));
var state_21709__$1 = (function (){var statearr_21896 = state_21709;
(statearr_21896[(19)] = inst_21580__$1);

return statearr_21896;
})();
if(cljs.core.truth_(inst_21582)){
var statearr_21897_22287 = state_21709__$1;
(statearr_21897_22287[(1)] = (248));

} else {
var statearr_21898_22288 = state_21709__$1;
(statearr_21898_22288[(1)] = (249));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (167))){
var state_21709__$1 = state_21709;
var statearr_21899_22289 = state_21709__$1;
(statearr_21899_22289[(1)] = (202));



return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (36))){
var inst_21173 = (state_21709[(2)]);
var state_21709__$1 = state_21709;
var statearr_21901_22290 = state_21709__$1;
(statearr_21901_22290[(2)] = inst_21173);


cljs.core.async.impl.ioc_helpers.process_exception(state_21709__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (41))){
var inst_21147 = (state_21709[(2)]);
var state_21709__$1 = state_21709;
var statearr_21902_22291 = state_21709__$1;
(statearr_21902_22291[(2)] = inst_21147);


cljs.core.async.impl.ioc_helpers.process_exception(state_21709__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (187))){
var inst_21467 = (state_21709[(2)]);
var state_21709__$1 = state_21709;
var statearr_21903_22292 = state_21709__$1;
(statearr_21903_22292[(2)] = inst_21467);

(statearr_21903_22292[(1)] = (186));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (195))){
var inst_21465 = (state_21709[(2)]);
var state_21709__$1 = state_21709;
var statearr_21904_22293 = state_21709__$1;
(statearr_21904_22293[(2)] = inst_21465);


cljs.core.async.impl.ioc_helpers.process_exception(state_21709__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (118))){
var state_21709__$1 = state_21709;
var statearr_21905_22294 = state_21709__$1;
(statearr_21905_22294[(2)] = null);

(statearr_21905_22294[(1)] = (119));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (150))){
var state_21709__$1 = state_21709;
var statearr_21906_22295 = state_21709__$1;
(statearr_21906_22295[(2)] = null);

(statearr_21906_22295[(1)] = (158));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (238))){
var inst_21088 = (state_21709[(13)]);
var inst_21565 = (state_21709[(18)]);
var inst_21529 = (state_21709[(17)]);
var inst_21515 = (state_21709[(20)]);
var inst_21087 = (state_21709[(11)]);
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_21709,(234),Error,null,(233));
var inst_21565__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_21529,cljs.core.cst$kw$y,cljs.core.cst$kw$clojure$core$match_SLASH_not_DASH_found);
var inst_21566 = (function (){var ocr_21048 = inst_21087;
var ocr_21049 = inst_21088;
var ocr_21048_0__21058 = inst_21515;
var ocr_21048_1__21059 = inst_21529;
var ocr_21048_1__21059_y__21063 = inst_21565__$1;
return ((function (ocr_21048,ocr_21049,ocr_21048_0__21058,ocr_21048_1__21059,ocr_21048_1__21059_y__21063,inst_21088,inst_21565,inst_21529,inst_21515,inst_21087,___$1,inst_21565__$1,state_val_21710,c__10184__auto__,move_snake_ch){
return (function (p1__19971_SHARP_){
return (((500) > p1__19971_SHARP_)) && ((p1__19971_SHARP_ > (400)));
});
;})(ocr_21048,ocr_21049,ocr_21048_0__21058,ocr_21048_1__21059,ocr_21048_1__21059_y__21063,inst_21088,inst_21565,inst_21529,inst_21515,inst_21087,___$1,inst_21565__$1,state_val_21710,c__10184__auto__,move_snake_ch))
})();
var inst_21567 = (inst_21566.cljs$core$IFn$_invoke$arity$1 ? inst_21566.cljs$core$IFn$_invoke$arity$1(inst_21565__$1) : inst_21566.call(null,inst_21565__$1));
var state_21709__$1 = (function (){var statearr_21907 = state_21709;
(statearr_21907[(18)] = inst_21565__$1);

return statearr_21907;
})();
if(cljs.core.truth_(inst_21567)){
var statearr_21908_22296 = state_21709__$1;
(statearr_21908_22296[(1)] = (239));

} else {
var statearr_21909_22297 = state_21709__$1;
(statearr_21909_22297[(1)] = (240));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (196))){
var inst_21460 = (function(){throw cljs.core.match.backtrack})();
var state_21709__$1 = state_21709;
var statearr_21910_22298 = state_21709__$1;
(statearr_21910_22298[(2)] = inst_21460);

(statearr_21910_22298[(1)] = (198));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (162))){
var inst_21388 = (function(){throw cljs.core.match.backtrack})();
var state_21709__$1 = state_21709;
var statearr_21911_22299 = state_21709__$1;
(statearr_21911_22299[(2)] = inst_21388);

(statearr_21911_22299[(1)] = (164));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (184))){
var state_21709__$1 = state_21709;
var statearr_21912_22300 = state_21709__$1;
(statearr_21912_22300[(2)] = null);

(statearr_21912_22300[(1)] = (192));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (219))){
var inst_21525 = (state_21709[(2)]);
var state_21709__$1 = state_21709;
var statearr_21913_22301 = state_21709__$1;
(statearr_21913_22301[(2)] = inst_21525);


cljs.core.async.impl.ioc_helpers.process_exception(state_21709__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (89))){
var inst_21235 = (function(){throw cljs.core.match.backtrack})();
var state_21709__$1 = state_21709;
var statearr_21914_22302 = state_21709__$1;
(statearr_21914_22302[(2)] = inst_21235);

(statearr_21914_22302[(1)] = (91));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (100))){
var state_21709__$1 = state_21709;
var statearr_21915_22303 = state_21709__$1;
(statearr_21915_22303[(2)] = false);

(statearr_21915_22303[(1)] = (101));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (243))){
var inst_21569 = (state_21709[(29)]);
var inst_21569__$1 = (state_21709[(2)]);
var inst_21570 = (inst_21569__$1 === cljs.core.match.backtrack);
var state_21709__$1 = (function (){var statearr_21916 = state_21709;
(statearr_21916[(29)] = inst_21569__$1);

return statearr_21916;
})();
if(cljs.core.truth_(inst_21570)){
var statearr_21917_22304 = state_21709__$1;
(statearr_21917_22304[(1)] = (244));

} else {
var statearr_21918_22305 = state_21709__$1;
(statearr_21918_22305[(1)] = (245));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (131))){
var inst_21332 = (state_21709[(30)]);
var inst_21332__$1 = (state_21709[(2)]);
var inst_21333 = (inst_21332__$1 === cljs.core.match.backtrack);
var state_21709__$1 = (function (){var statearr_21919 = state_21709;
(statearr_21919[(30)] = inst_21332__$1);

return statearr_21919;
})();
if(cljs.core.truth_(inst_21333)){
var statearr_21920_22306 = state_21709__$1;
(statearr_21920_22306[(1)] = (132));

} else {
var statearr_21921_22307 = state_21709__$1;
(statearr_21921_22307[(1)] = (133));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (122))){
var inst_21307 = (state_21709[(2)]);
var state_21709__$1 = state_21709;
var statearr_21922_22308 = state_21709__$1;
(statearr_21922_22308[(2)] = inst_21307);

(statearr_21922_22308[(1)] = (86));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (43))){
var inst_21088 = (state_21709[(13)]);
var inst_21087 = (state_21709[(11)]);
var inst_21154 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21088,cljs.core.cst$kw$as);
var inst_21155 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Not handled:",inst_21087,"for state:",inst_21154], 0));
var state_21709__$1 = state_21709;
var statearr_21923_22309 = state_21709__$1;
(statearr_21923_22309[(2)] = inst_21155);

(statearr_21923_22309[(1)] = (45));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (231))){
var state_21709__$1 = state_21709;
var statearr_21924_22310 = state_21709__$1;
(statearr_21924_22310[(1)] = (290));



return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (61))){
var state_21709__$1 = state_21709;
var statearr_21926_22311 = state_21709__$1;
(statearr_21926_22311[(2)] = null);

(statearr_21926_22311[(1)] = (126));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (29))){
var inst_21126 = (state_21709[(25)]);
var inst_21126__$1 = (state_21709[(2)]);
var inst_21127 = (inst_21126__$1 === cljs.core.match.backtrack);
var state_21709__$1 = (function (){var statearr_21927 = state_21709;
(statearr_21927[(25)] = inst_21126__$1);

return statearr_21927;
})();
if(cljs.core.truth_(inst_21127)){
var statearr_21928_22312 = state_21709__$1;
(statearr_21928_22312[(1)] = (30));

} else {
var statearr_21929_22313 = state_21709__$1;
(statearr_21929_22313[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (151))){
var inst_21368 = (state_21709[(22)]);
var inst_21397 = (function(){throw inst_21368})();
var state_21709__$1 = state_21709;
var statearr_21930_22314 = state_21709__$1;
(statearr_21930_22314[(2)] = inst_21397);

(statearr_21930_22314[(1)] = (152));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (44))){
var state_21709__$1 = state_21709;
var statearr_21931_22315 = state_21709__$1;
(statearr_21931_22315[(1)] = (46));



return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (258))){
var inst_21088 = (state_21709[(13)]);
var inst_21615 = cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,inst_21088);
var state_21709__$1 = state_21709;
var statearr_21933_22316 = state_21709__$1;
(statearr_21933_22316[(2)] = inst_21615);

(statearr_21933_22316[(1)] = (259));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (250))){
var inst_21662 = (state_21709[(2)]);
var state_21709__$1 = state_21709;
var statearr_21934_22317 = state_21709__$1;
(statearr_21934_22317[(2)] = inst_21662);


cljs.core.async.impl.ioc_helpers.process_exception(state_21709__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (93))){
var inst_21088 = (state_21709[(13)]);
var inst_21247 = inst_21088.cljs$lang$protocol_mask$partition0$;
var inst_21248 = (inst_21247 & (256));
var inst_21249 = inst_21088.cljs$core$ILookup$;
var inst_21250 = (inst_21248) || (inst_21249);
var state_21709__$1 = state_21709;
if(cljs.core.truth_(inst_21250)){
var statearr_21935_22318 = state_21709__$1;
(statearr_21935_22318[(1)] = (96));

} else {
var statearr_21936_22319 = state_21709__$1;
(statearr_21936_22319[(1)] = (97));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (6))){
var inst_21089 = (state_21709[(31)]);
var inst_21089__$1 = (state_21709[(2)]);
var inst_21090 = (inst_21089__$1 === cljs.core.match.backtrack);
var state_21709__$1 = (function (){var statearr_21937 = state_21709;
(statearr_21937[(31)] = inst_21089__$1);

return statearr_21937;
})();
if(cljs.core.truth_(inst_21090)){
var statearr_21938_22320 = state_21709__$1;
(statearr_21938_22320[(1)] = (7));

} else {
var statearr_21939_22321 = state_21709__$1;
(statearr_21939_22321[(1)] = (8));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (111))){
var inst_21281 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,rerenderer_example.snake.handler.move_snake);
var state_21709__$1 = state_21709;
var statearr_21940_22322 = state_21709__$1;
(statearr_21940_22322[(2)] = inst_21281);

(statearr_21940_22322[(1)] = (113));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (28))){
var inst_21175 = (state_21709[(2)]);
var state_21709__$1 = state_21709;
var statearr_21941_22323 = state_21709__$1;
(statearr_21941_22323[(2)] = inst_21175);

(statearr_21941_22323[(1)] = (27));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (134))){
var inst_21339 = (state_21709[(2)]);
var state_21709__$1 = state_21709;
var statearr_21942_22324 = state_21709__$1;
(statearr_21942_22324[(2)] = inst_21339);


cljs.core.async.impl.ioc_helpers.process_exception(state_21709__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (64))){
var inst_21507 = (state_21709[(2)]);
var state_21709__$1 = state_21709;
var statearr_21943_22325 = state_21709__$1;
(statearr_21943_22325[(2)] = inst_21507);

(statearr_21943_22325[(1)] = (63));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (189))){
var inst_21445 = (function(){throw cljs.core.match.backtrack})();
var state_21709__$1 = state_21709;
var statearr_21944_22326 = state_21709__$1;
(statearr_21944_22326[(2)] = inst_21445);

(statearr_21944_22326[(1)] = (191));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (280))){
var inst_21640 = (state_21709[(2)]);
var state_21709__$1 = state_21709;
var statearr_21945_22327 = state_21709__$1;
(statearr_21945_22327[(2)] = inst_21640);

(statearr_21945_22327[(1)] = (277));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (198))){
var inst_21463 = (state_21709[(2)]);
var state_21709__$1 = state_21709;
var statearr_21946_22328 = state_21709__$1;
(statearr_21946_22328[(2)] = inst_21463);

(statearr_21946_22328[(1)] = (195));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (155))){
var inst_21374 = (function(){throw cljs.core.match.backtrack})();
var state_21709__$1 = state_21709;
var statearr_21947_22329 = state_21709__$1;
(statearr_21947_22329[(2)] = inst_21374);

(statearr_21947_22329[(1)] = (157));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (295))){
var inst_21690 = (state_21709[(2)]);
var state_21709__$1 = state_21709;
var statearr_21948_22330 = state_21709__$1;
(statearr_21948_22330[(2)] = inst_21690);

(statearr_21948_22330[(1)] = (214));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (248))){
var state_21709__$1 = state_21709;
var statearr_21949_22331 = state_21709__$1;
(statearr_21949_22331[(2)] = null);

(statearr_21949_22331[(1)] = (256));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (285))){
var state_21709__$1 = state_21709;
var statearr_21950_22332 = state_21709__$1;
(statearr_21950_22332[(2)] = null);

(statearr_21950_22332[(1)] = (286));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (227))){
var inst_21529 = (state_21709[(17)]);
var inst_21543 = cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,inst_21529);
var state_21709__$1 = state_21709;
var statearr_21951_22333 = state_21709__$1;
(statearr_21951_22333[(2)] = inst_21543);

(statearr_21951_22333[(1)] = (229));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (220))){
var inst_21529 = (state_21709[(17)]);
var inst_21087 = (state_21709[(11)]);
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_21709,(216),Error,null,(215));
var inst_21529__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(inst_21087,(1));
var inst_21531 = (inst_21529__$1 == null);
var inst_21532 = cljs.core.not(inst_21531);
var state_21709__$1 = (function (){var statearr_21952 = state_21709;
(statearr_21952[(17)] = inst_21529__$1);

return statearr_21952;
})();
if(inst_21532){
var statearr_21953_22334 = state_21709__$1;
(statearr_21953_22334[(1)] = (221));

} else {
var statearr_21954_22335 = state_21709__$1;
(statearr_21954_22335[(1)] = (222));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (103))){
var state_21709__$1 = state_21709;
var statearr_21955_22336 = state_21709__$1;
(statearr_21955_22336[(1)] = (117));



return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (170))){
var inst_21407 = (state_21709[(27)]);
var inst_21407__$1 = (state_21709[(2)]);
var inst_21408 = (inst_21407__$1 === cljs.core.match.backtrack);
var state_21709__$1 = (function (){var statearr_21957 = state_21709;
(statearr_21957[(27)] = inst_21407__$1);

return statearr_21957;
})();
if(cljs.core.truth_(inst_21408)){
var statearr_21958_22337 = state_21709__$1;
(statearr_21958_22337[(1)] = (171));

} else {
var statearr_21959_22338 = state_21709__$1;
(statearr_21959_22338[(1)] = (172));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (51))){
var inst_21171 = (state_21709[(2)]);
var state_21709__$1 = state_21709;
var statearr_21960_22339 = state_21709__$1;
(statearr_21960_22339[(2)] = inst_21171);

(statearr_21960_22339[(1)] = (36));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (25))){
var state_21709__$1 = state_21709;
var statearr_21961_22340 = state_21709__$1;
(statearr_21961_22340[(2)] = null);

(statearr_21961_22340[(1)] = (33));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (261))){
var inst_21088 = (state_21709[(13)]);
var inst_21605 = inst_21088.cljs$lang$protocol_mask$partition0$;
var inst_21606 = (!inst_21605);
var state_21709__$1 = state_21709;
if(cljs.core.truth_(inst_21606)){
var statearr_21962_22341 = state_21709__$1;
(statearr_21962_22341[(1)] = (263));

} else {
var statearr_21963_22342 = state_21709__$1;
(statearr_21963_22342[(1)] = (264));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (201))){
var inst_21473 = (state_21709[(2)]);
var state_21709__$1 = state_21709;
var statearr_21964_22343 = state_21709__$1;
(statearr_21964_22343[(2)] = inst_21473);

(statearr_21964_22343[(1)] = (186));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (166))){
var state_21709__$1 = state_21709;
var statearr_21965_22344 = state_21709__$1;
(statearr_21965_22344[(2)] = null);

(statearr_21965_22344[(1)] = (174));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (34))){
var state_21709__$1 = state_21709;
var statearr_21966_22345 = state_21709__$1;
(statearr_21966_22345[(2)] = null);

(statearr_21966_22345[(1)] = (42));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (252))){
var inst_21584 = (state_21709[(32)]);
var inst_21584__$1 = (state_21709[(2)]);
var inst_21585 = (inst_21584__$1 === cljs.core.match.backtrack);
var state_21709__$1 = (function (){var statearr_21967 = state_21709;
(statearr_21967[(32)] = inst_21584__$1);

return statearr_21967;
})();
if(cljs.core.truth_(inst_21585)){
var statearr_21968_22346 = state_21709__$1;
(statearr_21968_22346[(1)] = (253));

} else {
var statearr_21969_22347 = state_21709__$1;
(statearr_21969_22347[(1)] = (254));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (146))){
var state_21709__$1 = state_21709;
var statearr_21970_22348 = state_21709__$1;
(statearr_21970_22348[(1)] = (205));



return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (228))){
var state_21709__$1 = state_21709;
var statearr_21972_22349 = state_21709__$1;
(statearr_21972_22349[(2)] = false);

(statearr_21972_22349[(1)] = (229));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (125))){
var inst_21317 = (state_21709[(2)]);
var state_21709__$1 = state_21709;
var statearr_21973_22350 = state_21709__$1;
(statearr_21973_22350[(2)] = inst_21317);

(statearr_21973_22350[(1)] = (77));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (276))){
var state_21709__$1 = state_21709;
var statearr_21974_22351 = state_21709__$1;
(statearr_21974_22351[(1)] = (278));



return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (148))){
var inst_21487 = (state_21709[(2)]);
var state_21709__$1 = state_21709;
var statearr_21976_22352 = state_21709__$1;
(statearr_21976_22352[(2)] = inst_21487);

(statearr_21976_22352[(1)] = (147));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (17))){
var inst_21088 = (state_21709[(13)]);
var inst_21122 = cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,inst_21088);
var state_21709__$1 = state_21709;
var statearr_21977_22353 = state_21709__$1;
(statearr_21977_22353[(2)] = inst_21122);

(statearr_21977_22353[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (3))){
var inst_21707 = (state_21709[(2)]);
var state_21709__$1 = state_21709;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21709__$1,inst_21707);
} else {
if((state_val_21710 === (286))){
var inst_21660 = (state_21709[(2)]);
var state_21709__$1 = state_21709;
var statearr_21978_22354 = state_21709__$1;
(statearr_21978_22354[(2)] = inst_21660);

(statearr_21978_22354[(1)] = (250));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (279))){
var state_21709__$1 = state_21709;
var statearr_21979_22355 = state_21709__$1;
(statearr_21979_22355[(2)] = null);

(statearr_21979_22355[(1)] = (280));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (12))){
var state_21709__$1 = state_21709;
var statearr_21980_22356 = state_21709__$1;
(statearr_21980_22356[(2)] = cljs.core.cst$kw$pass);

(statearr_21980_22356[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (152))){
var inst_21399 = (state_21709[(2)]);
var state_21709__$1 = state_21709;
var statearr_21981_22357 = state_21709__$1;
(statearr_21981_22357[(2)] = inst_21399);


cljs.core.async.impl.ioc_helpers.process_exception(state_21709__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (2))){
var inst_21082 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21083 = [event_ch,move_snake_ch];
var inst_21084 = (new cljs.core.PersistentVector(null,2,(5),inst_21082,inst_21083,null));
var state_21709__$1 = state_21709;
return cljs.core.async.ioc_alts_BANG_(state_21709__$1,(4),inst_21084);
} else {
if((state_val_21710 === (66))){
var state_21709__$1 = state_21709;
var statearr_21982_22358 = state_21709__$1;
(statearr_21982_22358[(2)] = null);

(statearr_21982_22358[(1)] = (74));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (236))){
var inst_21554 = (state_21709[(24)]);
var inst_21559 = (function(){throw inst_21554})();
var state_21709__$1 = state_21709;
var statearr_21983_22359 = state_21709__$1;
(statearr_21983_22359[(2)] = inst_21559);

(statearr_21983_22359[(1)] = (237));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (142))){
var inst_21343 = (state_21709[(15)]);
var inst_21357 = cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,inst_21343);
var state_21709__$1 = state_21709;
var statearr_21984_22360 = state_21709__$1;
(statearr_21984_22360[(2)] = inst_21357);

(statearr_21984_22360[(1)] = (144));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (107))){
var inst_21270 = (function(){throw cljs.core.match.backtrack})();
var state_21709__$1 = state_21709;
var statearr_21985_22361 = state_21709__$1;
(statearr_21985_22361[(2)] = inst_21270);

(statearr_21985_22361[(1)] = (109));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (23))){
var state_21709__$1 = state_21709;
var statearr_21986_22362 = state_21709__$1;
(statearr_21986_22362[(2)] = false);

(statearr_21986_22362[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (230))){
var state_21709__$1 = state_21709;
var statearr_21987_22363 = state_21709__$1;
(statearr_21987_22363[(2)] = null);

(statearr_21987_22363[(1)] = (238));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (47))){
var state_21709__$1 = state_21709;
var statearr_21988_22364 = state_21709__$1;
(statearr_21988_22364[(2)] = null);

(statearr_21988_22364[(1)] = (48));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (180))){
var inst_21436 = (state_21709[(2)]);
var state_21709__$1 = state_21709;
var statearr_21989_22365 = state_21709__$1;
(statearr_21989_22365[(2)] = inst_21436);

(statearr_21989_22365[(1)] = (177));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (158))){
var inst_21343 = (state_21709[(15)]);
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_21709,(154),Error,null,(153));
var inst_21382 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_21343,cljs.core.cst$kw$keycode,cljs.core.cst$kw$clojure$core$match_SLASH_not_DASH_found);
var inst_21383 = (inst_21382 === (32));
var state_21709__$1 = state_21709;
if(cljs.core.truth_(inst_21383)){
var statearr_21990_22366 = state_21709__$1;
(statearr_21990_22366[(1)] = (159));

} else {
var statearr_21991_22367 = state_21709__$1;
(statearr_21991_22367[(1)] = (160));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (35))){
var state_21709__$1 = state_21709;
var statearr_21992_22368 = state_21709__$1;
(statearr_21992_22368[(1)] = (49));



return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (127))){
var state_21709__$1 = state_21709;
var statearr_21994_22369 = state_21709__$1;
(statearr_21994_22369[(2)] = null);

(statearr_21994_22369[(1)] = (135));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (82))){
var inst_21225 = (state_21709[(2)]);
var state_21709__$1 = state_21709;
var statearr_21995_22370 = state_21709__$1;
(statearr_21995_22370[(2)] = inst_21225);


cljs.core.async.impl.ioc_helpers.process_exception(state_21709__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (76))){
var state_21709__$1 = state_21709;
var statearr_21996_22371 = state_21709__$1;
(statearr_21996_22371[(1)] = (123));



return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (215))){
var inst_21684 = (state_21709[(2)]);
var state_21709__$1 = state_21709;
var statearr_21998_22372 = state_21709__$1;
(statearr_21998_22372[(2)] = inst_21684);

(statearr_21998_22372[(1)] = (214));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (97))){
var inst_21088 = (state_21709[(13)]);
var inst_21253 = inst_21088.cljs$lang$protocol_mask$partition0$;
var inst_21254 = (!inst_21253);
var state_21709__$1 = state_21709;
if(cljs.core.truth_(inst_21254)){
var statearr_21999_22373 = state_21709__$1;
(statearr_21999_22373[(1)] = (99));

} else {
var statearr_22000_22374 = state_21709__$1;
(statearr_22000_22374[(1)] = (100));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (277))){
var inst_21642 = (state_21709[(2)]);
var state_21709__$1 = state_21709;
var statearr_22001_22375 = state_21709__$1;
(statearr_22001_22375[(2)] = inst_21642);


cljs.core.async.impl.ioc_helpers.process_exception(state_21709__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (19))){
var state_21709__$1 = state_21709;
var statearr_22002_22376 = state_21709__$1;
(statearr_22002_22376[(2)] = true);

(statearr_22002_22376[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (57))){
var state_21709__$1 = state_21709;
var statearr_22003_22377 = state_21709__$1;
(statearr_22003_22377[(1)] = (296));



return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (202))){
var inst_21480 = (function(){throw cljs.core.match.backtrack})();
var state_21709__$1 = state_21709;
var statearr_22005_22378 = state_21709__$1;
(statearr_22005_22378[(2)] = inst_21480);

(statearr_22005_22378[(1)] = (204));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (68))){
var inst_21325 = (state_21709[(2)]);
var state_21709__$1 = state_21709;
var statearr_22006_22379 = state_21709__$1;
(statearr_22006_22379[(2)] = inst_21325);


cljs.core.async.impl.ioc_helpers.process_exception(state_21709__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (200))){
var state_21709__$1 = state_21709;
var statearr_22007_22380 = state_21709__$1;
(statearr_22007_22380[(2)] = null);

(statearr_22007_22380[(1)] = (201));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (11))){
var inst_21092 = (state_21709[(28)]);
var inst_21092__$1 = (state_21709[(2)]);
var inst_21093 = (inst_21092__$1 === cljs.core.match.backtrack);
var state_21709__$1 = (function (){var statearr_22008 = state_21709;
(statearr_22008[(28)] = inst_21092__$1);

return statearr_22008;
})();
if(cljs.core.truth_(inst_21093)){
var statearr_22009_22381 = state_21709__$1;
(statearr_22009_22381[(1)] = (12));

} else {
var statearr_22010_22382 = state_21709__$1;
(statearr_22010_22382[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (115))){
var state_21709__$1 = state_21709;
var statearr_22011_22383 = state_21709__$1;
(statearr_22011_22383[(2)] = null);

(statearr_22011_22383[(1)] = (116));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (255))){
var inst_21591 = (state_21709[(2)]);
var state_21709__$1 = state_21709;
var statearr_22012_22384 = state_21709__$1;
(statearr_22012_22384[(2)] = inst_21591);


cljs.core.async.impl.ioc_helpers.process_exception(state_21709__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (9))){
var inst_21189 = (state_21709[(2)]);
var state_21709__$1 = state_21709;
var statearr_22013_22385 = state_21709__$1;
(statearr_22013_22385[(2)] = inst_21189);


cljs.core.async.impl.ioc_helpers.process_exception(state_21709__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (145))){
var state_21709__$1 = state_21709;
var statearr_22014_22386 = state_21709__$1;
(statearr_22014_22386[(2)] = null);

(statearr_22014_22386[(1)] = (165));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (5))){
var inst_21704 = (state_21709[(2)]);
var state_21709__$1 = (function (){var statearr_22015 = state_21709;
(statearr_22015[(33)] = inst_21704);

return statearr_22015;
})();
var statearr_22016_22387 = state_21709__$1;
(statearr_22016_22387[(2)] = null);

(statearr_22016_22387[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (244))){
var inst_21572 = (function(){throw cljs.core.match.backtrack})();
var state_21709__$1 = state_21709;
var statearr_22017_22388 = state_21709__$1;
(statearr_22017_22388[(2)] = inst_21572);

(statearr_22017_22388[(1)] = (246));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (289))){
var inst_21670 = (state_21709[(2)]);
var state_21709__$1 = state_21709;
var statearr_22018_22389 = state_21709__$1;
(statearr_22018_22389[(2)] = inst_21670);

(statearr_22018_22389[(1)] = (241));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (112))){
var state_21709__$1 = state_21709;
var statearr_22019_22390 = state_21709__$1;
(statearr_22019_22390[(1)] = (114));



return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (179))){
var inst_21088 = (state_21709[(13)]);
var inst_21428 = inst_21088.cljs$lang$protocol_mask$partition0$;
var inst_21429 = (!inst_21428);
var state_21709__$1 = state_21709;
if(cljs.core.truth_(inst_21429)){
var statearr_22021_22391 = state_21709__$1;
(statearr_22021_22391[(1)] = (181));

} else {
var statearr_22022_22392 = state_21709__$1;
(statearr_22022_22392[(1)] = (182));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (245))){
var inst_21569 = (state_21709[(29)]);
var inst_21574 = (function(){throw inst_21569})();
var state_21709__$1 = state_21709;
var statearr_22023_22393 = state_21709__$1;
(statearr_22023_22393[(2)] = inst_21574);

(statearr_22023_22393[(1)] = (246));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (266))){
var state_21709__$1 = state_21709;
var statearr_22024_22394 = state_21709__$1;
(statearr_22024_22394[(2)] = null);

(statearr_22024_22394[(1)] = (274));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (254))){
var inst_21584 = (state_21709[(32)]);
var inst_21589 = (function(){throw inst_21584})();
var state_21709__$1 = state_21709;
var statearr_22025_22395 = state_21709__$1;
(statearr_22025_22395[(2)] = inst_21589);

(statearr_22025_22395[(1)] = (255));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (283))){
var inst_21650 = (state_21709[(2)]);
var state_21709__$1 = state_21709;
var statearr_22026_22396 = state_21709__$1;
(statearr_22026_22396[(2)] = inst_21650);

(statearr_22026_22396[(1)] = (268));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (83))){
var inst_21087 = (state_21709[(11)]);
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_21709,(79),Error,null,(78));
var inst_21229 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(inst_21087,(1));
var inst_21230 = cljs.core.keyword_identical_QMARK_(inst_21229,cljs.core.cst$kw$move_DASH_snake);
var state_21709__$1 = state_21709;
if(inst_21230){
var statearr_22027_22397 = state_21709__$1;
(statearr_22027_22397[(1)] = (84));

} else {
var statearr_22028_22398 = state_21709__$1;
(statearr_22028_22398[(1)] = (85));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (138))){
var inst_21366 = (state_21709[(2)]);
var state_21709__$1 = state_21709;
if(cljs.core.truth_(inst_21366)){
var statearr_22029_22399 = state_21709__$1;
(statearr_22029_22399[(1)] = (145));

} else {
var statearr_22030_22400 = state_21709__$1;
(statearr_22030_22400[(1)] = (146));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (14))){
var inst_21098 = (state_21709[(2)]);
var state_21709__$1 = state_21709;
var statearr_22031_22401 = state_21709__$1;
(statearr_22031_22401[(2)] = inst_21098);


cljs.core.async.impl.ioc_helpers.process_exception(state_21709__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (265))){
var inst_21611 = (state_21709[(2)]);
var state_21709__$1 = state_21709;
var statearr_22032_22402 = state_21709__$1;
(statearr_22032_22402[(2)] = inst_21611);

(statearr_22032_22402[(1)] = (262));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (45))){
var inst_21163 = (state_21709[(2)]);
var state_21709__$1 = state_21709;
var statearr_22033_22403 = state_21709__$1;
(statearr_22033_22403[(2)] = inst_21163);


cljs.core.async.impl.ioc_helpers.process_exception(state_21709__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (53))){
var state_21709__$1 = state_21709;
var statearr_22034_22404 = state_21709__$1;
(statearr_22034_22404[(2)] = null);

(statearr_22034_22404[(1)] = (54));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (78))){
var inst_21311 = (state_21709[(2)]);
var state_21709__$1 = state_21709;
var statearr_22035_22405 = state_21709__$1;
(statearr_22035_22405[(2)] = inst_21311);

(statearr_22035_22405[(1)] = (77));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (132))){
var inst_21335 = (function(){throw cljs.core.match.backtrack})();
var state_21709__$1 = state_21709;
var statearr_22036_22406 = state_21709__$1;
(statearr_22036_22406[(2)] = inst_21335);

(statearr_22036_22406[(1)] = (134));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (26))){
var state_21709__$1 = state_21709;
var statearr_22037_22407 = state_21709__$1;
(statearr_22037_22407[(1)] = (52));



return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (123))){
var inst_21314 = (function(){throw cljs.core.match.backtrack})();
var state_21709__$1 = state_21709;
var statearr_22039_22408 = state_21709__$1;
(statearr_22039_22408[(2)] = inst_21314);

(statearr_22039_22408[(1)] = (125));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (203))){
var state_21709__$1 = state_21709;
var statearr_22040_22409 = state_21709__$1;
(statearr_22040_22409[(2)] = null);

(statearr_22040_22409[(1)] = (204));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (140))){
var inst_21343 = (state_21709[(15)]);
var inst_21354 = inst_21343.cljs$lang$protocol_mask$partition0$;
var inst_21355 = (!inst_21354);
var state_21709__$1 = state_21709;
if(cljs.core.truth_(inst_21355)){
var statearr_22041_22410 = state_21709__$1;
(statearr_22041_22410[(1)] = (142));

} else {
var statearr_22042_22411 = state_21709__$1;
(statearr_22042_22411[(1)] = (143));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (268))){
var inst_21652 = (state_21709[(2)]);
var state_21709__$1 = state_21709;
var statearr_22043_22412 = state_21709__$1;
(statearr_22043_22412[(2)] = inst_21652);


cljs.core.async.impl.ioc_helpers.process_exception(state_21709__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (16))){
var inst_21088 = (state_21709[(13)]);
var inst_21106 = inst_21088.cljs$lang$protocol_mask$partition0$;
var inst_21107 = (inst_21106 & (256));
var inst_21108 = inst_21088.cljs$core$ILookup$;
var inst_21109 = (inst_21107) || (inst_21108);
var state_21709__$1 = state_21709;
if(cljs.core.truth_(inst_21109)){
var statearr_22044_22413 = state_21709__$1;
(statearr_22044_22413[(1)] = (19));

} else {
var statearr_22045_22414 = state_21709__$1;
(statearr_22045_22414[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (133))){
var inst_21332 = (state_21709[(30)]);
var inst_21337 = (function(){throw inst_21332})();
var state_21709__$1 = state_21709;
var statearr_22046_22415 = state_21709__$1;
(statearr_22046_22415[(2)] = inst_21337);

(statearr_22046_22415[(1)] = (134));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (288))){
var state_21709__$1 = state_21709;
var statearr_22047_22416 = state_21709__$1;
(statearr_22047_22416[(2)] = null);

(statearr_22047_22416[(1)] = (289));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (163))){
var state_21709__$1 = state_21709;
var statearr_22048_22417 = state_21709__$1;
(statearr_22048_22417[(2)] = null);

(statearr_22048_22417[(1)] = (164));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (81))){
var inst_21218 = (state_21709[(34)]);
var inst_21223 = (function(){throw inst_21218})();
var state_21709__$1 = state_21709;
var statearr_22049_22418 = state_21709__$1;
(statearr_22049_22418[(2)] = inst_21223);

(statearr_22049_22418[(1)] = (82));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (120))){
var inst_21304 = (function(){throw cljs.core.match.backtrack})();
var state_21709__$1 = state_21709;
var statearr_22050_22419 = state_21709__$1;
(statearr_22050_22419[(2)] = inst_21304);

(statearr_22050_22419[(1)] = (122));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (79))){
var inst_21218 = (state_21709[(34)]);
var inst_21218__$1 = (state_21709[(2)]);
var inst_21219 = (inst_21218__$1 === cljs.core.match.backtrack);
var state_21709__$1 = (function (){var statearr_22051 = state_21709;
(statearr_22051[(34)] = inst_21218__$1);

return statearr_22051;
})();
if(cljs.core.truth_(inst_21219)){
var statearr_22052_22420 = state_21709__$1;
(statearr_22052_22420[(1)] = (80));

} else {
var statearr_22053_22421 = state_21709__$1;
(statearr_22053_22421[(1)] = (81));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (211))){
var inst_21515 = (state_21709[(20)]);
var inst_21087 = (state_21709[(11)]);
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_21709,(60),Error,null,(59));
var inst_21515__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(inst_21087,(0));
var inst_21516 = cljs.core.keyword_identical_QMARK_(inst_21515__$1,cljs.core.cst$kw$click);
var state_21709__$1 = (function (){var statearr_22054 = state_21709;
(statearr_22054[(20)] = inst_21515__$1);

return statearr_22054;
})();
if(inst_21516){
var statearr_22055_22422 = state_21709__$1;
(statearr_22055_22422[(1)] = (212));

} else {
var statearr_22056_22423 = state_21709__$1;
(statearr_22056_22423[(1)] = (213));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (38))){
var inst_21140 = (state_21709[(26)]);
var inst_21140__$1 = (state_21709[(2)]);
var inst_21141 = (inst_21140__$1 === cljs.core.match.backtrack);
var state_21709__$1 = (function (){var statearr_22057 = state_21709;
(statearr_22057[(26)] = inst_21140__$1);

return statearr_22057;
})();
if(cljs.core.truth_(inst_21141)){
var statearr_22058_22424 = state_21709__$1;
(statearr_22058_22424[(1)] = (39));

} else {
var statearr_22059_22425 = state_21709__$1;
(statearr_22059_22425[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (173))){
var inst_21414 = (state_21709[(2)]);
var state_21709__$1 = state_21709;
var statearr_22060_22426 = state_21709__$1;
(statearr_22060_22426[(2)] = inst_21414);


cljs.core.async.impl.ioc_helpers.process_exception(state_21709__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (126))){
var inst_21329 = (state_21709[(16)]);
var inst_21087 = (state_21709[(11)]);
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_21709,(65),Error,null,(64));
var inst_21329__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(inst_21087,(0));
var inst_21330 = cljs.core.keyword_identical_QMARK_(inst_21329__$1,cljs.core.cst$kw$keyup);
var state_21709__$1 = (function (){var statearr_22061 = state_21709;
(statearr_22061[(16)] = inst_21329__$1);

return statearr_22061;
})();
if(inst_21330){
var statearr_22062_22427 = state_21709__$1;
(statearr_22062_22427[(1)] = (127));

} else {
var statearr_22063_22428 = state_21709__$1;
(statearr_22063_22428[(1)] = (128));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (98))){
var inst_21261 = (state_21709[(2)]);
var state_21709__$1 = state_21709;
var statearr_22064_22429 = state_21709__$1;
(statearr_22064_22429[(2)] = inst_21261);

(statearr_22064_22429[(1)] = (95));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (124))){
var state_21709__$1 = state_21709;
var statearr_22065_22430 = state_21709__$1;
(statearr_22065_22430[(2)] = null);

(statearr_22065_22430[(1)] = (125));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (171))){
var inst_21410 = (function(){throw cljs.core.match.backtrack})();
var state_21709__$1 = state_21709;
var statearr_22066_22431 = state_21709__$1;
(statearr_22066_22431[(2)] = inst_21410);

(statearr_22066_22431[(1)] = (173));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (87))){
var inst_21301 = (state_21709[(2)]);
var state_21709__$1 = state_21709;
var statearr_22067_22432 = state_21709__$1;
(statearr_22067_22432[(2)] = inst_21301);

(statearr_22067_22432[(1)] = (86));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (169))){
var inst_21477 = (state_21709[(2)]);
var state_21709__$1 = state_21709;
var statearr_22068_22433 = state_21709__$1;
(statearr_22068_22433[(2)] = inst_21477);

(statearr_22068_22433[(1)] = (168));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (160))){
var state_21709__$1 = state_21709;
var statearr_22069_22434 = state_21709__$1;
(statearr_22069_22434[(1)] = (162));



return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (30))){
var inst_21129 = (function(){throw cljs.core.match.backtrack})();
var state_21709__$1 = state_21709;
var statearr_22071_22435 = state_21709__$1;
(statearr_22071_22435[(2)] = inst_21129);

(statearr_22071_22435[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (207))){
var inst_21493 = (state_21709[(2)]);
var state_21709__$1 = state_21709;
var statearr_22072_22436 = state_21709__$1;
(statearr_22072_22436[(2)] = inst_21493);

(statearr_22072_22436[(1)] = (147));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (194))){
var state_21709__$1 = state_21709;
var statearr_22073_22437 = state_21709__$1;
(statearr_22073_22437[(1)] = (196));



return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (73))){
var inst_21211 = (state_21709[(2)]);
var state_21709__$1 = state_21709;
var statearr_22075_22438 = state_21709__$1;
(statearr_22075_22438[(2)] = inst_21211);


cljs.core.async.impl.ioc_helpers.process_exception(state_21709__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (96))){
var state_21709__$1 = state_21709;
var statearr_22076_22439 = state_21709__$1;
(statearr_22076_22439[(2)] = true);

(statearr_22076_22439[(1)] = (98));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (10))){
var inst_21185 = (state_21709[(2)]);
var state_21709__$1 = state_21709;
var statearr_22077_22440 = state_21709__$1;
(statearr_22077_22440[(2)] = inst_21185);

(statearr_22077_22440[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (272))){
var inst_21619 = (state_21709[(35)]);
var inst_21624 = (function(){throw inst_21619})();
var state_21709__$1 = state_21709;
var statearr_22078_22441 = state_21709__$1;
(statearr_22078_22441[(2)] = inst_21624);

(statearr_22078_22441[(1)] = (273));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (270))){
var inst_21619 = (state_21709[(35)]);
var inst_21619__$1 = (state_21709[(2)]);
var inst_21620 = (inst_21619__$1 === cljs.core.match.backtrack);
var state_21709__$1 = (function (){var statearr_22079 = state_21709;
(statearr_22079[(35)] = inst_21619__$1);

return statearr_22079;
})();
if(cljs.core.truth_(inst_21620)){
var statearr_22080_22442 = state_21709__$1;
(statearr_22080_22442[(1)] = (271));

} else {
var statearr_22081_22443 = state_21709__$1;
(statearr_22081_22443[(1)] = (272));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (271))){
var inst_21622 = (function(){throw cljs.core.match.backtrack})();
var state_21709__$1 = state_21709;
var statearr_22082_22444 = state_21709__$1;
(statearr_22082_22444[(2)] = inst_21622);

(statearr_22082_22444[(1)] = (273));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (18))){
var inst_21124 = (state_21709[(2)]);
var state_21709__$1 = state_21709;
if(cljs.core.truth_(inst_21124)){
var statearr_22083_22445 = state_21709__$1;
(statearr_22083_22445[(1)] = (25));

} else {
var statearr_22084_22446 = state_21709__$1;
(statearr_22084_22446[(1)] = (26));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (105))){
var inst_21291 = (state_21709[(2)]);
var state_21709__$1 = state_21709;
var statearr_22085_22447 = state_21709__$1;
(statearr_22085_22447[(2)] = inst_21291);

(statearr_22085_22447[(1)] = (104));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (185))){
var state_21709__$1 = state_21709;
var statearr_22086_22448 = state_21709__$1;
(statearr_22086_22448[(1)] = (199));



return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (52))){
var inst_21178 = (function(){throw cljs.core.match.backtrack})();
var state_21709__$1 = state_21709;
var statearr_22088_22449 = state_21709__$1;
(statearr_22088_22449[(2)] = inst_21178);

(statearr_22088_22449[(1)] = (54));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (114))){
var inst_21284 = (function(){throw cljs.core.match.backtrack})();
var state_21709__$1 = state_21709;
var statearr_22089_22450 = state_21709__$1;
(statearr_22089_22450[(2)] = inst_21284);

(statearr_22089_22450[(1)] = (116));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (253))){
var inst_21587 = (function(){throw cljs.core.match.backtrack})();
var state_21709__$1 = state_21709;
var statearr_22090_22451 = state_21709__$1;
(statearr_22090_22451[(2)] = inst_21587);

(statearr_22090_22451[(1)] = (255));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (209))){
var state_21709__$1 = state_21709;
var statearr_22091_22452 = state_21709__$1;
(statearr_22091_22452[(2)] = null);

(statearr_22091_22452[(1)] = (210));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (147))){
var inst_21495 = (state_21709[(2)]);
var state_21709__$1 = state_21709;
var statearr_22092_22453 = state_21709__$1;
(statearr_22092_22453[(2)] = inst_21495);


cljs.core.async.impl.ioc_helpers.process_exception(state_21709__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (67))){
var inst_21201 = (state_21709[(7)]);
var inst_21323 = (function(){throw inst_21201})();
var state_21709__$1 = state_21709;
var statearr_22093_22454 = state_21709__$1;
(statearr_22093_22454[(2)] = inst_21323);

(statearr_22093_22454[(1)] = (68));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (296))){
var inst_21697 = (function(){throw cljs.core.match.backtrack})();
var state_21709__$1 = state_21709;
var statearr_22094_22455 = state_21709__$1;
(statearr_22094_22455[(2)] = inst_21697);

(statearr_22094_22455[(1)] = (298));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (161))){
var inst_21393 = (state_21709[(2)]);
var state_21709__$1 = state_21709;
var statearr_22095_22456 = state_21709__$1;
(statearr_22095_22456[(2)] = inst_21393);


cljs.core.async.impl.ioc_helpers.process_exception(state_21709__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (71))){
var inst_21207 = (function(){throw cljs.core.match.backtrack})();
var state_21709__$1 = state_21709;
var statearr_22096_22457 = state_21709__$1;
(statearr_22096_22457[(2)] = inst_21207);

(statearr_22096_22457[(1)] = (73));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (42))){
var inst_21088 = (state_21709[(13)]);
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_21709,(38),Error,null,(37));
var inst_21151 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_21088,cljs.core.cst$kw$as,cljs.core.cst$kw$clojure$core$match_SLASH_not_DASH_found);
var inst_21152 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(inst_21151,cljs.core.cst$kw$clojure$core$match_SLASH_not_DASH_found);
var state_21709__$1 = state_21709;
if(inst_21152){
var statearr_22097_22458 = state_21709__$1;
(statearr_22097_22458[(1)] = (43));

} else {
var statearr_22098_22459 = state_21709__$1;
(statearr_22098_22459[(1)] = (44));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (80))){
var inst_21221 = (function(){throw cljs.core.match.backtrack})();
var state_21709__$1 = state_21709;
var statearr_22099_22460 = state_21709__$1;
(statearr_22099_22460[(2)] = inst_21221);

(statearr_22099_22460[(1)] = (82));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (199))){
var inst_21470 = (function(){throw cljs.core.match.backtrack})();
var state_21709__$1 = state_21709;
var statearr_22100_22461 = state_21709__$1;
(statearr_22100_22461[(2)] = inst_21470);

(statearr_22100_22461[(1)] = (201));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (37))){
var inst_21165 = (state_21709[(2)]);
var state_21709__$1 = state_21709;
var statearr_22101_22462 = state_21709__$1;
(statearr_22101_22462[(2)] = inst_21165);

(statearr_22101_22462[(1)] = (36));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (183))){
var inst_21434 = (state_21709[(2)]);
var state_21709__$1 = state_21709;
var statearr_22102_22463 = state_21709__$1;
(statearr_22102_22463[(2)] = inst_21434);

(statearr_22102_22463[(1)] = (180));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (63))){
var inst_21511 = (state_21709[(2)]);
var state_21709__$1 = state_21709;
var statearr_22103_22464 = state_21709__$1;
(statearr_22103_22464[(2)] = inst_21511);


cljs.core.async.impl.ioc_helpers.process_exception(state_21709__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (212))){
var state_21709__$1 = state_21709;
var statearr_22104_22465 = state_21709__$1;
(statearr_22104_22465[(2)] = null);

(statearr_22104_22465[(1)] = (220));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (94))){
var inst_21088 = (state_21709[(13)]);
var inst_21263 = cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,inst_21088);
var state_21709__$1 = state_21709;
var statearr_22105_22466 = state_21709__$1;
(statearr_22105_22466[(2)] = inst_21263);

(statearr_22105_22466[(1)] = (95));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (8))){
var inst_21089 = (state_21709[(31)]);
var inst_21187 = (function(){throw inst_21089})();
var state_21709__$1 = state_21709;
var statearr_22106_22467 = state_21709__$1;
(statearr_22106_22467[(2)] = inst_21187);

(statearr_22106_22467[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (246))){
var inst_21576 = (state_21709[(2)]);
var state_21709__$1 = state_21709;
var statearr_22107_22468 = state_21709__$1;
(statearr_22107_22468[(2)] = inst_21576);


cljs.core.async.impl.ioc_helpers.process_exception(state_21709__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (190))){
var inst_21442 = (state_21709[(12)]);
var inst_21447 = (function(){throw inst_21442})();
var state_21709__$1 = state_21709;
var statearr_22108_22469 = state_21709__$1;
(statearr_22108_22469[(2)] = inst_21447);

(statearr_22108_22469[(1)] = (191));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (177))){
var inst_21440 = (state_21709[(2)]);
var state_21709__$1 = state_21709;
if(cljs.core.truth_(inst_21440)){
var statearr_22109_22470 = state_21709__$1;
(statearr_22109_22470[(1)] = (184));

} else {
var statearr_22110_22471 = state_21709__$1;
(statearr_22110_22471[(1)] = (185));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (49))){
var inst_21168 = (function(){throw cljs.core.match.backtrack})();
var state_21709__$1 = state_21709;
var statearr_22111_22472 = state_21709__$1;
(statearr_22111_22472[(2)] = inst_21168);

(statearr_22111_22472[(1)] = (51));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21710 === (84))){
var state_21709__$1 = state_21709;
var statearr_22112_22473 = state_21709__$1;
(statearr_22112_22473[(2)] = null);

(statearr_22112_22473[(1)] = (92));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10184__auto__,move_snake_ch))
;
return ((function (switch__10117__auto__,c__10184__auto__,move_snake_ch){
return (function() {
var rerenderer_example$snake$handler$event_handler_$_state_machine__10118__auto__ = null;
var rerenderer_example$snake$handler$event_handler_$_state_machine__10118__auto____0 = (function (){
var statearr_22116 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22116[(0)] = rerenderer_example$snake$handler$event_handler_$_state_machine__10118__auto__);

(statearr_22116[(1)] = (1));

return statearr_22116;
});
var rerenderer_example$snake$handler$event_handler_$_state_machine__10118__auto____1 = (function (state_21709){
while(true){
var ret_value__10119__auto__ = (function (){try{while(true){
var result__10120__auto__ = switch__10117__auto__(state_21709);
if(cljs.core.keyword_identical_QMARK_(result__10120__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10120__auto__;
}
break;
}
}catch (e22117){if((e22117 instanceof Object)){
var ex__10121__auto__ = e22117;
var statearr_22118_22474 = state_21709;
(statearr_22118_22474[(5)] = ex__10121__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21709);

return cljs.core.cst$kw$recur;
} else {
throw e22117;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10119__auto__,cljs.core.cst$kw$recur)){
var G__22475 = state_21709;
state_21709 = G__22475;
continue;
} else {
return ret_value__10119__auto__;
}
break;
}
});
rerenderer_example$snake$handler$event_handler_$_state_machine__10118__auto__ = function(state_21709){
switch(arguments.length){
case 0:
return rerenderer_example$snake$handler$event_handler_$_state_machine__10118__auto____0.call(this);
case 1:
return rerenderer_example$snake$handler$event_handler_$_state_machine__10118__auto____1.call(this,state_21709);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rerenderer_example$snake$handler$event_handler_$_state_machine__10118__auto__.cljs$core$IFn$_invoke$arity$0 = rerenderer_example$snake$handler$event_handler_$_state_machine__10118__auto____0;
rerenderer_example$snake$handler$event_handler_$_state_machine__10118__auto__.cljs$core$IFn$_invoke$arity$1 = rerenderer_example$snake$handler$event_handler_$_state_machine__10118__auto____1;
return rerenderer_example$snake$handler$event_handler_$_state_machine__10118__auto__;
})()
;})(switch__10117__auto__,c__10184__auto__,move_snake_ch))
})();
var state__10186__auto__ = (function (){var statearr_22119 = (f__10185__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10185__auto__.cljs$core$IFn$_invoke$arity$0() : f__10185__auto__.call(null));
(statearr_22119[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10184__auto__);

return statearr_22119;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10186__auto__);
});})(c__10184__auto__,move_snake_ch))
);

return c__10184__auto__;
});
