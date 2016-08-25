// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('rerenderer.primitives');
goog.require('cljs.core');
goog.require('rerenderer.platform.browser.core');
goog.require('rerenderer.platform.browser.utils');
goog.require('rerenderer.platform.android.core');
goog.require('rerenderer.component');
/**
 * Rectangle primitive, can be nested.
 * 
 *   * `width` - rectangle width - number;
 *   * `height` - rectange height - number;
 *   * `color` - rectangle color, supported formats: `#ff0000`, `rgb(255, 255, 0)`, `argb(255, 0, 0, 0)`, `red`;
 *   * `x` - rectangle upper left corner x coordinate on parent;
 *   * `y` - rectangle upper left corner y coordinate on parent;
 *   * `childs` - primitives rendered inside the rectangle.
 * 
 *   Usage:
 * 
 *   ```
 *   (rectangle {:color "red"
 *            :width 100
 *            :height 300
 *            :x 10
 *            :y 10}
 *  (rectangle {:color "#00ff00"
 *              :x 50
 *              :y 50
 *              :x 10
 *              :y 10}))
 *   ```
 */
rerenderer.primitives.rectangle = (function rerenderer$primitives$rectangle(var_args){
var args__7221__auto__ = [];
var len__7214__auto___22514 = arguments.length;
var i__7215__auto___22515 = (0);
while(true){
if((i__7215__auto___22515 < len__7214__auto___22514)){
args__7221__auto__.push((arguments[i__7215__auto___22515]));

var G__22516 = (i__7215__auto___22515 + (1));
i__7215__auto___22515 = G__22516;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((1) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((1)),(0))):null);
return rerenderer.primitives.rectangle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7222__auto__);
});

rerenderer.primitives.rectangle.cljs$core$IFn$_invoke$arity$variadic = (function (p__22507,childs){
var map__22508 = p__22507;
var map__22508__$1 = ((((!((map__22508 == null)))?((((map__22508.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22508.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22508):map__22508);
var props = map__22508__$1;
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22508__$1,cljs.core.cst$kw$width);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22508__$1,cljs.core.cst$kw$height);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22508__$1,cljs.core.cst$kw$color);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22508__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22508__$1,cljs.core.cst$kw$y);
if(!((width == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nil_QMARK_,cljs.core.cst$sym$width))], 0)))].join('')));
}

if(!((height == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nil_QMARK_,cljs.core.cst$sym$height))], 0)))].join('')));
}

if(!((color == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nil_QMARK_,cljs.core.cst$sym$color))], 0)))].join('')));
}

var color__$1 = (rerenderer.component.__GT_rgba.cljs$core$IFn$_invoke$arity$1 ? rerenderer.component.__GT_rgba.cljs$core$IFn$_invoke$arity$1(color) : rerenderer.component.__GT_rgba.call(null,color));
var x__$1 = (function (){var or__6156__auto__ = x;
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return (0);
}
})();
var y__$1 = (function (){var or__6156__auto__ = y;
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return (0);
}
})();
var props__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(props,cljs.core.cst$kw$color,color__$1,cljs.core.array_seq([cljs.core.cst$kw$x,x__$1,cljs.core.cst$kw$y,y__$1], 0));
if(typeof rerenderer.primitives.t_rerenderer$primitives22510 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {rerenderer.platform.android.core.IAndroid}
 * @implements {rerenderer.platform.browser.core.IBrowser}
 * @implements {rerenderer.component.IComponent}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {rerenderer.primitives.Object}
*/
rerenderer.primitives.t_rerenderer$primitives22510 = (function (p__22507,childs,map__22508,props,width,height,color,x,y,meta22511){
this.p__22507 = p__22507;
this.childs = childs;
this.map__22508 = map__22508;
this.props = props;
this.width = width;
this.height = height;
this.color = color;
this.x = x;
this.y = y;
this.meta22511 = meta22511;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
rerenderer.primitives.t_rerenderer$primitives22510.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (color__$1,x__$1,y__$1,props__$1,map__22508,map__22508__$1,props,width,height,color,x,y){
return (function (_22512,meta22511__$1){
var self__ = this;
var _22512__$1 = this;
return (new rerenderer.primitives.t_rerenderer$primitives22510(self__.p__22507,self__.childs,self__.map__22508,self__.props,self__.width,self__.height,self__.color,self__.x,self__.y,meta22511__$1));
});})(color__$1,x__$1,y__$1,props__$1,map__22508,map__22508__$1,props,width,height,color,x,y))
;

rerenderer.primitives.t_rerenderer$primitives22510.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (color__$1,x__$1,y__$1,props__$1,map__22508,map__22508__$1,props,width,height,color,x,y){
return (function (_22512){
var self__ = this;
var _22512__$1 = this;
return self__.meta22511;
});})(color__$1,x__$1,y__$1,props__$1,map__22508,map__22508__$1,props,width,height,color,x,y))
;

