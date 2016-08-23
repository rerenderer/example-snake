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
var pred__20697 = cljs.core._EQ_;
var expr__20698 = cljs.core.cst$kw$status.cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_((pred__20697.cljs$core$IFn$_invoke$arity$2 ? pred__20697.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$start_DASH_menu,expr__20698) : pred__20697.call(null,cljs.core.cst$kw$start_DASH_menu,expr__20698)))){
return rerenderer_example.snake.handler.start_game(state);
} else {
if(cljs.core.truth_((pred__20697.cljs$core$IFn$_invoke$arity$2 ? pred__20697.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$game_DASH_over,expr__20698) : pred__20697.call(null,cljs.core.cst$kw$game_DASH_over,expr__20698)))){
return rerenderer_example.snake.handler.start_game(state);
} else {
if(cljs.core.truth_((pred__20697.cljs$core$IFn$_invoke$arity$2 ? pred__20697.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pause,expr__20698) : pred__20697.call(null,cljs.core.cst$kw$pause,expr__20698)))){
return rerenderer_example.snake.handler.resume_game(state);
} else {
if(cljs.core.truth_((pred__20697.cljs$core$IFn$_invoke$arity$2 ? pred__20697.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$in_DASH_progress,expr__20698) : pred__20697.call(null,cljs.core.cst$kw$in_DASH_progress,expr__20698)))){
return rerenderer_example.snake.handler.pause_game(state);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__20698)].join('')));
}
}
}
}
});
rerenderer_example.snake.handler.create_timer_BANG_ = (function rerenderer_example$snake$handler$create_timer_BANG_(name,time){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var G__20747_20764 = ((function (ch){
return (function (){
var c__13209__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13209__auto__,ch){
return (function (){
var f__13210__auto__ = (function (){var switch__13095__auto__ = ((function (c__13209__auto__,ch){
return (function (state_20755){
var state_val_20756 = (state_20755[(1)]);
if((state_val_20756 === (1))){
var inst_20749 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20750 = [cljs.core.cst$kw$timer,name];
var inst_20751 = (new cljs.core.PersistentVector(null,2,(5),inst_20749,inst_20750,null));
var state_20755__$1 = state_20755;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20755__$1,(2),ch,inst_20751);
} else {
if((state_val_20756 === (2))){
var inst_20753 = (state_20755[(2)]);
var state_20755__$1 = state_20755;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20755__$1,inst_20753);
} else {
return null;
}
}
});})(c__13209__auto__,ch))
;
return ((function (switch__13095__auto__,c__13209__auto__,ch){
return (function() {
var rerenderer_example$snake$handler$create_timer_BANG__$_state_machine__13096__auto__ = null;
var rerenderer_example$snake$handler$create_timer_BANG__$_state_machine__13096__auto____0 = (function (){
var statearr_20760 = [null,null,null,null,null,null,null];
(statearr_20760[(0)] = rerenderer_example$snake$handler$create_timer_BANG__$_state_machine__13096__auto__);

(statearr_20760[(1)] = (1));

return statearr_20760;
});
var rerenderer_example$snake$handler$create_timer_BANG__$_state_machine__13096__auto____1 = (function (state_20755){
while(true){
var ret_value__13097__auto__ = (function (){try{while(true){
var result__13098__auto__ = switch__13095__auto__(state_20755);
if(cljs.core.keyword_identical_QMARK_(result__13098__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13098__auto__;
}
break;
}
}catch (e20761){if((e20761 instanceof Object)){
var ex__13099__auto__ = e20761;
var statearr_20762_20766 = state_20755;
(statearr_20762_20766[(5)] = ex__13099__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20755);

return cljs.core.cst$kw$recur;
} else {
throw e20761;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13097__auto__,cljs.core.cst$kw$recur)){
var G__20767 = state_20755;
state_20755 = G__20767;
continue;
} else {
return ret_value__13097__auto__;
}
break;
}
});
rerenderer_example$snake$handler$create_timer_BANG__$_state_machine__13096__auto__ = function(state_20755){
switch(arguments.length){
case 0:
return rerenderer_example$snake$handler$create_timer_BANG__$_state_machine__13096__auto____0.call(this);
case 1:
return rerenderer_example$snake$handler$create_timer_BANG__$_state_machine__13096__auto____1.call(this,state_20755);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rerenderer_example$snake$handler$create_timer_BANG__$_state_machine__13096__auto__.cljs$core$IFn$_invoke$arity$0 = rerenderer_example$snake$handler$create_timer_BANG__$_state_machine__13096__auto____0;
rerenderer_example$snake$handler$create_timer_BANG__$_state_machine__13096__auto__.cljs$core$IFn$_invoke$arity$1 = rerenderer_example$snake$handler$create_timer_BANG__$_state_machine__13096__auto____1;
return rerenderer_example$snake$handler$create_timer_BANG__$_state_machine__13096__auto__;
})()
;})(switch__13095__auto__,c__13209__auto__,ch))
})();
var state__13211__auto__ = (function (){var statearr_20763 = (f__13210__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13210__auto__.cljs$core$IFn$_invoke$arity$0() : f__13210__auto__.call(null));
(statearr_20763[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13209__auto__);

return statearr_20763;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13211__auto__);
});})(c__13209__auto__,ch))
);

return c__13209__auto__;
});})(ch))
;
var G__20748_20765 = time;
setInterval(G__20747_20764,G__20748_20765);

return ch;
});
rerenderer_example.snake.handler.get_snake = (function rerenderer_example$snake$handler$get_snake(snake,direction){
var vec__20773 = cljs.core.last(snake);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20773,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20773,(1),null);
var vec__20774 = (function (){var pred__20775 = cljs.core._EQ_;
var expr__20776 = direction;
if(cljs.core.truth_((pred__20775.cljs$core$IFn$_invoke$arity$2 ? pred__20775.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$left,expr__20776) : pred__20775.call(null,cljs.core.cst$kw$left,expr__20776)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - (1)),y], null);
} else {
if(cljs.core.truth_((pred__20775.cljs$core$IFn$_invoke$arity$2 ? pred__20775.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$right,expr__20776) : pred__20775.call(null,cljs.core.cst$kw$right,expr__20776)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (1)),y], null);
} else {
if(cljs.core.truth_((pred__20775.cljs$core$IFn$_invoke$arity$2 ? pred__20775.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$up,expr__20776) : pred__20775.call(null,cljs.core.cst$kw$up,expr__20776)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y - (1))], null);
} else {
if(cljs.core.truth_((pred__20775.cljs$core$IFn$_invoke$arity$2 ? pred__20775.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$down,expr__20776) : pred__20775.call(null,cljs.core.cst$kw$down,expr__20776)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y + (1))], null);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__20776)].join('')));
}
}
}
}
})();
var nx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20774,(0),null);
var ny = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20774,(1),null);
var nx__$1 = (((nx > (40)))?(0):nx);
var nx__$2 = (((nx__$1 < (0)))?(40):nx__$1);
var ny__$1 = (((ny > (27)))?(0):ny);
var ny__$2 = (((ny__$1 < (0)))?(27):ny__$1);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(snake),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nx__$2,ny__$2], null));
});
rerenderer_example.snake.handler.get_snake_intersections = (function rerenderer_example$snake$handler$get_snake_intersections(snake){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__20778_SHARP_){
return (cljs.core.second(p1__20778_SHARP_) > (1));
}),cljs.core.frequencies(snake)));
});
rerenderer_example.snake.handler.check_intersection = (function rerenderer_example$snake$handler$check_intersection(p__20779){
var map__20782 = p__20779;
var map__20782__$1 = ((((!((map__20782 == null)))?((((map__20782.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20782.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20782):map__20782);
var state = map__20782__$1;
var snake = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20782__$1,cljs.core.cst$kw$snake);
var ignore_intersections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20782__$1,cljs.core.cst$kw$ignore_DASH_intersections);
var lives = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20782__$1,cljs.core.cst$kw$lives);
var intersections = rerenderer_example.snake.handler.get_snake_intersections(snake);
var without_ignored = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(ignore_intersections),intersections);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$ignore_DASH_intersections,intersections,cljs.core.array_seq([cljs.core.cst$kw$lives,((cljs.core.empty_QMARK_(without_ignored))?lives:(lives - (1)))], 0));
});
rerenderer_example.snake.handler.check_lives = (function rerenderer_example$snake$handler$check_lives(p__20784){
var map__20787 = p__20784;
var map__20787__$1 = ((((!((map__20787 == null)))?((((map__20787.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20787.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20787):map__20787);
var state = map__20787__$1;
var lives = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20787__$1,cljs.core.cst$kw$lives);
if((lives === (0))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$status,cljs.core.cst$kw$game_DASH_over);
} else {
return state;
}
});
rerenderer_example.snake.handler.check_move_on_candy = (function rerenderer_example$snake$handler$check_move_on_candy(p__20789){
var map__20792 = p__20789;
var map__20792__$1 = ((((!((map__20792 == null)))?((((map__20792.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20792.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20792):map__20792);
var state = map__20792__$1;
var snake = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20792__$1,cljs.core.cst$kw$snake);
var direction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20792__$1,cljs.core.cst$kw$direction);
var candy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20792__$1,cljs.core.cst$kw$candy);
var score = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20792__$1,cljs.core.cst$kw$score);
var on_candy = cljs.core.some(cljs.core.PersistentHashSet.fromArray([candy], true),snake);
var snake__$1 = rerenderer_example.snake.handler.get_snake(snake,direction);
if((on_candy == null)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$snake,cljs.core.rest(snake__$1),cljs.core.array_seq([cljs.core.cst$kw$score,(score + (1))], 0));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$score,((10) + score),cljs.core.array_seq([cljs.core.cst$kw$snake,snake__$1,cljs.core.cst$kw$candy,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand_int((40)),cljs.core.rand_int((27))], null)], 0));
}
});
rerenderer_example.snake.handler.move_snake = (function rerenderer_example$snake$handler$move_snake(state){
return rerenderer_example.snake.handler.check_lives(rerenderer_example.snake.handler.check_intersection(rerenderer_example.snake.handler.check_move_on_candy(state)));
});
rerenderer_example.snake.handler.change_direction = (function rerenderer_example$snake$handler$change_direction(p__20794,code){
var map__20803 = p__20794;
var map__20803__$1 = ((((!((map__20803 == null)))?((((map__20803.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20803.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20803):map__20803);
var state = map__20803__$1;
var direction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20803__$1,cljs.core.cst$kw$direction);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$direction,(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,cljs.core.cst$kw$up)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,cljs.core.cst$kw$down)))?(function (){var pred__20805 = cljs.core._EQ_;
var expr__20806 = code;
if(cljs.core.truth_((pred__20805.cljs$core$IFn$_invoke$arity$2 ? pred__20805.cljs$core$IFn$_invoke$arity$2((37),expr__20806) : pred__20805.call(null,(37),expr__20806)))){
return cljs.core.cst$kw$left;
} else {
if(cljs.core.truth_((pred__20805.cljs$core$IFn$_invoke$arity$2 ? pred__20805.cljs$core$IFn$_invoke$arity$2((39),expr__20806) : pred__20805.call(null,(39),expr__20806)))){
return cljs.core.cst$kw$right;
} else {
return direction;
}
}
})():(function (){var pred__20808 = cljs.core._EQ_;
var expr__20809 = code;
if(cljs.core.truth_((pred__20808.cljs$core$IFn$_invoke$arity$2 ? pred__20808.cljs$core$IFn$_invoke$arity$2((38),expr__20809) : pred__20808.call(null,(38),expr__20809)))){
return cljs.core.cst$kw$up;
} else {
if(cljs.core.truth_((pred__20808.cljs$core$IFn$_invoke$arity$2 ? pred__20808.cljs$core$IFn$_invoke$arity$2((40),expr__20809) : pred__20808.call(null,(40),expr__20809)))){
return cljs.core.cst$kw$down;
} else {
return direction;
}
}
})()));
});
rerenderer_example.snake.handler.event_handler = (function rerenderer_example$snake$handler$event_handler(event_ch,state_atom,_){
var move_snake_ch = rerenderer_example.snake.handler.create_timer_BANG_(cljs.core.cst$kw$move_DASH_snake,(100));
var c__13209__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13209__auto__,move_snake_ch){
return (function (){
var f__13210__auto__ = (function (){var switch__13095__auto__ = ((function (c__13209__auto__,move_snake_ch){
return (function (state_22550){
var state_val_22551 = (state_22550[(1)]);
if((state_val_22551 === (275))){
var inst_22475 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,rerenderer_example.snake.handler.change_game_state);
var state_22550__$1 = state_22550;
var statearr_22552_22961 = state_22550__$1;
(statearr_22552_22961[(2)] = inst_22475);

(statearr_22552_22961[(1)] = (277));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (291))){
var state_22550__$1 = state_22550;
var statearr_22553_22962 = state_22550__$1;
(statearr_22553_22962[(2)] = null);

(statearr_22553_22962[(1)] = (292));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (249))){
var state_22550__$1 = state_22550;
var statearr_22554_22963 = state_22550__$1;
(statearr_22554_22963[(1)] = (284));



return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (121))){
var state_22550__$1 = state_22550;
var statearr_22556_22964 = state_22550__$1;
(statearr_22556_22964[(2)] = null);

(statearr_22556_22964[(1)] = (122));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (287))){
var inst_22508 = (function(){throw cljs.core.match.backtrack})();
var state_22550__$1 = state_22550;
var statearr_22557_22965 = state_22550__$1;
(statearr_22557_22965[(2)] = inst_22508);

(statearr_22557_22965[(1)] = (289));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (65))){
var inst_22042 = (state_22550[(7)]);
var inst_22042__$1 = (state_22550[(2)]);
var inst_22043 = (inst_22042__$1 === cljs.core.match.backtrack);
var state_22550__$1 = (function (){var statearr_22558 = state_22550;
(statearr_22558[(7)] = inst_22042__$1);

return statearr_22558;
})();
if(cljs.core.truth_(inst_22043)){
var statearr_22559_22966 = state_22550__$1;
(statearr_22559_22966[(1)] = (66));

} else {
var statearr_22560_22967 = state_22550__$1;
(statearr_22560_22967[(1)] = (67));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (70))){
var inst_22045 = (state_22550[(8)]);
var inst_22045__$1 = (state_22550[(2)]);
var inst_22046 = (inst_22045__$1 === cljs.core.match.backtrack);
var state_22550__$1 = (function (){var statearr_22561 = state_22550;
(statearr_22561[(8)] = inst_22045__$1);

return statearr_22561;
})();
if(cljs.core.truth_(inst_22046)){
var statearr_22562_22968 = state_22550__$1;
(statearr_22562_22968[(1)] = (71));

} else {
var statearr_22563_22969 = state_22550__$1;
(statearr_22563_22969[(1)] = (72));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (218))){
var inst_22359 = (state_22550[(9)]);
var inst_22364 = (function(){throw inst_22359})();
var state_22550__$1 = state_22550;
var statearr_22564_22970 = state_22550__$1;
(statearr_22564_22970[(2)] = inst_22364);

(statearr_22564_22970[(1)] = (219));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (62))){
var inst_22039 = (state_22550[(10)]);
var inst_22350 = (function(){throw inst_22039})();
var state_22550__$1 = state_22550;
var statearr_22565_22971 = state_22550__$1;
(statearr_22565_22971[(2)] = inst_22350);

(statearr_22565_22971[(1)] = (63));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (74))){
var inst_21928 = (state_22550[(11)]);
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_22550,(70),Error,null,(69));
var inst_22056 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(inst_21928,(0));
var inst_22057 = cljs.core.keyword_identical_QMARK_(inst_22056,cljs.core.cst$kw$timer);
var state_22550__$1 = state_22550;
if(inst_22057){
var statearr_22566_22972 = state_22550__$1;
(statearr_22566_22972[(1)] = (75));

} else {
var statearr_22567_22973 = state_22550__$1;
(statearr_22567_22973[(1)] = (76));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (164))){
var inst_22232 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
var statearr_22568_22974 = state_22550__$1;
(statearr_22568_22974[(2)] = inst_22232);

(statearr_22568_22974[(1)] = (161));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (282))){
var state_22550__$1 = state_22550;
var statearr_22569_22975 = state_22550__$1;
(statearr_22569_22975[(2)] = null);

(statearr_22569_22975[(1)] = (283));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (273))){
var inst_22467 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
var statearr_22570_22976 = state_22550__$1;
(statearr_22570_22976[(2)] = inst_22467);


cljs.core.async.impl.ioc_helpers.process_exception(state_22550__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (186))){
var inst_22316 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
var statearr_22571_22977 = state_22550__$1;
(statearr_22571_22977[(2)] = inst_22316);


cljs.core.async.impl.ioc_helpers.process_exception(state_22550__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (233))){
var inst_22515 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
var statearr_22572_22978 = state_22550__$1;
(statearr_22572_22978[(2)] = inst_22515);

(statearr_22572_22978[(1)] = (232));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (298))){
var inst_22541 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
var statearr_22573_22979 = state_22550__$1;
(statearr_22573_22979[(2)] = inst_22541);

(statearr_22573_22979[(1)] = (58));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (188))){
var inst_22283 = (state_22550[(12)]);
var inst_22283__$1 = (state_22550[(2)]);
var inst_22284 = (inst_22283__$1 === cljs.core.match.backtrack);
var state_22550__$1 = (function (){var statearr_22574 = state_22550;
(statearr_22574[(12)] = inst_22283__$1);

return statearr_22574;
})();
if(cljs.core.truth_(inst_22284)){
var statearr_22575_22980 = state_22550__$1;
(statearr_22575_22980[(1)] = (189));

} else {
var statearr_22576_22981 = state_22550__$1;
(statearr_22576_22981[(1)] = (190));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (240))){
var state_22550__$1 = state_22550;
var statearr_22577_22982 = state_22550__$1;
(statearr_22577_22982[(1)] = (287));



return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (110))){
var inst_21929 = (state_22550[(13)]);
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_22550,(106),Error,null,(105));
var inst_22119 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_21929,cljs.core.cst$kw$status,cljs.core.cst$kw$clojure$core$match_SLASH_not_DASH_found);
var inst_22120 = cljs.core.keyword_identical_QMARK_(inst_22119,cljs.core.cst$kw$in_DASH_progress);
var state_22550__$1 = state_22550;
if(inst_22120){
var statearr_22579_22983 = state_22550__$1;
(statearr_22579_22983[(1)] = (111));

} else {
var statearr_22580_22984 = state_22550__$1;
(statearr_22580_22984[(1)] = (112));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (130))){
var inst_22338 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
var statearr_22581_22985 = state_22550__$1;
(statearr_22581_22985[(2)] = inst_22338);

(statearr_22581_22985[(1)] = (129));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (128))){
var state_22550__$1 = state_22550;
var statearr_22582_22986 = state_22550__$1;
(statearr_22582_22986[(1)] = (208));



return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (259))){
var inst_22458 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
if(cljs.core.truth_(inst_22458)){
var statearr_22584_22987 = state_22550__$1;
(statearr_22584_22987[(1)] = (266));

} else {
var statearr_22585_22988 = state_22550__$1;
(statearr_22585_22988[(1)] = (267));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (210))){
var inst_22344 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
var statearr_22586_22989 = state_22550__$1;
(statearr_22586_22989[(2)] = inst_22344);

(statearr_22586_22989[(1)] = (129));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (229))){
var inst_22387 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
var statearr_22587_22990 = state_22550__$1;
(statearr_22587_22990[(2)] = inst_22387);

(statearr_22587_22990[(1)] = (226));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (153))){
var inst_22236 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
var statearr_22588_22991 = state_22550__$1;
(statearr_22588_22991[(2)] = inst_22236);

(statearr_22588_22991[(1)] = (152));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (213))){
var state_22550__$1 = state_22550;
var statearr_22589_22992 = state_22550__$1;
(statearr_22589_22992[(1)] = (293));



return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (7))){
var state_22550__$1 = state_22550;
var statearr_22591_22993 = state_22550__$1;
(statearr_22591_22993[(2)] = null);

(statearr_22591_22993[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (59))){
var inst_22535 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
var statearr_22592_22994 = state_22550__$1;
(statearr_22592_22994[(2)] = inst_22535);

(statearr_22592_22994[(1)] = (58));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (86))){
var inst_22150 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
var statearr_22593_22995 = state_22550__$1;
(statearr_22593_22995[(2)] = inst_22150);


cljs.core.async.impl.ioc_helpers.process_exception(state_22550__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (154))){
var inst_22212 = (state_22550[(14)]);
var inst_22212__$1 = (state_22550[(2)]);
var inst_22213 = (inst_22212__$1 === cljs.core.match.backtrack);
var state_22550__$1 = (function (){var statearr_22594 = state_22550;
(statearr_22594[(14)] = inst_22212__$1);

return statearr_22594;
})();
if(cljs.core.truth_(inst_22213)){
var statearr_22595_22996 = state_22550__$1;
(statearr_22595_22996[(1)] = (155));

} else {
var statearr_22596_22997 = state_22550__$1;
(statearr_22596_22997[(1)] = (156));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (20))){
var inst_21929 = (state_22550[(13)]);
var inst_21953 = inst_21929.cljs$lang$protocol_mask$partition0$;
var inst_21954 = (!inst_21953);
var state_22550__$1 = state_22550;
if(cljs.core.truth_(inst_21954)){
var statearr_22597_22998 = state_22550__$1;
(statearr_22597_22998[(1)] = (22));

} else {
var statearr_22598_22999 = state_22550__$1;
(statearr_22598_22999[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (224))){
var state_22550__$1 = state_22550;
var statearr_22599_23000 = state_22550__$1;
(statearr_22599_23000[(2)] = true);

(statearr_22599_23000[(1)] = (226));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (72))){
var inst_22045 = (state_22550[(8)]);
var inst_22050 = (function(){throw inst_22045})();
var state_22550__$1 = state_22550;
var statearr_22600_23001 = state_22550__$1;
(statearr_22600_23001[(2)] = inst_22050);

(statearr_22600_23001[(1)] = (73));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (58))){
var inst_22543 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
var statearr_22601_23002 = state_22550__$1;
(statearr_22601_23002[(2)] = inst_22543);


cljs.core.async.impl.ioc_helpers.process_exception(state_22550__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (205))){
var inst_22331 = (function(){throw cljs.core.match.backtrack})();
var state_22550__$1 = state_22550;
var statearr_22602_23003 = state_22550__$1;
(statearr_22602_23003[(2)] = inst_22331);

(statearr_22602_23003[(1)] = (207));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (60))){
var inst_22039 = (state_22550[(10)]);
var inst_22039__$1 = (state_22550[(2)]);
var inst_22040 = (inst_22039__$1 === cljs.core.match.backtrack);
var state_22550__$1 = (function (){var statearr_22603 = state_22550;
(statearr_22603[(10)] = inst_22039__$1);

return statearr_22603;
})();
if(cljs.core.truth_(inst_22040)){
var statearr_22604_23004 = state_22550__$1;
(statearr_22604_23004[(1)] = (61));

} else {
var statearr_22605_23005 = state_22550__$1;
(statearr_22605_23005[(1)] = (62));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (175))){
var inst_21929 = (state_22550[(13)]);
var inst_22263 = inst_21929.cljs$lang$protocol_mask$partition0$;
var inst_22264 = (inst_22263 & (256));
var inst_22265 = inst_21929.cljs$core$ILookup$;
var inst_22266 = (inst_22264) || (inst_22265);
var state_22550__$1 = state_22550;
if(cljs.core.truth_(inst_22266)){
var statearr_22606_23006 = state_22550__$1;
(statearr_22606_23006[(1)] = (178));

} else {
var statearr_22607_23007 = state_22550__$1;
(statearr_22607_23007[(1)] = (179));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (27))){
var inst_22024 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
var statearr_22608_23008 = state_22550__$1;
(statearr_22608_23008[(2)] = inst_22024);


cljs.core.async.impl.ioc_helpers.process_exception(state_22550__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (1))){
var state_22550__$1 = state_22550;
var statearr_22609_23009 = state_22550__$1;
(statearr_22609_23009[(2)] = null);

(statearr_22609_23009[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (69))){
var inst_22162 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
var statearr_22610_23010 = state_22550__$1;
(statearr_22610_23010[(2)] = inst_22162);

(statearr_22610_23010[(1)] = (68));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (101))){
var inst_22100 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
var statearr_22611_23011 = state_22550__$1;
(statearr_22611_23011[(2)] = inst_22100);

(statearr_22611_23011[(1)] = (98));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (24))){
var inst_21959 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
var statearr_22612_23012 = state_22550__$1;
(statearr_22612_23012[(2)] = inst_21959);

(statearr_22612_23012[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (102))){
var state_22550__$1 = state_22550;
var statearr_22613_23013 = state_22550__$1;
(statearr_22613_23013[(2)] = null);

(statearr_22613_23013[(1)] = (110));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (135))){
var inst_22184 = (state_22550[(15)]);
var inst_21928 = (state_22550[(11)]);
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_22550,(131),Error,null,(130));
var inst_22184__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(inst_21928,(1));
var inst_22186 = (inst_22184__$1 == null);
var inst_22187 = cljs.core.not(inst_22186);
var state_22550__$1 = (function (){var statearr_22614 = state_22550;
(statearr_22614[(15)] = inst_22184__$1);

return statearr_22614;
})();
if(inst_22187){
var statearr_22615_23014 = state_22550__$1;
(statearr_22615_23014[(1)] = (136));

} else {
var statearr_22616_23015 = state_22550__$1;
(statearr_22616_23015[(1)] = (137));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (55))){
var inst_21928 = (state_22550[(11)]);
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_22550,(6),Error,null,(5));
var inst_22034 = cljs.core.vector_QMARK_(inst_21928);
var inst_22035 = cljs.core.count(inst_21928);
var inst_22036 = (inst_22035 === 2);
var inst_22037 = (inst_22034) && (inst_22036);
var state_22550__$1 = state_22550;
if(cljs.core.truth_(inst_22037)){
var statearr_22617_23016 = state_22550__$1;
(statearr_22617_23016[(1)] = (56));

} else {
var statearr_22618_23017 = state_22550__$1;
(statearr_22618_23017[(1)] = (57));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (269))){
var inst_22485 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
var statearr_22619_23018 = state_22550__$1;
(statearr_22619_23018[(2)] = inst_22485);

(statearr_22619_23018[(1)] = (268));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (206))){
var state_22550__$1 = state_22550;
var statearr_22620_23019 = state_22550__$1;
(statearr_22620_23019[(2)] = null);

(statearr_22620_23019[(1)] = (207));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (165))){
var inst_21929 = (state_22550[(13)]);
var inst_22184 = (state_22550[(15)]);
var inst_22039 = (state_22550[(10)]);
var inst_21928 = (state_22550[(11)]);
var inst_22170 = (state_22550[(16)]);
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_22550,(149),Error,null,(148));
var inst_22244 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_22184,cljs.core.cst$kw$keycode,cljs.core.cst$kw$clojure$core$match_SLASH_not_DASH_found);
var inst_22245 = (function (){var ocr_21889 = inst_21928;
var ocr_21890 = inst_21929;
var e__19900__auto__ = inst_22039;
var ocr_21889_0__21899 = inst_22170;
var ocr_21889_1__21900 = inst_22184;
var ocr_21889_1__21900_keycode__21911 = inst_22244;
return ((function (ocr_21889,ocr_21890,e__19900__auto__,ocr_21889_0__21899,ocr_21889_1__21900,ocr_21889_1__21900_keycode__21911,inst_21929,inst_22184,inst_22039,inst_21928,inst_22170,___$1,inst_22244,state_val_22551,c__13209__auto__,move_snake_ch){
return (function (p1__20814_SHARP_){
return (((40) >= p1__20814_SHARP_)) && ((p1__20814_SHARP_ >= (37)));
});
;})(ocr_21889,ocr_21890,e__19900__auto__,ocr_21889_0__21899,ocr_21889_1__21900,ocr_21889_1__21900_keycode__21911,inst_21929,inst_22184,inst_22039,inst_21928,inst_22170,___$1,inst_22244,state_val_22551,c__13209__auto__,move_snake_ch))
})();
var inst_22246 = (inst_22245.cljs$core$IFn$_invoke$arity$1 ? inst_22245.cljs$core$IFn$_invoke$arity$1(inst_22244) : inst_22245.call(null,inst_22244));
var state_22550__$1 = state_22550;
if(cljs.core.truth_(inst_22246)){
var statearr_22621_23020 = state_22550__$1;
(statearr_22621_23020[(1)] = (166));

} else {
var statearr_22622_23021 = state_22550__$1;
(statearr_22622_23021[(1)] = (167));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (85))){
var state_22550__$1 = state_22550;
var statearr_22623_23022 = state_22550__$1;
(statearr_22623_23022[(1)] = (120));



return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (225))){
var inst_22370 = (state_22550[(17)]);
var inst_22381 = inst_22370.cljs$lang$protocol_mask$partition0$;
var inst_22382 = (!inst_22381);
var state_22550__$1 = state_22550;
if(cljs.core.truth_(inst_22382)){
var statearr_22625_23023 = state_22550__$1;
(statearr_22625_23023[(1)] = (227));

} else {
var statearr_22626_23024 = state_22550__$1;
(statearr_22626_23024[(1)] = (228));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (297))){
var state_22550__$1 = state_22550;
var statearr_22627_23025 = state_22550__$1;
(statearr_22627_23025[(2)] = null);

(statearr_22627_23025[(1)] = (298));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (39))){
var inst_21984 = (function(){throw cljs.core.match.backtrack})();
var state_22550__$1 = state_22550;
var statearr_22628_23026 = state_22550__$1;
(statearr_22628_23026[(2)] = inst_21984);

(statearr_22628_23026[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (274))){
var inst_22421 = (state_22550[(18)]);
var inst_22406 = (state_22550[(19)]);
var inst_21929 = (state_22550[(13)]);
var inst_22356 = (state_22550[(20)]);
var inst_22370 = (state_22550[(17)]);
var inst_21928 = (state_22550[(11)]);
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_22550,(270),Error,null,(269));
var inst_22471 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_21929,cljs.core.cst$kw$status,cljs.core.cst$kw$clojure$core$match_SLASH_not_DASH_found);
var inst_22472 = (function (){var ocr_21889 = inst_21928;
var ocr_21890 = inst_21929;
var ocr_21889_0__21899 = inst_22356;
var ocr_21889_1__21900 = inst_22370;
var ocr_21889_1__21900_y__21904 = inst_22406;
var ocr_21889_1__21900_x__21905 = inst_22421;
var ocr_21890_status__21908 = inst_22471;
return ((function (ocr_21889,ocr_21890,ocr_21889_0__21899,ocr_21889_1__21900,ocr_21889_1__21900_y__21904,ocr_21889_1__21900_x__21905,ocr_21890_status__21908,inst_22421,inst_22406,inst_21929,inst_22356,inst_22370,inst_21928,___$1,inst_22471,state_val_22551,c__13209__auto__,move_snake_ch){
return (function (p1__20813_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__20813_SHARP_,cljs.core.cst$kw$in_DASH_progress);
});
;})(ocr_21889,ocr_21890,ocr_21889_0__21899,ocr_21889_1__21900,ocr_21889_1__21900_y__21904,ocr_21889_1__21900_x__21905,ocr_21890_status__21908,inst_22421,inst_22406,inst_21929,inst_22356,inst_22370,inst_21928,___$1,inst_22471,state_val_22551,c__13209__auto__,move_snake_ch))
})();
var inst_22473 = (inst_22472.cljs$core$IFn$_invoke$arity$1 ? inst_22472.cljs$core$IFn$_invoke$arity$1(inst_22471) : inst_22472.call(null,inst_22471));
var state_22550__$1 = state_22550;
if(cljs.core.truth_(inst_22473)){
var statearr_22629_23027 = state_22550__$1;
(statearr_22629_23027[(1)] = (275));

} else {
var statearr_22630_23028 = state_22550__$1;
(statearr_22630_23028[(1)] = (276));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (88))){
var inst_22073 = (state_22550[(21)]);
var inst_22073__$1 = (state_22550[(2)]);
var inst_22074 = (inst_22073__$1 === cljs.core.match.backtrack);
var state_22550__$1 = (function (){var statearr_22631 = state_22550;
(statearr_22631[(21)] = inst_22073__$1);

return statearr_22631;
})();
if(cljs.core.truth_(inst_22074)){
var statearr_22632_23029 = state_22550__$1;
(statearr_22632_23029[(1)] = (89));

} else {
var statearr_22633_23030 = state_22550__$1;
(statearr_22633_23030[(1)] = (90));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (217))){
var inst_22362 = (function(){throw cljs.core.match.backtrack})();
var state_22550__$1 = state_22550;
var statearr_22634_23031 = state_22550__$1;
(statearr_22634_23031[(2)] = inst_22362);

(statearr_22634_23031[(1)] = (219));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (46))){
var inst_21999 = (function(){throw cljs.core.match.backtrack})();
var state_22550__$1 = state_22550;
var statearr_22635_23032 = state_22550__$1;
(statearr_22635_23032[(2)] = inst_21999);

(statearr_22635_23032[(1)] = (48));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (149))){
var inst_22209 = (state_22550[(22)]);
var inst_22209__$1 = (state_22550[(2)]);
var inst_22210 = (inst_22209__$1 === cljs.core.match.backtrack);
var state_22550__$1 = (function (){var statearr_22636 = state_22550;
(statearr_22636[(22)] = inst_22209__$1);

return statearr_22636;
})();
if(cljs.core.truth_(inst_22210)){
var statearr_22637_23033 = state_22550__$1;
(statearr_22637_23033[(1)] = (150));

} else {
var statearr_22638_23034 = state_22550__$1;
(statearr_22638_23034[(1)] = (151));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (239))){
var state_22550__$1 = state_22550;
var statearr_22639_23035 = state_22550__$1;
(statearr_22639_23035[(2)] = null);

(statearr_22639_23035[(1)] = (247));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (157))){
var inst_22219 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
var statearr_22640_23036 = state_22550__$1;
(statearr_22640_23036[(2)] = inst_22219);


cljs.core.async.impl.ioc_helpers.process_exception(state_22550__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (4))){
var inst_21927 = (state_22550[(2)]);
var inst_21928 = cljs.core.first(inst_21927);
var inst_21929 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state_atom) : cljs.core.deref.call(null,state_atom));
var state_22550__$1 = (function (){var statearr_22641 = state_22550;
(statearr_22641[(13)] = inst_21929);

(statearr_22641[(11)] = inst_21928);

return statearr_22641;
})();
var statearr_22642_23037 = state_22550__$1;
(statearr_22642_23037[(2)] = null);

