// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('devtools.format');
goog.require('cljs.core');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__6811__auto__ = (((value == null))?null:value);
var m__6812__auto__ = (devtools.format._header[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return (m__6812__auto__.cljs$core$IFn$_invoke$arity$1 ? m__6812__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__6812__auto__.call(null,value));
} else {
var m__6812__auto____$1 = (devtools.format._header["_"]);
if(!((m__6812__auto____$1 == null))){
return (m__6812__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__6812__auto____$1.cljs$core$IFn$_invoke$arity$1(value) : m__6812__auto____$1.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__6811__auto__ = (((value == null))?null:value);
var m__6812__auto__ = (devtools.format._has_body[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return (m__6812__auto__.cljs$core$IFn$_invoke$arity$1 ? m__6812__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__6812__auto__.call(null,value));
} else {
var m__6812__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__6812__auto____$1 == null))){
return (m__6812__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__6812__auto____$1.cljs$core$IFn$_invoke$arity$1(value) : m__6812__auto____$1.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__6811__auto__ = (((value == null))?null:value);
var m__6812__auto__ = (devtools.format._body[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return (m__6812__auto__.cljs$core$IFn$_invoke$arity$1 ? m__6812__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__6812__auto__.call(null,value));
} else {
var m__6812__auto____$1 = (devtools.format._body["_"]);
if(!((m__6812__auto____$1 == null))){
return (m__6812__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__6812__auto____$1.cljs$core$IFn$_invoke$arity$1(value) : m__6812__auto____$1.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__12567__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__12567__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__12567__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__12567__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__12566__auto__ = temp__4657__auto____$2;
return goog.object.get(o__12566__auto__,"make_template");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__12567__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__12567__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__12567__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__12567__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__12566__auto__ = temp__4657__auto____$2;
return goog.object.get(o__12566__auto__,"make_group");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__12567__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__12567__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__12567__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__12567__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__12566__auto__ = temp__4657__auto____$2;
return goog.object.get(o__12566__auto__,"make_reference");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__12567__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__12567__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__12567__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__12567__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__12566__auto__ = temp__4657__auto____$2;
return goog.object.get(o__12566__auto__,"make_surrogate");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__12567__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__12567__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__12567__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__12567__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__12566__auto__ = temp__4657__auto____$2;
return goog.object.get(o__12566__auto__,"render_markup");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__12567__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__12567__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__12567__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__12567__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__12566__auto__ = temp__4657__auto____$2;
return goog.object.get(o__12566__auto__,"_LT_header_GT_");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__12567__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__12567__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__12567__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__12567__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__12566__auto__ = temp__4657__auto____$2;
return goog.object.get(o__12566__auto__,"_LT_standard_body_GT_");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$sym$make_DASH_template_DASH_fn], 0)))].join('')));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$sym$make_DASH_group_DASH_fn], 0)))].join('')));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$sym$make_DASH_reference_DASH_fn], 0)))].join('')));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$sym$make_DASH_surrogate_DASH_fn], 0)))].join('')));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$sym$render_DASH_markup_DASH_fn], 0)))].join('')));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$sym$_LT_header_GT__DASH_fn], 0)))].join('')));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$sym$_LT_standard_DASH_body_GT__DASH_fn], 0)))].join('')));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__7221__auto__ = [];
var len__7214__auto___12588 = arguments.length;
var i__7215__auto___12589 = (0);
while(true){
if((i__7215__auto___12589 < len__7214__auto___12588)){
args__7221__auto__.push((arguments[i__7215__auto___12589]));

var G__12590 = (i__7215__auto___12589 + (1));
i__7215__auto___12589 = G__12590;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((0) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((0)),(0))):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__7222__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq12587){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12587));
});
devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__7221__auto__ = [];
var len__7214__auto___12592 = arguments.length;
var i__7215__auto___12593 = (0);
while(true){
if((i__7215__auto___12593 < len__7214__auto___12592)){
args__7221__auto__.push((arguments[i__7215__auto___12593]));

var G__12594 = (i__7215__auto___12593 + (1));
i__7215__auto___12593 = G__12594;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((0) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((0)),(0))):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__7222__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq12591){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12591));
});
devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__7221__auto__ = [];
var len__7214__auto___12596 = arguments.length;
var i__7215__auto___12597 = (0);
while(true){
if((i__7215__auto___12597 < len__7214__auto___12596)){
args__7221__auto__.push((arguments[i__7215__auto___12597]));

var G__12598 = (i__7215__auto___12597 + (1));
i__7215__auto___12597 = G__12598;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((0) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((0)),(0))):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__7222__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq12595){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12595));
});
devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__7221__auto__ = [];
var len__7214__auto___12600 = arguments.length;
var i__7215__auto___12601 = (0);
while(true){
if((i__7215__auto___12601 < len__7214__auto___12600)){
args__7221__auto__.push((arguments[i__7215__auto___12601]));

var G__12602 = (i__7215__auto___12601 + (1));
i__7215__auto___12601 = G__12602;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((0) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((0)),(0))):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__7222__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq12599){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12599));
});
devtools.format.template = (function devtools$format$template(var_args){
var args__7221__auto__ = [];
var len__7214__auto___12604 = arguments.length;
var i__7215__auto___12605 = (0);
while(true){
if((i__7215__auto___12605 < len__7214__auto___12604)){
args__7221__auto__.push((arguments[i__7215__auto___12605]));

var G__12606 = (i__7215__auto___12605 + (1));
i__7215__auto___12605 = G__12606;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((0) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((0)),(0))):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__7222__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq12603){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12603));
});
devtools.format.group = (function devtools$format$group(var_args){
var args__7221__auto__ = [];
var len__7214__auto___12608 = arguments.length;
var i__7215__auto___12609 = (0);
while(true){
if((i__7215__auto___12609 < len__7214__auto___12608)){
args__7221__auto__.push((arguments[i__7215__auto___12609]));

var G__12610 = (i__7215__auto___12609 + (1));
i__7215__auto___12609 = G__12610;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((0) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((0)),(0))):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__7222__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq12607){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12607));
});
devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__7221__auto__ = [];
var len__7214__auto___12612 = arguments.length;
var i__7215__auto___12613 = (0);
while(true){
if((i__7215__auto___12613 < len__7214__auto___12612)){
args__7221__auto__.push((arguments[i__7215__auto___12613]));

var G__12614 = (i__7215__auto___12613 + (1));
i__7215__auto___12613 = G__12614;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((0) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((0)),(0))):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__7222__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq12611){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12611));
});
devtools.format.reference = (function devtools$format$reference(var_args){
var args__7221__auto__ = [];
var len__7214__auto___12620 = arguments.length;
var i__7215__auto___12621 = (0);
while(true){
if((i__7215__auto___12621 < len__7214__auto___12620)){
args__7221__auto__.push((arguments[i__7215__auto___12621]));

var G__12622 = (i__7215__auto___12621 + (1));
i__7215__auto___12621 = G__12622;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((1) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((1)),(0))):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7222__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__12618){
var vec__12619 = p__12618;
var state_override = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12619,(0),null);
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__12619,state_override){
return (function (p1__12615_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1__12615_SHARP_,state_override], 0));
});})(vec__12619,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq12616){
var G__12617 = cljs.core.first(seq12616);
var seq12616__$1 = cljs.core.next(seq12616);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__12617,seq12616__$1);
});
devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_();