rerenderer.primitives.t_rerenderer$primitives22510.prototype.toString = ((function (color__$1,x__$1,y__$1,props__$1,map__22508,map__22508__$1,props,width,height,color,x,y){
return (function (){
var self__ = this;
var this$ = this;
return rerenderer.component.component__GT_string(this$);
});})(color__$1,x__$1,y__$1,props__$1,map__22508,map__22508__$1,props,width,height,color,x,y))
;

rerenderer.primitives.t_rerenderer$primitives22510.prototype.rerenderer$component$IComponent$ = true;

rerenderer.primitives.t_rerenderer$primitives22510.prototype.rerenderer$component$IComponent$tag$arity$1 = ((function (color__$1,x__$1,y__$1,props__$1,map__22508,map__22508__$1,props,width,height,color,x,y){
return (function (_){
var self__ = this;
var ___$1 = this;
return "rectangle";
});})(color__$1,x__$1,y__$1,props__$1,map__22508,map__22508__$1,props,width,height,color,x,y))
;

rerenderer.primitives.t_rerenderer$primitives22510.prototype.rerenderer$component$IComponent$childs$arity$1 = ((function (color__$1,x__$1,y__$1,props__$1,map__22508,map__22508__$1,props,width,height,color,x,y){
return (function (_){
var self__ = this;
var ___$1 = this;
return rerenderer.component.prepare_childs(self__.childs);
});})(color__$1,x__$1,y__$1,props__$1,map__22508,map__22508__$1,props,width,height,color,x,y))
;

rerenderer.primitives.t_rerenderer$primitives22510.prototype.rerenderer$component$IComponent$props$arity$1 = ((function (color__$1,x__$1,y__$1,props__$1,map__22508,map__22508__$1,props,width,height,color,x,y){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.props;
});})(color__$1,x__$1,y__$1,props__$1,map__22508,map__22508__$1,props,width,height,color,x,y))
;

rerenderer.primitives.t_rerenderer$primitives22510.prototype.rerenderer$platform$browser$core$IBrowser$ = true;

rerenderer.primitives.t_rerenderer$primitives22510.prototype.rerenderer$platform$browser$core$IBrowser$render_browser$arity$2 = ((function (color__$1,x__$1,y__$1,props__$1,map__22508,map__22508__$1,props,width,height,color,x,y){
return (function (_,ctx){
var self__ = this;
var ___$1 = this;
var vec__22513_22517 = self__.color;
var r_22518 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22513_22517,(0),null);
var g_22519 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22513_22517,(1),null);
var b_22520 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22513_22517,(2),null);
var a_22521 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22513_22517,(3),null);
var color_22522__$1 = [cljs.core.str("rgba("),cljs.core.str(r_22518),cljs.core.str(", "),cljs.core.str(g_22519),cljs.core.str(", "),cljs.core.str(b_22520),cljs.core.str(", "),cljs.core.str(a_22521),cljs.core.str(")")].join('');
ctx.fillStyle = color_22522__$1;

return ctx.fillRect((0),(0),self__.width,self__.height);
});})(color__$1,x__$1,y__$1,props__$1,map__22508,map__22508__$1,props,width,height,color,x,y))
;

rerenderer.primitives.t_rerenderer$primitives22510.prototype.rerenderer$platform$android$core$IAndroid$ = true;

rerenderer.primitives.t_rerenderer$primitives22510.prototype.rerenderer$platform$android$core$IAndroid$android_primitive$arity$1 = ((function (color__$1,x__$1,y__$1,props__$1,map__22508,map__22508__$1,props,width,height,color,x,y){
return (function (_){
var self__ = this;
var ___$1 = this;
return "bundled.rectangle";
});})(color__$1,x__$1,y__$1,props__$1,map__22508,map__22508__$1,props,width,height,color,x,y))
;

rerenderer.primitives.t_rerenderer$primitives22510.getBasis = ((function (color__$1,x__$1,y__$1,props__$1,map__22508,map__22508__$1,props,width,height,color,x,y){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p__22507,cljs.core.cst$sym$childs,cljs.core.cst$sym$map__22508,cljs.core.cst$sym$props,cljs.core.cst$sym$width,cljs.core.cst$sym$height,cljs.core.cst$sym$color,cljs.core.cst$sym$x,cljs.core.cst$sym$y,cljs.core.cst$sym$meta22511], null);
});})(color__$1,x__$1,y__$1,props__$1,map__22508,map__22508__$1,props,width,height,color,x,y))
;

