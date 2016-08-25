// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('rerenderer.platform.browser.events');
goog.require('cljs.core');
goog.require('cljs.core.async');
/**
 * Translate js event to local representation.
 */
rerenderer.platform.browser.events.translate_event = (function rerenderer$platform$browser$events$translate_event(event,data){
var pred__19132 = cljs.core._EQ_;
var expr__19133 = event;
if(cljs.core.truth_((pred__19132.cljs$core$IFn$_invoke$arity$2 ? pred__19132.cljs$core$IFn$_invoke$arity$2("click",expr__19133) : pred__19132.call(null,"click",expr__19133)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$click,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,data.clientX,cljs.core.cst$kw$y,data.clientY], null)], null);
} else {
if(cljs.core.truth_((pred__19132.cljs$core$IFn$_invoke$arity$2 ? pred__19132.cljs$core$IFn$_invoke$arity$2("keydown",expr__19133) : pred__19132.call(null,"keydown",expr__19133)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$keydown,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keycode,data.keyCode], null)], null);
} else {
if(cljs.core.truth_((pred__19132.cljs$core$IFn$_invoke$arity$2 ? pred__19132.cljs$core$IFn$_invoke$arity$2("keyup",expr__19133) : pred__19132.call(null,"keyup",expr__19133)))){
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
var seq__19165 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["click","keydown","keyup"], null));
var chunk__19166 = null;
var count__19167 = (0);
var i__19168 = (0);
while(true){
if((i__19168 < count__19167)){
var event_name = chunk__19166.cljs$core$IIndexed$_nth$arity$2(null,i__19168);
canvas.addEventListener(event_name,((function (seq__19165,chunk__19166,count__19167,i__19168,event_name){
return (function (event){
event.preventDefault();

var c__10128__auto___19195 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__19165,chunk__19166,count__19167,i__19168,c__10128__auto___19195,event_name){
return (function (){
var f__10129__auto__ = (function (){var switch__10061__auto__ = ((function (seq__19165,chunk__19166,count__19167,i__19168,c__10128__auto___19195,event_name){
return (function (state_19173){
var state_val_19174 = (state_19173[(1)]);
if((state_val_19174 === (1))){
var inst_19169 = rerenderer.platform.browser.events.translate_event(event_name,event);
var state_19173__$1 = state_19173;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19173__$1,(2),ch,inst_19169);
} else {
if((state_val_19174 === (2))){
var inst_19171 = (state_19173[(2)]);
var state_19173__$1 = state_19173;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19173__$1,inst_19171);
} else {
return null;
}
}
});})(seq__19165,chunk__19166,count__19167,i__19168,c__10128__auto___19195,event_name))
;
return ((function (seq__19165,chunk__19166,count__19167,i__19168,switch__10061__auto__,c__10128__auto___19195,event_name){
return (function() {
var rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__10062__auto__ = null;
var rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__10062__auto____0 = (function (){
var statearr_19178 = [null,null,null,null,null,null,null];
(statearr_19178[(0)] = rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__10062__auto__);

(statearr_19178[(1)] = (1));

return statearr_19178;
});
var rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__10062__auto____1 = (function (state_19173){
while(true){
var ret_value__10063__auto__ = (function (){try{while(true){
var result__10064__auto__ = switch__10061__auto__(state_19173);
if(cljs.core.keyword_identical_QMARK_(result__10064__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10064__auto__;
}
break;
}
}catch (e19179){if((e19179 instanceof Object)){
var ex__10065__auto__ = e19179;
var statearr_19180_19196 = state_19173;
(statearr_19180_19196[(5)] = ex__10065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19173);

return cljs.core.cst$kw$recur;
} else {
throw e19179;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10063__auto__,cljs.core.cst$kw$recur)){
var G__19197 = state_19173;
state_19173 = G__19197;
continue;
} else {
return ret_value__10063__auto__;
}
break;
}
});
rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__10062__auto__ = function(state_19173){
switch(arguments.length){
case 0:
return rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__10062__auto____0.call(this);
case 1:
return rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__10062__auto____1.call(this,state_19173);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__10062__auto__.cljs$core$IFn$_invoke$arity$0 = rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__10062__auto____0;
rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__10062__auto__.cljs$core$IFn$_invoke$arity$1 = rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__10062__auto____1;
return rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__10062__auto__;
})()
;})(seq__19165,chunk__19166,count__19167,i__19168,switch__10061__auto__,c__10128__auto___19195,event_name))
})();
var state__10130__auto__ = (function (){var statearr_19181 = (f__10129__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10129__auto__.cljs$core$IFn$_invoke$arity$0() : f__10129__auto__.call(null));
(statearr_19181[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10128__auto___19195);

return statearr_19181;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10130__auto__);
});})(seq__19165,chunk__19166,count__19167,i__19168,c__10128__auto___19195,event_name))
);


return false;
});})(seq__19165,chunk__19166,count__19167,i__19168,event_name))
);

var G__19198 = seq__19165;
var G__19199 = chunk__19166;
var G__19200 = count__19167;
var G__19201 = (i__19168 + (1));
seq__19165 = G__19198;
chunk__19166 = G__19199;
count__19167 = G__19200;
i__19168 = G__19201;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__19165);
if(temp__4657__auto__){
var seq__19165__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19165__$1)){
var c__6959__auto__ = cljs.core.chunk_first(seq__19165__$1);
var G__19202 = cljs.core.chunk_rest(seq__19165__$1);
var G__19203 = c__6959__auto__;
var G__19204 = cljs.core.count(c__6959__auto__);
var G__19205 = (0);
seq__19165 = G__19202;
chunk__19166 = G__19203;
count__19167 = G__19204;
i__19168 = G__19205;
continue;
} else {
var event_name = cljs.core.first(seq__19165__$1);
canvas.addEventListener(event_name,((function (seq__19165,chunk__19166,count__19167,i__19168,event_name,seq__19165__$1,temp__4657__auto__){
return (function (event){
event.preventDefault();

var c__10128__auto___19206 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__19165,chunk__19166,count__19167,i__19168,c__10128__auto___19206,event_name,seq__19165__$1,temp__4657__auto__){
return (function (){
var f__10129__auto__ = (function (){var switch__10061__auto__ = ((function (seq__19165,chunk__19166,count__19167,i__19168,c__10128__auto___19206,event_name,seq__19165__$1,temp__4657__auto__){
return (function (state_19186){
var state_val_19187 = (state_19186[(1)]);
if((state_val_19187 === (1))){
var inst_19182 = rerenderer.platform.browser.events.translate_event(event_name,event);
var state_19186__$1 = state_19186;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19186__$1,(2),ch,inst_19182);
} else {
if((state_val_19187 === (2))){
var inst_19184 = (state_19186[(2)]);
var state_19186__$1 = state_19186;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19186__$1,inst_19184);
} else {
return null;
}
}
});})(seq__19165,chunk__19166,count__19167,i__19168,c__10128__auto___19206,event_name,seq__19165__$1,temp__4657__auto__))
;
return ((function (seq__19165,chunk__19166,count__19167,i__19168,switch__10061__auto__,c__10128__auto___19206,event_name,seq__19165__$1,temp__4657__auto__){
return (function() {
var rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__10062__auto__ = null;
var rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__10062__auto____0 = (function (){
var statearr_19191 = [null,null,null,null,null,null,null];
(statearr_19191[(0)] = rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__10062__auto__);

(statearr_19191[(1)] = (1));

return statearr_19191;
});
var rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__10062__auto____1 = (function (state_19186){
while(true){
var ret_value__10063__auto__ = (function (){try{while(true){
var result__10064__auto__ = switch__10061__auto__(state_19186);
if(cljs.core.keyword_identical_QMARK_(result__10064__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10064__auto__;
}
break;
}
}catch (e19192){if((e19192 instanceof Object)){
var ex__10065__auto__ = e19192;
var statearr_19193_19207 = state_19186;
(statearr_19193_19207[(5)] = ex__10065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19186);

return cljs.core.cst$kw$recur;
} else {
throw e19192;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10063__auto__,cljs.core.cst$kw$recur)){
var G__19208 = state_19186;
state_19186 = G__19208;
continue;
} else {
return ret_value__10063__auto__;
}
break;
}
});
rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__10062__auto__ = function(state_19186){
switch(arguments.length){
case 0:
return rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__10062__auto____0.call(this);
case 1:
return rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__10062__auto____1.call(this,state_19186);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__10062__auto__.cljs$core$IFn$_invoke$arity$0 = rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__10062__auto____0;
rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__10062__auto__.cljs$core$IFn$_invoke$arity$1 = rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__10062__auto____1;
return rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__10062__auto__;
})()
;})(seq__19165,chunk__19166,count__19167,i__19168,switch__10061__auto__,c__10128__auto___19206,event_name,seq__19165__$1,temp__4657__auto__))
})();
var state__10130__auto__ = (function (){var statearr_19194 = (f__10129__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10129__auto__.cljs$core$IFn$_invoke$arity$0() : f__10129__auto__.call(null));
(statearr_19194[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10128__auto___19206);

return statearr_19194;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10130__auto__);
});})(seq__19165,chunk__19166,count__19167,i__19168,c__10128__auto___19206,event_name,seq__19165__$1,temp__4657__auto__))
);


return false;
});})(seq__19165,chunk__19166,count__19167,i__19168,event_name,seq__19165__$1,temp__4657__auto__))
);

var G__19209 = cljs.core.next(seq__19165__$1);
var G__19210 = null;
var G__19211 = (0);
var G__19212 = (0);
seq__19165 = G__19209;
chunk__19166 = G__19210;
count__19167 = G__19211;
i__19168 = G__19212;
continue;
}
} else {
return null;
}
}
break;
}
});
