// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('devtools.formatters.markup');
goog.require('cljs.core');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.printing');
goog.require('devtools.formatters.state');
goog.require('devtools.formatters.templating');
goog.require('devtools.munging');
devtools.formatters.markup.print_with = (function devtools$formatters$markup$print_with(var_args){
var args__7221__auto__ = [];
var len__7214__auto___15087 = arguments.length;
var i__7215__auto___15088 = (0);
while(true){
if((i__7215__auto___15088 < len__7214__auto___15087)){
args__7221__auto__.push((arguments[i__7215__auto___15088]));

var G__15089 = (i__7215__auto___15088 + (1));
i__7215__auto___15088 = G__15089;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((3) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((3)),(0))):null);
return devtools.formatters.markup.print_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7222__auto__);
});

devtools.formatters.markup.print_with.cljs$core$IFn$_invoke$arity$variadic = (function (method,value,tag,p__15081){
var vec__15082 = p__15081;
var max_level = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15082,(0),null);
var job_fn = ((function (vec__15082,max_level){
return (function (){
var G__15083 = value;
var G__15084 = tag;
var G__15085 = (devtools.formatters.markup.get_markup_db.cljs$core$IFn$_invoke$arity$0 ? devtools.formatters.markup.get_markup_db.cljs$core$IFn$_invoke$arity$0() : devtools.formatters.markup.get_markup_db.call(null));
return (method.cljs$core$IFn$_invoke$arity$3 ? method.cljs$core$IFn$_invoke$arity$3(G__15083,G__15084,G__15085) : method.call(null,G__15083,G__15084,G__15085));
});})(vec__15082,max_level))
;
if(cljs.core.some_QMARK_(max_level)){
var _STAR_print_level_STAR_15086 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (max_level + (1));

try{return job_fn();
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_15086;
}} else {
return job_fn();
}
});

devtools.formatters.markup.print_with.cljs$lang$maxFixedArity = (3);

devtools.formatters.markup.print_with.cljs$lang$applyTo = (function (seq15077){
var G__15078 = cljs.core.first(seq15077);
var seq15077__$1 = cljs.core.next(seq15077);
var G__15079 = cljs.core.first(seq15077__$1);
var seq15077__$2 = cljs.core.next(seq15077__$1);
var G__15080 = cljs.core.first(seq15077__$2);
var seq15077__$3 = cljs.core.next(seq15077__$2);
return devtools.formatters.markup.print_with.cljs$core$IFn$_invoke$arity$variadic(G__15078,G__15079,G__15080,seq15077__$3);
});
devtools.formatters.markup.print_via_writer = (function devtools$formatters$markup$print_via_writer(var_args){
var args__7221__auto__ = [];
var len__7214__auto___15095 = arguments.length;
var i__7215__auto___15096 = (0);
while(true){
if((i__7215__auto___15096 < len__7214__auto___15095)){
args__7221__auto__.push((arguments[i__7215__auto___15096]));

var G__15097 = (i__7215__auto___15096 + (1));
i__7215__auto___15096 = G__15097;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((2) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((2)),(0))):null);
return devtools.formatters.markup.print_via_writer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7222__auto__);
});

devtools.formatters.markup.print_via_writer.cljs$core$IFn$_invoke$arity$variadic = (function (value,tag,p__15093){
var vec__15094 = p__15093;
var max_level = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15094,(0),null);
return devtools.formatters.markup.print_with.cljs$core$IFn$_invoke$arity$variadic(devtools.formatters.printing.managed_print_via_writer,value,tag,cljs.core.array_seq([max_level], 0));
});

devtools.formatters.markup.print_via_writer.cljs$lang$maxFixedArity = (2);

devtools.formatters.markup.print_via_writer.cljs$lang$applyTo = (function (seq15090){
var G__15091 = cljs.core.first(seq15090);
var seq15090__$1 = cljs.core.next(seq15090);
var G__15092 = cljs.core.first(seq15090__$1);
var seq15090__$2 = cljs.core.next(seq15090__$1);
return devtools.formatters.markup.print_via_writer.cljs$core$IFn$_invoke$arity$variadic(G__15091,G__15092,seq15090__$2);
});
devtools.formatters.markup.print_via_protocol = (function devtools$formatters$markup$print_via_protocol(var_args){
var args__7221__auto__ = [];
var len__7214__auto___15103 = arguments.length;
var i__7215__auto___15104 = (0);
while(true){
if((i__7215__auto___15104 < len__7214__auto___15103)){
args__7221__auto__.push((arguments[i__7215__auto___15104]));

var G__15105 = (i__7215__auto___15104 + (1));
i__7215__auto___15104 = G__15105;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((2) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((2)),(0))):null);
return devtools.formatters.markup.print_via_protocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7222__auto__);
});

devtools.formatters.markup.print_via_protocol.cljs$core$IFn$_invoke$arity$variadic = (function (value,tag,p__15101){
var vec__15102 = p__15101;
var max_level = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15102,(0),null);
return devtools.formatters.markup.print_with.cljs$core$IFn$_invoke$arity$variadic(devtools.formatters.printing.managed_print_via_protocol,value,tag,cljs.core.array_seq([max_level], 0));
});

devtools.formatters.markup.print_via_protocol.cljs$lang$maxFixedArity = (2);

devtools.formatters.markup.print_via_protocol.cljs$lang$applyTo = (function (seq15098){
var G__15099 = cljs.core.first(seq15098);
var seq15098__$1 = cljs.core.next(seq15098);
var G__15100 = cljs.core.first(seq15098__$1);
var seq15098__$2 = cljs.core.next(seq15098__$1);
return devtools.formatters.markup.print_via_protocol.cljs$core$IFn$_invoke$arity$variadic(G__15099,G__15100,seq15098__$2);
});
devtools.formatters.markup._LT_expandable_GT_ = (function devtools$formatters$markup$_LT_expandable_GT_(var_args){
var args__7221__auto__ = [];
var len__7214__auto___15107 = arguments.length;
var i__7215__auto___15108 = (0);
while(true){
if((i__7215__auto___15108 < len__7214__auto___15107)){
args__7221__auto__.push((arguments[i__7215__auto___15108]));

var G__15109 = (i__7215__auto___15108 + (1));
i__7215__auto___15108 = G__15109;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((0) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((0)),(0))):null);
return devtools.formatters.markup._LT_expandable_GT_.cljs$core$IFn$_invoke$arity$variadic(argseq__7222__auto__);
});

devtools.formatters.markup._LT_expandable_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (children){
var inner_markup = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$expandable_DASH_inner_DASH_tag], null),children);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$expandable_DASH_tag,cljs.core.cst$kw$expandable_DASH_symbol,inner_markup], null);
});

devtools.formatters.markup._LT_expandable_GT_.cljs$lang$maxFixedArity = (0);

devtools.formatters.markup._LT_expandable_GT_.cljs$lang$applyTo = (function (seq15106){
return devtools.formatters.markup._LT_expandable_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15106));
});
devtools.formatters.markup._LT_raw_surrogate_GT_ = (function devtools$formatters$markup$_LT_raw_surrogate_GT_(var_args){
var args__7221__auto__ = [];
var len__7214__auto___15111 = arguments.length;
var i__7215__auto___15112 = (0);
while(true){
if((i__7215__auto___15112 < len__7214__auto___15111)){
args__7221__auto__.push((arguments[i__7215__auto___15112]));

var G__15113 = (i__7215__auto___15112 + (1));
i__7215__auto___15112 = G__15113;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((0) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((0)),(0))):null);
return devtools.formatters.markup._LT_raw_surrogate_GT_.cljs$core$IFn$_invoke$arity$variadic(argseq__7222__auto__);
});

devtools.formatters.markup._LT_raw_surrogate_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["surrogate"], null),args);
});

devtools.formatters.markup._LT_raw_surrogate_GT_.cljs$lang$maxFixedArity = (0);

devtools.formatters.markup._LT_raw_surrogate_GT_.cljs$lang$applyTo = (function (seq15110){
return devtools.formatters.markup._LT_raw_surrogate_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15110));
});
devtools.formatters.markup._LT_surrogate_GT_ = (function devtools$formatters$markup$_LT_surrogate_GT_(var_args){
var args__7221__auto__ = [];
var len__7214__auto___15117 = arguments.length;
var i__7215__auto___15118 = (0);
while(true){
if((i__7215__auto___15118 < len__7214__auto___15117)){
args__7221__auto__.push((arguments[i__7215__auto___15118]));

var G__15119 = (i__7215__auto___15118 + (1));
i__7215__auto___15118 = G__15119;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((0) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((0)),(0))):null);
return devtools.formatters.markup._LT_surrogate_GT_.cljs$core$IFn$_invoke$arity$variadic(argseq__7222__auto__);
});

