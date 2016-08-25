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
var len__7214__auto___19439 = arguments.length;
var i__7215__auto___19440 = (0);
while(true){
if((i__7215__auto___19440 < len__7214__auto___19439)){
args__7221__auto__.push((arguments[i__7215__auto___19440]));

var G__19441 = (i__7215__auto___19440 + (1));
i__7215__auto___19440 = G__19441;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((1) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((1)),(0))):null);
return rerenderer.primitives.rectangle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7222__auto__);
});

rerenderer.primitives.rectangle.cljs$core$IFn$_invoke$arity$variadic = (function (p__19432,childs){
var map__19433 = p__19432;
var map__19433__$1 = ((((!((map__19433 == null)))?((((map__19433.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19433.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19433):map__19433);
var props = map__19433__$1;
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19433__$1,cljs.core.cst$kw$width);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19433__$1,cljs.core.cst$kw$height);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19433__$1,cljs.core.cst$kw$color);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19433__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19433__$1,cljs.core.cst$kw$y);
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
if(typeof rerenderer.primitives.t_rerenderer$primitives19435 !== 'undefined'){
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
rerenderer.primitives.t_rerenderer$primitives19435 = (function (p__19432,childs,map__19433,props,width,height,color,x,y,meta19436){
this.p__19432 = p__19432;
this.childs = childs;
this.map__19433 = map__19433;
this.props = props;
this.width = width;
this.height = height;
this.color = color;
this.x = x;
this.y = y;
this.meta19436 = meta19436;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
rerenderer.primitives.t_rerenderer$primitives19435.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (color__$1,x__$1,y__$1,props__$1,map__19433,map__19433__$1,props,width,height,color,x,y){
return (function (_19437,meta19436__$1){
var self__ = this;
var _19437__$1 = this;
return (new rerenderer.primitives.t_rerenderer$primitives19435(self__.p__19432,self__.childs,self__.map__19433,self__.props,self__.width,self__.height,self__.color,self__.x,self__.y,meta19436__$1));
});})(color__$1,x__$1,y__$1,props__$1,map__19433,map__19433__$1,props,width,height,color,x,y))
;

rerenderer.primitives.t_rerenderer$primitives19435.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (color__$1,x__$1,y__$1,props__$1,map__19433,map__19433__$1,props,width,height,color,x,y){
return (function (_19437){
var self__ = this;
var _19437__$1 = this;
return self__.meta19436;
});})(color__$1,x__$1,y__$1,props__$1,map__19433,map__19433__$1,props,width,height,color,x,y))
;

rerenderer.primitives.t_rerenderer$primitives19435.prototype.toString = ((function (color__$1,x__$1,y__$1,props__$1,map__19433,map__19433__$1,props,width,height,color,x,y){
return (function (){
var self__ = this;
var this$ = this;
return rerenderer.component.component__GT_string(this$);
});})(color__$1,x__$1,y__$1,props__$1,map__19433,map__19433__$1,props,width,height,color,x,y))
;

rerenderer.primitives.t_rerenderer$primitives19435.prototype.rerenderer$component$IComponent$ = true;

rerenderer.primitives.t_rerenderer$primitives19435.prototype.rerenderer$component$IComponent$tag$arity$1 = ((function (color__$1,x__$1,y__$1,props__$1,map__19433,map__19433__$1,props,width,height,color,x,y){
return (function (_){
var self__ = this;
var ___$1 = this;
return "rectangle";
});})(color__$1,x__$1,y__$1,props__$1,map__19433,map__19433__$1,props,width,height,color,x,y))
;

rerenderer.primitives.t_rerenderer$primitives19435.prototype.rerenderer$component$IComponent$childs$arity$1 = ((function (color__$1,x__$1,y__$1,props__$1,map__19433,map__19433__$1,props,width,height,color,x,y){
return (function (_){
var self__ = this;
var ___$1 = this;
return rerenderer.component.prepare_childs(self__.childs);
});})(color__$1,x__$1,y__$1,props__$1,map__19433,map__19433__$1,props,width,height,color,x,y))
;

rerenderer.primitives.t_rerenderer$primitives19435.prototype.rerenderer$component$IComponent$props$arity$1 = ((function (color__$1,x__$1,y__$1,props__$1,map__19433,map__19433__$1,props,width,height,color,x,y){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.props;
});})(color__$1,x__$1,y__$1,props__$1,map__19433,map__19433__$1,props,width,height,color,x,y))
;