(statearr_22642_23037[(1)] = (55));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (204))){
var inst_22324 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
var statearr_22643_23038 = state_22550__$1;
(statearr_22643_23038[(2)] = inst_22324);

(statearr_22643_23038[(1)] = (168));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (77))){
var inst_22160 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
var statearr_22644_23039 = state_22550__$1;
(statearr_22644_23039[(2)] = inst_22160);


cljs.core.async.impl.ioc_helpers.process_exception(state_22550__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (106))){
var inst_22108 = (state_22550[(23)]);
var inst_22108__$1 = (state_22550[(2)]);
var inst_22109 = (inst_22108__$1 === cljs.core.match.backtrack);
var state_22550__$1 = (function (){var statearr_22645 = state_22550;
(statearr_22645[(23)] = inst_22108__$1);

return statearr_22645;
})();
if(cljs.core.truth_(inst_22109)){
var statearr_22646_23040 = state_22550__$1;
(statearr_22646_23040[(1)] = (107));

} else {
var statearr_22647_23041 = state_22550__$1;
(statearr_22647_23041[(1)] = (108));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (197))){
var state_22550__$1 = state_22550;
var statearr_22648_23042 = state_22550__$1;
(statearr_22648_23042[(2)] = null);

(statearr_22648_23042[(1)] = (198));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (232))){
var inst_22523 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
var statearr_22649_23043 = state_22550__$1;
(statearr_22649_23043[(2)] = inst_22523);


cljs.core.async.impl.ioc_helpers.process_exception(state_22550__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (260))){
var state_22550__$1 = state_22550;
var statearr_22650_23044 = state_22550__$1;
(statearr_22650_23044[(2)] = true);

(statearr_22650_23044[(1)] = (262));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (267))){
var state_22550__$1 = state_22550;
var statearr_22651_23045 = state_22550__$1;
(statearr_22651_23045[(1)] = (281));



return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (119))){
var inst_22138 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
var statearr_22653_23046 = state_22550__$1;
(statearr_22653_23046[(2)] = inst_22138);

(statearr_22653_23046[(1)] = (104));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (222))){
var inst_22370 = (state_22550[(17)]);
var inst_22391 = cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,inst_22370);
var state_22550__$1 = state_22550;
var statearr_22654_23047 = state_22550__$1;
(statearr_22654_23047[(2)] = inst_22391);

