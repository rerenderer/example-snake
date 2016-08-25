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
var len__7214__auto___21433 = arguments.length;
var i__7215__auto___21434 = (0);
while(true){
if((i__7215__auto___21434 < len__7214__auto___21433)){
args__7221__auto__.push((arguments[i__7215__auto___21434]));

var G__21435 = (i__7215__auto___21434 + (1));
i__7215__auto___21434 = G__21435;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((1) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((1)),(0))):null);
return rerenderer.primitives.rectangle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7222__auto__);
});

rerenderer.primitives.rectangle.cljs$core$IFn$_invoke$arity$variadic = (function (p__21426,childs){
var map__21427 = p__21426;
var map__21427__$1 = ((((!((map__21427 == null)))?((((map__21427.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21427.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21427):map__21427);
var props = map__21427__$1;
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21427__$1,cljs.core.cst$kw$width);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21427__$1,cljs.core.cst$kw$height);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21427__$1,cljs.core.cst$kw$color);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21427__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21427__$1,cljs.core.cst$kw$y);
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
if(typeof rerenderer.primitives.t_rerenderer$primitives21429 !== 'undefined'){
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
rerenderer.primitives.t_rerenderer$primitives21429 = (function (p__21426,childs,map__21427,props,width,height,color,x,y,meta21430){
this.p__21426 = p__21426;
this.childs = childs;
this.map__21427 = map__21427;
this.props = props;
this.width = width;
this.height = height;
this.color = color;
this.x = x;
this.y = y;
this.meta21430 = meta21430;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
rerenderer.primitives.t_rerenderer$primitives21429.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (color__$1,x__$1,y__$1,props__$1,map__21427,map__21427__$1,props,width,height,color,x,y){
return (function (_21431,meta21430__$1){
var self__ = this;
var _21431__$1 = this;
return (new rerenderer.primitives.t_rerenderer$primitives21429(self__.p__21426,self__.childs,self__.map__21427,self__.props,self__.width,self__.height,self__.color,self__.x,self__.y,meta21430__$1));
});})(color__$1,x__$1,y__$1,props__$1,map__21427,map__21427__$1,props,width,height,color,x,y))
;

rerenderer.primitives.t_rerenderer$primitives21429.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (color__$1,x__$1,y__$1,props__$1,map__21427,map__21427__$1,props,width,height,color,x,y){
return (function (_21431){
var self__ = this;
var _21431__$1 = this;
return self__.meta21430;
});})(color__$1,x__$1,y__$1,props__$1,map__21427,map__21427__$1,props,width,height,color,x,y))
;

rerenderer.primitives.t_rerenderer$primitives21429.prototype.toString = ((function (color__$1,x__$1,y__$1,props__$1,map__21427,map__21427__$1,props,width,height,color,x,y){
return (function (){
var self__ = this;
var this$ = this;
return rerenderer.component.component__GT_string(this$);
});})(color__$1,x__$1,y__$1,props__$1,map__21427,map__21427__$1,props,width,height,color,x,y))
;

rerenderer.primitives.t_rerenderer$primitives21429.prototype.rerenderer$component$IComponent$ = true;

rerenderer.primitives.t_rerenderer$primitives21429.prototype.rerenderer$component$IComponent$tag$arity$1 = ((function (color__$1,x__$1,y__$1,props__$1,map__21427,map__21427__$1,props,width,height,color,x,y){
return (function (_){
var self__ = this;
var ___$1 = this;
return "rectangle";
});})(color__$1,x__$1,y__$1,props__$1,map__21427,map__21427__$1,props,width,height,color,x,y))
;

rerenderer.primitives.t_rerenderer$primitives21429.prototype.rerenderer$component$IComponent$childs$arity$1 = ((function (color__$1,x__$1,y__$1,props__$1,map__21427,map__21427__$1,props,width,height,color,x,y){
return (function (_){
var self__ = this;
var ___$1 = this;
return rerenderer.component.prepare_childs(self__.childs);
});})(color__$1,x__$1,y__$1,props__$1,map__21427,map__21427__$1,props,width,height,color,x,y))
;

rerenderer.primitives.t_rerenderer$primitives21429.prototype.rerenderer$component$IComponent$props$arity$1 = ((function (color__$1,x__$1,y__$1,props__$1,map__21427,map__21427__$1,props,width,height,color,x,y){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.props;
});})(color__$1,x__$1,y__$1,props__$1,map__21427,map__21427__$1,props,width,height,color,x,y))
;

