// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('rerenderer.primitives');
goog.require('cljs.core');
goog.require('rerenderer.platform.browser.core');
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
var len__7214__auto___23349 = arguments.length;
var i__7215__auto___23350 = (0);
while(true){
if((i__7215__auto___23350 < len__7214__auto___23349)){
args__7221__auto__.push((arguments[i__7215__auto___23350]));

var G__23351 = (i__7215__auto___23350 + (1));
i__7215__auto___23350 = G__23351;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((1) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((1)),(0))):null);
return rerenderer.primitives.rectangle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7222__auto__);
});

rerenderer.primitives.rectangle.cljs$core$IFn$_invoke$arity$variadic = (function (p__23342,childs){
var map__23343 = p__23342;
var map__23343__$1 = ((((!((map__23343 == null)))?((((map__23343.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23343.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23343):map__23343);
var props = map__23343__$1;
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23343__$1,cljs.core.cst$kw$width);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23343__$1,cljs.core.cst$kw$height);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23343__$1,cljs.core.cst$kw$color);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23343__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23343__$1,cljs.core.cst$kw$y);
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
if(typeof rerenderer.primitives.t_rerenderer$primitives23345 !== 'undefined'){
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
rerenderer.primitives.t_rerenderer$primitives23345 = (function (p__23342,childs,map__23343,props,width,height,color,x,y,meta23346){
this.p__23342 = p__23342;
this.childs = childs;
this.map__23343 = map__23343;
this.props = props;
this.width = width;
this.height = height;
this.color = color;
this.x = x;
this.y = y;
this.meta23346 = meta23346;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
rerenderer.primitives.t_rerenderer$primitives23345.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (color__$1,x__$1,y__$1,props__$1,map__23343,map__23343__$1,props,width,height,color,x,y){
return (function (_23347,meta23346__$1){
var self__ = this;
var _23347__$1 = this;
return (new rerenderer.primitives.t_rerenderer$primitives23345(self__.p__23342,self__.childs,self__.map__23343,self__.props,self__.width,self__.height,self__.color,self__.x,self__.y,meta23346__$1));
});})(color__$1,x__$1,y__$1,props__$1,map__23343,map__23343__$1,props,width,height,color,x,y))
;

rerenderer.primitives.t_rerenderer$primitives23345.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (color__$1,x__$1,y__$1,props__$1,map__23343,map__23343__$1,props,width,height,color,x,y){
return (function (_23347){
var self__ = this;
var _23347__$1 = this;
return self__.meta23346;
});})(color__$1,x__$1,y__$1,props__$1,map__23343,map__23343__$1,props,width,height,color,x,y))
;

rerenderer.primitives.t_rerenderer$primitives23345.prototype.toString = ((function (color__$1,x__$1,y__$1,props__$1,map__23343,map__23343__$1,props,width,height,color,x,y){
return (function (){
var self__ = this;
var this$ = this;
return rerenderer.component.component__GT_string(this$);
});})(color__$1,x__$1,y__$1,props__$1,map__23343,map__23343__$1,props,width,height,color,x,y))
;

rerenderer.primitives.t_rerenderer$primitives23345.prototype.rerenderer$component$IComponent$ = true;

rerenderer.primitives.t_rerenderer$primitives23345.prototype.rerenderer$component$IComponent$tag$arity$1 = ((function (color__$1,x__$1,y__$1,props__$1,map__23343,map__23343__$1,props,width,height,color,x,y){
return (function (_){
var self__ = this;
var ___$1 = this;
return "rectangle";
});})(color__$1,x__$1,y__$1,props__$1,map__23343,map__23343__$1,props,width,height,color,x,y))
;

rerenderer.primitives.t_rerenderer$primitives23345.prototype.rerenderer$component$IComponent$childs$arity$1 = ((function (color__$1,x__$1,y__$1,props__$1,map__23343,map__23343__$1,props,width,height,color,x,y){
return (function (_){
var self__ = this;
var ___$1 = this;
return rerenderer.component.prepare_childs(self__.childs);
});})(color__$1,x__$1,y__$1,props__$1,map__23343,map__23343__$1,props,width,height,color,x,y))
;

rerenderer.primitives.t_rerenderer$primitives23345.prototype.rerenderer$component$IComponent$props$arity$1 = ((function (color__$1,x__$1,y__$1,props__$1,map__23343,map__23343__$1,props,width,height,color,x,y){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.props;
});})(color__$1,x__$1,y__$1,props__$1,map__23343,map__23343__$1,props,width,height,color,x,y))
;