(statearr_22654_23047[(1)] = (223));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (293))){
var inst_22528 = (function(){throw cljs.core.match.backtrack})();
var state_22550__$1 = state_22550;
var statearr_22655_23048 = state_22550__$1;
(statearr_22655_23048[(2)] = inst_22528);

(statearr_22655_23048[(1)] = (295));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (95))){
var inst_22106 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
if(cljs.core.truth_(inst_22106)){
var statearr_22656_23049 = state_22550__$1;
(statearr_22656_23049[(1)] = (102));

} else {
var statearr_22657_23050 = state_22550__$1;
(statearr_22657_23050[(1)] = (103));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (144))){
var inst_22201 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
var statearr_22658_23051 = state_22550__$1;
(statearr_22658_23051[(2)] = inst_22201);

(statearr_22658_23051[(1)] = (141));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (176))){
var inst_21929 = (state_22550[(13)]);
var inst_22279 = cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,inst_21929);
var state_22550__$1 = state_22550;
var statearr_22659_23052 = state_22550__$1;
(statearr_22659_23052[(2)] = inst_22279);

(statearr_22659_23052[(1)] = (177));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (192))){
var inst_21929 = (state_22550[(13)]);
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_22550,(188),Error,null,(187));
var inst_22294 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_21929,cljs.core.cst$kw$status,cljs.core.cst$kw$clojure$core$match_SLASH_not_DASH_found);
var inst_22295 = cljs.core.keyword_identical_QMARK_(inst_22294,cljs.core.cst$kw$in_DASH_progress);
var state_22550__$1 = state_22550;
if(inst_22295){
var statearr_22660_23053 = state_22550__$1;
(statearr_22660_23053[(1)] = (193));

} else {
var statearr_22661_23054 = state_22550__$1;
(statearr_22661_23054[(1)] = (194));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (54))){
var inst_22022 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
var statearr_22662_23055 = state_22550__$1;
(statearr_22662_23055[(2)] = inst_22022);

(statearr_22662_23055[(1)] = (27));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (92))){
var inst_21929 = (state_22550[(13)]);
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_22550,(88),Error,null,(87));
var inst_22085 = (inst_21929 == null);
var inst_22086 = cljs.core.not(inst_22085);
var state_22550__$1 = state_22550;
if(inst_22086){
var statearr_22663_23056 = state_22550__$1;
(statearr_22663_23056[(1)] = (93));

} else {
var statearr_22664_23057 = state_22550__$1;
(statearr_22664_23057[(1)] = (94));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (221))){
var inst_22370 = (state_22550[(17)]);
var inst_22375 = inst_22370.cljs$lang$protocol_mask$partition0$;
var inst_22376 = (inst_22375 & (256));
var inst_22377 = inst_22370.cljs$core$ILookup$;
var inst_22378 = (inst_22376) || (inst_22377);
var state_22550__$1 = state_22550;
if(cljs.core.truth_(inst_22378)){
var statearr_22665_23058 = state_22550__$1;
(statearr_22665_23058[(1)] = (224));

} else {
var statearr_22666_23059 = state_22550__$1;
(statearr_22666_23059[(1)] = (225));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (141))){
var inst_22203 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
var statearr_22667_23060 = state_22550__$1;
(statearr_22667_23060[(2)] = inst_22203);

(statearr_22667_23060[(1)] = (138));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (290))){
var inst_22518 = (function(){throw cljs.core.match.backtrack})();
var state_22550__$1 = state_22550;
var statearr_22668_23061 = state_22550__$1;
(statearr_22668_23061[(2)] = inst_22518);

(statearr_22668_23061[(1)] = (292));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (264))){
var state_22550__$1 = state_22550;
var statearr_22669_23062 = state_22550__$1;
(statearr_22669_23062[(2)] = false);

(statearr_22669_23062[(1)] = (265));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (137))){
var inst_22184 = (state_22550[(15)]);
var inst_22205 = cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,inst_22184);
var state_22550__$1 = state_22550;
var statearr_22670_23063 = state_22550__$1;
(statearr_22670_23063[(2)] = inst_22205);

