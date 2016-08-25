// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('rerenderer.platform.browser.events');
goog.require('cljs.core');
goog.require('cljs.core.async');
/**
 * Translate js event to local representation.
 */
rerenderer.platform.browser.events.translate_event = (function rerenderer$platform$browser$events$translate_event(event,data){
var pred__15303 = cljs.core._EQ_;
var expr__15304 = event;
if(cljs.core.truth_((pred__15303.cljs$core$IFn$_invoke$arity$2 ? pred__15303.cljs$core$IFn$_invoke$arity$2("click",expr__15304) : pred__15303.call(null,"click",expr__15304)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$click,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,data.clientX,cljs.core.cst$kw$y,data.clientY], null)], null);
} else {
if(cljs.core.truth_((pred__15303.cljs$core$IFn$_invoke$arity$2 ? pred__15303.cljs$core$IFn$_invoke$arity$2("keydown",expr__15304) : pred__15303.call(null,"keydown",expr__15304)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$keydown,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keycode,data.keyCode], null)], null);
} else {
if(cljs.core.truth_((pred__15303.cljs$core$IFn$_invoke$arity$2 ? pred__15303.cljs$core$IFn$_invoke$arity$2("keyup",expr__15304) : pred__15303.call(null,"keyup",expr__15304)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$keyup,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keycode,data.keyCode], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [event,data], null);
}
}
}
});
/**
 * Binds all events to channel.
 */
