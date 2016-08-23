// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('rerenderer.platform.browser.events');
goog.require('cljs.core');
goog.require('cljs.core.async');
/**
 * Translate js event to local representation.
 */
rerenderer.platform.browser.events.translate_event = (function rerenderer$platform$browser$events$translate_event(event,data){
var pred__16079 = cljs.core._EQ_;
var expr__16080 = event;
if(cljs.core.truth_((pred__16079.cljs$core$IFn$_invoke$arity$2 ? pred__16079.cljs$core$IFn$_invoke$arity$2("click",expr__16080) : pred__16079.call(null,"click",expr__16080)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$click,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,data.clientX,cljs.core.cst$kw$y,data.clientY], null)], null);
} else {
if(cljs.core.truth_((pred__16079.cljs$core$IFn$_invoke$arity$2 ? pred__16079.cljs$core$IFn$_invoke$arity$2("keydown",expr__16080) : pred__16079.call(null,"keydown",expr__16080)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$keydown,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keycode,data.keyCode], null)], null);
} else {
if(cljs.core.truth_((pred__16079.cljs$core$IFn$_invoke$arity$2 ? pred__16079.cljs$core$IFn$_invoke$arity$2("keyup",expr__16080) : pred__16079.call(null,"keyup",expr__16080)))){
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
var seq__16112 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["click","keydown","keyup"], null));
var chunk__16113 = null;
var count__16114 = (0);
var i__16115 = (0);
while(true){
if((i__16115 < count__16114)){
var event_name = chunk__16113.cljs$core$IIndexed$_nth$arity$2(null,i__16115);
canvas.addEventListener(event_name,((function (seq__16112,chunk__16113,count__16114,i__16115,event_name){
return (function (event){
event.preventDefault();

var c__13209__auto___16142 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__16112,chunk__16113,count__16114,i__16115,c__13209__auto___16142,event_name){
return (function (){
var f__13210__auto__ = (function (){var switch__13095__auto__ = ((function (seq__16112,chunk__16113,count__16114,i__16115,c__13209__auto___16142,event_name){
return (function (state_16120){
var state_val_16121 = (state_16120[(1)]);
if((state_val_16121 === (1))){
var inst_16116 = rerenderer.platform.browser.events.translate_event(event_name,event);
var state_16120__$1 = state_16120;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16120__$1,(2),ch,inst_16116);
} else {
if((state_val_16121 === (2))){
var inst_16118 = (state_16120[(2)]);
var state_16120__$1 = state_16120;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16120__$1,inst_16118);
} else {
return null;
}
}
});})(seq__16112,chunk__16113,count__16114,i__16115,c__13209__auto___16142,event_name))
;
return ((function (seq__16112,chunk__16113,count__16114,i__16115,switch__13095__auto__,c__13209__auto___16142,event_name){
return (function() {
var rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__13096__auto__ = null;
var rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__13096__auto____0 = (function (){
var statearr_16125 = [null,null,null,null,null,null,null];
(statearr_16125[(0)] = rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__13096__auto__);

(statearr_16125[(1)] = (1));

return statearr_16125;
});
var rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__13096__auto____1 = (function (state_16120){
while(true){
var ret_value__13097__auto__ = (function (){try{while(true){
var result__13098__auto__ = switch__13095__auto__(state_16120);
if(cljs.core.keyword_identical_QMARK_(result__13098__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13098__auto__;
}
break;
}
}catch (e16126){if((e16126 instanceof Object)){
var ex__13099__auto__ = e16126;
var statearr_16127_16143 = state_16120;
(statearr_16127_16143[(5)] = ex__13099__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16120);

return cljs.core.cst$kw$recur;
} else {
throw e16126;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13097__auto__,cljs.core.cst$kw$recur)){
var G__16144 = state_16120;
state_16120 = G__16144;
continue;
} else {
return ret_value__13097__auto__;
}
break;
}
});
rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__13096__auto__ = function(state_16120){
switch(arguments.length){
case 0:
return rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__13096__auto____0.call(this);
case 1:
return rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__13096__auto____1.call(this,state_16120);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__13096__auto__.cljs$core$IFn$_invoke$arity$0 = rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__13096__auto____0;
rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__13096__auto__.cljs$core$IFn$_invoke$arity$1 = rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__13096__auto____1;
return rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__13096__auto__;
})()
;})(seq__16112,chunk__16113,count__16114,i__16115,switch__13095__auto__,c__13209__auto___16142,event_name))
})();
var state__13211__auto__ = (function (){var statearr_16128 = (f__13210__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13210__auto__.cljs$core$IFn$_invoke$arity$0() : f__13210__auto__.call(null));
(statearr_16128[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13209__auto___16142);

return statearr_16128;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13211__auto__);
});})(seq__16112,chunk__16113,count__16114,i__16115,c__13209__auto___16142,event_name))
);


return false;
});})(seq__16112,chunk__16113,count__16114,i__16115,event_name))
);

var G__16145 = seq__16112;
var G__16146 = chunk__16113;
var G__16147 = count__16114;
var G__16148 = (i__16115 + (1));
seq__16112 = G__16145;
chunk__16113 = G__16146;
count__16114 = G__16147;
i__16115 = G__16148;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__16112);
if(temp__4657__auto__){
var seq__16112__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16112__$1)){
var c__6959__auto__ = cljs.core.chunk_first(seq__16112__$1);
var G__16149 = cljs.core.chunk_rest(seq__16112__$1);
var G__16150 = c__6959__auto__;
var G__16151 = cljs.core.count(c__6959__auto__);
var G__16152 = (0);
seq__16112 = G__16149;
chunk__16113 = G__16150;
count__16114 = G__16151;
i__16115 = G__16152;
continue;
} else {
var event_name = cljs.core.first(seq__16112__$1);
canvas.addEventListener(event_name,((function (seq__16112,chunk__16113,count__16114,i__16115,event_name,seq__16112__$1,temp__4657__auto__){
return (function (event){
event.preventDefault();

var c__13209__auto___16153 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__16112,chunk__16113,count__16114,i__16115,c__13209__auto___16153,event_name,seq__16112__$1,temp__4657__auto__){
return (function (){
var f__13210__auto__ = (function (){var switch__13095__auto__ = ((function (seq__16112,chunk__16113,count__16114,i__16115,c__13209__auto___16153,event_name,seq__16112__$1,temp__4657__auto__){
return (function (state_16133){
var state_val_16134 = (state_16133[(1)]);
if((state_val_16134 === (1))){
var inst_16129 = rerenderer.platform.browser.events.translate_event(event_name,event);
var state_16133__$1 = state_16133;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16133__$1,(2),ch,inst_16129);
} else {
if((state_val_16134 === (2))){
var inst_16131 = (state_16133[(2)]);
var state_16133__$1 = state_16133;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16133__$1,inst_16131);
} else {
return null;
}
}
});})(seq__16112,chunk__16113,count__16114,i__16115,c__13209__auto___16153,event_name,seq__16112__$1,temp__4657__auto__))
;
return ((function (seq__16112,chunk__16113,count__16114,i__16115,switch__13095__auto__,c__13209__auto___16153,event_name,seq__16112__$1,temp__4657__auto__){
return (function() {
var rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__13096__auto__ = null;
var rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__13096__auto____0 = (function (){
var statearr_16138 = [null,null,null,null,null,null,null];
(statearr_16138[(0)] = rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__13096__auto__);

(statearr_16138[(1)] = (1));

return statearr_16138;
});
var rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__13096__auto____1 = (function (state_16133){
while(true){
var ret_value__13097__auto__ = (function (){try{while(true){
var result__13098__auto__ = switch__13095__auto__(state_16133);
if(cljs.core.keyword_identical_QMARK_(result__13098__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13098__auto__;
}
break;
}
}catch (e16139){if((e16139 instanceof Object)){
var ex__13099__auto__ = e16139;
var statearr_16140_16154 = state_16133;
(statearr_16140_16154[(5)] = ex__13099__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16133);

return cljs.core.cst$kw$recur;
} else {
throw e16139;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13097__auto__,cljs.core.cst$kw$recur)){
var G__16155 = state_16133;
state_16133 = G__16155;
continue;
} else {
return ret_value__13097__auto__;
}
break;
}
});
rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__13096__auto__ = function(state_16133){
switch(arguments.length){
case 0:
return rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__13096__auto____0.call(this);
case 1:
return rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__13096__auto____1.call(this,state_16133);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__13096__auto__.cljs$core$IFn$_invoke$arity$0 = rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__13096__auto____0;
rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__13096__auto__.cljs$core$IFn$_invoke$arity$1 = rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__13096__auto____1;
return rerenderer$platform$browser$events$bind_events_BANG__$_state_machine__13096__auto__;
})()
;})(seq__16112,chunk__16113,count__16114,i__16115,switch__13095__auto__,c__13209__auto___16153,event_name,seq__16112__$1,temp__4657__auto__))
})();
var state__13211__auto__ = (function (){var statearr_16141 = (f__13210__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13210__auto__.cljs$core$IFn$_invoke$arity$0() : f__13210__auto__.call(null));
(statearr_16141[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13209__auto___16153);

return statearr_16141;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13211__auto__);
});})(seq__16112,chunk__16113,count__16114,i__16115,c__13209__auto___16153,event_name,seq__16112__$1,temp__4657__auto__))
);


return false;
});})(seq__16112,chunk__16113,count__16114,i__16115,event_name,seq__16112__$1,temp__4657__auto__))
);

var G__16156 = cljs.core.next(seq__16112__$1);
var G__16157 = null;
var G__16158 = (0);
var G__16159 = (0);
seq__16112 = G__16156;
chunk__16113 = G__16157;
count__16114 = G__16158;
i__16115 = G__16159;
continue;
}
} else {
return null;
}
}
break;
}
});
