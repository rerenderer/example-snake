// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('rerenderer.platform.browser.events');
goog.require('cljs.core');
goog.require('cljs.core.async');
/**
 * Translate js event to local representation.
 */
rerenderer.platform.browser.events.translate_event = (function rerenderer$platform$browser$events$translate_event(event,data){
var pred__14532 = cljs.core._EQ_;
var expr__14533 = event;
if(cljs.core.truth_((pred__14532.cljs$core$IFn$_invoke$arity$2 ? pred__14532.cljs$core$IFn$_invoke$arity$2("click",expr__14533) : pred__14532.call(null,"click",expr__14533)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$click,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,data.clientX,cljs.core.cst$kw$y,data.clientY], null)], null);
} else {
if(cljs.core.truth_((pred__14532.cljs$core$IFn$_invoke$arity$2 ? pred__14532.cljs$core$IFn$_invoke$arity$2("keydown",expr__14533) : pred__14532.call(null,"keydown",expr__14533)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$keydown,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keycode,data.keyCode], null)], null);
} else {
if(cljs.core.truth_((pred__14532.cljs$core$IFn$_invoke$arity$2 ? pred__14532.cljs$core$IFn$_invoke$arity$2("keyup",expr__14533) : pred__14532.call(null,"keyup",expr__14533)))){
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
var seq__14565 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["click","keydown","keyup"], null));
var chunk__14566 = null;
var count__14567 = (0);
var i__14568 = (0);
while(true){
if((i__14568 < count__14567)){
var event_name = chunk__14566.cljs$core$IIndexed$_nth$arity$2(null,i__14568);
canvas.addEventListener(event_name,((function (seq__14565,chunk__14566,count__14567,i__14568,event_name){
return (function (event){
event.preventDefault();

var c__10139__auto___14595 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__14565,chunk__14566,count__14567,i__14568,c__10139__auto___14595,event_name){
return (function (){
var f__10140__auto__ = (function (){var switch__10072__auto__ = ((function (seq__14565,chunk__14566,count__14567,i__14568,c__10139__auto___14595,event_name){
return (function (state_14573){
var state_val_14574 = (state_14573[(1)]);
if((state_val_14574 === (1))){
var inst_14569 = rerenderer.platform.browser.events.translate_event(event_name,event);
var state_14573__$1 = state_14573;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14573__$1,(2),ch,inst_14569);
} else {
if((state_val_14574 === (2))){
var inst_14571 = (state_14573[(2)]);
var state_14573__$1 = state_14573;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14573__$1,inst_14571);
} else {
return null;
}
}
});})(seq__14565,chunk__14566,count__14567,i__14568,c__10139__auto___14595,event_name))
;
return ((function (seq__14565,chunk__14566,count__14567,i__14568,switch__10072__auto__,c__10139__auto___14595,event_name){
return (function() {
var rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__10073__auto__ = null;
var rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__10073__auto____0 = (function (){
var statearr_14578 = [null,null,null,null,null,null,null];
(statearr_14578[(0)] = rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__10073__auto__);

(statearr_14578[(1)] = (1));

return statearr_14578;
});
var rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__10073__auto____1 = (function (state_14573){
while(true){
var ret_value__10074__auto__ = (function (){try{while(true){
var result__10075__auto__ = switch__10072__auto__(state_14573);
if(cljs.core.keyword_identical_QMARK_(result__10075__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10075__auto__;
}
break;
}
}catch (e14579){if((e14579 instanceof Object)){
var ex__10076__auto__ = e14579;
var statearr_14580_14596 = state_14573;
(statearr_14580_14596[(5)] = ex__10076__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14573);

return cljs.core.cst$kw$recur;
} else {
throw e14579;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10074__auto__,cljs.core.cst$kw$recur)){
var G__14597 = state_14573;
state_14573 = G__14597;
continue;
} else {
return ret_value__10074__auto__;
}
break;
}
});
rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__10073__auto__ = function(state_14573){
switch(arguments.length){
case 0:
return rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__10073__auto____0.call(this);
case 1:
return rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__10073__auto____1.call(this,state_14573);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__10073__auto__.cljs$core$IFn$_invoke$arity$0 = rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__10073__auto____0;
rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__10073__auto__.cljs$core$IFn$_invoke$arity$1 = rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__10073__auto____1;
return rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__10073__auto__;
})()
;})(seq__14565,chunk__14566,count__14567,i__14568,switch__10072__auto__,c__10139__auto___14595,event_name))
})();
var state__10141__auto__ = (function (){var statearr_14581 = (f__10140__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10140__auto__.cljs$core$IFn$_invoke$arity$0() : f__10140__auto__.call(null));
(statearr_14581[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10139__auto___14595);

return statearr_14581;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10141__auto__);
});})(seq__14565,chunk__14566,count__14567,i__14568,c__10139__auto___14595,event_name))
);


return false;
});})(seq__14565,chunk__14566,count__14567,i__14568,event_name))
);

var G__14598 = seq__14565;
var G__14599 = chunk__14566;
var G__14600 = count__14567;
var G__14601 = (i__14568 + (1));
seq__14565 = G__14598;
chunk__14566 = G__14599;
count__14567 = G__14600;
i__14568 = G__14601;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__14565);
if(temp__4657__auto__){
var seq__14565__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14565__$1)){
var c__6959__auto__ = cljs.core.chunk_first(seq__14565__$1);
var G__14602 = cljs.core.chunk_rest(seq__14565__$1);
var G__14603 = c__6959__auto__;
var G__14604 = cljs.core.count(c__6959__auto__);
var G__14605 = (0);
seq__14565 = G__14602;
chunk__14566 = G__14603;
count__14567 = G__14604;
i__14568 = G__14605;
continue;
} else {
var event_name = cljs.core.first(seq__14565__$1);
canvas.addEventListener(event_name,((function (seq__14565,chunk__14566,count__14567,i__14568,event_name,seq__14565__$1,temp__4657__auto__){
return (function (event){
event.preventDefault();

var c__10139__auto___14606 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__14565,chunk__14566,count__14567,i__14568,c__10139__auto___14606,event_name,seq__14565__$1,temp__4657__auto__){
return (function (){
var f__10140__auto__ = (function (){var switch__10072__auto__ = ((function (seq__14565,chunk__14566,count__14567,i__14568,c__10139__auto___14606,event_name,seq__14565__$1,temp__4657__auto__){
return (function (state_14586){
var state_val_14587 = (state_14586[(1)]);
if((state_val_14587 === (1))){
var inst_14582 = rerenderer.platform.browser.events.translate_event(event_name,event);
var state_14586__$1 = state_14586;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14586__$1,(2),ch,inst_14582);
} else {
if((state_val_14587 === (2))){
var inst_14584 = (state_14586[(2)]);
var state_14586__$1 = state_14586;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14586__$1,inst_14584);
} else {
return null;
}
}
});})(seq__14565,chunk__14566,count__14567,i__14568,c__10139__auto___14606,event_name,seq__14565__$1,temp__4657__auto__))
;
return ((function (seq__14565,chunk__14566,count__14567,i__14568,switch__10072__auto__,c__10139__auto___14606,event_name,seq__14565__$1,temp__4657__auto__){
return (function() {
var rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__10073__auto__ = null;
var rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__10073__auto____0 = (function (){
var statearr_14591 = [null,null,null,null,null,null,null];
(statearr_14591[(0)] = rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__10073__auto__);

(statearr_14591[(1)] = (1));

return statearr_14591;
});
var rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__10073__auto____1 = (function (state_14586){
while(true){
var ret_value__10074__auto__ = (function (){try{while(true){
var result__10075__auto__ = switch__10072__auto__(state_14586);
if(cljs.core.keyword_identical_QMARK_(result__10075__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10075__auto__;
}
break;
}
}catch (e14592){if((e14592 instanceof Object)){
var ex__10076__auto__ = e14592;
var statearr_14593_14607 = state_14586;
(statearr_14593_14607[(5)] = ex__10076__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14586);

return cljs.core.cst$kw$recur;
} else {
throw e14592;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10074__auto__,cljs.core.cst$kw$recur)){
var G__14608 = state_14586;
state_14586 = G__14608;
continue;
} else {
return ret_value__10074__auto__;
}
break;
}
});
rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__10073__auto__ = function(state_14586){
switch(arguments.length){
case 0:
return rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__10073__auto____0.call(this);
case 1:
return rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__10073__auto____1.call(this,state_14586);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__10073__auto__.cljs$core$IFn$_invoke$arity$0 = rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__10073__auto____0;
rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__10073__auto__.cljs$core$IFn$_invoke$arity$1 = rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__10073__auto____1;
return rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__10073__auto__;
})()
;})(seq__14565,chunk__14566,count__14567,i__14568,switch__10072__auto__,c__10139__auto___14606,event_name,seq__14565__$1,temp__4657__auto__))
})();
var state__10141__auto__ = (function (){var statearr_14594 = (f__10140__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10140__auto__.cljs$core$IFn$_invoke$arity$0() : f__10140__auto__.call(null));
(statearr_14594[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10139__auto___14606);

return statearr_14594;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10141__auto__);
});})(seq__14565,chunk__14566,count__14567,i__14568,c__10139__auto___14606,event_name,seq__14565__$1,temp__4657__auto__))
);


return false;
});})(seq__14565,chunk__14566,count__14567,i__14568,event_name,seq__14565__$1,temp__4657__auto__))
);

var G__14609 = cljs.core.next(seq__14565__$1);
var G__14610 = null;
var G__14611 = (0);
var G__14612 = (0);
seq__14565 = G__14609;
chunk__14566 = G__14610;
count__14567 = G__14611;
i__14568 = G__14612;
continue;
}
} else {
return null;
}
}
break;
}
});