(statearr_22670_23063[(1)] = (138));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (234))){
var inst_22395 = (state_22550[(24)]);
var inst_22395__$1 = (state_22550[(2)]);
var inst_22396 = (inst_22395__$1 === cljs.core.match.backtrack);
var state_22550__$1 = (function (){var statearr_22671 = state_22550;
(statearr_22671[(24)] = inst_22395__$1);

return statearr_22671;
})();
if(cljs.core.truth_(inst_22396)){
var statearr_22672_23064 = state_22550__$1;
(statearr_22672_23064[(1)] = (235));

} else {
var statearr_22673_23065 = state_22550__$1;
(statearr_22673_23065[(1)] = (236));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (104))){
var inst_22140 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
var statearr_22674_23066 = state_22550__$1;
(statearr_22674_23066[(2)] = inst_22140);


cljs.core.async.impl.ioc_helpers.process_exception(state_22550__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (15))){
var inst_21929 = (state_22550[(13)]);
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_22550,(11),Error,null,(10));
var inst_21944 = (inst_21929 == null);
var inst_21945 = cljs.core.not(inst_21944);
var state_22550__$1 = state_22550;
if(inst_21945){
var statearr_22675_23067 = state_22550__$1;
(statearr_22675_23067[(1)] = (16));

} else {
var statearr_22676_23068 = state_22550__$1;
(statearr_22676_23068[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (48))){
var inst_22002 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
var statearr_22677_23069 = state_22550__$1;
(statearr_22677_23069[(2)] = inst_22002);

(statearr_22677_23069[(1)] = (45));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (242))){
var inst_22505 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
var statearr_22678_23070 = state_22550__$1;
(statearr_22678_23070[(2)] = inst_22505);

(statearr_22678_23070[(1)] = (241));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (50))){
var state_22550__$1 = state_22550;
var statearr_22679_23071 = state_22550__$1;
(statearr_22679_23071[(2)] = null);

(statearr_22679_23071[(1)] = (51));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (251))){
var inst_22495 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
var statearr_22680_23072 = state_22550__$1;
(statearr_22680_23072[(2)] = inst_22495);

(statearr_22680_23072[(1)] = (250));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (116))){
var inst_22128 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
var statearr_22681_23073 = state_22550__$1;
(statearr_22681_23073[(2)] = inst_22128);

(statearr_22681_23073[(1)] = (113));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (75))){
var state_22550__$1 = state_22550;
var statearr_22682_23074 = state_22550__$1;
(statearr_22682_23074[(2)] = null);

(statearr_22682_23074[(1)] = (83));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (159))){
var inst_22226 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,rerenderer_example.snake.handler.change_game_state);
var state_22550__$1 = state_22550;
var statearr_22683_23075 = state_22550__$1;
(statearr_22683_23075[(2)] = inst_22226);

(statearr_22683_23075[(1)] = (161));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (99))){
var inst_21929 = (state_22550[(13)]);
var inst_22097 = cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,inst_21929);
var state_22550__$1 = state_22550;
var statearr_22684_23076 = state_22550__$1;
(statearr_22684_23076[(2)] = inst_22097);

(statearr_22684_23076[(1)] = (101));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (281))){
var inst_22488 = (function(){throw cljs.core.match.backtrack})();
var state_22550__$1 = state_22550;
var statearr_22685_23077 = state_22550__$1;
(statearr_22685_23077[(2)] = inst_22488);

(statearr_22685_23077[(1)] = (283));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (21))){
var inst_21961 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
var statearr_22686_23078 = state_22550__$1;
(statearr_22686_23078[(2)] = inst_21961);

(statearr_22686_23078[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (31))){
var inst_21967 = (state_22550[(25)]);
var inst_21972 = (function(){throw inst_21967})();
var state_22550__$1 = state_22550;
var statearr_22687_23079 = state_22550__$1;
(statearr_22687_23079[(2)] = inst_21972);

(statearr_22687_23079[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (113))){
var inst_22130 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
var statearr_22688_23080 = state_22550__$1;
(statearr_22688_23080[(2)] = inst_22130);


cljs.core.async.impl.ioc_helpers.process_exception(state_22550__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (32))){
var inst_21974 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
var statearr_22689_23081 = state_22550__$1;
(statearr_22689_23081[(2)] = inst_21974);


cljs.core.async.impl.ioc_helpers.process_exception(state_22550__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (136))){
var inst_22184 = (state_22550[(15)]);
var inst_22189 = inst_22184.cljs$lang$protocol_mask$partition0$;
var inst_22190 = (inst_22189 & (256));
var inst_22191 = inst_22184.cljs$core$ILookup$;
var inst_22192 = (inst_22190) || (inst_22191);
var state_22550__$1 = state_22550;
if(cljs.core.truth_(inst_22192)){
var statearr_22690_23082 = state_22550__$1;
(statearr_22690_23082[(1)] = (139));

} else {
var statearr_22691_23083 = state_22550__$1;
(statearr_22691_23083[(1)] = (140));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (139))){
var state_22550__$1 = state_22550;
var statearr_22692_23084 = state_22550__$1;
(statearr_22692_23084[(2)] = true);

(statearr_22692_23084[(1)] = (141));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (174))){
var inst_21929 = (state_22550[(13)]);
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_22550,(170),Error,null,(169));
var inst_22260 = (inst_21929 == null);
var inst_22261 = cljs.core.not(inst_22260);
var state_22550__$1 = state_22550;
if(inst_22261){
var statearr_22693_23085 = state_22550__$1;
(statearr_22693_23085[(1)] = (175));

} else {
var statearr_22694_23086 = state_22550__$1;
(statearr_22694_23086[(1)] = (176));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (284))){
var inst_22498 = (function(){throw cljs.core.match.backtrack})();
var state_22550__$1 = state_22550;
var statearr_22695_23087 = state_22550__$1;
(statearr_22695_23087[(2)] = inst_22498);

(statearr_22695_23087[(1)] = (286));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (208))){
var inst_22341 = (function(){throw cljs.core.match.backtrack})();
var state_22550__$1 = state_22550;
var statearr_22696_23088 = state_22550__$1;
(statearr_22696_23088[(2)] = inst_22341);

(statearr_22696_23088[(1)] = (210));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (182))){
var state_22550__$1 = state_22550;
var statearr_22697_23089 = state_22550__$1;
(statearr_22697_23089[(2)] = false);

(statearr_22697_23089[(1)] = (183));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (256))){
var inst_21929 = (state_22550[(13)]);
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_22550,(252),Error,null,(251));
var inst_22437 = (inst_21929 == null);
var inst_22438 = cljs.core.not(inst_22437);
var state_22550__$1 = state_22550;
if(inst_22438){
var statearr_22698_23090 = state_22550__$1;
(statearr_22698_23090[(1)] = (257));

} else {
var statearr_22699_23091 = state_22550__$1;
(statearr_22699_23091[(1)] = (258));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (214))){
var inst_22533 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
var statearr_22700_23092 = state_22550__$1;
(statearr_22700_23092[(2)] = inst_22533);


cljs.core.async.impl.ioc_helpers.process_exception(state_22550__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (193))){
var inst_22184 = (state_22550[(15)]);
var inst_22297 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22184,cljs.core.cst$kw$keycode);
var inst_22298 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,rerenderer_example.snake.handler.change_direction,inst_22297);
var state_22550__$1 = state_22550;
var statearr_22701_23093 = state_22550__$1;
(statearr_22701_23093[(2)] = inst_22298);

(statearr_22701_23093[(1)] = (195));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (241))){
var inst_22513 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
var statearr_22702_23094 = state_22550__$1;
(statearr_22702_23094[(2)] = inst_22513);


cljs.core.async.impl.ioc_helpers.process_exception(state_22550__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (226))){
var inst_22389 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
var statearr_22703_23095 = state_22550__$1;
(statearr_22703_23095[(2)] = inst_22389);

(statearr_22703_23095[(1)] = (223));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (235))){
var inst_22398 = (function(){throw cljs.core.match.backtrack})();
var state_22550__$1 = state_22550;
var statearr_22704_23096 = state_22550__$1;
(statearr_22704_23096[(2)] = inst_22398);

(statearr_22704_23096[(1)] = (237));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (262))){
var inst_22454 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
var statearr_22705_23097 = state_22550__$1;
(statearr_22705_23097[(2)] = inst_22454);

(statearr_22705_23097[(1)] = (259));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (263))){
var inst_21929 = (state_22550[(13)]);
var inst_22449 = cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,inst_21929);
var state_22550__$1 = state_22550;
var statearr_22706_23098 = state_22550__$1;
(statearr_22706_23098[(2)] = inst_22449);

(statearr_22706_23098[(1)] = (265));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (40))){
var inst_21981 = (state_22550[(26)]);
var inst_21986 = (function(){throw inst_21981})();
var state_22550__$1 = state_22550;
var statearr_22707_23099 = state_22550__$1;
(statearr_22707_23099[(2)] = inst_21986);

(statearr_22707_23099[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (129))){
var inst_22346 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
var statearr_22708_23100 = state_22550__$1;
(statearr_22708_23100[(2)] = inst_22346);


cljs.core.async.impl.ioc_helpers.process_exception(state_22550__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (294))){
var state_22550__$1 = state_22550;
var statearr_22709_23101 = state_22550__$1;
(statearr_22709_23101[(2)] = null);

(statearr_22709_23101[(1)] = (295));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (91))){
var inst_22080 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
var statearr_22710_23102 = state_22550__$1;
(statearr_22710_23102[(2)] = inst_22080);


cljs.core.async.impl.ioc_helpers.process_exception(state_22550__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (117))){
var inst_22135 = (function(){throw cljs.core.match.backtrack})();
var state_22550__$1 = state_22550;
var statearr_22711_23103 = state_22550__$1;
(statearr_22711_23103[(2)] = inst_22135);

(statearr_22711_23103[(1)] = (119));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (172))){
var inst_22248 = (state_22550[(27)]);
var inst_22253 = (function(){throw inst_22248})();
var state_22550__$1 = state_22550;
var statearr_22712_23104 = state_22550__$1;
(statearr_22712_23104[(2)] = inst_22253);

(statearr_22712_23104[(1)] = (173));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (108))){
var inst_22108 = (state_22550[(23)]);
var inst_22113 = (function(){throw inst_22108})();
var state_22550__$1 = state_22550;
var statearr_22713_23105 = state_22550__$1;
(statearr_22713_23105[(2)] = inst_22113);

(statearr_22713_23105[(1)] = (109));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (156))){
var inst_22212 = (state_22550[(14)]);
var inst_22217 = (function(){throw inst_22212})();
var state_22550__$1 = state_22550;
var statearr_22714_23106 = state_22550__$1;
(statearr_22714_23106[(2)] = inst_22217);

(statearr_22714_23106[(1)] = (157));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (223))){
var inst_22393 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
if(cljs.core.truth_(inst_22393)){
var statearr_22715_23107 = state_22550__$1;
(statearr_22715_23107[(1)] = (230));

} else {
var statearr_22716_23108 = state_22550__$1;
(statearr_22716_23108[(1)] = (231));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (181))){
var inst_21929 = (state_22550[(13)]);
var inst_22272 = cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,inst_21929);
var state_22550__$1 = state_22550;
var statearr_22717_23109 = state_22550__$1;
(statearr_22717_23109[(2)] = inst_22272);