rerenderer.primitives.t_rerenderer$primitives19435.prototype.rerenderer$platform$browser$core$IBrowser$ = true;

rerenderer.primitives.t_rerenderer$primitives19435.prototype.rerenderer$platform$browser$core$IBrowser$render_browser$arity$2 = ((function (color__$1,x__$1,y__$1,props__$1,map__19433,map__19433__$1,props,width,height,color,x,y){
return (function (_,ctx){
var self__ = this;
var ___$1 = this;
var vec__19438_19442 = self__.color;
var r_19443 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19438_19442,(0),null);
var g_19444 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19438_19442,(1),null);
var b_19445 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19438_19442,(2),null);
var a_19446 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19438_19442,(3),null);
var color_19447__$1 = [cljs.core.str("rgba("),cljs.core.str(r_19443),cljs.core.str(", "),cljs.core.str(g_19444),cljs.core.str(", "),cljs.core.str(b_19445),cljs.core.str(", "),cljs.core.str(a_19446),cljs.core.str(")")].join('');
ctx.fillStyle = color_19447__$1;

return ctx.fillRect((0),(0),self__.width,self__.height);
});})(color__$1,x__$1,y__$1,props__$1,map__19433,map__19433__$1,props,width,height,color,x,y))
;

rerenderer.primitives.t_rerenderer$primitives19435.prototype.rerenderer$platform$android$core$IAndroid$ = true;

rerenderer.primitives.t_rerenderer$primitives19435.prototype.rerenderer$platform$android$core$IAndroid$android_primitive$arity$1 = ((function (color__$1,x__$1,y__$1,props__$1,map__19433,map__19433__$1,props,width,height,color,x,y){
return (function (_){
var self__ = this;
var ___$1 = this;
return "bundled.rectangle";
});})(color__$1,x__$1,y__$1,props__$1,map__19433,map__19433__$1,props,width,height,color,x,y))
;

rerenderer.primitives.t_rerenderer$primitives19435.getBasis = ((function (color__$1,x__$1,y__$1,props__$1,map__19433,map__19433__$1,props,width,height,color,x,y){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p__19432,cljs.core.cst$sym$childs,cljs.core.cst$sym$map__19433,cljs.core.cst$sym$props,cljs.core.cst$sym$width,cljs.core.cst$sym$height,cljs.core.cst$sym$color,cljs.core.cst$sym$x,cljs.core.cst$sym$y,cljs.core.cst$sym$meta19436], null);
});})(color__$1,x__$1,y__$1,props__$1,map__19433,map__19433__$1,props,width,height,color,x,y))
;

rerenderer.primitives.t_rerenderer$primitives19435.cljs$lang$type = true;

rerenderer.primitives.t_rerenderer$primitives19435.cljs$lang$ctorStr = "rerenderer.primitives/t_rerenderer$primitives19435";

rerenderer.primitives.t_rerenderer$primitives19435.cljs$lang$ctorPrWriter = ((function (color__$1,x__$1,y__$1,props__$1,map__19433,map__19433__$1,props,width,height,color,x,y){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write(writer__6755__auto__,"rerenderer.primitives/t_rerenderer$primitives19435");
});})(color__$1,x__$1,y__$1,props__$1,map__19433,map__19433__$1,props,width,height,color,x,y))
;

rerenderer.primitives.__GT_t_rerenderer$primitives19435 = ((function (color__$1,x__$1,y__$1,props__$1,map__19433,map__19433__$1,props,width,height,color,x,y){
return (function rerenderer$primitives$__GT_t_rerenderer$primitives19435(p__19432__$1,childs__$1,map__19433__$2,props__$2,width__$1,height__$1,color__$2,x__$2,y__$2,meta19436){
return (new rerenderer.primitives.t_rerenderer$primitives19435(p__19432__$1,childs__$1,map__19433__$2,props__$2,width__$1,height__$1,color__$2,x__$2,y__$2,meta19436));
});})(color__$1,x__$1,y__$1,props__$1,map__19433,map__19433__$1,props,width,height,color,x,y))
;

}