devtools.formatters.markup._LT_surrogate_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (p__15115){
var vec__15116 = p__15115;
var object = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15116,(0),null);
var header = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15116,(1),null);
var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15116,(2),null);
var start_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15116,(3),null);
var header__$1 = ((cljs.core.some_QMARK_(body))?devtools.formatters.markup._LT_expandable_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([header], 0)):header);
return devtools.formatters.markup._LT_raw_surrogate_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([object,header__$1,body,start_index], 0));
});

devtools.formatters.markup._LT_surrogate_GT_.cljs$lang$maxFixedArity = (0);

devtools.formatters.markup._LT_surrogate_GT_.cljs$lang$applyTo = (function (seq15114){
return devtools.formatters.markup._LT_surrogate_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15114));
});
devtools.formatters.markup._LT_reference_GT_ = (function devtools$formatters$markup$_LT_reference_GT_(var_args){
var args__7221__auto__ = [];
var len__7214__auto___15121 = arguments.length;
var i__7215__auto___15122 = (0);
while(true){
if((i__7215__auto___15122 < len__7214__auto___15121)){
args__7221__auto__.push((arguments[i__7215__auto___15122]));

var G__15123 = (i__7215__auto___15122 + (1));
i__7215__auto___15122 = G__15123;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((0) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((0)),(0))):null);
return devtools.formatters.markup._LT_reference_GT_.cljs$core$IFn$_invoke$arity$variadic(argseq__7222__auto__);
});

devtools.formatters.markup._LT_reference_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["reference"], null),args);
});

devtools.formatters.markup._LT_reference_GT_.cljs$lang$maxFixedArity = (0);

devtools.formatters.markup._LT_reference_GT_.cljs$lang$applyTo = (function (seq15120){
return devtools.formatters.markup._LT_reference_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15120));
});
devtools.formatters.markup._LT_reference_surrogate_GT_ = (function devtools$formatters$markup$_LT_reference_surrogate_GT_(var_args){
var args__7221__auto__ = [];
var len__7214__auto___15125 = arguments.length;
var i__7215__auto___15126 = (0);
while(true){
if((i__7215__auto___15126 < len__7214__auto___15125)){
args__7221__auto__.push((arguments[i__7215__auto___15126]));

var G__15127 = (i__7215__auto___15126 + (1));
i__7215__auto___15126 = G__15127;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((0) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((0)),(0))):null);
return devtools.formatters.markup._LT_reference_surrogate_GT_.cljs$core$IFn$_invoke$arity$variadic(argseq__7222__auto__);
});

devtools.formatters.markup._LT_reference_surrogate_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return devtools.formatters.markup._LT_reference_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.formatters.markup._LT_surrogate_GT_,args)], 0));
});

devtools.formatters.markup._LT_reference_surrogate_GT_.cljs$lang$maxFixedArity = (0);

devtools.formatters.markup._LT_reference_surrogate_GT_.cljs$lang$applyTo = (function (seq15124){
return devtools.formatters.markup._LT_reference_surrogate_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15124));
});
devtools.formatters.markup._LT_circular_reference_GT_ = (function devtools$formatters$markup$_LT_circular_reference_GT_(var_args){
var args__7221__auto__ = [];
var len__7214__auto___15129 = arguments.length;
var i__7215__auto___15130 = (0);
while(true){
if((i__7215__auto___15130 < len__7214__auto___15129)){
args__7221__auto__.push((arguments[i__7215__auto___15130]));

var G__15131 = (i__7215__auto___15130 + (1));
i__7215__auto___15130 = G__15131;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((0) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((0)),(0))):null);
return devtools.formatters.markup._LT_circular_reference_GT_.cljs$core$IFn$_invoke$arity$variadic(argseq__7222__auto__);
});

devtools.formatters.markup._LT_circular_reference_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (children){
return devtools.formatters.markup._LT_reference_surrogate_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$circular_DASH_reference_DASH_tag,cljs.core.cst$kw$circular_DASH_ref_DASH_icon], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$circular_DASH_reference_DASH_body_DASH_tag], null),children)], 0));
});

devtools.formatters.markup._LT_circular_reference_GT_.cljs$lang$maxFixedArity = (0);

devtools.formatters.markup._LT_circular_reference_GT_.cljs$lang$applyTo = (function (seq15128){
return devtools.formatters.markup._LT_circular_reference_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15128));
});
devtools.formatters.markup._LT_native_reference_GT_ = (function devtools$formatters$markup$_LT_native_reference_GT_(object){
var reference = devtools.formatters.markup._LT_reference_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([object,(function (p1__15132_SHARP_){
return devtools.formatters.state.set_prevent_recursion(p1__15132_SHARP_,true);
})], 0));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$native_DASH_reference_DASH_wrapper_DASH_tag,cljs.core.cst$kw$native_DASH_reference_DASH_background,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$native_DASH_reference_DASH_tag,reference], null)], null);
});
devtools.formatters.markup._LT_header_expander_GT_ = (function devtools$formatters$markup$_LT_header_expander_GT_(object){
return devtools.formatters.markup._LT_reference_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([devtools.formatters.markup._LT_raw_surrogate_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([object,cljs.core.cst$kw$header_DASH_expander_DASH_symbol,cljs.core.cst$kw$target], 0)),devtools.formatters.state.reset_depth_limits], 0));
});
devtools.formatters.markup._LT_cljs_land_GT_ = (function devtools$formatters$markup$_LT_cljs_land_GT_(var_args){
var args__7221__auto__ = [];
var len__7214__auto___15134 = arguments.length;
var i__7215__auto___15135 = (0);
while(true){
if((i__7215__auto___15135 < len__7214__auto___15134)){
args__7221__auto__.push((arguments[i__7215__auto___15135]));

var G__15136 = (i__7215__auto___15135 + (1));
i__7215__auto___15135 = G__15136;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((0) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((0)),(0))):null);
return devtools.formatters.markup._LT_cljs_land_GT_.cljs$core$IFn$_invoke$arity$variadic(argseq__7222__auto__);
});

devtools.formatters.markup._LT_cljs_land_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (children){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs_DASH_land_DASH_tag], null),children);
});

devtools.formatters.markup._LT_cljs_land_GT_.cljs$lang$maxFixedArity = (0);

