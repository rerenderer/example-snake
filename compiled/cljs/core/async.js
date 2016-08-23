// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args13254 = [];
var len__7214__auto___13260 = arguments.length;
var i__7215__auto___13261 = (0);
while(true){
if((i__7215__auto___13261 < len__7214__auto___13260)){
args13254.push((arguments[i__7215__auto___13261]));

var G__13262 = (i__7215__auto___13261 + (1));
i__7215__auto___13261 = G__13262;
continue;
} else {
}
break;
}

var G__13256 = args13254.length;
switch (G__13256) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13254.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async13257 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13257 = (function (f,blockable,meta13258){
this.f = f;
this.blockable = blockable;
this.meta13258 = meta13258;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13257.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13259,meta13258__$1){
var self__ = this;
var _13259__$1 = this;
return (new cljs.core.async.t_cljs$core$async13257(self__.f,self__.blockable,meta13258__$1));
});

cljs.core.async.t_cljs$core$async13257.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13259){
var self__ = this;
var _13259__$1 = this;
return self__.meta13258;
});

cljs.core.async.t_cljs$core$async13257.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async13257.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async13257.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async13257.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async13257.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta13258], null);
});

cljs.core.async.t_cljs$core$async13257.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13257.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13257";

cljs.core.async.t_cljs$core$async13257.cljs$lang$ctorPrWriter = (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write(writer__6755__auto__,"cljs.core.async/t_cljs$core$async13257");
});

cljs.core.async.__GT_t_cljs$core$async13257 = (function cljs$core$async$__GT_t_cljs$core$async13257(f__$1,blockable__$1,meta13258){
return (new cljs.core.async.t_cljs$core$async13257(f__$1,blockable__$1,meta13258));
});

}

return (new cljs.core.async.t_cljs$core$async13257(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args13266 = [];
var len__7214__auto___13269 = arguments.length;
var i__7215__auto___13270 = (0);
while(true){
if((i__7215__auto___13270 < len__7214__auto___13269)){
args13266.push((arguments[i__7215__auto___13270]));

var G__13271 = (i__7215__auto___13270 + (1));
i__7215__auto___13270 = G__13271;
continue;
} else {
}
break;
}

var G__13268 = args13266.length;
switch (G__13268) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13266.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$sym$buf_DASH_or_DASH_n], 0)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args13273 = [];
var len__7214__auto___13276 = arguments.length;
var i__7215__auto___13277 = (0);
while(true){
if((i__7215__auto___13277 < len__7214__auto___13276)){
args13273.push((arguments[i__7215__auto___13277]));

var G__13278 = (i__7215__auto___13277 + (1));
i__7215__auto___13277 = G__13278;
continue;
} else {
}
break;
}

var G__13275 = args13273.length;
switch (G__13275) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13273.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args13280 = [];
var len__7214__auto___13283 = arguments.length;
var i__7215__auto___13284 = (0);
while(true){
if((i__7215__auto___13284 < len__7214__auto___13283)){
args13280.push((arguments[i__7215__auto___13284]));

var G__13285 = (i__7215__auto___13284 + (1));
i__7215__auto___13284 = G__13285;
continue;
} else {
}
break;
}

var G__13282 = args13280.length;
switch (G__13282) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13280.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_13287 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_13287) : fn1.call(null,val_13287));
} else {
cljs.core.async.impl.dispatch.run(((function (val_13287,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_13287) : fn1.call(null,val_13287));
});})(val_13287,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args13288 = [];
var len__7214__auto___13291 = arguments.length;
var i__7215__auto___13292 = (0);
while(true){
if((i__7215__auto___13292 < len__7214__auto___13291)){
args13288.push((arguments[i__7215__auto___13292]));

var G__13293 = (i__7215__auto___13292 + (1));
i__7215__auto___13292 = G__13293;
continue;
} else {
}
break;
}

var G__13290 = args13288.length;
switch (G__13290) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13288.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(retb) : cljs.core.deref.call(null,retb));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4655__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__7059__auto___13295 = n;
var x_13296 = (0);
while(true){
if((x_13296 < n__7059__auto___13295)){
(a[x_13296] = (0));

var G__13297 = (x_13296 + (1));
x_13296 = G__13297;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__13298 = (i + (1));
i = G__13298;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true) : cljs.core.atom.call(null,true));
if(typeof cljs.core.async.t_cljs$core$async13302 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13302 = (function (alt_flag,flag,meta13303){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta13303 = meta13303;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13302.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_13304,meta13303__$1){
var self__ = this;
var _13304__$1 = this;
return (new cljs.core.async.t_cljs$core$async13302(self__.alt_flag,self__.flag,meta13303__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async13302.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_13304){
var self__ = this;
var _13304__$1 = this;
return self__.meta13303;
});})(flag))
;

cljs.core.async.t_cljs$core$async13302.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async13302.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.flag) : cljs.core.deref.call(null,self__.flag));
});})(flag))
;

cljs.core.async.t_cljs$core$async13302.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async13302.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.flag,null) : cljs.core.reset_BANG_.call(null,self__.flag,null));

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async13302.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_flag,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$meta13303], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async13302.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13302.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13302";

cljs.core.async.t_cljs$core$async13302.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write(writer__6755__auto__,"cljs.core.async/t_cljs$core$async13302");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async13302 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async13302(alt_flag__$1,flag__$1,meta13303){
return (new cljs.core.async.t_cljs$core$async13302(alt_flag__$1,flag__$1,meta13303));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async13302(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async13308 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13308 = (function (alt_handler,flag,cb,meta13309){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta13309 = meta13309;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13308.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13310,meta13309__$1){
var self__ = this;
var _13310__$1 = this;
return (new cljs.core.async.t_cljs$core$async13308(self__.alt_handler,self__.flag,self__.cb,meta13309__$1));
});

cljs.core.async.t_cljs$core$async13308.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13310){
var self__ = this;
var _13310__$1 = this;
return self__.meta13309;
});

cljs.core.async.t_cljs$core$async13308.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async13308.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async13308.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async13308.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async13308.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_handler,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb], null)))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta13309], null);
});

cljs.core.async.t_cljs$core$async13308.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13308.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13308";

cljs.core.async.t_cljs$core$async13308.cljs$lang$ctorPrWriter = (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write(writer__6755__auto__,"cljs.core.async/t_cljs$core$async13308");
});

cljs.core.async.__GT_t_cljs$core$async13308 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async13308(alt_handler__$1,flag__$1,cb__$1,meta13309){
return (new cljs.core.async.t_cljs$core$async13308(alt_handler__$1,flag__$1,cb__$1,meta13309));
});

}