rerenderer.primitives.t_rerenderer$primitives23345.prototype.rerenderer$platform$browser$core$IBrowser$ = true;

rerenderer.primitives.t_rerenderer$primitives23345.prototype.rerenderer$platform$browser$core$IBrowser$render_browser$arity$2 = ((function (color__$1,x__$1,y__$1,props__$1,map__23343,map__23343__$1,props,width,height,color,x,y){
return (function (_,ctx){
var self__ = this;
var ___$1 = this;
var vec__23348_23352 = self__.color;
var r_23353 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23348_23352,(0),null);
var g_23354 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23348_23352,(1),null);
var b_23355 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23348_23352,(2),null);
var a_23356 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23348_23352,(3),null);
var color_23357__$1 = [cljs.core.str("rgba("),cljs.core.str(r_23353),cljs.core.str(", "),cljs.core.str(g_23354),cljs.core.str(", "),cljs.core.str(b_23355),cljs.core.str(", "),cljs.core.str(a_23356),cljs.core.str(")")].join('');
ctx.fillStyle = color_23357__$1;

return ctx.fillRect((0),(0),self__.width,self__.height);
});})(color__$1,x__$1,y__$1,props__$1,map__23343,map__23343__$1,props,width,height,color,x,y))
;

rerenderer.primitives.t_rerenderer$primitives23345.prototype.rerenderer$platform$android$core$IAndroid$ = true;

rerenderer.primitives.t_rerenderer$primitives23345.prototype.rerenderer$platform$android$core$IAndroid$android_primitive$arity$1 = ((function (color__$1,x__$1,y__$1,props__$1,map__23343,map__23343__$1,props,width,height,color,x,y){
return (function (_){
var self__ = this;
var ___$1 = this;
return "bundled.rectangle";
});})(color__$1,x__$1,y__$1,props__$1,map__23343,map__23343__$1,props,width,height,color,x,y))
;

rerenderer.primitives.t_rerenderer$primitives23345.getBasis = ((function (color__$1,x__$1,y__$1,props__$1,map__23343,map__23343__$1,props,width,height,color,x,y){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p__23342,cljs.core.cst$sym$childs,cljs.core.cst$sym$map__23343,cljs.core.cst$sym$props,cljs.core.cst$sym$width,cljs.core.cst$sym$height,cljs.core.cst$sym$color,cljs.core.cst$sym$x,cljs.core.cst$sym$y,cljs.core.cst$sym$meta23346], null);
});})(color__$1,x__$1,y__$1,props__$1,map__23343,map__23343__$1,props,width,height,color,x,y))
;

rerenderer.primitives.t_rerenderer$primitives23345.cljs$lang$type = true;

rerenderer.primitives.t_rerenderer$primitives23345.cljs$lang$ctorStr = "rerenderer.primitives/t_rerenderer$primitives23345";

rerenderer.primitives.t_rerenderer$primitives23345.cljs$lang$ctorPrWriter = ((function (color__$1,x__$1,y__$1,props__$1,map__23343,map__23343__$1,props,width,height,color,x,y){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write(writer__6755__auto__,"rerenderer.primitives/t_rerenderer$primitives23345");
});})(color__$1,x__$1,y__$1,props__$1,map__23343,map__23343__$1,props,width,height,color,x,y))
;

rerenderer.primitives.__GT_t_rerenderer$primitives23345 = ((function (color__$1,x__$1,y__$1,props__$1,map__23343,map__23343__$1,props,width,height,color,x,y){
return (function rerenderer$primitives$__GT_t_rerenderer$primitives23345(p__23342__$1,childs__$1,map__23343__$2,props__$2,width__$1,height__$1,color__$2,x__$2,y__$2,meta23346){
return (new rerenderer.primitives.t_rerenderer$primitives23345(p__23342__$1,childs__$1,map__23343__$2,props__$2,width__$1,height__$1,color__$2,x__$2,y__$2,meta23346));
});})(color__$1,x__$1,y__$1,props__$1,map__23343,map__23343__$1,props,width,height,color,x,y))
;

}