return (new rerenderer.primitives.t_rerenderer$primitives19435(p__19432,childs,map__19433__$1,props__$1,width,height,color__$1,x__$1,y__$1,cljs.core.PersistentArrayMap.EMPTY));
});

rerenderer.primitives.rectangle.cljs$lang$maxFixedArity = (1);

rerenderer.primitives.rectangle.cljs$lang$applyTo = (function (seq19430){
var G__19431 = cljs.core.first(seq19430);
var seq19430__$1 = cljs.core.next(seq19430);
return rerenderer.primitives.rectangle.cljs$core$IFn$_invoke$arity$variadic(G__19431,seq19430__$1);
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
var len__7214__auto___19457 = arguments.length;
var i__7215__auto___19458 = (0);
while(true){
if((i__7215__auto___19458 < len__7214__auto___19457)){
args__7221__auto__.push((arguments[i__7215__auto___19458]));

var G__19459 = (i__7215__auto___19458 + (1));
i__7215__auto___19458 = G__19459;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((1) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((1)),(0))):null);
return rerenderer.primitives.text.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7222__auto__);
});

rerenderer.primitives.text.cljs$core$IFn$_invoke$arity$variadic = (function (p__19450,childs){
var map__19451 = p__19450;
var map__19451__$1 = ((((!((map__19451 == null)))?((((map__19451.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19451.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19451):map__19451);
var props = map__19451__$1;
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19451__$1,cljs.core.cst$kw$width);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19451__$1,cljs.core.cst$kw$height);
var font_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19451__$1,cljs.core.cst$kw$font_DASH_size);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19451__$1,cljs.core.cst$kw$color);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19451__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19451__$1,cljs.core.cst$kw$y);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19451__$1,cljs.core.cst$kw$value);
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
if(typeof rerenderer.primitives.t_rerenderer$primitives19453 !== 'undefined'){
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
rerenderer.primitives.t_rerenderer$primitives19453 = (function (x,p__19450,height,props,y,childs,color,font_size,value,width,map__19451,meta19454){
this.x = x;
this.p__19450 = p__19450;
this.height = height;
this.props = props;
this.y = y;
this.childs = childs;
this.color = color;
this.font_size = font_size;
this.value = value;
this.width = width;
this.map__19451 = map__19451;
this.meta19454 = meta19454;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
rerenderer.primitives.t_rerenderer$primitives19453.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (color__$1,x__$1,y__$1,props__$1,map__19451,map__19451__$1,props,width,height,font_size,color,x,y,value){
return (function (_19455,meta19454__$1){
var self__ = this;
var _19455__$1 = this;
return (new rerenderer.primitives.t_rerenderer$primitives19453(self__.x,self__.p__19450,self__.height,self__.props,self__.y,self__.childs,self__.color,self__.font_size,self__.value,self__.width,self__.map__19451,meta19454__$1));
});})(color__$1,x__$1,y__$1,props__$1,map__19451,map__19451__$1,props,width,height,font_size,color,x,y,value))
;

rerenderer.primitives.t_rerenderer$primitives19453.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (color__$1,x__$1,y__$1,props__$1,map__19451,map__19451__$1,props,width,height,font_size,color,x,y,value){
return (function (_19455){
var self__ = this;
var _19455__$1 = this;
return self__.meta19454;
});})(color__$1,x__$1,y__$1,props__$1,map__19451,map__19451__$1,props,width,height,font_size,color,x,y,value))
;

rerenderer.primitives.t_rerenderer$primitives19453.prototype.toString = ((function (color__$1,x__$1,y__$1,props__$1,map__19451,map__19451__$1,props,width,height,font_size,color,x,y,value){
return (function (){
var self__ = this;
var this$ = this;
return rerenderer.component.component__GT_string(this$);
});})(color__$1,x__$1,y__$1,props__$1,map__19451,map__19451__$1,props,width,height,font_size,color,x,y,value))
;