return (new cljs.core.async.t_cljs$core$async13308(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13311_SHARP_){
var G__13315 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13311_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__13315) : fret.call(null,G__13315));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13312_SHARP_){
var G__13316 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13312_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__13316) : fret.call(null,G__13316));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(vbox) : cljs.core.deref.call(null,vbox)),(function (){var or__6156__auto__ = wport;
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return port;
}
})()], null));
} else {
var G__13317 = (i + (1));
i = G__13317;
continue;
}
} else {
return null;
}
break;
}
})();
var or__6156__auto__ = ret;
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__4657__auto__ = (function (){var and__6144__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__6144__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__6144__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__7221__auto__ = [];
var len__7214__auto___13323 = arguments.length;
var i__7215__auto___13324 = (0);
while(true){
if((i__7215__auto___13324 < len__7214__auto___13323)){
args__7221__auto__.push((arguments[i__7215__auto___13324]));

var G__13325 = (i__7215__auto___13324 + (1));
i__7215__auto___13324 = G__13325;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((1) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7222__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__13320){
var map__13321 = p__13320;
var map__13321__$1 = ((((!((map__13321 == null)))?((((map__13321.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13321.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13321):map__13321);
var opts = map__13321__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq13318){
var G__13319 = cljs.core.first(seq13318);
var seq13318__$1 = cljs.core.next(seq13318);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13319,seq13318__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args13326 = [];
var len__7214__auto___13376 = arguments.length;
var i__7215__auto___13377 = (0);
while(true){
if((i__7215__auto___13377 < len__7214__auto___13376)){
args13326.push((arguments[i__7215__auto___13377]));

var G__13378 = (i__7215__auto___13377 + (1));
i__7215__auto___13377 = G__13378;
continue;
} else {
}
break;
}

var G__13328 = args13326.length;
switch (G__13328) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13326.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__13209__auto___13380 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13209__auto___13380){
return (function (){
var f__13210__auto__ = (function (){var switch__13095__auto__ = ((function (c__13209__auto___13380){
return (function (state_13352){
var state_val_13353 = (state_13352[(1)]);
if((state_val_13353 === (7))){
var inst_13348 = (state_13352[(2)]);
var state_13352__$1 = state_13352;
var statearr_13354_13381 = state_13352__$1;
(statearr_13354_13381[(2)] = inst_13348);

(statearr_13354_13381[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13353 === (1))){
var state_13352__$1 = state_13352;
var statearr_13355_13382 = state_13352__$1;
(statearr_13355_13382[(2)] = null);

(statearr_13355_13382[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13353 === (4))){
var inst_13331 = (state_13352[(7)]);
var inst_13331__$1 = (state_13352[(2)]);
var inst_13332 = (inst_13331__$1 == null);
var state_13352__$1 = (function (){var statearr_13356 = state_13352;
(statearr_13356[(7)] = inst_13331__$1);

return statearr_13356;
})();
if(cljs.core.truth_(inst_13332)){
var statearr_13357_13383 = state_13352__$1;
(statearr_13357_13383[(1)] = (5));

} else {
var statearr_13358_13384 = state_13352__$1;
(statearr_13358_13384[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13353 === (13))){
var state_13352__$1 = state_13352;
var statearr_13359_13385 = state_13352__$1;
(statearr_13359_13385[(2)] = null);

(statearr_13359_13385[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13353 === (6))){
var inst_13331 = (state_13352[(7)]);
var state_13352__$1 = state_13352;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13352__$1,(11),to,inst_13331);
} else {
if((state_val_13353 === (3))){
var inst_13350 = (state_13352[(2)]);
var state_13352__$1 = state_13352;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13352__$1,inst_13350);
} else {
if((state_val_13353 === (12))){
var state_13352__$1 = state_13352;
var statearr_13360_13386 = state_13352__$1;
(statearr_13360_13386[(2)] = null);

(statearr_13360_13386[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13353 === (2))){
var state_13352__$1 = state_13352;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13352__$1,(4),from);
} else {
if((state_val_13353 === (11))){
var inst_13341 = (state_13352[(2)]);
var state_13352__$1 = state_13352;
if(cljs.core.truth_(inst_13341)){
var statearr_13361_13387 = state_13352__$1;
(statearr_13361_13387[(1)] = (12));

} else {
var statearr_13362_13388 = state_13352__$1;
(statearr_13362_13388[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13353 === (9))){
var state_13352__$1 = state_13352;
var statearr_13363_13389 = state_13352__$1;
(statearr_13363_13389[(2)] = null);

(statearr_13363_13389[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13353 === (5))){
var state_13352__$1 = state_13352;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13364_13390 = state_13352__$1;
(statearr_13364_13390[(1)] = (8));

} else {
var statearr_13365_13391 = state_13352__$1;
(statearr_13365_13391[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13353 === (14))){
var inst_13346 = (state_13352[(2)]);
var state_13352__$1 = state_13352;
var statearr_13366_13392 = state_13352__$1;
(statearr_13366_13392[(2)] = inst_13346);

(statearr_13366_13392[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13353 === (10))){
var inst_13338 = (state_13352[(2)]);
var state_13352__$1 = state_13352;
var statearr_13367_13393 = state_13352__$1;
(statearr_13367_13393[(2)] = inst_13338);

(statearr_13367_13393[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13353 === (8))){
var inst_13335 = cljs.core.async.close_BANG_(to);
var state_13352__$1 = state_13352;
var statearr_13368_13394 = state_13352__$1;
(statearr_13368_13394[(2)] = inst_13335);

(statearr_13368_13394[(1)] = (10));


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
});})(c__13209__auto___13380))
;
return ((function (switch__13095__auto__,c__13209__auto___13380){
return (function() {
var cljs$core$async$state_machine__13096__auto__ = null;
var cljs$core$async$state_machine__13096__auto____0 = (function (){
var statearr_13372 = [null,null,null,null,null,null,null,null];
(statearr_13372[(0)] = cljs$core$async$state_machine__13096__auto__);

(statearr_13372[(1)] = (1));

return statearr_13372;
});
var cljs$core$async$state_machine__13096__auto____1 = (function (state_13352){
while(true){
var ret_value__13097__auto__ = (function (){try{while(true){
var result__13098__auto__ = switch__13095__auto__(state_13352);
if(cljs.core.keyword_identical_QMARK_(result__13098__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13098__auto__;
}
break;
}
}catch (e13373){if((e13373 instanceof Object)){
var ex__13099__auto__ = e13373;
var statearr_13374_13395 = state_13352;
(statearr_13374_13395[(5)] = ex__13099__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13352);

return cljs.core.cst$kw$recur;
} else {
throw e13373;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13097__auto__,cljs.core.cst$kw$recur)){
var G__13396 = state_13352;
state_13352 = G__13396;
continue;
} else {
return ret_value__13097__auto__;
}
break;
}
});
cljs$core$async$state_machine__13096__auto__ = function(state_13352){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13096__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13096__auto____1.call(this,state_13352);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13096__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13096__auto____0;
cljs$core$async$state_machine__13096__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13096__auto____1;
return cljs$core$async$state_machine__13096__auto__;
})()
;})(switch__13095__auto__,c__13209__auto___13380))
})();
var state__13211__auto__ = (function (){var statearr_13375 = (f__13210__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13210__auto__.cljs$core$IFn$_invoke$arity$0() : f__13210__auto__.call(null));
(statearr_13375[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13209__auto___13380);

return statearr_13375;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13211__auto__);
});})(c__13209__auto___13380))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$pos_QMARK_,cljs.core.cst$sym$n)], 0)))].join('')));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__13580){
var vec__13581 = p__13580;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13581,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13581,(1),null);
var job = vec__13581;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__13209__auto___13763 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13209__auto___13763,res,vec__13581,v,p,job,jobs,results){
return (function (){
var f__13210__auto__ = (function (){var switch__13095__auto__ = ((function (c__13209__auto___13763,res,vec__13581,v,p,job,jobs,results){
return (function (state_13586){
var state_val_13587 = (state_13586[(1)]);
if((state_val_13587 === (1))){
var state_13586__$1 = state_13586;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13586__$1,(2),res,v);
} else {
if((state_val_13587 === (2))){
var inst_13583 = (state_13586[(2)]);
var inst_13584 = cljs.core.async.close_BANG_(res);
var state_13586__$1 = (function (){var statearr_13588 = state_13586;
(statearr_13588[(7)] = inst_13583);

return statearr_13588;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_13586__$1,inst_13584);
} else {
return null;
}
}
});})(c__13209__auto___13763,res,vec__13581,v,p,job,jobs,results))
;
return ((function (switch__13095__auto__,c__13209__auto___13763,res,vec__13581,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13096__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13096__auto____0 = (function (){
var statearr_13592 = [null,null,null,null,null,null,null,null];
(statearr_13592[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13096__auto__);

(statearr_13592[(1)] = (1));

return statearr_13592;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13096__auto____1 = (function (state_13586){
while(true){
var ret_value__13097__auto__ = (function (){try{while(true){
var result__13098__auto__ = switch__13095__auto__(state_13586);
if(cljs.core.keyword_identical_QMARK_(result__13098__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13098__auto__;
}
break;
}
}catch (e13593){if((e13593 instanceof Object)){
var ex__13099__auto__ = e13593;
var statearr_13594_13764 = state_13586;
(statearr_13594_13764[(5)] = ex__13099__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13586);

return cljs.core.cst$kw$recur;
} else {
throw e13593;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13097__auto__,cljs.core.cst$kw$recur)){
var G__13765 = state_13586;
state_13586 = G__13765;
continue;
} else {
return ret_value__13097__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13096__auto__ = function(state_13586){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13096__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13096__auto____1.call(this,state_13586);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13096__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13096__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13096__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13096__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13096__auto__;
})()
;})(switch__13095__auto__,c__13209__auto___13763,res,vec__13581,v,p,job,jobs,results))
})();
var state__13211__auto__ = (function (){var statearr_13595 = (f__13210__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13210__auto__.cljs$core$IFn$_invoke$arity$0() : f__13210__auto__.call(null));
(statearr_13595[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13209__auto___13763);

return statearr_13595;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13211__auto__);
});})(c__13209__auto___13763,res,vec__13581,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__13596){
var vec__13597 = p__13596;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13597,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13597,(1),null);
var job = vec__13597;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__7059__auto___13766 = n;
var __13767 = (0);
while(true){
if((__13767 < n__7059__auto___13766)){
var G__13598_13768 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__13598_13768) {
case "compute":
var c__13209__auto___13770 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__13767,c__13209__auto___13770,G__13598_13768,n__7059__auto___13766,jobs,results,process,async){
return (function (){
var f__13210__auto__ = (function (){var switch__13095__auto__ = ((function (__13767,c__13209__auto___13770,G__13598_13768,n__7059__auto___13766,jobs,results,process,async){
return (function (state_13611){
var state_val_13612 = (state_13611[(1)]);
if((state_val_13612 === (1))){
var state_13611__$1 = state_13611;
var statearr_13613_13771 = state_13611__$1;
(statearr_13613_13771[(2)] = null);

(statearr_13613_13771[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13612 === (2))){
var state_13611__$1 = state_13611;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13611__$1,(4),jobs);
} else {
if((state_val_13612 === (3))){
var inst_13609 = (state_13611[(2)]);
var state_13611__$1 = state_13611;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13611__$1,inst_13609);
} else {
if((state_val_13612 === (4))){
var inst_13601 = (state_13611[(2)]);
var inst_13602 = process(inst_13601);
var state_13611__$1 = state_13611;
if(cljs.core.truth_(inst_13602)){
var statearr_13614_13772 = state_13611__$1;
(statearr_13614_13772[(1)] = (5));

} else {
var statearr_13615_13773 = state_13611__$1;
(statearr_13615_13773[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13612 === (5))){
var state_13611__$1 = state_13611;
var statearr_13616_13774 = state_13611__$1;
(statearr_13616_13774[(2)] = null);

(statearr_13616_13774[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13612 === (6))){
var state_13611__$1 = state_13611;
var statearr_13617_13775 = state_13611__$1;
(statearr_13617_13775[(2)] = null);

(statearr_13617_13775[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13612 === (7))){
var inst_13607 = (state_13611[(2)]);
var state_13611__$1 = state_13611;
var statearr_13618_13776 = state_13611__$1;
(statearr_13618_13776[(2)] = inst_13607);

(statearr_13618_13776[(1)] = (3));


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
});})(__13767,c__13209__auto___13770,G__13598_13768,n__7059__auto___13766,jobs,results,process,async))
;
return ((function (__13767,switch__13095__auto__,c__13209__auto___13770,G__13598_13768,n__7059__auto___13766,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13096__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13096__auto____0 = (function (){
var statearr_13622 = [null,null,null,null,null,null,null];
(statearr_13622[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13096__auto__);

(statearr_13622[(1)] = (1));

return statearr_13622;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13096__auto____1 = (function (state_13611){
while(true){
var ret_value__13097__auto__ = (function (){try{while(true){
var result__13098__auto__ = switch__13095__auto__(state_13611);
if(cljs.core.keyword_identical_QMARK_(result__13098__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13098__auto__;
}
break;
}
}catch (e13623){if((e13623 instanceof Object)){
var ex__13099__auto__ = e13623;
var statearr_13624_13777 = state_13611;
(statearr_13624_13777[(5)] = ex__13099__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13611);

return cljs.core.cst$kw$recur;
} else {
throw e13623;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13097__auto__,cljs.core.cst$kw$recur)){
var G__13778 = state_13611;
state_13611 = G__13778;
continue;
} else {
return ret_value__13097__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13096__auto__ = function(state_13611){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13096__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13096__auto____1.call(this,state_13611);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13096__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13096__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13096__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13096__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13096__auto__;
})()
;})(__13767,switch__13095__auto__,c__13209__auto___13770,G__13598_13768,n__7059__auto___13766,jobs,results,process,async))
})();
var state__13211__auto__ = (function (){var statearr_13625 = (f__13210__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13210__auto__.cljs$core$IFn$_invoke$arity$0() : f__13210__auto__.call(null));
(statearr_13625[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13209__auto___13770);

return statearr_13625;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13211__auto__);
});})(__13767,c__13209__auto___13770,G__13598_13768,n__7059__auto___13766,jobs,results,process,async))
);


break;
case "async":
var c__13209__auto___13779 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__13767,c__13209__auto___13779,G__13598_13768,n__7059__auto___13766,jobs,results,process,async){
return (function (){
var f__13210__auto__ = (function (){var switch__13095__auto__ = ((function (__13767,c__13209__auto___13779,G__13598_13768,n__7059__auto___13766,jobs,results,process,async){
return (function (state_13638){
var state_val_13639 = (state_13638[(1)]);
if((state_val_13639 === (1))){
var state_13638__$1 = state_13638;
var statearr_13640_13780 = state_13638__$1;
(statearr_13640_13780[(2)] = null);

(statearr_13640_13780[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13639 === (2))){
var state_13638__$1 = state_13638;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13638__$1,(4),jobs);
} else {
if((state_val_13639 === (3))){
var inst_13636 = (state_13638[(2)]);
var state_13638__$1 = state_13638;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13638__$1,inst_13636);
} else {
if((state_val_13639 === (4))){
var inst_13628 = (state_13638[(2)]);
var inst_13629 = async(inst_13628);
var state_13638__$1 = state_13638;
if(cljs.core.truth_(inst_13629)){
var statearr_13641_13781 = state_13638__$1;
(statearr_13641_13781[(1)] = (5));

} else {
var statearr_13642_13782 = state_13638__$1;
(statearr_13642_13782[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13639 === (5))){
var state_13638__$1 = state_13638;
var statearr_13643_13783 = state_13638__$1;
(statearr_13643_13783[(2)] = null);

(statearr_13643_13783[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13639 === (6))){
var state_13638__$1 = state_13638;
var statearr_13644_13784 = state_13638__$1;
(statearr_13644_13784[(2)] = null);

(statearr_13644_13784[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13639 === (7))){
var inst_13634 = (state_13638[(2)]);
var state_13638__$1 = state_13638;
var statearr_13645_13785 = state_13638__$1;
(statearr_13645_13785[(2)] = inst_13634);

(statearr_13645_13785[(1)] = (3));


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
});})(__13767,c__13209__auto___13779,G__13598_13768,n__7059__auto___13766,jobs,results,process,async))
;
return ((function (__13767,switch__13095__auto__,c__13209__auto___13779,G__13598_13768,n__7059__auto___13766,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13096__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13096__auto____0 = (function (){
var statearr_13649 = [null,null,null,null,null,null,null];
(statearr_13649[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13096__auto__);

(statearr_13649[(1)] = (1));

return statearr_13649;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13096__auto____1 = (function (state_13638){
while(true){
var ret_value__13097__auto__ = (function (){try{while(true){
var result__13098__auto__ = switch__13095__auto__(state_13638);
if(cljs.core.keyword_identical_QMARK_(result__13098__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13098__auto__;
}
break;
}
}catch (e13650){if((e13650 instanceof Object)){
var ex__13099__auto__ = e13650;
var statearr_13651_13786 = state_13638;
(statearr_13651_13786[(5)] = ex__13099__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13638);

return cljs.core.cst$kw$recur;
} else {
throw e13650;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13097__auto__,cljs.core.cst$kw$recur)){
var G__13787 = state_13638;
state_13638 = G__13787;
continue;
} else {
return ret_value__13097__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13096__auto__ = function(state_13638){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13096__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13096__auto____1.call(this,state_13638);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13096__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13096__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13096__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13096__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13096__auto__;
})()
;})(__13767,switch__13095__auto__,c__13209__auto___13779,G__13598_13768,n__7059__auto___13766,jobs,results,process,async))
})();
var state__13211__auto__ = (function (){var statearr_13652 = (f__13210__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13210__auto__.cljs$core$IFn$_invoke$arity$0() : f__13210__auto__.call(null));
(statearr_13652[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13209__auto___13779);

return statearr_13652;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13211__auto__);
});})(__13767,c__13209__auto___13779,G__13598_13768,n__7059__auto___13766,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__13788 = (__13767 + (1));
__13767 = G__13788;
continue;
} else {
}
break;
}

var c__13209__auto___13789 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13209__auto___13789,jobs,results,process,async){
return (function (){
var f__13210__auto__ = (function (){var switch__13095__auto__ = ((function (c__13209__auto___13789,jobs,results,process,async){
return (function (state_13674){
var state_val_13675 = (state_13674[(1)]);
if((state_val_13675 === (1))){
var state_13674__$1 = state_13674;
var statearr_13676_13790 = state_13674__$1;
(statearr_13676_13790[(2)] = null);

(statearr_13676_13790[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13675 === (2))){
var state_13674__$1 = state_13674;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13674__$1,(4),from);
} else {
if((state_val_13675 === (3))){
var inst_13672 = (state_13674[(2)]);
var state_13674__$1 = state_13674;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13674__$1,inst_13672);
} else {
if((state_val_13675 === (4))){
var inst_13655 = (state_13674[(7)]);
var inst_13655__$1 = (state_13674[(2)]);
var inst_13656 = (inst_13655__$1 == null);
var state_13674__$1 = (function (){var statearr_13677 = state_13674;
(statearr_13677[(7)] = inst_13655__$1);

return statearr_13677;
})();
if(cljs.core.truth_(inst_13656)){
var statearr_13678_13791 = state_13674__$1;
(statearr_13678_13791[(1)] = (5));

} else {
var statearr_13679_13792 = state_13674__$1;
(statearr_13679_13792[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13675 === (5))){
var inst_13658 = cljs.core.async.close_BANG_(jobs);
var state_13674__$1 = state_13674;
var statearr_13680_13793 = state_13674__$1;
(statearr_13680_13793[(2)] = inst_13658);

(statearr_13680_13793[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13675 === (6))){
var inst_13655 = (state_13674[(7)]);
var inst_13660 = (state_13674[(8)]);
var inst_13660__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_13661 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13662 = [inst_13655,inst_13660__$1];
var inst_13663 = (new cljs.core.PersistentVector(null,2,(5),inst_13661,inst_13662,null));
var state_13674__$1 = (function (){var statearr_13681 = state_13674;
(statearr_13681[(8)] = inst_13660__$1);

return statearr_13681;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13674__$1,(8),jobs,inst_13663);
} else {
if((state_val_13675 === (7))){
var inst_13670 = (state_13674[(2)]);
var state_13674__$1 = state_13674;
var statearr_13682_13794 = state_13674__$1;
(statearr_13682_13794[(2)] = inst_13670);

(statearr_13682_13794[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13675 === (8))){
var inst_13660 = (state_13674[(8)]);
var inst_13665 = (state_13674[(2)]);
var state_13674__$1 = (function (){var statearr_13683 = state_13674;
(statearr_13683[(9)] = inst_13665);

return statearr_13683;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13674__$1,(9),results,inst_13660);
} else {
if((state_val_13675 === (9))){
var inst_13667 = (state_13674[(2)]);
var state_13674__$1 = (function (){var statearr_13684 = state_13674;
(statearr_13684[(10)] = inst_13667);

return statearr_13684;
})();
var statearr_13685_13795 = state_13674__$1;
(statearr_13685_13795[(2)] = null);

(statearr_13685_13795[(1)] = (2));


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
});})(c__13209__auto___13789,jobs,results,process,async))
;
return ((function (switch__13095__auto__,c__13209__auto___13789,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13096__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13096__auto____0 = (function (){
var statearr_13689 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13689[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13096__auto__);

(statearr_13689[(1)] = (1));

return statearr_13689;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13096__auto____1 = (function (state_13674){
while(true){
var ret_value__13097__auto__ = (function (){try{while(true){
var result__13098__auto__ = switch__13095__auto__(state_13674);
if(cljs.core.keyword_identical_QMARK_(result__13098__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13098__auto__;
}
break;
}
}catch (e13690){if((e13690 instanceof Object)){
var ex__13099__auto__ = e13690;
var statearr_13691_13796 = state_13674;
(statearr_13691_13796[(5)] = ex__13099__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13674);

return cljs.core.cst$kw$recur;
} else {
throw e13690;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13097__auto__,cljs.core.cst$kw$recur)){
var G__13797 = state_13674;
state_13674 = G__13797;
continue;
} else {
return ret_value__13097__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13096__auto__ = function(state_13674){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13096__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13096__auto____1.call(this,state_13674);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13096__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13096__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13096__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13096__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13096__auto__;
})()
;})(switch__13095__auto__,c__13209__auto___13789,jobs,results,process,async))
})();
var state__13211__auto__ = (function (){var statearr_13692 = (f__13210__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13210__auto__.cljs$core$IFn$_invoke$arity$0() : f__13210__auto__.call(null));
(statearr_13692[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13209__auto___13789);

return statearr_13692;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13211__auto__);
});})(c__13209__auto___13789,jobs,results,process,async))
);


var c__13209__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13209__auto__,jobs,results,process,async){
return (function (){
var f__13210__auto__ = (function (){var switch__13095__auto__ = ((function (c__13209__auto__,jobs,results,process,async){
return (function (state_13730){
var state_val_13731 = (state_13730[(1)]);
if((state_val_13731 === (7))){
var inst_13726 = (state_13730[(2)]);
var state_13730__$1 = state_13730;
var statearr_13732_13798 = state_13730__$1;
(statearr_13732_13798[(2)] = inst_13726);

(statearr_13732_13798[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13731 === (20))){
var state_13730__$1 = state_13730;
var statearr_13733_13799 = state_13730__$1;
(statearr_13733_13799[(2)] = null);

(statearr_13733_13799[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13731 === (1))){
var state_13730__$1 = state_13730;
var statearr_13734_13800 = state_13730__$1;
(statearr_13734_13800[(2)] = null);

(statearr_13734_13800[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13731 === (4))){
var inst_13695 = (state_13730[(7)]);
var inst_13695__$1 = (state_13730[(2)]);
var inst_13696 = (inst_13695__$1 == null);
var state_13730__$1 = (function (){var statearr_13735 = state_13730;
(statearr_13735[(7)] = inst_13695__$1);

return statearr_13735;
})();
if(cljs.core.truth_(inst_13696)){
var statearr_13736_13801 = state_13730__$1;
(statearr_13736_13801[(1)] = (5));

} else {
var statearr_13737_13802 = state_13730__$1;
(statearr_13737_13802[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13731 === (15))){
var inst_13708 = (state_13730[(8)]);
var state_13730__$1 = state_13730;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13730__$1,(18),to,inst_13708);
} else {
if((state_val_13731 === (21))){
var inst_13721 = (state_13730[(2)]);
var state_13730__$1 = state_13730;
var statearr_13738_13803 = state_13730__$1;
(statearr_13738_13803[(2)] = inst_13721);

(statearr_13738_13803[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13731 === (13))){
var inst_13723 = (state_13730[(2)]);
var state_13730__$1 = (function (){var statearr_13739 = state_13730;
(statearr_13739[(9)] = inst_13723);

return statearr_13739;
})();
var statearr_13740_13804 = state_13730__$1;
(statearr_13740_13804[(2)] = null);

(statearr_13740_13804[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13731 === (6))){
var inst_13695 = (state_13730[(7)]);
var state_13730__$1 = state_13730;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13730__$1,(11),inst_13695);
} else {
if((state_val_13731 === (17))){
var inst_13716 = (state_13730[(2)]);
var state_13730__$1 = state_13730;
if(cljs.core.truth_(inst_13716)){
var statearr_13741_13805 = state_13730__$1;
(statearr_13741_13805[(1)] = (19));

} else {
var statearr_13742_13806 = state_13730__$1;
(statearr_13742_13806[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13731 === (3))){
var inst_13728 = (state_13730[(2)]);
var state_13730__$1 = state_13730;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13730__$1,inst_13728);
} else {
if((state_val_13731 === (12))){
var inst_13705 = (state_13730[(10)]);
var state_13730__$1 = state_13730;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13730__$1,(14),inst_13705);
} else {
if((state_val_13731 === (2))){
var state_13730__$1 = state_13730;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13730__$1,(4),results);
} else {
if((state_val_13731 === (19))){
var state_13730__$1 = state_13730;
var statearr_13743_13807 = state_13730__$1;
(statearr_13743_13807[(2)] = null);

(statearr_13743_13807[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13731 === (11))){
var inst_13705 = (state_13730[(2)]);
var state_13730__$1 = (function (){var statearr_13744 = state_13730;
(statearr_13744[(10)] = inst_13705);

return statearr_13744;
})();
var statearr_13745_13808 = state_13730__$1;
(statearr_13745_13808[(2)] = null);

(statearr_13745_13808[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13731 === (9))){
var state_13730__$1 = state_13730;
var statearr_13746_13809 = state_13730__$1;
(statearr_13746_13809[(2)] = null);

(statearr_13746_13809[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13731 === (5))){
var state_13730__$1 = state_13730;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13747_13810 = state_13730__$1;
(statearr_13747_13810[(1)] = (8));

} else {
var statearr_13748_13811 = state_13730__$1;
(statearr_13748_13811[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13731 === (14))){
var inst_13708 = (state_13730[(8)]);
var inst_13710 = (state_13730[(11)]);
var inst_13708__$1 = (state_13730[(2)]);
var inst_13709 = (inst_13708__$1 == null);
var inst_13710__$1 = cljs.core.not(inst_13709);
var state_13730__$1 = (function (){var statearr_13749 = state_13730;
(statearr_13749[(8)] = inst_13708__$1);

(statearr_13749[(11)] = inst_13710__$1);

return statearr_13749;
})();
if(inst_13710__$1){
var statearr_13750_13812 = state_13730__$1;
(statearr_13750_13812[(1)] = (15));

} else {
var statearr_13751_13813 = state_13730__$1;
(statearr_13751_13813[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13731 === (16))){
var inst_13710 = (state_13730[(11)]);
var state_13730__$1 = state_13730;
var statearr_13752_13814 = state_13730__$1;
(statearr_13752_13814[(2)] = inst_13710);

(statearr_13752_13814[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13731 === (10))){
var inst_13702 = (state_13730[(2)]);
var state_13730__$1 = state_13730;
var statearr_13753_13815 = state_13730__$1;
(statearr_13753_13815[(2)] = inst_13702);

(statearr_13753_13815[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13731 === (18))){
var inst_13713 = (state_13730[(2)]);
var state_13730__$1 = state_13730;
var statearr_13754_13816 = state_13730__$1;
(statearr_13754_13816[(2)] = inst_13713);

(statearr_13754_13816[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13731 === (8))){
var inst_13699 = cljs.core.async.close_BANG_(to);
var state_13730__$1 = state_13730;
var statearr_13755_13817 = state_13730__$1;
(statearr_13755_13817[(2)] = inst_13699);

(statearr_13755_13817[(1)] = (10));


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
});})(c__13209__auto__,jobs,results,process,async))
;
return ((function (switch__13095__auto__,c__13209__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13096__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13096__auto____0 = (function (){
var statearr_13759 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13759[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13096__auto__);

(statearr_13759[(1)] = (1));

return statearr_13759;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13096__auto____1 = (function (state_13730){
while(true){
var ret_value__13097__auto__ = (function (){try{while(true){
var result__13098__auto__ = switch__13095__auto__(state_13730);
if(cljs.core.keyword_identical_QMARK_(result__13098__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13098__auto__;
}
break;
}
}catch (e13760){if((e13760 instanceof Object)){
var ex__13099__auto__ = e13760;
var statearr_13761_13818 = state_13730;
(statearr_13761_13818[(5)] = ex__13099__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13730);

return cljs.core.cst$kw$recur;
} else {
throw e13760;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13097__auto__,cljs.core.cst$kw$recur)){
var G__13819 = state_13730;
state_13730 = G__13819;
continue;
} else {
return ret_value__13097__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13096__auto__ = function(state_13730){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13096__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13096__auto____1.call(this,state_13730);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13096__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13096__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13096__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13096__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13096__auto__;
})()
;})(switch__13095__auto__,c__13209__auto__,jobs,results,process,async))
})();
var state__13211__auto__ = (function (){var statearr_13762 = (f__13210__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13210__auto__.cljs$core$IFn$_invoke$arity$0() : f__13210__auto__.call(null));
(statearr_13762[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13209__auto__);

return statearr_13762;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13211__auto__);
});})(c__13209__auto__,jobs,results,process,async))
);

return c__13209__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args13820 = [];
var len__7214__auto___13823 = arguments.length;
var i__7215__auto___13824 = (0);
while(true){
if((i__7215__auto___13824 < len__7214__auto___13823)){
args13820.push((arguments[i__7215__auto___13824]));

var G__13825 = (i__7215__auto___13824 + (1));
i__7215__auto___13824 = G__13825;
continue;
} else {
}
break;
}

var G__13822 = args13820.length;
switch (G__13822) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13820.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args13827 = [];
var len__7214__auto___13830 = arguments.length;
var i__7215__auto___13831 = (0);
while(true){
if((i__7215__auto___13831 < len__7214__auto___13830)){
args13827.push((arguments[i__7215__auto___13831]));

var G__13832 = (i__7215__auto___13831 + (1));
i__7215__auto___13831 = G__13832;
continue;
} else {
}
break;
}

var G__13829 = args13827.length;
switch (G__13829) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13827.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args13834 = [];
var len__7214__auto___13887 = arguments.length;
var i__7215__auto___13888 = (0);
while(true){
if((i__7215__auto___13888 < len__7214__auto___13887)){
args13834.push((arguments[i__7215__auto___13888]));

var G__13889 = (i__7215__auto___13888 + (1));
i__7215__auto___13888 = G__13889;
continue;
} else {
}
break;
}

var G__13836 = args13834.length;
switch (G__13836) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13834.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__13209__auto___13891 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13209__auto___13891,tc,fc){
return (function (){
var f__13210__auto__ = (function (){var switch__13095__auto__ = ((function (c__13209__auto___13891,tc,fc){
return (function (state_13862){
var state_val_13863 = (state_13862[(1)]);
if((state_val_13863 === (7))){
var inst_13858 = (state_13862[(2)]);
var state_13862__$1 = state_13862;
var statearr_13864_13892 = state_13862__$1;
(statearr_13864_13892[(2)] = inst_13858);

(statearr_13864_13892[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13863 === (1))){
var state_13862__$1 = state_13862;
var statearr_13865_13893 = state_13862__$1;
(statearr_13865_13893[(2)] = null);

(statearr_13865_13893[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13863 === (4))){
var inst_13839 = (state_13862[(7)]);
var inst_13839__$1 = (state_13862[(2)]);
var inst_13840 = (inst_13839__$1 == null);
var state_13862__$1 = (function (){var statearr_13866 = state_13862;
(statearr_13866[(7)] = inst_13839__$1);

return statearr_13866;
})();
if(cljs.core.truth_(inst_13840)){
var statearr_13867_13894 = state_13862__$1;
(statearr_13867_13894[(1)] = (5));

} else {
var statearr_13868_13895 = state_13862__$1;
(statearr_13868_13895[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13863 === (13))){
var state_13862__$1 = state_13862;
var statearr_13869_13896 = state_13862__$1;
(statearr_13869_13896[(2)] = null);

(statearr_13869_13896[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13863 === (6))){
var inst_13839 = (state_13862[(7)]);
var inst_13845 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_13839) : p.call(null,inst_13839));
var state_13862__$1 = state_13862;
if(cljs.core.truth_(inst_13845)){
var statearr_13870_13897 = state_13862__$1;
(statearr_13870_13897[(1)] = (9));

} else {
var statearr_13871_13898 = state_13862__$1;
(statearr_13871_13898[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13863 === (3))){
var inst_13860 = (state_13862[(2)]);
var state_13862__$1 = state_13862;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13862__$1,inst_13860);
} else {
if((state_val_13863 === (12))){
var state_13862__$1 = state_13862;
var statearr_13872_13899 = state_13862__$1;
(statearr_13872_13899[(2)] = null);

(statearr_13872_13899[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13863 === (2))){
var state_13862__$1 = state_13862;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13862__$1,(4),ch);
} else {
if((state_val_13863 === (11))){
var inst_13839 = (state_13862[(7)]);
var inst_13849 = (state_13862[(2)]);
var state_13862__$1 = state_13862;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13862__$1,(8),inst_13849,inst_13839);
} else {
if((state_val_13863 === (9))){
var state_13862__$1 = state_13862;
var statearr_13873_13900 = state_13862__$1;
(statearr_13873_13900[(2)] = tc);

(statearr_13873_13900[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13863 === (5))){
var inst_13842 = cljs.core.async.close_BANG_(tc);
var inst_13843 = cljs.core.async.close_BANG_(fc);
var state_13862__$1 = (function (){var statearr_13874 = state_13862;
(statearr_13874[(8)] = inst_13842);

return statearr_13874;
})();
var statearr_13875_13901 = state_13862__$1;
(statearr_13875_13901[(2)] = inst_13843);

(statearr_13875_13901[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13863 === (14))){
var inst_13856 = (state_13862[(2)]);
var state_13862__$1 = state_13862;
var statearr_13876_13902 = state_13862__$1;
(statearr_13876_13902[(2)] = inst_13856);

(statearr_13876_13902[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13863 === (10))){
var state_13862__$1 = state_13862;
var statearr_13877_13903 = state_13862__$1;
(statearr_13877_13903[(2)] = fc);

(statearr_13877_13903[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13863 === (8))){
var inst_13851 = (state_13862[(2)]);
var state_13862__$1 = state_13862;
if(cljs.core.truth_(inst_13851)){
var statearr_13878_13904 = state_13862__$1;
(statearr_13878_13904[(1)] = (12));

} else {
var statearr_13879_13905 = state_13862__$1;
(statearr_13879_13905[(1)] = (13));

}

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
});})(c__13209__auto___13891,tc,fc))
;
return ((function (switch__13095__auto__,c__13209__auto___13891,tc,fc){
return (function() {
var cljs$core$async$state_machine__13096__auto__ = null;
var cljs$core$async$state_machine__13096__auto____0 = (function (){
var statearr_13883 = [null,null,null,null,null,null,null,null,null];
(statearr_13883[(0)] = cljs$core$async$state_machine__13096__auto__);

(statearr_13883[(1)] = (1));

return statearr_13883;
});
var cljs$core$async$state_machine__13096__auto____1 = (function (state_13862){
while(true){
var ret_value__13097__auto__ = (function (){try{while(true){
var result__13098__auto__ = switch__13095__auto__(state_13862);
if(cljs.core.keyword_identical_QMARK_(result__13098__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13098__auto__;
}
break;
}
}catch (e13884){if((e13884 instanceof Object)){
var ex__13099__auto__ = e13884;
var statearr_13885_13906 = state_13862;
(statearr_13885_13906[(5)] = ex__13099__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13862);

return cljs.core.cst$kw$recur;
} else {
throw e13884;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13097__auto__,cljs.core.cst$kw$recur)){
var G__13907 = state_13862;
state_13862 = G__13907;
continue;
} else {
return ret_value__13097__auto__;
}
break;
}
});
cljs$core$async$state_machine__13096__auto__ = function(state_13862){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13096__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13096__auto____1.call(this,state_13862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13096__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13096__auto____0;
cljs$core$async$state_machine__13096__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13096__auto____1;
return cljs$core$async$state_machine__13096__auto__;
})()
;})(switch__13095__auto__,c__13209__auto___13891,tc,fc))
})();
var state__13211__auto__ = (function (){var statearr_13886 = (f__13210__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13210__auto__.cljs$core$IFn$_invoke$arity$0() : f__13210__auto__.call(null));
(statearr_13886[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13209__auto___13891);

return statearr_13886;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13211__auto__);
});})(c__13209__auto___13891,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__13209__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13209__auto__){
return (function (){
var f__13210__auto__ = (function (){var switch__13095__auto__ = ((function (c__13209__auto__){
return (function (state_13971){
var state_val_13972 = (state_13971[(1)]);
if((state_val_13972 === (7))){
var inst_13967 = (state_13971[(2)]);
var state_13971__$1 = state_13971;
var statearr_13973_13994 = state_13971__$1;
(statearr_13973_13994[(2)] = inst_13967);

(statearr_13973_13994[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13972 === (1))){
var inst_13951 = init;
var state_13971__$1 = (function (){var statearr_13974 = state_13971;
(statearr_13974[(7)] = inst_13951);

return statearr_13974;
})();
var statearr_13975_13995 = state_13971__$1;
(statearr_13975_13995[(2)] = null);

(statearr_13975_13995[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13972 === (4))){
var inst_13954 = (state_13971[(8)]);
var inst_13954__$1 = (state_13971[(2)]);
var inst_13955 = (inst_13954__$1 == null);
var state_13971__$1 = (function (){var statearr_13976 = state_13971;
(statearr_13976[(8)] = inst_13954__$1);

return statearr_13976;
})();
if(cljs.core.truth_(inst_13955)){
var statearr_13977_13996 = state_13971__$1;
(statearr_13977_13996[(1)] = (5));

} else {
var statearr_13978_13997 = state_13971__$1;
(statearr_13978_13997[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13972 === (6))){
var inst_13954 = (state_13971[(8)]);
var inst_13958 = (state_13971[(9)]);
var inst_13951 = (state_13971[(7)]);
var inst_13958__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_13951,inst_13954) : f.call(null,inst_13951,inst_13954));
var inst_13959 = cljs.core.reduced_QMARK_(inst_13958__$1);
var state_13971__$1 = (function (){var statearr_13979 = state_13971;
(statearr_13979[(9)] = inst_13958__$1);

return statearr_13979;
})();
if(inst_13959){
var statearr_13980_13998 = state_13971__$1;
(statearr_13980_13998[(1)] = (8));

} else {
var statearr_13981_13999 = state_13971__$1;
(statearr_13981_13999[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13972 === (3))){
var inst_13969 = (state_13971[(2)]);
var state_13971__$1 = state_13971;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13971__$1,inst_13969);
} else {
if((state_val_13972 === (2))){
var state_13971__$1 = state_13971;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13971__$1,(4),ch);
} else {
if((state_val_13972 === (9))){
var inst_13958 = (state_13971[(9)]);
var inst_13951 = inst_13958;
var state_13971__$1 = (function (){var statearr_13982 = state_13971;
(statearr_13982[(7)] = inst_13951);

return statearr_13982;
})();
var statearr_13983_14000 = state_13971__$1;
(statearr_13983_14000[(2)] = null);

(statearr_13983_14000[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13972 === (5))){
var inst_13951 = (state_13971[(7)]);
var state_13971__$1 = state_13971;
var statearr_13984_14001 = state_13971__$1;
(statearr_13984_14001[(2)] = inst_13951);

(statearr_13984_14001[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13972 === (10))){
var inst_13965 = (state_13971[(2)]);
var state_13971__$1 = state_13971;
var statearr_13985_14002 = state_13971__$1;
(statearr_13985_14002[(2)] = inst_13965);

(statearr_13985_14002[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13972 === (8))){
var inst_13958 = (state_13971[(9)]);
var inst_13961 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(inst_13958) : cljs.core.deref.call(null,inst_13958));
var state_13971__$1 = state_13971;
var statearr_13986_14003 = state_13971__$1;
(statearr_13986_14003[(2)] = inst_13961);

(statearr_13986_14003[(1)] = (10));


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
});})(c__13209__auto__))
;
return ((function (switch__13095__auto__,c__13209__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__13096__auto__ = null;
var cljs$core$async$reduce_$_state_machine__13096__auto____0 = (function (){
var statearr_13990 = [null,null,null,null,null,null,null,null,null,null];
(statearr_13990[(0)] = cljs$core$async$reduce_$_state_machine__13096__auto__);

(statearr_13990[(1)] = (1));

return statearr_13990;
});
var cljs$core$async$reduce_$_state_machine__13096__auto____1 = (function (state_13971){
while(true){
var ret_value__13097__auto__ = (function (){try{while(true){
var result__13098__auto__ = switch__13095__auto__(state_13971);
if(cljs.core.keyword_identical_QMARK_(result__13098__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13098__auto__;
}
break;
}
}catch (e13991){if((e13991 instanceof Object)){
var ex__13099__auto__ = e13991;
var statearr_13992_14004 = state_13971;
(statearr_13992_14004[(5)] = ex__13099__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13971);

return cljs.core.cst$kw$recur;
} else {
throw e13991;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13097__auto__,cljs.core.cst$kw$recur)){
var G__14005 = state_13971;
state_13971 = G__14005;
continue;
} else {
return ret_value__13097__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__13096__auto__ = function(state_13971){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__13096__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__13096__auto____1.call(this,state_13971);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__13096__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__13096__auto____0;
cljs$core$async$reduce_$_state_machine__13096__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__13096__auto____1;
return cljs$core$async$reduce_$_state_machine__13096__auto__;
})()
;})(switch__13095__auto__,c__13209__auto__))
})();
var state__13211__auto__ = (function (){var statearr_13993 = (f__13210__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13210__auto__.cljs$core$IFn$_invoke$arity$0() : f__13210__auto__.call(null));
(statearr_13993[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13209__auto__);

return statearr_13993;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13211__auto__);
});})(c__13209__auto__))
);

return c__13209__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args14006 = [];
var len__7214__auto___14058 = arguments.length;
var i__7215__auto___14059 = (0);
while(true){
if((i__7215__auto___14059 < len__7214__auto___14058)){
args14006.push((arguments[i__7215__auto___14059]));

var G__14060 = (i__7215__auto___14059 + (1));
i__7215__auto___14059 = G__14060;
continue;
} else {
}
break;
}

var G__14008 = args14006.length;
switch (G__14008) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14006.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__13209__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13209__auto__){
return (function (){
var f__13210__auto__ = (function (){var switch__13095__auto__ = ((function (c__13209__auto__){
return (function (state_14033){
var state_val_14034 = (state_14033[(1)]);
if((state_val_14034 === (7))){
var inst_14015 = (state_14033[(2)]);
var state_14033__$1 = state_14033;
var statearr_14035_14062 = state_14033__$1;
(statearr_14035_14062[(2)] = inst_14015);

(statearr_14035_14062[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14034 === (1))){
var inst_14009 = cljs.core.seq(coll);
var inst_14010 = inst_14009;
var state_14033__$1 = (function (){var statearr_14036 = state_14033;
(statearr_14036[(7)] = inst_14010);

return statearr_14036;
})();
var statearr_14037_14063 = state_14033__$1;
(statearr_14037_14063[(2)] = null);

(statearr_14037_14063[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14034 === (4))){
var inst_14010 = (state_14033[(7)]);
var inst_14013 = cljs.core.first(inst_14010);
var state_14033__$1 = state_14033;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14033__$1,(7),ch,inst_14013);
} else {
if((state_val_14034 === (13))){
var inst_14027 = (state_14033[(2)]);
var state_14033__$1 = state_14033;
var statearr_14038_14064 = state_14033__$1;
(statearr_14038_14064[(2)] = inst_14027);

(statearr_14038_14064[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14034 === (6))){
var inst_14018 = (state_14033[(2)]);
var state_14033__$1 = state_14033;
if(cljs.core.truth_(inst_14018)){
var statearr_14039_14065 = state_14033__$1;
(statearr_14039_14065[(1)] = (8));

} else {
var statearr_14040_14066 = state_14033__$1;
(statearr_14040_14066[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14034 === (3))){
var inst_14031 = (state_14033[(2)]);
var state_14033__$1 = state_14033;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14033__$1,inst_14031);
} else {
if((state_val_14034 === (12))){
var state_14033__$1 = state_14033;
var statearr_14041_14067 = state_14033__$1;
(statearr_14041_14067[(2)] = null);

(statearr_14041_14067[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14034 === (2))){
var inst_14010 = (state_14033[(7)]);
var state_14033__$1 = state_14033;
if(cljs.core.truth_(inst_14010)){
var statearr_14042_14068 = state_14033__$1;
(statearr_14042_14068[(1)] = (4));

} else {
var statearr_14043_14069 = state_14033__$1;
(statearr_14043_14069[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14034 === (11))){
var inst_14024 = cljs.core.async.close_BANG_(ch);
var state_14033__$1 = state_14033;
var statearr_14044_14070 = state_14033__$1;
(statearr_14044_14070[(2)] = inst_14024);

(statearr_14044_14070[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14034 === (9))){
var state_14033__$1 = state_14033;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14045_14071 = state_14033__$1;
(statearr_14045_14071[(1)] = (11));

} else {
var statearr_14046_14072 = state_14033__$1;
(statearr_14046_14072[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14034 === (5))){
var inst_14010 = (state_14033[(7)]);
var state_14033__$1 = state_14033;
var statearr_14047_14073 = state_14033__$1;
(statearr_14047_14073[(2)] = inst_14010);

(statearr_14047_14073[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14034 === (10))){
var inst_14029 = (state_14033[(2)]);
var state_14033__$1 = state_14033;
var statearr_14048_14074 = state_14033__$1;
(statearr_14048_14074[(2)] = inst_14029);

(statearr_14048_14074[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14034 === (8))){
var inst_14010 = (state_14033[(7)]);
var inst_14020 = cljs.core.next(inst_14010);
var inst_14010__$1 = inst_14020;
var state_14033__$1 = (function (){var statearr_14049 = state_14033;
(statearr_14049[(7)] = inst_14010__$1);

return statearr_14049;
})();
var statearr_14050_14075 = state_14033__$1;
(statearr_14050_14075[(2)] = null);

(statearr_14050_14075[(1)] = (2));


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
});})(c__13209__auto__))
;
return ((function (switch__13095__auto__,c__13209__auto__){
return (function() {
var cljs$core$async$state_machine__13096__auto__ = null;
var cljs$core$async$state_machine__13096__auto____0 = (function (){
var statearr_14054 = [null,null,null,null,null,null,null,null];
(statearr_14054[(0)] = cljs$core$async$state_machine__13096__auto__);

(statearr_14054[(1)] = (1));

return statearr_14054;
});
var cljs$core$async$state_machine__13096__auto____1 = (function (state_14033){
while(true){
var ret_value__13097__auto__ = (function (){try{while(true){
var result__13098__auto__ = switch__13095__auto__(state_14033);
if(cljs.core.keyword_identical_QMARK_(result__13098__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13098__auto__;
}
break;
}
}catch (e14055){if((e14055 instanceof Object)){
var ex__13099__auto__ = e14055;
var statearr_14056_14076 = state_14033;
(statearr_14056_14076[(5)] = ex__13099__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14033);

return cljs.core.cst$kw$recur;
} else {
throw e14055;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13097__auto__,cljs.core.cst$kw$recur)){
var G__14077 = state_14033;
state_14033 = G__14077;
continue;
} else {
return ret_value__13097__auto__;
}
break;
}
});
cljs$core$async$state_machine__13096__auto__ = function(state_14033){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13096__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13096__auto____1.call(this,state_14033);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13096__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13096__auto____0;
cljs$core$async$state_machine__13096__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13096__auto____1;
return cljs$core$async$state_machine__13096__auto__;
})()
;})(switch__13095__auto__,c__13209__auto__))
})();
var state__13211__auto__ = (function (){var statearr_14057 = (f__13210__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13210__auto__.cljs$core$IFn$_invoke$arity$0() : f__13210__auto__.call(null));
(statearr_14057[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13209__auto__);

return statearr_14057;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13211__auto__);
});})(c__13209__auto__))
);

return c__13209__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__6811__auto__ = (((_ == null))?null:_);
var m__6812__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return (m__6812__auto__.cljs$core$IFn$_invoke$arity$1 ? m__6812__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__6812__auto__.call(null,_));
} else {
var m__6812__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__6812__auto____$1 == null))){
return (m__6812__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__6812__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__6812__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__6811__auto__ = (((m == null))?null:m);
var m__6812__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return (m__6812__auto__.cljs$core$IFn$_invoke$arity$3 ? m__6812__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__6812__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__6812__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__6812__auto____$1 == null))){
return (m__6812__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__6812__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__6812__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__6811__auto__ = (((m == null))?null:m);
var m__6812__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return (m__6812__auto__.cljs$core$IFn$_invoke$arity$2 ? m__6812__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__6812__auto__.call(null,m,ch));
} else {
var m__6812__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__6812__auto____$1 == null))){
return (m__6812__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__6812__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__6812__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__6811__auto__ = (((m == null))?null:m);
var m__6812__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return (m__6812__auto__.cljs$core$IFn$_invoke$arity$1 ? m__6812__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__6812__auto__.call(null,m));
} else {
var m__6812__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__6812__auto____$1 == null))){
return (m__6812__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__6812__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__6812__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = (function (){var G__14302 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14302) : cljs.core.atom.call(null,G__14302));
})();
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async14303 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14303 = (function (mult,ch,cs,meta14304){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta14304 = meta14304;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14303.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_14305,meta14304__$1){
var self__ = this;
var _14305__$1 = this;
return (new cljs.core.async.t_cljs$core$async14303(self__.mult,self__.ch,self__.cs,meta14304__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async14303.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_14305){
var self__ = this;
var _14305__$1 = this;
return self__.meta14304;
});})(cs))
;

cljs.core.async.t_cljs$core$async14303.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async14303.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async14303.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async14303.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async14303.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async14303.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__14306_14526 = self__.cs;
var G__14307_14527 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14306_14526,G__14307_14527) : cljs.core.reset_BANG_.call(null,G__14306_14526,G__14307_14527));

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async14303.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$mult,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta14304], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async14303.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14303.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14303";

cljs.core.async.t_cljs$core$async14303.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write(writer__6755__auto__,"cljs.core.async/t_cljs$core$async14303");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async14303 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async14303(mult__$1,ch__$1,cs__$1,meta14304){
return (new cljs.core.async.t_cljs$core$async14303(mult__$1,ch__$1,cs__$1,meta14304));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async14303(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__13209__auto___14528 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13209__auto___14528,cs,m,dchan,dctr,done){
return (function (){
var f__13210__auto__ = (function (){var switch__13095__auto__ = ((function (c__13209__auto___14528,cs,m,dchan,dctr,done){
return (function (state_14438){
var state_val_14439 = (state_14438[(1)]);
if((state_val_14439 === (7))){
var inst_14434 = (state_14438[(2)]);
var state_14438__$1 = state_14438;
var statearr_14440_14529 = state_14438__$1;
(statearr_14440_14529[(2)] = inst_14434);

(statearr_14440_14529[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14439 === (20))){
var inst_14339 = (state_14438[(7)]);
var inst_14349 = cljs.core.first(inst_14339);
var inst_14350 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14349,(0),null);
var inst_14351 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14349,(1),null);
var state_14438__$1 = (function (){var statearr_14441 = state_14438;
(statearr_14441[(8)] = inst_14350);

return statearr_14441;
})();
if(cljs.core.truth_(inst_14351)){
var statearr_14442_14530 = state_14438__$1;
(statearr_14442_14530[(1)] = (22));

} else {
var statearr_14443_14531 = state_14438__$1;
(statearr_14443_14531[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14439 === (27))){
var inst_14386 = (state_14438[(9)]);
var inst_14310 = (state_14438[(10)]);
var inst_14381 = (state_14438[(11)]);
var inst_14379 = (state_14438[(12)]);
var inst_14386__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_14379,inst_14381);
var inst_14387 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_14386__$1,inst_14310,done);
var state_14438__$1 = (function (){var statearr_14444 = state_14438;
(statearr_14444[(9)] = inst_14386__$1);

return statearr_14444;
})();
if(cljs.core.truth_(inst_14387)){
var statearr_14445_14532 = state_14438__$1;
(statearr_14445_14532[(1)] = (30));

} else {
var statearr_14446_14533 = state_14438__$1;
(statearr_14446_14533[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14439 === (1))){
var state_14438__$1 = state_14438;
var statearr_14447_14534 = state_14438__$1;
(statearr_14447_14534[(2)] = null);

(statearr_14447_14534[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14439 === (24))){
var inst_14339 = (state_14438[(7)]);
var inst_14356 = (state_14438[(2)]);
var inst_14357 = cljs.core.next(inst_14339);
var inst_14319 = inst_14357;
var inst_14320 = null;
var inst_14321 = (0);
var inst_14322 = (0);
var state_14438__$1 = (function (){var statearr_14448 = state_14438;
(statearr_14448[(13)] = inst_14322);

(statearr_14448[(14)] = inst_14320);

(statearr_14448[(15)] = inst_14319);

(statearr_14448[(16)] = inst_14321);

(statearr_14448[(17)] = inst_14356);

return statearr_14448;
})();
var statearr_14449_14535 = state_14438__$1;
(statearr_14449_14535[(2)] = null);

(statearr_14449_14535[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14439 === (39))){
var state_14438__$1 = state_14438;
var statearr_14453_14536 = state_14438__$1;
(statearr_14453_14536[(2)] = null);

(statearr_14453_14536[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14439 === (4))){
var inst_14310 = (state_14438[(10)]);
var inst_14310__$1 = (state_14438[(2)]);
var inst_14311 = (inst_14310__$1 == null);
var state_14438__$1 = (function (){var statearr_14454 = state_14438;
(statearr_14454[(10)] = inst_14310__$1);

return statearr_14454;
})();
if(cljs.core.truth_(inst_14311)){
var statearr_14455_14537 = state_14438__$1;
(statearr_14455_14537[(1)] = (5));

} else {
var statearr_14456_14538 = state_14438__$1;
(statearr_14456_14538[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14439 === (15))){
var inst_14322 = (state_14438[(13)]);
var inst_14320 = (state_14438[(14)]);
var inst_14319 = (state_14438[(15)]);
var inst_14321 = (state_14438[(16)]);
var inst_14335 = (state_14438[(2)]);
var inst_14336 = (inst_14322 + (1));
var tmp14450 = inst_14320;
var tmp14451 = inst_14319;
var tmp14452 = inst_14321;
var inst_14319__$1 = tmp14451;
var inst_14320__$1 = tmp14450;
var inst_14321__$1 = tmp14452;
var inst_14322__$1 = inst_14336;
var state_14438__$1 = (function (){var statearr_14457 = state_14438;
(statearr_14457[(13)] = inst_14322__$1);

(statearr_14457[(14)] = inst_14320__$1);

(statearr_14457[(15)] = inst_14319__$1);

(statearr_14457[(16)] = inst_14321__$1);

(statearr_14457[(18)] = inst_14335);

return statearr_14457;
})();
var statearr_14458_14539 = state_14438__$1;
(statearr_14458_14539[(2)] = null);

(statearr_14458_14539[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14439 === (21))){
var inst_14360 = (state_14438[(2)]);
var state_14438__$1 = state_14438;
var statearr_14462_14540 = state_14438__$1;
(statearr_14462_14540[(2)] = inst_14360);

(statearr_14462_14540[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14439 === (31))){
var inst_14386 = (state_14438[(9)]);
var inst_14390 = done(null);
var inst_14391 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_14386);
var state_14438__$1 = (function (){var statearr_14463 = state_14438;
(statearr_14463[(19)] = inst_14390);

return statearr_14463;
})();
var statearr_14464_14541 = state_14438__$1;
(statearr_14464_14541[(2)] = inst_14391);

(statearr_14464_14541[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14439 === (32))){
var inst_14378 = (state_14438[(20)]);
var inst_14380 = (state_14438[(21)]);
var inst_14381 = (state_14438[(11)]);
var inst_14379 = (state_14438[(12)]);
var inst_14393 = (state_14438[(2)]);
var inst_14394 = (inst_14381 + (1));
var tmp14459 = inst_14378;
var tmp14460 = inst_14380;
var tmp14461 = inst_14379;
var inst_14378__$1 = tmp14459;
var inst_14379__$1 = tmp14461;
var inst_14380__$1 = tmp14460;
var inst_14381__$1 = inst_14394;
var state_14438__$1 = (function (){var statearr_14465 = state_14438;
(statearr_14465[(22)] = inst_14393);

(statearr_14465[(20)] = inst_14378__$1);

(statearr_14465[(21)] = inst_14380__$1);

(statearr_14465[(11)] = inst_14381__$1);

(statearr_14465[(12)] = inst_14379__$1);

return statearr_14465;
})();
var statearr_14466_14542 = state_14438__$1;
(statearr_14466_14542[(2)] = null);

(statearr_14466_14542[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14439 === (40))){
var inst_14406 = (state_14438[(23)]);
var inst_14410 = done(null);
var inst_14411 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_14406);
var state_14438__$1 = (function (){var statearr_14467 = state_14438;
(statearr_14467[(24)] = inst_14410);

return statearr_14467;
})();
var statearr_14468_14543 = state_14438__$1;
(statearr_14468_14543[(2)] = inst_14411);

(statearr_14468_14543[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14439 === (33))){
var inst_14397 = (state_14438[(25)]);
var inst_14399 = cljs.core.chunked_seq_QMARK_(inst_14397);
var state_14438__$1 = state_14438;
if(inst_14399){
var statearr_14469_14544 = state_14438__$1;
(statearr_14469_14544[(1)] = (36));

} else {
var statearr_14470_14545 = state_14438__$1;
(statearr_14470_14545[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14439 === (13))){
var inst_14329 = (state_14438[(26)]);
var inst_14332 = cljs.core.async.close_BANG_(inst_14329);
var state_14438__$1 = state_14438;
var statearr_14471_14546 = state_14438__$1;
(statearr_14471_14546[(2)] = inst_14332);

(statearr_14471_14546[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14439 === (22))){
var inst_14350 = (state_14438[(8)]);
var inst_14353 = cljs.core.async.close_BANG_(inst_14350);
var state_14438__$1 = state_14438;
var statearr_14472_14547 = state_14438__$1;
(statearr_14472_14547[(2)] = inst_14353);

(statearr_14472_14547[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14439 === (36))){
var inst_14397 = (state_14438[(25)]);
var inst_14401 = cljs.core.chunk_first(inst_14397);
var inst_14402 = cljs.core.chunk_rest(inst_14397);
var inst_14403 = cljs.core.count(inst_14401);
var inst_14378 = inst_14402;
var inst_14379 = inst_14401;
var inst_14380 = inst_14403;
var inst_14381 = (0);
var state_14438__$1 = (function (){var statearr_14473 = state_14438;
(statearr_14473[(20)] = inst_14378);

(statearr_14473[(21)] = inst_14380);

(statearr_14473[(11)] = inst_14381);

(statearr_14473[(12)] = inst_14379);

return statearr_14473;
})();
var statearr_14474_14548 = state_14438__$1;
(statearr_14474_14548[(2)] = null);

(statearr_14474_14548[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14439 === (41))){
var inst_14397 = (state_14438[(25)]);
var inst_14413 = (state_14438[(2)]);
var inst_14414 = cljs.core.next(inst_14397);
var inst_14378 = inst_14414;
var inst_14379 = null;
var inst_14380 = (0);
var inst_14381 = (0);
var state_14438__$1 = (function (){var statearr_14475 = state_14438;
(statearr_14475[(27)] = inst_14413);

(statearr_14475[(20)] = inst_14378);

(statearr_14475[(21)] = inst_14380);

(statearr_14475[(11)] = inst_14381);

(statearr_14475[(12)] = inst_14379);

return statearr_14475;
})();
var statearr_14476_14549 = state_14438__$1;
(statearr_14476_14549[(2)] = null);

(statearr_14476_14549[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14439 === (43))){
var state_14438__$1 = state_14438;
var statearr_14477_14550 = state_14438__$1;
(statearr_14477_14550[(2)] = null);

(statearr_14477_14550[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14439 === (29))){
var inst_14422 = (state_14438[(2)]);
var state_14438__$1 = state_14438;
var statearr_14478_14551 = state_14438__$1;
(statearr_14478_14551[(2)] = inst_14422);

(statearr_14478_14551[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14439 === (44))){
var inst_14431 = (state_14438[(2)]);
var state_14438__$1 = (function (){var statearr_14479 = state_14438;
(statearr_14479[(28)] = inst_14431);

return statearr_14479;
})();
var statearr_14480_14552 = state_14438__$1;
(statearr_14480_14552[(2)] = null);

(statearr_14480_14552[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14439 === (6))){
var inst_14370 = (state_14438[(29)]);
var inst_14369 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_14370__$1 = cljs.core.keys(inst_14369);
var inst_14371 = cljs.core.count(inst_14370__$1);
var inst_14372 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,inst_14371) : cljs.core.reset_BANG_.call(null,dctr,inst_14371));
var inst_14377 = cljs.core.seq(inst_14370__$1);
var inst_14378 = inst_14377;
var inst_14379 = null;
var inst_14380 = (0);
var inst_14381 = (0);
var state_14438__$1 = (function (){var statearr_14481 = state_14438;
(statearr_14481[(29)] = inst_14370__$1);

(statearr_14481[(30)] = inst_14372);

(statearr_14481[(20)] = inst_14378);

(statearr_14481[(21)] = inst_14380);

(statearr_14481[(11)] = inst_14381);

(statearr_14481[(12)] = inst_14379);

return statearr_14481;
})();
var statearr_14482_14553 = state_14438__$1;
(statearr_14482_14553[(2)] = null);

(statearr_14482_14553[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14439 === (28))){
var inst_14378 = (state_14438[(20)]);
var inst_14397 = (state_14438[(25)]);
var inst_14397__$1 = cljs.core.seq(inst_14378);
var state_14438__$1 = (function (){var statearr_14483 = state_14438;
(statearr_14483[(25)] = inst_14397__$1);

return statearr_14483;
})();
if(inst_14397__$1){
var statearr_14484_14554 = state_14438__$1;
(statearr_14484_14554[(1)] = (33));

} else {
var statearr_14485_14555 = state_14438__$1;
(statearr_14485_14555[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14439 === (25))){
var inst_14380 = (state_14438[(21)]);
var inst_14381 = (state_14438[(11)]);
var inst_14383 = (inst_14381 < inst_14380);
var inst_14384 = inst_14383;
var state_14438__$1 = state_14438;
if(cljs.core.truth_(inst_14384)){
var statearr_14486_14556 = state_14438__$1;
(statearr_14486_14556[(1)] = (27));

} else {
var statearr_14487_14557 = state_14438__$1;
(statearr_14487_14557[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14439 === (34))){
var state_14438__$1 = state_14438;
var statearr_14488_14558 = state_14438__$1;
(statearr_14488_14558[(2)] = null);

(statearr_14488_14558[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14439 === (17))){
var state_14438__$1 = state_14438;
var statearr_14489_14559 = state_14438__$1;
(statearr_14489_14559[(2)] = null);

(statearr_14489_14559[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14439 === (3))){
var inst_14436 = (state_14438[(2)]);
var state_14438__$1 = state_14438;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14438__$1,inst_14436);
} else {
if((state_val_14439 === (12))){
var inst_14365 = (state_14438[(2)]);
var state_14438__$1 = state_14438;
var statearr_14490_14560 = state_14438__$1;
(statearr_14490_14560[(2)] = inst_14365);

(statearr_14490_14560[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14439 === (2))){
var state_14438__$1 = state_14438;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14438__$1,(4),ch);
} else {
if((state_val_14439 === (23))){
var state_14438__$1 = state_14438;
var statearr_14491_14561 = state_14438__$1;
(statearr_14491_14561[(2)] = null);

(statearr_14491_14561[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14439 === (35))){
var inst_14420 = (state_14438[(2)]);
var state_14438__$1 = state_14438;
var statearr_14492_14562 = state_14438__$1;
(statearr_14492_14562[(2)] = inst_14420);

(statearr_14492_14562[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14439 === (19))){
var inst_14339 = (state_14438[(7)]);
var inst_14343 = cljs.core.chunk_first(inst_14339);
var inst_14344 = cljs.core.chunk_rest(inst_14339);
var inst_14345 = cljs.core.count(inst_14343);
var inst_14319 = inst_14344;
var inst_14320 = inst_14343;
var inst_14321 = inst_14345;
var inst_14322 = (0);
var state_14438__$1 = (function (){var statearr_14493 = state_14438;
(statearr_14493[(13)] = inst_14322);

(statearr_14493[(14)] = inst_14320);

(statearr_14493[(15)] = inst_14319);

(statearr_14493[(16)] = inst_14321);

return statearr_14493;
})();
var statearr_14494_14563 = state_14438__$1;
(statearr_14494_14563[(2)] = null);

(statearr_14494_14563[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14439 === (11))){
var inst_14319 = (state_14438[(15)]);
var inst_14339 = (state_14438[(7)]);
var inst_14339__$1 = cljs.core.seq(inst_14319);
var state_14438__$1 = (function (){var statearr_14495 = state_14438;
(statearr_14495[(7)] = inst_14339__$1);

return statearr_14495;
})();
if(inst_14339__$1){
var statearr_14496_14564 = state_14438__$1;
(statearr_14496_14564[(1)] = (16));

} else {
var statearr_14497_14565 = state_14438__$1;
(statearr_14497_14565[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14439 === (9))){
var inst_14367 = (state_14438[(2)]);
var state_14438__$1 = state_14438;
var statearr_14498_14566 = state_14438__$1;
(statearr_14498_14566[(2)] = inst_14367);

(statearr_14498_14566[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14439 === (5))){
var inst_14317 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_14318 = cljs.core.seq(inst_14317);
var inst_14319 = inst_14318;
var inst_14320 = null;
var inst_14321 = (0);
var inst_14322 = (0);
var state_14438__$1 = (function (){var statearr_14499 = state_14438;
(statearr_14499[(13)] = inst_14322);

(statearr_14499[(14)] = inst_14320);

(statearr_14499[(15)] = inst_14319);

(statearr_14499[(16)] = inst_14321);

return statearr_14499;
})();
var statearr_14500_14567 = state_14438__$1;
(statearr_14500_14567[(2)] = null);

(statearr_14500_14567[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14439 === (14))){
var state_14438__$1 = state_14438;
var statearr_14501_14568 = state_14438__$1;
(statearr_14501_14568[(2)] = null);

(statearr_14501_14568[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14439 === (45))){
var inst_14428 = (state_14438[(2)]);
var state_14438__$1 = state_14438;
var statearr_14502_14569 = state_14438__$1;
(statearr_14502_14569[(2)] = inst_14428);

(statearr_14502_14569[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14439 === (26))){
var inst_14370 = (state_14438[(29)]);
var inst_14424 = (state_14438[(2)]);
var inst_14425 = cljs.core.seq(inst_14370);
var state_14438__$1 = (function (){var statearr_14503 = state_14438;
(statearr_14503[(31)] = inst_14424);

return statearr_14503;
})();
if(inst_14425){
var statearr_14504_14570 = state_14438__$1;
(statearr_14504_14570[(1)] = (42));

} else {
var statearr_14505_14571 = state_14438__$1;
(statearr_14505_14571[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14439 === (16))){
var inst_14339 = (state_14438[(7)]);
var inst_14341 = cljs.core.chunked_seq_QMARK_(inst_14339);
var state_14438__$1 = state_14438;
if(inst_14341){
var statearr_14506_14572 = state_14438__$1;
(statearr_14506_14572[(1)] = (19));

} else {
var statearr_14507_14573 = state_14438__$1;
(statearr_14507_14573[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14439 === (38))){
var inst_14417 = (state_14438[(2)]);
var state_14438__$1 = state_14438;
var statearr_14508_14574 = state_14438__$1;
(statearr_14508_14574[(2)] = inst_14417);

(statearr_14508_14574[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14439 === (30))){
var state_14438__$1 = state_14438;
var statearr_14509_14575 = state_14438__$1;
(statearr_14509_14575[(2)] = null);

(statearr_14509_14575[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14439 === (10))){
var inst_14322 = (state_14438[(13)]);
var inst_14320 = (state_14438[(14)]);
var inst_14328 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_14320,inst_14322);
var inst_14329 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14328,(0),null);
var inst_14330 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14328,(1),null);
var state_14438__$1 = (function (){var statearr_14510 = state_14438;
(statearr_14510[(26)] = inst_14329);

return statearr_14510;
})();
if(cljs.core.truth_(inst_14330)){
var statearr_14511_14576 = state_14438__$1;
(statearr_14511_14576[(1)] = (13));

} else {
var statearr_14512_14577 = state_14438__$1;
(statearr_14512_14577[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14439 === (18))){
var inst_14363 = (state_14438[(2)]);
var state_14438__$1 = state_14438;
var statearr_14513_14578 = state_14438__$1;
(statearr_14513_14578[(2)] = inst_14363);

(statearr_14513_14578[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14439 === (42))){
var state_14438__$1 = state_14438;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14438__$1,(45),dchan);
} else {
if((state_val_14439 === (37))){
var inst_14406 = (state_14438[(23)]);
var inst_14310 = (state_14438[(10)]);
var inst_14397 = (state_14438[(25)]);
var inst_14406__$1 = cljs.core.first(inst_14397);
var inst_14407 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_14406__$1,inst_14310,done);
var state_14438__$1 = (function (){var statearr_14514 = state_14438;
(statearr_14514[(23)] = inst_14406__$1);

return statearr_14514;
})();
if(cljs.core.truth_(inst_14407)){
var statearr_14515_14579 = state_14438__$1;
(statearr_14515_14579[(1)] = (39));

} else {
var statearr_14516_14580 = state_14438__$1;
(statearr_14516_14580[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14439 === (8))){
var inst_14322 = (state_14438[(13)]);
var inst_14321 = (state_14438[(16)]);
var inst_14324 = (inst_14322 < inst_14321);
var inst_14325 = inst_14324;
var state_14438__$1 = state_14438;
if(cljs.core.truth_(inst_14325)){
var statearr_14517_14581 = state_14438__$1;
(statearr_14517_14581[(1)] = (10));

} else {
var statearr_14518_14582 = state_14438__$1;
(statearr_14518_14582[(1)] = (11));

}

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
});})(c__13209__auto___14528,cs,m,dchan,dctr,done))
;
return ((function (switch__13095__auto__,c__13209__auto___14528,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__13096__auto__ = null;
var cljs$core$async$mult_$_state_machine__13096__auto____0 = (function (){
var statearr_14522 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14522[(0)] = cljs$core$async$mult_$_state_machine__13096__auto__);

(statearr_14522[(1)] = (1));

return statearr_14522;
});
var cljs$core$async$mult_$_state_machine__13096__auto____1 = (function (state_14438){
while(true){
var ret_value__13097__auto__ = (function (){try{while(true){
var result__13098__auto__ = switch__13095__auto__(state_14438);
if(cljs.core.keyword_identical_QMARK_(result__13098__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13098__auto__;
}
break;
}
}catch (e14523){if((e14523 instanceof Object)){
var ex__13099__auto__ = e14523;
var statearr_14524_14583 = state_14438;
(statearr_14524_14583[(5)] = ex__13099__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14438);

return cljs.core.cst$kw$recur;
} else {
throw e14523;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13097__auto__,cljs.core.cst$kw$recur)){
var G__14584 = state_14438;
state_14438 = G__14584;
continue;
} else {
return ret_value__13097__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__13096__auto__ = function(state_14438){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__13096__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__13096__auto____1.call(this,state_14438);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__13096__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__13096__auto____0;
cljs$core$async$mult_$_state_machine__13096__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__13096__auto____1;
return cljs$core$async$mult_$_state_machine__13096__auto__;
})()
;})(switch__13095__auto__,c__13209__auto___14528,cs,m,dchan,dctr,done))
})();
var state__13211__auto__ = (function (){var statearr_14525 = (f__13210__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13210__auto__.cljs$core$IFn$_invoke$arity$0() : f__13210__auto__.call(null));
(statearr_14525[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13209__auto___14528);

return statearr_14525;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13211__auto__);
});})(c__13209__auto___14528,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args14585 = [];
var len__7214__auto___14588 = arguments.length;
var i__7215__auto___14589 = (0);
while(true){
if((i__7215__auto___14589 < len__7214__auto___14588)){
args14585.push((arguments[i__7215__auto___14589]));

var G__14590 = (i__7215__auto___14589 + (1));
i__7215__auto___14589 = G__14590;
continue;
} else {
}
break;
}

var G__14587 = args14585.length;
switch (G__14587) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14585.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__6811__auto__ = (((m == null))?null:m);
var m__6812__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return (m__6812__auto__.cljs$core$IFn$_invoke$arity$2 ? m__6812__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__6812__auto__.call(null,m,ch));
} else {
var m__6812__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__6812__auto____$1 == null))){
return (m__6812__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__6812__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__6812__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__6811__auto__ = (((m == null))?null:m);
var m__6812__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return (m__6812__auto__.cljs$core$IFn$_invoke$arity$2 ? m__6812__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__6812__auto__.call(null,m,ch));
} else {
var m__6812__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__6812__auto____$1 == null))){
return (m__6812__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__6812__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__6812__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__6811__auto__ = (((m == null))?null:m);
var m__6812__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return (m__6812__auto__.cljs$core$IFn$_invoke$arity$1 ? m__6812__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__6812__auto__.call(null,m));
} else {
var m__6812__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__6812__auto____$1 == null))){
return (m__6812__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__6812__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__6812__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__6811__auto__ = (((m == null))?null:m);
var m__6812__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return (m__6812__auto__.cljs$core$IFn$_invoke$arity$2 ? m__6812__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__6812__auto__.call(null,m,state_map));
} else {
var m__6812__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__6812__auto____$1 == null))){
return (m__6812__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__6812__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__6812__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__6811__auto__ = (((m == null))?null:m);
var m__6812__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return (m__6812__auto__.cljs$core$IFn$_invoke$arity$2 ? m__6812__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__6812__auto__.call(null,m,mode));
} else {
var m__6812__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__6812__auto____$1 == null))){
return (m__6812__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__6812__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__6812__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__7221__auto__ = [];
var len__7214__auto___14602 = arguments.length;
var i__7215__auto___14603 = (0);
while(true){
if((i__7215__auto___14603 < len__7214__auto___14602)){
args__7221__auto__.push((arguments[i__7215__auto___14603]));

var G__14604 = (i__7215__auto___14603 + (1));
i__7215__auto___14603 = G__14604;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((3) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7222__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__14596){
var map__14597 = p__14596;
var map__14597__$1 = ((((!((map__14597 == null)))?((((map__14597.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14597.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14597):map__14597);
var opts = map__14597__$1;
var statearr_14599_14605 = state;
(statearr_14599_14605[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts(((function (map__14597,map__14597__$1,opts){
return (function (val){
var statearr_14600_14606 = state;
(statearr_14600_14606[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__14597,map__14597__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_14601_14607 = state;
(statearr_14601_14607[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cb) : cljs.core.deref.call(null,cb)));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq14592){
var G__14593 = cljs.core.first(seq14592);
var seq14592__$1 = cljs.core.next(seq14592);
var G__14594 = cljs.core.first(seq14592__$1);
var seq14592__$2 = cljs.core.next(seq14592__$1);
var G__14595 = cljs.core.first(seq14592__$2);
var seq14592__$3 = cljs.core.next(seq14592__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14593,G__14594,G__14595,seq14592__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = (function (){var G__14774 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14774) : cljs.core.atom.call(null,G__14774));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mute) : cljs.core.atom.call(null,cljs.core.cst$kw$mute));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var mode = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(solo_mode) : cljs.core.deref.call(null,solo_mode));
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async14775 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14775 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta14776){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta14776 = meta14776;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14775.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14777,meta14776__$1){
var self__ = this;
var _14777__$1 = this;
return (new cljs.core.async.t_cljs$core$async14775(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta14776__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14775.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14777){
var self__ = this;
var _14777__$1 = this;
return self__.meta14776;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14775.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async14775.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14775.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async14775.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14775.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14775.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__14778_14940 = self__.cs;
var G__14779_14941 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14778_14940,G__14779_14941) : cljs.core.reset_BANG_.call(null,G__14778_14940,G__14779_14941));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14775.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14775.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$mode)], 0)))].join('')));
}

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.solo_mode,mode) : cljs.core.reset_BANG_.call(null,self__.solo_mode,mode));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14775.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$change,cljs.core.with_meta(cljs.core.cst$sym$mix,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out], null))),cljs.core.cst$kw$doc,"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$pick,cljs.core.cst$sym$cs,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$out,cljs.core.cst$sym$changed,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$meta14776], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14775.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14775.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14775";

cljs.core.async.t_cljs$core$async14775.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write(writer__6755__auto__,"cljs.core.async/t_cljs$core$async14775");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async14775 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async14775(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta14776){
return (new cljs.core.async.t_cljs$core$async14775(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta14776));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async14775(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__13209__auto___14942 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13209__auto___14942,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__13210__auto__ = (function (){var switch__13095__auto__ = ((function (c__13209__auto___14942,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_14877){
var state_val_14878 = (state_14877[(1)]);
if((state_val_14878 === (7))){
var inst_14795 = (state_14877[(2)]);
var state_14877__$1 = state_14877;
var statearr_14879_14943 = state_14877__$1;
(statearr_14879_14943[(2)] = inst_14795);

(statearr_14879_14943[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14878 === (20))){
var inst_14807 = (state_14877[(7)]);
var state_14877__$1 = state_14877;
var statearr_14880_14944 = state_14877__$1;
(statearr_14880_14944[(2)] = inst_14807);

(statearr_14880_14944[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14878 === (27))){
var state_14877__$1 = state_14877;
var statearr_14881_14945 = state_14877__$1;
(statearr_14881_14945[(2)] = null);

(statearr_14881_14945[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14878 === (1))){
var inst_14783 = (state_14877[(8)]);
var inst_14783__$1 = calc_state();
var inst_14785 = (inst_14783__$1 == null);
var inst_14786 = cljs.core.not(inst_14785);
var state_14877__$1 = (function (){var statearr_14882 = state_14877;
(statearr_14882[(8)] = inst_14783__$1);

return statearr_14882;
})();
if(inst_14786){
var statearr_14883_14946 = state_14877__$1;
(statearr_14883_14946[(1)] = (2));

} else {
var statearr_14884_14947 = state_14877__$1;
(statearr_14884_14947[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14878 === (24))){
var inst_14830 = (state_14877[(9)]);
var inst_14851 = (state_14877[(10)]);
var inst_14837 = (state_14877[(11)]);
var inst_14851__$1 = (inst_14830.cljs$core$IFn$_invoke$arity$1 ? inst_14830.cljs$core$IFn$_invoke$arity$1(inst_14837) : inst_14830.call(null,inst_14837));
var state_14877__$1 = (function (){var statearr_14885 = state_14877;
(statearr_14885[(10)] = inst_14851__$1);

return statearr_14885;
})();
if(cljs.core.truth_(inst_14851__$1)){
var statearr_14886_14948 = state_14877__$1;
(statearr_14886_14948[(1)] = (29));

} else {
var statearr_14887_14949 = state_14877__$1;
(statearr_14887_14949[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14878 === (4))){
var inst_14798 = (state_14877[(2)]);
var state_14877__$1 = state_14877;
if(cljs.core.truth_(inst_14798)){
var statearr_14888_14950 = state_14877__$1;
(statearr_14888_14950[(1)] = (8));

} else {
var statearr_14889_14951 = state_14877__$1;
(statearr_14889_14951[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14878 === (15))){
var inst_14824 = (state_14877[(2)]);
var state_14877__$1 = state_14877;
if(cljs.core.truth_(inst_14824)){
var statearr_14890_14952 = state_14877__$1;
(statearr_14890_14952[(1)] = (19));

} else {
var statearr_14891_14953 = state_14877__$1;
(statearr_14891_14953[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14878 === (21))){
var inst_14829 = (state_14877[(12)]);
var inst_14829__$1 = (state_14877[(2)]);
var inst_14830 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14829__$1,cljs.core.cst$kw$solos);
var inst_14831 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14829__$1,cljs.core.cst$kw$mutes);
var inst_14832 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14829__$1,cljs.core.cst$kw$reads);
var state_14877__$1 = (function (){var statearr_14892 = state_14877;
(statearr_14892[(13)] = inst_14831);

(statearr_14892[(9)] = inst_14830);

(statearr_14892[(12)] = inst_14829__$1);

return statearr_14892;
})();
return cljs.core.async.ioc_alts_BANG_(state_14877__$1,(22),inst_14832);
} else {
if((state_val_14878 === (31))){
var inst_14859 = (state_14877[(2)]);
var state_14877__$1 = state_14877;
if(cljs.core.truth_(inst_14859)){
var statearr_14893_14954 = state_14877__$1;
(statearr_14893_14954[(1)] = (32));

} else {
var statearr_14894_14955 = state_14877__$1;
(statearr_14894_14955[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14878 === (32))){
var inst_14836 = (state_14877[(14)]);
var state_14877__$1 = state_14877;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14877__$1,(35),out,inst_14836);
} else {
if((state_val_14878 === (33))){
var inst_14829 = (state_14877[(12)]);
var inst_14807 = inst_14829;
var state_14877__$1 = (function (){var statearr_14895 = state_14877;
(statearr_14895[(7)] = inst_14807);

return statearr_14895;
})();
var statearr_14896_14956 = state_14877__$1;
(statearr_14896_14956[(2)] = null);

(statearr_14896_14956[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14878 === (13))){
var inst_14807 = (state_14877[(7)]);
var inst_14814 = inst_14807.cljs$lang$protocol_mask$partition0$;
var inst_14815 = (inst_14814 & (64));
var inst_14816 = inst_14807.cljs$core$ISeq$;
var inst_14817 = (inst_14815) || (inst_14816);
var state_14877__$1 = state_14877;
if(cljs.core.truth_(inst_14817)){
var statearr_14897_14957 = state_14877__$1;
(statearr_14897_14957[(1)] = (16));

} else {
var statearr_14898_14958 = state_14877__$1;
(statearr_14898_14958[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14878 === (22))){
var inst_14836 = (state_14877[(14)]);
var inst_14837 = (state_14877[(11)]);
var inst_14835 = (state_14877[(2)]);
var inst_14836__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14835,(0),null);
var inst_14837__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14835,(1),null);
var inst_14838 = (inst_14836__$1 == null);
var inst_14839 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_14837__$1,change);
var inst_14840 = (inst_14838) || (inst_14839);
var state_14877__$1 = (function (){var statearr_14899 = state_14877;
(statearr_14899[(14)] = inst_14836__$1);

(statearr_14899[(11)] = inst_14837__$1);

return statearr_14899;
})();
if(cljs.core.truth_(inst_14840)){
var statearr_14900_14959 = state_14877__$1;
(statearr_14900_14959[(1)] = (23));

} else {
var statearr_14901_14960 = state_14877__$1;
(statearr_14901_14960[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14878 === (36))){
var inst_14829 = (state_14877[(12)]);
var inst_14807 = inst_14829;
var state_14877__$1 = (function (){var statearr_14902 = state_14877;
(statearr_14902[(7)] = inst_14807);

return statearr_14902;
})();
var statearr_14903_14961 = state_14877__$1;
(statearr_14903_14961[(2)] = null);

(statearr_14903_14961[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14878 === (29))){
var inst_14851 = (state_14877[(10)]);
var state_14877__$1 = state_14877;
var statearr_14904_14962 = state_14877__$1;
(statearr_14904_14962[(2)] = inst_14851);

(statearr_14904_14962[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14878 === (6))){
var state_14877__$1 = state_14877;
var statearr_14905_14963 = state_14877__$1;
(statearr_14905_14963[(2)] = false);

(statearr_14905_14963[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14878 === (28))){
var inst_14847 = (state_14877[(2)]);
var inst_14848 = calc_state();
var inst_14807 = inst_14848;
var state_14877__$1 = (function (){var statearr_14906 = state_14877;
(statearr_14906[(15)] = inst_14847);

(statearr_14906[(7)] = inst_14807);

return statearr_14906;
})();
var statearr_14907_14964 = state_14877__$1;
(statearr_14907_14964[(2)] = null);

(statearr_14907_14964[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14878 === (25))){
var inst_14873 = (state_14877[(2)]);
var state_14877__$1 = state_14877;
var statearr_14908_14965 = state_14877__$1;
(statearr_14908_14965[(2)] = inst_14873);

(statearr_14908_14965[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14878 === (34))){
var inst_14871 = (state_14877[(2)]);
var state_14877__$1 = state_14877;
var statearr_14909_14966 = state_14877__$1;
(statearr_14909_14966[(2)] = inst_14871);

(statearr_14909_14966[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14878 === (17))){
var state_14877__$1 = state_14877;
var statearr_14910_14967 = state_14877__$1;
(statearr_14910_14967[(2)] = false);

(statearr_14910_14967[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14878 === (3))){
var state_14877__$1 = state_14877;
var statearr_14911_14968 = state_14877__$1;
(statearr_14911_14968[(2)] = false);

(statearr_14911_14968[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14878 === (12))){
var inst_14875 = (state_14877[(2)]);
var state_14877__$1 = state_14877;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14877__$1,inst_14875);
} else {
if((state_val_14878 === (2))){
var inst_14783 = (state_14877[(8)]);
var inst_14788 = inst_14783.cljs$lang$protocol_mask$partition0$;
var inst_14789 = (inst_14788 & (64));
var inst_14790 = inst_14783.cljs$core$ISeq$;
var inst_14791 = (inst_14789) || (inst_14790);
var state_14877__$1 = state_14877;
if(cljs.core.truth_(inst_14791)){
var statearr_14912_14969 = state_14877__$1;
(statearr_14912_14969[(1)] = (5));

} else {
var statearr_14913_14970 = state_14877__$1;
(statearr_14913_14970[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14878 === (23))){
var inst_14836 = (state_14877[(14)]);
var inst_14842 = (inst_14836 == null);
var state_14877__$1 = state_14877;
if(cljs.core.truth_(inst_14842)){
var statearr_14914_14971 = state_14877__$1;
(statearr_14914_14971[(1)] = (26));

} else {
var statearr_14915_14972 = state_14877__$1;
(statearr_14915_14972[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14878 === (35))){
var inst_14862 = (state_14877[(2)]);
var state_14877__$1 = state_14877;
if(cljs.core.truth_(inst_14862)){
var statearr_14916_14973 = state_14877__$1;
(statearr_14916_14973[(1)] = (36));

} else {
var statearr_14917_14974 = state_14877__$1;
(statearr_14917_14974[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14878 === (19))){
var inst_14807 = (state_14877[(7)]);
var inst_14826 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_14807);
var state_14877__$1 = state_14877;
var statearr_14918_14975 = state_14877__$1;
(statearr_14918_14975[(2)] = inst_14826);

(statearr_14918_14975[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14878 === (11))){
var inst_14807 = (state_14877[(7)]);
var inst_14811 = (inst_14807 == null);
var inst_14812 = cljs.core.not(inst_14811);
var state_14877__$1 = state_14877;
if(inst_14812){
var statearr_14919_14976 = state_14877__$1;
(statearr_14919_14976[(1)] = (13));

} else {
var statearr_14920_14977 = state_14877__$1;
(statearr_14920_14977[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14878 === (9))){
var inst_14783 = (state_14877[(8)]);
var state_14877__$1 = state_14877;
var statearr_14921_14978 = state_14877__$1;
(statearr_14921_14978[(2)] = inst_14783);

(statearr_14921_14978[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14878 === (5))){
var state_14877__$1 = state_14877;
var statearr_14922_14979 = state_14877__$1;
(statearr_14922_14979[(2)] = true);

(statearr_14922_14979[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14878 === (14))){
var state_14877__$1 = state_14877;
var statearr_14923_14980 = state_14877__$1;
(statearr_14923_14980[(2)] = false);

(statearr_14923_14980[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14878 === (26))){
var inst_14837 = (state_14877[(11)]);
var inst_14844 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_14837);
var state_14877__$1 = state_14877;
var statearr_14924_14981 = state_14877__$1;
(statearr_14924_14981[(2)] = inst_14844);

(statearr_14924_14981[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14878 === (16))){
var state_14877__$1 = state_14877;
var statearr_14925_14982 = state_14877__$1;
(statearr_14925_14982[(2)] = true);

(statearr_14925_14982[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14878 === (38))){
var inst_14867 = (state_14877[(2)]);
var state_14877__$1 = state_14877;
var statearr_14926_14983 = state_14877__$1;
(statearr_14926_14983[(2)] = inst_14867);

(statearr_14926_14983[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14878 === (30))){
var inst_14831 = (state_14877[(13)]);
var inst_14830 = (state_14877[(9)]);
var inst_14837 = (state_14877[(11)]);
var inst_14854 = cljs.core.empty_QMARK_(inst_14830);
var inst_14855 = (inst_14831.cljs$core$IFn$_invoke$arity$1 ? inst_14831.cljs$core$IFn$_invoke$arity$1(inst_14837) : inst_14831.call(null,inst_14837));
var inst_14856 = cljs.core.not(inst_14855);
var inst_14857 = (inst_14854) && (inst_14856);
var state_14877__$1 = state_14877;
var statearr_14927_14984 = state_14877__$1;
(statearr_14927_14984[(2)] = inst_14857);

(statearr_14927_14984[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14878 === (10))){
var inst_14783 = (state_14877[(8)]);
var inst_14803 = (state_14877[(2)]);
var inst_14804 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14803,cljs.core.cst$kw$solos);
var inst_14805 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14803,cljs.core.cst$kw$mutes);
var inst_14806 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14803,cljs.core.cst$kw$reads);
var inst_14807 = inst_14783;
var state_14877__$1 = (function (){var statearr_14928 = state_14877;
(statearr_14928[(16)] = inst_14804);

(statearr_14928[(17)] = inst_14805);

(statearr_14928[(18)] = inst_14806);

(statearr_14928[(7)] = inst_14807);

return statearr_14928;
})();
var statearr_14929_14985 = state_14877__$1;
(statearr_14929_14985[(2)] = null);

(statearr_14929_14985[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14878 === (18))){
var inst_14821 = (state_14877[(2)]);
var state_14877__$1 = state_14877;
var statearr_14930_14986 = state_14877__$1;
(statearr_14930_14986[(2)] = inst_14821);

(statearr_14930_14986[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14878 === (37))){
var state_14877__$1 = state_14877;
var statearr_14931_14987 = state_14877__$1;
(statearr_14931_14987[(2)] = null);

(statearr_14931_14987[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14878 === (8))){
var inst_14783 = (state_14877[(8)]);
var inst_14800 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_14783);
var state_14877__$1 = state_14877;
var statearr_14932_14988 = state_14877__$1;
(statearr_14932_14988[(2)] = inst_14800);

(statearr_14932_14988[(1)] = (10));


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
});})(c__13209__auto___14942,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__13095__auto__,c__13209__auto___14942,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__13096__auto__ = null;
var cljs$core$async$mix_$_state_machine__13096__auto____0 = (function (){
var statearr_14936 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14936[(0)] = cljs$core$async$mix_$_state_machine__13096__auto__);

(statearr_14936[(1)] = (1));

return statearr_14936;
});
var cljs$core$async$mix_$_state_machine__13096__auto____1 = (function (state_14877){
while(true){
var ret_value__13097__auto__ = (function (){try{while(true){
var result__13098__auto__ = switch__13095__auto__(state_14877);
if(cljs.core.keyword_identical_QMARK_(result__13098__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13098__auto__;
}
break;
}
}catch (e14937){if((e14937 instanceof Object)){
var ex__13099__auto__ = e14937;
var statearr_14938_14989 = state_14877;
(statearr_14938_14989[(5)] = ex__13099__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14877);

return cljs.core.cst$kw$recur;
} else {
throw e14937;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13097__auto__,cljs.core.cst$kw$recur)){
var G__14990 = state_14877;
state_14877 = G__14990;
continue;
} else {
return ret_value__13097__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__13096__auto__ = function(state_14877){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__13096__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__13096__auto____1.call(this,state_14877);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__13096__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__13096__auto____0;
cljs$core$async$mix_$_state_machine__13096__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__13096__auto____1;
return cljs$core$async$mix_$_state_machine__13096__auto__;
})()
;})(switch__13095__auto__,c__13209__auto___14942,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__13211__auto__ = (function (){var statearr_14939 = (f__13210__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13210__auto__.cljs$core$IFn$_invoke$arity$0() : f__13210__auto__.call(null));
(statearr_14939[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13209__auto___14942);

return statearr_14939;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13211__auto__);
});})(c__13209__auto___14942,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__6811__auto__ = (((p == null))?null:p);
var m__6812__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return (m__6812__auto__.cljs$core$IFn$_invoke$arity$4 ? m__6812__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__6812__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__6812__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__6812__auto____$1 == null))){
return (m__6812__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__6812__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__6812__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__6811__auto__ = (((p == null))?null:p);
var m__6812__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return (m__6812__auto__.cljs$core$IFn$_invoke$arity$3 ? m__6812__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__6812__auto__.call(null,p,v,ch));
} else {
var m__6812__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__6812__auto____$1 == null))){
return (m__6812__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__6812__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__6812__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args14991 = [];
var len__7214__auto___14994 = arguments.length;
var i__7215__auto___14995 = (0);
while(true){
if((i__7215__auto___14995 < len__7214__auto___14994)){
args14991.push((arguments[i__7215__auto___14995]));

var G__14996 = (i__7215__auto___14995 + (1));
i__7215__auto___14995 = G__14996;
continue;
} else {
}
break;
}

var G__14993 = args14991.length;
switch (G__14993) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14991.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__6811__auto__ = (((p == null))?null:p);
var m__6812__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return (m__6812__auto__.cljs$core$IFn$_invoke$arity$1 ? m__6812__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__6812__auto__.call(null,p));
} else {
var m__6812__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__6812__auto____$1 == null))){
return (m__6812__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__6812__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__6812__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__6811__auto__ = (((p == null))?null:p);
var m__6812__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return (m__6812__auto__.cljs$core$IFn$_invoke$arity$2 ? m__6812__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__6812__auto__.call(null,p,v));
} else {
var m__6812__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__6812__auto____$1 == null))){
return (m__6812__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__6812__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__6812__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args14999 = [];
var len__7214__auto___15127 = arguments.length;
var i__7215__auto___15128 = (0);
while(true){
if((i__7215__auto___15128 < len__7214__auto___15127)){
args14999.push((arguments[i__7215__auto___15128]));

var G__15129 = (i__7215__auto___15128 + (1));
i__7215__auto___15128 = G__15129;
continue;
} else {
}
break;
}

var G__15001 = args14999.length;
switch (G__15001) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14999.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = (function (){var G__15002 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15002) : cljs.core.atom.call(null,G__15002));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__6156__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults)),topic);
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__6156__auto__,mults){
return (function (p1__14998_SHARP_){
if(cljs.core.truth_((p1__14998_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__14998_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__14998_SHARP_.call(null,topic)))){
return p1__14998_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__14998_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__6156__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async15003 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15003 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta15004){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta15004 = meta15004;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15003.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_15005,meta15004__$1){
var self__ = this;
var _15005__$1 = this;
return (new cljs.core.async.t_cljs$core$async15003(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta15004__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15003.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_15005){
var self__ = this;
var _15005__$1 = this;
return self__.meta15004;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15003.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async15003.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15003.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async15003.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15003.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.mults) : cljs.core.deref.call(null,self__.mults)),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15003.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__15006 = self__.mults;
var G__15007 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15006,G__15007) : cljs.core.reset_BANG_.call(null,G__15006,G__15007));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15003.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15003.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta15004], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15003.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15003.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15003";

cljs.core.async.t_cljs$core$async15003.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write(writer__6755__auto__,"cljs.core.async/t_cljs$core$async15003");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async15003 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async15003(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta15004){
return (new cljs.core.async.t_cljs$core$async15003(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta15004));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async15003(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__13209__auto___15131 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13209__auto___15131,mults,ensure_mult,p){
return (function (){
var f__13210__auto__ = (function (){var switch__13095__auto__ = ((function (c__13209__auto___15131,mults,ensure_mult,p){
return (function (state_15079){
var state_val_15080 = (state_15079[(1)]);
if((state_val_15080 === (7))){
var inst_15075 = (state_15079[(2)]);
var state_15079__$1 = state_15079;
var statearr_15081_15132 = state_15079__$1;
(statearr_15081_15132[(2)] = inst_15075);

(statearr_15081_15132[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15080 === (20))){
var state_15079__$1 = state_15079;
var statearr_15082_15133 = state_15079__$1;
(statearr_15082_15133[(2)] = null);

(statearr_15082_15133[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15080 === (1))){
var state_15079__$1 = state_15079;
var statearr_15083_15134 = state_15079__$1;
(statearr_15083_15134[(2)] = null);

(statearr_15083_15134[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15080 === (24))){
var inst_15058 = (state_15079[(7)]);
var inst_15067 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_15058);
var state_15079__$1 = state_15079;
var statearr_15084_15135 = state_15079__$1;
(statearr_15084_15135[(2)] = inst_15067);

(statearr_15084_15135[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15080 === (4))){
var inst_15010 = (state_15079[(8)]);
var inst_15010__$1 = (state_15079[(2)]);
var inst_15011 = (inst_15010__$1 == null);
var state_15079__$1 = (function (){var statearr_15085 = state_15079;
(statearr_15085[(8)] = inst_15010__$1);

return statearr_15085;
})();
if(cljs.core.truth_(inst_15011)){
var statearr_15086_15136 = state_15079__$1;
(statearr_15086_15136[(1)] = (5));

} else {
var statearr_15087_15137 = state_15079__$1;
(statearr_15087_15137[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15080 === (15))){
var inst_15052 = (state_15079[(2)]);
var state_15079__$1 = state_15079;
var statearr_15088_15138 = state_15079__$1;
(statearr_15088_15138[(2)] = inst_15052);

(statearr_15088_15138[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15080 === (21))){
var inst_15072 = (state_15079[(2)]);
var state_15079__$1 = (function (){var statearr_15089 = state_15079;
(statearr_15089[(9)] = inst_15072);

return statearr_15089;
})();
var statearr_15090_15139 = state_15079__$1;
(statearr_15090_15139[(2)] = null);

(statearr_15090_15139[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15080 === (13))){
var inst_15034 = (state_15079[(10)]);
var inst_15036 = cljs.core.chunked_seq_QMARK_(inst_15034);
var state_15079__$1 = state_15079;
if(inst_15036){
var statearr_15091_15140 = state_15079__$1;
(statearr_15091_15140[(1)] = (16));

} else {
var statearr_15092_15141 = state_15079__$1;
(statearr_15092_15141[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15080 === (22))){
var inst_15064 = (state_15079[(2)]);
var state_15079__$1 = state_15079;
if(cljs.core.truth_(inst_15064)){
var statearr_15093_15142 = state_15079__$1;
(statearr_15093_15142[(1)] = (23));

} else {
var statearr_15094_15143 = state_15079__$1;
(statearr_15094_15143[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15080 === (6))){
var inst_15060 = (state_15079[(11)]);
var inst_15058 = (state_15079[(7)]);
var inst_15010 = (state_15079[(8)]);
var inst_15058__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_15010) : topic_fn.call(null,inst_15010));
var inst_15059 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_15060__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15059,inst_15058__$1);
var state_15079__$1 = (function (){var statearr_15095 = state_15079;
(statearr_15095[(11)] = inst_15060__$1);

(statearr_15095[(7)] = inst_15058__$1);

return statearr_15095;
})();
if(cljs.core.truth_(inst_15060__$1)){
var statearr_15096_15144 = state_15079__$1;
(statearr_15096_15144[(1)] = (19));

} else {
var statearr_15097_15145 = state_15079__$1;
(statearr_15097_15145[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15080 === (25))){
var inst_15069 = (state_15079[(2)]);
var state_15079__$1 = state_15079;
var statearr_15098_15146 = state_15079__$1;
(statearr_15098_15146[(2)] = inst_15069);

(statearr_15098_15146[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15080 === (17))){
var inst_15034 = (state_15079[(10)]);
var inst_15043 = cljs.core.first(inst_15034);
var inst_15044 = cljs.core.async.muxch_STAR_(inst_15043);
var inst_15045 = cljs.core.async.close_BANG_(inst_15044);
var inst_15046 = cljs.core.next(inst_15034);
var inst_15020 = inst_15046;
var inst_15021 = null;
var inst_15022 = (0);
var inst_15023 = (0);
var state_15079__$1 = (function (){var statearr_15099 = state_15079;
(statearr_15099[(12)] = inst_15022);

(statearr_15099[(13)] = inst_15045);

(statearr_15099[(14)] = inst_15021);

(statearr_15099[(15)] = inst_15023);

(statearr_15099[(16)] = inst_15020);

return statearr_15099;
})();
var statearr_15100_15147 = state_15079__$1;
(statearr_15100_15147[(2)] = null);

(statearr_15100_15147[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15080 === (3))){
var inst_15077 = (state_15079[(2)]);
var state_15079__$1 = state_15079;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15079__$1,inst_15077);
} else {
if((state_val_15080 === (12))){
var inst_15054 = (state_15079[(2)]);
var state_15079__$1 = state_15079;
var statearr_15101_15148 = state_15079__$1;
(statearr_15101_15148[(2)] = inst_15054);

(statearr_15101_15148[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15080 === (2))){
var state_15079__$1 = state_15079;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15079__$1,(4),ch);
} else {
if((state_val_15080 === (23))){
var state_15079__$1 = state_15079;
var statearr_15102_15149 = state_15079__$1;
(statearr_15102_15149[(2)] = null);

(statearr_15102_15149[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15080 === (19))){
var inst_15060 = (state_15079[(11)]);
var inst_15010 = (state_15079[(8)]);
var inst_15062 = cljs.core.async.muxch_STAR_(inst_15060);
var state_15079__$1 = state_15079;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15079__$1,(22),inst_15062,inst_15010);
} else {
if((state_val_15080 === (11))){
var inst_15020 = (state_15079[(16)]);
var inst_15034 = (state_15079[(10)]);
var inst_15034__$1 = cljs.core.seq(inst_15020);
var state_15079__$1 = (function (){var statearr_15103 = state_15079;
(statearr_15103[(10)] = inst_15034__$1);

return statearr_15103;
})();
if(inst_15034__$1){
var statearr_15104_15150 = state_15079__$1;
(statearr_15104_15150[(1)] = (13));

} else {
var statearr_15105_15151 = state_15079__$1;
(statearr_15105_15151[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15080 === (9))){
var inst_15056 = (state_15079[(2)]);
var state_15079__$1 = state_15079;
var statearr_15106_15152 = state_15079__$1;
(statearr_15106_15152[(2)] = inst_15056);

(statearr_15106_15152[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15080 === (5))){
var inst_15017 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_15018 = cljs.core.vals(inst_15017);
var inst_15019 = cljs.core.seq(inst_15018);
var inst_15020 = inst_15019;
var inst_15021 = null;
var inst_15022 = (0);
var inst_15023 = (0);
var state_15079__$1 = (function (){var statearr_15107 = state_15079;
(statearr_15107[(12)] = inst_15022);

(statearr_15107[(14)] = inst_15021);

(statearr_15107[(15)] = inst_15023);

(statearr_15107[(16)] = inst_15020);

return statearr_15107;
})();
var statearr_15108_15153 = state_15079__$1;
(statearr_15108_15153[(2)] = null);

(statearr_15108_15153[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15080 === (14))){
var state_15079__$1 = state_15079;
var statearr_15112_15154 = state_15079__$1;
(statearr_15112_15154[(2)] = null);

(statearr_15112_15154[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15080 === (16))){
var inst_15034 = (state_15079[(10)]);
var inst_15038 = cljs.core.chunk_first(inst_15034);
var inst_15039 = cljs.core.chunk_rest(inst_15034);
var inst_15040 = cljs.core.count(inst_15038);
var inst_15020 = inst_15039;
var inst_15021 = inst_15038;
var inst_15022 = inst_15040;
var inst_15023 = (0);
var state_15079__$1 = (function (){var statearr_15113 = state_15079;
(statearr_15113[(12)] = inst_15022);

(statearr_15113[(14)] = inst_15021);

(statearr_15113[(15)] = inst_15023);

(statearr_15113[(16)] = inst_15020);

return statearr_15113;
})();
var statearr_15114_15155 = state_15079__$1;
(statearr_15114_15155[(2)] = null);

(statearr_15114_15155[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15080 === (10))){
var inst_15022 = (state_15079[(12)]);
var inst_15021 = (state_15079[(14)]);
var inst_15023 = (state_15079[(15)]);
var inst_15020 = (state_15079[(16)]);
var inst_15028 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_15021,inst_15023);
var inst_15029 = cljs.core.async.muxch_STAR_(inst_15028);
var inst_15030 = cljs.core.async.close_BANG_(inst_15029);
var inst_15031 = (inst_15023 + (1));
var tmp15109 = inst_15022;
var tmp15110 = inst_15021;
var tmp15111 = inst_15020;
var inst_15020__$1 = tmp15111;
var inst_15021__$1 = tmp15110;
var inst_15022__$1 = tmp15109;
var inst_15023__$1 = inst_15031;
var state_15079__$1 = (function (){var statearr_15115 = state_15079;
(statearr_15115[(12)] = inst_15022__$1);

(statearr_15115[(14)] = inst_15021__$1);

(statearr_15115[(15)] = inst_15023__$1);

(statearr_15115[(16)] = inst_15020__$1);

(statearr_15115[(17)] = inst_15030);

return statearr_15115;
})();
var statearr_15116_15156 = state_15079__$1;
(statearr_15116_15156[(2)] = null);

(statearr_15116_15156[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15080 === (18))){
var inst_15049 = (state_15079[(2)]);
var state_15079__$1 = state_15079;
var statearr_15117_15157 = state_15079__$1;
(statearr_15117_15157[(2)] = inst_15049);

(statearr_15117_15157[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15080 === (8))){
var inst_15022 = (state_15079[(12)]);
var inst_15023 = (state_15079[(15)]);
var inst_15025 = (inst_15023 < inst_15022);
var inst_15026 = inst_15025;
var state_15079__$1 = state_15079;
if(cljs.core.truth_(inst_15026)){
var statearr_15118_15158 = state_15079__$1;
(statearr_15118_15158[(1)] = (10));

} else {
var statearr_15119_15159 = state_15079__$1;
(statearr_15119_15159[(1)] = (11));

}

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
});})(c__13209__auto___15131,mults,ensure_mult,p))
;
return ((function (switch__13095__auto__,c__13209__auto___15131,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__13096__auto__ = null;
var cljs$core$async$state_machine__13096__auto____0 = (function (){
var statearr_15123 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15123[(0)] = cljs$core$async$state_machine__13096__auto__);

(statearr_15123[(1)] = (1));

return statearr_15123;
});
var cljs$core$async$state_machine__13096__auto____1 = (function (state_15079){
while(true){
var ret_value__13097__auto__ = (function (){try{while(true){
var result__13098__auto__ = switch__13095__auto__(state_15079);
if(cljs.core.keyword_identical_QMARK_(result__13098__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13098__auto__;
}
break;
}
}catch (e15124){if((e15124 instanceof Object)){
var ex__13099__auto__ = e15124;
var statearr_15125_15160 = state_15079;
(statearr_15125_15160[(5)] = ex__13099__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15079);

return cljs.core.cst$kw$recur;
} else {
throw e15124;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13097__auto__,cljs.core.cst$kw$recur)){
var G__15161 = state_15079;
state_15079 = G__15161;
continue;
} else {
return ret_value__13097__auto__;
}
break;
}
});
cljs$core$async$state_machine__13096__auto__ = function(state_15079){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13096__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13096__auto____1.call(this,state_15079);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13096__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13096__auto____0;
cljs$core$async$state_machine__13096__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13096__auto____1;
return cljs$core$async$state_machine__13096__auto__;
})()
;})(switch__13095__auto__,c__13209__auto___15131,mults,ensure_mult,p))
})();
var state__13211__auto__ = (function (){var statearr_15126 = (f__13210__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13210__auto__.cljs$core$IFn$_invoke$arity$0() : f__13210__auto__.call(null));
(statearr_15126[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13209__auto___15131);

return statearr_15126;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13211__auto__);
});})(c__13209__auto___15131,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args15162 = [];
var len__7214__auto___15165 = arguments.length;
var i__7215__auto___15166 = (0);
while(true){
if((i__7215__auto___15166 < len__7214__auto___15165)){
args15162.push((arguments[i__7215__auto___15166]));

var G__15167 = (i__7215__auto___15166 + (1));
i__7215__auto___15166 = G__15167;
continue;
} else {
}
break;
}

var G__15164 = args15162.length;
switch (G__15164) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15162.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args15169 = [];
var len__7214__auto___15172 = arguments.length;
var i__7215__auto___15173 = (0);
while(true){
if((i__7215__auto___15173 < len__7214__auto___15172)){
args15169.push((arguments[i__7215__auto___15173]));

var G__15174 = (i__7215__auto___15173 + (1));
i__7215__auto___15173 = G__15174;
continue;
} else {
}
break;
}

var G__15171 = args15169.length;
switch (G__15171) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15169.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args15176 = [];
var len__7214__auto___15247 = arguments.length;
var i__7215__auto___15248 = (0);
while(true){
if((i__7215__auto___15248 < len__7214__auto___15247)){
args15176.push((arguments[i__7215__auto___15248]));

var G__15249 = (i__7215__auto___15248 + (1));
i__7215__auto___15248 = G__15249;
continue;
} else {
}
break;
}

var G__15178 = args15176.length;
switch (G__15178) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15176.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__13209__auto___15251 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13209__auto___15251,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__13210__auto__ = (function (){var switch__13095__auto__ = ((function (c__13209__auto___15251,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_15217){
var state_val_15218 = (state_15217[(1)]);
if((state_val_15218 === (7))){
var state_15217__$1 = state_15217;
var statearr_15219_15252 = state_15217__$1;
(statearr_15219_15252[(2)] = null);

(statearr_15219_15252[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15218 === (1))){
var state_15217__$1 = state_15217;
var statearr_15220_15253 = state_15217__$1;
(statearr_15220_15253[(2)] = null);

(statearr_15220_15253[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15218 === (4))){
var inst_15181 = (state_15217[(7)]);
var inst_15183 = (inst_15181 < cnt);
var state_15217__$1 = state_15217;
if(cljs.core.truth_(inst_15183)){
var statearr_15221_15254 = state_15217__$1;
(statearr_15221_15254[(1)] = (6));

} else {
var statearr_15222_15255 = state_15217__$1;
(statearr_15222_15255[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15218 === (15))){
var inst_15213 = (state_15217[(2)]);
var state_15217__$1 = state_15217;
var statearr_15223_15256 = state_15217__$1;
(statearr_15223_15256[(2)] = inst_15213);

(statearr_15223_15256[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15218 === (13))){
var inst_15206 = cljs.core.async.close_BANG_(out);
var state_15217__$1 = state_15217;
var statearr_15224_15257 = state_15217__$1;
(statearr_15224_15257[(2)] = inst_15206);

(statearr_15224_15257[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15218 === (6))){
var state_15217__$1 = state_15217;
var statearr_15225_15258 = state_15217__$1;
(statearr_15225_15258[(2)] = null);

(statearr_15225_15258[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15218 === (3))){
var inst_15215 = (state_15217[(2)]);
var state_15217__$1 = state_15217;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15217__$1,inst_15215);
} else {
if((state_val_15218 === (12))){
var inst_15203 = (state_15217[(8)]);
var inst_15203__$1 = (state_15217[(2)]);
var inst_15204 = cljs.core.some(cljs.core.nil_QMARK_,inst_15203__$1);
var state_15217__$1 = (function (){var statearr_15226 = state_15217;
(statearr_15226[(8)] = inst_15203__$1);

return statearr_15226;
})();
if(cljs.core.truth_(inst_15204)){
var statearr_15227_15259 = state_15217__$1;
(statearr_15227_15259[(1)] = (13));

} else {
var statearr_15228_15260 = state_15217__$1;
(statearr_15228_15260[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15218 === (2))){
var inst_15180 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cnt) : cljs.core.reset_BANG_.call(null,dctr,cnt));
var inst_15181 = (0);
var state_15217__$1 = (function (){var statearr_15229 = state_15217;
(statearr_15229[(7)] = inst_15181);

(statearr_15229[(9)] = inst_15180);

return statearr_15229;
})();
var statearr_15230_15261 = state_15217__$1;
(statearr_15230_15261[(2)] = null);

(statearr_15230_15261[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15218 === (11))){
var inst_15181 = (state_15217[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_15217,(10),Object,null,(9));
var inst_15190 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_15181) : chs__$1.call(null,inst_15181));
var inst_15191 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_15181) : done.call(null,inst_15181));
var inst_15192 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_15190,inst_15191);
var state_15217__$1 = state_15217;
var statearr_15231_15262 = state_15217__$1;
(statearr_15231_15262[(2)] = inst_15192);


cljs.core.async.impl.ioc_helpers.process_exception(state_15217__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_15218 === (9))){
var inst_15181 = (state_15217[(7)]);
var inst_15194 = (state_15217[(2)]);
var inst_15195 = (inst_15181 + (1));
var inst_15181__$1 = inst_15195;
var state_15217__$1 = (function (){var statearr_15232 = state_15217;
(statearr_15232[(7)] = inst_15181__$1);

(statearr_15232[(10)] = inst_15194);

return statearr_15232;
})();
var statearr_15233_15263 = state_15217__$1;
(statearr_15233_15263[(2)] = null);

(statearr_15233_15263[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15218 === (5))){
var inst_15201 = (state_15217[(2)]);
var state_15217__$1 = (function (){var statearr_15234 = state_15217;
(statearr_15234[(11)] = inst_15201);

return statearr_15234;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15217__$1,(12),dchan);
} else {
if((state_val_15218 === (14))){
var inst_15203 = (state_15217[(8)]);
var inst_15208 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_15203);
var state_15217__$1 = state_15217;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15217__$1,(16),out,inst_15208);
} else {
if((state_val_15218 === (16))){
var inst_15210 = (state_15217[(2)]);
var state_15217__$1 = (function (){var statearr_15235 = state_15217;
(statearr_15235[(12)] = inst_15210);

return statearr_15235;
})();
var statearr_15236_15264 = state_15217__$1;
(statearr_15236_15264[(2)] = null);

(statearr_15236_15264[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15218 === (10))){
var inst_15185 = (state_15217[(2)]);
var inst_15186 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_15217__$1 = (function (){var statearr_15237 = state_15217;
(statearr_15237[(13)] = inst_15185);

return statearr_15237;
})();
var statearr_15238_15265 = state_15217__$1;
(statearr_15238_15265[(2)] = inst_15186);


cljs.core.async.impl.ioc_helpers.process_exception(state_15217__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_15218 === (8))){
var inst_15199 = (state_15217[(2)]);
var state_15217__$1 = state_15217;
var statearr_15239_15266 = state_15217__$1;
(statearr_15239_15266[(2)] = inst_15199);

(statearr_15239_15266[(1)] = (5));


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
});})(c__13209__auto___15251,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__13095__auto__,c__13209__auto___15251,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__13096__auto__ = null;
var cljs$core$async$state_machine__13096__auto____0 = (function (){
var statearr_15243 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15243[(0)] = cljs$core$async$state_machine__13096__auto__);

(statearr_15243[(1)] = (1));

return statearr_15243;
});
var cljs$core$async$state_machine__13096__auto____1 = (function (state_15217){
while(true){
var ret_value__13097__auto__ = (function (){try{while(true){
var result__13098__auto__ = switch__13095__auto__(state_15217);
if(cljs.core.keyword_identical_QMARK_(result__13098__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13098__auto__;
}
break;
}
}catch (e15244){if((e15244 instanceof Object)){
var ex__13099__auto__ = e15244;
var statearr_15245_15267 = state_15217;
(statearr_15245_15267[(5)] = ex__13099__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15217);

return cljs.core.cst$kw$recur;
} else {
throw e15244;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13097__auto__,cljs.core.cst$kw$recur)){
var G__15268 = state_15217;
state_15217 = G__15268;
continue;
} else {
return ret_value__13097__auto__;
}
break;
}
});
cljs$core$async$state_machine__13096__auto__ = function(state_15217){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13096__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13096__auto____1.call(this,state_15217);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13096__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13096__auto____0;
cljs$core$async$state_machine__13096__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13096__auto____1;
return cljs$core$async$state_machine__13096__auto__;
})()
;})(switch__13095__auto__,c__13209__auto___15251,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__13211__auto__ = (function (){var statearr_15246 = (f__13210__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13210__auto__.cljs$core$IFn$_invoke$arity$0() : f__13210__auto__.call(null));
(statearr_15246[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13209__auto___15251);

return statearr_15246;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13211__auto__);
});})(c__13209__auto___15251,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args15270 = [];
var len__7214__auto___15326 = arguments.length;
var i__7215__auto___15327 = (0);
while(true){
if((i__7215__auto___15327 < len__7214__auto___15326)){
args15270.push((arguments[i__7215__auto___15327]));

var G__15328 = (i__7215__auto___15327 + (1));
i__7215__auto___15327 = G__15328;
continue;
} else {
}
break;
}

var G__15272 = args15270.length;
switch (G__15272) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15270.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13209__auto___15330 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13209__auto___15330,out){
return (function (){
var f__13210__auto__ = (function (){var switch__13095__auto__ = ((function (c__13209__auto___15330,out){
return (function (state_15302){
var state_val_15303 = (state_15302[(1)]);
if((state_val_15303 === (7))){
var inst_15282 = (state_15302[(7)]);
var inst_15281 = (state_15302[(8)]);
var inst_15281__$1 = (state_15302[(2)]);
var inst_15282__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15281__$1,(0),null);
var inst_15283 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15281__$1,(1),null);
var inst_15284 = (inst_15282__$1 == null);
var state_15302__$1 = (function (){var statearr_15304 = state_15302;
(statearr_15304[(7)] = inst_15282__$1);

(statearr_15304[(9)] = inst_15283);

(statearr_15304[(8)] = inst_15281__$1);

return statearr_15304;
})();
if(cljs.core.truth_(inst_15284)){
var statearr_15305_15331 = state_15302__$1;
(statearr_15305_15331[(1)] = (8));

} else {
var statearr_15306_15332 = state_15302__$1;
(statearr_15306_15332[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15303 === (1))){
var inst_15273 = cljs.core.vec(chs);
var inst_15274 = inst_15273;
var state_15302__$1 = (function (){var statearr_15307 = state_15302;
(statearr_15307[(10)] = inst_15274);

return statearr_15307;
})();
var statearr_15308_15333 = state_15302__$1;
(statearr_15308_15333[(2)] = null);

(statearr_15308_15333[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15303 === (4))){
var inst_15274 = (state_15302[(10)]);
var state_15302__$1 = state_15302;
return cljs.core.async.ioc_alts_BANG_(state_15302__$1,(7),inst_15274);
} else {
if((state_val_15303 === (6))){
var inst_15298 = (state_15302[(2)]);
var state_15302__$1 = state_15302;
var statearr_15309_15334 = state_15302__$1;
(statearr_15309_15334[(2)] = inst_15298);

(statearr_15309_15334[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15303 === (3))){
var inst_15300 = (state_15302[(2)]);
var state_15302__$1 = state_15302;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15302__$1,inst_15300);
} else {
if((state_val_15303 === (2))){
var inst_15274 = (state_15302[(10)]);
var inst_15276 = cljs.core.count(inst_15274);
var inst_15277 = (inst_15276 > (0));
var state_15302__$1 = state_15302;
if(cljs.core.truth_(inst_15277)){
var statearr_15311_15335 = state_15302__$1;
(statearr_15311_15335[(1)] = (4));

} else {
var statearr_15312_15336 = state_15302__$1;
(statearr_15312_15336[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15303 === (11))){
var inst_15274 = (state_15302[(10)]);
var inst_15291 = (state_15302[(2)]);
var tmp15310 = inst_15274;
var inst_15274__$1 = tmp15310;
var state_15302__$1 = (function (){var statearr_15313 = state_15302;
(statearr_15313[(11)] = inst_15291);

(statearr_15313[(10)] = inst_15274__$1);

return statearr_15313;
})();
var statearr_15314_15337 = state_15302__$1;
(statearr_15314_15337[(2)] = null);

(statearr_15314_15337[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15303 === (9))){
var inst_15282 = (state_15302[(7)]);
var state_15302__$1 = state_15302;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15302__$1,(11),out,inst_15282);
} else {
if((state_val_15303 === (5))){
var inst_15296 = cljs.core.async.close_BANG_(out);
var state_15302__$1 = state_15302;
var statearr_15315_15338 = state_15302__$1;
(statearr_15315_15338[(2)] = inst_15296);

(statearr_15315_15338[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15303 === (10))){
var inst_15294 = (state_15302[(2)]);
var state_15302__$1 = state_15302;
var statearr_15316_15339 = state_15302__$1;
(statearr_15316_15339[(2)] = inst_15294);

(statearr_15316_15339[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15303 === (8))){
var inst_15282 = (state_15302[(7)]);
var inst_15283 = (state_15302[(9)]);
var inst_15281 = (state_15302[(8)]);
var inst_15274 = (state_15302[(10)]);
var inst_15286 = (function (){var cs = inst_15274;
var vec__15279 = inst_15281;
var v = inst_15282;
var c = inst_15283;
return ((function (cs,vec__15279,v,c,inst_15282,inst_15283,inst_15281,inst_15274,state_val_15303,c__13209__auto___15330,out){
return (function (p1__15269_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__15269_SHARP_);
});
;})(cs,vec__15279,v,c,inst_15282,inst_15283,inst_15281,inst_15274,state_val_15303,c__13209__auto___15330,out))
})();
var inst_15287 = cljs.core.filterv(inst_15286,inst_15274);
var inst_15274__$1 = inst_15287;
var state_15302__$1 = (function (){var statearr_15317 = state_15302;
(statearr_15317[(10)] = inst_15274__$1);

return statearr_15317;
})();
var statearr_15318_15340 = state_15302__$1;
(statearr_15318_15340[(2)] = null);

(statearr_15318_15340[(1)] = (2));


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
});})(c__13209__auto___15330,out))
;
return ((function (switch__13095__auto__,c__13209__auto___15330,out){
return (function() {
var cljs$core$async$state_machine__13096__auto__ = null;
var cljs$core$async$state_machine__13096__auto____0 = (function (){
var statearr_15322 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15322[(0)] = cljs$core$async$state_machine__13096__auto__);

(statearr_15322[(1)] = (1));

return statearr_15322;
});
var cljs$core$async$state_machine__13096__auto____1 = (function (state_15302){
while(true){
var ret_value__13097__auto__ = (function (){try{while(true){
var result__13098__auto__ = switch__13095__auto__(state_15302);
if(cljs.core.keyword_identical_QMARK_(result__13098__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13098__auto__;
}
break;
}
}catch (e15323){if((e15323 instanceof Object)){
var ex__13099__auto__ = e15323;
var statearr_15324_15341 = state_15302;
(statearr_15324_15341[(5)] = ex__13099__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15302);

return cljs.core.cst$kw$recur;
} else {
throw e15323;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13097__auto__,cljs.core.cst$kw$recur)){
var G__15342 = state_15302;
state_15302 = G__15342;
continue;
} else {
return ret_value__13097__auto__;
}
break;
}
});
cljs$core$async$state_machine__13096__auto__ = function(state_15302){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13096__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13096__auto____1.call(this,state_15302);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13096__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13096__auto____0;
cljs$core$async$state_machine__13096__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13096__auto____1;
return cljs$core$async$state_machine__13096__auto__;
})()
;})(switch__13095__auto__,c__13209__auto___15330,out))
})();
var state__13211__auto__ = (function (){var statearr_15325 = (f__13210__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13210__auto__.cljs$core$IFn$_invoke$arity$0() : f__13210__auto__.call(null));
(statearr_15325[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13209__auto___15330);

return statearr_15325;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13211__auto__);
});})(c__13209__auto___15330,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args15343 = [];
var len__7214__auto___15392 = arguments.length;
var i__7215__auto___15393 = (0);
while(true){
if((i__7215__auto___15393 < len__7214__auto___15392)){
args15343.push((arguments[i__7215__auto___15393]));

var G__15394 = (i__7215__auto___15393 + (1));
i__7215__auto___15393 = G__15394;
continue;
} else {
}
break;
}

var G__15345 = args15343.length;
switch (G__15345) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15343.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13209__auto___15396 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13209__auto___15396,out){
return (function (){
var f__13210__auto__ = (function (){var switch__13095__auto__ = ((function (c__13209__auto___15396,out){
return (function (state_15369){
var state_val_15370 = (state_15369[(1)]);
if((state_val_15370 === (7))){
var inst_15351 = (state_15369[(7)]);
var inst_15351__$1 = (state_15369[(2)]);
var inst_15352 = (inst_15351__$1 == null);
var inst_15353 = cljs.core.not(inst_15352);
var state_15369__$1 = (function (){var statearr_15371 = state_15369;
(statearr_15371[(7)] = inst_15351__$1);

return statearr_15371;
})();
if(inst_15353){
var statearr_15372_15397 = state_15369__$1;
(statearr_15372_15397[(1)] = (8));

} else {
var statearr_15373_15398 = state_15369__$1;
(statearr_15373_15398[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15370 === (1))){
var inst_15346 = (0);
var state_15369__$1 = (function (){var statearr_15374 = state_15369;
(statearr_15374[(8)] = inst_15346);

return statearr_15374;
})();
var statearr_15375_15399 = state_15369__$1;
(statearr_15375_15399[(2)] = null);

(statearr_15375_15399[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15370 === (4))){
var state_15369__$1 = state_15369;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15369__$1,(7),ch);
} else {
if((state_val_15370 === (6))){
var inst_15364 = (state_15369[(2)]);
var state_15369__$1 = state_15369;
var statearr_15376_15400 = state_15369__$1;
(statearr_15376_15400[(2)] = inst_15364);

(statearr_15376_15400[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15370 === (3))){
var inst_15366 = (state_15369[(2)]);
var inst_15367 = cljs.core.async.close_BANG_(out);
var state_15369__$1 = (function (){var statearr_15377 = state_15369;
(statearr_15377[(9)] = inst_15366);

return statearr_15377;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15369__$1,inst_15367);
} else {
if((state_val_15370 === (2))){
var inst_15346 = (state_15369[(8)]);
var inst_15348 = (inst_15346 < n);
var state_15369__$1 = state_15369;
if(cljs.core.truth_(inst_15348)){
var statearr_15378_15401 = state_15369__$1;
(statearr_15378_15401[(1)] = (4));

} else {
var statearr_15379_15402 = state_15369__$1;
(statearr_15379_15402[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15370 === (11))){
var inst_15346 = (state_15369[(8)]);
var inst_15356 = (state_15369[(2)]);
var inst_15357 = (inst_15346 + (1));
var inst_15346__$1 = inst_15357;
var state_15369__$1 = (function (){var statearr_15380 = state_15369;
(statearr_15380[(8)] = inst_15346__$1);

(statearr_15380[(10)] = inst_15356);

return statearr_15380;
})();
var statearr_15381_15403 = state_15369__$1;
(statearr_15381_15403[(2)] = null);

(statearr_15381_15403[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15370 === (9))){
var state_15369__$1 = state_15369;
var statearr_15382_15404 = state_15369__$1;
(statearr_15382_15404[(2)] = null);

(statearr_15382_15404[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15370 === (5))){
var state_15369__$1 = state_15369;
var statearr_15383_15405 = state_15369__$1;
(statearr_15383_15405[(2)] = null);

(statearr_15383_15405[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15370 === (10))){
var inst_15361 = (state_15369[(2)]);
var state_15369__$1 = state_15369;
var statearr_15384_15406 = state_15369__$1;
(statearr_15384_15406[(2)] = inst_15361);

(statearr_15384_15406[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15370 === (8))){
var inst_15351 = (state_15369[(7)]);
var state_15369__$1 = state_15369;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15369__$1,(11),out,inst_15351);
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
});})(c__13209__auto___15396,out))
;
return ((function (switch__13095__auto__,c__13209__auto___15396,out){
return (function() {
var cljs$core$async$state_machine__13096__auto__ = null;
var cljs$core$async$state_machine__13096__auto____0 = (function (){
var statearr_15388 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15388[(0)] = cljs$core$async$state_machine__13096__auto__);

(statearr_15388[(1)] = (1));

return statearr_15388;
});
var cljs$core$async$state_machine__13096__auto____1 = (function (state_15369){
while(true){
var ret_value__13097__auto__ = (function (){try{while(true){
var result__13098__auto__ = switch__13095__auto__(state_15369);
if(cljs.core.keyword_identical_QMARK_(result__13098__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13098__auto__;
}
break;
}
}catch (e15389){if((e15389 instanceof Object)){
var ex__13099__auto__ = e15389;
var statearr_15390_15407 = state_15369;
(statearr_15390_15407[(5)] = ex__13099__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15369);

return cljs.core.cst$kw$recur;
} else {
throw e15389;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13097__auto__,cljs.core.cst$kw$recur)){
var G__15408 = state_15369;
state_15369 = G__15408;
continue;
} else {
return ret_value__13097__auto__;
}
break;
}
});
cljs$core$async$state_machine__13096__auto__ = function(state_15369){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13096__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13096__auto____1.call(this,state_15369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13096__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13096__auto____0;
cljs$core$async$state_machine__13096__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13096__auto____1;
return cljs$core$async$state_machine__13096__auto__;
})()
;})(switch__13095__auto__,c__13209__auto___15396,out))
})();
var state__13211__auto__ = (function (){var statearr_15391 = (f__13210__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13210__auto__.cljs$core$IFn$_invoke$arity$0() : f__13210__auto__.call(null));
(statearr_15391[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13209__auto___15396);

return statearr_15391;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13211__auto__);
});})(c__13209__auto___15396,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async15418 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15418 = (function (map_LT_,f,ch,meta15419){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta15419 = meta15419;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15418.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15420,meta15419__$1){
var self__ = this;
var _15420__$1 = this;
return (new cljs.core.async.t_cljs$core$async15418(self__.map_LT_,self__.f,self__.ch,meta15419__$1));
});

cljs.core.async.t_cljs$core$async15418.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15420){
var self__ = this;
var _15420__$1 = this;
return self__.meta15419;
});

cljs.core.async.t_cljs$core$async15418.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async15418.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async15418.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async15418.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async15418.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async15421 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15421 = (function (map_LT_,f,ch,meta15419,_,fn1,meta15422){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta15419 = meta15419;
this._ = _;
this.fn1 = fn1;
this.meta15422 = meta15422;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15421.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_15423,meta15422__$1){
var self__ = this;
var _15423__$1 = this;
return (new cljs.core.async.t_cljs$core$async15421(self__.map_LT_,self__.f,self__.ch,self__.meta15419,self__._,self__.fn1,meta15422__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async15421.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_15423){
var self__ = this;
var _15423__$1 = this;
return self__.meta15422;
});})(___$1))
;

cljs.core.async.t_cljs$core$async15421.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async15421.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async15421.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async15421.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__15409_SHARP_){
var G__15424 = (((p1__15409_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__15409_SHARP_) : self__.f.call(null,p1__15409_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__15424) : f1.call(null,G__15424));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async15421.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta15419,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async15418], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta15422], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async15421.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15421.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15421";

cljs.core.async.t_cljs$core$async15421.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write(writer__6755__auto__,"cljs.core.async/t_cljs$core$async15421");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async15421 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async15421(map_LT___$1,f__$1,ch__$1,meta15419__$1,___$2,fn1__$1,meta15422){
return (new cljs.core.async.t_cljs$core$async15421(map_LT___$1,f__$1,ch__$1,meta15419__$1,___$2,fn1__$1,meta15422));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async15421(self__.map_LT_,self__.f,self__.ch,self__.meta15419,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__6144__auto__ = ret;
if(cljs.core.truth_(and__6144__auto__)){
return !(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret)) == null));
} else {
return and__6144__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__15425 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__15425) : self__.f.call(null,G__15425));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async15418.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async15418.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async15418.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta15419], null);
});

cljs.core.async.t_cljs$core$async15418.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15418.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15418";

cljs.core.async.t_cljs$core$async15418.cljs$lang$ctorPrWriter = (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write(writer__6755__auto__,"cljs.core.async/t_cljs$core$async15418");
});

cljs.core.async.__GT_t_cljs$core$async15418 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async15418(map_LT___$1,f__$1,ch__$1,meta15419){
return (new cljs.core.async.t_cljs$core$async15418(map_LT___$1,f__$1,ch__$1,meta15419));
});

}

return (new cljs.core.async.t_cljs$core$async15418(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async15429 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15429 = (function (map_GT_,f,ch,meta15430){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta15430 = meta15430;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15429.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15431,meta15430__$1){
var self__ = this;
var _15431__$1 = this;
return (new cljs.core.async.t_cljs$core$async15429(self__.map_GT_,self__.f,self__.ch,meta15430__$1));
});

cljs.core.async.t_cljs$core$async15429.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15431){
var self__ = this;
var _15431__$1 = this;
return self__.meta15430;
});

cljs.core.async.t_cljs$core$async15429.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async15429.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async15429.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async15429.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async15429.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async15429.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async15429.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta15430], null);
});

cljs.core.async.t_cljs$core$async15429.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15429.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15429";

cljs.core.async.t_cljs$core$async15429.cljs$lang$ctorPrWriter = (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write(writer__6755__auto__,"cljs.core.async/t_cljs$core$async15429");
});

cljs.core.async.__GT_t_cljs$core$async15429 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async15429(map_GT___$1,f__$1,ch__$1,meta15430){
return (new cljs.core.async.t_cljs$core$async15429(map_GT___$1,f__$1,ch__$1,meta15430));
});

}

return (new cljs.core.async.t_cljs$core$async15429(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async15435 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15435 = (function (filter_GT_,p,ch,meta15436){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta15436 = meta15436;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15435.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15437,meta15436__$1){
var self__ = this;
var _15437__$1 = this;
return (new cljs.core.async.t_cljs$core$async15435(self__.filter_GT_,self__.p,self__.ch,meta15436__$1));
});

cljs.core.async.t_cljs$core$async15435.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15437){
var self__ = this;
var _15437__$1 = this;
return self__.meta15436;
});

cljs.core.async.t_cljs$core$async15435.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async15435.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async15435.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async15435.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async15435.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async15435.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async15435.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async15435.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$filter_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta15436], null);
});

cljs.core.async.t_cljs$core$async15435.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15435.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15435";

cljs.core.async.t_cljs$core$async15435.cljs$lang$ctorPrWriter = (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write(writer__6755__auto__,"cljs.core.async/t_cljs$core$async15435");
});

cljs.core.async.__GT_t_cljs$core$async15435 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async15435(filter_GT___$1,p__$1,ch__$1,meta15436){
return (new cljs.core.async.t_cljs$core$async15435(filter_GT___$1,p__$1,ch__$1,meta15436));
});

}

return (new cljs.core.async.t_cljs$core$async15435(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args15438 = [];
var len__7214__auto___15482 = arguments.length;
var i__7215__auto___15483 = (0);
while(true){
if((i__7215__auto___15483 < len__7214__auto___15482)){
args15438.push((arguments[i__7215__auto___15483]));

var G__15484 = (i__7215__auto___15483 + (1));
i__7215__auto___15483 = G__15484;
continue;
} else {
}
break;
}

var G__15440 = args15438.length;
switch (G__15440) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15438.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13209__auto___15486 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13209__auto___15486,out){
return (function (){
var f__13210__auto__ = (function (){var switch__13095__auto__ = ((function (c__13209__auto___15486,out){
return (function (state_15461){
var state_val_15462 = (state_15461[(1)]);
if((state_val_15462 === (7))){
var inst_15457 = (state_15461[(2)]);
var state_15461__$1 = state_15461;
var statearr_15463_15487 = state_15461__$1;
(statearr_15463_15487[(2)] = inst_15457);

(statearr_15463_15487[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15462 === (1))){
var state_15461__$1 = state_15461;
var statearr_15464_15488 = state_15461__$1;
(statearr_15464_15488[(2)] = null);

(statearr_15464_15488[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15462 === (4))){
var inst_15443 = (state_15461[(7)]);
var inst_15443__$1 = (state_15461[(2)]);
var inst_15444 = (inst_15443__$1 == null);
var state_15461__$1 = (function (){var statearr_15465 = state_15461;
(statearr_15465[(7)] = inst_15443__$1);

return statearr_15465;
})();
if(cljs.core.truth_(inst_15444)){
var statearr_15466_15489 = state_15461__$1;
(statearr_15466_15489[(1)] = (5));

} else {
var statearr_15467_15490 = state_15461__$1;
(statearr_15467_15490[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15462 === (6))){
var inst_15443 = (state_15461[(7)]);
var inst_15448 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15443) : p.call(null,inst_15443));
var state_15461__$1 = state_15461;
if(cljs.core.truth_(inst_15448)){
var statearr_15468_15491 = state_15461__$1;
(statearr_15468_15491[(1)] = (8));

} else {
var statearr_15469_15492 = state_15461__$1;
(statearr_15469_15492[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15462 === (3))){
var inst_15459 = (state_15461[(2)]);
var state_15461__$1 = state_15461;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15461__$1,inst_15459);
} else {
if((state_val_15462 === (2))){
var state_15461__$1 = state_15461;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15461__$1,(4),ch);
} else {
if((state_val_15462 === (11))){
var inst_15451 = (state_15461[(2)]);
var state_15461__$1 = state_15461;
var statearr_15470_15493 = state_15461__$1;
(statearr_15470_15493[(2)] = inst_15451);

(statearr_15470_15493[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15462 === (9))){
var state_15461__$1 = state_15461;
var statearr_15471_15494 = state_15461__$1;
(statearr_15471_15494[(2)] = null);

(statearr_15471_15494[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15462 === (5))){
var inst_15446 = cljs.core.async.close_BANG_(out);
var state_15461__$1 = state_15461;
var statearr_15472_15495 = state_15461__$1;
(statearr_15472_15495[(2)] = inst_15446);

(statearr_15472_15495[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15462 === (10))){
var inst_15454 = (state_15461[(2)]);
var state_15461__$1 = (function (){var statearr_15473 = state_15461;
(statearr_15473[(8)] = inst_15454);

return statearr_15473;
})();
var statearr_15474_15496 = state_15461__$1;
(statearr_15474_15496[(2)] = null);

(statearr_15474_15496[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15462 === (8))){
var inst_15443 = (state_15461[(7)]);
var state_15461__$1 = state_15461;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15461__$1,(11),out,inst_15443);
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
});})(c__13209__auto___15486,out))
;
return ((function (switch__13095__auto__,c__13209__auto___15486,out){
return (function() {
var cljs$core$async$state_machine__13096__auto__ = null;
var cljs$core$async$state_machine__13096__auto____0 = (function (){
var statearr_15478 = [null,null,null,null,null,null,null,null,null];
(statearr_15478[(0)] = cljs$core$async$state_machine__13096__auto__);

(statearr_15478[(1)] = (1));

return statearr_15478;
});
var cljs$core$async$state_machine__13096__auto____1 = (function (state_15461){
while(true){
var ret_value__13097__auto__ = (function (){try{while(true){
var result__13098__auto__ = switch__13095__auto__(state_15461);
if(cljs.core.keyword_identical_QMARK_(result__13098__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13098__auto__;
}
break;
}
}catch (e15479){if((e15479 instanceof Object)){
var ex__13099__auto__ = e15479;
var statearr_15480_15497 = state_15461;
(statearr_15480_15497[(5)] = ex__13099__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15461);

return cljs.core.cst$kw$recur;
} else {
throw e15479;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13097__auto__,cljs.core.cst$kw$recur)){
var G__15498 = state_15461;
state_15461 = G__15498;
continue;
} else {
return ret_value__13097__auto__;
}
break;
}
});
cljs$core$async$state_machine__13096__auto__ = function(state_15461){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13096__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13096__auto____1.call(this,state_15461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13096__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13096__auto____0;
cljs$core$async$state_machine__13096__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13096__auto____1;
return cljs$core$async$state_machine__13096__auto__;
})()
;})(switch__13095__auto__,c__13209__auto___15486,out))
})();
var state__13211__auto__ = (function (){var statearr_15481 = (f__13210__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13210__auto__.cljs$core$IFn$_invoke$arity$0() : f__13210__auto__.call(null));
(statearr_15481[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13209__auto___15486);

return statearr_15481;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13211__auto__);
});})(c__13209__auto___15486,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args15499 = [];
var len__7214__auto___15502 = arguments.length;
var i__7215__auto___15503 = (0);
while(true){
if((i__7215__auto___15503 < len__7214__auto___15502)){
args15499.push((arguments[i__7215__auto___15503]));

var G__15504 = (i__7215__auto___15503 + (1));
i__7215__auto___15503 = G__15504;
continue;
} else {
}
break;
}

var G__15501 = args15499.length;
switch (G__15501) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15499.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__13209__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13209__auto__){
return (function (){
var f__13210__auto__ = (function (){var switch__13095__auto__ = ((function (c__13209__auto__){
return (function (state_15671){
var state_val_15672 = (state_15671[(1)]);
if((state_val_15672 === (7))){
var inst_15667 = (state_15671[(2)]);
var state_15671__$1 = state_15671;
var statearr_15673_15714 = state_15671__$1;
(statearr_15673_15714[(2)] = inst_15667);

(statearr_15673_15714[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15672 === (20))){
var inst_15637 = (state_15671[(7)]);
var inst_15648 = (state_15671[(2)]);
var inst_15649 = cljs.core.next(inst_15637);
var inst_15623 = inst_15649;
var inst_15624 = null;
var inst_15625 = (0);
var inst_15626 = (0);
var state_15671__$1 = (function (){var statearr_15674 = state_15671;
(statearr_15674[(8)] = inst_15623);

(statearr_15674[(9)] = inst_15625);

(statearr_15674[(10)] = inst_15624);

(statearr_15674[(11)] = inst_15626);

(statearr_15674[(12)] = inst_15648);

return statearr_15674;
})();
var statearr_15675_15715 = state_15671__$1;
(statearr_15675_15715[(2)] = null);

(statearr_15675_15715[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15672 === (1))){
var state_15671__$1 = state_15671;
var statearr_15676_15716 = state_15671__$1;
(statearr_15676_15716[(2)] = null);

(statearr_15676_15716[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15672 === (4))){
var inst_15612 = (state_15671[(13)]);
var inst_15612__$1 = (state_15671[(2)]);
var inst_15613 = (inst_15612__$1 == null);
var state_15671__$1 = (function (){var statearr_15677 = state_15671;
(statearr_15677[(13)] = inst_15612__$1);

return statearr_15677;
})();
if(cljs.core.truth_(inst_15613)){
var statearr_15678_15717 = state_15671__$1;
(statearr_15678_15717[(1)] = (5));

} else {
var statearr_15679_15718 = state_15671__$1;
(statearr_15679_15718[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15672 === (15))){
var state_15671__$1 = state_15671;
var statearr_15683_15719 = state_15671__$1;
(statearr_15683_15719[(2)] = null);

(statearr_15683_15719[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15672 === (21))){
var state_15671__$1 = state_15671;
var statearr_15684_15720 = state_15671__$1;
(statearr_15684_15720[(2)] = null);

(statearr_15684_15720[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15672 === (13))){
var inst_15623 = (state_15671[(8)]);
var inst_15625 = (state_15671[(9)]);
var inst_15624 = (state_15671[(10)]);
var inst_15626 = (state_15671[(11)]);
var inst_15633 = (state_15671[(2)]);
var inst_15634 = (inst_15626 + (1));
var tmp15680 = inst_15623;
var tmp15681 = inst_15625;
var tmp15682 = inst_15624;
var inst_15623__$1 = tmp15680;
var inst_15624__$1 = tmp15682;
var inst_15625__$1 = tmp15681;
var inst_15626__$1 = inst_15634;
var state_15671__$1 = (function (){var statearr_15685 = state_15671;
(statearr_15685[(8)] = inst_15623__$1);

(statearr_15685[(9)] = inst_15625__$1);

(statearr_15685[(10)] = inst_15624__$1);

(statearr_15685[(11)] = inst_15626__$1);

(statearr_15685[(14)] = inst_15633);

return statearr_15685;
})();
var statearr_15686_15721 = state_15671__$1;
(statearr_15686_15721[(2)] = null);

(statearr_15686_15721[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15672 === (22))){
var state_15671__$1 = state_15671;
var statearr_15687_15722 = state_15671__$1;
(statearr_15687_15722[(2)] = null);

(statearr_15687_15722[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15672 === (6))){
var inst_15612 = (state_15671[(13)]);
var inst_15621 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_15612) : f.call(null,inst_15612));
var inst_15622 = cljs.core.seq(inst_15621);
var inst_15623 = inst_15622;
var inst_15624 = null;
var inst_15625 = (0);
var inst_15626 = (0);
var state_15671__$1 = (function (){var statearr_15688 = state_15671;
(statearr_15688[(8)] = inst_15623);

(statearr_15688[(9)] = inst_15625);

(statearr_15688[(10)] = inst_15624);

(statearr_15688[(11)] = inst_15626);

return statearr_15688;
})();
var statearr_15689_15723 = state_15671__$1;
(statearr_15689_15723[(2)] = null);

(statearr_15689_15723[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15672 === (17))){
var inst_15637 = (state_15671[(7)]);
var inst_15641 = cljs.core.chunk_first(inst_15637);
var inst_15642 = cljs.core.chunk_rest(inst_15637);
var inst_15643 = cljs.core.count(inst_15641);
var inst_15623 = inst_15642;
var inst_15624 = inst_15641;
var inst_15625 = inst_15643;
var inst_15626 = (0);
var state_15671__$1 = (function (){var statearr_15690 = state_15671;
(statearr_15690[(8)] = inst_15623);

(statearr_15690[(9)] = inst_15625);

(statearr_15690[(10)] = inst_15624);

(statearr_15690[(11)] = inst_15626);

return statearr_15690;
})();
var statearr_15691_15724 = state_15671__$1;
(statearr_15691_15724[(2)] = null);

(statearr_15691_15724[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15672 === (3))){
var inst_15669 = (state_15671[(2)]);
var state_15671__$1 = state_15671;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15671__$1,inst_15669);
} else {
if((state_val_15672 === (12))){
var inst_15657 = (state_15671[(2)]);
var state_15671__$1 = state_15671;
var statearr_15692_15725 = state_15671__$1;
(statearr_15692_15725[(2)] = inst_15657);

(statearr_15692_15725[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15672 === (2))){
var state_15671__$1 = state_15671;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15671__$1,(4),in$);
} else {
if((state_val_15672 === (23))){
var inst_15665 = (state_15671[(2)]);
var state_15671__$1 = state_15671;
var statearr_15693_15726 = state_15671__$1;
(statearr_15693_15726[(2)] = inst_15665);

(statearr_15693_15726[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15672 === (19))){
var inst_15652 = (state_15671[(2)]);
var state_15671__$1 = state_15671;
var statearr_15694_15727 = state_15671__$1;
(statearr_15694_15727[(2)] = inst_15652);

(statearr_15694_15727[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15672 === (11))){
var inst_15623 = (state_15671[(8)]);
var inst_15637 = (state_15671[(7)]);
var inst_15637__$1 = cljs.core.seq(inst_15623);
var state_15671__$1 = (function (){var statearr_15695 = state_15671;
(statearr_15695[(7)] = inst_15637__$1);

return statearr_15695;
})();
if(inst_15637__$1){
var statearr_15696_15728 = state_15671__$1;
(statearr_15696_15728[(1)] = (14));

} else {
var statearr_15697_15729 = state_15671__$1;
(statearr_15697_15729[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15672 === (9))){
var inst_15659 = (state_15671[(2)]);
var inst_15660 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_15671__$1 = (function (){var statearr_15698 = state_15671;
(statearr_15698[(15)] = inst_15659);

return statearr_15698;
})();
if(cljs.core.truth_(inst_15660)){
var statearr_15699_15730 = state_15671__$1;
(statearr_15699_15730[(1)] = (21));

} else {
var statearr_15700_15731 = state_15671__$1;
(statearr_15700_15731[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15672 === (5))){
var inst_15615 = cljs.core.async.close_BANG_(out);
var state_15671__$1 = state_15671;
var statearr_15701_15732 = state_15671__$1;
(statearr_15701_15732[(2)] = inst_15615);

(statearr_15701_15732[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15672 === (14))){
var inst_15637 = (state_15671[(7)]);
var inst_15639 = cljs.core.chunked_seq_QMARK_(inst_15637);
var state_15671__$1 = state_15671;
if(inst_15639){
var statearr_15702_15733 = state_15671__$1;
(statearr_15702_15733[(1)] = (17));

} else {
var statearr_15703_15734 = state_15671__$1;
(statearr_15703_15734[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15672 === (16))){
var inst_15655 = (state_15671[(2)]);
var state_15671__$1 = state_15671;
var statearr_15704_15735 = state_15671__$1;
(statearr_15704_15735[(2)] = inst_15655);

(statearr_15704_15735[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15672 === (10))){
var inst_15624 = (state_15671[(10)]);
var inst_15626 = (state_15671[(11)]);
var inst_15631 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_15624,inst_15626);
var state_15671__$1 = state_15671;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15671__$1,(13),out,inst_15631);
} else {
if((state_val_15672 === (18))){
var inst_15637 = (state_15671[(7)]);
var inst_15646 = cljs.core.first(inst_15637);
var state_15671__$1 = state_15671;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15671__$1,(20),out,inst_15646);
} else {
if((state_val_15672 === (8))){
var inst_15625 = (state_15671[(9)]);
var inst_15626 = (state_15671[(11)]);
var inst_15628 = (inst_15626 < inst_15625);
var inst_15629 = inst_15628;
var state_15671__$1 = state_15671;
if(cljs.core.truth_(inst_15629)){
var statearr_15705_15736 = state_15671__$1;
(statearr_15705_15736[(1)] = (10));

} else {
var statearr_15706_15737 = state_15671__$1;
(statearr_15706_15737[(1)] = (11));

}

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
});})(c__13209__auto__))
;
return ((function (switch__13095__auto__,c__13209__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__13096__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__13096__auto____0 = (function (){
var statearr_15710 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15710[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__13096__auto__);

(statearr_15710[(1)] = (1));

return statearr_15710;
});
var cljs$core$async$mapcat_STAR__$_state_machine__13096__auto____1 = (function (state_15671){
while(true){
var ret_value__13097__auto__ = (function (){try{while(true){
var result__13098__auto__ = switch__13095__auto__(state_15671);
if(cljs.core.keyword_identical_QMARK_(result__13098__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13098__auto__;
}
break;
}
}catch (e15711){if((e15711 instanceof Object)){
var ex__13099__auto__ = e15711;
var statearr_15712_15738 = state_15671;
(statearr_15712_15738[(5)] = ex__13099__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15671);

return cljs.core.cst$kw$recur;
} else {
throw e15711;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13097__auto__,cljs.core.cst$kw$recur)){
var G__15739 = state_15671;
state_15671 = G__15739;
continue;
} else {
return ret_value__13097__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__13096__auto__ = function(state_15671){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__13096__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__13096__auto____1.call(this,state_15671);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__13096__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__13096__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__13096__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__13096__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__13096__auto__;
})()
;})(switch__13095__auto__,c__13209__auto__))
})();
var state__13211__auto__ = (function (){var statearr_15713 = (f__13210__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13210__auto__.cljs$core$IFn$_invoke$arity$0() : f__13210__auto__.call(null));
(statearr_15713[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13209__auto__);

return statearr_15713;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13211__auto__);
});})(c__13209__auto__))
);

return c__13209__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args15740 = [];
var len__7214__auto___15743 = arguments.length;
var i__7215__auto___15744 = (0);
while(true){
if((i__7215__auto___15744 < len__7214__auto___15743)){
args15740.push((arguments[i__7215__auto___15744]));

var G__15745 = (i__7215__auto___15744 + (1));
i__7215__auto___15744 = G__15745;
continue;
} else {
}
break;
}

var G__15742 = args15740.length;
switch (G__15742) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15740.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args15747 = [];
var len__7214__auto___15750 = arguments.length;
var i__7215__auto___15751 = (0);
while(true){
if((i__7215__auto___15751 < len__7214__auto___15750)){
args15747.push((arguments[i__7215__auto___15751]));

var G__15752 = (i__7215__auto___15751 + (1));
i__7215__auto___15751 = G__15752;
continue;
} else {
}
break;
}

var G__15749 = args15747.length;
switch (G__15749) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15747.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args15754 = [];
var len__7214__auto___15805 = arguments.length;
var i__7215__auto___15806 = (0);
while(true){
if((i__7215__auto___15806 < len__7214__auto___15805)){
args15754.push((arguments[i__7215__auto___15806]));

var G__15807 = (i__7215__auto___15806 + (1));
i__7215__auto___15806 = G__15807;
continue;
} else {
}
break;
}

var G__15756 = args15754.length;
switch (G__15756) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15754.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13209__auto___15809 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13209__auto___15809,out){
return (function (){
var f__13210__auto__ = (function (){var switch__13095__auto__ = ((function (c__13209__auto___15809,out){
return (function (state_15780){
var state_val_15781 = (state_15780[(1)]);
if((state_val_15781 === (7))){
var inst_15775 = (state_15780[(2)]);
var state_15780__$1 = state_15780;
var statearr_15782_15810 = state_15780__$1;
(statearr_15782_15810[(2)] = inst_15775);

(statearr_15782_15810[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15781 === (1))){
var inst_15757 = null;
var state_15780__$1 = (function (){var statearr_15783 = state_15780;
(statearr_15783[(7)] = inst_15757);

return statearr_15783;
})();
var statearr_15784_15811 = state_15780__$1;
(statearr_15784_15811[(2)] = null);

(statearr_15784_15811[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15781 === (4))){
var inst_15760 = (state_15780[(8)]);
var inst_15760__$1 = (state_15780[(2)]);
var inst_15761 = (inst_15760__$1 == null);
var inst_15762 = cljs.core.not(inst_15761);
var state_15780__$1 = (function (){var statearr_15785 = state_15780;
(statearr_15785[(8)] = inst_15760__$1);

return statearr_15785;
})();
if(inst_15762){
var statearr_15786_15812 = state_15780__$1;
(statearr_15786_15812[(1)] = (5));

} else {
var statearr_15787_15813 = state_15780__$1;
(statearr_15787_15813[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15781 === (6))){
var state_15780__$1 = state_15780;
var statearr_15788_15814 = state_15780__$1;
(statearr_15788_15814[(2)] = null);

(statearr_15788_15814[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15781 === (3))){
var inst_15777 = (state_15780[(2)]);
var inst_15778 = cljs.core.async.close_BANG_(out);
var state_15780__$1 = (function (){var statearr_15789 = state_15780;
(statearr_15789[(9)] = inst_15777);

return statearr_15789;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15780__$1,inst_15778);
} else {
if((state_val_15781 === (2))){
var state_15780__$1 = state_15780;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15780__$1,(4),ch);
} else {
if((state_val_15781 === (11))){
var inst_15760 = (state_15780[(8)]);
var inst_15769 = (state_15780[(2)]);
var inst_15757 = inst_15760;
var state_15780__$1 = (function (){var statearr_15790 = state_15780;
(statearr_15790[(7)] = inst_15757);

(statearr_15790[(10)] = inst_15769);

return statearr_15790;
})();
var statearr_15791_15815 = state_15780__$1;
(statearr_15791_15815[(2)] = null);

(statearr_15791_15815[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15781 === (9))){
var inst_15760 = (state_15780[(8)]);
var state_15780__$1 = state_15780;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15780__$1,(11),out,inst_15760);
} else {
if((state_val_15781 === (5))){
var inst_15757 = (state_15780[(7)]);
var inst_15760 = (state_15780[(8)]);
var inst_15764 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15760,inst_15757);
var state_15780__$1 = state_15780;
if(inst_15764){
var statearr_15793_15816 = state_15780__$1;
(statearr_15793_15816[(1)] = (8));

} else {
var statearr_15794_15817 = state_15780__$1;
(statearr_15794_15817[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15781 === (10))){
var inst_15772 = (state_15780[(2)]);
var state_15780__$1 = state_15780;
var statearr_15795_15818 = state_15780__$1;
(statearr_15795_15818[(2)] = inst_15772);

(statearr_15795_15818[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15781 === (8))){
var inst_15757 = (state_15780[(7)]);
var tmp15792 = inst_15757;
var inst_15757__$1 = tmp15792;
var state_15780__$1 = (function (){var statearr_15796 = state_15780;
(statearr_15796[(7)] = inst_15757__$1);

return statearr_15796;
})();
var statearr_15797_15819 = state_15780__$1;
(statearr_15797_15819[(2)] = null);

(statearr_15797_15819[(1)] = (2));


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
});})(c__13209__auto___15809,out))
;
return ((function (switch__13095__auto__,c__13209__auto___15809,out){
return (function() {
var cljs$core$async$state_machine__13096__auto__ = null;
var cljs$core$async$state_machine__13096__auto____0 = (function (){
var statearr_15801 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15801[(0)] = cljs$core$async$state_machine__13096__auto__);

(statearr_15801[(1)] = (1));

return statearr_15801;
});
var cljs$core$async$state_machine__13096__auto____1 = (function (state_15780){
while(true){
var ret_value__13097__auto__ = (function (){try{while(true){
var result__13098__auto__ = switch__13095__auto__(state_15780);
if(cljs.core.keyword_identical_QMARK_(result__13098__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13098__auto__;
}
break;
}
}catch (e15802){if((e15802 instanceof Object)){
var ex__13099__auto__ = e15802;
var statearr_15803_15820 = state_15780;
(statearr_15803_15820[(5)] = ex__13099__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15780);

return cljs.core.cst$kw$recur;
} else {
throw e15802;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13097__auto__,cljs.core.cst$kw$recur)){
var G__15821 = state_15780;
state_15780 = G__15821;
continue;
} else {
return ret_value__13097__auto__;
}
break;
}
});
cljs$core$async$state_machine__13096__auto__ = function(state_15780){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13096__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13096__auto____1.call(this,state_15780);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13096__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13096__auto____0;
cljs$core$async$state_machine__13096__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13096__auto____1;
return cljs$core$async$state_machine__13096__auto__;
})()
;})(switch__13095__auto__,c__13209__auto___15809,out))
})();
var state__13211__auto__ = (function (){var statearr_15804 = (f__13210__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13210__auto__.cljs$core$IFn$_invoke$arity$0() : f__13210__auto__.call(null));
(statearr_15804[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13209__auto___15809);

return statearr_15804;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13211__auto__);
});})(c__13209__auto___15809,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args15822 = [];
var len__7214__auto___15892 = arguments.length;
var i__7215__auto___15893 = (0);
while(true){
if((i__7215__auto___15893 < len__7214__auto___15892)){
args15822.push((arguments[i__7215__auto___15893]));

var G__15894 = (i__7215__auto___15893 + (1));
i__7215__auto___15893 = G__15894;
continue;
} else {
}
break;
}

var G__15824 = args15822.length;
switch (G__15824) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15822.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13209__auto___15896 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13209__auto___15896,out){
return (function (){
var f__13210__auto__ = (function (){var switch__13095__auto__ = ((function (c__13209__auto___15896,out){
return (function (state_15862){
var state_val_15863 = (state_15862[(1)]);
if((state_val_15863 === (7))){
var inst_15858 = (state_15862[(2)]);
var state_15862__$1 = state_15862;
var statearr_15864_15897 = state_15862__$1;
(statearr_15864_15897[(2)] = inst_15858);

(statearr_15864_15897[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15863 === (1))){
var inst_15825 = (new Array(n));
var inst_15826 = inst_15825;
var inst_15827 = (0);
var state_15862__$1 = (function (){var statearr_15865 = state_15862;
(statearr_15865[(7)] = inst_15826);

(statearr_15865[(8)] = inst_15827);

return statearr_15865;
})();
var statearr_15866_15898 = state_15862__$1;
(statearr_15866_15898[(2)] = null);

(statearr_15866_15898[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15863 === (4))){
var inst_15830 = (state_15862[(9)]);
var inst_15830__$1 = (state_15862[(2)]);
var inst_15831 = (inst_15830__$1 == null);
var inst_15832 = cljs.core.not(inst_15831);
var state_15862__$1 = (function (){var statearr_15867 = state_15862;
(statearr_15867[(9)] = inst_15830__$1);

return statearr_15867;
})();
if(inst_15832){
var statearr_15868_15899 = state_15862__$1;
(statearr_15868_15899[(1)] = (5));

} else {
var statearr_15869_15900 = state_15862__$1;
(statearr_15869_15900[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15863 === (15))){
var inst_15852 = (state_15862[(2)]);
var state_15862__$1 = state_15862;
var statearr_15870_15901 = state_15862__$1;
(statearr_15870_15901[(2)] = inst_15852);

(statearr_15870_15901[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15863 === (13))){
var state_15862__$1 = state_15862;
var statearr_15871_15902 = state_15862__$1;
(statearr_15871_15902[(2)] = null);

(statearr_15871_15902[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15863 === (6))){
var inst_15827 = (state_15862[(8)]);
var inst_15848 = (inst_15827 > (0));
var state_15862__$1 = state_15862;
if(cljs.core.truth_(inst_15848)){
var statearr_15872_15903 = state_15862__$1;
(statearr_15872_15903[(1)] = (12));

} else {
var statearr_15873_15904 = state_15862__$1;
(statearr_15873_15904[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15863 === (3))){
var inst_15860 = (state_15862[(2)]);
var state_15862__$1 = state_15862;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15862__$1,inst_15860);
} else {
if((state_val_15863 === (12))){
var inst_15826 = (state_15862[(7)]);
var inst_15850 = cljs.core.vec(inst_15826);
var state_15862__$1 = state_15862;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15862__$1,(15),out,inst_15850);
} else {
if((state_val_15863 === (2))){
var state_15862__$1 = state_15862;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15862__$1,(4),ch);
} else {
if((state_val_15863 === (11))){
var inst_15842 = (state_15862[(2)]);
var inst_15843 = (new Array(n));
var inst_15826 = inst_15843;
var inst_15827 = (0);
var state_15862__$1 = (function (){var statearr_15874 = state_15862;
(statearr_15874[(7)] = inst_15826);

(statearr_15874[(10)] = inst_15842);

(statearr_15874[(8)] = inst_15827);

return statearr_15874;
})();
var statearr_15875_15905 = state_15862__$1;
(statearr_15875_15905[(2)] = null);

(statearr_15875_15905[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15863 === (9))){
var inst_15826 = (state_15862[(7)]);
var inst_15840 = cljs.core.vec(inst_15826);
var state_15862__$1 = state_15862;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15862__$1,(11),out,inst_15840);
} else {
if((state_val_15863 === (5))){
var inst_15830 = (state_15862[(9)]);
var inst_15826 = (state_15862[(7)]);
var inst_15827 = (state_15862[(8)]);
var inst_15835 = (state_15862[(11)]);
var inst_15834 = (inst_15826[inst_15827] = inst_15830);
var inst_15835__$1 = (inst_15827 + (1));
var inst_15836 = (inst_15835__$1 < n);
var state_15862__$1 = (function (){var statearr_15876 = state_15862;
(statearr_15876[(12)] = inst_15834);

(statearr_15876[(11)] = inst_15835__$1);

return statearr_15876;
})();
if(cljs.core.truth_(inst_15836)){
var statearr_15877_15906 = state_15862__$1;
(statearr_15877_15906[(1)] = (8));

} else {
var statearr_15878_15907 = state_15862__$1;
(statearr_15878_15907[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15863 === (14))){
var inst_15855 = (state_15862[(2)]);
var inst_15856 = cljs.core.async.close_BANG_(out);
var state_15862__$1 = (function (){var statearr_15880 = state_15862;
(statearr_15880[(13)] = inst_15855);

return statearr_15880;
})();
var statearr_15881_15908 = state_15862__$1;
(statearr_15881_15908[(2)] = inst_15856);

(statearr_15881_15908[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15863 === (10))){
var inst_15846 = (state_15862[(2)]);
var state_15862__$1 = state_15862;
var statearr_15882_15909 = state_15862__$1;
(statearr_15882_15909[(2)] = inst_15846);

(statearr_15882_15909[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15863 === (8))){
var inst_15826 = (state_15862[(7)]);
var inst_15835 = (state_15862[(11)]);
var tmp15879 = inst_15826;
var inst_15826__$1 = tmp15879;
var inst_15827 = inst_15835;
var state_15862__$1 = (function (){var statearr_15883 = state_15862;
(statearr_15883[(7)] = inst_15826__$1);

(statearr_15883[(8)] = inst_15827);

return statearr_15883;
})();
var statearr_15884_15910 = state_15862__$1;
(statearr_15884_15910[(2)] = null);

(statearr_15884_15910[(1)] = (2));


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
});})(c__13209__auto___15896,out))
;
return ((function (switch__13095__auto__,c__13209__auto___15896,out){
return (function() {
var cljs$core$async$state_machine__13096__auto__ = null;
var cljs$core$async$state_machine__13096__auto____0 = (function (){
var statearr_15888 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15888[(0)] = cljs$core$async$state_machine__13096__auto__);

(statearr_15888[(1)] = (1));

return statearr_15888;
});
var cljs$core$async$state_machine__13096__auto____1 = (function (state_15862){
while(true){
var ret_value__13097__auto__ = (function (){try{while(true){
var result__13098__auto__ = switch__13095__auto__(state_15862);
if(cljs.core.keyword_identical_QMARK_(result__13098__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13098__auto__;
}
break;
}
}catch (e15889){if((e15889 instanceof Object)){
var ex__13099__auto__ = e15889;
var statearr_15890_15911 = state_15862;
(statearr_15890_15911[(5)] = ex__13099__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15862);

return cljs.core.cst$kw$recur;
} else {
throw e15889;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13097__auto__,cljs.core.cst$kw$recur)){
var G__15912 = state_15862;
state_15862 = G__15912;
continue;
} else {
return ret_value__13097__auto__;
}
break;
}
});
cljs$core$async$state_machine__13096__auto__ = function(state_15862){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13096__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13096__auto____1.call(this,state_15862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13096__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13096__auto____0;
cljs$core$async$state_machine__13096__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13096__auto____1;
return cljs$core$async$state_machine__13096__auto__;
})()
;})(switch__13095__auto__,c__13209__auto___15896,out))
})();
var state__13211__auto__ = (function (){var statearr_15891 = (f__13210__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13210__auto__.cljs$core$IFn$_invoke$arity$0() : f__13210__auto__.call(null));
(statearr_15891[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13209__auto___15896);

return statearr_15891;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13211__auto__);
});})(c__13209__auto___15896,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args15913 = [];
var len__7214__auto___15987 = arguments.length;
var i__7215__auto___15988 = (0);
while(true){
if((i__7215__auto___15988 < len__7214__auto___15987)){
args15913.push((arguments[i__7215__auto___15988]));

var G__15989 = (i__7215__auto___15988 + (1));
i__7215__auto___15988 = G__15989;
continue;
} else {
}
break;
}

var G__15915 = args15913.length;
switch (G__15915) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15913.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13209__auto___15991 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13209__auto___15991,out){
return (function (){
var f__13210__auto__ = (function (){var switch__13095__auto__ = ((function (c__13209__auto___15991,out){
return (function (state_15957){
var state_val_15958 = (state_15957[(1)]);
if((state_val_15958 === (7))){
var inst_15953 = (state_15957[(2)]);
var state_15957__$1 = state_15957;
var statearr_15959_15992 = state_15957__$1;
(statearr_15959_15992[(2)] = inst_15953);

(statearr_15959_15992[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15958 === (1))){
var inst_15916 = [];
var inst_15917 = inst_15916;
var inst_15918 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_15957__$1 = (function (){var statearr_15960 = state_15957;
(statearr_15960[(7)] = inst_15918);

(statearr_15960[(8)] = inst_15917);

return statearr_15960;
})();
var statearr_15961_15993 = state_15957__$1;
(statearr_15961_15993[(2)] = null);

(statearr_15961_15993[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15958 === (4))){
var inst_15921 = (state_15957[(9)]);
var inst_15921__$1 = (state_15957[(2)]);
var inst_15922 = (inst_15921__$1 == null);
var inst_15923 = cljs.core.not(inst_15922);
var state_15957__$1 = (function (){var statearr_15962 = state_15957;
(statearr_15962[(9)] = inst_15921__$1);

return statearr_15962;
})();
if(inst_15923){
var statearr_15963_15994 = state_15957__$1;
(statearr_15963_15994[(1)] = (5));

} else {
var statearr_15964_15995 = state_15957__$1;
(statearr_15964_15995[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15958 === (15))){
var inst_15947 = (state_15957[(2)]);
var state_15957__$1 = state_15957;
var statearr_15965_15996 = state_15957__$1;
(statearr_15965_15996[(2)] = inst_15947);

(statearr_15965_15996[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15958 === (13))){
var state_15957__$1 = state_15957;
var statearr_15966_15997 = state_15957__$1;
(statearr_15966_15997[(2)] = null);

(statearr_15966_15997[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15958 === (6))){
var inst_15917 = (state_15957[(8)]);
var inst_15942 = inst_15917.length;
var inst_15943 = (inst_15942 > (0));
var state_15957__$1 = state_15957;
if(cljs.core.truth_(inst_15943)){
var statearr_15967_15998 = state_15957__$1;
(statearr_15967_15998[(1)] = (12));

} else {
var statearr_15968_15999 = state_15957__$1;
(statearr_15968_15999[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15958 === (3))){
var inst_15955 = (state_15957[(2)]);
var state_15957__$1 = state_15957;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15957__$1,inst_15955);
} else {
if((state_val_15958 === (12))){
var inst_15917 = (state_15957[(8)]);
var inst_15945 = cljs.core.vec(inst_15917);
var state_15957__$1 = state_15957;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15957__$1,(15),out,inst_15945);
} else {
if((state_val_15958 === (2))){
var state_15957__$1 = state_15957;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15957__$1,(4),ch);
} else {
if((state_val_15958 === (11))){
var inst_15925 = (state_15957[(10)]);
var inst_15921 = (state_15957[(9)]);
var inst_15935 = (state_15957[(2)]);
var inst_15936 = [];
var inst_15937 = inst_15936.push(inst_15921);
var inst_15917 = inst_15936;
var inst_15918 = inst_15925;
var state_15957__$1 = (function (){var statearr_15969 = state_15957;
(statearr_15969[(7)] = inst_15918);

(statearr_15969[(8)] = inst_15917);

(statearr_15969[(11)] = inst_15935);

(statearr_15969[(12)] = inst_15937);

return statearr_15969;
})();
var statearr_15970_16000 = state_15957__$1;
(statearr_15970_16000[(2)] = null);

(statearr_15970_16000[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15958 === (9))){
var inst_15917 = (state_15957[(8)]);
var inst_15933 = cljs.core.vec(inst_15917);
var state_15957__$1 = state_15957;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15957__$1,(11),out,inst_15933);
} else {
if((state_val_15958 === (5))){
var inst_15918 = (state_15957[(7)]);
var inst_15925 = (state_15957[(10)]);
var inst_15921 = (state_15957[(9)]);
var inst_15925__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_15921) : f.call(null,inst_15921));
var inst_15926 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15925__$1,inst_15918);
var inst_15927 = cljs.core.keyword_identical_QMARK_(inst_15918,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_15928 = (inst_15926) || (inst_15927);
var state_15957__$1 = (function (){var statearr_15971 = state_15957;
(statearr_15971[(10)] = inst_15925__$1);

return statearr_15971;
})();
if(cljs.core.truth_(inst_15928)){
var statearr_15972_16001 = state_15957__$1;
(statearr_15972_16001[(1)] = (8));

} else {
var statearr_15973_16002 = state_15957__$1;
(statearr_15973_16002[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15958 === (14))){
var inst_15950 = (state_15957[(2)]);
var inst_15951 = cljs.core.async.close_BANG_(out);
var state_15957__$1 = (function (){var statearr_15975 = state_15957;
(statearr_15975[(13)] = inst_15950);

return statearr_15975;
})();
var statearr_15976_16003 = state_15957__$1;
(statearr_15976_16003[(2)] = inst_15951);

(statearr_15976_16003[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15958 === (10))){
var inst_15940 = (state_15957[(2)]);
var state_15957__$1 = state_15957;
var statearr_15977_16004 = state_15957__$1;
(statearr_15977_16004[(2)] = inst_15940);

(statearr_15977_16004[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15958 === (8))){
var inst_15917 = (state_15957[(8)]);
var inst_15925 = (state_15957[(10)]);
var inst_15921 = (state_15957[(9)]);
var inst_15930 = inst_15917.push(inst_15921);
var tmp15974 = inst_15917;
var inst_15917__$1 = tmp15974;
var inst_15918 = inst_15925;
var state_15957__$1 = (function (){var statearr_15978 = state_15957;
(statearr_15978[(7)] = inst_15918);

(statearr_15978[(8)] = inst_15917__$1);

(statearr_15978[(14)] = inst_15930);

return statearr_15978;
})();
var statearr_15979_16005 = state_15957__$1;
(statearr_15979_16005[(2)] = null);

(statearr_15979_16005[(1)] = (2));


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
});})(c__13209__auto___15991,out))
;
return ((function (switch__13095__auto__,c__13209__auto___15991,out){
return (function() {
var cljs$core$async$state_machine__13096__auto__ = null;
var cljs$core$async$state_machine__13096__auto____0 = (function (){
var statearr_15983 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15983[(0)] = cljs$core$async$state_machine__13096__auto__);

(statearr_15983[(1)] = (1));

return statearr_15983;
});
var cljs$core$async$state_machine__13096__auto____1 = (function (state_15957){
while(true){
var ret_value__13097__auto__ = (function (){try{while(true){
var result__13098__auto__ = switch__13095__auto__(state_15957);
if(cljs.core.keyword_identical_QMARK_(result__13098__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13098__auto__;
}
break;
}
}catch (e15984){if((e15984 instanceof Object)){
var ex__13099__auto__ = e15984;
var statearr_15985_16006 = state_15957;
(statearr_15985_16006[(5)] = ex__13099__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15957);

return cljs.core.cst$kw$recur;
} else {
throw e15984;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13097__auto__,cljs.core.cst$kw$recur)){
var G__16007 = state_15957;
state_15957 = G__16007;
continue;
} else {
return ret_value__13097__auto__;
}
break;
}
});
cljs$core$async$state_machine__13096__auto__ = function(state_15957){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13096__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13096__auto____1.call(this,state_15957);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13096__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13096__auto____0;
cljs$core$async$state_machine__13096__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13096__auto____1;
return cljs$core$async$state_machine__13096__auto__;
})()
;})(switch__13095__auto__,c__13209__auto___15991,out))
})();
var state__13211__auto__ = (function (){var statearr_15986 = (f__13210__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13210__auto__.cljs$core$IFn$_invoke$arity$0() : f__13210__auto__.call(null));
(statearr_15986[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13209__auto___15991);

return statearr_15986;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13211__auto__);
});})(c__13209__auto___15991,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;