return (new rerenderer.primitives.t_rerenderer$primitives23345(p__23342,childs,map__23343__$1,props__$1,width,height,color__$1,x__$1,y__$1,cljs.core.PersistentArrayMap.EMPTY));
});

rerenderer.primitives.rectangle.cljs$lang$maxFixedArity = (1);

rerenderer.primitives.rectangle.cljs$lang$applyTo = (function (seq23340){
var G__23341 = cljs.core.first(seq23340);
var seq23340__$1 = cljs.core.next(seq23340);
return rerenderer.primitives.rectangle.cljs$core$IFn$_invoke$arity$variadic(G__23341,seq23340__$1);
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
var len__7214__auto___23367 = arguments.length;
var i__7215__auto___23368 = (0);
while(true){
if((i__7215__auto___23368 < len__7214__auto___23367)){
args__7221__auto__.push((arguments[i__7215__auto___23368]));

var G__23369 = (i__7215__auto___23368 + (1));
i__7215__auto___23368 = G__23369;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((1) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((1)),(0))):null);
return rerenderer.primitives.text.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7222__auto__);
});

rerenderer.primitives.text.cljs$core$IFn$_invoke$arity$variadic = (function (p__23360,childs){
var map__23361 = p__23360;
var map__23361__$1 = ((((!((map__23361 == null)))?((((map__23361.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23361.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23361):map__23361);
var props = map__23361__$1;
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23361__$1,cljs.core.cst$kw$width);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23361__$1,cljs.core.cst$kw$height);
var font_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23361__$1,cljs.core.cst$kw$font_DASH_size);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23361__$1,cljs.core.cst$kw$color);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23361__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23361__$1,cljs.core.cst$kw$y);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23361__$1,cljs.core.cst$kw$value);
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
if(typeof rerenderer.primitives.t_rerenderer$primitives23363 !== 'undefined'){
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
rerenderer.primitives.t_rerenderer$primitives23363 = (function (x,map__23361,height,props,y,childs,color,font_size,p__23360,value,width,meta23364){
this.x = x;
this.map__23361 = map__23361;
this.height = height;
this.props = props;
this.y = y;
this.childs = childs;
this.color = color;
this.font_size = font_size;
this.p__23360 = p__23360;
this.value = value;
this.width = width;
this.meta23364 = meta23364;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
rerenderer.primitives.t_rerenderer$primitives23363.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (color__$1,x__$1,y__$1,props__$1,map__23361,map__23361__$1,props,width,height,font_size,color,x,y,value){
return (function (_23365,meta23364__$1){
var self__ = this;
var _23365__$1 = this;
return (new rerenderer.primitives.t_rerenderer$primitives23363(self__.x,self__.map__23361,self__.height,self__.props,self__.y,self__.childs,self__.color,self__.font_size,self__.p__23360,self__.value,self__.width,meta23364__$1));
});})(color__$1,x__$1,y__$1,props__$1,map__23361,map__23361__$1,props,width,height,font_size,color,x,y,value))
;

rerenderer.primitives.t_rerenderer$primitives23363.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (color__$1,x__$1,y__$1,props__$1,map__23361,map__23361__$1,props,width,height,font_size,color,x,y,value){
return (function (_23365){
var self__ = this;
var _23365__$1 = this;
return self__.meta23364;
});})(color__$1,x__$1,y__$1,props__$1,map__23361,map__23361__$1,props,width,height,font_size,color,x,y,value))
;

rerenderer.primitives.t_rerenderer$primitives23363.prototype.toString = ((function (color__$1,x__$1,y__$1,props__$1,map__23361,map__23361__$1,props,width,height,font_size,color,x,y,value){
return (function (){
var self__ = this;
var this$ = this;
return rerenderer.component.component__GT_string(this$);
});})(color__$1,x__$1,y__$1,props__$1,map__23361,map__23361__$1,props,width,height,font_size,color,x,y,value))
;