rerenderer.primitives.t_rerenderer$primitives21429.prototype.rerenderer$platform$browser$core$IBrowser$ = true;

rerenderer.primitives.t_rerenderer$primitives21429.prototype.rerenderer$platform$browser$core$IBrowser$render_browser$arity$2 = ((function (color__$1,x__$1,y__$1,props__$1,map__21427,map__21427__$1,props,width,height,color,x,y){
return (function (_,ctx){
var self__ = this;
var ___$1 = this;
var vec__21432_21436 = self__.color;
var r_21437 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21432_21436,(0),null);
var g_21438 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21432_21436,(1),null);
var b_21439 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21432_21436,(2),null);
var a_21440 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21432_21436,(3),null);
var color_21441__$1 = [cljs.core.str("rgba("),cljs.core.str(r_21437),cljs.core.str(", "),cljs.core.str(g_21438),cljs.core.str(", "),cljs.core.str(b_21439),cljs.core.str(", "),cljs.core.str(a_21440),cljs.core.str(")")].join('');
ctx.fillStyle = color_21441__$1;

return ctx.fillRect((0),(0),self__.width,self__.height);
});})(color__$1,x__$1,y__$1,props__$1,map__21427,map__21427__$1,props,width,height,color,x,y))
;

rerenderer.primitives.t_rerenderer$primitives21429.prototype.rerenderer$platform$android$core$IAndroid$ = true;

rerenderer.primitives.t_rerenderer$primitives21429.prototype.rerenderer$platform$android$core$IAndroid$android_primitive$arity$1 = ((function (color__$1,x__$1,y__$1,props__$1,map__21427,map__21427__$1,props,width,height,color,x,y){
return (function (_){
var self__ = this;
var ___$1 = this;
return "bundled.rectangle";
});})(color__$1,x__$1,y__$1,props__$1,map__21427,map__21427__$1,props,width,height,color,x,y))
;

rerenderer.primitives.t_rerenderer$primitives21429.getBasis = ((function (color__$1,x__$1,y__$1,props__$1,map__21427,map__21427__$1,props,width,height,color,x,y){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p__21426,cljs.core.cst$sym$childs,cljs.core.cst$sym$map__21427,cljs.core.cst$sym$props,cljs.core.cst$sym$width,cljs.core.cst$sym$height,cljs.core.cst$sym$color,cljs.core.cst$sym$x,cljs.core.cst$sym$y,cljs.core.cst$sym$meta21430], null);
});})(color__$1,x__$1,y__$1,props__$1,map__21427,map__21427__$1,props,width,height,color,x,y))
;

rerenderer.primitives.t_rerenderer$primitives21429.cljs$lang$type = true;

rerenderer.primitives.t_rerenderer$primitives21429.cljs$lang$ctorStr = "rerenderer.primitives/t_rerenderer$primitives21429";

rerenderer.primitives.t_rerenderer$primitives21429.cljs$lang$ctorPrWriter = ((function (color__$1,x__$1,y__$1,props__$1,map__21427,map__21427__$1,props,width,height,color,x,y){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write(writer__6755__auto__,"rerenderer.primitives/t_rerenderer$primitives21429");
});})(color__$1,x__$1,y__$1,props__$1,map__21427,map__21427__$1,props,width,height,color,x,y))
;

rerenderer.primitives.__GT_t_rerenderer$primitives21429 = ((function (color__$1,x__$1,y__$1,props__$1,map__21427,map__21427__$1,props,width,height,color,x,y){
return (function rerenderer$primitives$__GT_t_rerenderer$primitives21429(p__21426__$1,childs__$1,map__21427__$2,props__$2,width__$1,height__$1,color__$2,x__$2,y__$2,meta21430){
return (new rerenderer.primitives.t_rerenderer$primitives21429(p__21426__$1,childs__$1,map__21427__$2,props__$2,width__$1,height__$1,color__$2,x__$2,y__$2,meta21430));
});})(color__$1,x__$1,y__$1,props__$1,map__21427,map__21427__$1,props,width,height,color,x,y))
;

}