devtools.formatters.markup._LT_cljs_land_GT_.cljs$lang$applyTo = (function (seq15133){
return devtools.formatters.markup._LT_cljs_land_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15133));
});
devtools.formatters.markup._LT_nil_GT_ = (function devtools$formatters$markup$_LT_nil_GT_(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nil_DASH_tag,cljs.core.cst$kw$nil_DASH_label], null);
});
devtools.formatters.markup._LT_bool_GT_ = (function devtools$formatters$markup$_LT_bool_GT_(bool){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bool_DASH_tag,[cljs.core.str(bool)].join('')], null);
});
devtools.formatters.markup._LT_keyword_GT_ = (function devtools$formatters$markup$_LT_keyword_GT_(keyword){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$keyword_DASH_tag,[cljs.core.str(keyword)].join('')], null);
});
devtools.formatters.markup._LT_symbol_GT_ = (function devtools$formatters$markup$_LT_symbol_GT_(symbol){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$symbol_DASH_tag,[cljs.core.str(symbol)].join('')], null);
});
devtools.formatters.markup._LT_number_GT_ = (function devtools$formatters$markup$_LT_number_GT_(number){
if(cljs.core.integer_QMARK_(number)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$integer_DASH_tag,number], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$float_DASH_tag,number], null);
}
});
devtools.formatters.markup._LT_string_GT_ = (function devtools$formatters$markup$_LT_string_GT_(string){
var dq = devtools.formatters.helpers.pref(cljs.core.cst$kw$dq);
var re_nl = (new RegExp("\n","g"));
var nl_marker = devtools.formatters.helpers.pref(cljs.core.cst$kw$new_DASH_line_DASH_string_DASH_replacer);
var inline_string = string.replace(re_nl,nl_marker);
var max_inline_string_size = (devtools.formatters.helpers.pref(cljs.core.cst$kw$string_DASH_prefix_DASH_limit) + devtools.formatters.helpers.pref(cljs.core.cst$kw$string_DASH_postfix_DASH_limit));
var quote_string = ((function (dq,re_nl,nl_marker,inline_string,max_inline_string_size){
return (function (s){
return [cljs.core.str(dq),cljs.core.str(s),cljs.core.str(dq)].join('');
});})(dq,re_nl,nl_marker,inline_string,max_inline_string_size))
;
var should_abbreviate_QMARK_ = (cljs.core.count(inline_string) > max_inline_string_size);
if(should_abbreviate_QMARK_){
var abbreviated_string = devtools.formatters.helpers.abbreviate_long_string(inline_string,devtools.formatters.helpers.pref(cljs.core.cst$kw$string_DASH_abbreviation_DASH_marker),devtools.formatters.helpers.pref(cljs.core.cst$kw$string_DASH_prefix_DASH_limit),devtools.formatters.helpers.pref(cljs.core.cst$kw$string_DASH_postfix_DASH_limit));
var abbreviated_string_markup = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$string_DASH_tag,quote_string(abbreviated_string)], null);
var string_with_nl_markers = string.replace(re_nl,[cljs.core.str(nl_marker),cljs.core.str("\n")].join(''));
var details_markup = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$expanded_DASH_string_DASH_tag,string_with_nl_markers], null);
return devtools.formatters.markup._LT_reference_surrogate_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([string,abbreviated_string_markup,details_markup], 0));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$string_DASH_tag,quote_string(inline_string)], null);
}
});
devtools.formatters.markup._LT_preview_GT_ = (function devtools$formatters$markup$_LT_preview_GT_(value){
return devtools.formatters.markup.print_via_writer.cljs$core$IFn$_invoke$arity$variadic(value,cljs.core.cst$kw$header_DASH_tag,cljs.core.array_seq([devtools.formatters.helpers.pref(cljs.core.cst$kw$max_DASH_print_DASH_level)], 0));
});
devtools.formatters.markup._LT_body_GT_ = (function devtools$formatters$markup$_LT_body_GT_(markup){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$body_DASH_tag,markup], null);
});
devtools.formatters.markup._LT_aligned_body_GT_ = (function devtools$formatters$markup$_LT_aligned_body_GT_(markups_lists){
var prepend_li_tag = (function (line){
if(cljs.core.truth_(line)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$aligned_DASH_li_DASH_tag], null),line);
} else {
return null;
}
});
var aligned_lines = cljs.core.keep.cljs$core$IFn$_invoke$arity$2(prepend_li_tag,markups_lists);
return devtools.formatters.markup._LT_body_GT_(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$standard_DASH_ol_DASH_no_DASH_margin_DASH_tag], null),aligned_lines));
});
devtools.formatters.markup._LT_standard_body_GT_ = (function devtools$formatters$markup$_LT_standard_body_GT_(var_args){
var args__7221__auto__ = [];
var len__7214__auto___15141 = arguments.length;
var i__7215__auto___15142 = (0);
while(true){
if((i__7215__auto___15142 < len__7214__auto___15141)){
args__7221__auto__.push((arguments[i__7215__auto___15142]));

var G__15143 = (i__7215__auto___15142 + (1));
i__7215__auto___15142 = G__15143;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((1) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((1)),(0))):null);
return devtools.formatters.markup._LT_standard_body_GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7222__auto__);
});

devtools.formatters.markup._LT_standard_body_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (markups_lists,p__15139){
var vec__15140 = p__15139;
var no_margin_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15140,(0),null);
var ol_tag = (cljs.core.truth_(no_margin_QMARK_)?cljs.core.cst$kw$standard_DASH_ol_DASH_no_DASH_margin_DASH_tag:cljs.core.cst$kw$standard_DASH_ol_DASH_tag);
var li_tag = (cljs.core.truth_(no_margin_QMARK_)?cljs.core.cst$kw$standard_DASH_li_DASH_no_DASH_margin_DASH_tag:cljs.core.cst$kw$standard_DASH_li_DASH_tag);
var prepend_li_tag = ((function (ol_tag,li_tag,vec__15140,no_margin_QMARK_){
return (function (line){
if(cljs.core.truth_(line)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [li_tag], null),line);
} else {
return null;
}
});})(ol_tag,li_tag,vec__15140,no_margin_QMARK_))
;
var lines_markups = cljs.core.keep.cljs$core$IFn$_invoke$arity$2(prepend_li_tag,markups_lists);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ol_tag], null),lines_markups);
});

devtools.formatters.markup._LT_standard_body_GT_.cljs$lang$maxFixedArity = (1);

devtools.formatters.markup._LT_standard_body_GT_.cljs$lang$applyTo = (function (seq15137){
var G__15138 = cljs.core.first(seq15137);
var seq15137__$1 = cljs.core.next(seq15137);
return devtools.formatters.markup._LT_standard_body_GT_.cljs$core$IFn$_invoke$arity$variadic(G__15138,seq15137__$1);
});
devtools.formatters.markup._LT_standard_body_reference_GT_ = (function devtools$formatters$markup$_LT_standard_body_reference_GT_(o){
return devtools.formatters.markup._LT_standard_body_GT_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [devtools.formatters.markup._LT_reference_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([o], 0))], null)], null));
});
devtools.formatters.markup._LT_index_GT_ = (function devtools$formatters$markup$_LT_index_GT_(value){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$index_DASH_tag,value,cljs.core.cst$kw$line_DASH_index_DASH_separator], null);
});
devtools.formatters.markup.body_line = (function devtools$formatters$markup$body_line(index,value){
var index_markup = devtools.formatters.markup._LT_index_GT_(index);
var value_markup = devtools.formatters.markup.print_via_writer.cljs$core$IFn$_invoke$arity$variadic(value,cljs.core.cst$kw$item_DASH_tag,cljs.core.array_seq([devtools.formatters.helpers.pref(cljs.core.cst$kw$body_DASH_line_DASH_max_DASH_print_DASH_level)], 0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index_markup,value_markup], null);
});
devtools.formatters.markup.prepare_body_lines = (function devtools$formatters$markup$prepare_body_lines(data,starting_index){
var work = data;
var index = starting_index;
var lines = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(work)){
return lines;
} else {
var G__15144 = cljs.core.rest(work);
var G__15145 = (index + (1));
var G__15146 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(lines,devtools.formatters.markup.body_line(index,cljs.core.first(work)));
work = G__15144;
index = G__15145;
lines = G__15146;
continue;
}
break;
}
});
devtools.formatters.markup.body_lines = (function devtools$formatters$markup$body_lines(value,starting_index){
var seq = cljs.core.seq(value);
var max_number_body_items = devtools.formatters.helpers.pref(cljs.core.cst$kw$max_DASH_number_DASH_body_DASH_items);
var chunk = cljs.core.take.cljs$core$IFn$_invoke$arity$2(max_number_body_items,seq);
var rest = cljs.core.drop.cljs$core$IFn$_invoke$arity$2(max_number_body_items,seq);
var lines = devtools.formatters.markup.prepare_body_lines(chunk,starting_index);
var continue_QMARK_ = !(cljs.core.empty_QMARK_(cljs.core.take.cljs$core$IFn$_invoke$arity$2((1),rest)));
if(!(continue_QMARK_)){
return lines;
} else {
var more_label_markup = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$body_DASH_items_DASH_more_DASH_tag,cljs.core.cst$kw$body_DASH_items_DASH_more_DASH_label], null);
var start_index = (starting_index + max_number_body_items);
var more_markup = devtools.formatters.markup._LT_reference_surrogate_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([rest,more_label_markup,cljs.core.cst$kw$target,start_index], 0));
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(lines,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [more_markup], null));
}
});
devtools.formatters.markup._LT_details_GT_ = (function devtools$formatters$markup$_LT_details_GT_(value,starting_index){
var has_continuation_QMARK_ = (starting_index > (0));
var body_markup = devtools.formatters.markup._LT_standard_body_GT_.cljs$core$IFn$_invoke$arity$variadic(devtools.formatters.markup.body_lines(value,starting_index),cljs.core.array_seq([has_continuation_QMARK_], 0));
if(has_continuation_QMARK_){
return body_markup;
} else {
return devtools.formatters.markup._LT_body_GT_(body_markup);
}
});
devtools.formatters.markup._LT_list_details_GT_ = (function devtools$formatters$markup$_LT_list_details_GT_(items,_opts){
return devtools.formatters.markup._LT_aligned_body_GT_(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.list,items));
});
devtools.formatters.markup._LT_list_GT_ = (function devtools$formatters$markup$_LT_list_GT_(var_args){
var args__7221__auto__ = [];
var len__7214__auto___15152 = arguments.length;
var i__7215__auto___15153 = (0);
while(true){
if((i__7215__auto___15153 < len__7214__auto___15152)){
args__7221__auto__.push((arguments[i__7215__auto___15153]));

var G__15154 = (i__7215__auto___15153 + (1));
i__7215__auto___15153 = G__15154;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((2) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((2)),(0))):null);
return devtools.formatters.markup._LT_list_GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7222__auto__);
});