rerenderer.primitives.t_rerenderer$primitives23363.prototype.rerenderer$component$IComponent$ = true;

rerenderer.primitives.t_rerenderer$primitives23363.prototype.rerenderer$component$IComponent$tag$arity$1 = ((function (color__$1,x__$1,y__$1,props__$1,map__23361,map__23361__$1,props,width,height,font_size,color,x,y,value){
return (function (_){
var self__ = this;
var ___$1 = this;
return "text";
});})(color__$1,x__$1,y__$1,props__$1,map__23361,map__23361__$1,props,width,height,font_size,color,x,y,value))
;

rerenderer.primitives.t_rerenderer$primitives23363.prototype.rerenderer$component$IComponent$childs$arity$1 = ((function (color__$1,x__$1,y__$1,props__$1,map__23361,map__23361__$1,props,width,height,font_size,color,x,y,value){
return (function (_){
var self__ = this;
var ___$1 = this;
return rerenderer.component.prepare_childs(self__.childs);
});})(color__$1,x__$1,y__$1,props__$1,map__23361,map__23361__$1,props,width,height,font_size,color,x,y,value))
;

rerenderer.primitives.t_rerenderer$primitives23363.prototype.rerenderer$component$IComponent$props$arity$1 = ((function (color__$1,x__$1,y__$1,props__$1,map__23361,map__23361__$1,props,width,height,font_size,color,x,y,value){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.props;
});})(color__$1,x__$1,y__$1,props__$1,map__23361,map__23361__$1,props,width,height,font_size,color,x,y,value))
;

rerenderer.primitives.t_rerenderer$primitives23363.prototype.rerenderer$platform$browser$core$IBrowser$ = true;

rerenderer.primitives.t_rerenderer$primitives23363.prototype.rerenderer$platform$browser$core$IBrowser$render_browser$arity$2 = ((function (color__$1,x__$1,y__$1,props__$1,map__23361,map__23361__$1,props,width,height,font_size,color,x,y,value){
return (function (_,ctx){
var self__ = this;
var ___$1 = this;
var vec__23366_23370 = self__.color;
var r_23371 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23366_23370,(0),null);
var g_23372 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23366_23370,(1),null);
var b_23373 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23366_23370,(2),null);
var a_23374 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23366_23370,(3),null);
var color_23375__$1 = [cljs.core.str("rgba("),cljs.core.str(r_23371),cljs.core.str(", "),cljs.core.str(g_23372),cljs.core.str(", "),cljs.core.str(b_23373),cljs.core.str(", "),cljs.core.str(a_23374),cljs.core.str(")")].join('');
ctx.fillStyle = color_23375__$1;

ctx.font = [cljs.core.str(self__.font_size),cljs.core.str("px sans")].join('');

return ctx.fillText(self__.value,(0),self__.font_size);
});})(color__$1,x__$1,y__$1,props__$1,map__23361,map__23361__$1,props,width,height,font_size,color,x,y,value))
;

rerenderer.primitives.t_rerenderer$primitives23363.prototype.rerenderer$platform$android$core$IAndroid$ = true;

rerenderer.primitives.t_rerenderer$primitives23363.prototype.rerenderer$platform$android$core$IAndroid$android_primitive$arity$1 = ((function (color__$1,x__$1,y__$1,props__$1,map__23361,map__23361__$1,props,width,height,font_size,color,x,y,value){
return (function (_){
var self__ = this;
var ___$1 = this;
return "bundled.text";
});})(color__$1,x__$1,y__$1,props__$1,map__23361,map__23361__$1,props,width,height,font_size,color,x,y,value))
;

rerenderer.primitives.t_rerenderer$primitives23363.getBasis = ((function (color__$1,x__$1,y__$1,props__$1,map__23361,map__23361__$1,props,width,height,font_size,color,x,y,value){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$x,cljs.core.cst$sym$map__23361,cljs.core.cst$sym$height,cljs.core.cst$sym$props,cljs.core.cst$sym$y,cljs.core.cst$sym$childs,cljs.core.cst$sym$color,cljs.core.cst$sym$font_DASH_size,cljs.core.cst$sym$p__23360,cljs.core.cst$sym$value,cljs.core.cst$sym$width,cljs.core.cst$sym$meta23364], null);
});})(color__$1,x__$1,y__$1,props__$1,map__23361,map__23361__$1,props,width,height,font_size,color,x,y,value))
;