rerenderer.primitives.t_rerenderer$primitives22510.cljs$lang$type = true;

rerenderer.primitives.t_rerenderer$primitives22510.cljs$lang$ctorStr = "rerenderer.primitives/t_rerenderer$primitives22510";

rerenderer.primitives.t_rerenderer$primitives22510.cljs$lang$ctorPrWriter = ((function (color__$1,x__$1,y__$1,props__$1,map__22508,map__22508__$1,props,width,height,color,x,y){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write(writer__6755__auto__,"rerenderer.primitives/t_rerenderer$primitives22510");
});})(color__$1,x__$1,y__$1,props__$1,map__22508,map__22508__$1,props,width,height,color,x,y))
;

rerenderer.primitives.__GT_t_rerenderer$primitives22510 = ((function (color__$1,x__$1,y__$1,props__$1,map__22508,map__22508__$1,props,width,height,color,x,y){
return (function rerenderer$primitives$__GT_t_rerenderer$primitives22510(p__22507__$1,childs__$1,map__22508__$2,props__$2,width__$1,height__$1,color__$2,x__$2,y__$2,meta22511){
return (new rerenderer.primitives.t_rerenderer$primitives22510(p__22507__$1,childs__$1,map__22508__$2,props__$2,width__$1,height__$1,color__$2,x__$2,y__$2,meta22511));
});})(color__$1,x__$1,y__$1,props__$1,map__22508,map__22508__$1,props,width,height,color,x,y))
;

}

return (new rerenderer.primitives.t_rerenderer$primitives22510(p__22507,childs,map__22508__$1,props__$1,width,height,color__$1,x__$1,y__$1,cljs.core.PersistentArrayMap.EMPTY));
});

rerenderer.primitives.rectangle.cljs$lang$maxFixedArity = (1);

rerenderer.primitives.rectangle.cljs$lang$applyTo = (function (seq22505){
var G__22506 = cljs.core.first(seq22505);
var seq22505__$1 = cljs.core.next(seq22505);
return rerenderer.primitives.rectangle.cljs$core$IFn$_invoke$arity$variadic(G__22506,seq22505__$1);
});
/**
 * Text primitive, can be nested.
 * 
 *   * `width` - text holder width - number;
 *   * `height` - text holder height - number;
 *   * `font-size` - font size in px;
 *   * `color` - text color, supported formats: #ff0000, rgb(255, 255, 0), argb(255, 0, 0, 0), red;
 *   * `x` - text holder upper left corner x coordinate on parent;
 *   * `y` - text holder upper left corner y coordinate on parent;
 *   * `value` - text;
 *   * `childs` - primitives rendered inside the rectangle.
 * 
 *   Usage:
 * 
 *   ```
 *   (text {:width 100
 *       :height 30
 *       :font-size 10
 *       :color "#ff00ff"
 *       :x 10
 *       :y 10
 *       :value "Hi there"}
 *  (rectangle {:color "#00ff00"
 *              :x 50
 *              :y 50
 *              :x 10
 *              :y 10}))
 *   ```
 */
rerenderer.primitives.text = (function rerenderer$primitives$text(var_args){
var args__7221__auto__ = [];
var len__7214__auto___22532 = arguments.length;
var i__7215__auto___22533 = (0);
while(true){
if((i__7215__auto___22533 < len__7214__auto___22532)){
args__7221__auto__.push((arguments[i__7215__auto___22533]));

var G__22534 = (i__7215__auto___22533 + (1));
i__7215__auto___22533 = G__22534;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((1) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((1)),(0))):null);
return rerenderer.primitives.text.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7222__auto__);
});

rerenderer.primitives.text.cljs$core$IFn$_invoke$arity$variadic = (function (p__22525,childs){
var map__22526 = p__22525;
var map__22526__$1 = ((((!((map__22526 == null)))?((((map__22526.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22526.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22526):map__22526);
var props = map__22526__$1;
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22526__$1,cljs.core.cst$kw$width);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22526__$1,cljs.core.cst$kw$height);
var font_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22526__$1,cljs.core.cst$kw$font_DASH_size);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22526__$1,cljs.core.cst$kw$color);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22526__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22526__$1,cljs.core.cst$kw$y);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22526__$1,cljs.core.cst$kw$value);
if(!((width == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nil_QMARK_,cljs.core.cst$sym$width))], 0)))].join('')));
}