devtools.formatters.markup._LT_list_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (items,max_count,p__15150){
var vec__15151 = p__15150;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15151,(0),null);
var items_markups = cljs.core.take.cljs$core$IFn$_invoke$arity$2(max_count,items);
var more_count = (cljs.core.count(items) - max_count);
var more_QMARK_ = (more_count > (0));
var separator = (function (){var or__6156__auto__ = cljs.core.cst$kw$separator.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return cljs.core.cst$kw$list_DASH_separator;
}
})();
var more_symbol = ((more_QMARK_)?(function (){var temp__4655__auto__ = cljs.core.cst$kw$more_DASH_symbol.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4655__auto__)){
var more_symbol = temp__4655__auto__;
if(cljs.core.fn_QMARK_(more_symbol)){
return (more_symbol.cljs$core$IFn$_invoke$arity$1 ? more_symbol.cljs$core$IFn$_invoke$arity$1(more_count) : more_symbol.call(null,more_count));
} else {
return more_symbol;
}
} else {
return devtools.formatters.helpers.get_more_marker(more_count);
}
})():null);
var preview_markup = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__6156__auto__ = cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return cljs.core.cst$kw$list_DASH_tag;
}
})(),(function (){var or__6156__auto__ = cljs.core.cst$kw$open_DASH_symbol.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return cljs.core.cst$kw$list_DASH_open_DASH_symbol;
}
})()], null),cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(separator,items_markups),cljs.core.array_seq([((more_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [separator,more_symbol], null):null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__6156__auto__ = cljs.core.cst$kw$close_DASH_symbol.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return cljs.core.cst$kw$list_DASH_close_DASH_symbol;
}
})()], null)], 0));
if(more_QMARK_){
var details_markup = cljs.core.cst$kw$details.cljs$core$IFn$_invoke$arity$1(opts);
var default_details_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(devtools.formatters.markup._LT_list_details_GT_,items,opts);
return devtools.formatters.markup._LT_reference_surrogate_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null,preview_markup,(function (){var or__6156__auto__ = details_markup;
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return default_details_fn;
}
})()], 0));
} else {
return preview_markup;
}
});

devtools.formatters.markup._LT_list_GT_.cljs$lang$maxFixedArity = (2);

devtools.formatters.markup._LT_list_GT_.cljs$lang$applyTo = (function (seq15147){
var G__15148 = cljs.core.first(seq15147);
var seq15147__$1 = cljs.core.next(seq15147);
var G__15149 = cljs.core.first(seq15147__$1);
var seq15147__$2 = cljs.core.next(seq15147__$1);
return devtools.formatters.markup._LT_list_GT_.cljs$core$IFn$_invoke$arity$variadic(G__15148,G__15149,seq15147__$2);
});
devtools.formatters.markup._LT_meta_GT_ = (function devtools$formatters$markup$_LT_meta_GT_(metadata){
var body = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$meta_DASH_body_DASH_tag,devtools.formatters.markup._LT_preview_GT_(metadata)], null);
var header = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$meta_DASH_header_DASH_tag,"meta"], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$meta_DASH_reference_DASH_tag,devtools.formatters.markup._LT_reference_surrogate_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([metadata,header,body], 0))], null);
});
devtools.formatters.markup._LT_meta_wrapper_GT_ = (function devtools$formatters$markup$_LT_meta_wrapper_GT_(var_args){
var args__7221__auto__ = [];
var len__7214__auto___15157 = arguments.length;
var i__7215__auto___15158 = (0);
while(true){
if((i__7215__auto___15158 < len__7214__auto___15157)){
args__7221__auto__.push((arguments[i__7215__auto___15158]));

var G__15159 = (i__7215__auto___15158 + (1));
i__7215__auto___15158 = G__15159;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((1) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((1)),(0))):null);
return devtools.formatters.markup._LT_meta_wrapper_GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7222__auto__);
});

devtools.formatters.markup._LT_meta_wrapper_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (metadata,children){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$meta_DASH_wrapper_DASH_tag], null),children,cljs.core.array_seq([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [devtools.formatters.markup._LT_meta_GT_(metadata)], null)], 0));
});

devtools.formatters.markup._LT_meta_wrapper_GT_.cljs$lang$maxFixedArity = (1);

devtools.formatters.markup._LT_meta_wrapper_GT_.cljs$lang$applyTo = (function (seq15155){
var G__15156 = cljs.core.first(seq15155);
var seq15155__$1 = cljs.core.next(seq15155);
return devtools.formatters.markup._LT_meta_wrapper_GT_.cljs$core$IFn$_invoke$arity$variadic(G__15156,seq15155__$1);
});
devtools.formatters.markup._LT_function_details_GT_ = (function devtools$formatters$markup$_LT_function_details_GT_(fn_obj,ns,_name,arities,prefix){
if(cljs.core.fn_QMARK_(fn_obj)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$fn_QMARK_,cljs.core.cst$sym$fn_DASH_obj)], 0)))].join('')));
}

var arities__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(devtools.formatters.helpers.wrap_arity,arities);
var make_arity_markup_list = ((function (arities__$1){
return (function (arity){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn_DASH_multi_DASH_arity_DASH_args_DASH_indent_DASH_tag,prefix], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn_DASH_args_DASH_tag,arity], null)], null);
});})(arities__$1))
;
var arities_markupts_lists = (((cljs.core.count(arities__$1) > (1)))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(make_arity_markup_list,arities__$1):null);
var ns_markups_list = ((!(cljs.core.empty_QMARK_(ns)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ns_DASH_icon,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn_DASH_ns_DASH_name_DASH_tag,ns], null)], null):null);
var native_markups_list = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$native_DASH_icon,devtools.formatters.markup._LT_native_reference_GT_(fn_obj)], null);
return devtools.formatters.markup._LT_aligned_body_GT_(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(arities_markupts_lists,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns_markups_list,native_markups_list], null)));
});
devtools.formatters.markup._LT_arities_GT_ = (function devtools$formatters$markup$_LT_arities_GT_(arities){
var multi_arity_QMARK_ = (cljs.core.count(arities) > (1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn_DASH_args_DASH_tag,devtools.formatters.helpers.wrap_arity(((multi_arity_QMARK_)?devtools.formatters.helpers.pref(cljs.core.cst$kw$multi_DASH_arity_DASH_symbol):cljs.core.first(arities)))], null);
});
devtools.formatters.markup._LT_function_GT_ = (function devtools$formatters$markup$_LT_function_GT_(fn_obj){
if(cljs.core.fn_QMARK_(fn_obj)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$fn_QMARK_,cljs.core.cst$sym$fn_DASH_obj)], 0)))].join('')));
}