rerenderer.primitives.t_rerenderer$primitives23363.cljs$lang$type = true;

rerenderer.primitives.t_rerenderer$primitives23363.cljs$lang$ctorStr = "rerenderer.primitives/t_rerenderer$primitives23363";

rerenderer.primitives.t_rerenderer$primitives23363.cljs$lang$ctorPrWriter = ((function (color__$1,x__$1,y__$1,props__$1,map__23361,map__23361__$1,props,width,height,font_size,color,x,y,value){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write(writer__6755__auto__,"rerenderer.primitives/t_rerenderer$primitives23363");
});})(color__$1,x__$1,y__$1,props__$1,map__23361,map__23361__$1,props,width,height,font_size,color,x,y,value))
;

rerenderer.primitives.__GT_t_rerenderer$primitives23363 = ((function (color__$1,x__$1,y__$1,props__$1,map__23361,map__23361__$1,props,width,height,font_size,color,x,y,value){
return (function rerenderer$primitives$__GT_t_rerenderer$primitives23363(x__$2,map__23361__$2,height__$1,props__$2,y__$2,childs__$1,color__$2,font_size__$1,p__23360__$1,value__$1,width__$1,meta23364){
return (new rerenderer.primitives.t_rerenderer$primitives23363(x__$2,map__23361__$2,height__$1,props__$2,y__$2,childs__$1,color__$2,font_size__$1,p__23360__$1,value__$1,width__$1,meta23364));
});})(color__$1,x__$1,y__$1,props__$1,map__23361,map__23361__$1,props,width,height,font_size,color,x,y,value))
;

}

return (new rerenderer.primitives.t_rerenderer$primitives23363(x__$1,map__23361__$1,height,props__$1,y__$1,childs,color__$1,font_size,p__23360,value,width,cljs.core.PersistentArrayMap.EMPTY));
});

rerenderer.primitives.text.cljs$lang$maxFixedArity = (1);

rerenderer.primitives.text.cljs$lang$applyTo = (function (seq23358){
var G__23359 = cljs.core.first(seq23358);
var seq23358__$1 = cljs.core.next(seq23358);
return rerenderer.primitives.text.cljs$core$IFn$_invoke$arity$variadic(G__23359,seq23358__$1);
});
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
var len__7214__auto___23384 = arguments.length;
var i__7215__auto___23385 = (0);
while(true){
if((i__7215__auto___23385 < len__7214__auto___23384)){
args__7221__auto__.push((arguments[i__7215__auto___23385]));

var G__23386 = (i__7215__auto___23385 + (1));
i__7215__auto___23385 = G__23386;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((1) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((1)),(0))):null);
return rerenderer.primitives.image.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7222__auto__);
});