var G__12635 = cljs.core.cst$kw$ol;
var G__12636 = cljs.core.cst$kw$standard_DASH_ol_DASH_style;
var G__12637 = (function (){var G__12638 = cljs.core.cst$kw$li;
var G__12639 = cljs.core.cst$kw$standard_DASH_li_DASH_style;
var G__12640 = (devtools.format.make_reference_fn.cljs$core$IFn$_invoke$arity$1 ? devtools.format.make_reference_fn.cljs$core$IFn$_invoke$arity$1(target) : devtools.format.make_reference_fn.call(null,target));
return (devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3 ? devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3(G__12638,G__12639,G__12640) : devtools.format.make_template_fn.call(null,G__12638,G__12639,G__12640));
})();
return (devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3 ? devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3(G__12635,G__12636,G__12637) : devtools.format.make_template_fn.call(null,G__12635,G__12636,G__12637));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__7221__auto__ = [];
var len__7214__auto___12642 = arguments.length;
var i__7215__auto___12643 = (0);
while(true){
if((i__7215__auto___12643 < len__7214__auto___12642)){
args__7221__auto__.push((arguments[i__7215__auto___12643]));

var G__12644 = (i__7215__auto___12643 + (1));
i__7215__auto___12643 = G__12644;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((0) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((0)),(0))):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__7222__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format._LT_header_GT__fn,args)], 0));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq12641){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12641));
});
devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__7221__auto__ = [];
var len__7214__auto___12647 = arguments.length;
var i__7215__auto___12648 = (0);
while(true){
if((i__7215__auto___12648 < len__7214__auto___12647)){
args__7221__auto__.push((arguments[i__7215__auto___12648]));

var G__12649 = (i__7215__auto___12648 + (1));
i__7215__auto___12648 = G__12649;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((1) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((1)),(0))):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7222__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_();

var args = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format._LT_standard_body_GT__fn,args)], 0));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq12645){
var G__12646 = cljs.core.first(seq12645);
var seq12645__$1 = cljs.core.next(seq12645);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__12646,seq12645__$1);
});