(statearr_22717_23109[(1)] = (183));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (278))){
var inst_22478 = (function(){throw cljs.core.match.backtrack})();
var state_22550__$1 = state_22550;
var statearr_22718_23110 = state_22550__$1;
(statearr_22718_23110[(2)] = inst_22478);

(statearr_22718_23110[(1)] = (280));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (56))){
var state_22550__$1 = state_22550;
var statearr_22719_23111 = state_22550__$1;
(statearr_22719_23111[(2)] = null);

(statearr_22719_23111[(1)] = (211));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (33))){
var inst_21929 = (state_22550[(13)]);
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_22550,(29),Error,null,(28));
var inst_21978 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_21929,cljs.core.cst$kw$debug,cljs.core.cst$kw$clojure$core$match_SLASH_not_DASH_found);
var inst_21979 = (inst_21978 === true);
var state_22550__$1 = state_22550;
if(cljs.core.truth_(inst_21979)){
var statearr_22720_23112 = state_22550__$1;
(statearr_22720_23112[(1)] = (34));

} else {
var statearr_22721_23113 = state_22550__$1;
(statearr_22721_23113[(1)] = (35));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (13))){
var inst_21933 = (state_22550[(28)]);
var inst_21937 = (function(){throw inst_21933})();
var state_22550__$1 = state_22550;
var statearr_22722_23114 = state_22550__$1;
(statearr_22722_23114[(2)] = inst_21937);

(statearr_22722_23114[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (22))){
var inst_21929 = (state_22550[(13)]);
var inst_21956 = cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,inst_21929);
var state_22550__$1 = state_22550;
var statearr_22723_23115 = state_22550__$1;
(statearr_22723_23115[(2)] = inst_21956);

(statearr_22723_23115[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (257))){
var inst_21929 = (state_22550[(13)]);
var inst_22440 = inst_21929.cljs$lang$protocol_mask$partition0$;
var inst_22441 = (inst_22440 & (256));
var inst_22442 = inst_21929.cljs$core$ILookup$;
var inst_22443 = (inst_22441) || (inst_22442);
var state_22550__$1 = state_22550;
if(cljs.core.truth_(inst_22443)){
var statearr_22724_23116 = state_22550__$1;
(statearr_22724_23116[(1)] = (260));

} else {
var statearr_22725_23117 = state_22550__$1;
(statearr_22725_23117[(1)] = (261));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (168))){
var inst_22326 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
var statearr_22726_23118 = state_22550__$1;
(statearr_22726_23118[(2)] = inst_22326);


cljs.core.async.impl.ioc_helpers.process_exception(state_22550__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (90))){
var inst_22073 = (state_22550[(21)]);
var inst_22078 = (function(){throw inst_22073})();
var state_22550__$1 = state_22550;
var statearr_22727_23119 = state_22550__$1;
(statearr_22727_23119[(2)] = inst_22078);

(statearr_22727_23119[(1)] = (91));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (237))){
var inst_22402 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
var statearr_22728_23120 = state_22550__$1;
(statearr_22728_23120[(2)] = inst_22402);


cljs.core.async.impl.ioc_helpers.process_exception(state_22550__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (292))){
var inst_22521 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
var statearr_22729_23121 = state_22550__$1;
(statearr_22729_23121[(2)] = inst_22521);

(statearr_22729_23121[(1)] = (232));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (109))){
var inst_22115 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
var statearr_22730_23122 = state_22550__$1;
(statearr_22730_23122[(2)] = inst_22115);


cljs.core.async.impl.ioc_helpers.process_exception(state_22550__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (216))){
var inst_22359 = (state_22550[(9)]);
var inst_22359__$1 = (state_22550[(2)]);
var inst_22360 = (inst_22359__$1 === cljs.core.match.backtrack);
var state_22550__$1 = (function (){var statearr_22731 = state_22550;
(statearr_22731[(9)] = inst_22359__$1);

return statearr_22731;
})();
if(cljs.core.truth_(inst_22360)){
var statearr_22732_23123 = state_22550__$1;
(statearr_22732_23123[(1)] = (217));

} else {
var statearr_22733_23124 = state_22550__$1;
(statearr_22733_23124[(1)] = (218));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (191))){
var inst_22290 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
var statearr_22734_23125 = state_22550__$1;
(statearr_22734_23125[(2)] = inst_22290);


cljs.core.async.impl.ioc_helpers.process_exception(state_22550__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (143))){
var state_22550__$1 = state_22550;
var statearr_22735_23126 = state_22550__$1;
(statearr_22735_23126[(2)] = false);

(statearr_22735_23126[(1)] = (144));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (178))){
var state_22550__$1 = state_22550;
var statearr_22736_23127 = state_22550__$1;
(statearr_22736_23127[(2)] = true);

(statearr_22736_23127[(1)] = (180));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (247))){
var inst_22421 = (state_22550[(18)]);
var inst_22406 = (state_22550[(19)]);
var inst_21929 = (state_22550[(13)]);
var inst_22356 = (state_22550[(20)]);
var inst_22370 = (state_22550[(17)]);
var inst_21928 = (state_22550[(11)]);
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_22550,(243),Error,null,(242));
var inst_22421__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_22370,cljs.core.cst$kw$x,cljs.core.cst$kw$clojure$core$match_SLASH_not_DASH_found);
var inst_22422 = (function (){var ocr_21889 = inst_21928;
var ocr_21890 = inst_21929;
var ocr_21889_0__21899 = inst_22356;
var ocr_21889_1__21900 = inst_22370;
var ocr_21889_1__21900_y__21904 = inst_22406;
var ocr_21889_1__21900_x__21905 = inst_22421__$1;
return ((function (ocr_21889,ocr_21890,ocr_21889_0__21899,ocr_21889_1__21900,ocr_21889_1__21900_y__21904,ocr_21889_1__21900_x__21905,inst_22421,inst_22406,inst_21929,inst_22356,inst_22370,inst_21928,___$1,inst_22421__$1,state_val_22551,c__13209__auto__,move_snake_ch){
return (function (p1__20811_SHARP_){
return (((700) > p1__20811_SHARP_)) && ((p1__20811_SHARP_ > (100)));
});
;})(ocr_21889,ocr_21890,ocr_21889_0__21899,ocr_21889_1__21900,ocr_21889_1__21900_y__21904,ocr_21889_1__21900_x__21905,inst_22421,inst_22406,inst_21929,inst_22356,inst_22370,inst_21928,___$1,inst_22421__$1,state_val_22551,c__13209__auto__,move_snake_ch))
})();
var inst_22423 = (inst_22422.cljs$core$IFn$_invoke$arity$1 ? inst_22422.cljs$core$IFn$_invoke$arity$1(inst_22421__$1) : inst_22422.call(null,inst_22421__$1));
var state_22550__$1 = (function (){var statearr_22737 = state_22550;
(statearr_22737[(18)] = inst_22421__$1);

return statearr_22737;
})();
if(cljs.core.truth_(inst_22423)){
var statearr_22738_23128 = state_22550__$1;
(statearr_22738_23128[(1)] = (248));

} else {
var statearr_22739_23129 = state_22550__$1;
(statearr_22739_23129[(1)] = (249));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (167))){
var state_22550__$1 = state_22550;
var statearr_22740_23130 = state_22550__$1;
(statearr_22740_23130[(1)] = (202));



return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (36))){
var inst_22014 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
var statearr_22742_23131 = state_22550__$1;
(statearr_22742_23131[(2)] = inst_22014);


cljs.core.async.impl.ioc_helpers.process_exception(state_22550__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (41))){
var inst_21988 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
var statearr_22743_23132 = state_22550__$1;
(statearr_22743_23132[(2)] = inst_21988);


cljs.core.async.impl.ioc_helpers.process_exception(state_22550__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (187))){
var inst_22308 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
var statearr_22744_23133 = state_22550__$1;
(statearr_22744_23133[(2)] = inst_22308);

(statearr_22744_23133[(1)] = (186));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (195))){
var inst_22306 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
var statearr_22745_23134 = state_22550__$1;
(statearr_22745_23134[(2)] = inst_22306);


cljs.core.async.impl.ioc_helpers.process_exception(state_22550__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (118))){
var state_22550__$1 = state_22550;
var statearr_22746_23135 = state_22550__$1;
(statearr_22746_23135[(2)] = null);

(statearr_22746_23135[(1)] = (119));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (150))){
var state_22550__$1 = state_22550;
var statearr_22747_23136 = state_22550__$1;
(statearr_22747_23136[(2)] = null);

(statearr_22747_23136[(1)] = (158));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (238))){
var inst_22406 = (state_22550[(19)]);
var inst_21929 = (state_22550[(13)]);
var inst_22356 = (state_22550[(20)]);
var inst_22370 = (state_22550[(17)]);
var inst_21928 = (state_22550[(11)]);
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_22550,(234),Error,null,(233));
var inst_22406__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_22370,cljs.core.cst$kw$y,cljs.core.cst$kw$clojure$core$match_SLASH_not_DASH_found);
var inst_22407 = (function (){var ocr_21889 = inst_21928;
var ocr_21890 = inst_21929;
var ocr_21889_0__21899 = inst_22356;
var ocr_21889_1__21900 = inst_22370;
var ocr_21889_1__21900_y__21904 = inst_22406__$1;
return ((function (ocr_21889,ocr_21890,ocr_21889_0__21899,ocr_21889_1__21900,ocr_21889_1__21900_y__21904,inst_22406,inst_21929,inst_22356,inst_22370,inst_21928,___$1,inst_22406__$1,state_val_22551,c__13209__auto__,move_snake_ch){
return (function (p1__20812_SHARP_){
return (((500) > p1__20812_SHARP_)) && ((p1__20812_SHARP_ > (400)));
});
;})(ocr_21889,ocr_21890,ocr_21889_0__21899,ocr_21889_1__21900,ocr_21889_1__21900_y__21904,inst_22406,inst_21929,inst_22356,inst_22370,inst_21928,___$1,inst_22406__$1,state_val_22551,c__13209__auto__,move_snake_ch))
})();
var inst_22408 = (inst_22407.cljs$core$IFn$_invoke$arity$1 ? inst_22407.cljs$core$IFn$_invoke$arity$1(inst_22406__$1) : inst_22407.call(null,inst_22406__$1));
var state_22550__$1 = (function (){var statearr_22748 = state_22550;
(statearr_22748[(19)] = inst_22406__$1);

return statearr_22748;
})();
if(cljs.core.truth_(inst_22408)){
var statearr_22749_23137 = state_22550__$1;
(statearr_22749_23137[(1)] = (239));

} else {
var statearr_22750_23138 = state_22550__$1;
(statearr_22750_23138[(1)] = (240));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (196))){
var inst_22301 = (function(){throw cljs.core.match.backtrack})();
var state_22550__$1 = state_22550;
var statearr_22751_23139 = state_22550__$1;
(statearr_22751_23139[(2)] = inst_22301);

(statearr_22751_23139[(1)] = (198));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (162))){
var inst_22229 = (function(){throw cljs.core.match.backtrack})();
var state_22550__$1 = state_22550;
var statearr_22752_23140 = state_22550__$1;
(statearr_22752_23140[(2)] = inst_22229);

(statearr_22752_23140[(1)] = (164));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (184))){
var state_22550__$1 = state_22550;
var statearr_22753_23141 = state_22550__$1;
(statearr_22753_23141[(2)] = null);

(statearr_22753_23141[(1)] = (192));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (219))){
var inst_22366 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
var statearr_22754_23142 = state_22550__$1;
(statearr_22754_23142[(2)] = inst_22366);


cljs.core.async.impl.ioc_helpers.process_exception(state_22550__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (89))){
var inst_22076 = (function(){throw cljs.core.match.backtrack})();
var state_22550__$1 = state_22550;
var statearr_22755_23143 = state_22550__$1;
(statearr_22755_23143[(2)] = inst_22076);

(statearr_22755_23143[(1)] = (91));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (100))){
var state_22550__$1 = state_22550;
var statearr_22756_23144 = state_22550__$1;
(statearr_22756_23144[(2)] = false);

(statearr_22756_23144[(1)] = (101));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (243))){
var inst_22410 = (state_22550[(29)]);
var inst_22410__$1 = (state_22550[(2)]);
var inst_22411 = (inst_22410__$1 === cljs.core.match.backtrack);
var state_22550__$1 = (function (){var statearr_22757 = state_22550;
(statearr_22757[(29)] = inst_22410__$1);

return statearr_22757;
})();
if(cljs.core.truth_(inst_22411)){
var statearr_22758_23145 = state_22550__$1;
(statearr_22758_23145[(1)] = (244));

} else {
var statearr_22759_23146 = state_22550__$1;
(statearr_22759_23146[(1)] = (245));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (131))){
var inst_22173 = (state_22550[(30)]);
var inst_22173__$1 = (state_22550[(2)]);
var inst_22174 = (inst_22173__$1 === cljs.core.match.backtrack);
var state_22550__$1 = (function (){var statearr_22760 = state_22550;
(statearr_22760[(30)] = inst_22173__$1);

return statearr_22760;
})();
if(cljs.core.truth_(inst_22174)){
var statearr_22761_23147 = state_22550__$1;
(statearr_22761_23147[(1)] = (132));

} else {
var statearr_22762_23148 = state_22550__$1;
(statearr_22762_23148[(1)] = (133));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (122))){
var inst_22148 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
var statearr_22763_23149 = state_22550__$1;
(statearr_22763_23149[(2)] = inst_22148);

(statearr_22763_23149[(1)] = (86));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (43))){
var inst_21929 = (state_22550[(13)]);
var inst_21928 = (state_22550[(11)]);
var inst_21995 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21929,cljs.core.cst$kw$as);
var inst_21996 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Not handled:",inst_21928,"for state:",inst_21995], 0));
var state_22550__$1 = state_22550;
var statearr_22764_23150 = state_22550__$1;
(statearr_22764_23150[(2)] = inst_21996);

(statearr_22764_23150[(1)] = (45));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (231))){
var state_22550__$1 = state_22550;
var statearr_22765_23151 = state_22550__$1;
(statearr_22765_23151[(1)] = (290));



return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (61))){
var state_22550__$1 = state_22550;
var statearr_22767_23152 = state_22550__$1;
(statearr_22767_23152[(2)] = null);

(statearr_22767_23152[(1)] = (126));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (29))){
var inst_21967 = (state_22550[(25)]);
var inst_21967__$1 = (state_22550[(2)]);
var inst_21968 = (inst_21967__$1 === cljs.core.match.backtrack);
var state_22550__$1 = (function (){var statearr_22768 = state_22550;
(statearr_22768[(25)] = inst_21967__$1);

return statearr_22768;
})();
if(cljs.core.truth_(inst_21968)){
var statearr_22769_23153 = state_22550__$1;
(statearr_22769_23153[(1)] = (30));

} else {
var statearr_22770_23154 = state_22550__$1;
(statearr_22770_23154[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (151))){
var inst_22209 = (state_22550[(22)]);
var inst_22238 = (function(){throw inst_22209})();
var state_22550__$1 = state_22550;
var statearr_22771_23155 = state_22550__$1;
(statearr_22771_23155[(2)] = inst_22238);

(statearr_22771_23155[(1)] = (152));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (44))){
var state_22550__$1 = state_22550;
var statearr_22772_23156 = state_22550__$1;
(statearr_22772_23156[(1)] = (46));



return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (258))){
var inst_21929 = (state_22550[(13)]);
var inst_22456 = cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,inst_21929);
var state_22550__$1 = state_22550;
var statearr_22774_23157 = state_22550__$1;
(statearr_22774_23157[(2)] = inst_22456);