return (new rerenderer.primitives.t_rerenderer$primitives21429(p__21426,childs,map__21427__$1,props__$1,width,height,color__$1,x__$1,y__$1,cljs.core.PersistentArrayMap.EMPTY));
});

rerenderer.primitives.rectangle.cljs$lang$maxFixedArity = (1);

rerenderer.primitives.rectangle.cljs$lang$applyTo = (function (seq21424){
var G__21425 = cljs.core.first(seq21424);
var seq21424__$1 = cljs.core.next(seq21424);
return rerenderer.primitives.rectangle.cljs$core$IFn$_invoke$arity$variadic(G__21425,seq21424__$1);
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
var len__7214__auto___21451 = arguments.length;
var i__7215__auto___21452 = (0);
while(true){
if((i__7215__auto___21452 < len__7214__auto___21451)){
args__7221__auto__.push((arguments[i__7215__auto___21452]));

var G__21453 = (i__7215__auto___21452 + (1));
i__7215__auto___21452 = G__21453;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((1) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((1)),(0))):null);
return rerenderer.primitives.text.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7222__auto__);
});

rerenderer.primitives.text.cljs$core$IFn$_invoke$arity$variadic = (function (p__21444,childs){
var map__21445 = p__21444;
var map__21445__$1 = ((((!((map__21445 == null)))?((((map__21445.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21445.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21445):map__21445);
var props = map__21445__$1;
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21445__$1,cljs.core.cst$kw$width);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21445__$1,cljs.core.cst$kw$height);
var font_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21445__$1,cljs.core.cst$kw$font_DASH_size);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21445__$1,cljs.core.cst$kw$color);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21445__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21445__$1,cljs.core.cst$kw$y);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21445__$1,cljs.core.cst$kw$value);
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
if(typeof rerenderer.primitives.t_rerenderer$primitives21447 !== 'undefined'){
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
rerenderer.primitives.t_rerenderer$primitives21447 = (function (x,height,props,y,childs,color,font_size,value,map__21445,width,p__21444,meta21448){
this.x = x;
this.height = height;
this.props = props;
this.y = y;
this.childs = childs;
this.color = color;
this.font_size = font_size;
this.value = value;
this.map__21445 = map__21445;
this.width = width;
this.p__21444 = p__21444;
this.meta21448 = meta21448;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
rerenderer.primitives.t_rerenderer$primitives21447.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (color__$1,x__$1,y__$1,props__$1,map__21445,map__21445__$1,props,width,height,font_size,color,x,y,value){
return (function (_21449,meta21448__$1){
var self__ = this;
var _21449__$1 = this;
return (new rerenderer.primitives.t_rerenderer$primitives21447(self__.x,self__.height,self__.props,self__.y,self__.childs,self__.color,self__.font_size,self__.value,self__.map__21445,self__.width,self__.p__21444,meta21448__$1));
});})(color__$1,x__$1,y__$1,props__$1,map__21445,map__21445__$1,props,width,height,font_size,color,x,y,value))
;

rerenderer.primitives.t_rerenderer$primitives21447.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (color__$1,x__$1,y__$1,props__$1,map__21445,map__21445__$1,props,width,height,font_size,color,x,y,value){
return (function (_21449){
var self__ = this;
var _21449__$1 = this;
return self__.meta21448;
});})(color__$1,x__$1,y__$1,props__$1,map__21445,map__21445__$1,props,width,height,font_size,color,x,y,value))
;

rerenderer.primitives.t_rerenderer$primitives21447.prototype.toString = ((function (color__$1,x__$1,y__$1,props__$1,map__21445,map__21445__$1,props,width,height,font_size,color,x,y,value){
return (function (){
var self__ = this;
var this$ = this;
return rerenderer.component.component__GT_string(this$);
});})(color__$1,x__$1,y__$1,props__$1,map__21445,map__21445__$1,props,width,height,font_size,color,x,y,value))
;

rerenderer.primitives.t_rerenderer$primitives21447.prototype.rerenderer$component$IComponent$ = true;