rerenderer.primitives.t_rerenderer$primitives19453.prototype.rerenderer$component$IComponent$ = true;

rerenderer.primitives.t_rerenderer$primitives19453.prototype.rerenderer$component$IComponent$tag$arity$1 = ((function (color__$1,x__$1,y__$1,props__$1,map__19451,map__19451__$1,props,width,height,font_size,color,x,y,value){
return (function (_){
var self__ = this;
var ___$1 = this;
return "text";
});})(color__$1,x__$1,y__$1,props__$1,map__19451,map__19451__$1,props,width,height,font_size,color,x,y,value))
;

rerenderer.primitives.t_rerenderer$primitives19453.prototype.rerenderer$component$IComponent$childs$arity$1 = ((function (color__$1,x__$1,y__$1,props__$1,map__19451,map__19451__$1,props,width,height,font_size,color,x,y,value){
return (function (_){
var self__ = this;
var ___$1 = this;
return rerenderer.component.prepare_childs(self__.childs);
});})(color__$1,x__$1,y__$1,props__$1,map__19451,map__19451__$1,props,width,height,font_size,color,x,y,value))
;

rerenderer.primitives.t_rerenderer$primitives19453.prototype.rerenderer$component$IComponent$props$arity$1 = ((function (color__$1,x__$1,y__$1,props__$1,map__19451,map__19451__$1,props,width,height,font_size,color,x,y,value){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.props;
});})(color__$1,x__$1,y__$1,props__$1,map__19451,map__19451__$1,props,width,height,font_size,color,x,y,value))
;

rerenderer.primitives.t_rerenderer$primitives19453.prototype.rerenderer$platform$browser$core$IBrowser$ = true;

rerenderer.primitives.t_rerenderer$primitives19453.prototype.rerenderer$platform$browser$core$IBrowser$render_browser$arity$2 = ((function (color__$1,x__$1,y__$1,props__$1,map__19451,map__19451__$1,props,width,height,font_size,color,x,y,value){
return (function (_,ctx){
var self__ = this;
var ___$1 = this;
var vec__19456_19460 = self__.color;
var r_19461 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19456_19460,(0),null);
var g_19462 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19456_19460,(1),null);
var b_19463 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19456_19460,(2),null);
var a_19464 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19456_19460,(3),null);
var color_19465__$1 = [cljs.core.str("rgba("),cljs.core.str(r_19461),cljs.core.str(", "),cljs.core.str(g_19462),cljs.core.str(", "),cljs.core.str(b_19463),cljs.core.str(", "),cljs.core.str(a_19464),cljs.core.str(")")].join('');
ctx.fillStyle = color_19465__$1;

ctx.font = [cljs.core.str(self__.font_size),cljs.core.str("px sans")].join('');

return ctx.fillText(self__.value,(0),self__.font_size);
});})(color__$1,x__$1,y__$1,props__$1,map__19451,map__19451__$1,props,width,height,font_size,color,x,y,value))
;

rerenderer.primitives.t_rerenderer$primitives19453.prototype.rerenderer$platform$android$core$IAndroid$ = true;

rerenderer.primitives.t_rerenderer$primitives19453.prototype.rerenderer$platform$android$core$IAndroid$android_primitive$arity$1 = ((function (color__$1,x__$1,y__$1,props__$1,map__19451,map__19451__$1,props,width,height,font_size,color,x,y,value){
return (function (_){
var self__ = this;
var ___$1 = this;
return "bundled.text";
});})(color__$1,x__$1,y__$1,props__$1,map__19451,map__19451__$1,props,width,height,font_size,color,x,y,value))
;

rerenderer.primitives.t_rerenderer$primitives19453.getBasis = ((function (color__$1,x__$1,y__$1,props__$1,map__19451,map__19451__$1,props,width,height,font_size,color,x,y,value){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$x,cljs.core.cst$sym$p__19450,cljs.core.cst$sym$height,cljs.core.cst$sym$props,cljs.core.cst$sym$y,cljs.core.cst$sym$childs,cljs.core.cst$sym$color,cljs.core.cst$sym$font_DASH_size,cljs.core.cst$sym$value,cljs.core.cst$sym$width,cljs.core.cst$sym$map__19451,cljs.core.cst$sym$meta19454], null);
});})(color__$1,x__$1,y__$1,props__$1,map__19451,map__19451__$1,props,width,height,font_size,color,x,y,value))
;