if(!((height == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nil_QMARK_,cljs.core.cst$sym$height))], 0)))].join('')));
}

if(!((font_size == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nil_QMARK_,cljs.core.cst$sym$font_DASH_size))], 0)))].join('')));
}

if(!((color == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nil_QMARK_,cljs.core.cst$sym$color))], 0)))].join('')));
}

if(!((value == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nil_QMARK_,cljs.core.cst$sym$value))], 0)))].join('')));
}

var color__$1 = (rerenderer.component.__GT_rgba.cljs$core$IFn$_invoke$arity$1 ? rerenderer.component.__GT_rgba.cljs$core$IFn$_invoke$arity$1(color) : rerenderer.component.__GT_rgba.call(null,color));
var x__$1 = (function (){var or__6156__auto__ = x;
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return (0);
}
})();
var y__$1 = (function (){var or__6156__auto__ = y;
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return (0);
}
})();
var props__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(props,cljs.core.cst$kw$color,color__$1,cljs.core.array_seq([cljs.core.cst$kw$x,x__$1,cljs.core.cst$kw$y,y__$1], 0));
if(typeof rerenderer.primitives.t_rerenderer$primitives22528 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {rerenderer.platform.android.core.IAndroid}
 * @implements {rerenderer.platform.browser.core.IBrowser}
 * @implements {rerenderer.component.IComponent}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {rerenderer.primitives.Object}
*/
rerenderer.primitives.t_rerenderer$primitives22528 = (function (x,height,props,y,childs,p__22525,color,font_size,value,width,map__22526,meta22529){
this.x = x;
this.height = height;
this.props = props;
this.y = y;
this.childs = childs;
this.p__22525 = p__22525;
this.color = color;
this.font_size = font_size;
this.value = value;
this.width = width;
this.map__22526 = map__22526;
this.meta22529 = meta22529;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
rerenderer.primitives.t_rerenderer$primitives22528.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (color__$1,x__$1,y__$1,props__$1,map__22526,map__22526__$1,props,width,height,font_size,color,x,y,value){
return (function (_22530,meta22529__$1){
var self__ = this;
var _22530__$1 = this;
return (new rerenderer.primitives.t_rerenderer$primitives22528(self__.x,self__.height,self__.props,self__.y,self__.childs,self__.p__22525,self__.color,self__.font_size,self__.value,self__.width,self__.map__22526,meta22529__$1));
});})(color__$1,x__$1,y__$1,props__$1,map__22526,map__22526__$1,props,width,height,font_size,color,x,y,value))
;

rerenderer.primitives.t_rerenderer$primitives22528.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (color__$1,x__$1,y__$1,props__$1,map__22526,map__22526__$1,props,width,height,font_size,color,x,y,value){
return (function (_22530){
var self__ = this;
var _22530__$1 = this;
return self__.meta22529;
});})(color__$1,x__$1,y__$1,props__$1,map__22526,map__22526__$1,props,width,height,font_size,color,x,y,value))
;

rerenderer.primitives.t_rerenderer$primitives22528.prototype.toString = ((function (color__$1,x__$1,y__$1,props__$1,map__22526,map__22526__$1,props,width,height,font_size,color,x,y,value){
return (function (){
var self__ = this;
var this$ = this;
return rerenderer.component.component__GT_string(this$);
});})(color__$1,x__$1,y__$1,props__$1,map__22526,map__22526__$1,props,width,height,font_size,color,x,y,value))
;

rerenderer.primitives.t_rerenderer$primitives22528.prototype.rerenderer$component$IComponent$ = true;

rerenderer.primitives.t_rerenderer$primitives22528.prototype.rerenderer$component$IComponent$tag$arity$1 = ((function (color__$1,x__$1,y__$1,props__$1,map__22526,map__22526__$1,props,width,height,font_size,color,x,y,value){
return (function (_){
var self__ = this;
var ___$1 = this;
return "text";
});})(color__$1,x__$1,y__$1,props__$1,map__22526,map__22526__$1,props,width,height,font_size,color,x,y,value))
;

rerenderer.primitives.t_rerenderer$primitives22528.prototype.rerenderer$component$IComponent$childs$arity$1 = ((function (color__$1,x__$1,y__$1,props__$1,map__22526,map__22526__$1,props,width,height,font_size,color,x,y,value){
return (function (_){
var self__ = this;
var ___$1 = this;
return rerenderer.component.prepare_childs(self__.childs);
});})(color__$1,x__$1,y__$1,props__$1,map__22526,map__22526__$1,props,width,height,font_size,color,x,y,value))
;