rerenderer.primitives.t_rerenderer$primitives21447.prototype.rerenderer$component$IComponent$tag$arity$1 = ((function (color__$1,x__$1,y__$1,props__$1,map__21445,map__21445__$1,props,width,height,font_size,color,x,y,value){
return (function (_){
var self__ = this;
var ___$1 = this;
return "text";
});})(color__$1,x__$1,y__$1,props__$1,map__21445,map__21445__$1,props,width,height,font_size,color,x,y,value))
;

rerenderer.primitives.t_rerenderer$primitives21447.prototype.rerenderer$component$IComponent$childs$arity$1 = ((function (color__$1,x__$1,y__$1,props__$1,map__21445,map__21445__$1,props,width,height,font_size,color,x,y,value){
return (function (_){
var self__ = this;
var ___$1 = this;
return rerenderer.component.prepare_childs(self__.childs);
});})(color__$1,x__$1,y__$1,props__$1,map__21445,map__21445__$1,props,width,height,font_size,color,x,y,value))
;

rerenderer.primitives.t_rerenderer$primitives21447.prototype.rerenderer$component$IComponent$props$arity$1 = ((function (color__$1,x__$1,y__$1,props__$1,map__21445,map__21445__$1,props,width,height,font_size,color,x,y,value){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.props;
});})(color__$1,x__$1,y__$1,props__$1,map__21445,map__21445__$1,props,width,height,font_size,color,x,y,value))
;

rerenderer.primitives.t_rerenderer$primitives21447.prototype.rerenderer$platform$browser$core$IBrowser$ = true;

rerenderer.primitives.t_rerenderer$primitives21447.prototype.rerenderer$platform$browser$core$IBrowser$render_browser$arity$2 = ((function (color__$1,x__$1,y__$1,props__$1,map__21445,map__21445__$1,props,width,height,font_size,color,x,y,value){
return (function (_,ctx){
var self__ = this;
var ___$1 = this;
var vec__21450_21454 = self__.color;
var r_21455 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21450_21454,(0),null);
var g_21456 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21450_21454,(1),null);
var b_21457 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21450_21454,(2),null);
var a_21458 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21450_21454,(3),null);
var color_21459__$1 = [cljs.core.str("rgba("),cljs.core.str(r_21455),cljs.core.str(", "),cljs.core.str(g_21456),cljs.core.str(", "),cljs.core.str(b_21457),cljs.core.str(", "),cljs.core.str(a_21458),cljs.core.str(")")].join('');
ctx.fillStyle = color_21459__$1;

ctx.font = [cljs.core.str(self__.font_size),cljs.core.str("px sans")].join('');

return ctx.fillText(self__.value,(0),self__.font_size);
});})(color__$1,x__$1,y__$1,props__$1,map__21445,map__21445__$1,props,width,height,font_size,color,x,y,value))
;

rerenderer.primitives.t_rerenderer$primitives21447.prototype.rerenderer$platform$android$core$IAndroid$ = true;

rerenderer.primitives.t_rerenderer$primitives21447.prototype.rerenderer$platform$android$core$IAndroid$android_primitive$arity$1 = ((function (color__$1,x__$1,y__$1,props__$1,map__21445,map__21445__$1,props,width,height,font_size,color,x,y,value){
return (function (_){
var self__ = this;
var ___$1 = this;
return "bundled.text";
});})(color__$1,x__$1,y__$1,props__$1,map__21445,map__21445__$1,props,width,height,font_size,color,x,y,value))
;

rerenderer.primitives.t_rerenderer$primitives21447.getBasis = ((function (color__$1,x__$1,y__$1,props__$1,map__21445,map__21445__$1,props,width,height,font_size,color,x,y,value){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$x,cljs.core.cst$sym$height,cljs.core.cst$sym$props,cljs.core.cst$sym$y,cljs.core.cst$sym$childs,cljs.core.cst$sym$color,cljs.core.cst$sym$font_DASH_size,cljs.core.cst$sym$value,cljs.core.cst$sym$map__21445,cljs.core.cst$sym$width,cljs.core.cst$sym$p__21444,cljs.core.cst$sym$meta21448], null);
});})(color__$1,x__$1,y__$1,props__$1,map__21445,map__21445__$1,props,width,height,font_size,color,x,y,value))
;