(statearr_22774_23157[(1)] = (259));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (250))){
var inst_22503 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
var statearr_22775_23158 = state_22550__$1;
(statearr_22775_23158[(2)] = inst_22503);


cljs.core.async.impl.ioc_helpers.process_exception(state_22550__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (93))){
var inst_21929 = (state_22550[(13)]);
var inst_22088 = inst_21929.cljs$lang$protocol_mask$partition0$;
var inst_22089 = (inst_22088 & (256));
var inst_22090 = inst_21929.cljs$core$ILookup$;
var inst_22091 = (inst_22089) || (inst_22090);
var state_22550__$1 = state_22550;
if(cljs.core.truth_(inst_22091)){
var statearr_22776_23159 = state_22550__$1;
(statearr_22776_23159[(1)] = (96));

} else {
var statearr_22777_23160 = state_22550__$1;
(statearr_22777_23160[(1)] = (97));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (6))){
var inst_21930 = (state_22550[(31)]);
var inst_21930__$1 = (state_22550[(2)]);
var inst_21931 = (inst_21930__$1 === cljs.core.match.backtrack);
var state_22550__$1 = (function (){var statearr_22778 = state_22550;
(statearr_22778[(31)] = inst_21930__$1);

return statearr_22778;
})();
if(cljs.core.truth_(inst_21931)){
var statearr_22779_23161 = state_22550__$1;
(statearr_22779_23161[(1)] = (7));

} else {
var statearr_22780_23162 = state_22550__$1;
(statearr_22780_23162[(1)] = (8));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (111))){
var inst_22122 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,rerenderer_example.snake.handler.move_snake);
var state_22550__$1 = state_22550;
var statearr_22781_23163 = state_22550__$1;
(statearr_22781_23163[(2)] = inst_22122);

(statearr_22781_23163[(1)] = (113));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (28))){
var inst_22016 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
var statearr_22782_23164 = state_22550__$1;
(statearr_22782_23164[(2)] = inst_22016);

(statearr_22782_23164[(1)] = (27));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (134))){
var inst_22180 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
var statearr_22783_23165 = state_22550__$1;
(statearr_22783_23165[(2)] = inst_22180);


cljs.core.async.impl.ioc_helpers.process_exception(state_22550__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (64))){
var inst_22348 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
var statearr_22784_23166 = state_22550__$1;
(statearr_22784_23166[(2)] = inst_22348);

(statearr_22784_23166[(1)] = (63));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (189))){
var inst_22286 = (function(){throw cljs.core.match.backtrack})();
var state_22550__$1 = state_22550;
var statearr_22785_23167 = state_22550__$1;
(statearr_22785_23167[(2)] = inst_22286);

(statearr_22785_23167[(1)] = (191));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (280))){
var inst_22481 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
var statearr_22786_23168 = state_22550__$1;
(statearr_22786_23168[(2)] = inst_22481);

(statearr_22786_23168[(1)] = (277));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (198))){
var inst_22304 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
var statearr_22787_23169 = state_22550__$1;
(statearr_22787_23169[(2)] = inst_22304);

(statearr_22787_23169[(1)] = (195));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (155))){
var inst_22215 = (function(){throw cljs.core.match.backtrack})();
var state_22550__$1 = state_22550;
var statearr_22788_23170 = state_22550__$1;
(statearr_22788_23170[(2)] = inst_22215);

(statearr_22788_23170[(1)] = (157));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (295))){
var inst_22531 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
var statearr_22789_23171 = state_22550__$1;
(statearr_22789_23171[(2)] = inst_22531);

(statearr_22789_23171[(1)] = (214));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (248))){
var state_22550__$1 = state_22550;
var statearr_22790_23172 = state_22550__$1;
(statearr_22790_23172[(2)] = null);

(statearr_22790_23172[(1)] = (256));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (285))){
var state_22550__$1 = state_22550;
var statearr_22791_23173 = state_22550__$1;
(statearr_22791_23173[(2)] = null);

(statearr_22791_23173[(1)] = (286));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (227))){
var inst_22370 = (state_22550[(17)]);
var inst_22384 = cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,inst_22370);
var state_22550__$1 = state_22550;
var statearr_22792_23174 = state_22550__$1;
(statearr_22792_23174[(2)] = inst_22384);

(statearr_22792_23174[(1)] = (229));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (220))){
var inst_22370 = (state_22550[(17)]);
var inst_21928 = (state_22550[(11)]);
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_22550,(216),Error,null,(215));
var inst_22370__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(inst_21928,(1));
var inst_22372 = (inst_22370__$1 == null);
var inst_22373 = cljs.core.not(inst_22372);
var state_22550__$1 = (function (){var statearr_22793 = state_22550;
(statearr_22793[(17)] = inst_22370__$1);

return statearr_22793;
})();
if(inst_22373){
var statearr_22794_23175 = state_22550__$1;
(statearr_22794_23175[(1)] = (221));

} else {
var statearr_22795_23176 = state_22550__$1;
(statearr_22795_23176[(1)] = (222));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (103))){
var state_22550__$1 = state_22550;
var statearr_22796_23177 = state_22550__$1;
(statearr_22796_23177[(1)] = (117));



return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (170))){
var inst_22248 = (state_22550[(27)]);
var inst_22248__$1 = (state_22550[(2)]);
var inst_22249 = (inst_22248__$1 === cljs.core.match.backtrack);
var state_22550__$1 = (function (){var statearr_22798 = state_22550;
(statearr_22798[(27)] = inst_22248__$1);

return statearr_22798;
})();
if(cljs.core.truth_(inst_22249)){
var statearr_22799_23178 = state_22550__$1;
(statearr_22799_23178[(1)] = (171));

} else {
var statearr_22800_23179 = state_22550__$1;
(statearr_22800_23179[(1)] = (172));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (51))){
var inst_22012 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
var statearr_22801_23180 = state_22550__$1;
(statearr_22801_23180[(2)] = inst_22012);

(statearr_22801_23180[(1)] = (36));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (25))){
var state_22550__$1 = state_22550;
var statearr_22802_23181 = state_22550__$1;
(statearr_22802_23181[(2)] = null);

(statearr_22802_23181[(1)] = (33));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (261))){
var inst_21929 = (state_22550[(13)]);
var inst_22446 = inst_21929.cljs$lang$protocol_mask$partition0$;
var inst_22447 = (!inst_22446);
var state_22550__$1 = state_22550;
if(cljs.core.truth_(inst_22447)){
var statearr_22803_23182 = state_22550__$1;
(statearr_22803_23182[(1)] = (263));

} else {
var statearr_22804_23183 = state_22550__$1;
(statearr_22804_23183[(1)] = (264));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (201))){
var inst_22314 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
var statearr_22805_23184 = state_22550__$1;
(statearr_22805_23184[(2)] = inst_22314);

(statearr_22805_23184[(1)] = (186));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (166))){
var state_22550__$1 = state_22550;
var statearr_22806_23185 = state_22550__$1;
(statearr_22806_23185[(2)] = null);

(statearr_22806_23185[(1)] = (174));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (34))){
var state_22550__$1 = state_22550;
var statearr_22807_23186 = state_22550__$1;
(statearr_22807_23186[(2)] = null);

(statearr_22807_23186[(1)] = (42));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (252))){
var inst_22425 = (state_22550[(32)]);
var inst_22425__$1 = (state_22550[(2)]);
var inst_22426 = (inst_22425__$1 === cljs.core.match.backtrack);
var state_22550__$1 = (function (){var statearr_22808 = state_22550;
(statearr_22808[(32)] = inst_22425__$1);

return statearr_22808;
})();
if(cljs.core.truth_(inst_22426)){
var statearr_22809_23187 = state_22550__$1;
(statearr_22809_23187[(1)] = (253));

} else {
var statearr_22810_23188 = state_22550__$1;
(statearr_22810_23188[(1)] = (254));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (146))){
var state_22550__$1 = state_22550;
var statearr_22811_23189 = state_22550__$1;
(statearr_22811_23189[(1)] = (205));



return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (228))){
var state_22550__$1 = state_22550;
var statearr_22813_23190 = state_22550__$1;
(statearr_22813_23190[(2)] = false);

(statearr_22813_23190[(1)] = (229));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (125))){
var inst_22158 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
var statearr_22814_23191 = state_22550__$1;
(statearr_22814_23191[(2)] = inst_22158);

(statearr_22814_23191[(1)] = (77));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (276))){
var state_22550__$1 = state_22550;
var statearr_22815_23192 = state_22550__$1;
(statearr_22815_23192[(1)] = (278));



return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (148))){
var inst_22328 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
var statearr_22817_23193 = state_22550__$1;
(statearr_22817_23193[(2)] = inst_22328);

(statearr_22817_23193[(1)] = (147));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (17))){
var inst_21929 = (state_22550[(13)]);
var inst_21963 = cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,inst_21929);
var state_22550__$1 = state_22550;
var statearr_22818_23194 = state_22550__$1;
(statearr_22818_23194[(2)] = inst_21963);

(statearr_22818_23194[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (3))){
var inst_22548 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22550__$1,inst_22548);
} else {
if((state_val_22551 === (286))){
var inst_22501 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
var statearr_22819_23195 = state_22550__$1;
(statearr_22819_23195[(2)] = inst_22501);

(statearr_22819_23195[(1)] = (250));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (279))){
var state_22550__$1 = state_22550;
var statearr_22820_23196 = state_22550__$1;
(statearr_22820_23196[(2)] = null);

(statearr_22820_23196[(1)] = (280));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (12))){
var state_22550__$1 = state_22550;
var statearr_22821_23197 = state_22550__$1;
(statearr_22821_23197[(2)] = cljs.core.cst$kw$pass);

(statearr_22821_23197[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (152))){
var inst_22240 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
var statearr_22822_23198 = state_22550__$1;
(statearr_22822_23198[(2)] = inst_22240);


cljs.core.async.impl.ioc_helpers.process_exception(state_22550__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (2))){
var inst_21923 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21924 = [event_ch,move_snake_ch];
var inst_21925 = (new cljs.core.PersistentVector(null,2,(5),inst_21923,inst_21924,null));
var state_22550__$1 = state_22550;
return cljs.core.async.ioc_alts_BANG_(state_22550__$1,(4),inst_21925);
} else {
if((state_val_22551 === (66))){
var state_22550__$1 = state_22550;
var statearr_22823_23199 = state_22550__$1;
(statearr_22823_23199[(2)] = null);

(statearr_22823_23199[(1)] = (74));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (236))){
var inst_22395 = (state_22550[(24)]);
var inst_22400 = (function(){throw inst_22395})();
var state_22550__$1 = state_22550;
var statearr_22824_23200 = state_22550__$1;
(statearr_22824_23200[(2)] = inst_22400);

(statearr_22824_23200[(1)] = (237));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (142))){
var inst_22184 = (state_22550[(15)]);
var inst_22198 = cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,inst_22184);
var state_22550__$1 = state_22550;
var statearr_22825_23201 = state_22550__$1;
(statearr_22825_23201[(2)] = inst_22198);