rerenderer.primitives.t_rerenderer$primitives22528.prototype.rerenderer$component$IComponent$props$arity$1 = ((function (color__$1,x__$1,y__$1,props__$1,map__22526,map__22526__$1,props,width,height,font_size,color,x,y,value){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.props;
});})(color__$1,x__$1,y__$1,props__$1,map__22526,map__22526__$1,props,width,height,font_size,color,x,y,value))
;

rerenderer.primitives.t_rerenderer$primitives22528.prototype.rerenderer$platform$browser$core$IBrowser$ = true;

rerenderer.primitives.t_rerenderer$primitives22528.prototype.rerenderer$platform$browser$core$IBrowser$render_browser$arity$2 = ((function (color__$1,x__$1,y__$1,props__$1,map__22526,map__22526__$1,props,width,height,font_size,color,x,y,value){
return (function (_,ctx){
var self__ = this;
var ___$1 = this;
var vec__22531_22535 = self__.color;
var r_22536 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22531_22535,(0),null);
var g_22537 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22531_22535,(1),null);
var b_22538 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22531_22535,(2),null);
var a_22539 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22531_22535,(3),null);
var color_22540__$1 = [cljs.core.str("rgba("),cljs.core.str(r_22536),cljs.core.str(", "),cljs.core.str(g_22537),cljs.core.str(", "),cljs.core.str(b_22538),cljs.core.str(", "),cljs.core.str(a_22539),cljs.core.str(")")].join('');
ctx.fillStyle = color_22540__$1;

ctx.font = [cljs.core.str(self__.font_size),cljs.core.str("px sans")].join('');

return ctx.fillText(self__.value,(0),self__.font_size);
});})(color__$1,x__$1,y__$1,props__$1,map__22526,map__22526__$1,props,width,height,font_size,color,x,y,value))
;

rerenderer.primitives.t_rerenderer$primitives22528.prototype.rerenderer$platform$android$core$IAndroid$ = true;

rerenderer.primitives.t_rerenderer$primitives22528.prototype.rerenderer$platform$android$core$IAndroid$android_primitive$arity$1 = ((function (color__$1,x__$1,y__$1,props__$1,map__22526,map__22526__$1,props,width,height,font_size,color,x,y,value){
return (function (_){
var self__ = this;
var ___$1 = this;
return "bundled.text";
});})(color__$1,x__$1,y__$1,props__$1,map__22526,map__22526__$1,props,width,height,font_size,color,x,y,value))
;

rerenderer.primitives.t_rerenderer$primitives22528.getBasis = ((function (color__$1,x__$1,y__$1,props__$1,map__22526,map__22526__$1,props,width,height,font_size,color,x,y,value){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$x,cljs.core.cst$sym$height,cljs.core.cst$sym$props,cljs.core.cst$sym$y,cljs.core.cst$sym$childs,cljs.core.cst$sym$p__22525,cljs.core.cst$sym$color,cljs.core.cst$sym$font_DASH_size,cljs.core.cst$sym$value,cljs.core.cst$sym$width,cljs.core.cst$sym$map__22526,cljs.core.cst$sym$meta22529], null);
});})(color__$1,x__$1,y__$1,props__$1,map__22526,map__22526__$1,props,width,height,font_size,color,x,y,value))
;

rerenderer.primitives.t_rerenderer$primitives22528.cljs$lang$type = true;

rerenderer.primitives.t_rerenderer$primitives22528.cljs$lang$ctorStr = "rerenderer.primitives/t_rerenderer$primitives22528";

rerenderer.primitives.t_rerenderer$primitives22528.cljs$lang$ctorPrWriter = ((function (color__$1,x__$1,y__$1,props__$1,map__22526,map__22526__$1,props,width,height,font_size,color,x,y,value){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write(writer__6755__auto__,"rerenderer.primitives/t_rerenderer$primitives22528");
});})(color__$1,x__$1,y__$1,props__$1,map__22526,map__22526__$1,props,width,height,font_size,color,x,y,value))
;

