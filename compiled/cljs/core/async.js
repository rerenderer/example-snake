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
var args23595 = [];
var len__7214__auto___23601 = arguments.length;
var i__7215__auto___23602 = (0);
while(true){
if((i__7215__auto___23602 < len__7214__auto___23601)){
args23595.push((arguments[i__7215__auto___23602]));

var G__23603 = (i__7215__auto___23602 + (1));
i__7215__auto___23602 = G__23603;
continue;
} else {
}
break;
}

var G__23597 = args23595.length;
switch (G__23597) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23595.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async23598 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23598 = (function (f,blockable,meta23599){
this.f = f;
this.blockable = blockable;
this.meta23599 = meta23599;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23598.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23600,meta23599__$1){
var self__ = this;
var _23600__$1 = this;
return (new cljs.core.async.t_cljs$core$async23598(self__.f,self__.blockable,meta23599__$1));
});

cljs.core.async.t_cljs$core$async23598.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23600){
var self__ = this;
var _23600__$1 = this;
return self__.meta23599;
});

cljs.core.async.t_cljs$core$async23598.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23598.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23598.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async23598.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async23598.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta23599], null);
});

cljs.core.async.t_cljs$core$async23598.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23598.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23598";

cljs.core.async.t_cljs$core$async23598.cljs$lang$ctorPrWriter = (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write(writer__6755__auto__,"cljs.core.async/t_cljs$core$async23598");
});

cljs.core.async.__GT_t_cljs$core$async23598 = (function cljs$core$async$__GT_t_cljs$core$async23598(f__$1,blockable__$1,meta23599){
return (new cljs.core.async.t_cljs$core$async23598(f__$1,blockable__$1,meta23599));
});

}

return (new cljs.core.async.t_cljs$core$async23598(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args23607 = [];
var len__7214__auto___23610 = arguments.length;
var i__7215__auto___23611 = (0);
while(true){
if((i__7215__auto___23611 < len__7214__auto___23610)){
args23607.push((arguments[i__7215__auto___23611]));

var G__23612 = (i__7215__auto___23611 + (1));
i__7215__auto___23611 = G__23612;
continue;
} else {
}
break;
}

var G__23609 = args23607.length;
switch (G__23609) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23607.length)].join('')));

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
var args23614 = [];
var len__7214__auto___23617 = arguments.length;
var i__7215__auto___23618 = (0);
while(true){
if((i__7215__auto___23618 < len__7214__auto___23617)){
args23614.push((arguments[i__7215__auto___23618]));

var G__23619 = (i__7215__auto___23618 + (1));
i__7215__auto___23618 = G__23619;
continue;
} else {
}
break;
}

var G__23616 = args23614.length;
switch (G__23616) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23614.length)].join('')));

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
var args23621 = [];
var len__7214__auto___23624 = arguments.length;
var i__7215__auto___23625 = (0);
while(true){
if((i__7215__auto___23625 < len__7214__auto___23624)){
args23621.push((arguments[i__7215__auto___23625]));

var G__23626 = (i__7215__auto___23625 + (1));
i__7215__auto___23625 = G__23626;
continue;
} else {
}
break;
}

var G__23623 = args23621.length;
switch (G__23623) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23621.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_23628 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_23628) : fn1.call(null,val_23628));
} else {
cljs.core.async.impl.dispatch.run(((function (val_23628,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_23628) : fn1.call(null,val_23628));
});})(val_23628,ret))
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
var args23629 = [];
var len__7214__auto___23632 = arguments.length;
var i__7215__auto___23633 = (0);
while(true){
if((i__7215__auto___23633 < len__7214__auto___23632)){
args23629.push((arguments[i__7215__auto___23633]));

var G__23634 = (i__7215__auto___23633 + (1));
i__7215__auto___23633 = G__23634;
continue;
} else {
}
break;
}

var G__23631 = args23629.length;
switch (G__23631) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23629.length)].join('')));

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
var n__7059__auto___23636 = n;
var x_23637 = (0);
while(true){
if((x_23637 < n__7059__auto___23636)){
(a[x_23637] = (0));

var G__23638 = (x_23637 + (1));
x_23637 = G__23638;
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

var G__23639 = (i + (1));
i = G__23639;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true) : cljs.core.atom.call(null,true));
if(typeof cljs.core.async.t_cljs$core$async23643 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23643 = (function (alt_flag,flag,meta23644){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta23644 = meta23644;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23643.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_23645,meta23644__$1){
var self__ = this;
var _23645__$1 = this;
return (new cljs.core.async.t_cljs$core$async23643(self__.alt_flag,self__.flag,meta23644__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async23643.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_23645){
var self__ = this;
var _23645__$1 = this;
return self__.meta23644;
});})(flag))
;

cljs.core.async.t_cljs$core$async23643.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23643.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.flag) : cljs.core.deref.call(null,self__.flag));
});})(flag))
;

cljs.core.async.t_cljs$core$async23643.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23643.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.flag,null) : cljs.core.reset_BANG_.call(null,self__.flag,null));

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23643.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_flag,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$meta23644], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async23643.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23643.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23643";

cljs.core.async.t_cljs$core$async23643.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write(writer__6755__auto__,"cljs.core.async/t_cljs$core$async23643");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async23643 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async23643(alt_flag__$1,flag__$1,meta23644){
return (new cljs.core.async.t_cljs$core$async23643(alt_flag__$1,flag__$1,meta23644));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async23643(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async23649 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23649 = (function (alt_handler,flag,cb,meta23650){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta23650 = meta23650;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23649.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23651,meta23650__$1){
var self__ = this;
var _23651__$1 = this;
return (new cljs.core.async.t_cljs$core$async23649(self__.alt_handler,self__.flag,self__.cb,meta23650__$1));
});

cljs.core.async.t_cljs$core$async23649.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23651){
var self__ = this;
var _23651__$1 = this;
return self__.meta23650;
});

cljs.core.async.t_cljs$core$async23649.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23649.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async23649.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23649.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async23649.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_handler,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb], null)))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta23650], null);
});

cljs.core.async.t_cljs$core$async23649.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23649.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23649";

cljs.core.async.t_cljs$core$async23649.cljs$lang$ctorPrWriter = (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write(writer__6755__auto__,"cljs.core.async/t_cljs$core$async23649");
});

cljs.core.async.__GT_t_cljs$core$async23649 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async23649(alt_handler__$1,flag__$1,cb__$1,meta23650){
return (new cljs.core.async.t_cljs$core$async23649(alt_handler__$1,flag__$1,cb__$1,meta23650));
});

}