rerenderer.primitives.image.cljs$core$IFn$_invoke$arity$variadic = (function (p__23378,childs){
var map__23379 = p__23378;
var map__23379__$1 = ((((!((map__23379 == null)))?((((map__23379.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23379.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23379):map__23379);
var props = map__23379__$1;
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23379__$1,cljs.core.cst$kw$width);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23379__$1,cljs.core.cst$kw$height);
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23379__$1,cljs.core.cst$kw$src);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23379__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23379__$1,cljs.core.cst$kw$y);
var sx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23379__$1,cljs.core.cst$kw$sx);
var sy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23379__$1,cljs.core.cst$kw$sy);
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
if(typeof rerenderer.primitives.t_rerenderer$primitives23381 !== 'undefined'){
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
rerenderer.primitives.t_rerenderer$primitives23381 = (function (x,height,props,y,childs,p__23378,map__23379,sy,width,src,sx,meta23382){
this.x = x;
this.height = height;
this.props = props;
this.y = y;
this.childs = childs;
this.p__23378 = p__23378;
this.map__23379 = map__23379;
this.sy = sy;
this.width = width;
this.src = src;
this.sx = sx;
this.meta23382 = meta23382;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
rerenderer.primitives.t_rerenderer$primitives23381.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (x__$1,y__$1,sx__$1,sy__$1,src__$1,props__$1,map__23379,map__23379__$1,props,width,height,src,x,y,sx,sy){
return (function (_23383,meta23382__$1){
var self__ = this;
var _23383__$1 = this;
return (new rerenderer.primitives.t_rerenderer$primitives23381(self__.x,self__.height,self__.props,self__.y,self__.childs,self__.p__23378,self__.map__23379,self__.sy,self__.width,self__.src,self__.sx,meta23382__$1));
});})(x__$1,y__$1,sx__$1,sy__$1,src__$1,props__$1,map__23379,map__23379__$1,props,width,height,src,x,y,sx,sy))
;

rerenderer.primitives.t_rerenderer$primitives23381.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (x__$1,y__$1,sx__$1,sy__$1,src__$1,props__$1,map__23379,map__23379__$1,props,width,height,src,x,y,sx,sy){
return (function (_23383){
var self__ = this;
var _23383__$1 = this;
return self__.meta23382;
});})(x__$1,y__$1,sx__$1,sy__$1,src__$1,props__$1,map__23379,map__23379__$1,props,width,height,src,x,y,sx,sy))
;

rerenderer.primitives.t_rerenderer$primitives23381.prototype.toString = ((function (x__$1,y__$1,sx__$1,sy__$1,src__$1,props__$1,map__23379,map__23379__$1,props,width,height,src,x,y,sx,sy){
return (function (){
var self__ = this;
var this$ = this;
return rerenderer.component.component__GT_string(this$);
});})(x__$1,y__$1,sx__$1,sy__$1,src__$1,props__$1,map__23379,map__23379__$1,props,width,height,src,x,y,sx,sy))
;

rerenderer.primitives.t_rerenderer$primitives23381.prototype.rerenderer$component$IComponent$ = true;

rerenderer.primitives.t_rerenderer$primitives23381.prototype.rerenderer$component$IComponent$tag$arity$1 = ((function (x__$1,y__$1,sx__$1,sy__$1,src__$1,props__$1,map__23379,map__23379__$1,props,width,height,src,x,y,sx,sy){
return (function (_){
var self__ = this;
var ___$1 = this;
return "image";
});})(x__$1,y__$1,sx__$1,sy__$1,src__$1,props__$1,map__23379,map__23379__$1,props,width,height,src,x,y,sx,sy))
;

rerenderer.primitives.t_rerenderer$primitives23381.prototype.rerenderer$component$IComponent$childs$arity$1 = ((function (x__$1,y__$1,sx__$1,sy__$1,src__$1,props__$1,map__23379,map__23379__$1,props,width,height,src,x,y,sx,sy){
return (function (_){
var self__ = this;
var ___$1 = this;
return rerenderer.component.prepare_childs(self__.childs);
});})(x__$1,y__$1,sx__$1,sy__$1,src__$1,props__$1,map__23379,map__23379__$1,props,width,height,src,x,y,sx,sy))
;

rerenderer.primitives.t_rerenderer$primitives23381.prototype.rerenderer$component$IComponent$props$arity$1 = ((function (x__$1,y__$1,sx__$1,sy__$1,src__$1,props__$1,map__23379,map__23379__$1,props,width,height,src,x,y,sx,sy){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.props;
});})(x__$1,y__$1,sx__$1,sy__$1,src__$1,props__$1,map__23379,map__23379__$1,props,width,height,src,x,y,sx,sy))
;

rerenderer.primitives.t_rerenderer$primitives23381.prototype.rerenderer$platform$browser$core$IBrowser$ = true;

rerenderer.primitives.t_rerenderer$primitives23381.prototype.rerenderer$platform$browser$core$IBrowser$render_browser$arity$2 = ((function (x__$1,y__$1,sx__$1,sy__$1,src__$1,props__$1,map__23379,map__23379__$1,props,width,height,src,x,y,sx,sy){
return (function (_,ctx){
var self__ = this;
var ___$1 = this;
var img = (new Image());
img.src = self__.src;

return ctx.drawImage(img,self__.sx,self__.sy,self__.width,self__.height,(0),(0),self__.width,self__.height);
});})(x__$1,y__$1,sx__$1,sy__$1,src__$1,props__$1,map__23379,map__23379__$1,props,width,height,src,x,y,sx,sy))
;