rerenderer.primitives.t_rerenderer$primitives19453.cljs$lang$type = true;

rerenderer.primitives.t_rerenderer$primitives19453.cljs$lang$ctorStr = "rerenderer.primitives/t_rerenderer$primitives19453";

rerenderer.primitives.t_rerenderer$primitives19453.cljs$lang$ctorPrWriter = ((function (color__$1,x__$1,y__$1,props__$1,map__19451,map__19451__$1,props,width,height,font_size,color,x,y,value){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write(writer__6755__auto__,"rerenderer.primitives/t_rerenderer$primitives19453");
});})(color__$1,x__$1,y__$1,props__$1,map__19451,map__19451__$1,props,width,height,font_size,color,x,y,value))
;

rerenderer.primitives.__GT_t_rerenderer$primitives19453 = ((function (color__$1,x__$1,y__$1,props__$1,map__19451,map__19451__$1,props,width,height,font_size,color,x,y,value){
return (function rerenderer$primitives$__GT_t_rerenderer$primitives19453(x__$2,p__19450__$1,height__$1,props__$2,y__$2,childs__$1,color__$2,font_size__$1,value__$1,width__$1,map__19451__$2,meta19454){
return (new rerenderer.primitives.t_rerenderer$primitives19453(x__$2,p__19450__$1,height__$1,props__$2,y__$2,childs__$1,color__$2,font_size__$1,value__$1,width__$1,map__19451__$2,meta19454));
});})(color__$1,x__$1,y__$1,props__$1,map__19451,map__19451__$1,props,width,height,font_size,color,x,y,value))
;

}

return (new rerenderer.primitives.t_rerenderer$primitives19453(x__$1,p__19450,height,props__$1,y__$1,childs,color__$1,font_size,value,width,map__19451__$1,cljs.core.PersistentArrayMap.EMPTY));
});

rerenderer.primitives.text.cljs$lang$maxFixedArity = (1);

rerenderer.primitives.text.cljs$lang$applyTo = (function (seq19448){
var G__19449 = cljs.core.first(seq19448);
var seq19448__$1 = cljs.core.next(seq19448);
return rerenderer.primitives.text.cljs$core$IFn$_invoke$arity$variadic(G__19449,seq19448__$1);
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
var len__7214__auto___19474 = arguments.length;
var i__7215__auto___19475 = (0);
while(true){
if((i__7215__auto___19475 < len__7214__auto___19474)){
args__7221__auto__.push((arguments[i__7215__auto___19475]));

var G__19476 = (i__7215__auto___19475 + (1));
i__7215__auto___19475 = G__19476;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((1) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((1)),(0))):null);
return rerenderer.primitives.image.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7222__auto__);
});

rerenderer.primitives.image.cljs$core$IFn$_invoke$arity$variadic = (function (p__19468,childs){
var map__19469 = p__19468;
var map__19469__$1 = ((((!((map__19469 == null)))?((((map__19469.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19469.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19469):map__19469);
var props = map__19469__$1;
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19469__$1,cljs.core.cst$kw$width);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19469__$1,cljs.core.cst$kw$height);
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19469__$1,cljs.core.cst$kw$src);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19469__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19469__$1,cljs.core.cst$kw$y);
var sx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19469__$1,cljs.core.cst$kw$sx);
var sy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19469__$1,cljs.core.cst$kw$sy);
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
if(typeof rerenderer.primitives.t_rerenderer$primitives19471 !== 'undefined'){
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
rerenderer.primitives.t_rerenderer$primitives19471 = (function (x,height,props,y,childs,sy,width,p__19468,src,map__19469,sx,meta19472){
this.x = x;
this.height = height;
this.props = props;
this.y = y;
this.childs = childs;
this.sy = sy;
this.width = width;
this.p__19468 = p__19468;
this.src = src;
this.map__19469 = map__19469;
this.sx = sx;
this.meta19472 = meta19472;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
rerenderer.primitives.t_rerenderer$primitives19471.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (x__$1,y__$1,sx__$1,sy__$1,props__$1,map__19469,map__19469__$1,props,width,height,src,x,y,sx,sy){
return (function (_19473,meta19472__$1){
var self__ = this;
var _19473__$1 = this;
return (new rerenderer.primitives.t_rerenderer$primitives19471(self__.x,self__.height,self__.props,self__.y,self__.childs,self__.sy,self__.width,self__.p__19468,self__.src,self__.map__19469,self__.sx,meta19472__$1));
});})(x__$1,y__$1,sx__$1,sy__$1,props__$1,map__19469,map__19469__$1,props,width,height,src,x,y,sx,sy))
;

rerenderer.primitives.t_rerenderer$primitives19471.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (x__$1,y__$1,sx__$1,sy__$1,props__$1,map__19469,map__19469__$1,props,width,height,src,x,y,sx,sy){
return (function (_19473){
var self__ = this;
var _19473__$1 = this;
return self__.meta19472;
});})(x__$1,y__$1,sx__$1,sy__$1,props__$1,map__19469,map__19469__$1,props,width,height,src,x,y,sx,sy))
;