return (new cljs.core.async.t_cljs$core$async23649(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__23652_SHARP_){
var G__23656 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23652_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__23656) : fret.call(null,G__23656));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23653_SHARP_){
var G__23657 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23653_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__23657) : fret.call(null,G__23657));
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
var G__23658 = (i + (1));
i = G__23658;
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
var len__7214__auto___23664 = arguments.length;
var i__7215__auto___23665 = (0);
while(true){
if((i__7215__auto___23665 < len__7214__auto___23664)){
args__7221__auto__.push((arguments[i__7215__auto___23665]));

var G__23666 = (i__7215__auto___23665 + (1));
i__7215__auto___23665 = G__23666;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((1) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7222__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__23661){
var map__23662 = p__23661;
var map__23662__$1 = ((((!((map__23662 == null)))?((((map__23662.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23662.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23662):map__23662);
var opts = map__23662__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq23659){
var G__23660 = cljs.core.first(seq23659);
var seq23659__$1 = cljs.core.next(seq23659);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23660,seq23659__$1);
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
var args23667 = [];
var len__7214__auto___23717 = arguments.length;
var i__7215__auto___23718 = (0);
while(true){
if((i__7215__auto___23718 < len__7214__auto___23717)){
args23667.push((arguments[i__7215__auto___23718]));

var G__23719 = (i__7215__auto___23718 + (1));
i__7215__auto___23718 = G__23719;
continue;
} else {
}
break;
}

var G__23669 = args23667.length;
switch (G__23669) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23667.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__8646__auto___23721 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8646__auto___23721){
return (function (){
var f__8647__auto__ = (function (){var switch__8534__auto__ = ((function (c__8646__auto___23721){
return (function (state_23693){
var state_val_23694 = (state_23693[(1)]);
if((state_val_23694 === (7))){
var inst_23689 = (state_23693[(2)]);
var state_23693__$1 = state_23693;
var statearr_23695_23722 = state_23693__$1;
(statearr_23695_23722[(2)] = inst_23689);

(statearr_23695_23722[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23694 === (1))){
var state_23693__$1 = state_23693;
var statearr_23696_23723 = state_23693__$1;
(statearr_23696_23723[(2)] = null);

(statearr_23696_23723[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23694 === (4))){
var inst_23672 = (state_23693[(7)]);
var inst_23672__$1 = (state_23693[(2)]);
var inst_23673 = (inst_23672__$1 == null);
var state_23693__$1 = (function (){var statearr_23697 = state_23693;
(statearr_23697[(7)] = inst_23672__$1);

return statearr_23697;
})();
if(cljs.core.truth_(inst_23673)){
var statearr_23698_23724 = state_23693__$1;
(statearr_23698_23724[(1)] = (5));

} else {
var statearr_23699_23725 = state_23693__$1;
(statearr_23699_23725[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23694 === (13))){
var state_23693__$1 = state_23693;
var statearr_23700_23726 = state_23693__$1;
(statearr_23700_23726[(2)] = null);

(statearr_23700_23726[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23694 === (6))){
var inst_23672 = (state_23693[(7)]);
var state_23693__$1 = state_23693;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23693__$1,(11),to,inst_23672);
} else {
if((state_val_23694 === (3))){
var inst_23691 = (state_23693[(2)]);
var state_23693__$1 = state_23693;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23693__$1,inst_23691);
} else {
if((state_val_23694 === (12))){
var state_23693__$1 = state_23693;
var statearr_23701_23727 = state_23693__$1;
(statearr_23701_23727[(2)] = null);

(statearr_23701_23727[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23694 === (2))){
var state_23693__$1 = state_23693;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23693__$1,(4),from);
} else {
if((state_val_23694 === (11))){
var inst_23682 = (state_23693[(2)]);
var state_23693__$1 = state_23693;
if(cljs.core.truth_(inst_23682)){
var statearr_23702_23728 = state_23693__$1;
(statearr_23702_23728[(1)] = (12));

} else {
var statearr_23703_23729 = state_23693__$1;
(statearr_23703_23729[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23694 === (9))){
var state_23693__$1 = state_23693;
var statearr_23704_23730 = state_23693__$1;
(statearr_23704_23730[(2)] = null);

(statearr_23704_23730[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23694 === (5))){
var state_23693__$1 = state_23693;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23705_23731 = state_23693__$1;
(statearr_23705_23731[(1)] = (8));

} else {
var statearr_23706_23732 = state_23693__$1;
(statearr_23706_23732[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23694 === (14))){
var inst_23687 = (state_23693[(2)]);
var state_23693__$1 = state_23693;
var statearr_23707_23733 = state_23693__$1;
(statearr_23707_23733[(2)] = inst_23687);

(statearr_23707_23733[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23694 === (10))){
var inst_23679 = (state_23693[(2)]);
var state_23693__$1 = state_23693;
var statearr_23708_23734 = state_23693__$1;
(statearr_23708_23734[(2)] = inst_23679);

(statearr_23708_23734[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23694 === (8))){
var inst_23676 = cljs.core.async.close_BANG_(to);
var state_23693__$1 = state_23693;
var statearr_23709_23735 = state_23693__$1;
(statearr_23709_23735[(2)] = inst_23676);

(statearr_23709_23735[(1)] = (10));


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
});})(c__8646__auto___23721))
;
return ((function (switch__8534__auto__,c__8646__auto___23721){
return (function() {
var cljs$core$async$state_machine__8535__auto__ = null;
var cljs$core$async$state_machine__8535__auto____0 = (function (){
var statearr_23713 = [null,null,null,null,null,null,null,null];
(statearr_23713[(0)] = cljs$core$async$state_machine__8535__auto__);

(statearr_23713[(1)] = (1));

return statearr_23713;
});
var cljs$core$async$state_machine__8535__auto____1 = (function (state_23693){
while(true){
var ret_value__8536__auto__ = (function (){try{while(true){
var result__8537__auto__ = switch__8534__auto__(state_23693);
if(cljs.core.keyword_identical_QMARK_(result__8537__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8537__auto__;
}
break;
}
}catch (e23714){if((e23714 instanceof Object)){
var ex__8538__auto__ = e23714;
var statearr_23715_23736 = state_23693;
(statearr_23715_23736[(5)] = ex__8538__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23693);

return cljs.core.cst$kw$recur;
} else {
throw e23714;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8536__auto__,cljs.core.cst$kw$recur)){
var G__23737 = state_23693;
state_23693 = G__23737;
continue;
} else {
return ret_value__8536__auto__;
}
break;
}
});
cljs$core$async$state_machine__8535__auto__ = function(state_23693){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8535__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8535__auto____1.call(this,state_23693);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8535__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8535__auto____0;
cljs$core$async$state_machine__8535__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8535__auto____1;
return cljs$core$async$state_machine__8535__auto__;
})()
;})(switch__8534__auto__,c__8646__auto___23721))
})();
var state__8648__auto__ = (function (){var statearr_23716 = (f__8647__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8647__auto__.cljs$core$IFn$_invoke$arity$0() : f__8647__auto__.call(null));
(statearr_23716[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8646__auto___23721);

return statearr_23716;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8648__auto__);
});})(c__8646__auto___23721))
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
return (function (p__23921){
var vec__23922 = p__23921;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23922,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23922,(1),null);
var job = vec__23922;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__8646__auto___24104 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8646__auto___24104,res,vec__23922,v,p,job,jobs,results){
return (function (){
var f__8647__auto__ = (function (){var switch__8534__auto__ = ((function (c__8646__auto___24104,res,vec__23922,v,p,job,jobs,results){
return (function (state_23927){
var state_val_23928 = (state_23927[(1)]);
if((state_val_23928 === (1))){
var state_23927__$1 = state_23927;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23927__$1,(2),res,v);
} else {
if((state_val_23928 === (2))){
var inst_23924 = (state_23927[(2)]);
var inst_23925 = cljs.core.async.close_BANG_(res);
var state_23927__$1 = (function (){var statearr_23929 = state_23927;
(statearr_23929[(7)] = inst_23924);

return statearr_23929;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_23927__$1,inst_23925);
} else {
return null;
}
}
});})(c__8646__auto___24104,res,vec__23922,v,p,job,jobs,results))
;
return ((function (switch__8534__auto__,c__8646__auto___24104,res,vec__23922,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8535__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8535__auto____0 = (function (){
var statearr_23933 = [null,null,null,null,null,null,null,null];
(statearr_23933[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8535__auto__);

(statearr_23933[(1)] = (1));

return statearr_23933;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8535__auto____1 = (function (state_23927){
while(true){
var ret_value__8536__auto__ = (function (){try{while(true){
var result__8537__auto__ = switch__8534__auto__(state_23927);
if(cljs.core.keyword_identical_QMARK_(result__8537__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8537__auto__;
}
break;
}
}catch (e23934){if((e23934 instanceof Object)){
var ex__8538__auto__ = e23934;
var statearr_23935_24105 = state_23927;
(statearr_23935_24105[(5)] = ex__8538__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23927);

return cljs.core.cst$kw$recur;
} else {
throw e23934;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8536__auto__,cljs.core.cst$kw$recur)){
var G__24106 = state_23927;
state_23927 = G__24106;
continue;
} else {
return ret_value__8536__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8535__auto__ = function(state_23927){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8535__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8535__auto____1.call(this,state_23927);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8535__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8535__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8535__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8535__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8535__auto__;
})()
;})(switch__8534__auto__,c__8646__auto___24104,res,vec__23922,v,p,job,jobs,results))
})();
var state__8648__auto__ = (function (){var statearr_23936 = (f__8647__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8647__auto__.cljs$core$IFn$_invoke$arity$0() : f__8647__auto__.call(null));
(statearr_23936[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8646__auto___24104);

return statearr_23936;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8648__auto__);
});})(c__8646__auto___24104,res,vec__23922,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__23937){
var vec__23938 = p__23937;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23938,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23938,(1),null);
var job = vec__23938;
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
var n__7059__auto___24107 = n;
var __24108 = (0);
while(true){
if((__24108 < n__7059__auto___24107)){
var G__23939_24109 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__23939_24109) {
case "compute":
var c__8646__auto___24111 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__24108,c__8646__auto___24111,G__23939_24109,n__7059__auto___24107,jobs,results,process,async){
return (function (){
var f__8647__auto__ = (function (){var switch__8534__auto__ = ((function (__24108,c__8646__auto___24111,G__23939_24109,n__7059__auto___24107,jobs,results,process,async){
return (function (state_23952){
var state_val_23953 = (state_23952[(1)]);
if((state_val_23953 === (1))){
var state_23952__$1 = state_23952;
var statearr_23954_24112 = state_23952__$1;
(statearr_23954_24112[(2)] = null);

(statearr_23954_24112[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23953 === (2))){
var state_23952__$1 = state_23952;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23952__$1,(4),jobs);
} else {
if((state_val_23953 === (3))){
var inst_23950 = (state_23952[(2)]);
var state_23952__$1 = state_23952;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23952__$1,inst_23950);
} else {
if((state_val_23953 === (4))){
var inst_23942 = (state_23952[(2)]);
var inst_23943 = process(inst_23942);
var state_23952__$1 = state_23952;
if(cljs.core.truth_(inst_23943)){
var statearr_23955_24113 = state_23952__$1;
(statearr_23955_24113[(1)] = (5));

} else {
var statearr_23956_24114 = state_23952__$1;
(statearr_23956_24114[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23953 === (5))){
var state_23952__$1 = state_23952;
var statearr_23957_24115 = state_23952__$1;
(statearr_23957_24115[(2)] = null);

(statearr_23957_24115[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23953 === (6))){
var state_23952__$1 = state_23952;
var statearr_23958_24116 = state_23952__$1;
(statearr_23958_24116[(2)] = null);

(statearr_23958_24116[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23953 === (7))){
var inst_23948 = (state_23952[(2)]);
var state_23952__$1 = state_23952;
var statearr_23959_24117 = state_23952__$1;
(statearr_23959_24117[(2)] = inst_23948);

(statearr_23959_24117[(1)] = (3));


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
});})(__24108,c__8646__auto___24111,G__23939_24109,n__7059__auto___24107,jobs,results,process,async))
;
return ((function (__24108,switch__8534__auto__,c__8646__auto___24111,G__23939_24109,n__7059__auto___24107,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8535__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8535__auto____0 = (function (){
var statearr_23963 = [null,null,null,null,null,null,null];
(statearr_23963[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8535__auto__);

(statearr_23963[(1)] = (1));

return statearr_23963;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8535__auto____1 = (function (state_23952){
while(true){
var ret_value__8536__auto__ = (function (){try{while(true){
var result__8537__auto__ = switch__8534__auto__(state_23952);
if(cljs.core.keyword_identical_QMARK_(result__8537__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8537__auto__;
}
break;
}
}catch (e23964){if((e23964 instanceof Object)){
var ex__8538__auto__ = e23964;
var statearr_23965_24118 = state_23952;
(statearr_23965_24118[(5)] = ex__8538__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23952);

return cljs.core.cst$kw$recur;
} else {
throw e23964;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8536__auto__,cljs.core.cst$kw$recur)){
var G__24119 = state_23952;
state_23952 = G__24119;
continue;
} else {
return ret_value__8536__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8535__auto__ = function(state_23952){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8535__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8535__auto____1.call(this,state_23952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8535__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8535__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8535__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8535__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8535__auto__;
})()
;})(__24108,switch__8534__auto__,c__8646__auto___24111,G__23939_24109,n__7059__auto___24107,jobs,results,process,async))
})();
var state__8648__auto__ = (function (){var statearr_23966 = (f__8647__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8647__auto__.cljs$core$IFn$_invoke$arity$0() : f__8647__auto__.call(null));
(statearr_23966[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8646__auto___24111);

return statearr_23966;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8648__auto__);
});})(__24108,c__8646__auto___24111,G__23939_24109,n__7059__auto___24107,jobs,results,process,async))
);


break;
case "async":
var c__8646__auto___24120 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__24108,c__8646__auto___24120,G__23939_24109,n__7059__auto___24107,jobs,results,process,async){
return (function (){
var f__8647__auto__ = (function (){var switch__8534__auto__ = ((function (__24108,c__8646__auto___24120,G__23939_24109,n__7059__auto___24107,jobs,results,process,async){
return (function (state_23979){
var state_val_23980 = (state_23979[(1)]);
if((state_val_23980 === (1))){
var state_23979__$1 = state_23979;
var statearr_23981_24121 = state_23979__$1;
(statearr_23981_24121[(2)] = null);

(statearr_23981_24121[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23980 === (2))){
var state_23979__$1 = state_23979;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23979__$1,(4),jobs);
} else {
if((state_val_23980 === (3))){
var inst_23977 = (state_23979[(2)]);
var state_23979__$1 = state_23979;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23979__$1,inst_23977);
} else {
if((state_val_23980 === (4))){
var inst_23969 = (state_23979[(2)]);
var inst_23970 = async(inst_23969);
var state_23979__$1 = state_23979;
if(cljs.core.truth_(inst_23970)){
var statearr_23982_24122 = state_23979__$1;
(statearr_23982_24122[(1)] = (5));

} else {
var statearr_23983_24123 = state_23979__$1;
(statearr_23983_24123[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23980 === (5))){
var state_23979__$1 = state_23979;
var statearr_23984_24124 = state_23979__$1;
(statearr_23984_24124[(2)] = null);

(statearr_23984_24124[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23980 === (6))){
var state_23979__$1 = state_23979;
var statearr_23985_24125 = state_23979__$1;
(statearr_23985_24125[(2)] = null);

(statearr_23985_24125[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23980 === (7))){
var inst_23975 = (state_23979[(2)]);
var state_23979__$1 = state_23979;
var statearr_23986_24126 = state_23979__$1;
(statearr_23986_24126[(2)] = inst_23975);

(statearr_23986_24126[(1)] = (3));


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
});})(__24108,c__8646__auto___24120,G__23939_24109,n__7059__auto___24107,jobs,results,process,async))
;
return ((function (__24108,switch__8534__auto__,c__8646__auto___24120,G__23939_24109,n__7059__auto___24107,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8535__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8535__auto____0 = (function (){
var statearr_23990 = [null,null,null,null,null,null,null];
(statearr_23990[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8535__auto__);

(statearr_23990[(1)] = (1));

return statearr_23990;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8535__auto____1 = (function (state_23979){
while(true){
var ret_value__8536__auto__ = (function (){try{while(true){
var result__8537__auto__ = switch__8534__auto__(state_23979);
if(cljs.core.keyword_identical_QMARK_(result__8537__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8537__auto__;
}
break;
}
}catch (e23991){if((e23991 instanceof Object)){
var ex__8538__auto__ = e23991;
var statearr_23992_24127 = state_23979;
(statearr_23992_24127[(5)] = ex__8538__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23979);

return cljs.core.cst$kw$recur;
} else {
throw e23991;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8536__auto__,cljs.core.cst$kw$recur)){
var G__24128 = state_23979;
state_23979 = G__24128;
continue;
} else {
return ret_value__8536__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8535__auto__ = function(state_23979){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8535__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8535__auto____1.call(this,state_23979);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8535__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8535__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8535__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8535__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8535__auto__;
})()
;})(__24108,switch__8534__auto__,c__8646__auto___24120,G__23939_24109,n__7059__auto___24107,jobs,results,process,async))
})();
var state__8648__auto__ = (function (){var statearr_23993 = (f__8647__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8647__auto__.cljs$core$IFn$_invoke$arity$0() : f__8647__auto__.call(null));
(statearr_23993[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8646__auto___24120);

return statearr_23993;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8648__auto__);
});})(__24108,c__8646__auto___24120,G__23939_24109,n__7059__auto___24107,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__24129 = (__24108 + (1));
__24108 = G__24129;
continue;
} else {
}
break;
}

var c__8646__auto___24130 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8646__auto___24130,jobs,results,process,async){
return (function (){
var f__8647__auto__ = (function (){var switch__8534__auto__ = ((function (c__8646__auto___24130,jobs,results,process,async){
return (function (state_24015){
var state_val_24016 = (state_24015[(1)]);
if((state_val_24016 === (1))){
var state_24015__$1 = state_24015;
var statearr_24017_24131 = state_24015__$1;
(statearr_24017_24131[(2)] = null);

(statearr_24017_24131[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24016 === (2))){
var state_24015__$1 = state_24015;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24015__$1,(4),from);
} else {
if((state_val_24016 === (3))){
var inst_24013 = (state_24015[(2)]);
var state_24015__$1 = state_24015;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24015__$1,inst_24013);
} else {
if((state_val_24016 === (4))){
var inst_23996 = (state_24015[(7)]);
var inst_23996__$1 = (state_24015[(2)]);
var inst_23997 = (inst_23996__$1 == null);
var state_24015__$1 = (function (){var statearr_24018 = state_24015;
(statearr_24018[(7)] = inst_23996__$1);

return statearr_24018;
})();
if(cljs.core.truth_(inst_23997)){
var statearr_24019_24132 = state_24015__$1;
(statearr_24019_24132[(1)] = (5));

} else {
var statearr_24020_24133 = state_24015__$1;
(statearr_24020_24133[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24016 === (5))){
var inst_23999 = cljs.core.async.close_BANG_(jobs);
var state_24015__$1 = state_24015;
var statearr_24021_24134 = state_24015__$1;
(statearr_24021_24134[(2)] = inst_23999);

(statearr_24021_24134[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24016 === (6))){
var inst_24001 = (state_24015[(8)]);
var inst_23996 = (state_24015[(7)]);
var inst_24001__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_24002 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24003 = [inst_23996,inst_24001__$1];
var inst_24004 = (new cljs.core.PersistentVector(null,2,(5),inst_24002,inst_24003,null));
var state_24015__$1 = (function (){var statearr_24022 = state_24015;
(statearr_24022[(8)] = inst_24001__$1);

return statearr_24022;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24015__$1,(8),jobs,inst_24004);
} else {
if((state_val_24016 === (7))){
var inst_24011 = (state_24015[(2)]);
var state_24015__$1 = state_24015;
var statearr_24023_24135 = state_24015__$1;
(statearr_24023_24135[(2)] = inst_24011);

(statearr_24023_24135[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24016 === (8))){
var inst_24001 = (state_24015[(8)]);
var inst_24006 = (state_24015[(2)]);
var state_24015__$1 = (function (){var statearr_24024 = state_24015;
(statearr_24024[(9)] = inst_24006);

return statearr_24024;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24015__$1,(9),results,inst_24001);
} else {
if((state_val_24016 === (9))){
var inst_24008 = (state_24015[(2)]);
var state_24015__$1 = (function (){var statearr_24025 = state_24015;
(statearr_24025[(10)] = inst_24008);

return statearr_24025;
})();
var statearr_24026_24136 = state_24015__$1;
(statearr_24026_24136[(2)] = null);

(statearr_24026_24136[(1)] = (2));


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
});})(c__8646__auto___24130,jobs,results,process,async))
;
return ((function (switch__8534__auto__,c__8646__auto___24130,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8535__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8535__auto____0 = (function (){
var statearr_24030 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24030[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8535__auto__);

(statearr_24030[(1)] = (1));

return statearr_24030;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8535__auto____1 = (function (state_24015){
while(true){
var ret_value__8536__auto__ = (function (){try{while(true){
var result__8537__auto__ = switch__8534__auto__(state_24015);
if(cljs.core.keyword_identical_QMARK_(result__8537__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8537__auto__;
}
break;
}
}catch (e24031){if((e24031 instanceof Object)){
var ex__8538__auto__ = e24031;
var statearr_24032_24137 = state_24015;
(statearr_24032_24137[(5)] = ex__8538__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24015);

return cljs.core.cst$kw$recur;
} else {
throw e24031;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8536__auto__,cljs.core.cst$kw$recur)){
var G__24138 = state_24015;
state_24015 = G__24138;
continue;
} else {
return ret_value__8536__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8535__auto__ = function(state_24015){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8535__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8535__auto____1.call(this,state_24015);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8535__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8535__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8535__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8535__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8535__auto__;
})()
;})(switch__8534__auto__,c__8646__auto___24130,jobs,results,process,async))
})();
var state__8648__auto__ = (function (){var statearr_24033 = (f__8647__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8647__auto__.cljs$core$IFn$_invoke$arity$0() : f__8647__auto__.call(null));
(statearr_24033[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8646__auto___24130);

return statearr_24033;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8648__auto__);
});})(c__8646__auto___24130,jobs,results,process,async))
);


var c__8646__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8646__auto__,jobs,results,process,async){
return (function (){
var f__8647__auto__ = (function (){var switch__8534__auto__ = ((function (c__8646__auto__,jobs,results,process,async){
return (function (state_24071){
var state_val_24072 = (state_24071[(1)]);
if((state_val_24072 === (7))){
var inst_24067 = (state_24071[(2)]);
var state_24071__$1 = state_24071;
var statearr_24073_24139 = state_24071__$1;
(statearr_24073_24139[(2)] = inst_24067);

(statearr_24073_24139[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24072 === (20))){
var state_24071__$1 = state_24071;
var statearr_24074_24140 = state_24071__$1;
(statearr_24074_24140[(2)] = null);

(statearr_24074_24140[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24072 === (1))){
var state_24071__$1 = state_24071;
var statearr_24075_24141 = state_24071__$1;
(statearr_24075_24141[(2)] = null);

(statearr_24075_24141[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24072 === (4))){
var inst_24036 = (state_24071[(7)]);
var inst_24036__$1 = (state_24071[(2)]);
var inst_24037 = (inst_24036__$1 == null);
var state_24071__$1 = (function (){var statearr_24076 = state_24071;
(statearr_24076[(7)] = inst_24036__$1);

return statearr_24076;
})();
if(cljs.core.truth_(inst_24037)){
var statearr_24077_24142 = state_24071__$1;
(statearr_24077_24142[(1)] = (5));

} else {
var statearr_24078_24143 = state_24071__$1;
(statearr_24078_24143[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24072 === (15))){
var inst_24049 = (state_24071[(8)]);
var state_24071__$1 = state_24071;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24071__$1,(18),to,inst_24049);
} else {
if((state_val_24072 === (21))){
var inst_24062 = (state_24071[(2)]);
var state_24071__$1 = state_24071;
var statearr_24079_24144 = state_24071__$1;
(statearr_24079_24144[(2)] = inst_24062);

(statearr_24079_24144[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24072 === (13))){
var inst_24064 = (state_24071[(2)]);
var state_24071__$1 = (function (){var statearr_24080 = state_24071;
(statearr_24080[(9)] = inst_24064);

return statearr_24080;
})();
var statearr_24081_24145 = state_24071__$1;
(statearr_24081_24145[(2)] = null);

(statearr_24081_24145[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24072 === (6))){
var inst_24036 = (state_24071[(7)]);
var state_24071__$1 = state_24071;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24071__$1,(11),inst_24036);
} else {
if((state_val_24072 === (17))){
var inst_24057 = (state_24071[(2)]);
var state_24071__$1 = state_24071;
if(cljs.core.truth_(inst_24057)){
var statearr_24082_24146 = state_24071__$1;
(statearr_24082_24146[(1)] = (19));

} else {
var statearr_24083_24147 = state_24071__$1;
(statearr_24083_24147[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24072 === (3))){
var inst_24069 = (state_24071[(2)]);
var state_24071__$1 = state_24071;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24071__$1,inst_24069);
} else {
if((state_val_24072 === (12))){
var inst_24046 = (state_24071[(10)]);
var state_24071__$1 = state_24071;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24071__$1,(14),inst_24046);
} else {
if((state_val_24072 === (2))){
var state_24071__$1 = state_24071;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24071__$1,(4),results);
} else {
if((state_val_24072 === (19))){
var state_24071__$1 = state_24071;
var statearr_24084_24148 = state_24071__$1;
(statearr_24084_24148[(2)] = null);

(statearr_24084_24148[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24072 === (11))){
var inst_24046 = (state_24071[(2)]);
var state_24071__$1 = (function (){var statearr_24085 = state_24071;
(statearr_24085[(10)] = inst_24046);

return statearr_24085;
})();
var statearr_24086_24149 = state_24071__$1;
(statearr_24086_24149[(2)] = null);

(statearr_24086_24149[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24072 === (9))){
var state_24071__$1 = state_24071;
var statearr_24087_24150 = state_24071__$1;
(statearr_24087_24150[(2)] = null);

(statearr_24087_24150[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24072 === (5))){
var state_24071__$1 = state_24071;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24088_24151 = state_24071__$1;
(statearr_24088_24151[(1)] = (8));

} else {
var statearr_24089_24152 = state_24071__$1;
(statearr_24089_24152[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24072 === (14))){
var inst_24051 = (state_24071[(11)]);
var inst_24049 = (state_24071[(8)]);
var inst_24049__$1 = (state_24071[(2)]);
var inst_24050 = (inst_24049__$1 == null);
var inst_24051__$1 = cljs.core.not(inst_24050);
var state_24071__$1 = (function (){var statearr_24090 = state_24071;
(statearr_24090[(11)] = inst_24051__$1);

(statearr_24090[(8)] = inst_24049__$1);

return statearr_24090;
})();
if(inst_24051__$1){
var statearr_24091_24153 = state_24071__$1;
(statearr_24091_24153[(1)] = (15));

} else {
var statearr_24092_24154 = state_24071__$1;
(statearr_24092_24154[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24072 === (16))){
var inst_24051 = (state_24071[(11)]);
var state_24071__$1 = state_24071;
var statearr_24093_24155 = state_24071__$1;
(statearr_24093_24155[(2)] = inst_24051);

(statearr_24093_24155[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24072 === (10))){
var inst_24043 = (state_24071[(2)]);
var state_24071__$1 = state_24071;
var statearr_24094_24156 = state_24071__$1;
(statearr_24094_24156[(2)] = inst_24043);

(statearr_24094_24156[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24072 === (18))){
var inst_24054 = (state_24071[(2)]);
var state_24071__$1 = state_24071;
var statearr_24095_24157 = state_24071__$1;
(statearr_24095_24157[(2)] = inst_24054);

(statearr_24095_24157[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24072 === (8))){
var inst_24040 = cljs.core.async.close_BANG_(to);
var state_24071__$1 = state_24071;
var statearr_24096_24158 = state_24071__$1;
(statearr_24096_24158[(2)] = inst_24040);

(statearr_24096_24158[(1)] = (10));


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
});})(c__8646__auto__,jobs,results,process,async))
;
return ((function (switch__8534__auto__,c__8646__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8535__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8535__auto____0 = (function (){
var statearr_24100 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24100[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8535__auto__);

(statearr_24100[(1)] = (1));

return statearr_24100;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8535__auto____1 = (function (state_24071){
while(true){
var ret_value__8536__auto__ = (function (){try{while(true){
var result__8537__auto__ = switch__8534__auto__(state_24071);
if(cljs.core.keyword_identical_QMARK_(result__8537__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8537__auto__;
}
break;
}
}catch (e24101){if((e24101 instanceof Object)){
var ex__8538__auto__ = e24101;
var statearr_24102_24159 = state_24071;
(statearr_24102_24159[(5)] = ex__8538__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24071);

return cljs.core.cst$kw$recur;
} else {
throw e24101;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8536__auto__,cljs.core.cst$kw$recur)){
var G__24160 = state_24071;
state_24071 = G__24160;
continue;
} else {
return ret_value__8536__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8535__auto__ = function(state_24071){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8535__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8535__auto____1.call(this,state_24071);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8535__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8535__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8535__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8535__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8535__auto__;
})()
;})(switch__8534__auto__,c__8646__auto__,jobs,results,process,async))
})();
var state__8648__auto__ = (function (){var statearr_24103 = (f__8647__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8647__auto__.cljs$core$IFn$_invoke$arity$0() : f__8647__auto__.call(null));
(statearr_24103[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8646__auto__);

return statearr_24103;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8648__auto__);
});})(c__8646__auto__,jobs,results,process,async))
);

return c__8646__auto__;
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
var args24161 = [];
var len__7214__auto___24164 = arguments.length;
var i__7215__auto___24165 = (0);
while(true){
if((i__7215__auto___24165 < len__7214__auto___24164)){
args24161.push((arguments[i__7215__auto___24165]));

var G__24166 = (i__7215__auto___24165 + (1));
i__7215__auto___24165 = G__24166;
continue;
} else {
}
break;
}

var G__24163 = args24161.length;
switch (G__24163) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24161.length)].join('')));

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
var args24168 = [];
var len__7214__auto___24171 = arguments.length;
var i__7215__auto___24172 = (0);
while(true){
if((i__7215__auto___24172 < len__7214__auto___24171)){
args24168.push((arguments[i__7215__auto___24172]));

var G__24173 = (i__7215__auto___24172 + (1));
i__7215__auto___24172 = G__24173;
continue;
} else {
}
break;
}

var G__24170 = args24168.length;
switch (G__24170) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24168.length)].join('')));

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
var args24175 = [];
var len__7214__auto___24228 = arguments.length;
var i__7215__auto___24229 = (0);
while(true){
if((i__7215__auto___24229 < len__7214__auto___24228)){
args24175.push((arguments[i__7215__auto___24229]));

var G__24230 = (i__7215__auto___24229 + (1));
i__7215__auto___24229 = G__24230;
continue;
} else {
}
break;
}

var G__24177 = args24175.length;
switch (G__24177) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24175.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__8646__auto___24232 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8646__auto___24232,tc,fc){
return (function (){
var f__8647__auto__ = (function (){var switch__8534__auto__ = ((function (c__8646__auto___24232,tc,fc){
return (function (state_24203){
var state_val_24204 = (state_24203[(1)]);
if((state_val_24204 === (7))){
var inst_24199 = (state_24203[(2)]);
var state_24203__$1 = state_24203;
var statearr_24205_24233 = state_24203__$1;
(statearr_24205_24233[(2)] = inst_24199);

(statearr_24205_24233[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24204 === (1))){
var state_24203__$1 = state_24203;
var statearr_24206_24234 = state_24203__$1;
(statearr_24206_24234[(2)] = null);

(statearr_24206_24234[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24204 === (4))){
var inst_24180 = (state_24203[(7)]);
var inst_24180__$1 = (state_24203[(2)]);
var inst_24181 = (inst_24180__$1 == null);
var state_24203__$1 = (function (){var statearr_24207 = state_24203;
(statearr_24207[(7)] = inst_24180__$1);

return statearr_24207;
})();
if(cljs.core.truth_(inst_24181)){
var statearr_24208_24235 = state_24203__$1;
(statearr_24208_24235[(1)] = (5));

} else {
var statearr_24209_24236 = state_24203__$1;
(statearr_24209_24236[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24204 === (13))){
var state_24203__$1 = state_24203;
var statearr_24210_24237 = state_24203__$1;
(statearr_24210_24237[(2)] = null);

(statearr_24210_24237[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24204 === (6))){
var inst_24180 = (state_24203[(7)]);
var inst_24186 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_24180) : p.call(null,inst_24180));
var state_24203__$1 = state_24203;
if(cljs.core.truth_(inst_24186)){
var statearr_24211_24238 = state_24203__$1;
(statearr_24211_24238[(1)] = (9));

} else {
var statearr_24212_24239 = state_24203__$1;
(statearr_24212_24239[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24204 === (3))){
var inst_24201 = (state_24203[(2)]);
var state_24203__$1 = state_24203;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24203__$1,inst_24201);
} else {
if((state_val_24204 === (12))){
var state_24203__$1 = state_24203;
var statearr_24213_24240 = state_24203__$1;
(statearr_24213_24240[(2)] = null);

(statearr_24213_24240[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24204 === (2))){
var state_24203__$1 = state_24203;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24203__$1,(4),ch);
} else {
if((state_val_24204 === (11))){
var inst_24180 = (state_24203[(7)]);
var inst_24190 = (state_24203[(2)]);
var state_24203__$1 = state_24203;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24203__$1,(8),inst_24190,inst_24180);
} else {
if((state_val_24204 === (9))){
var state_24203__$1 = state_24203;
var statearr_24214_24241 = state_24203__$1;
(statearr_24214_24241[(2)] = tc);

(statearr_24214_24241[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24204 === (5))){
var inst_24183 = cljs.core.async.close_BANG_(tc);
var inst_24184 = cljs.core.async.close_BANG_(fc);
var state_24203__$1 = (function (){var statearr_24215 = state_24203;
(statearr_24215[(8)] = inst_24183);

return statearr_24215;
})();
var statearr_24216_24242 = state_24203__$1;
(statearr_24216_24242[(2)] = inst_24184);

(statearr_24216_24242[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24204 === (14))){
var inst_24197 = (state_24203[(2)]);
var state_24203__$1 = state_24203;
var statearr_24217_24243 = state_24203__$1;
(statearr_24217_24243[(2)] = inst_24197);

(statearr_24217_24243[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24204 === (10))){
var state_24203__$1 = state_24203;
var statearr_24218_24244 = state_24203__$1;
(statearr_24218_24244[(2)] = fc);

(statearr_24218_24244[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24204 === (8))){
var inst_24192 = (state_24203[(2)]);
var state_24203__$1 = state_24203;
if(cljs.core.truth_(inst_24192)){
var statearr_24219_24245 = state_24203__$1;
(statearr_24219_24245[(1)] = (12));

} else {
var statearr_24220_24246 = state_24203__$1;
(statearr_24220_24246[(1)] = (13));

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
});})(c__8646__auto___24232,tc,fc))
;
return ((function (switch__8534__auto__,c__8646__auto___24232,tc,fc){
return (function() {
var cljs$core$async$state_machine__8535__auto__ = null;
var cljs$core$async$state_machine__8535__auto____0 = (function (){
var statearr_24224 = [null,null,null,null,null,null,null,null,null];
(statearr_24224[(0)] = cljs$core$async$state_machine__8535__auto__);

(statearr_24224[(1)] = (1));

return statearr_24224;
});
var cljs$core$async$state_machine__8535__auto____1 = (function (state_24203){
while(true){
var ret_value__8536__auto__ = (function (){try{while(true){
var result__8537__auto__ = switch__8534__auto__(state_24203);
if(cljs.core.keyword_identical_QMARK_(result__8537__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8537__auto__;
}
break;
}
}catch (e24225){if((e24225 instanceof Object)){
var ex__8538__auto__ = e24225;
var statearr_24226_24247 = state_24203;
(statearr_24226_24247[(5)] = ex__8538__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24203);

return cljs.core.cst$kw$recur;
} else {
throw e24225;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8536__auto__,cljs.core.cst$kw$recur)){
var G__24248 = state_24203;
state_24203 = G__24248;
continue;
} else {
return ret_value__8536__auto__;
}
break;
}
});
cljs$core$async$state_machine__8535__auto__ = function(state_24203){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8535__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8535__auto____1.call(this,state_24203);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8535__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8535__auto____0;
cljs$core$async$state_machine__8535__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8535__auto____1;
return cljs$core$async$state_machine__8535__auto__;
})()
;})(switch__8534__auto__,c__8646__auto___24232,tc,fc))
})();
var state__8648__auto__ = (function (){var statearr_24227 = (f__8647__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8647__auto__.cljs$core$IFn$_invoke$arity$0() : f__8647__auto__.call(null));
(statearr_24227[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8646__auto___24232);

return statearr_24227;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8648__auto__);
});})(c__8646__auto___24232,tc,fc))
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
var c__8646__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8646__auto__){
return (function (){
var f__8647__auto__ = (function (){var switch__8534__auto__ = ((function (c__8646__auto__){
return (function (state_24312){
var state_val_24313 = (state_24312[(1)]);
if((state_val_24313 === (7))){
var inst_24308 = (state_24312[(2)]);
var state_24312__$1 = state_24312;
var statearr_24314_24335 = state_24312__$1;
(statearr_24314_24335[(2)] = inst_24308);

(statearr_24314_24335[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24313 === (1))){
var inst_24292 = init;
var state_24312__$1 = (function (){var statearr_24315 = state_24312;
(statearr_24315[(7)] = inst_24292);

return statearr_24315;
})();
var statearr_24316_24336 = state_24312__$1;
(statearr_24316_24336[(2)] = null);

(statearr_24316_24336[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24313 === (4))){
var inst_24295 = (state_24312[(8)]);
var inst_24295__$1 = (state_24312[(2)]);
var inst_24296 = (inst_24295__$1 == null);
var state_24312__$1 = (function (){var statearr_24317 = state_24312;
(statearr_24317[(8)] = inst_24295__$1);

return statearr_24317;
})();
if(cljs.core.truth_(inst_24296)){
var statearr_24318_24337 = state_24312__$1;
(statearr_24318_24337[(1)] = (5));

} else {
var statearr_24319_24338 = state_24312__$1;
(statearr_24319_24338[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24313 === (6))){
var inst_24295 = (state_24312[(8)]);
var inst_24292 = (state_24312[(7)]);
var inst_24299 = (state_24312[(9)]);
var inst_24299__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_24292,inst_24295) : f.call(null,inst_24292,inst_24295));
var inst_24300 = cljs.core.reduced_QMARK_(inst_24299__$1);
var state_24312__$1 = (function (){var statearr_24320 = state_24312;
(statearr_24320[(9)] = inst_24299__$1);

return statearr_24320;
})();
if(inst_24300){
var statearr_24321_24339 = state_24312__$1;
(statearr_24321_24339[(1)] = (8));

} else {
var statearr_24322_24340 = state_24312__$1;
(statearr_24322_24340[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24313 === (3))){
var inst_24310 = (state_24312[(2)]);
var state_24312__$1 = state_24312;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24312__$1,inst_24310);
} else {
if((state_val_24313 === (2))){
var state_24312__$1 = state_24312;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24312__$1,(4),ch);
} else {
if((state_val_24313 === (9))){
var inst_24299 = (state_24312[(9)]);
var inst_24292 = inst_24299;
var state_24312__$1 = (function (){var statearr_24323 = state_24312;
(statearr_24323[(7)] = inst_24292);

return statearr_24323;
})();
var statearr_24324_24341 = state_24312__$1;
(statearr_24324_24341[(2)] = null);

(statearr_24324_24341[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24313 === (5))){
var inst_24292 = (state_24312[(7)]);
var state_24312__$1 = state_24312;
var statearr_24325_24342 = state_24312__$1;
(statearr_24325_24342[(2)] = inst_24292);

(statearr_24325_24342[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24313 === (10))){
var inst_24306 = (state_24312[(2)]);
var state_24312__$1 = state_24312;
var statearr_24326_24343 = state_24312__$1;
(statearr_24326_24343[(2)] = inst_24306);

(statearr_24326_24343[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24313 === (8))){
var inst_24299 = (state_24312[(9)]);
var inst_24302 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(inst_24299) : cljs.core.deref.call(null,inst_24299));
var state_24312__$1 = state_24312;
var statearr_24327_24344 = state_24312__$1;
(statearr_24327_24344[(2)] = inst_24302);

(statearr_24327_24344[(1)] = (10));


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
});})(c__8646__auto__))
;
return ((function (switch__8534__auto__,c__8646__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__8535__auto__ = null;
var cljs$core$async$reduce_$_state_machine__8535__auto____0 = (function (){
var statearr_24331 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24331[(0)] = cljs$core$async$reduce_$_state_machine__8535__auto__);

(statearr_24331[(1)] = (1));

return statearr_24331;
});
var cljs$core$async$reduce_$_state_machine__8535__auto____1 = (function (state_24312){
while(true){
var ret_value__8536__auto__ = (function (){try{while(true){
var result__8537__auto__ = switch__8534__auto__(state_24312);
if(cljs.core.keyword_identical_QMARK_(result__8537__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8537__auto__;
}
break;
}
}catch (e24332){if((e24332 instanceof Object)){
var ex__8538__auto__ = e24332;
var statearr_24333_24345 = state_24312;
(statearr_24333_24345[(5)] = ex__8538__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24312);

return cljs.core.cst$kw$recur;
} else {
throw e24332;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8536__auto__,cljs.core.cst$kw$recur)){
var G__24346 = state_24312;
state_24312 = G__24346;
continue;
} else {
return ret_value__8536__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__8535__auto__ = function(state_24312){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__8535__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__8535__auto____1.call(this,state_24312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__8535__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__8535__auto____0;
cljs$core$async$reduce_$_state_machine__8535__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__8535__auto____1;
return cljs$core$async$reduce_$_state_machine__8535__auto__;
})()
;})(switch__8534__auto__,c__8646__auto__))
})();
var state__8648__auto__ = (function (){var statearr_24334 = (f__8647__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8647__auto__.cljs$core$IFn$_invoke$arity$0() : f__8647__auto__.call(null));
(statearr_24334[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8646__auto__);

return statearr_24334;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8648__auto__);
});})(c__8646__auto__))
);

return c__8646__auto__;
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
var args24347 = [];
var len__7214__auto___24399 = arguments.length;
var i__7215__auto___24400 = (0);
while(true){
if((i__7215__auto___24400 < len__7214__auto___24399)){
args24347.push((arguments[i__7215__auto___24400]));

var G__24401 = (i__7215__auto___24400 + (1));
i__7215__auto___24400 = G__24401;
continue;
} else {
}
break;
}

var G__24349 = args24347.length;
switch (G__24349) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24347.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__8646__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8646__auto__){
return (function (){
var f__8647__auto__ = (function (){var switch__8534__auto__ = ((function (c__8646__auto__){
return (function (state_24374){
var state_val_24375 = (state_24374[(1)]);
if((state_val_24375 === (7))){
var inst_24356 = (state_24374[(2)]);
var state_24374__$1 = state_24374;
var statearr_24376_24403 = state_24374__$1;
(statearr_24376_24403[(2)] = inst_24356);

(statearr_24376_24403[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24375 === (1))){
var inst_24350 = cljs.core.seq(coll);
var inst_24351 = inst_24350;
var state_24374__$1 = (function (){var statearr_24377 = state_24374;
(statearr_24377[(7)] = inst_24351);

return statearr_24377;
})();
var statearr_24378_24404 = state_24374__$1;
(statearr_24378_24404[(2)] = null);

(statearr_24378_24404[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24375 === (4))){
var inst_24351 = (state_24374[(7)]);
var inst_24354 = cljs.core.first(inst_24351);
var state_24374__$1 = state_24374;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24374__$1,(7),ch,inst_24354);
} else {
if((state_val_24375 === (13))){
var inst_24368 = (state_24374[(2)]);
var state_24374__$1 = state_24374;
var statearr_24379_24405 = state_24374__$1;
(statearr_24379_24405[(2)] = inst_24368);

(statearr_24379_24405[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24375 === (6))){
var inst_24359 = (state_24374[(2)]);
var state_24374__$1 = state_24374;
if(cljs.core.truth_(inst_24359)){
var statearr_24380_24406 = state_24374__$1;
(statearr_24380_24406[(1)] = (8));

} else {
var statearr_24381_24407 = state_24374__$1;
(statearr_24381_24407[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24375 === (3))){
var inst_24372 = (state_24374[(2)]);
var state_24374__$1 = state_24374;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24374__$1,inst_24372);
} else {
if((state_val_24375 === (12))){
var state_24374__$1 = state_24374;
var statearr_24382_24408 = state_24374__$1;
(statearr_24382_24408[(2)] = null);

(statearr_24382_24408[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24375 === (2))){
var inst_24351 = (state_24374[(7)]);
var state_24374__$1 = state_24374;
if(cljs.core.truth_(inst_24351)){
var statearr_24383_24409 = state_24374__$1;
(statearr_24383_24409[(1)] = (4));

} else {
var statearr_24384_24410 = state_24374__$1;
(statearr_24384_24410[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24375 === (11))){
var inst_24365 = cljs.core.async.close_BANG_(ch);
var state_24374__$1 = state_24374;
var statearr_24385_24411 = state_24374__$1;
(statearr_24385_24411[(2)] = inst_24365);

(statearr_24385_24411[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24375 === (9))){
var state_24374__$1 = state_24374;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24386_24412 = state_24374__$1;
(statearr_24386_24412[(1)] = (11));

} else {
var statearr_24387_24413 = state_24374__$1;
(statearr_24387_24413[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24375 === (5))){
var inst_24351 = (state_24374[(7)]);
var state_24374__$1 = state_24374;
var statearr_24388_24414 = state_24374__$1;
(statearr_24388_24414[(2)] = inst_24351);

(statearr_24388_24414[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24375 === (10))){
var inst_24370 = (state_24374[(2)]);
var state_24374__$1 = state_24374;
var statearr_24389_24415 = state_24374__$1;
(statearr_24389_24415[(2)] = inst_24370);

(statearr_24389_24415[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24375 === (8))){
var inst_24351 = (state_24374[(7)]);
var inst_24361 = cljs.core.next(inst_24351);
var inst_24351__$1 = inst_24361;
var state_24374__$1 = (function (){var statearr_24390 = state_24374;
(statearr_24390[(7)] = inst_24351__$1);

return statearr_24390;
})();
var statearr_24391_24416 = state_24374__$1;
(statearr_24391_24416[(2)] = null);

(statearr_24391_24416[(1)] = (2));


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
});})(c__8646__auto__))
;
return ((function (switch__8534__auto__,c__8646__auto__){
return (function() {
var cljs$core$async$state_machine__8535__auto__ = null;
var cljs$core$async$state_machine__8535__auto____0 = (function (){
var statearr_24395 = [null,null,null,null,null,null,null,null];
(statearr_24395[(0)] = cljs$core$async$state_machine__8535__auto__);

(statearr_24395[(1)] = (1));

return statearr_24395;
});
var cljs$core$async$state_machine__8535__auto____1 = (function (state_24374){
while(true){
var ret_value__8536__auto__ = (function (){try{while(true){
var result__8537__auto__ = switch__8534__auto__(state_24374);
if(cljs.core.keyword_identical_QMARK_(result__8537__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8537__auto__;
}
break;
}
}catch (e24396){if((e24396 instanceof Object)){
var ex__8538__auto__ = e24396;
var statearr_24397_24417 = state_24374;
(statearr_24397_24417[(5)] = ex__8538__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24374);

return cljs.core.cst$kw$recur;
} else {
throw e24396;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8536__auto__,cljs.core.cst$kw$recur)){
var G__24418 = state_24374;
state_24374 = G__24418;
continue;
} else {
return ret_value__8536__auto__;
}
break;
}
});
cljs$core$async$state_machine__8535__auto__ = function(state_24374){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8535__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8535__auto____1.call(this,state_24374);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8535__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8535__auto____0;
cljs$core$async$state_machine__8535__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8535__auto____1;
return cljs$core$async$state_machine__8535__auto__;
})()
;})(switch__8534__auto__,c__8646__auto__))
})();
var state__8648__auto__ = (function (){var statearr_24398 = (f__8647__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8647__auto__.cljs$core$IFn$_invoke$arity$0() : f__8647__auto__.call(null));
(statearr_24398[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8646__auto__);

return statearr_24398;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8648__auto__);
});})(c__8646__auto__))
);

return c__8646__auto__;
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
var cs = (function (){var G__24643 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24643) : cljs.core.atom.call(null,G__24643));
})();
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async24644 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24644 = (function (mult,ch,cs,meta24645){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta24645 = meta24645;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24644.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24646,meta24645__$1){
var self__ = this;
var _24646__$1 = this;
return (new cljs.core.async.t_cljs$core$async24644(self__.mult,self__.ch,self__.cs,meta24645__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async24644.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24646){
var self__ = this;
var _24646__$1 = this;
return self__.meta24645;
});})(cs))
;

cljs.core.async.t_cljs$core$async24644.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async24644.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async24644.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async24644.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24644.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24644.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__24647_24867 = self__.cs;
var G__24648_24868 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24647_24867,G__24648_24868) : cljs.core.reset_BANG_.call(null,G__24647_24867,G__24648_24868));

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24644.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$mult,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta24645], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async24644.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24644.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24644";

cljs.core.async.t_cljs$core$async24644.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write(writer__6755__auto__,"cljs.core.async/t_cljs$core$async24644");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async24644 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async24644(mult__$1,ch__$1,cs__$1,meta24645){
return (new cljs.core.async.t_cljs$core$async24644(mult__$1,ch__$1,cs__$1,meta24645));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async24644(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__8646__auto___24869 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8646__auto___24869,cs,m,dchan,dctr,done){
return (function (){
var f__8647__auto__ = (function (){var switch__8534__auto__ = ((function (c__8646__auto___24869,cs,m,dchan,dctr,done){
return (function (state_24779){
var state_val_24780 = (state_24779[(1)]);
if((state_val_24780 === (7))){
var inst_24775 = (state_24779[(2)]);
var state_24779__$1 = state_24779;
var statearr_24781_24870 = state_24779__$1;
(statearr_24781_24870[(2)] = inst_24775);

(statearr_24781_24870[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24780 === (20))){
var inst_24680 = (state_24779[(7)]);
var inst_24690 = cljs.core.first(inst_24680);
var inst_24691 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24690,(0),null);
var inst_24692 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24690,(1),null);
var state_24779__$1 = (function (){var statearr_24782 = state_24779;
(statearr_24782[(8)] = inst_24691);

return statearr_24782;
})();
if(cljs.core.truth_(inst_24692)){
var statearr_24783_24871 = state_24779__$1;
(statearr_24783_24871[(1)] = (22));

} else {
var statearr_24784_24872 = state_24779__$1;
(statearr_24784_24872[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24780 === (27))){
var inst_24722 = (state_24779[(9)]);
var inst_24720 = (state_24779[(10)]);
var inst_24651 = (state_24779[(11)]);
var inst_24727 = (state_24779[(12)]);
var inst_24727__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24720,inst_24722);
var inst_24728 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_24727__$1,inst_24651,done);
var state_24779__$1 = (function (){var statearr_24785 = state_24779;
(statearr_24785[(12)] = inst_24727__$1);

return statearr_24785;
})();
if(cljs.core.truth_(inst_24728)){
var statearr_24786_24873 = state_24779__$1;
(statearr_24786_24873[(1)] = (30));

} else {
var statearr_24787_24874 = state_24779__$1;
(statearr_24787_24874[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24780 === (1))){
var state_24779__$1 = state_24779;
var statearr_24788_24875 = state_24779__$1;
(statearr_24788_24875[(2)] = null);

(statearr_24788_24875[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24780 === (24))){
var inst_24680 = (state_24779[(7)]);
var inst_24697 = (state_24779[(2)]);
var inst_24698 = cljs.core.next(inst_24680);
var inst_24660 = inst_24698;
var inst_24661 = null;
var inst_24662 = (0);
var inst_24663 = (0);
var state_24779__$1 = (function (){var statearr_24789 = state_24779;
(statearr_24789[(13)] = inst_24663);

(statearr_24789[(14)] = inst_24660);

(statearr_24789[(15)] = inst_24662);

(statearr_24789[(16)] = inst_24697);

(statearr_24789[(17)] = inst_24661);

return statearr_24789;
})();
var statearr_24790_24876 = state_24779__$1;
(statearr_24790_24876[(2)] = null);

(statearr_24790_24876[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24780 === (39))){
var state_24779__$1 = state_24779;
var statearr_24794_24877 = state_24779__$1;
(statearr_24794_24877[(2)] = null);

(statearr_24794_24877[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24780 === (4))){
var inst_24651 = (state_24779[(11)]);
var inst_24651__$1 = (state_24779[(2)]);
var inst_24652 = (inst_24651__$1 == null);
var state_24779__$1 = (function (){var statearr_24795 = state_24779;
(statearr_24795[(11)] = inst_24651__$1);

return statearr_24795;
})();
if(cljs.core.truth_(inst_24652)){
var statearr_24796_24878 = state_24779__$1;
(statearr_24796_24878[(1)] = (5));

} else {
var statearr_24797_24879 = state_24779__$1;
(statearr_24797_24879[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24780 === (15))){
var inst_24663 = (state_24779[(13)]);
var inst_24660 = (state_24779[(14)]);
var inst_24662 = (state_24779[(15)]);
var inst_24661 = (state_24779[(17)]);
var inst_24676 = (state_24779[(2)]);
var inst_24677 = (inst_24663 + (1));
var tmp24791 = inst_24660;
var tmp24792 = inst_24662;
var tmp24793 = inst_24661;
var inst_24660__$1 = tmp24791;
var inst_24661__$1 = tmp24793;
var inst_24662__$1 = tmp24792;
var inst_24663__$1 = inst_24677;
var state_24779__$1 = (function (){var statearr_24798 = state_24779;
(statearr_24798[(13)] = inst_24663__$1);

(statearr_24798[(14)] = inst_24660__$1);

(statearr_24798[(15)] = inst_24662__$1);

(statearr_24798[(17)] = inst_24661__$1);

(statearr_24798[(18)] = inst_24676);

return statearr_24798;
})();
var statearr_24799_24880 = state_24779__$1;
(statearr_24799_24880[(2)] = null);

(statearr_24799_24880[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24780 === (21))){
var inst_24701 = (state_24779[(2)]);
var state_24779__$1 = state_24779;
var statearr_24803_24881 = state_24779__$1;
(statearr_24803_24881[(2)] = inst_24701);

(statearr_24803_24881[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24780 === (31))){
var inst_24727 = (state_24779[(12)]);
var inst_24731 = done(null);
var inst_24732 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_24727);
var state_24779__$1 = (function (){var statearr_24804 = state_24779;
(statearr_24804[(19)] = inst_24731);

return statearr_24804;
})();
var statearr_24805_24882 = state_24779__$1;
(statearr_24805_24882[(2)] = inst_24732);

(statearr_24805_24882[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24780 === (32))){
var inst_24722 = (state_24779[(9)]);
var inst_24720 = (state_24779[(10)]);
var inst_24721 = (state_24779[(20)]);
var inst_24719 = (state_24779[(21)]);
var inst_24734 = (state_24779[(2)]);
var inst_24735 = (inst_24722 + (1));
var tmp24800 = inst_24720;
var tmp24801 = inst_24721;
var tmp24802 = inst_24719;
var inst_24719__$1 = tmp24802;
var inst_24720__$1 = tmp24800;
var inst_24721__$1 = tmp24801;
var inst_24722__$1 = inst_24735;
var state_24779__$1 = (function (){var statearr_24806 = state_24779;
(statearr_24806[(9)] = inst_24722__$1);

(statearr_24806[(10)] = inst_24720__$1);

(statearr_24806[(22)] = inst_24734);

(statearr_24806[(20)] = inst_24721__$1);

(statearr_24806[(21)] = inst_24719__$1);

return statearr_24806;
})();
var statearr_24807_24883 = state_24779__$1;
(statearr_24807_24883[(2)] = null);

(statearr_24807_24883[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24780 === (40))){
var inst_24747 = (state_24779[(23)]);
var inst_24751 = done(null);
var inst_24752 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_24747);
var state_24779__$1 = (function (){var statearr_24808 = state_24779;
(statearr_24808[(24)] = inst_24751);

return statearr_24808;
})();
var statearr_24809_24884 = state_24779__$1;
(statearr_24809_24884[(2)] = inst_24752);

(statearr_24809_24884[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24780 === (33))){
var inst_24738 = (state_24779[(25)]);
var inst_24740 = cljs.core.chunked_seq_QMARK_(inst_24738);
var state_24779__$1 = state_24779;
if(inst_24740){
var statearr_24810_24885 = state_24779__$1;
(statearr_24810_24885[(1)] = (36));

} else {
var statearr_24811_24886 = state_24779__$1;
(statearr_24811_24886[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24780 === (13))){
var inst_24670 = (state_24779[(26)]);
var inst_24673 = cljs.core.async.close_BANG_(inst_24670);
var state_24779__$1 = state_24779;
var statearr_24812_24887 = state_24779__$1;
(statearr_24812_24887[(2)] = inst_24673);

(statearr_24812_24887[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24780 === (22))){
var inst_24691 = (state_24779[(8)]);
var inst_24694 = cljs.core.async.close_BANG_(inst_24691);
var state_24779__$1 = state_24779;
var statearr_24813_24888 = state_24779__$1;
(statearr_24813_24888[(2)] = inst_24694);

(statearr_24813_24888[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24780 === (36))){
var inst_24738 = (state_24779[(25)]);
var inst_24742 = cljs.core.chunk_first(inst_24738);
var inst_24743 = cljs.core.chunk_rest(inst_24738);
var inst_24744 = cljs.core.count(inst_24742);
var inst_24719 = inst_24743;
var inst_24720 = inst_24742;
var inst_24721 = inst_24744;
var inst_24722 = (0);
var state_24779__$1 = (function (){var statearr_24814 = state_24779;
(statearr_24814[(9)] = inst_24722);

(statearr_24814[(10)] = inst_24720);

(statearr_24814[(20)] = inst_24721);

(statearr_24814[(21)] = inst_24719);

return statearr_24814;
})();
var statearr_24815_24889 = state_24779__$1;
(statearr_24815_24889[(2)] = null);

(statearr_24815_24889[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24780 === (41))){
var inst_24738 = (state_24779[(25)]);
var inst_24754 = (state_24779[(2)]);
var inst_24755 = cljs.core.next(inst_24738);
var inst_24719 = inst_24755;
var inst_24720 = null;
var inst_24721 = (0);
var inst_24722 = (0);
var state_24779__$1 = (function (){var statearr_24816 = state_24779;
(statearr_24816[(9)] = inst_24722);

(statearr_24816[(10)] = inst_24720);

(statearr_24816[(27)] = inst_24754);

(statearr_24816[(20)] = inst_24721);

(statearr_24816[(21)] = inst_24719);

return statearr_24816;
})();
var statearr_24817_24890 = state_24779__$1;
(statearr_24817_24890[(2)] = null);

(statearr_24817_24890[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24780 === (43))){
var state_24779__$1 = state_24779;
var statearr_24818_24891 = state_24779__$1;
(statearr_24818_24891[(2)] = null);

(statearr_24818_24891[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24780 === (29))){
var inst_24763 = (state_24779[(2)]);
var state_24779__$1 = state_24779;
var statearr_24819_24892 = state_24779__$1;
(statearr_24819_24892[(2)] = inst_24763);

(statearr_24819_24892[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24780 === (44))){
var inst_24772 = (state_24779[(2)]);
var state_24779__$1 = (function (){var statearr_24820 = state_24779;
(statearr_24820[(28)] = inst_24772);

return statearr_24820;
})();
var statearr_24821_24893 = state_24779__$1;
(statearr_24821_24893[(2)] = null);

(statearr_24821_24893[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24780 === (6))){
var inst_24711 = (state_24779[(29)]);
var inst_24710 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_24711__$1 = cljs.core.keys(inst_24710);
var inst_24712 = cljs.core.count(inst_24711__$1);
var inst_24713 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,inst_24712) : cljs.core.reset_BANG_.call(null,dctr,inst_24712));
var inst_24718 = cljs.core.seq(inst_24711__$1);
var inst_24719 = inst_24718;
var inst_24720 = null;
var inst_24721 = (0);
var inst_24722 = (0);
var state_24779__$1 = (function (){var statearr_24822 = state_24779;
(statearr_24822[(9)] = inst_24722);

(statearr_24822[(10)] = inst_24720);

(statearr_24822[(29)] = inst_24711__$1);

(statearr_24822[(30)] = inst_24713);

(statearr_24822[(20)] = inst_24721);

(statearr_24822[(21)] = inst_24719);

return statearr_24822;
})();
var statearr_24823_24894 = state_24779__$1;
(statearr_24823_24894[(2)] = null);

(statearr_24823_24894[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24780 === (28))){
var inst_24738 = (state_24779[(25)]);
var inst_24719 = (state_24779[(21)]);
var inst_24738__$1 = cljs.core.seq(inst_24719);
var state_24779__$1 = (function (){var statearr_24824 = state_24779;
(statearr_24824[(25)] = inst_24738__$1);

return statearr_24824;
})();
if(inst_24738__$1){
var statearr_24825_24895 = state_24779__$1;
(statearr_24825_24895[(1)] = (33));

} else {
var statearr_24826_24896 = state_24779__$1;
(statearr_24826_24896[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24780 === (25))){
var inst_24722 = (state_24779[(9)]);
var inst_24721 = (state_24779[(20)]);
var inst_24724 = (inst_24722 < inst_24721);
var inst_24725 = inst_24724;
var state_24779__$1 = state_24779;
if(cljs.core.truth_(inst_24725)){
var statearr_24827_24897 = state_24779__$1;
(statearr_24827_24897[(1)] = (27));

} else {
var statearr_24828_24898 = state_24779__$1;
(statearr_24828_24898[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24780 === (34))){
var state_24779__$1 = state_24779;
var statearr_24829_24899 = state_24779__$1;
(statearr_24829_24899[(2)] = null);

(statearr_24829_24899[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24780 === (17))){
var state_24779__$1 = state_24779;
var statearr_24830_24900 = state_24779__$1;
(statearr_24830_24900[(2)] = null);

(statearr_24830_24900[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24780 === (3))){
var inst_24777 = (state_24779[(2)]);
var state_24779__$1 = state_24779;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24779__$1,inst_24777);
} else {
if((state_val_24780 === (12))){
var inst_24706 = (state_24779[(2)]);
var state_24779__$1 = state_24779;
var statearr_24831_24901 = state_24779__$1;
(statearr_24831_24901[(2)] = inst_24706);

(statearr_24831_24901[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24780 === (2))){
var state_24779__$1 = state_24779;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24779__$1,(4),ch);
} else {
if((state_val_24780 === (23))){
var state_24779__$1 = state_24779;
var statearr_24832_24902 = state_24779__$1;
(statearr_24832_24902[(2)] = null);

(statearr_24832_24902[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24780 === (35))){
var inst_24761 = (state_24779[(2)]);
var state_24779__$1 = state_24779;
var statearr_24833_24903 = state_24779__$1;
(statearr_24833_24903[(2)] = inst_24761);

(statearr_24833_24903[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24780 === (19))){
var inst_24680 = (state_24779[(7)]);
var inst_24684 = cljs.core.chunk_first(inst_24680);
var inst_24685 = cljs.core.chunk_rest(inst_24680);
var inst_24686 = cljs.core.count(inst_24684);
var inst_24660 = inst_24685;
var inst_24661 = inst_24684;
var inst_24662 = inst_24686;
var inst_24663 = (0);
var state_24779__$1 = (function (){var statearr_24834 = state_24779;
(statearr_24834[(13)] = inst_24663);

(statearr_24834[(14)] = inst_24660);

(statearr_24834[(15)] = inst_24662);

(statearr_24834[(17)] = inst_24661);

return statearr_24834;
})();
var statearr_24835_24904 = state_24779__$1;
(statearr_24835_24904[(2)] = null);

(statearr_24835_24904[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24780 === (11))){
var inst_24660 = (state_24779[(14)]);
var inst_24680 = (state_24779[(7)]);
var inst_24680__$1 = cljs.core.seq(inst_24660);
var state_24779__$1 = (function (){var statearr_24836 = state_24779;
(statearr_24836[(7)] = inst_24680__$1);

return statearr_24836;
})();
if(inst_24680__$1){
var statearr_24837_24905 = state_24779__$1;
(statearr_24837_24905[(1)] = (16));

} else {
var statearr_24838_24906 = state_24779__$1;
(statearr_24838_24906[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24780 === (9))){
var inst_24708 = (state_24779[(2)]);
var state_24779__$1 = state_24779;
var statearr_24839_24907 = state_24779__$1;
(statearr_24839_24907[(2)] = inst_24708);

(statearr_24839_24907[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24780 === (5))){
var inst_24658 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_24659 = cljs.core.seq(inst_24658);
var inst_24660 = inst_24659;
var inst_24661 = null;
var inst_24662 = (0);
var inst_24663 = (0);
var state_24779__$1 = (function (){var statearr_24840 = state_24779;
(statearr_24840[(13)] = inst_24663);

(statearr_24840[(14)] = inst_24660);

(statearr_24840[(15)] = inst_24662);

(statearr_24840[(17)] = inst_24661);

return statearr_24840;
})();
var statearr_24841_24908 = state_24779__$1;
(statearr_24841_24908[(2)] = null);

(statearr_24841_24908[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24780 === (14))){
var state_24779__$1 = state_24779;
var statearr_24842_24909 = state_24779__$1;
(statearr_24842_24909[(2)] = null);

(statearr_24842_24909[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24780 === (45))){
var inst_24769 = (state_24779[(2)]);
var state_24779__$1 = state_24779;
var statearr_24843_24910 = state_24779__$1;
(statearr_24843_24910[(2)] = inst_24769);

(statearr_24843_24910[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24780 === (26))){
var inst_24711 = (state_24779[(29)]);
var inst_24765 = (state_24779[(2)]);
var inst_24766 = cljs.core.seq(inst_24711);
var state_24779__$1 = (function (){var statearr_24844 = state_24779;
(statearr_24844[(31)] = inst_24765);

return statearr_24844;
})();
if(inst_24766){
var statearr_24845_24911 = state_24779__$1;
(statearr_24845_24911[(1)] = (42));

} else {
var statearr_24846_24912 = state_24779__$1;
(statearr_24846_24912[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24780 === (16))){
var inst_24680 = (state_24779[(7)]);
var inst_24682 = cljs.core.chunked_seq_QMARK_(inst_24680);
var state_24779__$1 = state_24779;
if(inst_24682){
var statearr_24847_24913 = state_24779__$1;
(statearr_24847_24913[(1)] = (19));

} else {
var statearr_24848_24914 = state_24779__$1;
(statearr_24848_24914[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24780 === (38))){
var inst_24758 = (state_24779[(2)]);
var state_24779__$1 = state_24779;
var statearr_24849_24915 = state_24779__$1;
(statearr_24849_24915[(2)] = inst_24758);

(statearr_24849_24915[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24780 === (30))){
var state_24779__$1 = state_24779;
var statearr_24850_24916 = state_24779__$1;
(statearr_24850_24916[(2)] = null);

(statearr_24850_24916[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24780 === (10))){
var inst_24663 = (state_24779[(13)]);
var inst_24661 = (state_24779[(17)]);
var inst_24669 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24661,inst_24663);
var inst_24670 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24669,(0),null);
var inst_24671 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24669,(1),null);
var state_24779__$1 = (function (){var statearr_24851 = state_24779;
(statearr_24851[(26)] = inst_24670);

return statearr_24851;
})();
if(cljs.core.truth_(inst_24671)){
var statearr_24852_24917 = state_24779__$1;
(statearr_24852_24917[(1)] = (13));

} else {
var statearr_24853_24918 = state_24779__$1;
(statearr_24853_24918[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24780 === (18))){
var inst_24704 = (state_24779[(2)]);
var state_24779__$1 = state_24779;
var statearr_24854_24919 = state_24779__$1;
(statearr_24854_24919[(2)] = inst_24704);

(statearr_24854_24919[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24780 === (42))){
var state_24779__$1 = state_24779;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24779__$1,(45),dchan);
} else {
if((state_val_24780 === (37))){
var inst_24747 = (state_24779[(23)]);
var inst_24738 = (state_24779[(25)]);
var inst_24651 = (state_24779[(11)]);
var inst_24747__$1 = cljs.core.first(inst_24738);
var inst_24748 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_24747__$1,inst_24651,done);
var state_24779__$1 = (function (){var statearr_24855 = state_24779;
(statearr_24855[(23)] = inst_24747__$1);

return statearr_24855;
})();
if(cljs.core.truth_(inst_24748)){
var statearr_24856_24920 = state_24779__$1;
(statearr_24856_24920[(1)] = (39));

} else {
var statearr_24857_24921 = state_24779__$1;
(statearr_24857_24921[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24780 === (8))){
var inst_24663 = (state_24779[(13)]);
var inst_24662 = (state_24779[(15)]);
var inst_24665 = (inst_24663 < inst_24662);
var inst_24666 = inst_24665;
var state_24779__$1 = state_24779;
if(cljs.core.truth_(inst_24666)){
var statearr_24858_24922 = state_24779__$1;
(statearr_24858_24922[(1)] = (10));

} else {
var statearr_24859_24923 = state_24779__$1;
(statearr_24859_24923[(1)] = (11));

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
});})(c__8646__auto___24869,cs,m,dchan,dctr,done))
;
return ((function (switch__8534__auto__,c__8646__auto___24869,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__8535__auto__ = null;
var cljs$core$async$mult_$_state_machine__8535__auto____0 = (function (){
var statearr_24863 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24863[(0)] = cljs$core$async$mult_$_state_machine__8535__auto__);

(statearr_24863[(1)] = (1));

return statearr_24863;
});
var cljs$core$async$mult_$_state_machine__8535__auto____1 = (function (state_24779){
while(true){
var ret_value__8536__auto__ = (function (){try{while(true){
var result__8537__auto__ = switch__8534__auto__(state_24779);
if(cljs.core.keyword_identical_QMARK_(result__8537__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8537__auto__;
}
break;
}
}catch (e24864){if((e24864 instanceof Object)){
var ex__8538__auto__ = e24864;
var statearr_24865_24924 = state_24779;
(statearr_24865_24924[(5)] = ex__8538__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24779);

return cljs.core.cst$kw$recur;
} else {
throw e24864;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8536__auto__,cljs.core.cst$kw$recur)){
var G__24925 = state_24779;
state_24779 = G__24925;
continue;
} else {
return ret_value__8536__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__8535__auto__ = function(state_24779){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__8535__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__8535__auto____1.call(this,state_24779);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__8535__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__8535__auto____0;
cljs$core$async$mult_$_state_machine__8535__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__8535__auto____1;
return cljs$core$async$mult_$_state_machine__8535__auto__;
})()
;})(switch__8534__auto__,c__8646__auto___24869,cs,m,dchan,dctr,done))
})();
var state__8648__auto__ = (function (){var statearr_24866 = (f__8647__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8647__auto__.cljs$core$IFn$_invoke$arity$0() : f__8647__auto__.call(null));
(statearr_24866[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8646__auto___24869);

return statearr_24866;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8648__auto__);
});})(c__8646__auto___24869,cs,m,dchan,dctr,done))
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
var args24926 = [];
var len__7214__auto___24929 = arguments.length;
var i__7215__auto___24930 = (0);
while(true){
if((i__7215__auto___24930 < len__7214__auto___24929)){
args24926.push((arguments[i__7215__auto___24930]));

var G__24931 = (i__7215__auto___24930 + (1));
i__7215__auto___24930 = G__24931;
continue;
} else {
}
break;
}

var G__24928 = args24926.length;
switch (G__24928) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24926.length)].join('')));

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
var len__7214__auto___24943 = arguments.length;
var i__7215__auto___24944 = (0);
while(true){
if((i__7215__auto___24944 < len__7214__auto___24943)){
args__7221__auto__.push((arguments[i__7215__auto___24944]));

var G__24945 = (i__7215__auto___24944 + (1));
i__7215__auto___24944 = G__24945;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((3) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7222__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__24937){
var map__24938 = p__24937;
var map__24938__$1 = ((((!((map__24938 == null)))?((((map__24938.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24938.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24938):map__24938);
var opts = map__24938__$1;
var statearr_24940_24946 = state;
(statearr_24940_24946[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts(((function (map__24938,map__24938__$1,opts){
return (function (val){
var statearr_24941_24947 = state;
(statearr_24941_24947[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__24938,map__24938__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_24942_24948 = state;
(statearr_24942_24948[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cb) : cljs.core.deref.call(null,cb)));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq24933){
var G__24934 = cljs.core.first(seq24933);
var seq24933__$1 = cljs.core.next(seq24933);
var G__24935 = cljs.core.first(seq24933__$1);
var seq24933__$2 = cljs.core.next(seq24933__$1);
var G__24936 = cljs.core.first(seq24933__$2);
var seq24933__$3 = cljs.core.next(seq24933__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24934,G__24935,G__24936,seq24933__$3);
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
var cs = (function (){var G__25115 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25115) : cljs.core.atom.call(null,G__25115));
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
if(typeof cljs.core.async.t_cljs$core$async25116 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25116 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25117){
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
this.meta25117 = meta25117;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25116.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25118,meta25117__$1){
var self__ = this;
var _25118__$1 = this;
return (new cljs.core.async.t_cljs$core$async25116(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25117__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25116.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25118){
var self__ = this;
var _25118__$1 = this;
return self__.meta25117;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25116.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25116.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25116.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async25116.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25116.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25116.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__25119_25281 = self__.cs;
var G__25120_25282 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25119_25281,G__25120_25282) : cljs.core.reset_BANG_.call(null,G__25119_25281,G__25120_25282));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25116.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25116.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async25116.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$change,cljs.core.with_meta(cljs.core.cst$sym$mix,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out], null))),cljs.core.cst$kw$doc,"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$pick,cljs.core.cst$sym$cs,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$out,cljs.core.cst$sym$changed,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$meta25117], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25116.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25116.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25116";

cljs.core.async.t_cljs$core$async25116.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write(writer__6755__auto__,"cljs.core.async/t_cljs$core$async25116");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async25116 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async25116(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25117){
return (new cljs.core.async.t_cljs$core$async25116(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25117));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async25116(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__8646__auto___25283 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8646__auto___25283,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__8647__auto__ = (function (){var switch__8534__auto__ = ((function (c__8646__auto___25283,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25218){
var state_val_25219 = (state_25218[(1)]);
if((state_val_25219 === (7))){
var inst_25136 = (state_25218[(2)]);
var state_25218__$1 = state_25218;
var statearr_25220_25284 = state_25218__$1;
(statearr_25220_25284[(2)] = inst_25136);

(statearr_25220_25284[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25219 === (20))){
var inst_25148 = (state_25218[(7)]);
var state_25218__$1 = state_25218;
var statearr_25221_25285 = state_25218__$1;
(statearr_25221_25285[(2)] = inst_25148);

(statearr_25221_25285[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25219 === (27))){
var state_25218__$1 = state_25218;
var statearr_25222_25286 = state_25218__$1;
(statearr_25222_25286[(2)] = null);

(statearr_25222_25286[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25219 === (1))){
var inst_25124 = (state_25218[(8)]);
var inst_25124__$1 = calc_state();
var inst_25126 = (inst_25124__$1 == null);
var inst_25127 = cljs.core.not(inst_25126);
var state_25218__$1 = (function (){var statearr_25223 = state_25218;
(statearr_25223[(8)] = inst_25124__$1);

return statearr_25223;
})();
if(inst_25127){
var statearr_25224_25287 = state_25218__$1;
(statearr_25224_25287[(1)] = (2));

} else {
var statearr_25225_25288 = state_25218__$1;
(statearr_25225_25288[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25219 === (24))){
var inst_25171 = (state_25218[(9)]);
var inst_25192 = (state_25218[(10)]);
var inst_25178 = (state_25218[(11)]);
var inst_25192__$1 = (inst_25171.cljs$core$IFn$_invoke$arity$1 ? inst_25171.cljs$core$IFn$_invoke$arity$1(inst_25178) : inst_25171.call(null,inst_25178));
var state_25218__$1 = (function (){var statearr_25226 = state_25218;
(statearr_25226[(10)] = inst_25192__$1);

return statearr_25226;
})();
if(cljs.core.truth_(inst_25192__$1)){
var statearr_25227_25289 = state_25218__$1;
(statearr_25227_25289[(1)] = (29));

} else {
var statearr_25228_25290 = state_25218__$1;
(statearr_25228_25290[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25219 === (4))){
var inst_25139 = (state_25218[(2)]);
var state_25218__$1 = state_25218;
if(cljs.core.truth_(inst_25139)){
var statearr_25229_25291 = state_25218__$1;
(statearr_25229_25291[(1)] = (8));

} else {
var statearr_25230_25292 = state_25218__$1;
(statearr_25230_25292[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25219 === (15))){
var inst_25165 = (state_25218[(2)]);
var state_25218__$1 = state_25218;
if(cljs.core.truth_(inst_25165)){
var statearr_25231_25293 = state_25218__$1;
(statearr_25231_25293[(1)] = (19));

} else {
var statearr_25232_25294 = state_25218__$1;
(statearr_25232_25294[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25219 === (21))){
var inst_25170 = (state_25218[(12)]);
var inst_25170__$1 = (state_25218[(2)]);
var inst_25171 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25170__$1,cljs.core.cst$kw$solos);
var inst_25172 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25170__$1,cljs.core.cst$kw$mutes);
var inst_25173 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25170__$1,cljs.core.cst$kw$reads);
var state_25218__$1 = (function (){var statearr_25233 = state_25218;
(statearr_25233[(9)] = inst_25171);

(statearr_25233[(13)] = inst_25172);

(statearr_25233[(12)] = inst_25170__$1);

return statearr_25233;
})();
return cljs.core.async.ioc_alts_BANG_(state_25218__$1,(22),inst_25173);
} else {
if((state_val_25219 === (31))){
var inst_25200 = (state_25218[(2)]);
var state_25218__$1 = state_25218;
if(cljs.core.truth_(inst_25200)){
var statearr_25234_25295 = state_25218__$1;
(statearr_25234_25295[(1)] = (32));

} else {
var statearr_25235_25296 = state_25218__$1;
(statearr_25235_25296[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25219 === (32))){
var inst_25177 = (state_25218[(14)]);
var state_25218__$1 = state_25218;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25218__$1,(35),out,inst_25177);
} else {
if((state_val_25219 === (33))){
var inst_25170 = (state_25218[(12)]);
var inst_25148 = inst_25170;
var state_25218__$1 = (function (){var statearr_25236 = state_25218;
(statearr_25236[(7)] = inst_25148);

return statearr_25236;
})();
var statearr_25237_25297 = state_25218__$1;
(statearr_25237_25297[(2)] = null);

(statearr_25237_25297[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25219 === (13))){
var inst_25148 = (state_25218[(7)]);
var inst_25155 = inst_25148.cljs$lang$protocol_mask$partition0$;
var inst_25156 = (inst_25155 & (64));
var inst_25157 = inst_25148.cljs$core$ISeq$;
var inst_25158 = (inst_25156) || (inst_25157);
var state_25218__$1 = state_25218;
if(cljs.core.truth_(inst_25158)){
var statearr_25238_25298 = state_25218__$1;
(statearr_25238_25298[(1)] = (16));

} else {
var statearr_25239_25299 = state_25218__$1;
(statearr_25239_25299[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25219 === (22))){
var inst_25178 = (state_25218[(11)]);
var inst_25177 = (state_25218[(14)]);
var inst_25176 = (state_25218[(2)]);
var inst_25177__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25176,(0),null);
var inst_25178__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25176,(1),null);
var inst_25179 = (inst_25177__$1 == null);
var inst_25180 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25178__$1,change);
var inst_25181 = (inst_25179) || (inst_25180);
var state_25218__$1 = (function (){var statearr_25240 = state_25218;
(statearr_25240[(11)] = inst_25178__$1);

(statearr_25240[(14)] = inst_25177__$1);

return statearr_25240;
})();
if(cljs.core.truth_(inst_25181)){
var statearr_25241_25300 = state_25218__$1;
(statearr_25241_25300[(1)] = (23));

} else {
var statearr_25242_25301 = state_25218__$1;
(statearr_25242_25301[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25219 === (36))){
var inst_25170 = (state_25218[(12)]);
var inst_25148 = inst_25170;
var state_25218__$1 = (function (){var statearr_25243 = state_25218;
(statearr_25243[(7)] = inst_25148);

return statearr_25243;
})();
var statearr_25244_25302 = state_25218__$1;
(statearr_25244_25302[(2)] = null);

(statearr_25244_25302[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25219 === (29))){
var inst_25192 = (state_25218[(10)]);
var state_25218__$1 = state_25218;
var statearr_25245_25303 = state_25218__$1;
(statearr_25245_25303[(2)] = inst_25192);

(statearr_25245_25303[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25219 === (6))){
var state_25218__$1 = state_25218;
var statearr_25246_25304 = state_25218__$1;
(statearr_25246_25304[(2)] = false);

(statearr_25246_25304[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25219 === (28))){
var inst_25188 = (state_25218[(2)]);
var inst_25189 = calc_state();
var inst_25148 = inst_25189;
var state_25218__$1 = (function (){var statearr_25247 = state_25218;
(statearr_25247[(15)] = inst_25188);

(statearr_25247[(7)] = inst_25148);

return statearr_25247;
})();
var statearr_25248_25305 = state_25218__$1;
(statearr_25248_25305[(2)] = null);

(statearr_25248_25305[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25219 === (25))){
var inst_25214 = (state_25218[(2)]);
var state_25218__$1 = state_25218;
var statearr_25249_25306 = state_25218__$1;
(statearr_25249_25306[(2)] = inst_25214);

(statearr_25249_25306[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25219 === (34))){
var inst_25212 = (state_25218[(2)]);
var state_25218__$1 = state_25218;
var statearr_25250_25307 = state_25218__$1;
(statearr_25250_25307[(2)] = inst_25212);

(statearr_25250_25307[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25219 === (17))){
var state_25218__$1 = state_25218;
var statearr_25251_25308 = state_25218__$1;
(statearr_25251_25308[(2)] = false);

(statearr_25251_25308[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25219 === (3))){
var state_25218__$1 = state_25218;
var statearr_25252_25309 = state_25218__$1;
(statearr_25252_25309[(2)] = false);

(statearr_25252_25309[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25219 === (12))){
var inst_25216 = (state_25218[(2)]);
var state_25218__$1 = state_25218;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25218__$1,inst_25216);
} else {
if((state_val_25219 === (2))){
var inst_25124 = (state_25218[(8)]);
var inst_25129 = inst_25124.cljs$lang$protocol_mask$partition0$;
var inst_25130 = (inst_25129 & (64));
var inst_25131 = inst_25124.cljs$core$ISeq$;
var inst_25132 = (inst_25130) || (inst_25131);
var state_25218__$1 = state_25218;
if(cljs.core.truth_(inst_25132)){
var statearr_25253_25310 = state_25218__$1;
(statearr_25253_25310[(1)] = (5));

} else {
var statearr_25254_25311 = state_25218__$1;
(statearr_25254_25311[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25219 === (23))){
var inst_25177 = (state_25218[(14)]);
var inst_25183 = (inst_25177 == null);
var state_25218__$1 = state_25218;
if(cljs.core.truth_(inst_25183)){
var statearr_25255_25312 = state_25218__$1;
(statearr_25255_25312[(1)] = (26));

} else {
var statearr_25256_25313 = state_25218__$1;
(statearr_25256_25313[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25219 === (35))){
var inst_25203 = (state_25218[(2)]);
var state_25218__$1 = state_25218;
if(cljs.core.truth_(inst_25203)){
var statearr_25257_25314 = state_25218__$1;
(statearr_25257_25314[(1)] = (36));

} else {
var statearr_25258_25315 = state_25218__$1;
(statearr_25258_25315[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25219 === (19))){
var inst_25148 = (state_25218[(7)]);
var inst_25167 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_25148);
var state_25218__$1 = state_25218;
var statearr_25259_25316 = state_25218__$1;
(statearr_25259_25316[(2)] = inst_25167);

(statearr_25259_25316[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25219 === (11))){
var inst_25148 = (state_25218[(7)]);
var inst_25152 = (inst_25148 == null);
var inst_25153 = cljs.core.not(inst_25152);
var state_25218__$1 = state_25218;
if(inst_25153){
var statearr_25260_25317 = state_25218__$1;
(statearr_25260_25317[(1)] = (13));

} else {
var statearr_25261_25318 = state_25218__$1;
(statearr_25261_25318[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25219 === (9))){
var inst_25124 = (state_25218[(8)]);
var state_25218__$1 = state_25218;
var statearr_25262_25319 = state_25218__$1;
(statearr_25262_25319[(2)] = inst_25124);

(statearr_25262_25319[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25219 === (5))){
var state_25218__$1 = state_25218;
var statearr_25263_25320 = state_25218__$1;
(statearr_25263_25320[(2)] = true);

(statearr_25263_25320[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25219 === (14))){
var state_25218__$1 = state_25218;
var statearr_25264_25321 = state_25218__$1;
(statearr_25264_25321[(2)] = false);

(statearr_25264_25321[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25219 === (26))){
var inst_25178 = (state_25218[(11)]);
var inst_25185 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_25178);
var state_25218__$1 = state_25218;
var statearr_25265_25322 = state_25218__$1;
(statearr_25265_25322[(2)] = inst_25185);

(statearr_25265_25322[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25219 === (16))){
var state_25218__$1 = state_25218;
var statearr_25266_25323 = state_25218__$1;
(statearr_25266_25323[(2)] = true);

(statearr_25266_25323[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25219 === (38))){
var inst_25208 = (state_25218[(2)]);
var state_25218__$1 = state_25218;
var statearr_25267_25324 = state_25218__$1;
(statearr_25267_25324[(2)] = inst_25208);

(statearr_25267_25324[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25219 === (30))){
var inst_25171 = (state_25218[(9)]);
var inst_25178 = (state_25218[(11)]);
var inst_25172 = (state_25218[(13)]);
var inst_25195 = cljs.core.empty_QMARK_(inst_25171);
var inst_25196 = (inst_25172.cljs$core$IFn$_invoke$arity$1 ? inst_25172.cljs$core$IFn$_invoke$arity$1(inst_25178) : inst_25172.call(null,inst_25178));
var inst_25197 = cljs.core.not(inst_25196);
var inst_25198 = (inst_25195) && (inst_25197);
var state_25218__$1 = state_25218;
var statearr_25268_25325 = state_25218__$1;
(statearr_25268_25325[(2)] = inst_25198);

(statearr_25268_25325[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25219 === (10))){
var inst_25124 = (state_25218[(8)]);
var inst_25144 = (state_25218[(2)]);
var inst_25145 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25144,cljs.core.cst$kw$solos);
var inst_25146 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25144,cljs.core.cst$kw$mutes);
var inst_25147 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25144,cljs.core.cst$kw$reads);
var inst_25148 = inst_25124;
var state_25218__$1 = (function (){var statearr_25269 = state_25218;
(statearr_25269[(16)] = inst_25147);

(statearr_25269[(17)] = inst_25146);

(statearr_25269[(7)] = inst_25148);

(statearr_25269[(18)] = inst_25145);

return statearr_25269;
})();
var statearr_25270_25326 = state_25218__$1;
(statearr_25270_25326[(2)] = null);

(statearr_25270_25326[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25219 === (18))){
var inst_25162 = (state_25218[(2)]);
var state_25218__$1 = state_25218;
var statearr_25271_25327 = state_25218__$1;
(statearr_25271_25327[(2)] = inst_25162);

(statearr_25271_25327[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25219 === (37))){
var state_25218__$1 = state_25218;
var statearr_25272_25328 = state_25218__$1;
(statearr_25272_25328[(2)] = null);

(statearr_25272_25328[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25219 === (8))){
var inst_25124 = (state_25218[(8)]);
var inst_25141 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_25124);
var state_25218__$1 = state_25218;
var statearr_25273_25329 = state_25218__$1;
(statearr_25273_25329[(2)] = inst_25141);

(statearr_25273_25329[(1)] = (10));


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
});})(c__8646__auto___25283,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__8534__auto__,c__8646__auto___25283,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__8535__auto__ = null;
var cljs$core$async$mix_$_state_machine__8535__auto____0 = (function (){
var statearr_25277 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25277[(0)] = cljs$core$async$mix_$_state_machine__8535__auto__);

(statearr_25277[(1)] = (1));

return statearr_25277;
});
var cljs$core$async$mix_$_state_machine__8535__auto____1 = (function (state_25218){
while(true){
var ret_value__8536__auto__ = (function (){try{while(true){
var result__8537__auto__ = switch__8534__auto__(state_25218);
if(cljs.core.keyword_identical_QMARK_(result__8537__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8537__auto__;
}
break;
}
}catch (e25278){if((e25278 instanceof Object)){
var ex__8538__auto__ = e25278;
var statearr_25279_25330 = state_25218;
(statearr_25279_25330[(5)] = ex__8538__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25218);

return cljs.core.cst$kw$recur;
} else {
throw e25278;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8536__auto__,cljs.core.cst$kw$recur)){
var G__25331 = state_25218;
state_25218 = G__25331;
continue;
} else {
return ret_value__8536__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__8535__auto__ = function(state_25218){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__8535__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__8535__auto____1.call(this,state_25218);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__8535__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__8535__auto____0;
cljs$core$async$mix_$_state_machine__8535__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__8535__auto____1;
return cljs$core$async$mix_$_state_machine__8535__auto__;
})()
;})(switch__8534__auto__,c__8646__auto___25283,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__8648__auto__ = (function (){var statearr_25280 = (f__8647__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8647__auto__.cljs$core$IFn$_invoke$arity$0() : f__8647__auto__.call(null));
(statearr_25280[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8646__auto___25283);

return statearr_25280;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8648__auto__);
});})(c__8646__auto___25283,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args25332 = [];
var len__7214__auto___25335 = arguments.length;
var i__7215__auto___25336 = (0);
while(true){
if((i__7215__auto___25336 < len__7214__auto___25335)){
args25332.push((arguments[i__7215__auto___25336]));

var G__25337 = (i__7215__auto___25336 + (1));
i__7215__auto___25336 = G__25337;
continue;
} else {
}
break;
}

var G__25334 = args25332.length;
switch (G__25334) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25332.length)].join('')));

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
var args25340 = [];
var len__7214__auto___25468 = arguments.length;
var i__7215__auto___25469 = (0);
while(true){
if((i__7215__auto___25469 < len__7214__auto___25468)){
args25340.push((arguments[i__7215__auto___25469]));

var G__25470 = (i__7215__auto___25469 + (1));
i__7215__auto___25469 = G__25470;
continue;
} else {
}
break;
}

var G__25342 = args25340.length;
switch (G__25342) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25340.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = (function (){var G__25343 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25343) : cljs.core.atom.call(null,G__25343));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__6156__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults)),topic);
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__6156__auto__,mults){
return (function (p1__25339_SHARP_){
if(cljs.core.truth_((p1__25339_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__25339_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__25339_SHARP_.call(null,topic)))){
return p1__25339_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__25339_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__6156__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async25344 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25344 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta25345){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta25345 = meta25345;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25344.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25346,meta25345__$1){
var self__ = this;
var _25346__$1 = this;
return (new cljs.core.async.t_cljs$core$async25344(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta25345__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25344.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25346){
var self__ = this;
var _25346__$1 = this;
return self__.meta25345;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25344.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25344.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25344.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async25344.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25344.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async25344.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__25347 = self__.mults;
var G__25348 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25347,G__25348) : cljs.core.reset_BANG_.call(null,G__25347,G__25348));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25344.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25344.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta25345], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25344.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25344.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25344";

cljs.core.async.t_cljs$core$async25344.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write(writer__6755__auto__,"cljs.core.async/t_cljs$core$async25344");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async25344 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async25344(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25345){
return (new cljs.core.async.t_cljs$core$async25344(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25345));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async25344(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__8646__auto___25472 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8646__auto___25472,mults,ensure_mult,p){
return (function (){
var f__8647__auto__ = (function (){var switch__8534__auto__ = ((function (c__8646__auto___25472,mults,ensure_mult,p){
return (function (state_25420){
var state_val_25421 = (state_25420[(1)]);
if((state_val_25421 === (7))){
var inst_25416 = (state_25420[(2)]);
var state_25420__$1 = state_25420;
var statearr_25422_25473 = state_25420__$1;
(statearr_25422_25473[(2)] = inst_25416);

(statearr_25422_25473[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25421 === (20))){
var state_25420__$1 = state_25420;
var statearr_25423_25474 = state_25420__$1;
(statearr_25423_25474[(2)] = null);

(statearr_25423_25474[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25421 === (1))){
var state_25420__$1 = state_25420;
var statearr_25424_25475 = state_25420__$1;
(statearr_25424_25475[(2)] = null);

(statearr_25424_25475[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25421 === (24))){
var inst_25399 = (state_25420[(7)]);
var inst_25408 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_25399);
var state_25420__$1 = state_25420;
var statearr_25425_25476 = state_25420__$1;
(statearr_25425_25476[(2)] = inst_25408);

(statearr_25425_25476[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25421 === (4))){
var inst_25351 = (state_25420[(8)]);
var inst_25351__$1 = (state_25420[(2)]);
var inst_25352 = (inst_25351__$1 == null);
var state_25420__$1 = (function (){var statearr_25426 = state_25420;
(statearr_25426[(8)] = inst_25351__$1);

return statearr_25426;
})();
if(cljs.core.truth_(inst_25352)){
var statearr_25427_25477 = state_25420__$1;
(statearr_25427_25477[(1)] = (5));

} else {
var statearr_25428_25478 = state_25420__$1;
(statearr_25428_25478[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25421 === (15))){
var inst_25393 = (state_25420[(2)]);
var state_25420__$1 = state_25420;
var statearr_25429_25479 = state_25420__$1;
(statearr_25429_25479[(2)] = inst_25393);

(statearr_25429_25479[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25421 === (21))){
var inst_25413 = (state_25420[(2)]);
var state_25420__$1 = (function (){var statearr_25430 = state_25420;
(statearr_25430[(9)] = inst_25413);

return statearr_25430;
})();
var statearr_25431_25480 = state_25420__$1;
(statearr_25431_25480[(2)] = null);

(statearr_25431_25480[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25421 === (13))){
var inst_25375 = (state_25420[(10)]);
var inst_25377 = cljs.core.chunked_seq_QMARK_(inst_25375);
var state_25420__$1 = state_25420;
if(inst_25377){
var statearr_25432_25481 = state_25420__$1;
(statearr_25432_25481[(1)] = (16));

} else {
var statearr_25433_25482 = state_25420__$1;
(statearr_25433_25482[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25421 === (22))){
var inst_25405 = (state_25420[(2)]);
var state_25420__$1 = state_25420;
if(cljs.core.truth_(inst_25405)){
var statearr_25434_25483 = state_25420__$1;
(statearr_25434_25483[(1)] = (23));

} else {
var statearr_25435_25484 = state_25420__$1;
(statearr_25435_25484[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25421 === (6))){
var inst_25399 = (state_25420[(7)]);
var inst_25351 = (state_25420[(8)]);
var inst_25401 = (state_25420[(11)]);
var inst_25399__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_25351) : topic_fn.call(null,inst_25351));
var inst_25400 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_25401__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25400,inst_25399__$1);
var state_25420__$1 = (function (){var statearr_25436 = state_25420;
(statearr_25436[(7)] = inst_25399__$1);

(statearr_25436[(11)] = inst_25401__$1);

return statearr_25436;
})();
if(cljs.core.truth_(inst_25401__$1)){
var statearr_25437_25485 = state_25420__$1;
(statearr_25437_25485[(1)] = (19));

} else {
var statearr_25438_25486 = state_25420__$1;
(statearr_25438_25486[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25421 === (25))){
var inst_25410 = (state_25420[(2)]);
var state_25420__$1 = state_25420;
var statearr_25439_25487 = state_25420__$1;
(statearr_25439_25487[(2)] = inst_25410);

(statearr_25439_25487[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25421 === (17))){
var inst_25375 = (state_25420[(10)]);
var inst_25384 = cljs.core.first(inst_25375);
var inst_25385 = cljs.core.async.muxch_STAR_(inst_25384);
var inst_25386 = cljs.core.async.close_BANG_(inst_25385);
var inst_25387 = cljs.core.next(inst_25375);
var inst_25361 = inst_25387;
var inst_25362 = null;
var inst_25363 = (0);
var inst_25364 = (0);
var state_25420__$1 = (function (){var statearr_25440 = state_25420;
(statearr_25440[(12)] = inst_25364);

(statearr_25440[(13)] = inst_25362);

(statearr_25440[(14)] = inst_25363);

(statearr_25440[(15)] = inst_25361);

(statearr_25440[(16)] = inst_25386);

return statearr_25440;
})();
var statearr_25441_25488 = state_25420__$1;
(statearr_25441_25488[(2)] = null);

(statearr_25441_25488[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25421 === (3))){
var inst_25418 = (state_25420[(2)]);
var state_25420__$1 = state_25420;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25420__$1,inst_25418);
} else {
if((state_val_25421 === (12))){
var inst_25395 = (state_25420[(2)]);
var state_25420__$1 = state_25420;
var statearr_25442_25489 = state_25420__$1;
(statearr_25442_25489[(2)] = inst_25395);

(statearr_25442_25489[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25421 === (2))){
var state_25420__$1 = state_25420;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25420__$1,(4),ch);
} else {
if((state_val_25421 === (23))){
var state_25420__$1 = state_25420;
var statearr_25443_25490 = state_25420__$1;
(statearr_25443_25490[(2)] = null);

(statearr_25443_25490[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25421 === (19))){
var inst_25351 = (state_25420[(8)]);
var inst_25401 = (state_25420[(11)]);
var inst_25403 = cljs.core.async.muxch_STAR_(inst_25401);
var state_25420__$1 = state_25420;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25420__$1,(22),inst_25403,inst_25351);
} else {
if((state_val_25421 === (11))){
var inst_25375 = (state_25420[(10)]);
var inst_25361 = (state_25420[(15)]);
var inst_25375__$1 = cljs.core.seq(inst_25361);
var state_25420__$1 = (function (){var statearr_25444 = state_25420;
(statearr_25444[(10)] = inst_25375__$1);

return statearr_25444;
})();
if(inst_25375__$1){
var statearr_25445_25491 = state_25420__$1;
(statearr_25445_25491[(1)] = (13));

} else {
var statearr_25446_25492 = state_25420__$1;
(statearr_25446_25492[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25421 === (9))){
var inst_25397 = (state_25420[(2)]);
var state_25420__$1 = state_25420;
var statearr_25447_25493 = state_25420__$1;
(statearr_25447_25493[(2)] = inst_25397);

(statearr_25447_25493[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25421 === (5))){
var inst_25358 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_25359 = cljs.core.vals(inst_25358);
var inst_25360 = cljs.core.seq(inst_25359);
var inst_25361 = inst_25360;
var inst_25362 = null;
var inst_25363 = (0);
var inst_25364 = (0);
var state_25420__$1 = (function (){var statearr_25448 = state_25420;
(statearr_25448[(12)] = inst_25364);

(statearr_25448[(13)] = inst_25362);

(statearr_25448[(14)] = inst_25363);

(statearr_25448[(15)] = inst_25361);

return statearr_25448;
})();
var statearr_25449_25494 = state_25420__$1;
(statearr_25449_25494[(2)] = null);

(statearr_25449_25494[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25421 === (14))){
var state_25420__$1 = state_25420;
var statearr_25453_25495 = state_25420__$1;
(statearr_25453_25495[(2)] = null);

(statearr_25453_25495[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25421 === (16))){
var inst_25375 = (state_25420[(10)]);
var inst_25379 = cljs.core.chunk_first(inst_25375);
var inst_25380 = cljs.core.chunk_rest(inst_25375);
var inst_25381 = cljs.core.count(inst_25379);
var inst_25361 = inst_25380;
var inst_25362 = inst_25379;
var inst_25363 = inst_25381;
var inst_25364 = (0);
var state_25420__$1 = (function (){var statearr_25454 = state_25420;
(statearr_25454[(12)] = inst_25364);

(statearr_25454[(13)] = inst_25362);

(statearr_25454[(14)] = inst_25363);

(statearr_25454[(15)] = inst_25361);

return statearr_25454;
})();
var statearr_25455_25496 = state_25420__$1;
(statearr_25455_25496[(2)] = null);

(statearr_25455_25496[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25421 === (10))){
var inst_25364 = (state_25420[(12)]);
var inst_25362 = (state_25420[(13)]);
var inst_25363 = (state_25420[(14)]);
var inst_25361 = (state_25420[(15)]);
var inst_25369 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25362,inst_25364);
var inst_25370 = cljs.core.async.muxch_STAR_(inst_25369);
var inst_25371 = cljs.core.async.close_BANG_(inst_25370);
var inst_25372 = (inst_25364 + (1));
var tmp25450 = inst_25362;
var tmp25451 = inst_25363;
var tmp25452 = inst_25361;
var inst_25361__$1 = tmp25452;
var inst_25362__$1 = tmp25450;
var inst_25363__$1 = tmp25451;
var inst_25364__$1 = inst_25372;
var state_25420__$1 = (function (){var statearr_25456 = state_25420;
(statearr_25456[(12)] = inst_25364__$1);

(statearr_25456[(13)] = inst_25362__$1);

(statearr_25456[(17)] = inst_25371);

(statearr_25456[(14)] = inst_25363__$1);

(statearr_25456[(15)] = inst_25361__$1);

return statearr_25456;
})();
var statearr_25457_25497 = state_25420__$1;
(statearr_25457_25497[(2)] = null);

(statearr_25457_25497[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25421 === (18))){
var inst_25390 = (state_25420[(2)]);
var state_25420__$1 = state_25420;
var statearr_25458_25498 = state_25420__$1;
(statearr_25458_25498[(2)] = inst_25390);

(statearr_25458_25498[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25421 === (8))){
var inst_25364 = (state_25420[(12)]);
var inst_25363 = (state_25420[(14)]);
var inst_25366 = (inst_25364 < inst_25363);
var inst_25367 = inst_25366;
var state_25420__$1 = state_25420;
if(cljs.core.truth_(inst_25367)){
var statearr_25459_25499 = state_25420__$1;
(statearr_25459_25499[(1)] = (10));

} else {
var statearr_25460_25500 = state_25420__$1;
(statearr_25460_25500[(1)] = (11));

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
});})(c__8646__auto___25472,mults,ensure_mult,p))
;
return ((function (switch__8534__auto__,c__8646__auto___25472,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__8535__auto__ = null;
var cljs$core$async$state_machine__8535__auto____0 = (function (){
var statearr_25464 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25464[(0)] = cljs$core$async$state_machine__8535__auto__);

(statearr_25464[(1)] = (1));

return statearr_25464;
});
var cljs$core$async$state_machine__8535__auto____1 = (function (state_25420){
while(true){
var ret_value__8536__auto__ = (function (){try{while(true){
var result__8537__auto__ = switch__8534__auto__(state_25420);
if(cljs.core.keyword_identical_QMARK_(result__8537__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8537__auto__;
}
break;
}
}catch (e25465){if((e25465 instanceof Object)){
var ex__8538__auto__ = e25465;
var statearr_25466_25501 = state_25420;
(statearr_25466_25501[(5)] = ex__8538__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25420);

return cljs.core.cst$kw$recur;
} else {
throw e25465;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8536__auto__,cljs.core.cst$kw$recur)){
var G__25502 = state_25420;
state_25420 = G__25502;
continue;
} else {
return ret_value__8536__auto__;
}
break;
}
});
cljs$core$async$state_machine__8535__auto__ = function(state_25420){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8535__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8535__auto____1.call(this,state_25420);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8535__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8535__auto____0;
cljs$core$async$state_machine__8535__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8535__auto____1;
return cljs$core$async$state_machine__8535__auto__;
})()
;})(switch__8534__auto__,c__8646__auto___25472,mults,ensure_mult,p))
})();
var state__8648__auto__ = (function (){var statearr_25467 = (f__8647__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8647__auto__.cljs$core$IFn$_invoke$arity$0() : f__8647__auto__.call(null));
(statearr_25467[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8646__auto___25472);

return statearr_25467;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8648__auto__);
});})(c__8646__auto___25472,mults,ensure_mult,p))
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
var args25503 = [];
var len__7214__auto___25506 = arguments.length;
var i__7215__auto___25507 = (0);
while(true){
if((i__7215__auto___25507 < len__7214__auto___25506)){
args25503.push((arguments[i__7215__auto___25507]));

var G__25508 = (i__7215__auto___25507 + (1));
i__7215__auto___25507 = G__25508;
continue;
} else {
}
break;
}

var G__25505 = args25503.length;
switch (G__25505) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25503.length)].join('')));

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
var args25510 = [];
var len__7214__auto___25513 = arguments.length;
var i__7215__auto___25514 = (0);
while(true){
if((i__7215__auto___25514 < len__7214__auto___25513)){
args25510.push((arguments[i__7215__auto___25514]));

var G__25515 = (i__7215__auto___25514 + (1));
i__7215__auto___25514 = G__25515;
continue;
} else {
}
break;
}

var G__25512 = args25510.length;
switch (G__25512) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25510.length)].join('')));

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
var args25517 = [];
var len__7214__auto___25588 = arguments.length;
var i__7215__auto___25589 = (0);
while(true){
if((i__7215__auto___25589 < len__7214__auto___25588)){
args25517.push((arguments[i__7215__auto___25589]));

var G__25590 = (i__7215__auto___25589 + (1));
i__7215__auto___25589 = G__25590;
continue;
} else {
}
break;
}

var G__25519 = args25517.length;
switch (G__25519) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25517.length)].join('')));

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
var c__8646__auto___25592 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8646__auto___25592,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__8647__auto__ = (function (){var switch__8534__auto__ = ((function (c__8646__auto___25592,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_25558){
var state_val_25559 = (state_25558[(1)]);
if((state_val_25559 === (7))){
var state_25558__$1 = state_25558;
var statearr_25560_25593 = state_25558__$1;
(statearr_25560_25593[(2)] = null);

(statearr_25560_25593[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25559 === (1))){
var state_25558__$1 = state_25558;
var statearr_25561_25594 = state_25558__$1;
(statearr_25561_25594[(2)] = null);

(statearr_25561_25594[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25559 === (4))){
var inst_25522 = (state_25558[(7)]);
var inst_25524 = (inst_25522 < cnt);
var state_25558__$1 = state_25558;
if(cljs.core.truth_(inst_25524)){
var statearr_25562_25595 = state_25558__$1;
(statearr_25562_25595[(1)] = (6));

} else {
var statearr_25563_25596 = state_25558__$1;
(statearr_25563_25596[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25559 === (15))){
var inst_25554 = (state_25558[(2)]);
var state_25558__$1 = state_25558;
var statearr_25564_25597 = state_25558__$1;
(statearr_25564_25597[(2)] = inst_25554);

(statearr_25564_25597[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25559 === (13))){
var inst_25547 = cljs.core.async.close_BANG_(out);
var state_25558__$1 = state_25558;
var statearr_25565_25598 = state_25558__$1;
(statearr_25565_25598[(2)] = inst_25547);

(statearr_25565_25598[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25559 === (6))){
var state_25558__$1 = state_25558;
var statearr_25566_25599 = state_25558__$1;
(statearr_25566_25599[(2)] = null);

(statearr_25566_25599[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25559 === (3))){
var inst_25556 = (state_25558[(2)]);
var state_25558__$1 = state_25558;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25558__$1,inst_25556);
} else {
if((state_val_25559 === (12))){
var inst_25544 = (state_25558[(8)]);
var inst_25544__$1 = (state_25558[(2)]);
var inst_25545 = cljs.core.some(cljs.core.nil_QMARK_,inst_25544__$1);
var state_25558__$1 = (function (){var statearr_25567 = state_25558;
(statearr_25567[(8)] = inst_25544__$1);

return statearr_25567;
})();
if(cljs.core.truth_(inst_25545)){
var statearr_25568_25600 = state_25558__$1;
(statearr_25568_25600[(1)] = (13));

} else {
var statearr_25569_25601 = state_25558__$1;
(statearr_25569_25601[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25559 === (2))){
var inst_25521 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cnt) : cljs.core.reset_BANG_.call(null,dctr,cnt));
var inst_25522 = (0);
var state_25558__$1 = (function (){var statearr_25570 = state_25558;
(statearr_25570[(9)] = inst_25521);

(statearr_25570[(7)] = inst_25522);

return statearr_25570;
})();
var statearr_25571_25602 = state_25558__$1;
(statearr_25571_25602[(2)] = null);

(statearr_25571_25602[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25559 === (11))){
var inst_25522 = (state_25558[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_25558,(10),Object,null,(9));
var inst_25531 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_25522) : chs__$1.call(null,inst_25522));
var inst_25532 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_25522) : done.call(null,inst_25522));
var inst_25533 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_25531,inst_25532);
var state_25558__$1 = state_25558;
var statearr_25572_25603 = state_25558__$1;
(statearr_25572_25603[(2)] = inst_25533);


cljs.core.async.impl.ioc_helpers.process_exception(state_25558__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_25559 === (9))){
var inst_25522 = (state_25558[(7)]);
var inst_25535 = (state_25558[(2)]);
var inst_25536 = (inst_25522 + (1));
var inst_25522__$1 = inst_25536;
var state_25558__$1 = (function (){var statearr_25573 = state_25558;
(statearr_25573[(10)] = inst_25535);

(statearr_25573[(7)] = inst_25522__$1);

return statearr_25573;
})();
var statearr_25574_25604 = state_25558__$1;
(statearr_25574_25604[(2)] = null);

(statearr_25574_25604[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25559 === (5))){
var inst_25542 = (state_25558[(2)]);
var state_25558__$1 = (function (){var statearr_25575 = state_25558;
(statearr_25575[(11)] = inst_25542);

return statearr_25575;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25558__$1,(12),dchan);
} else {
if((state_val_25559 === (14))){
var inst_25544 = (state_25558[(8)]);
var inst_25549 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_25544);
var state_25558__$1 = state_25558;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25558__$1,(16),out,inst_25549);
} else {
if((state_val_25559 === (16))){
var inst_25551 = (state_25558[(2)]);
var state_25558__$1 = (function (){var statearr_25576 = state_25558;
(statearr_25576[(12)] = inst_25551);

return statearr_25576;
})();
var statearr_25577_25605 = state_25558__$1;
(statearr_25577_25605[(2)] = null);

(statearr_25577_25605[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25559 === (10))){
var inst_25526 = (state_25558[(2)]);
var inst_25527 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_25558__$1 = (function (){var statearr_25578 = state_25558;
(statearr_25578[(13)] = inst_25526);

return statearr_25578;
})();
var statearr_25579_25606 = state_25558__$1;
(statearr_25579_25606[(2)] = inst_25527);


cljs.core.async.impl.ioc_helpers.process_exception(state_25558__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_25559 === (8))){
var inst_25540 = (state_25558[(2)]);
var state_25558__$1 = state_25558;
var statearr_25580_25607 = state_25558__$1;
(statearr_25580_25607[(2)] = inst_25540);

(statearr_25580_25607[(1)] = (5));


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
});})(c__8646__auto___25592,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__8534__auto__,c__8646__auto___25592,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__8535__auto__ = null;
var cljs$core$async$state_machine__8535__auto____0 = (function (){
var statearr_25584 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25584[(0)] = cljs$core$async$state_machine__8535__auto__);

(statearr_25584[(1)] = (1));

return statearr_25584;
});
var cljs$core$async$state_machine__8535__auto____1 = (function (state_25558){
while(true){
var ret_value__8536__auto__ = (function (){try{while(true){
var result__8537__auto__ = switch__8534__auto__(state_25558);
if(cljs.core.keyword_identical_QMARK_(result__8537__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8537__auto__;
}
break;
}
}catch (e25585){if((e25585 instanceof Object)){
var ex__8538__auto__ = e25585;
var statearr_25586_25608 = state_25558;
(statearr_25586_25608[(5)] = ex__8538__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25558);

return cljs.core.cst$kw$recur;
} else {
throw e25585;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8536__auto__,cljs.core.cst$kw$recur)){
var G__25609 = state_25558;
state_25558 = G__25609;
continue;
} else {
return ret_value__8536__auto__;
}
break;
}
});
cljs$core$async$state_machine__8535__auto__ = function(state_25558){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8535__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8535__auto____1.call(this,state_25558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8535__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8535__auto____0;
cljs$core$async$state_machine__8535__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8535__auto____1;
return cljs$core$async$state_machine__8535__auto__;
})()
;})(switch__8534__auto__,c__8646__auto___25592,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__8648__auto__ = (function (){var statearr_25587 = (f__8647__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8647__auto__.cljs$core$IFn$_invoke$arity$0() : f__8647__auto__.call(null));
(statearr_25587[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8646__auto___25592);

return statearr_25587;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8648__auto__);
});})(c__8646__auto___25592,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args25611 = [];
var len__7214__auto___25667 = arguments.length;
var i__7215__auto___25668 = (0);
while(true){
if((i__7215__auto___25668 < len__7214__auto___25667)){
args25611.push((arguments[i__7215__auto___25668]));

var G__25669 = (i__7215__auto___25668 + (1));
i__7215__auto___25668 = G__25669;
continue;
} else {
}
break;
}

var G__25613 = args25611.length;
switch (G__25613) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25611.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__8646__auto___25671 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8646__auto___25671,out){
return (function (){
var f__8647__auto__ = (function (){var switch__8534__auto__ = ((function (c__8646__auto___25671,out){
return (function (state_25643){
var state_val_25644 = (state_25643[(1)]);
if((state_val_25644 === (7))){
var inst_25622 = (state_25643[(7)]);
var inst_25623 = (state_25643[(8)]);
var inst_25622__$1 = (state_25643[(2)]);
var inst_25623__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25622__$1,(0),null);
var inst_25624 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25622__$1,(1),null);
var inst_25625 = (inst_25623__$1 == null);
var state_25643__$1 = (function (){var statearr_25645 = state_25643;
(statearr_25645[(7)] = inst_25622__$1);

(statearr_25645[(9)] = inst_25624);

(statearr_25645[(8)] = inst_25623__$1);

return statearr_25645;
})();
if(cljs.core.truth_(inst_25625)){
var statearr_25646_25672 = state_25643__$1;
(statearr_25646_25672[(1)] = (8));

} else {
var statearr_25647_25673 = state_25643__$1;
(statearr_25647_25673[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25644 === (1))){
var inst_25614 = cljs.core.vec(chs);
var inst_25615 = inst_25614;
var state_25643__$1 = (function (){var statearr_25648 = state_25643;
(statearr_25648[(10)] = inst_25615);

return statearr_25648;
})();
var statearr_25649_25674 = state_25643__$1;
(statearr_25649_25674[(2)] = null);

(statearr_25649_25674[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25644 === (4))){
var inst_25615 = (state_25643[(10)]);
var state_25643__$1 = state_25643;
return cljs.core.async.ioc_alts_BANG_(state_25643__$1,(7),inst_25615);
} else {
if((state_val_25644 === (6))){
var inst_25639 = (state_25643[(2)]);
var state_25643__$1 = state_25643;
var statearr_25650_25675 = state_25643__$1;
(statearr_25650_25675[(2)] = inst_25639);

(statearr_25650_25675[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25644 === (3))){
var inst_25641 = (state_25643[(2)]);
var state_25643__$1 = state_25643;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25643__$1,inst_25641);
} else {
if((state_val_25644 === (2))){
var inst_25615 = (state_25643[(10)]);
var inst_25617 = cljs.core.count(inst_25615);
var inst_25618 = (inst_25617 > (0));
var state_25643__$1 = state_25643;
if(cljs.core.truth_(inst_25618)){
var statearr_25652_25676 = state_25643__$1;
(statearr_25652_25676[(1)] = (4));

} else {
var statearr_25653_25677 = state_25643__$1;
(statearr_25653_25677[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25644 === (11))){
var inst_25615 = (state_25643[(10)]);
var inst_25632 = (state_25643[(2)]);
var tmp25651 = inst_25615;
var inst_25615__$1 = tmp25651;
var state_25643__$1 = (function (){var statearr_25654 = state_25643;
(statearr_25654[(11)] = inst_25632);

(statearr_25654[(10)] = inst_25615__$1);

return statearr_25654;
})();
var statearr_25655_25678 = state_25643__$1;
(statearr_25655_25678[(2)] = null);

(statearr_25655_25678[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25644 === (9))){
var inst_25623 = (state_25643[(8)]);
var state_25643__$1 = state_25643;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25643__$1,(11),out,inst_25623);
} else {
if((state_val_25644 === (5))){
var inst_25637 = cljs.core.async.close_BANG_(out);
var state_25643__$1 = state_25643;
var statearr_25656_25679 = state_25643__$1;
(statearr_25656_25679[(2)] = inst_25637);

(statearr_25656_25679[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25644 === (10))){
var inst_25635 = (state_25643[(2)]);
var state_25643__$1 = state_25643;
var statearr_25657_25680 = state_25643__$1;
(statearr_25657_25680[(2)] = inst_25635);

(statearr_25657_25680[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25644 === (8))){
var inst_25622 = (state_25643[(7)]);
var inst_25624 = (state_25643[(9)]);
var inst_25615 = (state_25643[(10)]);
var inst_25623 = (state_25643[(8)]);
var inst_25627 = (function (){var cs = inst_25615;
var vec__25620 = inst_25622;
var v = inst_25623;
var c = inst_25624;
return ((function (cs,vec__25620,v,c,inst_25622,inst_25624,inst_25615,inst_25623,state_val_25644,c__8646__auto___25671,out){
return (function (p1__25610_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__25610_SHARP_);
});
;})(cs,vec__25620,v,c,inst_25622,inst_25624,inst_25615,inst_25623,state_val_25644,c__8646__auto___25671,out))
})();
var inst_25628 = cljs.core.filterv(inst_25627,inst_25615);
var inst_25615__$1 = inst_25628;
var state_25643__$1 = (function (){var statearr_25658 = state_25643;
(statearr_25658[(10)] = inst_25615__$1);

return statearr_25658;
})();
var statearr_25659_25681 = state_25643__$1;
(statearr_25659_25681[(2)] = null);

(statearr_25659_25681[(1)] = (2));


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
});})(c__8646__auto___25671,out))
;
return ((function (switch__8534__auto__,c__8646__auto___25671,out){
return (function() {
var cljs$core$async$state_machine__8535__auto__ = null;
var cljs$core$async$state_machine__8535__auto____0 = (function (){
var statearr_25663 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25663[(0)] = cljs$core$async$state_machine__8535__auto__);

(statearr_25663[(1)] = (1));

return statearr_25663;
});
var cljs$core$async$state_machine__8535__auto____1 = (function (state_25643){
while(true){
var ret_value__8536__auto__ = (function (){try{while(true){
var result__8537__auto__ = switch__8534__auto__(state_25643);
if(cljs.core.keyword_identical_QMARK_(result__8537__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8537__auto__;
}
break;
}
}catch (e25664){if((e25664 instanceof Object)){
var ex__8538__auto__ = e25664;
var statearr_25665_25682 = state_25643;
(statearr_25665_25682[(5)] = ex__8538__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25643);

return cljs.core.cst$kw$recur;
} else {
throw e25664;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8536__auto__,cljs.core.cst$kw$recur)){
var G__25683 = state_25643;
state_25643 = G__25683;
continue;
} else {
return ret_value__8536__auto__;
}
break;
}
});
cljs$core$async$state_machine__8535__auto__ = function(state_25643){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8535__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8535__auto____1.call(this,state_25643);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8535__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8535__auto____0;
cljs$core$async$state_machine__8535__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8535__auto____1;
return cljs$core$async$state_machine__8535__auto__;
})()
;})(switch__8534__auto__,c__8646__auto___25671,out))
})();
var state__8648__auto__ = (function (){var statearr_25666 = (f__8647__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8647__auto__.cljs$core$IFn$_invoke$arity$0() : f__8647__auto__.call(null));
(statearr_25666[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8646__auto___25671);

return statearr_25666;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8648__auto__);
});})(c__8646__auto___25671,out))
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
var args25684 = [];
var len__7214__auto___25733 = arguments.length;
var i__7215__auto___25734 = (0);
while(true){
if((i__7215__auto___25734 < len__7214__auto___25733)){
args25684.push((arguments[i__7215__auto___25734]));

var G__25735 = (i__7215__auto___25734 + (1));
i__7215__auto___25734 = G__25735;
continue;
} else {
}
break;
}

var G__25686 = args25684.length;
switch (G__25686) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25684.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__8646__auto___25737 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8646__auto___25737,out){
return (function (){
var f__8647__auto__ = (function (){var switch__8534__auto__ = ((function (c__8646__auto___25737,out){
return (function (state_25710){
var state_val_25711 = (state_25710[(1)]);
if((state_val_25711 === (7))){
var inst_25692 = (state_25710[(7)]);
var inst_25692__$1 = (state_25710[(2)]);
var inst_25693 = (inst_25692__$1 == null);
var inst_25694 = cljs.core.not(inst_25693);
var state_25710__$1 = (function (){var statearr_25712 = state_25710;
(statearr_25712[(7)] = inst_25692__$1);

return statearr_25712;
})();
if(inst_25694){
var statearr_25713_25738 = state_25710__$1;
(statearr_25713_25738[(1)] = (8));

} else {
var statearr_25714_25739 = state_25710__$1;
(statearr_25714_25739[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25711 === (1))){
var inst_25687 = (0);
var state_25710__$1 = (function (){var statearr_25715 = state_25710;
(statearr_25715[(8)] = inst_25687);

return statearr_25715;
})();
var statearr_25716_25740 = state_25710__$1;
(statearr_25716_25740[(2)] = null);

(statearr_25716_25740[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25711 === (4))){
var state_25710__$1 = state_25710;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25710__$1,(7),ch);
} else {
if((state_val_25711 === (6))){
var inst_25705 = (state_25710[(2)]);
var state_25710__$1 = state_25710;
var statearr_25717_25741 = state_25710__$1;
(statearr_25717_25741[(2)] = inst_25705);

(statearr_25717_25741[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25711 === (3))){
var inst_25707 = (state_25710[(2)]);
var inst_25708 = cljs.core.async.close_BANG_(out);
var state_25710__$1 = (function (){var statearr_25718 = state_25710;
(statearr_25718[(9)] = inst_25707);

return statearr_25718;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_25710__$1,inst_25708);
} else {
if((state_val_25711 === (2))){
var inst_25687 = (state_25710[(8)]);
var inst_25689 = (inst_25687 < n);
var state_25710__$1 = state_25710;
if(cljs.core.truth_(inst_25689)){
var statearr_25719_25742 = state_25710__$1;
(statearr_25719_25742[(1)] = (4));

} else {
var statearr_25720_25743 = state_25710__$1;
(statearr_25720_25743[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25711 === (11))){
var inst_25687 = (state_25710[(8)]);
var inst_25697 = (state_25710[(2)]);
var inst_25698 = (inst_25687 + (1));
var inst_25687__$1 = inst_25698;
var state_25710__$1 = (function (){var statearr_25721 = state_25710;
(statearr_25721[(10)] = inst_25697);

(statearr_25721[(8)] = inst_25687__$1);

return statearr_25721;
})();
var statearr_25722_25744 = state_25710__$1;
(statearr_25722_25744[(2)] = null);

(statearr_25722_25744[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25711 === (9))){
var state_25710__$1 = state_25710;
var statearr_25723_25745 = state_25710__$1;
(statearr_25723_25745[(2)] = null);

(statearr_25723_25745[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25711 === (5))){
var state_25710__$1 = state_25710;
var statearr_25724_25746 = state_25710__$1;
(statearr_25724_25746[(2)] = null);

(statearr_25724_25746[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25711 === (10))){
var inst_25702 = (state_25710[(2)]);
var state_25710__$1 = state_25710;
var statearr_25725_25747 = state_25710__$1;
(statearr_25725_25747[(2)] = inst_25702);

(statearr_25725_25747[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25711 === (8))){
var inst_25692 = (state_25710[(7)]);
var state_25710__$1 = state_25710;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25710__$1,(11),out,inst_25692);
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
});})(c__8646__auto___25737,out))
;
return ((function (switch__8534__auto__,c__8646__auto___25737,out){
return (function() {
var cljs$core$async$state_machine__8535__auto__ = null;
var cljs$core$async$state_machine__8535__auto____0 = (function (){
var statearr_25729 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25729[(0)] = cljs$core$async$state_machine__8535__auto__);

(statearr_25729[(1)] = (1));

return statearr_25729;
});
var cljs$core$async$state_machine__8535__auto____1 = (function (state_25710){
while(true){
var ret_value__8536__auto__ = (function (){try{while(true){
var result__8537__auto__ = switch__8534__auto__(state_25710);
if(cljs.core.keyword_identical_QMARK_(result__8537__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8537__auto__;
}
break;
}
}catch (e25730){if((e25730 instanceof Object)){
var ex__8538__auto__ = e25730;
var statearr_25731_25748 = state_25710;
(statearr_25731_25748[(5)] = ex__8538__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25710);

return cljs.core.cst$kw$recur;
} else {
throw e25730;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8536__auto__,cljs.core.cst$kw$recur)){
var G__25749 = state_25710;
state_25710 = G__25749;
continue;
} else {
return ret_value__8536__auto__;
}
break;
}
});
cljs$core$async$state_machine__8535__auto__ = function(state_25710){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8535__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8535__auto____1.call(this,state_25710);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8535__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8535__auto____0;
cljs$core$async$state_machine__8535__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8535__auto____1;
return cljs$core$async$state_machine__8535__auto__;
})()
;})(switch__8534__auto__,c__8646__auto___25737,out))
})();
var state__8648__auto__ = (function (){var statearr_25732 = (f__8647__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8647__auto__.cljs$core$IFn$_invoke$arity$0() : f__8647__auto__.call(null));
(statearr_25732[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8646__auto___25737);

return statearr_25732;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8648__auto__);
});})(c__8646__auto___25737,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async25759 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25759 = (function (map_LT_,f,ch,meta25760){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta25760 = meta25760;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25759.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25761,meta25760__$1){
var self__ = this;
var _25761__$1 = this;
return (new cljs.core.async.t_cljs$core$async25759(self__.map_LT_,self__.f,self__.ch,meta25760__$1));
});

cljs.core.async.t_cljs$core$async25759.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25761){
var self__ = this;
var _25761__$1 = this;
return self__.meta25760;
});

cljs.core.async.t_cljs$core$async25759.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async25759.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async25759.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async25759.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async25759.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async25762 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25762 = (function (map_LT_,f,ch,meta25760,_,fn1,meta25763){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta25760 = meta25760;
this._ = _;
this.fn1 = fn1;
this.meta25763 = meta25763;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25762.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25764,meta25763__$1){
var self__ = this;
var _25764__$1 = this;
return (new cljs.core.async.t_cljs$core$async25762(self__.map_LT_,self__.f,self__.ch,self__.meta25760,self__._,self__.fn1,meta25763__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async25762.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25764){
var self__ = this;
var _25764__$1 = this;
return self__.meta25763;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25762.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async25762.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25762.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25762.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__25750_SHARP_){
var G__25765 = (((p1__25750_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__25750_SHARP_) : self__.f.call(null,p1__25750_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__25765) : f1.call(null,G__25765));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async25762.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta25760,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async25759], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta25763], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25762.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25762.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25762";

cljs.core.async.t_cljs$core$async25762.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write(writer__6755__auto__,"cljs.core.async/t_cljs$core$async25762");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async25762 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25762(map_LT___$1,f__$1,ch__$1,meta25760__$1,___$2,fn1__$1,meta25763){
return (new cljs.core.async.t_cljs$core$async25762(map_LT___$1,f__$1,ch__$1,meta25760__$1,___$2,fn1__$1,meta25763));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async25762(self__.map_LT_,self__.f,self__.ch,self__.meta25760,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__6144__auto__ = ret;
if(cljs.core.truth_(and__6144__auto__)){
return !(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret)) == null));
} else {
return and__6144__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__25766 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__25766) : self__.f.call(null,G__25766));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async25759.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async25759.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async25759.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta25760], null);
});

cljs.core.async.t_cljs$core$async25759.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25759.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25759";

cljs.core.async.t_cljs$core$async25759.cljs$lang$ctorPrWriter = (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write(writer__6755__auto__,"cljs.core.async/t_cljs$core$async25759");
});

cljs.core.async.__GT_t_cljs$core$async25759 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25759(map_LT___$1,f__$1,ch__$1,meta25760){
return (new cljs.core.async.t_cljs$core$async25759(map_LT___$1,f__$1,ch__$1,meta25760));
});

}

return (new cljs.core.async.t_cljs$core$async25759(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async25770 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25770 = (function (map_GT_,f,ch,meta25771){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta25771 = meta25771;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25770.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25772,meta25771__$1){
var self__ = this;
var _25772__$1 = this;
return (new cljs.core.async.t_cljs$core$async25770(self__.map_GT_,self__.f,self__.ch,meta25771__$1));
});

cljs.core.async.t_cljs$core$async25770.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25772){
var self__ = this;
var _25772__$1 = this;
return self__.meta25771;
});

cljs.core.async.t_cljs$core$async25770.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async25770.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async25770.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async25770.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25770.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async25770.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async25770.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta25771], null);
});

cljs.core.async.t_cljs$core$async25770.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25770.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25770";

cljs.core.async.t_cljs$core$async25770.cljs$lang$ctorPrWriter = (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write(writer__6755__auto__,"cljs.core.async/t_cljs$core$async25770");
});

cljs.core.async.__GT_t_cljs$core$async25770 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async25770(map_GT___$1,f__$1,ch__$1,meta25771){
return (new cljs.core.async.t_cljs$core$async25770(map_GT___$1,f__$1,ch__$1,meta25771));
});

}

return (new cljs.core.async.t_cljs$core$async25770(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async25776 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25776 = (function (filter_GT_,p,ch,meta25777){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta25777 = meta25777;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25776.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25778,meta25777__$1){
var self__ = this;
var _25778__$1 = this;
return (new cljs.core.async.t_cljs$core$async25776(self__.filter_GT_,self__.p,self__.ch,meta25777__$1));
});

cljs.core.async.t_cljs$core$async25776.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25778){
var self__ = this;
var _25778__$1 = this;
return self__.meta25777;
});

cljs.core.async.t_cljs$core$async25776.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async25776.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async25776.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async25776.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async25776.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25776.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async25776.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async25776.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$filter_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta25777], null);
});

cljs.core.async.t_cljs$core$async25776.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25776.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25776";

cljs.core.async.t_cljs$core$async25776.cljs$lang$ctorPrWriter = (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write(writer__6755__auto__,"cljs.core.async/t_cljs$core$async25776");
});

cljs.core.async.__GT_t_cljs$core$async25776 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async25776(filter_GT___$1,p__$1,ch__$1,meta25777){
return (new cljs.core.async.t_cljs$core$async25776(filter_GT___$1,p__$1,ch__$1,meta25777));
});

}

return (new cljs.core.async.t_cljs$core$async25776(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args25779 = [];
var len__7214__auto___25823 = arguments.length;
var i__7215__auto___25824 = (0);
while(true){
if((i__7215__auto___25824 < len__7214__auto___25823)){
args25779.push((arguments[i__7215__auto___25824]));

var G__25825 = (i__7215__auto___25824 + (1));
i__7215__auto___25824 = G__25825;
continue;
} else {
}
break;
}

var G__25781 = args25779.length;
switch (G__25781) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25779.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__8646__auto___25827 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8646__auto___25827,out){
return (function (){
var f__8647__auto__ = (function (){var switch__8534__auto__ = ((function (c__8646__auto___25827,out){
return (function (state_25802){
var state_val_25803 = (state_25802[(1)]);
if((state_val_25803 === (7))){
var inst_25798 = (state_25802[(2)]);
var state_25802__$1 = state_25802;
var statearr_25804_25828 = state_25802__$1;
(statearr_25804_25828[(2)] = inst_25798);

(statearr_25804_25828[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25803 === (1))){
var state_25802__$1 = state_25802;
var statearr_25805_25829 = state_25802__$1;
(statearr_25805_25829[(2)] = null);

(statearr_25805_25829[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25803 === (4))){
var inst_25784 = (state_25802[(7)]);
var inst_25784__$1 = (state_25802[(2)]);
var inst_25785 = (inst_25784__$1 == null);
var state_25802__$1 = (function (){var statearr_25806 = state_25802;
(statearr_25806[(7)] = inst_25784__$1);

return statearr_25806;
})();
if(cljs.core.truth_(inst_25785)){
var statearr_25807_25830 = state_25802__$1;
(statearr_25807_25830[(1)] = (5));

} else {
var statearr_25808_25831 = state_25802__$1;
(statearr_25808_25831[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25803 === (6))){
var inst_25784 = (state_25802[(7)]);
var inst_25789 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_25784) : p.call(null,inst_25784));
var state_25802__$1 = state_25802;
if(cljs.core.truth_(inst_25789)){
var statearr_25809_25832 = state_25802__$1;
(statearr_25809_25832[(1)] = (8));

} else {
var statearr_25810_25833 = state_25802__$1;
(statearr_25810_25833[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25803 === (3))){
var inst_25800 = (state_25802[(2)]);
var state_25802__$1 = state_25802;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25802__$1,inst_25800);
} else {
if((state_val_25803 === (2))){
var state_25802__$1 = state_25802;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25802__$1,(4),ch);
} else {
if((state_val_25803 === (11))){
var inst_25792 = (state_25802[(2)]);
var state_25802__$1 = state_25802;
var statearr_25811_25834 = state_25802__$1;
(statearr_25811_25834[(2)] = inst_25792);

(statearr_25811_25834[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25803 === (9))){
var state_25802__$1 = state_25802;
var statearr_25812_25835 = state_25802__$1;
(statearr_25812_25835[(2)] = null);

(statearr_25812_25835[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25803 === (5))){
var inst_25787 = cljs.core.async.close_BANG_(out);
var state_25802__$1 = state_25802;
var statearr_25813_25836 = state_25802__$1;
(statearr_25813_25836[(2)] = inst_25787);

(statearr_25813_25836[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25803 === (10))){
var inst_25795 = (state_25802[(2)]);
var state_25802__$1 = (function (){var statearr_25814 = state_25802;
(statearr_25814[(8)] = inst_25795);

return statearr_25814;
})();
var statearr_25815_25837 = state_25802__$1;
(statearr_25815_25837[(2)] = null);

(statearr_25815_25837[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25803 === (8))){
var inst_25784 = (state_25802[(7)]);
var state_25802__$1 = state_25802;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25802__$1,(11),out,inst_25784);
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
});})(c__8646__auto___25827,out))
;
return ((function (switch__8534__auto__,c__8646__auto___25827,out){
return (function() {
var cljs$core$async$state_machine__8535__auto__ = null;
var cljs$core$async$state_machine__8535__auto____0 = (function (){
var statearr_25819 = [null,null,null,null,null,null,null,null,null];
(statearr_25819[(0)] = cljs$core$async$state_machine__8535__auto__);

(statearr_25819[(1)] = (1));

return statearr_25819;
});
var cljs$core$async$state_machine__8535__auto____1 = (function (state_25802){
while(true){
var ret_value__8536__auto__ = (function (){try{while(true){
var result__8537__auto__ = switch__8534__auto__(state_25802);
if(cljs.core.keyword_identical_QMARK_(result__8537__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8537__auto__;
}
break;
}
}catch (e25820){if((e25820 instanceof Object)){
var ex__8538__auto__ = e25820;
var statearr_25821_25838 = state_25802;
(statearr_25821_25838[(5)] = ex__8538__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25802);

return cljs.core.cst$kw$recur;
} else {
throw e25820;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8536__auto__,cljs.core.cst$kw$recur)){
var G__25839 = state_25802;
state_25802 = G__25839;
continue;
} else {
return ret_value__8536__auto__;
}
break;
}
});
cljs$core$async$state_machine__8535__auto__ = function(state_25802){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8535__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8535__auto____1.call(this,state_25802);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8535__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8535__auto____0;
cljs$core$async$state_machine__8535__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8535__auto____1;
return cljs$core$async$state_machine__8535__auto__;
})()
;})(switch__8534__auto__,c__8646__auto___25827,out))
})();
var state__8648__auto__ = (function (){var statearr_25822 = (f__8647__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8647__auto__.cljs$core$IFn$_invoke$arity$0() : f__8647__auto__.call(null));
(statearr_25822[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8646__auto___25827);

return statearr_25822;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8648__auto__);
});})(c__8646__auto___25827,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args25840 = [];
var len__7214__auto___25843 = arguments.length;
var i__7215__auto___25844 = (0);
while(true){
if((i__7215__auto___25844 < len__7214__auto___25843)){
args25840.push((arguments[i__7215__auto___25844]));

var G__25845 = (i__7215__auto___25844 + (1));
i__7215__auto___25844 = G__25845;
continue;
} else {
}
break;
}

var G__25842 = args25840.length;
switch (G__25842) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25840.length)].join('')));

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
var c__8646__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8646__auto__){
return (function (){
var f__8647__auto__ = (function (){var switch__8534__auto__ = ((function (c__8646__auto__){
return (function (state_26012){
var state_val_26013 = (state_26012[(1)]);
if((state_val_26013 === (7))){
var inst_26008 = (state_26012[(2)]);
var state_26012__$1 = state_26012;
var statearr_26014_26055 = state_26012__$1;
(statearr_26014_26055[(2)] = inst_26008);

(statearr_26014_26055[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26013 === (20))){
var inst_25978 = (state_26012[(7)]);
var inst_25989 = (state_26012[(2)]);
var inst_25990 = cljs.core.next(inst_25978);
var inst_25964 = inst_25990;
var inst_25965 = null;
var inst_25966 = (0);
var inst_25967 = (0);
var state_26012__$1 = (function (){var statearr_26015 = state_26012;
(statearr_26015[(8)] = inst_25964);

(statearr_26015[(9)] = inst_25966);

(statearr_26015[(10)] = inst_25989);

(statearr_26015[(11)] = inst_25967);

(statearr_26015[(12)] = inst_25965);

return statearr_26015;
})();
var statearr_26016_26056 = state_26012__$1;
(statearr_26016_26056[(2)] = null);

(statearr_26016_26056[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26013 === (1))){
var state_26012__$1 = state_26012;
var statearr_26017_26057 = state_26012__$1;
(statearr_26017_26057[(2)] = null);

(statearr_26017_26057[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26013 === (4))){
var inst_25953 = (state_26012[(13)]);
var inst_25953__$1 = (state_26012[(2)]);
var inst_25954 = (inst_25953__$1 == null);
var state_26012__$1 = (function (){var statearr_26018 = state_26012;
(statearr_26018[(13)] = inst_25953__$1);

return statearr_26018;
})();
if(cljs.core.truth_(inst_25954)){
var statearr_26019_26058 = state_26012__$1;
(statearr_26019_26058[(1)] = (5));

} else {
var statearr_26020_26059 = state_26012__$1;
(statearr_26020_26059[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26013 === (15))){
var state_26012__$1 = state_26012;
var statearr_26024_26060 = state_26012__$1;
(statearr_26024_26060[(2)] = null);

(statearr_26024_26060[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26013 === (21))){
var state_26012__$1 = state_26012;
var statearr_26025_26061 = state_26012__$1;
(statearr_26025_26061[(2)] = null);

(statearr_26025_26061[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26013 === (13))){
var inst_25964 = (state_26012[(8)]);
var inst_25966 = (state_26012[(9)]);
var inst_25967 = (state_26012[(11)]);
var inst_25965 = (state_26012[(12)]);
var inst_25974 = (state_26012[(2)]);
var inst_25975 = (inst_25967 + (1));
var tmp26021 = inst_25964;
var tmp26022 = inst_25966;
var tmp26023 = inst_25965;
var inst_25964__$1 = tmp26021;
var inst_25965__$1 = tmp26023;
var inst_25966__$1 = tmp26022;
var inst_25967__$1 = inst_25975;
var state_26012__$1 = (function (){var statearr_26026 = state_26012;
(statearr_26026[(14)] = inst_25974);

(statearr_26026[(8)] = inst_25964__$1);

(statearr_26026[(9)] = inst_25966__$1);

(statearr_26026[(11)] = inst_25967__$1);

(statearr_26026[(12)] = inst_25965__$1);

return statearr_26026;
})();
var statearr_26027_26062 = state_26012__$1;
(statearr_26027_26062[(2)] = null);

(statearr_26027_26062[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26013 === (22))){
var state_26012__$1 = state_26012;
var statearr_26028_26063 = state_26012__$1;
(statearr_26028_26063[(2)] = null);

(statearr_26028_26063[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26013 === (6))){
var inst_25953 = (state_26012[(13)]);
var inst_25962 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_25953) : f.call(null,inst_25953));
var inst_25963 = cljs.core.seq(inst_25962);
var inst_25964 = inst_25963;
var inst_25965 = null;
var inst_25966 = (0);
var inst_25967 = (0);
var state_26012__$1 = (function (){var statearr_26029 = state_26012;
(statearr_26029[(8)] = inst_25964);

(statearr_26029[(9)] = inst_25966);

(statearr_26029[(11)] = inst_25967);

(statearr_26029[(12)] = inst_25965);

return statearr_26029;
})();
var statearr_26030_26064 = state_26012__$1;
(statearr_26030_26064[(2)] = null);

(statearr_26030_26064[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26013 === (17))){
var inst_25978 = (state_26012[(7)]);
var inst_25982 = cljs.core.chunk_first(inst_25978);
var inst_25983 = cljs.core.chunk_rest(inst_25978);
var inst_25984 = cljs.core.count(inst_25982);
var inst_25964 = inst_25983;
var inst_25965 = inst_25982;
var inst_25966 = inst_25984;
var inst_25967 = (0);
var state_26012__$1 = (function (){var statearr_26031 = state_26012;
(statearr_26031[(8)] = inst_25964);

(statearr_26031[(9)] = inst_25966);

(statearr_26031[(11)] = inst_25967);

(statearr_26031[(12)] = inst_25965);

return statearr_26031;
})();
var statearr_26032_26065 = state_26012__$1;
(statearr_26032_26065[(2)] = null);

(statearr_26032_26065[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26013 === (3))){
var inst_26010 = (state_26012[(2)]);
var state_26012__$1 = state_26012;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26012__$1,inst_26010);
} else {
if((state_val_26013 === (12))){
var inst_25998 = (state_26012[(2)]);
var state_26012__$1 = state_26012;
var statearr_26033_26066 = state_26012__$1;
(statearr_26033_26066[(2)] = inst_25998);

(statearr_26033_26066[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26013 === (2))){
var state_26012__$1 = state_26012;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26012__$1,(4),in$);
} else {
if((state_val_26013 === (23))){
var inst_26006 = (state_26012[(2)]);
var state_26012__$1 = state_26012;
var statearr_26034_26067 = state_26012__$1;
(statearr_26034_26067[(2)] = inst_26006);

(statearr_26034_26067[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26013 === (19))){
var inst_25993 = (state_26012[(2)]);
var state_26012__$1 = state_26012;
var statearr_26035_26068 = state_26012__$1;
(statearr_26035_26068[(2)] = inst_25993);

(statearr_26035_26068[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26013 === (11))){
var inst_25964 = (state_26012[(8)]);
var inst_25978 = (state_26012[(7)]);
var inst_25978__$1 = cljs.core.seq(inst_25964);
var state_26012__$1 = (function (){var statearr_26036 = state_26012;
(statearr_26036[(7)] = inst_25978__$1);

return statearr_26036;
})();
if(inst_25978__$1){
var statearr_26037_26069 = state_26012__$1;
(statearr_26037_26069[(1)] = (14));

} else {
var statearr_26038_26070 = state_26012__$1;
(statearr_26038_26070[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26013 === (9))){
var inst_26000 = (state_26012[(2)]);
var inst_26001 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_26012__$1 = (function (){var statearr_26039 = state_26012;
(statearr_26039[(15)] = inst_26000);

return statearr_26039;
})();
if(cljs.core.truth_(inst_26001)){
var statearr_26040_26071 = state_26012__$1;
(statearr_26040_26071[(1)] = (21));

} else {
var statearr_26041_26072 = state_26012__$1;
(statearr_26041_26072[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26013 === (5))){
var inst_25956 = cljs.core.async.close_BANG_(out);
var state_26012__$1 = state_26012;
var statearr_26042_26073 = state_26012__$1;
(statearr_26042_26073[(2)] = inst_25956);

(statearr_26042_26073[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26013 === (14))){
var inst_25978 = (state_26012[(7)]);
var inst_25980 = cljs.core.chunked_seq_QMARK_(inst_25978);
var state_26012__$1 = state_26012;
if(inst_25980){
var statearr_26043_26074 = state_26012__$1;
(statearr_26043_26074[(1)] = (17));

} else {
var statearr_26044_26075 = state_26012__$1;
(statearr_26044_26075[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26013 === (16))){
var inst_25996 = (state_26012[(2)]);
var state_26012__$1 = state_26012;
var statearr_26045_26076 = state_26012__$1;
(statearr_26045_26076[(2)] = inst_25996);

(statearr_26045_26076[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26013 === (10))){
var inst_25967 = (state_26012[(11)]);
var inst_25965 = (state_26012[(12)]);
var inst_25972 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25965,inst_25967);
var state_26012__$1 = state_26012;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26012__$1,(13),out,inst_25972);
} else {
if((state_val_26013 === (18))){
var inst_25978 = (state_26012[(7)]);
var inst_25987 = cljs.core.first(inst_25978);
var state_26012__$1 = state_26012;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26012__$1,(20),out,inst_25987);
} else {
if((state_val_26013 === (8))){
var inst_25966 = (state_26012[(9)]);
var inst_25967 = (state_26012[(11)]);
var inst_25969 = (inst_25967 < inst_25966);
var inst_25970 = inst_25969;
var state_26012__$1 = state_26012;
if(cljs.core.truth_(inst_25970)){
var statearr_26046_26077 = state_26012__$1;
(statearr_26046_26077[(1)] = (10));

} else {
var statearr_26047_26078 = state_26012__$1;
(statearr_26047_26078[(1)] = (11));

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
});})(c__8646__auto__))
;
return ((function (switch__8534__auto__,c__8646__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__8535__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__8535__auto____0 = (function (){
var statearr_26051 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26051[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__8535__auto__);

(statearr_26051[(1)] = (1));

return statearr_26051;
});
var cljs$core$async$mapcat_STAR__$_state_machine__8535__auto____1 = (function (state_26012){
while(true){
var ret_value__8536__auto__ = (function (){try{while(true){
var result__8537__auto__ = switch__8534__auto__(state_26012);
if(cljs.core.keyword_identical_QMARK_(result__8537__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8537__auto__;
}
break;
}
}catch (e26052){if((e26052 instanceof Object)){
var ex__8538__auto__ = e26052;
var statearr_26053_26079 = state_26012;
(statearr_26053_26079[(5)] = ex__8538__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26012);

return cljs.core.cst$kw$recur;
} else {
throw e26052;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8536__auto__,cljs.core.cst$kw$recur)){
var G__26080 = state_26012;
state_26012 = G__26080;
continue;
} else {
return ret_value__8536__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__8535__auto__ = function(state_26012){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__8535__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__8535__auto____1.call(this,state_26012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__8535__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__8535__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__8535__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__8535__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__8535__auto__;
})()
;})(switch__8534__auto__,c__8646__auto__))
})();
var state__8648__auto__ = (function (){var statearr_26054 = (f__8647__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8647__auto__.cljs$core$IFn$_invoke$arity$0() : f__8647__auto__.call(null));
(statearr_26054[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8646__auto__);

return statearr_26054;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8648__auto__);
});})(c__8646__auto__))
);

return c__8646__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args26081 = [];
var len__7214__auto___26084 = arguments.length;
var i__7215__auto___26085 = (0);
while(true){
if((i__7215__auto___26085 < len__7214__auto___26084)){
args26081.push((arguments[i__7215__auto___26085]));

var G__26086 = (i__7215__auto___26085 + (1));
i__7215__auto___26085 = G__26086;
continue;
} else {
}
break;
}

var G__26083 = args26081.length;
switch (G__26083) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26081.length)].join('')));

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
var args26088 = [];
var len__7214__auto___26091 = arguments.length;
var i__7215__auto___26092 = (0);
while(true){
if((i__7215__auto___26092 < len__7214__auto___26091)){
args26088.push((arguments[i__7215__auto___26092]));

var G__26093 = (i__7215__auto___26092 + (1));
i__7215__auto___26092 = G__26093;
continue;
} else {
}
break;
}

var G__26090 = args26088.length;
switch (G__26090) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26088.length)].join('')));

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
var args26095 = [];
var len__7214__auto___26146 = arguments.length;
var i__7215__auto___26147 = (0);
while(true){
if((i__7215__auto___26147 < len__7214__auto___26146)){
args26095.push((arguments[i__7215__auto___26147]));

var G__26148 = (i__7215__auto___26147 + (1));
i__7215__auto___26147 = G__26148;
continue;
} else {
}
break;
}

var G__26097 = args26095.length;
switch (G__26097) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26095.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__8646__auto___26150 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8646__auto___26150,out){
return (function (){
var f__8647__auto__ = (function (){var switch__8534__auto__ = ((function (c__8646__auto___26150,out){
return (function (state_26121){
var state_val_26122 = (state_26121[(1)]);
if((state_val_26122 === (7))){
var inst_26116 = (state_26121[(2)]);
var state_26121__$1 = state_26121;
var statearr_26123_26151 = state_26121__$1;
(statearr_26123_26151[(2)] = inst_26116);

(statearr_26123_26151[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26122 === (1))){
var inst_26098 = null;
var state_26121__$1 = (function (){var statearr_26124 = state_26121;
(statearr_26124[(7)] = inst_26098);

return statearr_26124;
})();
var statearr_26125_26152 = state_26121__$1;
(statearr_26125_26152[(2)] = null);

(statearr_26125_26152[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26122 === (4))){
var inst_26101 = (state_26121[(8)]);
var inst_26101__$1 = (state_26121[(2)]);
var inst_26102 = (inst_26101__$1 == null);
var inst_26103 = cljs.core.not(inst_26102);
var state_26121__$1 = (function (){var statearr_26126 = state_26121;
(statearr_26126[(8)] = inst_26101__$1);

return statearr_26126;
})();
if(inst_26103){
var statearr_26127_26153 = state_26121__$1;
(statearr_26127_26153[(1)] = (5));

} else {
var statearr_26128_26154 = state_26121__$1;
(statearr_26128_26154[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26122 === (6))){
var state_26121__$1 = state_26121;
var statearr_26129_26155 = state_26121__$1;
(statearr_26129_26155[(2)] = null);

(statearr_26129_26155[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26122 === (3))){
var inst_26118 = (state_26121[(2)]);
var inst_26119 = cljs.core.async.close_BANG_(out);
var state_26121__$1 = (function (){var statearr_26130 = state_26121;
(statearr_26130[(9)] = inst_26118);

return statearr_26130;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_26121__$1,inst_26119);
} else {
if((state_val_26122 === (2))){
var state_26121__$1 = state_26121;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26121__$1,(4),ch);
} else {
if((state_val_26122 === (11))){
var inst_26101 = (state_26121[(8)]);
var inst_26110 = (state_26121[(2)]);
var inst_26098 = inst_26101;
var state_26121__$1 = (function (){var statearr_26131 = state_26121;
(statearr_26131[(7)] = inst_26098);

(statearr_26131[(10)] = inst_26110);

return statearr_26131;
})();
var statearr_26132_26156 = state_26121__$1;
(statearr_26132_26156[(2)] = null);

(statearr_26132_26156[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26122 === (9))){
var inst_26101 = (state_26121[(8)]);
var state_26121__$1 = state_26121;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26121__$1,(11),out,inst_26101);
} else {
if((state_val_26122 === (5))){
var inst_26098 = (state_26121[(7)]);
var inst_26101 = (state_26121[(8)]);
var inst_26105 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_26101,inst_26098);
var state_26121__$1 = state_26121;
if(inst_26105){
var statearr_26134_26157 = state_26121__$1;
(statearr_26134_26157[(1)] = (8));

} else {
var statearr_26135_26158 = state_26121__$1;
(statearr_26135_26158[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26122 === (10))){
var inst_26113 = (state_26121[(2)]);
var state_26121__$1 = state_26121;
var statearr_26136_26159 = state_26121__$1;
(statearr_26136_26159[(2)] = inst_26113);

(statearr_26136_26159[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26122 === (8))){
var inst_26098 = (state_26121[(7)]);
var tmp26133 = inst_26098;
var inst_26098__$1 = tmp26133;
var state_26121__$1 = (function (){var statearr_26137 = state_26121;
(statearr_26137[(7)] = inst_26098__$1);

return statearr_26137;
})();
var statearr_26138_26160 = state_26121__$1;
(statearr_26138_26160[(2)] = null);

(statearr_26138_26160[(1)] = (2));


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
});})(c__8646__auto___26150,out))
;
return ((function (switch__8534__auto__,c__8646__auto___26150,out){
return (function() {
var cljs$core$async$state_machine__8535__auto__ = null;
var cljs$core$async$state_machine__8535__auto____0 = (function (){
var statearr_26142 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26142[(0)] = cljs$core$async$state_machine__8535__auto__);

(statearr_26142[(1)] = (1));

return statearr_26142;
});
var cljs$core$async$state_machine__8535__auto____1 = (function (state_26121){
while(true){
var ret_value__8536__auto__ = (function (){try{while(true){
var result__8537__auto__ = switch__8534__auto__(state_26121);
if(cljs.core.keyword_identical_QMARK_(result__8537__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8537__auto__;
}
break;
}
}catch (e26143){if((e26143 instanceof Object)){
var ex__8538__auto__ = e26143;
var statearr_26144_26161 = state_26121;
(statearr_26144_26161[(5)] = ex__8538__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26121);

return cljs.core.cst$kw$recur;
} else {
throw e26143;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8536__auto__,cljs.core.cst$kw$recur)){
var G__26162 = state_26121;
state_26121 = G__26162;
continue;
} else {
return ret_value__8536__auto__;
}
break;
}
});
cljs$core$async$state_machine__8535__auto__ = function(state_26121){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8535__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8535__auto____1.call(this,state_26121);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8535__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8535__auto____0;
cljs$core$async$state_machine__8535__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8535__auto____1;
return cljs$core$async$state_machine__8535__auto__;
})()
;})(switch__8534__auto__,c__8646__auto___26150,out))
})();
var state__8648__auto__ = (function (){var statearr_26145 = (f__8647__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8647__auto__.cljs$core$IFn$_invoke$arity$0() : f__8647__auto__.call(null));
(statearr_26145[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8646__auto___26150);

return statearr_26145;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8648__auto__);
});})(c__8646__auto___26150,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args26163 = [];
var len__7214__auto___26233 = arguments.length;
var i__7215__auto___26234 = (0);
while(true){
if((i__7215__auto___26234 < len__7214__auto___26233)){
args26163.push((arguments[i__7215__auto___26234]));

var G__26235 = (i__7215__auto___26234 + (1));
i__7215__auto___26234 = G__26235;
continue;
} else {
}
break;
}

var G__26165 = args26163.length;
switch (G__26165) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26163.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__8646__auto___26237 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8646__auto___26237,out){
return (function (){
var f__8647__auto__ = (function (){var switch__8534__auto__ = ((function (c__8646__auto___26237,out){
return (function (state_26203){
var state_val_26204 = (state_26203[(1)]);
if((state_val_26204 === (7))){
var inst_26199 = (state_26203[(2)]);
var state_26203__$1 = state_26203;
var statearr_26205_26238 = state_26203__$1;
(statearr_26205_26238[(2)] = inst_26199);

(statearr_26205_26238[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26204 === (1))){
var inst_26166 = (new Array(n));
var inst_26167 = inst_26166;
var inst_26168 = (0);
var state_26203__$1 = (function (){var statearr_26206 = state_26203;
(statearr_26206[(7)] = inst_26168);

(statearr_26206[(8)] = inst_26167);

return statearr_26206;
})();
var statearr_26207_26239 = state_26203__$1;
(statearr_26207_26239[(2)] = null);

(statearr_26207_26239[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26204 === (4))){
var inst_26171 = (state_26203[(9)]);
var inst_26171__$1 = (state_26203[(2)]);
var inst_26172 = (inst_26171__$1 == null);
var inst_26173 = cljs.core.not(inst_26172);
var state_26203__$1 = (function (){var statearr_26208 = state_26203;
(statearr_26208[(9)] = inst_26171__$1);

return statearr_26208;
})();
if(inst_26173){
var statearr_26209_26240 = state_26203__$1;
(statearr_26209_26240[(1)] = (5));

} else {
var statearr_26210_26241 = state_26203__$1;
(statearr_26210_26241[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26204 === (15))){
var inst_26193 = (state_26203[(2)]);
var state_26203__$1 = state_26203;
var statearr_26211_26242 = state_26203__$1;
(statearr_26211_26242[(2)] = inst_26193);

(statearr_26211_26242[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26204 === (13))){
var state_26203__$1 = state_26203;
var statearr_26212_26243 = state_26203__$1;
(statearr_26212_26243[(2)] = null);

(statearr_26212_26243[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26204 === (6))){
var inst_26168 = (state_26203[(7)]);
var inst_26189 = (inst_26168 > (0));
var state_26203__$1 = state_26203;
if(cljs.core.truth_(inst_26189)){
var statearr_26213_26244 = state_26203__$1;
(statearr_26213_26244[(1)] = (12));

} else {
var statearr_26214_26245 = state_26203__$1;
(statearr_26214_26245[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26204 === (3))){
var inst_26201 = (state_26203[(2)]);
var state_26203__$1 = state_26203;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26203__$1,inst_26201);
} else {
if((state_val_26204 === (12))){
var inst_26167 = (state_26203[(8)]);
var inst_26191 = cljs.core.vec(inst_26167);
var state_26203__$1 = state_26203;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26203__$1,(15),out,inst_26191);
} else {
if((state_val_26204 === (2))){
var state_26203__$1 = state_26203;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26203__$1,(4),ch);
} else {
if((state_val_26204 === (11))){
var inst_26183 = (state_26203[(2)]);
var inst_26184 = (new Array(n));
var inst_26167 = inst_26184;
var inst_26168 = (0);
var state_26203__$1 = (function (){var statearr_26215 = state_26203;
(statearr_26215[(7)] = inst_26168);

(statearr_26215[(10)] = inst_26183);

(statearr_26215[(8)] = inst_26167);

return statearr_26215;
})();
var statearr_26216_26246 = state_26203__$1;
(statearr_26216_26246[(2)] = null);

(statearr_26216_26246[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26204 === (9))){
var inst_26167 = (state_26203[(8)]);
var inst_26181 = cljs.core.vec(inst_26167);
var state_26203__$1 = state_26203;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26203__$1,(11),out,inst_26181);
} else {
if((state_val_26204 === (5))){
var inst_26168 = (state_26203[(7)]);
var inst_26171 = (state_26203[(9)]);
var inst_26176 = (state_26203[(11)]);
var inst_26167 = (state_26203[(8)]);
var inst_26175 = (inst_26167[inst_26168] = inst_26171);
var inst_26176__$1 = (inst_26168 + (1));
var inst_26177 = (inst_26176__$1 < n);
var state_26203__$1 = (function (){var statearr_26217 = state_26203;
(statearr_26217[(11)] = inst_26176__$1);

(statearr_26217[(12)] = inst_26175);

return statearr_26217;
})();
if(cljs.core.truth_(inst_26177)){
var statearr_26218_26247 = state_26203__$1;
(statearr_26218_26247[(1)] = (8));

} else {
var statearr_26219_26248 = state_26203__$1;
(statearr_26219_26248[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26204 === (14))){
var inst_26196 = (state_26203[(2)]);
var inst_26197 = cljs.core.async.close_BANG_(out);
var state_26203__$1 = (function (){var statearr_26221 = state_26203;
(statearr_26221[(13)] = inst_26196);

return statearr_26221;
})();
var statearr_26222_26249 = state_26203__$1;
(statearr_26222_26249[(2)] = inst_26197);

(statearr_26222_26249[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26204 === (10))){
var inst_26187 = (state_26203[(2)]);
var state_26203__$1 = state_26203;
var statearr_26223_26250 = state_26203__$1;
(statearr_26223_26250[(2)] = inst_26187);

(statearr_26223_26250[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26204 === (8))){
var inst_26176 = (state_26203[(11)]);
var inst_26167 = (state_26203[(8)]);
var tmp26220 = inst_26167;
var inst_26167__$1 = tmp26220;
var inst_26168 = inst_26176;
var state_26203__$1 = (function (){var statearr_26224 = state_26203;
(statearr_26224[(7)] = inst_26168);

(statearr_26224[(8)] = inst_26167__$1);

return statearr_26224;
})();
var statearr_26225_26251 = state_26203__$1;
(statearr_26225_26251[(2)] = null);

(statearr_26225_26251[(1)] = (2));


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
});})(c__8646__auto___26237,out))
;
return ((function (switch__8534__auto__,c__8646__auto___26237,out){
return (function() {
var cljs$core$async$state_machine__8535__auto__ = null;
var cljs$core$async$state_machine__8535__auto____0 = (function (){
var statearr_26229 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26229[(0)] = cljs$core$async$state_machine__8535__auto__);

(statearr_26229[(1)] = (1));

return statearr_26229;
});
var cljs$core$async$state_machine__8535__auto____1 = (function (state_26203){
while(true){
var ret_value__8536__auto__ = (function (){try{while(true){
var result__8537__auto__ = switch__8534__auto__(state_26203);
if(cljs.core.keyword_identical_QMARK_(result__8537__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8537__auto__;
}
break;
}
}catch (e26230){if((e26230 instanceof Object)){
var ex__8538__auto__ = e26230;
var statearr_26231_26252 = state_26203;
(statearr_26231_26252[(5)] = ex__8538__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26203);

return cljs.core.cst$kw$recur;
} else {
throw e26230;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8536__auto__,cljs.core.cst$kw$recur)){
var G__26253 = state_26203;
state_26203 = G__26253;
continue;
} else {
return ret_value__8536__auto__;
}
break;
}
});
cljs$core$async$state_machine__8535__auto__ = function(state_26203){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8535__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8535__auto____1.call(this,state_26203);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8535__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8535__auto____0;
cljs$core$async$state_machine__8535__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8535__auto____1;
return cljs$core$async$state_machine__8535__auto__;
})()
;})(switch__8534__auto__,c__8646__auto___26237,out))
})();
var state__8648__auto__ = (function (){var statearr_26232 = (f__8647__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8647__auto__.cljs$core$IFn$_invoke$arity$0() : f__8647__auto__.call(null));
(statearr_26232[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8646__auto___26237);

return statearr_26232;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8648__auto__);
});})(c__8646__auto___26237,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args26254 = [];
var len__7214__auto___26328 = arguments.length;
var i__7215__auto___26329 = (0);
while(true){
if((i__7215__auto___26329 < len__7214__auto___26328)){
args26254.push((arguments[i__7215__auto___26329]));

var G__26330 = (i__7215__auto___26329 + (1));
i__7215__auto___26329 = G__26330;
continue;
} else {
}
break;
}

var G__26256 = args26254.length;
switch (G__26256) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26254.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__8646__auto___26332 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8646__auto___26332,out){
return (function (){
var f__8647__auto__ = (function (){var switch__8534__auto__ = ((function (c__8646__auto___26332,out){
return (function (state_26298){
var state_val_26299 = (state_26298[(1)]);
if((state_val_26299 === (7))){
var inst_26294 = (state_26298[(2)]);
var state_26298__$1 = state_26298;
var statearr_26300_26333 = state_26298__$1;
(statearr_26300_26333[(2)] = inst_26294);

(statearr_26300_26333[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26299 === (1))){
var inst_26257 = [];
var inst_26258 = inst_26257;
var inst_26259 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_26298__$1 = (function (){var statearr_26301 = state_26298;
(statearr_26301[(7)] = inst_26258);

(statearr_26301[(8)] = inst_26259);

return statearr_26301;
})();
var statearr_26302_26334 = state_26298__$1;
(statearr_26302_26334[(2)] = null);

(statearr_26302_26334[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26299 === (4))){
var inst_26262 = (state_26298[(9)]);
var inst_26262__$1 = (state_26298[(2)]);
var inst_26263 = (inst_26262__$1 == null);
var inst_26264 = cljs.core.not(inst_26263);
var state_26298__$1 = (function (){var statearr_26303 = state_26298;
(statearr_26303[(9)] = inst_26262__$1);

return statearr_26303;
})();
if(inst_26264){
var statearr_26304_26335 = state_26298__$1;
(statearr_26304_26335[(1)] = (5));

} else {
var statearr_26305_26336 = state_26298__$1;
(statearr_26305_26336[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26299 === (15))){
var inst_26288 = (state_26298[(2)]);
var state_26298__$1 = state_26298;
var statearr_26306_26337 = state_26298__$1;
(statearr_26306_26337[(2)] = inst_26288);

(statearr_26306_26337[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26299 === (13))){
var state_26298__$1 = state_26298;
var statearr_26307_26338 = state_26298__$1;
(statearr_26307_26338[(2)] = null);

(statearr_26307_26338[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26299 === (6))){
var inst_26258 = (state_26298[(7)]);
var inst_26283 = inst_26258.length;
var inst_26284 = (inst_26283 > (0));
var state_26298__$1 = state_26298;
if(cljs.core.truth_(inst_26284)){
var statearr_26308_26339 = state_26298__$1;
(statearr_26308_26339[(1)] = (12));

} else {
var statearr_26309_26340 = state_26298__$1;
(statearr_26309_26340[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26299 === (3))){
var inst_26296 = (state_26298[(2)]);
var state_26298__$1 = state_26298;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26298__$1,inst_26296);
} else {
if((state_val_26299 === (12))){
var inst_26258 = (state_26298[(7)]);
var inst_26286 = cljs.core.vec(inst_26258);
var state_26298__$1 = state_26298;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26298__$1,(15),out,inst_26286);
} else {
if((state_val_26299 === (2))){
var state_26298__$1 = state_26298;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26298__$1,(4),ch);
} else {
if((state_val_26299 === (11))){
var inst_26262 = (state_26298[(9)]);
var inst_26266 = (state_26298[(10)]);
var inst_26276 = (state_26298[(2)]);
var inst_26277 = [];
var inst_26278 = inst_26277.push(inst_26262);
var inst_26258 = inst_26277;
var inst_26259 = inst_26266;
var state_26298__$1 = (function (){var statearr_26310 = state_26298;
(statearr_26310[(7)] = inst_26258);

(statearr_26310[(11)] = inst_26278);

(statearr_26310[(8)] = inst_26259);

(statearr_26310[(12)] = inst_26276);

return statearr_26310;
})();
var statearr_26311_26341 = state_26298__$1;
(statearr_26311_26341[(2)] = null);

(statearr_26311_26341[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26299 === (9))){
var inst_26258 = (state_26298[(7)]);
var inst_26274 = cljs.core.vec(inst_26258);
var state_26298__$1 = state_26298;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26298__$1,(11),out,inst_26274);
} else {
if((state_val_26299 === (5))){
var inst_26262 = (state_26298[(9)]);
var inst_26266 = (state_26298[(10)]);
var inst_26259 = (state_26298[(8)]);
var inst_26266__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_26262) : f.call(null,inst_26262));
var inst_26267 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_26266__$1,inst_26259);
var inst_26268 = cljs.core.keyword_identical_QMARK_(inst_26259,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_26269 = (inst_26267) || (inst_26268);
var state_26298__$1 = (function (){var statearr_26312 = state_26298;
(statearr_26312[(10)] = inst_26266__$1);

return statearr_26312;
})();
if(cljs.core.truth_(inst_26269)){
var statearr_26313_26342 = state_26298__$1;
(statearr_26313_26342[(1)] = (8));

} else {
var statearr_26314_26343 = state_26298__$1;
(statearr_26314_26343[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26299 === (14))){
var inst_26291 = (state_26298[(2)]);
var inst_26292 = cljs.core.async.close_BANG_(out);
var state_26298__$1 = (function (){var statearr_26316 = state_26298;
(statearr_26316[(13)] = inst_26291);

return statearr_26316;
})();
var statearr_26317_26344 = state_26298__$1;
(statearr_26317_26344[(2)] = inst_26292);

(statearr_26317_26344[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26299 === (10))){
var inst_26281 = (state_26298[(2)]);
var state_26298__$1 = state_26298;
var statearr_26318_26345 = state_26298__$1;
(statearr_26318_26345[(2)] = inst_26281);

(statearr_26318_26345[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26299 === (8))){
var inst_26262 = (state_26298[(9)]);
var inst_26266 = (state_26298[(10)]);
var inst_26258 = (state_26298[(7)]);
var inst_26271 = inst_26258.push(inst_26262);
var tmp26315 = inst_26258;
var inst_26258__$1 = tmp26315;
var inst_26259 = inst_26266;
var state_26298__$1 = (function (){var statearr_26319 = state_26298;
(statearr_26319[(7)] = inst_26258__$1);

(statearr_26319[(14)] = inst_26271);

(statearr_26319[(8)] = inst_26259);

return statearr_26319;
})();
var statearr_26320_26346 = state_26298__$1;
(statearr_26320_26346[(2)] = null);

(statearr_26320_26346[(1)] = (2));


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
});})(c__8646__auto___26332,out))
;
return ((function (switch__8534__auto__,c__8646__auto___26332,out){
return (function() {
var cljs$core$async$state_machine__8535__auto__ = null;
var cljs$core$async$state_machine__8535__auto____0 = (function (){
var statearr_26324 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26324[(0)] = cljs$core$async$state_machine__8535__auto__);

(statearr_26324[(1)] = (1));

return statearr_26324;
});
var cljs$core$async$state_machine__8535__auto____1 = (function (state_26298){
while(true){
var ret_value__8536__auto__ = (function (){try{while(true){
var result__8537__auto__ = switch__8534__auto__(state_26298);
if(cljs.core.keyword_identical_QMARK_(result__8537__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8537__auto__;
}
break;
}
}catch (e26325){if((e26325 instanceof Object)){
var ex__8538__auto__ = e26325;
var statearr_26326_26347 = state_26298;
(statearr_26326_26347[(5)] = ex__8538__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26298);

return cljs.core.cst$kw$recur;
} else {
throw e26325;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8536__auto__,cljs.core.cst$kw$recur)){
var G__26348 = state_26298;
state_26298 = G__26348;
continue;
} else {
return ret_value__8536__auto__;
}
break;
}
});
cljs$core$async$state_machine__8535__auto__ = function(state_26298){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8535__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8535__auto____1.call(this,state_26298);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8535__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8535__auto____0;
cljs$core$async$state_machine__8535__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8535__auto____1;
return cljs$core$async$state_machine__8535__auto__;
})()
;})(switch__8534__auto__,c__8646__auto___26332,out))
})();
var state__8648__auto__ = (function (){var statearr_26327 = (f__8647__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8647__auto__.cljs$core$IFn$_invoke$arity$0() : f__8647__auto__.call(null));
(statearr_26327[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8646__auto___26332);

return statearr_26327;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8648__auto__);
});})(c__8646__auto___26332,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;