var vec__15161 = devtools.munging.parse_fn_info(fn_obj);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15161,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15161,(1),null);
var lambda_QMARK_ = cljs.core.empty_QMARK_(name);
var spacer_symbol = devtools.formatters.helpers.pref(cljs.core.cst$kw$spacer);
var rest_symbol = devtools.formatters.helpers.pref(cljs.core.cst$kw$rest_DASH_symbol);
var multi_arity_symbol = devtools.formatters.helpers.pref(cljs.core.cst$kw$multi_DASH_arity_DASH_symbol);
var arities = devtools.munging.extract_arities(fn_obj,true,spacer_symbol,multi_arity_symbol,rest_symbol);
var arities_markup = devtools.formatters.markup._LT_arities_GT_(arities);
var name_markup = ((!(lambda_QMARK_))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn_DASH_name_DASH_tag,name], null):null);
var icon_markup = ((lambda_QMARK_)?cljs.core.cst$kw$lambda_DASH_icon:cljs.core.cst$kw$fn_DASH_icon);
var prefix_markup = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn_DASH_prefix_DASH_tag,icon_markup,name_markup], null);
var preview_markup = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn_DASH_header_DASH_tag,prefix_markup,arities_markup], null);
var details_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(devtools.formatters.markup._LT_function_details_GT_,fn_obj,ns,name,cljs.core.array_seq([arities,prefix_markup], 0));
return devtools.formatters.markup._LT_reference_surrogate_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([fn_obj,preview_markup,details_fn], 0));
});
devtools.formatters.markup._LT_type_basis_item_GT_ = (function devtools$formatters$markup$_LT_type_basis_item_GT_(basis_item){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_basis_DASH_item_DASH_tag,cljs.core.name(basis_item)], null);
});
devtools.formatters.markup._LT_type_basis_GT_ = (function devtools$formatters$markup$_LT_type_basis_GT_(basis){
var item_markups = cljs.core.map.cljs$core$IFn$_invoke$arity$2(devtools.formatters.markup._LT_type_basis_item_GT_,basis);
var children_markups = cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_basis_DASH_item_DASH_separator,item_markups);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_basis_DASH_tag], null),children_markups);
});
devtools.formatters.markup._LT_type_details_GT_ = (function devtools$formatters$markup$_LT_type_details_GT_(constructor_fn,ns,_name,basis){
var ns_markup = ((!(cljs.core.empty_QMARK_(ns)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ns_DASH_icon,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn_DASH_ns_DASH_name_DASH_tag,ns], null)], null):null);
var basis_markup = ((cljs.core.empty_QMARK_(basis))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$empty_DASH_basis_DASH_symbol], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$basis_DASH_icon,devtools.formatters.markup._LT_type_basis_GT_(basis)], null));
var native_markup = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$native_DASH_icon,devtools.formatters.markup._LT_native_reference_GT_(constructor_fn)], null);
return devtools.formatters.markup._LT_aligned_body_GT_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [basis_markup,ns_markup,native_markup], null));
});
devtools.formatters.markup._LT_type_GT_ = (function devtools$formatters$markup$_LT_type_GT_(var_args){
var args__7221__auto__ = [];
var len__7214__auto___15167 = arguments.length;
var i__7215__auto___15168 = (0);
while(true){
if((i__7215__auto___15168 < len__7214__auto___15167)){
args__7221__auto__.push((arguments[i__7215__auto___15168]));

var G__15169 = (i__7215__auto___15168 + (1));
i__7215__auto___15168 = G__15169;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((1) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((1)),(0))):null);
return devtools.formatters.markup._LT_type_GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7222__auto__);
});

devtools.formatters.markup._LT_type_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (constructor_fn,p__15164){
var vec__15165 = p__15164;
var header_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15165,(0),null);
var vec__15166 = devtools.munging.parse_constructor_info(constructor_fn);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15166,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15166,(1),null);
var basis = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15166,(2),null);
var name_markup = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_name_DASH_tag,name], null);
var preview_markup = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__6156__auto__ = header_tag;
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return cljs.core.cst$kw$type_DASH_header_DASH_tag;
}
})(),cljs.core.cst$kw$type_DASH_symbol,name_markup], null);
var details_markup_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(devtools.formatters.markup._LT_type_details_GT_,constructor_fn,ns,name,cljs.core.array_seq([basis], 0));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_wrapper_DASH_tag,cljs.core.cst$kw$type_DASH_header_DASH_background,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_ref_DASH_tag,devtools.formatters.markup._LT_reference_surrogate_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([constructor_fn,preview_markup,details_markup_fn], 0))], null)], null);
});

devtools.formatters.markup._LT_type_GT_.cljs$lang$maxFixedArity = (1);

devtools.formatters.markup._LT_type_GT_.cljs$lang$applyTo = (function (seq15162){
var G__15163 = cljs.core.first(seq15162);
var seq15162__$1 = cljs.core.next(seq15162);
return devtools.formatters.markup._LT_type_GT_.cljs$core$IFn$_invoke$arity$variadic(G__15163,seq15162__$1);
});
devtools.formatters.markup._LT_standalone_type_GT_ = (function devtools$formatters$markup$_LT_standalone_type_GT_(var_args){
var args__7221__auto__ = [];
var len__7214__auto___15174 = arguments.length;
var i__7215__auto___15175 = (0);
while(true){
if((i__7215__auto___15175 < len__7214__auto___15174)){
args__7221__auto__.push((arguments[i__7215__auto___15175]));

var G__15176 = (i__7215__auto___15175 + (1));
i__7215__auto___15175 = G__15176;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((1) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((1)),(0))):null);
return devtools.formatters.markup._LT_standalone_type_GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7222__auto__);
});

devtools.formatters.markup._LT_standalone_type_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (constructor_fn,p__15172){
var vec__15173 = p__15172;
var header_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15173,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$standalone_DASH_type_DASH_tag,devtools.formatters.markup._LT_type_GT_.cljs$core$IFn$_invoke$arity$variadic(constructor_fn,cljs.core.array_seq([header_tag], 0))], null);
});

devtools.formatters.markup._LT_standalone_type_GT_.cljs$lang$maxFixedArity = (1);

devtools.formatters.markup._LT_standalone_type_GT_.cljs$lang$applyTo = (function (seq15170){
var G__15171 = cljs.core.first(seq15170);
var seq15170__$1 = cljs.core.next(seq15170);
return devtools.formatters.markup._LT_standalone_type_GT_.cljs$core$IFn$_invoke$arity$variadic(G__15171,seq15170__$1);
});
devtools.formatters.markup._LT_protocol_method_arity_GT_ = (function devtools$formatters$markup$_LT_protocol_method_arity_GT_(arity_fn){
return devtools.formatters.markup._LT_reference_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([arity_fn], 0));
});
devtools.formatters.markup._LT_protocol_method_arities_details_GT_ = (function devtools$formatters$markup$_LT_protocol_method_arities_details_GT_(fns){
return devtools.formatters.markup._LT_aligned_body_GT_(cljs.core.map.cljs$core$IFn$_invoke$arity$2(devtools.formatters.markup._LT_protocol_method_arity_GT_,fns));
});
devtools.formatters.markup._LT_protocol_method_arities_GT_ = (function devtools$formatters$markup$_LT_protocol_method_arities_GT_(var_args){
var args__7221__auto__ = [];
var len__7214__auto___15181 = arguments.length;
var i__7215__auto___15182 = (0);
while(true){
if((i__7215__auto___15182 < len__7214__auto___15181)){
args__7221__auto__.push((arguments[i__7215__auto___15182]));

var G__15183 = (i__7215__auto___15182 + (1));
i__7215__auto___15182 = G__15183;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((1) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((1)),(0))):null);
return devtools.formatters.markup._LT_protocol_method_arities_GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7222__auto__);
});

devtools.formatters.markup._LT_protocol_method_arities_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (fns,p__15179){
var vec__15180 = p__15179;
var max_fns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15180,(0),null);
var max_fns__$1 = (function (){var or__6156__auto__ = max_fns;
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return devtools.formatters.helpers.pref(cljs.core.cst$kw$max_DASH_protocol_DASH_method_DASH_arities_DASH_list);
}
})();
var more_QMARK_ = (cljs.core.count(fns) > max_fns__$1);
var aritites_markups = cljs.core.map.cljs$core$IFn$_invoke$arity$2(devtools.formatters.markup._LT_protocol_method_arity_GT_,cljs.core.take.cljs$core$IFn$_invoke$arity$2(max_fns__$1,fns));
var preview_markup = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$protocol_DASH_method_DASH_arities_DASH_header_DASH_tag,cljs.core.cst$kw$protocol_DASH_method_DASH_arities_DASH_header_DASH_open_DASH_symbol], null),cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$protocol_DASH_method_DASH_arities_DASH_list_DASH_header_DASH_separator,aritites_markups),cljs.core.array_seq([((more_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$protocol_DASH_method_DASH_arities_DASH_more_DASH_symbol], null):null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$protocol_DASH_method_DASH_arities_DASH_header_DASH_close_DASH_symbol], null)], 0));
if(more_QMARK_){
var details_markup_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(devtools.formatters.markup._LT_protocol_method_arities_details_GT_,fns);
return devtools.formatters.markup._LT_reference_surrogate_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null,preview_markup,details_markup_fn], 0));
} else {
return preview_markup;
}
});