rerenderer.primitives.t_rerenderer$primitives19471.prototype.toString = ((function (x__$1,y__$1,sx__$1,sy__$1,props__$1,map__19469,map__19469__$1,props,width,height,src,x,y,sx,sy){
return (function (){
var self__ = this;
var this$ = this;
return rerenderer.component.component__GT_string(this$);
});})(x__$1,y__$1,sx__$1,sy__$1,props__$1,map__19469,map__19469__$1,props,width,height,src,x,y,sx,sy))
;

rerenderer.primitives.t_rerenderer$primitives19471.prototype.rerenderer$component$IComponent$ = true;

rerenderer.primitives.t_rerenderer$primitives19471.prototype.rerenderer$component$IComponent$tag$arity$1 = ((function (x__$1,y__$1,sx__$1,sy__$1,props__$1,map__19469,map__19469__$1,props,width,height,src,x,y,sx,sy){
return (function (_){
var self__ = this;
var ___$1 = this;
return "image";
});})(x__$1,y__$1,sx__$1,sy__$1,props__$1,map__19469,map__19469__$1,props,width,height,src,x,y,sx,sy))
;

rerenderer.primitives.t_rerenderer$primitives19471.prototype.rerenderer$component$IComponent$childs$arity$1 = ((function (x__$1,y__$1,sx__$1,sy__$1,props__$1,map__19469,map__19469__$1,props,width,height,src,x,y,sx,sy){
return (function (_){
var self__ = this;
var ___$1 = this;
return rerenderer.component.prepare_childs(self__.childs);
});})(x__$1,y__$1,sx__$1,sy__$1,props__$1,map__19469,map__19469__$1,props,width,height,src,x,y,sx,sy))
;

rerenderer.primitives.t_rerenderer$primitives19471.prototype.rerenderer$component$IComponent$props$arity$1 = ((function (x__$1,y__$1,sx__$1,sy__$1,props__$1,map__19469,map__19469__$1,props,width,height,src,x,y,sx,sy){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.props;
});})(x__$1,y__$1,sx__$1,sy__$1,props__$1,map__19469,map__19469__$1,props,width,height,src,x,y,sx,sy))
;

rerenderer.primitives.t_rerenderer$primitives19471.prototype.rerenderer$platform$browser$core$IBrowser$ = true;

rerenderer.primitives.t_rerenderer$primitives19471.prototype.rerenderer$platform$browser$core$IBrowser$render_browser$arity$2 = ((function (x__$1,y__$1,sx__$1,sy__$1,props__$1,map__19469,map__19469__$1,props,width,height,src,x,y,sx,sy){
return (function (_,ctx){
var self__ = this;
var ___$1 = this;
var img = (rerenderer.platform.browser.utils.get_image.cljs$core$IFn$_invoke$arity$1 ? rerenderer.platform.browser.utils.get_image.cljs$core$IFn$_invoke$arity$1(self__.src) : rerenderer.platform.browser.utils.get_image.call(null,self__.src));
return ctx.drawImage(img,self__.sx,self__.sy,self__.width,self__.height,(0),(0),self__.width,self__.height);
});})(x__$1,y__$1,sx__$1,sy__$1,props__$1,map__19469,map__19469__$1,props,width,height,src,x,y,sx,sy))
;