(statearr_22825_23201[(1)] = (144));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (107))){
var inst_22111 = (function(){throw cljs.core.match.backtrack})();
var state_22550__$1 = state_22550;
var statearr_22826_23202 = state_22550__$1;
(statearr_22826_23202[(2)] = inst_22111);

(statearr_22826_23202[(1)] = (109));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (23))){
var state_22550__$1 = state_22550;
var statearr_22827_23203 = state_22550__$1;
(statearr_22827_23203[(2)] = false);

(statearr_22827_23203[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (230))){
var state_22550__$1 = state_22550;
var statearr_22828_23204 = state_22550__$1;
(statearr_22828_23204[(2)] = null);

(statearr_22828_23204[(1)] = (238));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (47))){
var state_22550__$1 = state_22550;
var statearr_22829_23205 = state_22550__$1;
(statearr_22829_23205[(2)] = null);

(statearr_22829_23205[(1)] = (48));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (180))){
var inst_22277 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
var statearr_22830_23206 = state_22550__$1;
(statearr_22830_23206[(2)] = inst_22277);

(statearr_22830_23206[(1)] = (177));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (158))){
var inst_22184 = (state_22550[(15)]);
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_22550,(154),Error,null,(153));
var inst_22223 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_22184,cljs.core.cst$kw$keycode,cljs.core.cst$kw$clojure$core$match_SLASH_not_DASH_found);
var inst_22224 = (inst_22223 === (32));
var state_22550__$1 = state_22550;
if(cljs.core.truth_(inst_22224)){
var statearr_22831_23207 = state_22550__$1;
(statearr_22831_23207[(1)] = (159));

} else {
var statearr_22832_23208 = state_22550__$1;
(statearr_22832_23208[(1)] = (160));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (35))){
var state_22550__$1 = state_22550;
var statearr_22833_23209 = state_22550__$1;
(statearr_22833_23209[(1)] = (49));



return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (127))){
var state_22550__$1 = state_22550;
var statearr_22835_23210 = state_22550__$1;
(statearr_22835_23210[(2)] = null);

(statearr_22835_23210[(1)] = (135));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (82))){
var inst_22066 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
var statearr_22836_23211 = state_22550__$1;
(statearr_22836_23211[(2)] = inst_22066);


cljs.core.async.impl.ioc_helpers.process_exception(state_22550__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (76))){
var state_22550__$1 = state_22550;
var statearr_22837_23212 = state_22550__$1;
(statearr_22837_23212[(1)] = (123));



return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (215))){
var inst_22525 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
var statearr_22839_23213 = state_22550__$1;
(statearr_22839_23213[(2)] = inst_22525);

(statearr_22839_23213[(1)] = (214));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (97))){
var inst_21929 = (state_22550[(13)]);
var inst_22094 = inst_21929.cljs$lang$protocol_mask$partition0$;
var inst_22095 = (!inst_22094);
var state_22550__$1 = state_22550;
if(cljs.core.truth_(inst_22095)){
var statearr_22840_23214 = state_22550__$1;
(statearr_22840_23214[(1)] = (99));

} else {
var statearr_22841_23215 = state_22550__$1;
(statearr_22841_23215[(1)] = (100));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (277))){
var inst_22483 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
var statearr_22842_23216 = state_22550__$1;
(statearr_22842_23216[(2)] = inst_22483);


cljs.core.async.impl.ioc_helpers.process_exception(state_22550__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (19))){
var state_22550__$1 = state_22550;
var statearr_22843_23217 = state_22550__$1;
(statearr_22843_23217[(2)] = true);

(statearr_22843_23217[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (57))){
var state_22550__$1 = state_22550;
var statearr_22844_23218 = state_22550__$1;
(statearr_22844_23218[(1)] = (296));



return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (202))){
var inst_22321 = (function(){throw cljs.core.match.backtrack})();
var state_22550__$1 = state_22550;
var statearr_22846_23219 = state_22550__$1;
(statearr_22846_23219[(2)] = inst_22321);

(statearr_22846_23219[(1)] = (204));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (68))){
var inst_22166 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
var statearr_22847_23220 = state_22550__$1;
(statearr_22847_23220[(2)] = inst_22166);


cljs.core.async.impl.ioc_helpers.process_exception(state_22550__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (200))){
var state_22550__$1 = state_22550;
var statearr_22848_23221 = state_22550__$1;
(statearr_22848_23221[(2)] = null);

(statearr_22848_23221[(1)] = (201));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (11))){
var inst_21933 = (state_22550[(28)]);
var inst_21933__$1 = (state_22550[(2)]);
var inst_21934 = (inst_21933__$1 === cljs.core.match.backtrack);
var state_22550__$1 = (function (){var statearr_22849 = state_22550;
(statearr_22849[(28)] = inst_21933__$1);

return statearr_22849;
})();
if(cljs.core.truth_(inst_21934)){
var statearr_22850_23222 = state_22550__$1;
(statearr_22850_23222[(1)] = (12));

} else {
var statearr_22851_23223 = state_22550__$1;
(statearr_22851_23223[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (115))){
var state_22550__$1 = state_22550;
var statearr_22852_23224 = state_22550__$1;
(statearr_22852_23224[(2)] = null);

(statearr_22852_23224[(1)] = (116));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (255))){
var inst_22432 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
var statearr_22853_23225 = state_22550__$1;
(statearr_22853_23225[(2)] = inst_22432);


cljs.core.async.impl.ioc_helpers.process_exception(state_22550__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (9))){
var inst_22030 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
var statearr_22854_23226 = state_22550__$1;
(statearr_22854_23226[(2)] = inst_22030);


cljs.core.async.impl.ioc_helpers.process_exception(state_22550__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (145))){
var state_22550__$1 = state_22550;
var statearr_22855_23227 = state_22550__$1;
(statearr_22855_23227[(2)] = null);

(statearr_22855_23227[(1)] = (165));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (5))){
var inst_22545 = (state_22550[(2)]);
var state_22550__$1 = (function (){var statearr_22856 = state_22550;
(statearr_22856[(33)] = inst_22545);

return statearr_22856;
})();
var statearr_22857_23228 = state_22550__$1;
(statearr_22857_23228[(2)] = null);

(statearr_22857_23228[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (244))){
var inst_22413 = (function(){throw cljs.core.match.backtrack})();
var state_22550__$1 = state_22550;
var statearr_22858_23229 = state_22550__$1;
(statearr_22858_23229[(2)] = inst_22413);

(statearr_22858_23229[(1)] = (246));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (289))){
var inst_22511 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
var statearr_22859_23230 = state_22550__$1;
(statearr_22859_23230[(2)] = inst_22511);

(statearr_22859_23230[(1)] = (241));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (112))){
var state_22550__$1 = state_22550;
var statearr_22860_23231 = state_22550__$1;
(statearr_22860_23231[(1)] = (114));



return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (179))){
var inst_21929 = (state_22550[(13)]);
var inst_22269 = inst_21929.cljs$lang$protocol_mask$partition0$;
var inst_22270 = (!inst_22269);
var state_22550__$1 = state_22550;
if(cljs.core.truth_(inst_22270)){
var statearr_22862_23232 = state_22550__$1;
(statearr_22862_23232[(1)] = (181));

} else {
var statearr_22863_23233 = state_22550__$1;
(statearr_22863_23233[(1)] = (182));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (245))){
var inst_22410 = (state_22550[(29)]);
var inst_22415 = (function(){throw inst_22410})();
var state_22550__$1 = state_22550;
var statearr_22864_23234 = state_22550__$1;
(statearr_22864_23234[(2)] = inst_22415);

(statearr_22864_23234[(1)] = (246));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (266))){
var state_22550__$1 = state_22550;
var statearr_22865_23235 = state_22550__$1;
(statearr_22865_23235[(2)] = null);

(statearr_22865_23235[(1)] = (274));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (254))){
var inst_22425 = (state_22550[(32)]);
var inst_22430 = (function(){throw inst_22425})();
var state_22550__$1 = state_22550;
var statearr_22866_23236 = state_22550__$1;
(statearr_22866_23236[(2)] = inst_22430);

(statearr_22866_23236[(1)] = (255));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (283))){
var inst_22491 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
var statearr_22867_23237 = state_22550__$1;
(statearr_22867_23237[(2)] = inst_22491);

(statearr_22867_23237[(1)] = (268));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (83))){
var inst_21928 = (state_22550[(11)]);
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_22550,(79),Error,null,(78));
var inst_22070 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(inst_21928,(1));
var inst_22071 = cljs.core.keyword_identical_QMARK_(inst_22070,cljs.core.cst$kw$move_DASH_snake);
var state_22550__$1 = state_22550;
if(inst_22071){
var statearr_22868_23238 = state_22550__$1;
(statearr_22868_23238[(1)] = (84));

} else {
var statearr_22869_23239 = state_22550__$1;
(statearr_22869_23239[(1)] = (85));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (138))){
var inst_22207 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
if(cljs.core.truth_(inst_22207)){
var statearr_22870_23240 = state_22550__$1;
(statearr_22870_23240[(1)] = (145));

} else {
var statearr_22871_23241 = state_22550__$1;
(statearr_22871_23241[(1)] = (146));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (14))){
var inst_21939 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
var statearr_22872_23242 = state_22550__$1;
(statearr_22872_23242[(2)] = inst_21939);


cljs.core.async.impl.ioc_helpers.process_exception(state_22550__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (265))){
var inst_22452 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
var statearr_22873_23243 = state_22550__$1;
(statearr_22873_23243[(2)] = inst_22452);

(statearr_22873_23243[(1)] = (262));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (45))){
var inst_22004 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
var statearr_22874_23244 = state_22550__$1;
(statearr_22874_23244[(2)] = inst_22004);


cljs.core.async.impl.ioc_helpers.process_exception(state_22550__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (53))){
var state_22550__$1 = state_22550;
var statearr_22875_23245 = state_22550__$1;
(statearr_22875_23245[(2)] = null);

(statearr_22875_23245[(1)] = (54));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (78))){
var inst_22152 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
var statearr_22876_23246 = state_22550__$1;
(statearr_22876_23246[(2)] = inst_22152);

(statearr_22876_23246[(1)] = (77));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (132))){
var inst_22176 = (function(){throw cljs.core.match.backtrack})();
var state_22550__$1 = state_22550;
var statearr_22877_23247 = state_22550__$1;
(statearr_22877_23247[(2)] = inst_22176);

(statearr_22877_23247[(1)] = (134));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (26))){
var state_22550__$1 = state_22550;
var statearr_22878_23248 = state_22550__$1;
(statearr_22878_23248[(1)] = (52));



return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (123))){
var inst_22155 = (function(){throw cljs.core.match.backtrack})();
var state_22550__$1 = state_22550;
var statearr_22880_23249 = state_22550__$1;
(statearr_22880_23249[(2)] = inst_22155);

(statearr_22880_23249[(1)] = (125));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (203))){
var state_22550__$1 = state_22550;
var statearr_22881_23250 = state_22550__$1;
(statearr_22881_23250[(2)] = null);

(statearr_22881_23250[(1)] = (204));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (140))){
var inst_22184 = (state_22550[(15)]);
var inst_22195 = inst_22184.cljs$lang$protocol_mask$partition0$;
var inst_22196 = (!inst_22195);
var state_22550__$1 = state_22550;
if(cljs.core.truth_(inst_22196)){
var statearr_22882_23251 = state_22550__$1;
(statearr_22882_23251[(1)] = (142));

} else {
var statearr_22883_23252 = state_22550__$1;
(statearr_22883_23252[(1)] = (143));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (268))){
var inst_22493 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
var statearr_22884_23253 = state_22550__$1;
(statearr_22884_23253[(2)] = inst_22493);


cljs.core.async.impl.ioc_helpers.process_exception(state_22550__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (16))){
var inst_21929 = (state_22550[(13)]);
var inst_21947 = inst_21929.cljs$lang$protocol_mask$partition0$;
var inst_21948 = (inst_21947 & (256));
var inst_21949 = inst_21929.cljs$core$ILookup$;
var inst_21950 = (inst_21948) || (inst_21949);
var state_22550__$1 = state_22550;
if(cljs.core.truth_(inst_21950)){
var statearr_22885_23254 = state_22550__$1;
(statearr_22885_23254[(1)] = (19));

} else {
var statearr_22886_23255 = state_22550__$1;
(statearr_22886_23255[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (133))){
var inst_22173 = (state_22550[(30)]);
var inst_22178 = (function(){throw inst_22173})();
var state_22550__$1 = state_22550;
var statearr_22887_23256 = state_22550__$1;
(statearr_22887_23256[(2)] = inst_22178);

(statearr_22887_23256[(1)] = (134));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (288))){
var state_22550__$1 = state_22550;
var statearr_22888_23257 = state_22550__$1;
(statearr_22888_23257[(2)] = null);

(statearr_22888_23257[(1)] = (289));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (163))){
var state_22550__$1 = state_22550;
var statearr_22889_23258 = state_22550__$1;
(statearr_22889_23258[(2)] = null);

(statearr_22889_23258[(1)] = (164));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (81))){
var inst_22059 = (state_22550[(34)]);
var inst_22064 = (function(){throw inst_22059})();
var state_22550__$1 = state_22550;
var statearr_22890_23259 = state_22550__$1;
(statearr_22890_23259[(2)] = inst_22064);

(statearr_22890_23259[(1)] = (82));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (120))){
var inst_22145 = (function(){throw cljs.core.match.backtrack})();
var state_22550__$1 = state_22550;
var statearr_22891_23260 = state_22550__$1;
(statearr_22891_23260[(2)] = inst_22145);

(statearr_22891_23260[(1)] = (122));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (79))){
var inst_22059 = (state_22550[(34)]);
var inst_22059__$1 = (state_22550[(2)]);
var inst_22060 = (inst_22059__$1 === cljs.core.match.backtrack);
var state_22550__$1 = (function (){var statearr_22892 = state_22550;
(statearr_22892[(34)] = inst_22059__$1);

return statearr_22892;
})();
if(cljs.core.truth_(inst_22060)){
var statearr_22893_23261 = state_22550__$1;
(statearr_22893_23261[(1)] = (80));

} else {
var statearr_22894_23262 = state_22550__$1;
(statearr_22894_23262[(1)] = (81));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (211))){
var inst_22356 = (state_22550[(20)]);
var inst_21928 = (state_22550[(11)]);
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_22550,(60),Error,null,(59));
var inst_22356__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(inst_21928,(0));
var inst_22357 = cljs.core.keyword_identical_QMARK_(inst_22356__$1,cljs.core.cst$kw$click);
var state_22550__$1 = (function (){var statearr_22895 = state_22550;
(statearr_22895[(20)] = inst_22356__$1);

return statearr_22895;
})();
if(inst_22357){
var statearr_22896_23263 = state_22550__$1;
(statearr_22896_23263[(1)] = (212));

} else {
var statearr_22897_23264 = state_22550__$1;
(statearr_22897_23264[(1)] = (213));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (38))){
var inst_21981 = (state_22550[(26)]);
var inst_21981__$1 = (state_22550[(2)]);
var inst_21982 = (inst_21981__$1 === cljs.core.match.backtrack);
var state_22550__$1 = (function (){var statearr_22898 = state_22550;
(statearr_22898[(26)] = inst_21981__$1);

return statearr_22898;
})();
if(cljs.core.truth_(inst_21982)){
var statearr_22899_23265 = state_22550__$1;
(statearr_22899_23265[(1)] = (39));

} else {
var statearr_22900_23266 = state_22550__$1;
(statearr_22900_23266[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (173))){
var inst_22255 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
var statearr_22901_23267 = state_22550__$1;
(statearr_22901_23267[(2)] = inst_22255);


cljs.core.async.impl.ioc_helpers.process_exception(state_22550__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (126))){
var inst_21928 = (state_22550[(11)]);
var inst_22170 = (state_22550[(16)]);
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_22550,(65),Error,null,(64));
var inst_22170__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(inst_21928,(0));
var inst_22171 = cljs.core.keyword_identical_QMARK_(inst_22170__$1,cljs.core.cst$kw$keyup);
var state_22550__$1 = (function (){var statearr_22902 = state_22550;
(statearr_22902[(16)] = inst_22170__$1);

return statearr_22902;
})();
if(inst_22171){
var statearr_22903_23268 = state_22550__$1;
(statearr_22903_23268[(1)] = (127));

} else {
var statearr_22904_23269 = state_22550__$1;
(statearr_22904_23269[(1)] = (128));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (98))){
var inst_22102 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
var statearr_22905_23270 = state_22550__$1;
(statearr_22905_23270[(2)] = inst_22102);

(statearr_22905_23270[(1)] = (95));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (124))){
var state_22550__$1 = state_22550;
var statearr_22906_23271 = state_22550__$1;
(statearr_22906_23271[(2)] = null);

(statearr_22906_23271[(1)] = (125));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (171))){
var inst_22251 = (function(){throw cljs.core.match.backtrack})();
var state_22550__$1 = state_22550;
var statearr_22907_23272 = state_22550__$1;
(statearr_22907_23272[(2)] = inst_22251);

(statearr_22907_23272[(1)] = (173));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (87))){
var inst_22142 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
var statearr_22908_23273 = state_22550__$1;
(statearr_22908_23273[(2)] = inst_22142);

(statearr_22908_23273[(1)] = (86));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (169))){
var inst_22318 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
var statearr_22909_23274 = state_22550__$1;
(statearr_22909_23274[(2)] = inst_22318);

(statearr_22909_23274[(1)] = (168));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (160))){
var state_22550__$1 = state_22550;
var statearr_22910_23275 = state_22550__$1;
(statearr_22910_23275[(1)] = (162));



return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (30))){
var inst_21970 = (function(){throw cljs.core.match.backtrack})();
var state_22550__$1 = state_22550;
var statearr_22912_23276 = state_22550__$1;
(statearr_22912_23276[(2)] = inst_21970);

(statearr_22912_23276[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (207))){
var inst_22334 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
var statearr_22913_23277 = state_22550__$1;
(statearr_22913_23277[(2)] = inst_22334);

(statearr_22913_23277[(1)] = (147));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (194))){
var state_22550__$1 = state_22550;
var statearr_22914_23278 = state_22550__$1;
(statearr_22914_23278[(1)] = (196));



return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (73))){
var inst_22052 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
var statearr_22916_23279 = state_22550__$1;
(statearr_22916_23279[(2)] = inst_22052);


cljs.core.async.impl.ioc_helpers.process_exception(state_22550__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (96))){
var state_22550__$1 = state_22550;
var statearr_22917_23280 = state_22550__$1;
(statearr_22917_23280[(2)] = true);

(statearr_22917_23280[(1)] = (98));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (10))){
var inst_22026 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
var statearr_22918_23281 = state_22550__$1;
(statearr_22918_23281[(2)] = inst_22026);

(statearr_22918_23281[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (272))){
var inst_22460 = (state_22550[(35)]);
var inst_22465 = (function(){throw inst_22460})();
var state_22550__$1 = state_22550;
var statearr_22919_23282 = state_22550__$1;
(statearr_22919_23282[(2)] = inst_22465);

(statearr_22919_23282[(1)] = (273));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (270))){
var inst_22460 = (state_22550[(35)]);
var inst_22460__$1 = (state_22550[(2)]);
var inst_22461 = (inst_22460__$1 === cljs.core.match.backtrack);
var state_22550__$1 = (function (){var statearr_22920 = state_22550;
(statearr_22920[(35)] = inst_22460__$1);

return statearr_22920;
})();
if(cljs.core.truth_(inst_22461)){
var statearr_22921_23283 = state_22550__$1;
(statearr_22921_23283[(1)] = (271));

} else {
var statearr_22922_23284 = state_22550__$1;
(statearr_22922_23284[(1)] = (272));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (271))){
var inst_22463 = (function(){throw cljs.core.match.backtrack})();
var state_22550__$1 = state_22550;
var statearr_22923_23285 = state_22550__$1;
(statearr_22923_23285[(2)] = inst_22463);

(statearr_22923_23285[(1)] = (273));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (18))){
var inst_21965 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
if(cljs.core.truth_(inst_21965)){
var statearr_22924_23286 = state_22550__$1;
(statearr_22924_23286[(1)] = (25));

} else {
var statearr_22925_23287 = state_22550__$1;
(statearr_22925_23287[(1)] = (26));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (105))){
var inst_22132 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
var statearr_22926_23288 = state_22550__$1;
(statearr_22926_23288[(2)] = inst_22132);

(statearr_22926_23288[(1)] = (104));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (185))){
var state_22550__$1 = state_22550;
var statearr_22927_23289 = state_22550__$1;
(statearr_22927_23289[(1)] = (199));



return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (52))){
var inst_22019 = (function(){throw cljs.core.match.backtrack})();
var state_22550__$1 = state_22550;
var statearr_22929_23290 = state_22550__$1;
(statearr_22929_23290[(2)] = inst_22019);

(statearr_22929_23290[(1)] = (54));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (114))){
var inst_22125 = (function(){throw cljs.core.match.backtrack})();
var state_22550__$1 = state_22550;
var statearr_22930_23291 = state_22550__$1;
(statearr_22930_23291[(2)] = inst_22125);

(statearr_22930_23291[(1)] = (116));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (253))){
var inst_22428 = (function(){throw cljs.core.match.backtrack})();
var state_22550__$1 = state_22550;
var statearr_22931_23292 = state_22550__$1;
(statearr_22931_23292[(2)] = inst_22428);

(statearr_22931_23292[(1)] = (255));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (209))){
var state_22550__$1 = state_22550;
var statearr_22932_23293 = state_22550__$1;
(statearr_22932_23293[(2)] = null);

(statearr_22932_23293[(1)] = (210));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (147))){
var inst_22336 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
var statearr_22933_23294 = state_22550__$1;
(statearr_22933_23294[(2)] = inst_22336);


cljs.core.async.impl.ioc_helpers.process_exception(state_22550__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (67))){
var inst_22042 = (state_22550[(7)]);
var inst_22164 = (function(){throw inst_22042})();
var state_22550__$1 = state_22550;
var statearr_22934_23295 = state_22550__$1;
(statearr_22934_23295[(2)] = inst_22164);

(statearr_22934_23295[(1)] = (68));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (296))){
var inst_22538 = (function(){throw cljs.core.match.backtrack})();
var state_22550__$1 = state_22550;
var statearr_22935_23296 = state_22550__$1;
(statearr_22935_23296[(2)] = inst_22538);

(statearr_22935_23296[(1)] = (298));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (161))){
var inst_22234 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
var statearr_22936_23297 = state_22550__$1;
(statearr_22936_23297[(2)] = inst_22234);


cljs.core.async.impl.ioc_helpers.process_exception(state_22550__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (71))){
var inst_22048 = (function(){throw cljs.core.match.backtrack})();
var state_22550__$1 = state_22550;
var statearr_22937_23298 = state_22550__$1;
(statearr_22937_23298[(2)] = inst_22048);

(statearr_22937_23298[(1)] = (73));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (42))){
var inst_21929 = (state_22550[(13)]);
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_22550,(38),Error,null,(37));
var inst_21992 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_21929,cljs.core.cst$kw$as,cljs.core.cst$kw$clojure$core$match_SLASH_not_DASH_found);
var inst_21993 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(inst_21992,cljs.core.cst$kw$clojure$core$match_SLASH_not_DASH_found);
var state_22550__$1 = state_22550;
if(inst_21993){
var statearr_22938_23299 = state_22550__$1;
(statearr_22938_23299[(1)] = (43));

} else {
var statearr_22939_23300 = state_22550__$1;
(statearr_22939_23300[(1)] = (44));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (80))){
var inst_22062 = (function(){throw cljs.core.match.backtrack})();
var state_22550__$1 = state_22550;
var statearr_22940_23301 = state_22550__$1;
(statearr_22940_23301[(2)] = inst_22062);

(statearr_22940_23301[(1)] = (82));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (199))){
var inst_22311 = (function(){throw cljs.core.match.backtrack})();
var state_22550__$1 = state_22550;
var statearr_22941_23302 = state_22550__$1;
(statearr_22941_23302[(2)] = inst_22311);

(statearr_22941_23302[(1)] = (201));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (37))){
var inst_22006 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
var statearr_22942_23303 = state_22550__$1;
(statearr_22942_23303[(2)] = inst_22006);

(statearr_22942_23303[(1)] = (36));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (183))){
var inst_22275 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
var statearr_22943_23304 = state_22550__$1;
(statearr_22943_23304[(2)] = inst_22275);

(statearr_22943_23304[(1)] = (180));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (63))){
var inst_22352 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
var statearr_22944_23305 = state_22550__$1;
(statearr_22944_23305[(2)] = inst_22352);


cljs.core.async.impl.ioc_helpers.process_exception(state_22550__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (212))){
var state_22550__$1 = state_22550;
var statearr_22945_23306 = state_22550__$1;
(statearr_22945_23306[(2)] = null);

(statearr_22945_23306[(1)] = (220));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (94))){
var inst_21929 = (state_22550[(13)]);
var inst_22104 = cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,inst_21929);
var state_22550__$1 = state_22550;
var statearr_22946_23307 = state_22550__$1;
(statearr_22946_23307[(2)] = inst_22104);