rerenderer.primitives.__GT_t_rerenderer$primitives22528 = ((function (color__$1,x__$1,y__$1,props__$1,map__22526,map__22526__$1,props,width,height,font_size,color,x,y,value){
return (function rerenderer$primitives$__GT_t_rerenderer$primitives22528(x__$2,height__$1,props__$2,y__$2,childs__$1,p__22525__$1,color__$2,font_size__$1,value__$1,width__$1,map__22526__$2,meta22529){
return (new rerenderer.primitives.t_rerenderer$primitives22528(x__$2,height__$1,props__$2,y__$2,childs__$1,p__22525__$1,color__$2,font_size__$1,value__$1,width__$1,map__22526__$2,meta22529));
});})(color__$1,x__$1,y__$1,props__$1,map__22526,map__22526__$1,props,width,height,font_size,color,x,y,value))
;

}

return (new rerenderer.primitives.t_rerenderer$primitives22528(x__$1,height,props__$1,y__$1,childs,p__22525,color__$1,font_size,value,width,map__22526__$1,cljs.core.PersistentArrayMap.EMPTY));
});

rerenderer.primitives.text.cljs$lang$maxFixedArity = (1);

rerenderer.primitives.text.cljs$lang$applyTo = (function (seq22523){
var G__22524 = cljs.core.first(seq22523);
var seq22523__$1 = cljs.core.next(seq22523);
return rerenderer.primitives.text.cljs$core$IFn$_invoke$arity$variadic(G__22524,seq22523__$1);
});
rerenderer.primitives.browser_image_cache = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Image primitive, can be nested.
 * 
 *   * `width` - text holder width - number;
 *   * `height` - text holder height - number;
 *   * `x` - text holder upper left corner x coordinate on parent;
 *   * `y` - text holder upper left corner y coordinate on parent;
 *   * `sx` - source image x, useful for cutting sprites;
 *   * `sy` - source image y, useful for cutting sprites;
 *   * `childs` - primitives rendered inside the rectangle.
 * 
 *   Example:
 * 
 *   ```
 *   (image {:width 100
 *        :height 200
 *        :src "/bird.png" ; absolute path to image
 *        :sx 20 ; x on source image, usable for cutting sprites
 *        :sy 30 ; y on source image, usable for cutting sprites
 *        :x 10
 *        :y 20}
 *  (rectangle {:color "#00ff00"
 *              :x 50
 *              :y 50
 *              :x 10
 *              :y 10}))
 *   ```
 */
rerenderer.primitives.image = (function rerenderer$primitives$image(var_args){
var args__7221__auto__ = [];
var len__7214__auto___22549 = arguments.length;
var i__7215__auto___22550 = (0);
while(true){
if((i__7215__auto___22550 < len__7214__auto___22549)){
args__7221__auto__.push((arguments[i__7215__auto___22550]));

var G__22551 = (i__7215__auto___22550 + (1));
i__7215__auto___22550 = G__22551;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((1) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((1)),(0))):null);
return rerenderer.primitives.image.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7222__auto__);
});

rerenderer.primitives.image.cljs$core$IFn$_invoke$arity$variadic = (function (p__22543,childs){
var map__22544 = p__22543;
var map__22544__$1 = ((((!((map__22544 == null)))?((((map__22544.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22544.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22544):map__22544);
var props = map__22544__$1;
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22544__$1,cljs.core.cst$kw$width);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22544__$1,cljs.core.cst$kw$height);
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22544__$1,cljs.core.cst$kw$src);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22544__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22544__$1,cljs.core.cst$kw$y);
var sx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22544__$1,cljs.core.cst$kw$sx);
var sy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22544__$1,cljs.core.cst$kw$sy);
if(!((width == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nil_QMARK_,cljs.core.cst$sym$width))], 0)))].join('')));
}

if(!((height == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nil_QMARK_,cljs.core.cst$sym$height))], 0)))].join('')));
}

if(!((src == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nil_QMARK_,cljs.core.cst$sym$src))], 0)))].join('')));
}