devtools.formatters.markup._LT_protocol_method_arities_GT_.cljs$lang$maxFixedArity = (1);

devtools.formatters.markup._LT_protocol_method_arities_GT_.cljs$lang$applyTo = (function (seq15177){
var G__15178 = cljs.core.first(seq15177);
var seq15177__$1 = cljs.core.next(seq15177);
return devtools.formatters.markup._LT_protocol_method_arities_GT_.cljs$core$IFn$_invoke$arity$variadic(G__15178,seq15177__$1);
});
devtools.formatters.markup._LT_protocol_method_GT_ = (function devtools$formatters$markup$_LT_protocol_method_GT_(name,arities){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$protocol_DASH_method_DASH_tag,cljs.core.cst$kw$method_DASH_icon,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$protocol_DASH_method_DASH_name_DASH_tag,name], null),devtools.formatters.markup._LT_protocol_method_arities_GT_(arities)], null);
});
devtools.formatters.markup._LT_protocol_details_GT_ = (function devtools$formatters$markup$_LT_protocol_details_GT_(obj,ns,_name,selector,_fast_QMARK_){
var protocol_obj = devtools.munging.get_protocol_object(selector);
var ns_markups_list = ((!(cljs.core.empty_QMARK_(ns)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ns_DASH_icon,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$protocol_DASH_ns_DASH_name_DASH_tag,ns], null)], null):null);
var native_markups_list = ((cljs.core.some_QMARK_(protocol_obj))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$native_DASH_icon,devtools.formatters.markup._LT_native_reference_GT_(protocol_obj)], null):null);
var methods$ = devtools.munging.collect_protocol_methods(obj,selector);
var methods_markups = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (protocol_obj,ns_markups_list,native_markups_list,methods$){
return (function (p__15186){
var vec__15187 = p__15186;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15187,(0),null);
var arities = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15187,(1),null);
return devtools.formatters.markup._LT_protocol_method_GT_(name,arities);
});})(protocol_obj,ns_markups_list,native_markups_list,methods$))
,methods$);
var methods_markups_lists = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.list,methods_markups);
return devtools.formatters.markup._LT_aligned_body_GT_(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(methods_markups_lists,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns_markups_list,native_markups_list], null)));
});
devtools.formatters.markup._LT_protocol_GT_ = (function devtools$formatters$markup$_LT_protocol_GT_(var_args){
var args__7221__auto__ = [];
var len__7214__auto___15195 = arguments.length;
var i__7215__auto___15196 = (0);
while(true){
if((i__7215__auto___15196 < len__7214__auto___15195)){
args__7221__auto__.push((arguments[i__7215__auto___15196]));

var G__15197 = (i__7215__auto___15196 + (1));
i__7215__auto___15196 = G__15197;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((2) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((2)),(0))):null);
return devtools.formatters.markup._LT_protocol_GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7222__auto__);
});

devtools.formatters.markup._LT_protocol_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,protocol,p__15191){
var vec__15192 = p__15191;
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15192,(0),null);
var map__15193 = protocol;
var map__15193__$1 = ((((!((map__15193 == null)))?((((map__15193.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15193.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15193):map__15193);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15193__$1,cljs.core.cst$kw$ns);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15193__$1,cljs.core.cst$kw$name);
var selector = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15193__$1,cljs.core.cst$kw$selector);
var fast_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15193__$1,cljs.core.cst$kw$fast_QMARK_);
var preview_markup = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__6156__auto__ = tag;
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return cljs.core.cst$kw$protocol_DASH_name_DASH_tag;
}
})(),name], null);
var prefix_markup = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(fast_QMARK_)?cljs.core.cst$kw$fast_DASH_protocol_DASH_tag:cljs.core.cst$kw$slow_DASH_protocol_DASH_tag),cljs.core.cst$kw$protocol_DASH_background], null);
if(cljs.core.some_QMARK_(obj)){
var details_markup_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(devtools.formatters.markup._LT_protocol_details_GT_,obj,ns,name,cljs.core.array_seq([selector,fast_QMARK_], 0));
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prefix_markup,devtools.formatters.markup._LT_reference_surrogate_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([obj,preview_markup,details_markup_fn], 0)));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prefix_markup,preview_markup);
}
});

devtools.formatters.markup._LT_protocol_GT_.cljs$lang$maxFixedArity = (2);

devtools.formatters.markup._LT_protocol_GT_.cljs$lang$applyTo = (function (seq15188){
var G__15189 = cljs.core.first(seq15188);
var seq15188__$1 = cljs.core.next(seq15188);
var G__15190 = cljs.core.first(seq15188__$1);
var seq15188__$2 = cljs.core.next(seq15188__$1);
return devtools.formatters.markup._LT_protocol_GT_.cljs$core$IFn$_invoke$arity$variadic(G__15189,G__15190,seq15188__$2);
});
devtools.formatters.markup._LT_more_protocols_GT_ = (function devtools$formatters$markup$_LT_more_protocols_GT_(more_count){
var fake_protocol = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,devtools.formatters.helpers.get_more_marker(more_count)], null);
return devtools.formatters.markup._LT_protocol_GT_.cljs$core$IFn$_invoke$arity$variadic(null,fake_protocol,cljs.core.array_seq([cljs.core.cst$kw$protocol_DASH_more_DASH_tag], 0));
});
devtools.formatters.markup._LT_protocols_list_GT_ = (function devtools$formatters$markup$_LT_protocols_list_GT_(var_args){
var args__7221__auto__ = [];
var len__7214__auto___15203 = arguments.length;
var i__7215__auto___15204 = (0);
while(true){
if((i__7215__auto___15204 < len__7214__auto___15203)){
args__7221__auto__.push((arguments[i__7215__auto___15204]));

var G__15205 = (i__7215__auto___15204 + (1));
i__7215__auto___15204 = G__15205;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((2) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((2)),(0))):null);
return devtools.formatters.markup._LT_protocols_list_GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7222__auto__);
});

devtools.formatters.markup._LT_protocols_list_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,protocols,p__15201){
var vec__15202 = p__15201;
var max_protocols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15202,(0),null);
var max_protocols__$1 = (function (){var or__6156__auto__ = max_protocols;
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return devtools.formatters.helpers.pref(cljs.core.cst$kw$max_DASH_list_DASH_protocols);
}
})();
var protocols_markups = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(devtools.formatters.markup._LT_protocol_GT_,obj),protocols);
return devtools.formatters.markup._LT_list_GT_.cljs$core$IFn$_invoke$arity$variadic(protocols_markups,max_protocols__$1,cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$tag,cljs.core.cst$kw$protocols_DASH_header_DASH_tag,cljs.core.cst$kw$open_DASH_symbol,cljs.core.cst$kw$protocols_DASH_list_DASH_open_DASH_symbol,cljs.core.cst$kw$close_DASH_symbol,cljs.core.cst$kw$protocols_DASH_list_DASH_close_DASH_symbol,cljs.core.cst$kw$separator,cljs.core.cst$kw$header_DASH_protocol_DASH_separator,cljs.core.cst$kw$more_DASH_symbol,devtools.formatters.markup._LT_more_protocols_GT_], null)], 0));
});

devtools.formatters.markup._LT_protocols_list_GT_.cljs$lang$maxFixedArity = (2);