rerenderer.platform.browser.events.bind_events_BANG_ = (function rerenderer$platform$browser$events$bind_events_BANG_(ch,canvas){
var seq__15336 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["click","keydown","keyup"], null));
var chunk__15337 = null;
var count__15338 = (0);
var i__15339 = (0);
while(true){
if((i__15339 < count__15338)){
var event_name = chunk__15337.cljs$core$IIndexed$_nth$arity$2(null,i__15339);
canvas.addEventListener(event_name,((function (seq__15336,chunk__15337,count__15338,i__15339,event_name){
return (function (event){
event.preventDefault();

var c__10184__auto___15366 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__15336,chunk__15337,count__15338,i__15339,c__10184__auto___15366,event_name){
return (function (){
var f__10185__auto__ = (function (){var switch__10117__auto__ = ((function (seq__15336,chunk__15337,count__15338,i__15339,c__10184__auto___15366,event_name){
return (function (state_15344){
var state_val_15345 = (state_15344[(1)]);
if((state_val_15345 === (1))){
var inst_15340 = rerenderer.platform.browser.events.translate_event(event_name,event);
var state_15344__$1 = state_15344;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15344__$1,(2),ch,inst_15340);
} else {
if((state_val_15345 === (2))){
var inst_15342 = (state_15344[(2)]);
var state_15344__$1 = state_15344;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15344__$1,inst_15342);
} else {
return null;
}
}
});})(seq__15336,chunk__15337,count__15338,i__15339,c__10184__auto___15366,event_name))
;
return ((function (seq__15336,chunk__15337,count__15338,i__15339,switch__10117__auto__,c__10184__auto___15366,event_name){
return (function() {
var rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__10118__auto__ = null;
var rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__10118__auto____0 = (function (){
var statearr_15349 = [null,null,null,null,null,null,null];
(statearr_15349[(0)] = rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__10118__auto__);

(statearr_15349[(1)] = (1));

return statearr_15349;
});
var rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__10118__auto____1 = (function (state_15344){
while(true){
var ret_value__10119__auto__ = (function (){try{while(true){
var result__10120__auto__ = switch__10117__auto__(state_15344);
if(cljs.core.keyword_identical_QMARK_(result__10120__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10120__auto__;
}
break;
}
}catch (e15350){if((e15350 instanceof Object)){
var ex__10121__auto__ = e15350;
var statearr_15351_15367 = state_15344;
(statearr_15351_15367[(5)] = ex__10121__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15344);

return cljs.core.cst$kw$recur;
} else {
throw e15350;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10119__auto__,cljs.core.cst$kw$recur)){
var G__15368 = state_15344;
state_15344 = G__15368;
continue;
} else {
return ret_value__10119__auto__;
}
break;
}
});
rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__10118__auto__ = function(state_15344){
switch(arguments.length){
case 0:
return rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__10118__auto____0.call(this);
case 1:
return rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__10118__auto____1.call(this,state_15344);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__10118__auto__.cljs$core$IFn$_invoke$arity$0 = rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__10118__auto____0;
rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__10118__auto__.cljs$core$IFn$_invoke$arity$1 = rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__10118__auto____1;
return rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__10118__auto__;
})()
;})(seq__15336,chunk__15337,count__15338,i__15339,switch__10117__auto__,c__10184__auto___15366,event_name))
})();
var state__10186__auto__ = (function (){var statearr_15352 = (f__10185__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10185__auto__.cljs$core$IFn$_invoke$arity$0() : f__10185__auto__.call(null));
(statearr_15352[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10184__auto___15366);

return statearr_15352;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10186__auto__);
});})(seq__15336,chunk__15337,count__15338,i__15339,c__10184__auto___15366,event_name))
);


return false;
});})(seq__15336,chunk__15337,count__15338,i__15339,event_name))
);

var G__15369 = seq__15336;
var G__15370 = chunk__15337;
var G__15371 = count__15338;
var G__15372 = (i__15339 + (1));
seq__15336 = G__15369;
chunk__15337 = G__15370;
count__15338 = G__15371;
i__15339 = G__15372;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__15336);
if(temp__4657__auto__){
var seq__15336__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15336__$1)){
var c__6959__auto__ = cljs.core.chunk_first(seq__15336__$1);
var G__15373 = cljs.core.chunk_rest(seq__15336__$1);
var G__15374 = c__6959__auto__;
var G__15375 = cljs.core.count(c__6959__auto__);
var G__15376 = (0);
seq__15336 = G__15373;
chunk__15337 = G__15374;
count__15338 = G__15375;
i__15339 = G__15376;
continue;
} else {
var event_name = cljs.core.first(seq__15336__$1);
canvas.addEventListener(event_name,((function (seq__15336,chunk__15337,count__15338,i__15339,event_name,seq__15336__$1,temp__4657__auto__){
return (function (event){
event.preventDefault();

var c__10184__auto___15377 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__15336,chunk__15337,count__15338,i__15339,c__10184__auto___15377,event_name,seq__15336__$1,temp__4657__auto__){
return (function (){
var f__10185__auto__ = (function (){var switch__10117__auto__ = ((function (seq__15336,chunk__15337,count__15338,i__15339,c__10184__auto___15377,event_name,seq__15336__$1,temp__4657__auto__){
return (function (state_15357){
var state_val_15358 = (state_15357[(1)]);
if((state_val_15358 === (1))){
var inst_15353 = rerenderer.platform.browser.events.translate_event(event_name,event);
var state_15357__$1 = state_15357;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15357__$1,(2),ch,inst_15353);
} else {
if((state_val_15358 === (2))){
var inst_15355 = (state_15357[(2)]);
var state_15357__$1 = state_15357;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15357__$1,inst_15355);
} else {
return null;
}
}
});})(seq__15336,chunk__15337,count__15338,i__15339,c__10184__auto___15377,event_name,seq__15336__$1,temp__4657__auto__))
;
return ((function (seq__15336,chunk__15337,count__15338,i__15339,switch__10117__auto__,c__10184__auto___15377,event_name,seq__15336__$1,temp__4657__auto__){
return (function() {
var rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__10118__auto__ = null;
var rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__10118__auto____0 = (function (){
var statearr_15362 = [null,null,null,null,null,null,null];
(statearr_15362[(0)] = rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__10118__auto__);

(statearr_15362[(1)] = (1));

return statearr_15362;
});
var rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__10118__auto____1 = (function (state_15357){
while(true){
var ret_value__10119__auto__ = (function (){try{while(true){
var result__10120__auto__ = switch__10117__auto__(state_15357);
if(cljs.core.keyword_identical_QMARK_(result__10120__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10120__auto__;
}
break;
}
}catch (e15363){if((e15363 instanceof Object)){
var ex__10121__auto__ = e15363;
var statearr_15364_15378 = state_15357;
(statearr_15364_15378[(5)] = ex__10121__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15357);

return cljs.core.cst$kw$recur;
} else {
throw e15363;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10119__auto__,cljs.core.cst$kw$recur)){
var G__15379 = state_15357;
state_15357 = G__15379;
continue;
} else {
return ret_value__10119__auto__;
}
break;
}
});
rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__10118__auto__ = function(state_15357){
switch(arguments.length){
case 0:
return rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__10118__auto____0.call(this);
case 1:
return rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__10118__auto____1.call(this,state_15357);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__10118__auto__.cljs$core$IFn$_invoke$arity$0 = rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__10118__auto____0;
rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__10118__auto__.cljs$core$IFn$_invoke$arity$1 = rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__10118__auto____1;
return rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__10118__auto__;
})()
;})(seq__15336,chunk__15337,count__15338,i__15339,switch__10117__auto__,c__10184__auto___15377,event_name,seq__15336__$1,temp__4657__auto__))
})();
var state__10186__auto__ = (function (){var statearr_15365 = (f__10185__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10185__auto__.cljs$core$IFn$_invoke$arity$0() : f__10185__auto__.call(null));
(statearr_15365[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10184__auto___15377);

return statearr_15365;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10186__auto__);
});})(seq__15336,chunk__15337,count__15338,i__15339,c__10184__auto___15377,event_name,seq__15336__$1,temp__4657__auto__))
);


return false;
});})(seq__15336,chunk__15337,count__15338,i__15339,event_name,seq__15336__$1,temp__4657__auto__))
);

var G__15380 = cljs.core.next(seq__15336__$1);
var G__15381 = null;
var G__15382 = (0);
var G__15383 = (0);
seq__15336 = G__15380;
chunk__15337 = G__15381;
count__15338 = G__15382;
i__15339 = G__15383;
continue;
}
} else {
return null;
}
}
break;
}
});