rerenderer.primitives.t_rerenderer$primitives21447.cljs$lang$type = true;

rerenderer.primitives.t_rerenderer$primitives21447.cljs$lang$ctorStr = "rerenderer.primitives/t_rerenderer$primitives21447";

rerenderer.primitives.t_rerenderer$primitives21447.cljs$lang$ctorPrWriter = ((function (color__$1,x__$1,y__$1,props__$1,map__21445,map__21445__$1,props,width,height,font_size,color,x,y,value){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write(writer__6755__auto__,"rerenderer.primitives/t_rerenderer$primitives21447");
});})(color__$1,x__$1,y__$1,props__$1,map__21445,map__21445__$1,props,width,height,font_size,color,x,y,value))
;

rerenderer.primitives.__GT_t_rerenderer$primitives21447 = ((function (color__$1,x__$1,y__$1,props__$1,map__21445,map__21445__$1,props,width,height,font_size,color,x,y,value){
return (function rerenderer$primitives$__GT_t_rerenderer$primitives21447(x__$2,height__$1,props__$2,y__$2,childs__$1,color__$2,font_size__$1,value__$1,map__21445__$2,width__$1,p__21444__$1,meta21448){
return (new rerenderer.primitives.t_rerenderer$primitives21447(x__$2,height__$1,props__$2,y__$2,childs__$1,color__$2,font_size__$1,value__$1,map__21445__$2,width__$1,p__21444__$1,meta21448));
});})(color__$1,x__$1,y__$1,props__$1,map__21445,map__21445__$1,props,width,height,font_size,color,x,y,value))
;

}

return (new rerenderer.primitives.t_rerenderer$primitives21447(x__$1,height,props__$1,y__$1,childs,color__$1,font_size,value,map__21445__$1,width,p__21444,cljs.core.PersistentArrayMap.EMPTY));
});

rerenderer.primitives.text.cljs$lang$maxFixedArity = (1);

rerenderer.primitives.text.cljs$lang$applyTo = (function (seq21442){
var G__21443 = cljs.core.first(seq21442);
var seq21442__$1 = cljs.core.next(seq21442);
return rerenderer.primitives.text.cljs$core$IFn$_invoke$arity$variadic(G__21443,seq21442__$1);
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
var len__7214__auto___21468 = arguments.length;
var i__7215__auto___21469 = (0);
while(true){
if((i__7215__auto___21469 < len__7214__auto___21468)){
args__7221__auto__.push((arguments[i__7215__auto___21469]));

var G__21470 = (i__7215__auto___21469 + (1));
i__7215__auto___21469 = G__21470;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((1) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((1)),(0))):null);
return rerenderer.primitives.image.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7222__auto__);
});

rerenderer.primitives.image.cljs$core$IFn$_invoke$arity$variadic = (function (p__21462,childs){
var map__21463 = p__21462;
var map__21463__$1 = ((((!((map__21463 == null)))?((((map__21463.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21463.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21463):map__21463);
var props = map__21463__$1;
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21463__$1,cljs.core.cst$kw$width);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21463__$1,cljs.core.cst$kw$height);
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21463__$1,cljs.core.cst$kw$src);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21463__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21463__$1,cljs.core.cst$kw$y);
var sx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21463__$1,cljs.core.cst$kw$sx);
var sy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21463__$1,cljs.core.cst$kw$sy);
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
var props__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(props,cljs.core.cst$kw$x,x__$1,cljs.core.array_seq([cljs.core.cst$kw$y,y__$1,cljs.core.cst$kw$sx,sx__$1,cljs.core.cst$kw$sy,sy__$1,cljs.core.cst$kw$src,src], 0));
if(typeof rerenderer.primitives.t_rerenderer$primitives21465 !== 'undefined'){
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
rerenderer.primitives.t_rerenderer$primitives21465 = (function (x,height,p__21462,props,y,childs,map__21463,sy,width,src,sx,meta21466){
this.x = x;
this.height = height;
this.p__21462 = p__21462;
this.props = props;
this.y = y;
this.childs = childs;
this.map__21463 = map__21463;
this.sy = sy;
this.width = width;
this.src = src;
this.sx = sx;
this.meta21466 = meta21466;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
rerenderer.primitives.t_rerenderer$primitives21465.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (x__$1,y__$1,sx__$1,sy__$1,props__$1,map__21463,map__21463__$1,props,width,height,src,x,y,sx,sy){
return (function (_21467,meta21466__$1){
var self__ = this;
var _21467__$1 = this;
return (new rerenderer.primitives.t_rerenderer$primitives21465(self__.x,self__.height,self__.p__21462,self__.props,self__.y,self__.childs,self__.map__21463,self__.sy,self__.width,self__.src,self__.sx,meta21466__$1));
});})(x__$1,y__$1,sx__$1,sy__$1,props__$1,map__21463,map__21463__$1,props,width,height,src,x,y,sx,sy))
;

rerenderer.primitives.t_rerenderer$primitives21465.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (x__$1,y__$1,sx__$1,sy__$1,props__$1,map__21463,map__21463__$1,props,width,height,src,x,y,sx,sy){
return (function (_21467){
var self__ = this;
var _21467__$1 = this;
return self__.meta21466;
});})(x__$1,y__$1,sx__$1,sy__$1,props__$1,map__21463,map__21463__$1,props,width,height,src,x,y,sx,sy))
;