rerenderer.primitives.t_rerenderer$primitives23381.prototype.rerenderer$platform$android$core$IAndroid$ = true;

rerenderer.primitives.t_rerenderer$primitives23381.prototype.rerenderer$platform$android$core$IAndroid$android_primitive$arity$1 = ((function (x__$1,y__$1,sx__$1,sy__$1,src__$1,props__$1,map__23379,map__23379__$1,props,width,height,src,x,y,sx,sy){
return (function (_){
var self__ = this;
var ___$1 = this;
return "bundled.image";
});})(x__$1,y__$1,sx__$1,sy__$1,src__$1,props__$1,map__23379,map__23379__$1,props,width,height,src,x,y,sx,sy))
;

rerenderer.primitives.t_rerenderer$primitives23381.getBasis = ((function (x__$1,y__$1,sx__$1,sy__$1,src__$1,props__$1,map__23379,map__23379__$1,props,width,height,src,x,y,sx,sy){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$x,cljs.core.cst$sym$height,cljs.core.cst$sym$props,cljs.core.cst$sym$y,cljs.core.cst$sym$childs,cljs.core.cst$sym$p__23378,cljs.core.cst$sym$map__23379,cljs.core.cst$sym$sy,cljs.core.cst$sym$width,cljs.core.cst$sym$src,cljs.core.cst$sym$sx,cljs.core.cst$sym$meta23382], null);
});})(x__$1,y__$1,sx__$1,sy__$1,src__$1,props__$1,map__23379,map__23379__$1,props,width,height,src,x,y,sx,sy))
;

rerenderer.primitives.t_rerenderer$primitives23381.cljs$lang$type = true;

rerenderer.primitives.t_rerenderer$primitives23381.cljs$lang$ctorStr = "rerenderer.primitives/t_rerenderer$primitives23381";

rerenderer.primitives.t_rerenderer$primitives23381.cljs$lang$ctorPrWriter = ((function (x__$1,y__$1,sx__$1,sy__$1,src__$1,props__$1,map__23379,map__23379__$1,props,width,height,src,x,y,sx,sy){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write(writer__6755__auto__,"rerenderer.primitives/t_rerenderer$primitives23381");
});})(x__$1,y__$1,sx__$1,sy__$1,src__$1,props__$1,map__23379,map__23379__$1,props,width,height,src,x,y,sx,sy))
;

rerenderer.primitives.__GT_t_rerenderer$primitives23381 = ((function (x__$1,y__$1,sx__$1,sy__$1,src__$1,props__$1,map__23379,map__23379__$1,props,width,height,src,x,y,sx,sy){
return (function rerenderer$primitives$__GT_t_rerenderer$primitives23381(x__$2,height__$1,props__$2,y__$2,childs__$1,p__23378__$1,map__23379__$2,sy__$2,width__$1,src__$2,sx__$2,meta23382){
return (new rerenderer.primitives.t_rerenderer$primitives23381(x__$2,height__$1,props__$2,y__$2,childs__$1,p__23378__$1,map__23379__$2,sy__$2,width__$1,src__$2,sx__$2,meta23382));
});})(x__$1,y__$1,sx__$1,sy__$1,src__$1,props__$1,map__23379,map__23379__$1,props,width,height,src,x,y,sx,sy))
;

}

return (new rerenderer.primitives.t_rerenderer$primitives23381(x__$1,height,props__$1,y__$1,childs,p__23378,map__23379__$1,sy__$1,width,src__$1,sx__$1,cljs.core.PersistentArrayMap.EMPTY));
});

rerenderer.primitives.image.cljs$lang$maxFixedArity = (1);

rerenderer.primitives.image.cljs$lang$applyTo = (function (seq23376){
var G__23377 = cljs.core.first(seq23376);
var seq23376__$1 = cljs.core.next(seq23376);
return rerenderer.primitives.image.cljs$core$IFn$_invoke$arity$variadic(G__23377,seq23376__$1);
});