rerenderer.primitives.t_rerenderer$primitives19471.prototype.rerenderer$platform$android$core$IAndroid$ = true;

rerenderer.primitives.t_rerenderer$primitives19471.prototype.rerenderer$platform$android$core$IAndroid$android_primitive$arity$1 = ((function (x__$1,y__$1,sx__$1,sy__$1,props__$1,map__19469,map__19469__$1,props,width,height,src,x,y,sx,sy){
return (function (_){
var self__ = this;
var ___$1 = this;
return "bundled.image";
});})(x__$1,y__$1,sx__$1,sy__$1,props__$1,map__19469,map__19469__$1,props,width,height,src,x,y,sx,sy))
;

rerenderer.primitives.t_rerenderer$primitives19471.getBasis = ((function (x__$1,y__$1,sx__$1,sy__$1,props__$1,map__19469,map__19469__$1,props,width,height,src,x,y,sx,sy){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$x,cljs.core.cst$sym$height,cljs.core.cst$sym$props,cljs.core.cst$sym$y,cljs.core.cst$sym$childs,cljs.core.cst$sym$sy,cljs.core.cst$sym$width,cljs.core.cst$sym$p__19468,cljs.core.cst$sym$src,cljs.core.cst$sym$map__19469,cljs.core.cst$sym$sx,cljs.core.cst$sym$meta19472], null);
});})(x__$1,y__$1,sx__$1,sy__$1,props__$1,map__19469,map__19469__$1,props,width,height,src,x,y,sx,sy))
;

rerenderer.primitives.t_rerenderer$primitives19471.cljs$lang$type = true;

rerenderer.primitives.t_rerenderer$primitives19471.cljs$lang$ctorStr = "rerenderer.primitives/t_rerenderer$primitives19471";

rerenderer.primitives.t_rerenderer$primitives19471.cljs$lang$ctorPrWriter = ((function (x__$1,y__$1,sx__$1,sy__$1,props__$1,map__19469,map__19469__$1,props,width,height,src,x,y,sx,sy){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write(writer__6755__auto__,"rerenderer.primitives/t_rerenderer$primitives19471");
});})(x__$1,y__$1,sx__$1,sy__$1,props__$1,map__19469,map__19469__$1,props,width,height,src,x,y,sx,sy))
;

rerenderer.primitives.__GT_t_rerenderer$primitives19471 = ((function (x__$1,y__$1,sx__$1,sy__$1,props__$1,map__19469,map__19469__$1,props,width,height,src,x,y,sx,sy){
return (function rerenderer$primitives$__GT_t_rerenderer$primitives19471(x__$2,height__$1,props__$2,y__$2,childs__$1,sy__$2,width__$1,p__19468__$1,src__$1,map__19469__$2,sx__$2,meta19472){
return (new rerenderer.primitives.t_rerenderer$primitives19471(x__$2,height__$1,props__$2,y__$2,childs__$1,sy__$2,width__$1,p__19468__$1,src__$1,map__19469__$2,sx__$2,meta19472));
});})(x__$1,y__$1,sx__$1,sy__$1,props__$1,map__19469,map__19469__$1,props,width,height,src,x,y,sx,sy))
;

}

return (new rerenderer.primitives.t_rerenderer$primitives19471(x__$1,height,props__$1,y__$1,childs,sy__$1,width,p__19468,src,map__19469__$1,sx__$1,cljs.core.PersistentArrayMap.EMPTY));
});

rerenderer.primitives.image.cljs$lang$maxFixedArity = (1);

rerenderer.primitives.image.cljs$lang$applyTo = (function (seq19466){
var G__19467 = cljs.core.first(seq19466);
var seq19466__$1 = cljs.core.next(seq19466);
return rerenderer.primitives.image.cljs$core$IFn$_invoke$arity$variadic(G__19467,seq19466__$1);
});
