// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('rerenderer.platform.android.events');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('rerenderer.platform.android.bus');
/**
 * Translates event from intermediate representation.
 */
rerenderer.platform.android.events.translate_event = (function rerenderer$platform$android$events$translate_event(event){
var pred__12481 = cljs.core._EQ_;
var expr__12482 = cljs.core.cst$kw$event.cljs$core$IFn$_invoke$arity$1(event);
if(cljs.core.truth_((pred__12481.cljs$core$IFn$_invoke$arity$2 ? pred__12481.cljs$core$IFn$_invoke$arity$2("click",expr__12482) : pred__12481.call(null,"click",expr__12482)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$click,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(event),cljs.core.cst$kw$y,cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(event)], null)], null);
} else {
if(cljs.core.truth_((pred__12481.cljs$core$IFn$_invoke$arity$2 ? pred__12481.cljs$core$IFn$_invoke$arity$2("keyup",expr__12482) : pred__12481.call(null,"keyup",expr__12482)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$keyup,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keycode,cljs.core.cst$kw$keycode.cljs$core$IFn$_invoke$arity$1(event)], null)], null);
} else {
if(cljs.core.truth_((pred__12481.cljs$core$IFn$_invoke$arity$2 ? pred__12481.cljs$core$IFn$_invoke$arity$2("keydown",expr__12482) : pred__12481.call(null,"keydown",expr__12482)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$keydown,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keycode,cljs.core.cst$kw$keycode.cljs$core$IFn$_invoke$arity$1(event)], null)], null);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__12482)].join('')));
}
}
}
});
/**
 * Binds all event to channel.
 */
rerenderer.platform.android.events.bind_event_BANG_ = (function rerenderer$platform$android$events$bind_event_BANG_(ch){
return rerenderer.platform.android.bus.on_event_BANG_((function (p1__12484_SHARP_){
var c__10184__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10184__auto__){
return (function (){
var f__10185__auto__ = (function (){var switch__10117__auto__ = ((function (c__10184__auto__){
return (function (state_12502){
var state_val_12503 = (state_12502[(1)]);
if((state_val_12503 === (1))){
var inst_12498 = rerenderer.platform.android.events.translate_event(p1__12484_SHARP_);
var state_12502__$1 = state_12502;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12502__$1,(2),ch,inst_12498);
} else {
if((state_val_12503 === (2))){
var inst_12500 = (state_12502[(2)]);
var state_12502__$1 = state_12502;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12502__$1,inst_12500);
} else {
return null;
}
}
});})(c__10184__auto__))
;
return ((function (switch__10117__auto__,c__10184__auto__){
return (function() {
var rerenderer$platform$android$events$bind_event_BANG__$_state_machine__10118__auto__ = null;
var rerenderer$platform$android$events$bind_event_BANG__$_state_machine__10118__auto____0 = (function (){
var statearr_12507 = [null,null,null,null,null,null,null];
(statearr_12507[(0)] = rerenderer$platform$android$events$bind_event_BANG__$_state_machine__10118__auto__);

(statearr_12507[(1)] = (1));

return statearr_12507;
});
var rerenderer$platform$android$events$bind_event_BANG__$_state_machine__10118__auto____1 = (function (state_12502){
while(true){
var ret_value__10119__auto__ = (function (){try{while(true){
var result__10120__auto__ = switch__10117__auto__(state_12502);
if(cljs.core.keyword_identical_QMARK_(result__10120__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10120__auto__;
}
break;
}
}catch (e12508){if((e12508 instanceof Object)){
var ex__10121__auto__ = e12508;
var statearr_12509_12511 = state_12502;
(statearr_12509_12511[(5)] = ex__10121__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12502);

return cljs.core.cst$kw$recur;
} else {
throw e12508;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10119__auto__,cljs.core.cst$kw$recur)){
var G__12512 = state_12502;
state_12502 = G__12512;
continue;
} else {
return ret_value__10119__auto__;
}
break;
}
});
rerenderer$platform$android$events$bind_event_BANG__$_state_machine__10118__auto__ = function(state_12502){
switch(arguments.length){
case 0:
return rerenderer$platform$android$events$bind_event_BANG__$_state_machine__10118__auto____0.call(this);
case 1:
return rerenderer$platform$android$events$bind_event_BANG__$_state_machine__10118__auto____1.call(this,state_12502);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rerenderer$platform$android$events$bind_event_BANG__$_state_machine__10118__auto__.cljs$core$IFn$_invoke$arity$0 = rerenderer$platform$android$events$bind_event_BANG__$_state_machine__10118__auto____0;
rerenderer$platform$android$events$bind_event_BANG__$_state_machine__10118__auto__.cljs$core$IFn$_invoke$arity$1 = rerenderer$platform$android$events$bind_event_BANG__$_state_machine__10118__auto____1;
return rerenderer$platform$android$events$bind_event_BANG__$_state_machine__10118__auto__;
})()
;})(switch__10117__auto__,c__10184__auto__))
})();
var state__10186__auto__ = (function (){var statearr_12510 = (f__10185__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10185__auto__.cljs$core$IFn$_invoke$arity$0() : f__10185__auto__.call(null));
(statearr_12510[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10184__auto__);

return statearr_12510;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10186__auto__);
});})(c__10184__auto__))
);

return c__10184__auto__;
}));
});
