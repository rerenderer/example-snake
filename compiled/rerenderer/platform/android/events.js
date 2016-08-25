// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('rerenderer.platform.android.events');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('rerenderer.platform.android.bus');
/**
 * Translates event from intermediate representation.
 */
rerenderer.platform.android.events.translate_event = (function rerenderer$platform$android$events$translate_event(event){
var pred__19381 = cljs.core._EQ_;
var expr__19382 = cljs.core.cst$kw$event.cljs$core$IFn$_invoke$arity$1(event);
if(cljs.core.truth_((pred__19381.cljs$core$IFn$_invoke$arity$2 ? pred__19381.cljs$core$IFn$_invoke$arity$2("click",expr__19382) : pred__19381.call(null,"click",expr__19382)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$click,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(event),cljs.core.cst$kw$y,cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(event)], null)], null);
} else {
if(cljs.core.truth_((pred__19381.cljs$core$IFn$_invoke$arity$2 ? pred__19381.cljs$core$IFn$_invoke$arity$2("keyup",expr__19382) : pred__19381.call(null,"keyup",expr__19382)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$keyup,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keycode,cljs.core.cst$kw$keycode.cljs$core$IFn$_invoke$arity$1(event)], null)], null);
} else {
if(cljs.core.truth_((pred__19381.cljs$core$IFn$_invoke$arity$2 ? pred__19381.cljs$core$IFn$_invoke$arity$2("keydown",expr__19382) : pred__19381.call(null,"keydown",expr__19382)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$keydown,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keycode,cljs.core.cst$kw$keycode.cljs$core$IFn$_invoke$arity$1(event)], null)], null);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__19382)].join('')));
}
}
}
});
/**
 * Binds all event to channel.
 */
rerenderer.platform.android.events.bind_event_BANG_ = (function rerenderer$platform$android$events$bind_event_BANG_(ch){
return rerenderer.platform.android.bus.on_event_BANG_((function (p1__19384_SHARP_){
var c__10128__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10128__auto__){
return (function (){
var f__10129__auto__ = (function (){var switch__10061__auto__ = ((function (c__10128__auto__){
return (function (state_19402){
var state_val_19403 = (state_19402[(1)]);
if((state_val_19403 === (1))){
var inst_19398 = rerenderer.platform.android.events.translate_event(p1__19384_SHARP_);
var state_19402__$1 = state_19402;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19402__$1,(2),ch,inst_19398);
} else {
if((state_val_19403 === (2))){
var inst_19400 = (state_19402[(2)]);
var state_19402__$1 = state_19402;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19402__$1,inst_19400);
} else {
return null;
}
}
});})(c__10128__auto__))
;
return ((function (switch__10061__auto__,c__10128__auto__){
return (function() {
var rerenderer$platform$android$events$bind_event_BANG__$_state_machine__10062__auto__ = null;
var rerenderer$platform$android$events$bind_event_BANG__$_state_machine__10062__auto____0 = (function (){
var statearr_19407 = [null,null,null,null,null,null,null];
(statearr_19407[(0)] = rerenderer$platform$android$events$bind_event_BANG__$_state_machine__10062__auto__);

(statearr_19407[(1)] = (1));

return statearr_19407;
});
var rerenderer$platform$android$events$bind_event_BANG__$_state_machine__10062__auto____1 = (function (state_19402){
while(true){
var ret_value__10063__auto__ = (function (){try{while(true){
var result__10064__auto__ = switch__10061__auto__(state_19402);
if(cljs.core.keyword_identical_QMARK_(result__10064__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10064__auto__;
}
break;
}
}catch (e19408){if((e19408 instanceof Object)){
var ex__10065__auto__ = e19408;
var statearr_19409_19411 = state_19402;
(statearr_19409_19411[(5)] = ex__10065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19402);

return cljs.core.cst$kw$recur;
} else {
throw e19408;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10063__auto__,cljs.core.cst$kw$recur)){
var G__19412 = state_19402;
state_19402 = G__19412;
continue;
} else {
return ret_value__10063__auto__;
}
break;
}
});
rerenderer$platform$android$events$bind_event_BANG__$_state_machine__10062__auto__ = function(state_19402){
switch(arguments.length){
case 0:
return rerenderer$platform$android$events$bind_event_BANG__$_state_machine__10062__auto____0.call(this);
case 1:
return rerenderer$platform$android$events$bind_event_BANG__$_state_machine__10062__auto____1.call(this,state_19402);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rerenderer$platform$android$events$bind_event_BANG__$_state_machine__10062__auto__.cljs$core$IFn$_invoke$arity$0 = rerenderer$platform$android$events$bind_event_BANG__$_state_machine__10062__auto____0;
rerenderer$platform$android$events$bind_event_BANG__$_state_machine__10062__auto__.cljs$core$IFn$_invoke$arity$1 = rerenderer$platform$android$events$bind_event_BANG__$_state_machine__10062__auto____1;
return rerenderer$platform$android$events$bind_event_BANG__$_state_machine__10062__auto__;
})()
;})(switch__10061__auto__,c__10128__auto__))
})();
var state__10130__auto__ = (function (){var statearr_19410 = (f__10129__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10129__auto__.cljs$core$IFn$_invoke$arity$0() : f__10129__auto__.call(null));
(statearr_19410[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10128__auto__);

return statearr_19410;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10130__auto__);
});})(c__10128__auto__))
);

return c__10128__auto__;
}));
});