rerenderer.primitives.t_rerenderer$primitives21465.prototype.toString = ((function (x__$1,y__$1,sx__$1,sy__$1,props__$1,map__21463,map__21463__$1,props,width,height,src,x,y,sx,sy){
return (function (){
var self__ = this;
var this$ = this;
return rerenderer.component.component__GT_string(this$);
});})(x__$1,y__$1,sx__$1,sy__$1,props__$1,map__21463,map__21463__$1,props,width,height,src,x,y,sx,sy))
;

rerenderer.primitives.t_rerenderer$primitives21465.prototype.rerenderer$component$IComponent$ = true;

rerenderer.primitives.t_rerenderer$primitives21465.prototype.rerenderer$component$IComponent$tag$arity$1 = ((function (x__$1,y__$1,sx__$1,sy__$1,props__$1,map__21463,map__21463__$1,props,width,height,src,x,y,sx,sy){
return (function (_){
var self__ = this;
var ___$1 = this;
return "image";
});})(x__$1,y__$1,sx__$1,sy__$1,props__$1,map__21463,map__21463__$1,props,width,height,src,x,y,sx,sy))
;

rerenderer.primitives.t_rerenderer$primitives21465.prototype.rerenderer$component$IComponent$childs$arity$1 = ((function (x__$1,y__$1,sx__$1,sy__$1,props__$1,map__21463,map__21463__$1,props,width,height,src,x,y,sx,sy){
return (function (_){
var self__ = this;
var ___$1 = this;
return rerenderer.component.prepare_childs(self__.childs);
});})(x__$1,y__$1,sx__$1,sy__$1,props__$1,map__21463,map__21463__$1,props,width,height,src,x,y,sx,sy))
;

rerenderer.primitives.t_rerenderer$primitives21465.prototype.rerenderer$component$IComponent$props$arity$1 = ((function (x__$1,y__$1,sx__$1,sy__$1,props__$1,map__21463,map__21463__$1,props,width,height,src,x,y,sx,sy){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.props;
});})(x__$1,y__$1,sx__$1,sy__$1,props__$1,map__21463,map__21463__$1,props,width,height,src,x,y,sx,sy))
;

rerenderer.primitives.t_rerenderer$primitives21465.prototype.rerenderer$platform$browser$core$IBrowser$ = true;

rerenderer.primitives.t_rerenderer$primitives21465.prototype.rerenderer$platform$browser$core$IBrowser$render_browser$arity$2 = ((function (x__$1,y__$1,sx__$1,sy__$1,props__$1,map__21463,map__21463__$1,props,width,height,src,x,y,sx,sy){
return (function (_,ctx){
var self__ = this;
var ___$1 = this;
var img = (rerenderer.platform.browser.utils.get_image.cljs$core$IFn$_invoke$arity$1 ? rerenderer.platform.browser.utils.get_image.cljs$core$IFn$_invoke$arity$1(self__.src) : rerenderer.platform.browser.utils.get_image.call(null,self__.src));
return ctx.drawImage(img,self__.sx,self__.sy,self__.width,self__.height,(0),(0),self__.width,self__.height);
});})(x__$1,y__$1,sx__$1,sy__$1,props__$1,map__21463,map__21463__$1,props,width,height,src,x,y,sx,sy))
;