var x__$1 = (function (){var or__6156__auto__ = x;
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return (0);
}
})();
var y__$1 = (function (){var or__6156__auto__ = y;
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return (0);
}
})();
var sx__$1 = (function (){var or__6156__auto__ = sx;
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return (0);
}
})();
var sy__$1 = (function (){var or__6156__auto__ = sy;
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return (0);
}
})();
var src__$1 = rerenderer.component.__GT_url(src);
var props__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(props,cljs.core.cst$kw$x,x__$1,cljs.core.array_seq([cljs.core.cst$kw$y,y__$1,cljs.core.cst$kw$sx,sx__$1,cljs.core.cst$kw$sy,sy__$1,cljs.core.cst$kw$src,src__$1], 0));
if(typeof rerenderer.primitives.t_rerenderer$primitives22546 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {rerenderer.platform.android.core.IAndroid}
 * @implements {rerenderer.platform.browser.core.IBrowser}
 * @implements {rerenderer.component.IComponent}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {rerenderer.primitives.Object}
*/
rerenderer.primitives.t_rerenderer$primitives22546 = (function (x,height,props,y,childs,map__22544,sy,width,src,p__22543,sx,meta22547){
this.x = x;
this.height = height;
this.props = props;
this.y = y;
this.childs = childs;
this.map__22544 = map__22544;
this.sy = sy;
this.width = width;
this.src = src;
this.p__22543 = p__22543;
this.sx = sx;
this.meta22547 = meta22547;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
rerenderer.primitives.t_rerenderer$primitives22546.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (x__$1,y__$1,sx__$1,sy__$1,src__$1,props__$1,map__22544,map__22544__$1,props,width,height,src,x,y,sx,sy){
return (function (_22548,meta22547__$1){
var self__ = this;
var _22548__$1 = this;
return (new rerenderer.primitives.t_rerenderer$primitives22546(self__.x,self__.height,self__.props,self__.y,self__.childs,self__.map__22544,self__.sy,self__.width,self__.src,self__.p__22543,self__.sx,meta22547__$1));
});})(x__$1,y__$1,sx__$1,sy__$1,src__$1,props__$1,map__22544,map__22544__$1,props,width,height,src,x,y,sx,sy))
;

rerenderer.primitives.t_rerenderer$primitives22546.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (x__$1,y__$1,sx__$1,sy__$1,src__$1,props__$1,map__22544,map__22544__$1,props,width,height,src,x,y,sx,sy){
return (function (_22548){
var self__ = this;
var _22548__$1 = this;
return self__.meta22547;
});})(x__$1,y__$1,sx__$1,sy__$1,src__$1,props__$1,map__22544,map__22544__$1,props,width,height,src,x,y,sx,sy))
;

rerenderer.primitives.t_rerenderer$primitives22546.prototype.toString = ((function (x__$1,y__$1,sx__$1,sy__$1,src__$1,props__$1,map__22544,map__22544__$1,props,width,height,src,x,y,sx,sy){
return (function (){
var self__ = this;
var this$ = this;
return rerenderer.component.component__GT_string(this$);
});})(x__$1,y__$1,sx__$1,sy__$1,src__$1,props__$1,map__22544,map__22544__$1,props,width,height,src,x,y,sx,sy))
;

rerenderer.primitives.t_rerenderer$primitives22546.prototype.rerenderer$component$IComponent$ = true;

rerenderer.primitives.t_rerenderer$primitives22546.prototype.rerenderer$component$IComponent$tag$arity$1 = ((function (x__$1,y__$1,sx__$1,sy__$1,src__$1,props__$1,map__22544,map__22544__$1,props,width,height,src,x,y,sx,sy){
return (function (_){
var self__ = this;
var ___$1 = this;
return "image";
});})(x__$1,y__$1,sx__$1,sy__$1,src__$1,props__$1,map__22544,map__22544__$1,props,width,height,src,x,y,sx,sy))
;

rerenderer.primitives.t_rerenderer$primitives22546.prototype.rerenderer$component$IComponent$childs$arity$1 = ((function (x__$1,y__$1,sx__$1,sy__$1,src__$1,props__$1,map__22544,map__22544__$1,props,width,height,src,x,y,sx,sy){
return (function (_){
var self__ = this;
var ___$1 = this;
return rerenderer.component.prepare_childs(self__.childs);
});})(x__$1,y__$1,sx__$1,sy__$1,src__$1,props__$1,map__22544,map__22544__$1,props,width,height,src,x,y,sx,sy))
;

rerenderer.primitives.t_rerenderer$primitives22546.prototype.rerenderer$component$IComponent$props$arity$1 = ((function (x__$1,y__$1,sx__$1,sy__$1,src__$1,props__$1,map__22544,map__22544__$1,props,width,height,src,x,y,sx,sy){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.props;
});})(x__$1,y__$1,sx__$1,sy__$1,src__$1,props__$1,map__22544,map__22544__$1,props,width,height,src,x,y,sx,sy))
;

rerenderer.primitives.t_rerenderer$primitives22546.prototype.rerenderer$platform$browser$core$IBrowser$ = true;