(statearr_22946_23307[(1)] = (95));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (8))){
var inst_21930 = (state_22550[(31)]);
var inst_22028 = (function(){throw inst_21930})();
var state_22550__$1 = state_22550;
var statearr_22947_23308 = state_22550__$1;
(statearr_22947_23308[(2)] = inst_22028);

(statearr_22947_23308[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (246))){
var inst_22417 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
var statearr_22948_23309 = state_22550__$1;
(statearr_22948_23309[(2)] = inst_22417);


cljs.core.async.impl.ioc_helpers.process_exception(state_22550__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (190))){
var inst_22283 = (state_22550[(12)]);
var inst_22288 = (function(){throw inst_22283})();
var state_22550__$1 = state_22550;
var statearr_22949_23310 = state_22550__$1;
(statearr_22949_23310[(2)] = inst_22288);

(statearr_22949_23310[(1)] = (191));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (177))){
var inst_22281 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
if(cljs.core.truth_(inst_22281)){
var statearr_22950_23311 = state_22550__$1;
(statearr_22950_23311[(1)] = (184));

} else {
var statearr_22951_23312 = state_22550__$1;
(statearr_22951_23312[(1)] = (185));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (49))){
var inst_22009 = (function(){throw cljs.core.match.backtrack})();
var state_22550__$1 = state_22550;
var statearr_22952_23313 = state_22550__$1;
(statearr_22952_23313[(2)] = inst_22009);

(statearr_22952_23313[(1)] = (51));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (84))){
var state_22550__$1 = state_22550;
var statearr_22953_23314 = state_22550__$1;
(statearr_22953_23314[(2)] = null);

(statearr_22953_23314[(1)] = (92));


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
});})(c__13209__auto__,move_snake_ch))
;
return ((function (switch__13095__auto__,c__13209__auto__,move_snake_ch){
return (function() {
var rerenderer_example$snake$handler$event_handler_$_state_machine__13096__auto__ = null;
var rerenderer_example$snake$handler$event_handler_$_state_machine__13096__auto____0 = (function (){
var statearr_22957 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22957[(0)] = rerenderer_example$snake$handler$event_handler_$_state_machine__13096__auto__);

(statearr_22957[(1)] = (1));

return statearr_22957;
});
var rerenderer_example$snake$handler$event_handler_$_state_machine__13096__auto____1 = (function (state_22550){
while(true){
var ret_value__13097__auto__ = (function (){try{while(true){
var result__13098__auto__ = switch__13095__auto__(state_22550);
if(cljs.core.keyword_identical_QMARK_(result__13098__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13098__auto__;
}
break;
}
}catch (e22958){if((e22958 instanceof Object)){
var ex__13099__auto__ = e22958;
var statearr_22959_23315 = state_22550;
(statearr_22959_23315[(5)] = ex__13099__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22550);

return cljs.core.cst$kw$recur;
} else {
throw e22958;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13097__auto__,cljs.core.cst$kw$recur)){
var G__23316 = state_22550;
state_22550 = G__23316;
continue;
} else {
return ret_value__13097__auto__;
}
break;
}
});
rerenderer_example$snake$handler$event_handler_$_state_machine__13096__auto__ = function(state_22550){
switch(arguments.length){
case 0:
return rerenderer_example$snake$handler$event_handler_$_state_machine__13096__auto____0.call(this);
case 1:
return rerenderer_example$snake$handler$event_handler_$_state_machine__13096__auto____1.call(this,state_22550);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rerenderer_example$snake$handler$event_handler_$_state_machine__13096__auto__.cljs$core$IFn$_invoke$arity$0 = rerenderer_example$snake$handler$event_handler_$_state_machine__13096__auto____0;
rerenderer_example$snake$handler$event_handler_$_state_machine__13096__auto__.cljs$core$IFn$_invoke$arity$1 = rerenderer_example$snake$handler$event_handler_$_state_machine__13096__auto____1;
return rerenderer_example$snake$handler$event_handler_$_state_machine__13096__auto__;
})()
;})(switch__13095__auto__,c__13209__auto__,move_snake_ch))
})();
var state__13211__auto__ = (function (){var statearr_22960 = (f__13210__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13210__auto__.cljs$core$IFn$_invoke$arity$0() : f__13210__auto__.call(null));
(statearr_22960[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13209__auto__);

return statearr_22960;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13211__auto__);
});})(c__13209__auto__,move_snake_ch))
);

return c__13209__auto__;
});
