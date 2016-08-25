// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('rerenderer.platform.android.events');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('rerenderer.platform.android.bus');
/**
 * Translates event from intermediate representation.
 */
rerenderer.platform.android.events.translate_event = (function rerenderer$platform$android$events$translate_event(event){
var pred__12436 = cljs.core._EQ_;
var expr__12437 = cljs.core.cst$kw$event.cljs$core$IFn$_invoke$arity$1(event);
if(cljs.core.truth_((pred__12436.cljs$core$IFn$_invoke$arity$2 ? pred__12436.cljs$core$IFn$_invoke$arity$2("click",expr__12437) : pred__12436.call(null,"click",expr__12437)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$click,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(event),cljs.core.cst$kw$y,cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(event)], null)], null);
} else {
if(cljs.core.truth_((pred__12436.cljs$core$IFn$_invoke$arity$2 ? pred__12436.cljs$core$IFn$_invoke$arity$2("keyup",expr__12437) : pred__12436.call(null,"keyup",expr__12437)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$keyup,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keycode,cljs.core.cst$kw$keycode.cljs$core$IFn$_invoke$arity$1(event)], null)], null);
} else {
if(cljs.core.truth_((pred__12436.cljs$core$IFn$_invoke$arity$2 ? pred__12436.cljs$core$IFn$_invoke$arity$2("keydown",expr__12437) : pred__12436.call(null,"keydown",expr__12437)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$keydown,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keycode,cljs.core.cst$kw$keycode.cljs$core$IFn$_invoke$arity$1(event)], null)], null);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__12437)].join('')));
}
}
}
});
/**
 * Binds all event to channel.
 */
rerenderer.platform.android.events.bind_event_BANG_ = (function rerenderer$platform$android$events$bind_event_BANG_(ch){
return rerenderer.platform.android.bus.on_event_BANG_((function (p1__12439_SHARP_){
var c__10139__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10139__auto__){
return (function (){
var f__10140__auto__ = (function (){var switch__10072__auto__ = ((function (c__10139__auto__){
return (function (state_12457){
var state_val_12458 = (state_12457[(1)]);
if((state_val_12458 === (1))){
var inst_12453 = rerenderer.platform.android.events.translate_event(p1__12439_SHARP_);
var state_12457__$1 = state_12457;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12457__$1,(2),ch,inst_12453);
} else {
if((state_val_12458 === (2))){
var inst_12455 = (state_12457[(2)]);
var state_12457__$1 = state_12457;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12457__$1,inst_12455);
} else {
return null;
}
}
});})(c__10139__auto__))
;
return ((function (switch__10072__auto__,c__10139__auto__){
return (function() {
var rerenderer$platform$android$events$bind_event_BANG__$_state_machine__10073__auto__ = null;
var rerenderer$platform$android$events$bind_event_BANG__$_state_machine__10073__auto____0 = (function (){
var statearr_12462 = [null,null,null,null,null,null,null];
(statearr_12462[(0)] = rerenderer$platform$android$events$bind_event_BANG__$_state_machine__10073__auto__);

(statearr_12462[(1)] = (1));

return statearr_12462;
});
var rerenderer$platform$android$events$bind_event_BANG__$_state_machine__10073__auto____1 = (function (state_12457){
while(true){
var ret_value__10074__auto__ = (function (){try{while(true){
var result__10075__auto__ = switch__10072__auto__(state_12457);
if(cljs.core.keyword_identical_QMARK_(result__10075__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10075__auto__;
}
break;
}
}catch (e12463){if((e12463 instanceof Object)){
var ex__10076__auto__ = e12463;
var statearr_12464_12466 = state_12457;
(statearr_12464_12466[(5)] = ex__10076__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12457);

return cljs.core.cst$kw$recur;
} else {
throw e12463;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10074__auto__,cljs.core.cst$kw$recur)){
var G__12467 = state_12457;
state_12457 = G__12467;
continue;
} else {
return ret_value__10074__auto__;
}
break;
}
});
rerenderer$platform$android$events$bind_event_BANG__$_state_machine__10073__auto__ = function(state_12457){
switch(arguments.length){
case 0:
return rerenderer$platform$android$events$bind_event_BANG__$_state_machine__10073__auto____0.call(this);
case 1:
return rerenderer$platform$android$events$bind_event_BANG__$_state_machine__10073__auto____1.call(this,state_12457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rerenderer$platform$android$events$bind_event_BANG__$_state_machine__10073__auto__.cljs$core$IFn$_invoke$arity$0 = rerenderer$platform$android$events$bind_event_BANG__$_state_machine__10073__auto____0;
rerenderer$platform$android$events$bind_event_BANG__$_state_machine__10073__auto__.cljs$core$IFn$_invoke$arity$1 = rerenderer$platform$android$events$bind_event_BANG__$_state_machine__10073__auto____1;
return rerenderer$platform$android$events$bind_event_BANG__$_state_machine__10073__auto__;
})()
;})(switch__10072__auto__,c__10139__auto__))
})();
var state__10141__auto__ = (function (){var statearr_12465 = (f__10140__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10140__auto__.cljs$core$IFn$_invoke$arity$0() : f__10140__auto__.call(null));
(statearr_12465[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10139__auto__);

return statearr_12465;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10141__auto__);
});})(c__10139__auto__))
);

return c__10139__auto__;
}));
});