rerenderer.primitives.t_rerenderer$primitives22546.prototype.rerenderer$platform$browser$core$IBrowser$render_browser$arity$2 = ((function (x__$1,y__$1,sx__$1,sy__$1,src__$1,props__$1,map__22544,map__22544__$1,props,width,height,src,x,y,sx,sy){
return (function (_,ctx){
var self__ = this;
var ___$1 = this;
var img = (rerenderer.platform.browser.utils.get_image.cljs$core$IFn$_invoke$arity$1 ? rerenderer.platform.browser.utils.get_image.cljs$core$IFn$_invoke$arity$1(self__.src) : rerenderer.platform.browser.utils.get_image.call(null,self__.src));
return ctx.drawImage(img,self__.sx,self__.sy,self__.width,self__.height,(0),(0),self__.width,self__.height);
});})(x__$1,y__$1,sx__$1,sy__$1,src__$1,props__$1,map__22544,map__22544__$1,props,width,height,src,x,y,sx,sy))
;

rerenderer.primitives.t_rerenderer$primitives22546.prototype.rerenderer$platform$android$core$IAndroid$ = true;

rerenderer.primitives.t_rerenderer$primitives22546.prototype.rerenderer$platform$android$core$IAndroid$android_primitive$arity$1 = ((function (x__$1,y__$1,sx__$1,sy__$1,src__$1,props__$1,map__22544,map__22544__$1,props,width,height,src,x,y,sx,sy){
return (function (_){
var self__ = this;
var ___$1 = this;
return "bundled.image";
});})(x__$1,y__$1,sx__$1,sy__$1,src__$1,props__$1,map__22544,map__22544__$1,props,width,height,src,x,y,sx,sy))
;

rerenderer.primitives.t_rerenderer$primitives22546.getBasis = ((function (x__$1,y__$1,sx__$1,sy__$1,src__$1,props__$1,map__22544,map__22544__$1,props,width,height,src,x,y,sx,sy){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$x,cljs.core.cst$sym$height,cljs.core.cst$sym$props,cljs.core.cst$sym$y,cljs.core.cst$sym$childs,cljs.core.cst$sym$map__22544,cljs.core.cst$sym$sy,cljs.core.cst$sym$width,cljs.core.cst$sym$src,cljs.core.cst$sym$p__22543,cljs.core.cst$sym$sx,cljs.core.cst$sym$meta22547], null);
});})(x__$1,y__$1,sx__$1,sy__$1,src__$1,props__$1,map__22544,map__22544__$1,props,width,height,src,x,y,sx,sy))
;

rerenderer.primitives.t_rerenderer$primitives22546.cljs$lang$type = true;

rerenderer.primitives.t_rerenderer$primitives22546.cljs$lang$ctorStr = "rerenderer.primitives/t_rerenderer$primitives22546";

rerenderer.primitives.t_rerenderer$primitives22546.cljs$lang$ctorPrWriter = ((function (x__$1,y__$1,sx__$1,sy__$1,src__$1,props__$1,map__22544,map__22544__$1,props,width,height,src,x,y,sx,sy){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write(writer__6755__auto__,"rerenderer.primitives/t_rerenderer$primitives22546");
});})(x__$1,y__$1,sx__$1,sy__$1,src__$1,props__$1,map__22544,map__22544__$1,props,width,height,src,x,y,sx,sy))
;

rerenderer.primitives.__GT_t_rerenderer$primitives22546 = ((function (x__$1,y__$1,sx__$1,sy__$1,src__$1,props__$1,map__22544,map__22544__$1,props,width,height,src,x,y,sx,sy){
return (function rerenderer$primitives$__GT_t_rerenderer$primitives22546(x__$2,height__$1,props__$2,y__$2,childs__$1,map__22544__$2,sy__$2,width__$1,src__$2,p__22543__$1,sx__$2,meta22547){
return (new rerenderer.primitives.t_rerenderer$primitives22546(x__$2,height__$1,props__$2,y__$2,childs__$1,map__22544__$2,sy__$2,width__$1,src__$2,p__22543__$1,sx__$2,meta22547));
});})(x__$1,y__$1,sx__$1,sy__$1,src__$1,props__$1,map__22544,map__22544__$1,props,width,height,src,x,y,sx,sy))
;

}

return (new rerenderer.primitives.t_rerenderer$primitives22546(x__$1,height,props__$1,y__$1,childs,map__22544__$1,sy__$1,width,src__$1,p__22543,sx__$1,cljs.core.PersistentArrayMap.EMPTY));
});

rerenderer.primitives.image.cljs$lang$maxFixedArity = (1);

rerenderer.primitives.image.cljs$lang$applyTo = (function (seq22541){
var G__22542 = cljs.core.first(seq22541);
var seq22541__$1 = cljs.core.next(seq22541);
return rerenderer.primitives.image.cljs$core$IFn$_invoke$arity$variadic(G__22542,seq22541__$1);
});