devtools.formatters.markup._LT_protocols_list_GT_.cljs$lang$applyTo = (function (seq15198){
var G__15199 = cljs.core.first(seq15198);
var seq15198__$1 = cljs.core.next(seq15198);
var G__15200 = cljs.core.first(seq15198__$1);
var seq15198__$2 = cljs.core.next(seq15198__$1);
return devtools.formatters.markup._LT_protocols_list_GT_.cljs$core$IFn$_invoke$arity$variadic(G__15199,G__15200,seq15198__$2);
});
devtools.formatters.markup._LT_field_GT_ = (function devtools$formatters$markup$_LT_field_GT_(name,value){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$header_DASH_field_DASH_tag,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$header_DASH_field_DASH_name_DASH_tag,[cljs.core.str(name)].join('')], null),cljs.core.cst$kw$header_DASH_field_DASH_value_DASH_spacer,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$header_DASH_field_DASH_value_DASH_tag,devtools.formatters.markup._LT_reference_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([devtools.formatters.markup._LT_surrogate_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)),(function (p1__15206_SHARP_){
return devtools.formatters.state.set_managed_print_level(p1__15206_SHARP_,(1));
})], 0))], null),cljs.core.cst$kw$header_DASH_field_DASH_separator], null);
});
devtools.formatters.markup._LT_fields_details_row_GT_ = (function devtools$formatters$markup$_LT_fields_details_row_GT_(field){
var vec__15208 = field;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15208,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15208,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$body_DASH_field_DASH_tr_DASH_tag,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$body_DASH_field_DASH_td1_DASH_tag,cljs.core.cst$kw$body_DASH_field_DASH_symbol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$body_DASH_field_DASH_name_DASH_tag,[cljs.core.str(name)].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$body_DASH_field_DASH_td2_DASH_tag,cljs.core.cst$kw$body_DASH_field_DASH_value_DASH_spacer], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$body_DASH_field_DASH_td3_DASH_tag,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$body_DASH_field_DASH_value_DASH_tag,devtools.formatters.markup._LT_reference_surrogate_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0))], null)], null)], null);
});
devtools.formatters.markup._LT_fields_GT_ = (function devtools$formatters$markup$_LT_fields_GT_(var_args){
var args__7221__auto__ = [];
var len__7214__auto___15215 = arguments.length;
var i__7215__auto___15216 = (0);
while(true){
if((i__7215__auto___15216 < len__7214__auto___15215)){
args__7221__auto__.push((arguments[i__7215__auto___15216]));

var G__15217 = (i__7215__auto___15216 + (1));
i__7215__auto___15216 = G__15217;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((1) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((1)),(0))):null);
return devtools.formatters.markup._LT_fields_GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7222__auto__);
});

devtools.formatters.markup._LT_fields_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (fields,p__15211){
var vec__15212 = p__15211;
var max_fields = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15212,(0),null);
if((cljs.core.count(fields) === (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fields_DASH_header_DASH_tag,cljs.core.cst$kw$fields_DASH_header_DASH_no_DASH_fields_DASH_symbol], null);
} else {
var max_fields__$1 = (function (){var or__6156__auto__ = max_fields;
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return devtools.formatters.helpers.pref(cljs.core.cst$kw$max_DASH_instance_DASH_header_DASH_fields);
}
})();
var more_QMARK_ = (cljs.core.count(fields) > max_fields__$1);
var fields_markups = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (max_fields__$1,more_QMARK_,vec__15212,max_fields){
return (function (p__15213){
var vec__15214 = p__15213;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15214,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15214,(1),null);
return devtools.formatters.markup._LT_field_GT_(name,value);
});})(max_fields__$1,more_QMARK_,vec__15212,max_fields))
,cljs.core.take.cljs$core$IFn$_invoke$arity$2(max_fields__$1,fields));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fields_DASH_header_DASH_tag,cljs.core.cst$kw$fields_DASH_header_DASH_open_DASH_symbol], null),fields_markups,cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((more_QMARK_)?cljs.core.cst$kw$more_DASH_fields_DASH_symbol:null),cljs.core.cst$kw$fields_DASH_header_DASH_close_DASH_symbol], null)], 0));
}
});

devtools.formatters.markup._LT_fields_GT_.cljs$lang$maxFixedArity = (1);

