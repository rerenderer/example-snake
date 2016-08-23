// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('rerenderer.platform.android.events');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('rerenderer.platform.android.bus');
/**
 * Translates event from intermediate representation.
 */
rerenderer.platform.android.events.translate_event = (function rerenderer$platform$android$events$translate_event(event){
var pred__16013 = cljs.core._EQ_;
var expr__16014 = cljs.core.cst$kw$event.cljs$core$IFn$_invoke$arity$1(event);
if(cljs.core.truth_((pred__16013.cljs$core$IFn$_invoke$arity$2 ? pred__16013.cljs$core$IFn$_invoke$arity$2("click",expr__16014) : pred__16013.call(null,"click",expr__16014)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$click,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(event),cljs.core.cst$kw$y,cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(event)], null)], null);
} else {
if(cljs.core.truth_((pred__16013.cljs$core$IFn$_invoke$arity$2 ? pred__16013.cljs$core$IFn$_invoke$arity$2("keyup",expr__16014) : pred__16013.call(null,"keyup",expr__16014)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$keyup,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keycode,cljs.core.cst$kw$keycode.cljs$core$IFn$_invoke$arity$1(event)], null)], null);
} else {
if(cljs.core.truth_((pred__16013.cljs$core$IFn$_invoke$arity$2 ? pred__16013.cljs$core$IFn$_invoke$arity$2("keydown",expr__16014) : pred__16013.call(null,"keydown",expr__16014)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$keydown,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keycode,cljs.core.cst$kw$keycode.cljs$core$IFn$_invoke$arity$1(event)], null)], null);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__16014)].join('')));
}
}
}
});
/**
 * Binds all event to channel.
 */
rerenderer.platform.android.events.bind_event_BANG_ = (function rerenderer$platform$android$events$bind_event_BANG_(ch){
return rerenderer.platform.android.bus.on_event_BANG_((function (p1__16016_SHARP_){
var c__13209__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13209__auto__){
return (function (){
var f__13210__auto__ = (function (){var switch__13095__auto__ = ((function (c__13209__auto__){
return (function (state_16034){
var state_val_16035 = (state_16034[(1)]);
if((state_val_16035 === (1))){
var inst_16030 = rerenderer.platform.android.events.translate_event(p1__16016_SHARP_);
var state_16034__$1 = state_16034;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16034__$1,(2),ch,inst_16030);
} else {
if((state_val_16035 === (2))){
var inst_16032 = (state_16034[(2)]);
var state_16034__$1 = state_16034;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16034__$1,inst_16032);
} else {
return null;
}
}
});})(c__13209__auto__))
;
return ((function (switch__13095__auto__,c__13209__auto__){
return (function() {
var rerenderer$platform$android$events$bind_event_BANG__$_state_machine__13096__auto__ = null;
var rerenderer$platform$android$events$bind_event_BANG__$_state_machine__13096__auto____0 = (function (){
var statearr_16039 = [null,null,null,null,null,null,null];
(statearr_16039[(0)] = rerenderer$platform$android$events$bind_event_BANG__$_state_machine__13096__auto__);

(statearr_16039[(1)] = (1));

return statearr_16039;
});
var rerenderer$platform$android$events$bind_event_BANG__$_state_machine__13096__auto____1 = (function (state_16034){
while(true){
var ret_value__13097__auto__ = (function (){try{while(true){
var result__13098__auto__ = switch__13095__auto__(state_16034);
if(cljs.core.keyword_identical_QMARK_(result__13098__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13098__auto__;
}
break;
}
}catch (e16040){if((e16040 instanceof Object)){
var ex__13099__auto__ = e16040;
var statearr_16041_16043 = state_16034;
(statearr_16041_16043[(5)] = ex__13099__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16034);

return cljs.core.cst$kw$recur;
} else {
throw e16040;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13097__auto__,cljs.core.cst$kw$recur)){
var G__16044 = state_16034;
state_16034 = G__16044;
continue;
} else {
return ret_value__13097__auto__;
}
break;
}
});
rerenderer$platform$android$events$bind_event_BANG__$_state_machine__13096__auto__ = function(state_16034){
switch(arguments.length){
case 0:
return rerenderer$platform$android$events$bind_event_BANG__$_state_machine__13096__auto____0.call(this);
case 1:
return rerenderer$platform$android$events$bind_event_BANG__$_state_machine__13096__auto____1.call(this,state_16034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rerenderer$platform$android$events$bind_event_BANG__$_state_machine__13096__auto__.cljs$core$IFn$_invoke$arity$0 = rerenderer$platform$android$events$bind_event_BANG__$_state_machine__13096__auto____0;
rerenderer$platform$android$events$bind_event_BANG__$_state_machine__13096__auto__.cljs$core$IFn$_invoke$arity$1 = rerenderer$platform$android$events$bind_event_BANG__$_state_machine__13096__auto____1;
return rerenderer$platform$android$events$bind_event_BANG__$_state_machine__13096__auto__;
})()
;})(switch__13095__auto__,c__13209__auto__))
})();
var state__13211__auto__ = (function (){var statearr_16042 = (f__13210__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13210__auto__.cljs$core$IFn$_invoke$arity$0() : f__13210__auto__.call(null));
(statearr_16042[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13209__auto__);

return statearr_16042;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13211__auto__);
});})(c__13209__auto__))
);

return c__13209__auto__;
}));
});