rerenderer.primitives.t_rerenderer$primitives21465.prototype.rerenderer$platform$android$core$IAndroid$ = true;

rerenderer.primitives.t_rerenderer$primitives21465.prototype.rerenderer$platform$android$core$IAndroid$android_primitive$arity$1 = ((function (x__$1,y__$1,sx__$1,sy__$1,props__$1,map__21463,map__21463__$1,props,width,height,src,x,y,sx,sy){
return (function (_){
var self__ = this;
var ___$1 = this;
return "bundled.image";
});})(x__$1,y__$1,sx__$1,sy__$1,props__$1,map__21463,map__21463__$1,props,width,height,src,x,y,sx,sy))
;

rerenderer.primitives.t_rerenderer$primitives21465.getBasis = ((function (x__$1,y__$1,sx__$1,sy__$1,props__$1,map__21463,map__21463__$1,props,width,height,src,x,y,sx,sy){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$x,cljs.core.cst$sym$height,cljs.core.cst$sym$p__21462,cljs.core.cst$sym$props,cljs.core.cst$sym$y,cljs.core.cst$sym$childs,cljs.core.cst$sym$map__21463,cljs.core.cst$sym$sy,cljs.core.cst$sym$width,cljs.core.cst$sym$src,cljs.core.cst$sym$sx,cljs.core.cst$sym$meta21466], null);
});})(x__$1,y__$1,sx__$1,sy__$1,props__$1,map__21463,map__21463__$1,props,width,height,src,x,y,sx,sy))
;

rerenderer.primitives.t_rerenderer$primitives21465.cljs$lang$type = true;

rerenderer.primitives.t_rerenderer$primitives21465.cljs$lang$ctorStr = "rerenderer.primitives/t_rerenderer$primitives21465";

rerenderer.primitives.t_rerenderer$primitives21465.cljs$lang$ctorPrWriter = ((function (x__$1,y__$1,sx__$1,sy__$1,props__$1,map__21463,map__21463__$1,props,width,height,src,x,y,sx,sy){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write(writer__6755__auto__,"rerenderer.primitives/t_rerenderer$primitives21465");
});})(x__$1,y__$1,sx__$1,sy__$1,props__$1,map__21463,map__21463__$1,props,width,height,src,x,y,sx,sy))
;

rerenderer.primitives.__GT_t_rerenderer$primitives21465 = ((function (x__$1,y__$1,sx__$1,sy__$1,props__$1,map__21463,map__21463__$1,props,width,height,src,x,y,sx,sy){
return (function rerenderer$primitives$__GT_t_rerenderer$primitives21465(x__$2,height__$1,p__21462__$1,props__$2,y__$2,childs__$1,map__21463__$2,sy__$2,width__$1,src__$1,sx__$2,meta21466){
return (new rerenderer.primitives.t_rerenderer$primitives21465(x__$2,height__$1,p__21462__$1,props__$2,y__$2,childs__$1,map__21463__$2,sy__$2,width__$1,src__$1,sx__$2,meta21466));
});})(x__$1,y__$1,sx__$1,sy__$1,props__$1,map__21463,map__21463__$1,props,width,height,src,x,y,sx,sy))
;

}

return (new rerenderer.primitives.t_rerenderer$primitives21465(x__$1,height,p__21462,props__$1,y__$1,childs,map__21463__$1,sy__$1,width,src,sx__$1,cljs.core.PersistentArrayMap.EMPTY));
});

rerenderer.primitives.image.cljs$lang$maxFixedArity = (1);

rerenderer.primitives.image.cljs$lang$applyTo = (function (seq21460){
var G__21461 = cljs.core.first(seq21460);
var seq21460__$1 = cljs.core.next(seq21460);
return rerenderer.primitives.image.cljs$core$IFn$_invoke$arity$variadic(G__21461,seq21460__$1);
});