devtools.formatters.markup._LT_fields_GT_.cljs$lang$applyTo = (function (seq15209){
var G__15210 = cljs.core.first(seq15209);
var seq15209__$1 = cljs.core.next(seq15209);
return devtools.formatters.markup._LT_fields_GT_.cljs$core$IFn$_invoke$arity$variadic(G__15210,seq15209__$1);
});
devtools.formatters.markup._LT_fields_details_GT_ = (function devtools$formatters$markup$_LT_fields_details_GT_(fields,obj){
var protocols = devtools.munging.scan_protocols(obj);
var has_protocols_QMARK_ = !(cljs.core.empty_QMARK_(protocols));
var fields_markup = ((!((cljs.core.count(fields) === (0))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fields_DASH_icon,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$instance_DASH_body_DASH_fields_DASH_table_DASH_tag], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(devtools.formatters.markup._LT_fields_details_row_GT_,fields))], null):null);
var protocols_list_markup = ((has_protocols_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$protocols_DASH_icon,devtools.formatters.markup._LT_protocols_list_GT_(obj,protocols)], null):null);
var native_markup = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$native_DASH_icon,devtools.formatters.markup._LT_native_reference_GT_(obj)], null);
return devtools.formatters.markup._LT_aligned_body_GT_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [fields_markup,protocols_list_markup,native_markup], null));
});
devtools.formatters.markup._LT_instance_GT_ = (function devtools$formatters$markup$_LT_instance_GT_(value){
var constructor_fn = devtools.formatters.helpers.get_constructor(value);
var vec__15220 = devtools.munging.parse_constructor_info(constructor_fn);
var _ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15220,(0),null);
var _name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15220,(1),null);
var basis = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15220,(2),null);
var custom_printing_QMARK_ = ((!((value == null)))?((((value.cljs$lang$protocol_mask$partition0$ & (2147483648))) || (value.cljs$core$IPrintWithWriter$))?true:false):false);
var type_markup = devtools.formatters.markup._LT_type_GT_.cljs$core$IFn$_invoke$arity$variadic(constructor_fn,cljs.core.array_seq([cljs.core.cst$kw$instance_DASH_type_DASH_header_DASH_tag], 0));
var fields = devtools.formatters.helpers.fetch_fields_values(value,basis);
var fields_markup = devtools.formatters.markup._LT_fields_GT_.cljs$core$IFn$_invoke$arity$variadic(fields,cljs.core.array_seq([((custom_printing_QMARK_)?(0):null)], 0));
var fields_details_markup_fn = ((function (constructor_fn,vec__15220,_ns,_name,basis,custom_printing_QMARK_,type_markup,fields,fields_markup){
return (function (){
return devtools.formatters.markup._LT_fields_details_GT_(fields,value);
});})(constructor_fn,vec__15220,_ns,_name,basis,custom_printing_QMARK_,type_markup,fields,fields_markup))
;
var fields_preview_markup = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$instance_DASH_value_DASH_tag,devtools.formatters.markup._LT_reference_surrogate_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value,fields_markup,fields_details_markup_fn], 0))], null);
var custom_printing_markup = ((custom_printing_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$instance_DASH_custom_DASH_printing_DASH_wrapper_DASH_tag,cljs.core.cst$kw$instance_DASH_custom_DASH_printing_DASH_background,devtools.formatters.markup.print_via_protocol(value,cljs.core.cst$kw$instance_DASH_custom_DASH_printing_DASH_tag)], null):null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$instance_DASH_header_DASH_tag,cljs.core.cst$kw$instance_DASH_header_DASH_background,fields_preview_markup,custom_printing_markup,type_markup], null);
});
devtools.formatters.markup._LT_header_GT_ = (function devtools$formatters$markup$_LT_header_GT_(value){
return devtools.formatters.markup._LT_cljs_land_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([devtools.formatters.markup._LT_preview_GT_(value)], 0));
});
devtools.formatters.markup._LT_surrogate_header_GT_ = (function devtools$formatters$markup$_LT_surrogate_header_GT_(surrogate){
var or__6156__auto__ = devtools.formatters.templating.get_surrogate_header(surrogate);
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return devtools.formatters.markup._LT_preview_GT_(devtools.formatters.templating.get_surrogate_target(surrogate));
}
});
devtools.formatters.markup._LT_surrogate_target_GT_ = (function devtools$formatters$markup$_LT_surrogate_target_GT_(surrogate){
var target = devtools.formatters.templating.get_surrogate_target(surrogate);
if(cljs.core.seqable_QMARK_(target)){
var starting_index = devtools.formatters.templating.get_surrogate_start_index(surrogate);
return devtools.formatters.markup._LT_details_GT_(target,starting_index);
} else {
return devtools.formatters.markup._LT_standard_body_reference_GT_(target);
}
});
devtools.formatters.markup._LT_surrogate_body_GT_ = (function devtools$formatters$markup$_LT_surrogate_body_GT_(surrogate){
var temp__4655__auto__ = devtools.formatters.templating.get_surrogate_body(surrogate);
if(cljs.core.truth_(temp__4655__auto__)){
var body = temp__4655__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$target,body)){
return devtools.formatters.markup._LT_surrogate_target_GT_(surrogate);
} else {
return body;
}
} else {
return null;
}
});
devtools.formatters.markup._LT_atomic_GT_ = (function devtools$formatters$markup$_LT_atomic_GT_(value){
if(cljs.core.truth_(devtools.formatters.helpers.should_render_QMARK_(cljs.core.cst$kw$render_DASH_nils,value,cljs.core.nil_QMARK_))){
return devtools.formatters.markup._LT_nil_GT_();
} else {
if(cljs.core.truth_(devtools.formatters.helpers.should_render_QMARK_(cljs.core.cst$kw$render_DASH_bools,value,devtools.formatters.helpers.bool_QMARK_))){
return devtools.formatters.markup._LT_bool_GT_(value);
} else {
if(cljs.core.truth_(devtools.formatters.helpers.should_render_QMARK_(cljs.core.cst$kw$render_DASH_strings,value,cljs.core.string_QMARK_))){
return devtools.formatters.markup._LT_string_GT_(value);
} else {
if(cljs.core.truth_(devtools.formatters.helpers.should_render_QMARK_(cljs.core.cst$kw$render_DASH_numbers,value,cljs.core.number_QMARK_))){
return devtools.formatters.markup._LT_number_GT_(value);
} else {
if(cljs.core.truth_(devtools.formatters.helpers.should_render_QMARK_(cljs.core.cst$kw$render_DASH_keywords,value,cljs.core.keyword_QMARK_))){
return devtools.formatters.markup._LT_keyword_GT_(value);
} else {
if(cljs.core.truth_(devtools.formatters.helpers.should_render_QMARK_(cljs.core.cst$kw$render_DASH_symbols,value,cljs.core.symbol_QMARK_))){
return devtools.formatters.markup._LT_symbol_GT_(value);
} else {
if(cljs.core.truth_(devtools.formatters.helpers.should_render_QMARK_(cljs.core.cst$kw$render_DASH_instances,value,devtools.formatters.helpers.should_render_instance_QMARK_))){
return devtools.formatters.markup._LT_instance_GT_(value);
} else {
if(cljs.core.truth_(devtools.formatters.helpers.should_render_QMARK_(cljs.core.cst$kw$render_DASH_types,value,devtools.formatters.helpers.cljs_type_QMARK_))){
return devtools.formatters.markup._LT_standalone_type_GT_(value);
} else {
if(cljs.core.truth_(devtools.formatters.helpers.should_render_QMARK_(cljs.core.cst$kw$render_DASH_functions,value,devtools.formatters.helpers.cljs_function_QMARK_))){
return devtools.formatters.markup._LT_function_GT_(value);
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
});
devtools.formatters.markup.get_markup_db = (function devtools$formatters$markup$get_markup_db(){
if((devtools.formatters.markup._STAR_markup_db_STAR_ == null)){
devtools.formatters.markup._STAR_markup_db_STAR_ = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$aligned_DASH_body,cljs.core.cst$kw$native_DASH_reference,cljs.core.cst$kw$reference_DASH_surrogate,cljs.core.cst$kw$keyword,cljs.core.cst$kw$protocol_DASH_method_DASH_arities,cljs.core.cst$kw$surrogate_DASH_header,cljs.core.cst$kw$details,cljs.core.cst$kw$more_DASH_protocols,cljs.core.cst$kw$field,cljs.core.cst$kw$symbol,cljs.core.cst$kw$fields_DASH_details,cljs.core.cst$kw$atomic,cljs.core.cst$kw$string,cljs.core.cst$kw$standard_DASH_body,cljs.core.cst$kw$type_DASH_basis,cljs.core.cst$kw$bool,cljs.core.cst$kw$standalone_DASH_type,cljs.core.cst$kw$preview,cljs.core.cst$kw$header,cljs.core.cst$kw$protocol_DASH_method,cljs.core.cst$kw$cljs_DASH_land,cljs.core.cst$kw$type_DASH_basis_DASH_item,cljs.core.cst$kw$protocol_DASH_method_DASH_arities_DASH_details,cljs.core.cst$kw$fields_DASH_details_DASH_row,cljs.core.cst$kw$standard_DASH_body_DASH_reference,cljs.core.cst$kw$surrogate_DASH_body,cljs.core.cst$kw$expandable,cljs.core.cst$kw$type,cljs.core.cst$kw$protocol_DASH_method_DASH_arity,cljs.core.cst$kw$raw_DASH_surrogate,cljs.core.cst$kw$type_DASH_details,cljs.core.cst$kw$list,cljs.core.cst$kw$meta_DASH_wrapper,cljs.core.cst$kw$protocol,cljs.core.cst$kw$index,cljs.core.cst$kw$surrogate,cljs.core.cst$kw$protocols_DASH_list,cljs.core.cst$kw$meta,cljs.core.cst$kw$instance,cljs.core.cst$kw$reference,cljs.core.cst$kw$function_DASH_details,cljs.core.cst$kw$function,cljs.core.cst$kw$arities,cljs.core.cst$kw$header_DASH_expander,cljs.core.cst$kw$list_DASH_details,cljs.core.cst$kw$circular_DASH_reference,cljs.core.cst$kw$surrogate_DASH_target,cljs.core.cst$kw$fields,cljs.core.cst$kw$nil,cljs.core.cst$kw$body,cljs.core.cst$kw$number,cljs.core.cst$kw$protocol_DASH_details],[devtools.formatters.markup._LT_aligned_body_GT_,devtools.formatters.markup._LT_native_reference_GT_,devtools.formatters.markup._LT_reference_surrogate_GT_,devtools.formatters.markup._LT_keyword_GT_,devtools.formatters.markup._LT_protocol_method_arities_GT_,devtools.formatters.markup._LT_surrogate_header_GT_,devtools.formatters.markup._LT_details_GT_,devtools.formatters.markup._LT_more_protocols_GT_,devtools.formatters.markup._LT_field_GT_,devtools.formatters.markup._LT_symbol_GT_,devtools.formatters.markup._LT_fields_details_GT_,devtools.formatters.markup._LT_atomic_GT_,devtools.formatters.markup._LT_string_GT_,devtools.formatters.markup._LT_standard_body_GT_,devtools.formatters.markup._LT_type_basis_GT_,devtools.formatters.markup._LT_bool_GT_,devtools.formatters.markup._LT_standalone_type_GT_,devtools.formatters.markup._LT_preview_GT_,devtools.formatters.markup._LT_header_GT_,devtools.formatters.markup._LT_protocol_method_GT_,devtools.formatters.markup._LT_cljs_land_GT_,devtools.formatters.markup._LT_type_basis_item_GT_,devtools.formatters.markup._LT_protocol_method_arities_details_GT_,devtools.formatters.markup._LT_fields_details_row_GT_,devtools.formatters.markup._LT_standard_body_reference_GT_,devtools.formatters.markup._LT_surrogate_body_GT_,devtools.formatters.markup._LT_expandable_GT_,devtools.formatters.markup._LT_type_GT_,devtools.formatters.markup._LT_protocol_method_arity_GT_,devtools.formatters.markup._LT_raw_surrogate_GT_,devtools.formatters.markup._LT_type_details_GT_,devtools.formatters.markup._LT_list_GT_,devtools.formatters.markup._LT_meta_wrapper_GT_,devtools.formatters.markup._LT_protocol_GT_,devtools.formatters.markup._LT_index_GT_,devtools.formatters.markup._LT_surrogate_GT_,devtools.formatters.markup._LT_protocols_list_GT_,devtools.formatters.markup._LT_meta_GT_,devtools.formatters.markup._LT_instance_GT_,devtools.formatters.markup._LT_reference_GT_,devtools.formatters.markup._LT_function_details_GT_,devtools.formatters.markup._LT_function_GT_,devtools.formatters.markup._LT_arities_GT_,devtools.formatters.markup._LT_header_expander_GT_,devtools.formatters.markup._LT_list_details_GT_,devtools.formatters.markup._LT_circular_reference_GT_,devtools.formatters.markup._LT_surrogate_target_GT_,devtools.formatters.markup._LT_fields_GT_,devtools.formatters.markup._LT_nil_GT_,devtools.formatters.markup._LT_body_GT_,devtools.formatters.markup._LT_number_GT_,devtools.formatters.markup._LT_protocol_details_GT_]);
} else {
}

return devtools.formatters.markup._STAR_markup_db_STAR_;
});
