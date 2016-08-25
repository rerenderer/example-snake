// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('devtools.munging');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('devtools.util');
goog.require('goog.object');
goog.require('goog.string.StringBuffer');
devtools.munging.dollar_replacement = "~\uFE69~";
devtools.munging.max_fixed_arity_to_scan = (64);
devtools.munging.js_reserved_QMARK_ = (function devtools$munging$js_reserved_QMARK_(x){
var o__12554__auto__ = (function (){var temp__4657__auto__ = goog.object.get(window,"cljs");
if(cljs.core.truth_(temp__4657__auto__)){
var o__12566__auto__ = temp__4657__auto__;
return goog.object.get(o__12566__auto__,"core");
} else {
return null;
}
})();
return goog.object.get(o__12554__auto__,"js_reserved_QMARK_").call(o__12554__auto__,x);
});
devtools.munging.get_fn_source_safely = (function devtools$munging$get_fn_source_safely(f){
try{var o__12554__auto__ = f;
return goog.object.get(o__12554__auto__,"toString").call(o__12554__auto__);
}catch (e14715){var _ = e14715;
return "";
}});
devtools.munging.get_fn_fixed_arity = (function devtools$munging$get_fn_fixed_arity(f,n){
var G__14718 = f;
var G__14719 = [cljs.core.str("cljs$core$IFn$_invoke$arity$"),cljs.core.str(n)].join('');
return goog.object.get(G__14718,G__14719);
});
devtools.munging.get_fn_variadic_arity = (function devtools$munging$get_fn_variadic_arity(f){
var G__14722 = f;
var G__14723 = [cljs.core.str("cljs$core$IFn$_invoke$arity$variadic")].join('');
return goog.object.get(G__14722,G__14723);
});
devtools.munging.get_fn_max_fixed_arity = (function devtools$munging$get_fn_max_fixed_arity(f){
return goog.object.get(f,"cljs$lang$maxFixedArity");
});
devtools.munging.get_type_name = (function devtools$munging$get_type_name(t){
var sb = (new goog.string.StringBuffer());
var writer = (new cljs.core.StringBufferWriter(sb));
try{var o__12554__auto___14726 = t;
goog.object.get(o__12554__auto___14726,"cljs$lang$ctorPrWriter").call(o__12554__auto___14726,t,writer);
}catch (e14725){var __14727 = e14725;
}
writer.cljs$core$IWriter$_flush$arity$1(null);

return [cljs.core.str(sb)].join('');
});
/**
 * Given a character with a single digit converts it into a subscript character.
 *   Zero chracter maps to unicode 'SUBSCRIPT ZERO' (U+2080).
 */
devtools.munging.char_to_subscript = (function devtools$munging$char_to_subscript(char$){
if(typeof char$ === 'string'){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$string_QMARK_,cljs.core.cst$sym$char)], 0)))].join('')));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(char$),(1))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$count,cljs.core.cst$sym$char),(1))], 0)))].join('')));
}

var char_code = (function (){var o__12554__auto__ = (new String(char$));
return goog.object.get(o__12554__auto__,"charCodeAt").call(o__12554__auto__,(0));
})();
var num_code = (char_code - (48));
var subscript_code = ((8320) + num_code);
var o__12554__auto__ = String;
return goog.object.get(o__12554__auto__,"fromCharCode").call(o__12554__auto__,subscript_code);
});
/**
 * Given a subscript number converts it into a string representation consisting of unicode subscript characters (digits).
 */
devtools.munging.make_subscript = (function devtools$munging$make_subscript(subscript){
if(typeof subscript === 'number'){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$number_QMARK_,cljs.core.cst$sym$subscript)], 0)))].join('')));
}

return clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(devtools.munging.char_to_subscript,[cljs.core.str(subscript)].join('')));
});
/**
 * Given a character with a single digit converts it into a superscript character.
 *   Zero chracter maps to unicode 'SUPERSCRIPT ZERO' (U+2070).
 */
devtools.munging.char_to_superscript = (function devtools$munging$char_to_superscript(char$){
if(typeof char$ === 'string'){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$string_QMARK_,cljs.core.cst$sym$char)], 0)))].join('')));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(char$),(1))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$count,cljs.core.cst$sym$char),(1))], 0)))].join('')));
}

var char_code = (function (){var o__12554__auto__ = (new String(char$));
return goog.object.get(o__12554__auto__,"charCodeAt").call(o__12554__auto__,(0));
})();
var num_code = (char_code - (48));
var superscript_code = (function (){var G__14729 = num_code;
switch (G__14729) {
case (1):
return (185);

break;
case (2):
return (178);

break;
case (3):
return (179);

break;
default:
return ((8304) + num_code);

}
})();
var o__12554__auto__ = String;
return goog.object.get(o__12554__auto__,"fromCharCode").call(o__12554__auto__,superscript_code);
});
/**
 * Given a superscript number converts it into a string representation consisting of unicode superscript characters (digits).
 */
devtools.munging.make_superscript = (function devtools$munging$make_superscript(superscript){
if(typeof superscript === 'number'){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$number_QMARK_,cljs.core.cst$sym$superscript)], 0)))].join('')));
}

return clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(devtools.munging.char_to_superscript,[cljs.core.str(superscript)].join('')));
});
/**
 * Given a Javascript name answers if the name was likely generated by ClojureScript.
 *   We use a simple heuristic here:
 *  The name must contain at least two separate dollars because we assume two-segment namespaces.
 */
devtools.munging.cljs_fn_name_QMARK_ = (function devtools$munging$cljs_fn_name_QMARK_(munged_name){
if(typeof munged_name === 'string'){
return cljs.core.some_QMARK_(cljs.core.re_matches(/^[^$]*\$[^$]+\$.*$/,munged_name));
} else {
return null;
}
});
/**
 * Given a function source code parses out [name args]. Note that both strings are still munged.
 *   Suitable for further processing.
 * 
 *   For exampe for input below the function will return ["devtools_sample$core$hello" "name, unused_param"]:
 * 
 *   function devtools_sample$core$hello(name, unused_param){
 *  return [cljs.core.str("hello, "),cljs.core.str(name),cljs.core.str("!")].join('');
 *   }
 *   
 */
devtools.munging.parse_fn_source = (function devtools$munging$parse_fn_source(fn_source){
var temp__4655__auto__ = cljs.core.second(cljs.core.re_find(/function\s(.*?)\{/,fn_source));
if(cljs.core.truth_(temp__4655__auto__)){
var meat = temp__4655__auto__;
var temp__4655__auto____$1 = cljs.core.re_find(/(.*?)\((.*)\)/,meat);
if(cljs.core.truth_(temp__4655__auto____$1)){
var match = temp__4655__auto____$1;
return cljs.core.rest(match);
} else {
return null;
}
} else {
return null;
}
});
devtools.munging.trivial_fn_source_QMARK_ = (function devtools$munging$trivial_fn_source_QMARK_(fn_source){
if(typeof fn_source === 'string'){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$string_QMARK_,cljs.core.cst$sym$fn_DASH_source)], 0)))].join('')));
}

return (cljs.core.some_QMARK_(cljs.core.re_matches(/function\s*\(\s*\)\s*\{\s*\}\s*/,fn_source))) || (cljs.core.some_QMARK_(cljs.core.re_matches(/function.*\(\)\s*\{\s*\[native code\]\s*\}\s*/,fn_source)));
});
/**
 * Given a Javascript function object returns true if the function looks like a ClojureScript function.
 * 
 *   Uses various heuristics:
 *  1. must be fn? (is javascript function or satisfies Fn and IFn protocols)
 *  2. and name must be cljs-fn-name? (name can come from f.name or parsed out of function source)
 *  3. or if anonymous function, must be non-trivial
 */
devtools.munging.cljs_fn_QMARK_ = (function devtools$munging$cljs_fn_QMARK_(f){
if(cljs.core.truth_((function (){try{return cljs.core.fn_QMARK_(f);
}catch (e14733){var e__12579__auto__ = e14733;
return false;
}})())){
var name = goog.object.get(f,cljs.core.name);
if(!(cljs.core.empty_QMARK_(name))){
return devtools.munging.cljs_fn_name_QMARK_(name);
} else {
var fn_source = devtools.munging.get_fn_source_safely(f);
var vec__14734 = devtools.munging.parse_fn_source(fn_source);
var name__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14734,(0),null);
if(!(cljs.core.empty_QMARK_(name__$1))){
return devtools.munging.cljs_fn_name_QMARK_(name__$1);
} else {
return cljs.core.not(devtools.munging.trivial_fn_source_QMARK_(fn_source));
}
}
} else {
return null;
}
});
/**
 * Standard cljs.core/demunge is too agresive in replacing dollars.
 *   This wrapper function works around it by leaving dollars intact.
 */
devtools.munging.dollar_preserving_demunge = (function devtools$munging$dollar_preserving_demunge(munged_name){
return clojure.string.replace(cljs.core.demunge(clojure.string.replace(munged_name,"$",devtools.munging.dollar_replacement)),devtools.munging.dollar_replacement,"$");
});
devtools.munging.revert_reserved = (function devtools$munging$revert_reserved(s){
var or__6156__auto__ = (function (){var temp__4655__auto__ = cljs.core.re_matches(/(.*)\$/,s);
if(cljs.core.truth_(temp__4655__auto__)){
var m = temp__4655__auto__;
if(cljs.core.truth_(devtools.munging.js_reserved_QMARK_(cljs.core.second(m)))){
return cljs.core.second(m);
} else {
return null;
}
} else {
return null;
}
})();
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return s;
}
});
devtools.munging.reserved_aware_demunge = (function devtools$munging$reserved_aware_demunge(munged_name){
return devtools.munging.revert_reserved(devtools.munging.dollar_preserving_demunge(munged_name));
});
devtools.munging.proper_demunge = (function devtools$munging$proper_demunge(munged_name){
return devtools.munging.reserved_aware_demunge(munged_name);
});
devtools.munging.proper_arg_demunge = (function devtools$munging$proper_arg_demunge(munged_arg_name){
return clojure.string.replace(devtools.munging.proper_demunge(munged_arg_name),/^-(.*)$/,"_$1");
});
devtools.munging.proper_ns_demunge = (function devtools$munging$proper_ns_demunge(munged_ns_name){
return clojure.string.replace(devtools.munging.proper_demunge(munged_ns_name),"$",".");
});
devtools.munging.ns_exists_QMARK_ = (function devtools$munging$ns_exists_QMARK_(ns_module_name){
if(typeof ns_module_name === 'string'){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$string_QMARK_,cljs.core.cst$sym$ns_DASH_module_DASH_name)], 0)))].join('')));
}

var temp__4655__auto__ = (function (){var temp__4657__auto__ = goog.object.get(window,"goog");
if(cljs.core.truth_(temp__4657__auto__)){
var o__12567__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__12567__auto__,"dependencies_");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__12566__auto__ = temp__4657__auto____$1;
return goog.object.get(o__12566__auto__,"nameToPath");
} else {
return null;
}
} else {
return null;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var goog_namespaces = temp__4655__auto__;
return cljs.core.some_QMARK_(goog.object.get(goog_namespaces,ns_module_name));
} else {
return null;
}
});
/**
 * Given a name broken into namespace parts returns [detected-ns remaining-parts],
 *   where detected-ns is a string representing longest detected existing namespace and
 *   remaining-parts is a vector of remaing input parts not included in the detected-ns concatenation.
 * 
 *   For given input ["cljs" "core" "first"] returns ["cljs.core" ["first"]] (asumming cljs.core exists)
 */
devtools.munging.detect_namespace_prefix = (function devtools$munging$detect_namespace_prefix(var_args){
var args__7221__auto__ = [];
var len__7214__auto___14739 = arguments.length;
var i__7215__auto___14740 = (0);
while(true){
if((i__7215__auto___14740 < len__7214__auto___14739)){
args__7221__auto__.push((arguments[i__7215__auto___14740]));

var G__14741 = (i__7215__auto___14740 + (1));
i__7215__auto___14740 = G__14741;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((1) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((1)),(0))):null);
return devtools.munging.detect_namespace_prefix.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7222__auto__);
});

devtools.munging.detect_namespace_prefix.cljs$core$IFn$_invoke$arity$variadic = (function (tokens,p__14737){
var vec__14738 = p__14737;
var ns_detector = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14738,(0),null);
var effective_detector = (function (){var or__6156__auto__ = ns_detector;
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return devtools.munging.ns_exists_QMARK_;
}
})();
var name_tokens = cljs.core.PersistentVector.EMPTY;
var remaining_tokens = tokens;
while(true){
if(cljs.core.empty_QMARK_(remaining_tokens)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",name_tokens], null);
} else {
var ns_name = clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",remaining_tokens);
if(cljs.core.truth_((effective_detector.cljs$core$IFn$_invoke$arity$1 ? effective_detector.cljs$core$IFn$_invoke$arity$1(ns_name) : effective_detector.call(null,ns_name)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns_name,name_tokens], null);
} else {
var G__14742 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.last(remaining_tokens)], null),name_tokens);
var G__14743 = cljs.core.butlast(remaining_tokens);
name_tokens = G__14742;
remaining_tokens = G__14743;
continue;
}
}
break;
}
});

devtools.munging.detect_namespace_prefix.cljs$lang$maxFixedArity = (1);

devtools.munging.detect_namespace_prefix.cljs$lang$applyTo = (function (seq14735){
var G__14736 = cljs.core.first(seq14735);
var seq14735__$1 = cljs.core.next(seq14735);
return devtools.munging.detect_namespace_prefix.cljs$core$IFn$_invoke$arity$variadic(G__14736,seq14735__$1);
});
devtools.munging.normalize_arity = (function devtools$munging$normalize_arity(arity_tokens){
if(!(cljs.core.empty_QMARK_(arity_tokens))){
var arity = cljs.core.first(arity_tokens);
var G__14745 = arity;
switch (G__14745) {
case "variadic":
return arity;

break;
default:
var o__12554__auto__ = window;
return goog.object.get(o__12554__auto__,"parseInt").call(o__12554__auto__,arity,(10));

}
} else {
return null;
}
});
devtools.munging.strip_arity = (function devtools$munging$strip_arity(tokens){
var vec__14749 = cljs.core.split_with((function (p1__14747_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__14747_SHARP_,"arity");
}),tokens);
var prefix_tokens = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14749,(0),null);
var arity_tokens = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14749,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prefix_tokens,devtools.munging.normalize_arity(cljs.core.rest(arity_tokens))], null);
});
devtools.munging.parse_protocol = (function devtools$munging$parse_protocol(tokens,detector){
var remaining_tokens = tokens;
var name_tokens = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(remaining_tokens)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name_tokens], null);
} else {
var vec__14751 = devtools.munging.detect_namespace_prefix.cljs$core$IFn$_invoke$arity$variadic(remaining_tokens,cljs.core.array_seq([detector], 0));
var protocol_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14751,(0),null);
var name_and_method_tokens = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14751,(1),null);
if(cljs.core.empty_QMARK_(protocol_ns)){
var G__14752 = cljs.core.rest(remaining_tokens);
var G__14753 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(name_tokens,cljs.core.first(remaining_tokens));
remaining_tokens = G__14752;
name_tokens = G__14753;
continue;
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [name_tokens,protocol_ns,cljs.core.first(name_and_method_tokens),cljs.core.rest(name_and_method_tokens)], null);
}
}
break;
}
});
/**
 * Given a munged-name from Javascript lands attempts to break it into:
 *   [fn-ns fn-name protocol-ns protocol-name protocol-method arity].
 * 
 *   Protocol and arity elements are optional. Function elements are always present or "".
 * 
 *   examples for input:
 *  cljs$core$rest => ['cljs.core', 'rest']
 *  cljs.core.reduce$cljs$core$IFn$_invoke$arity$3 => ['cljs.core' 'reduce' 'cljs.core' 'IFn' '_invoke' 3]
 */
devtools.munging.break_munged_name = (function devtools$munging$break_munged_name(var_args){
var args14754 = [];
var len__7214__auto___14760 = arguments.length;
var i__7215__auto___14761 = (0);
while(true){
if((i__7215__auto___14761 < len__7214__auto___14760)){
args14754.push((arguments[i__7215__auto___14761]));

var G__14762 = (i__7215__auto___14761 + (1));
i__7215__auto___14761 = G__14762;
continue;
} else {
}
break;
}

var G__14756 = args14754.length;
switch (G__14756) {
case 1:
return devtools.munging.break_munged_name.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devtools.munging.break_munged_name.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14754.length)].join('')));

}
});

devtools.munging.break_munged_name.cljs$core$IFn$_invoke$arity$1 = (function (munged_name){
return devtools.munging.break_munged_name.cljs$core$IFn$_invoke$arity$2(munged_name,null);
});

devtools.munging.break_munged_name.cljs$core$IFn$_invoke$arity$2 = (function (munged_name,ns_detector){
if(cljs.core.empty_QMARK_(munged_name)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",""], null);
} else {
var effective_detector = (function (){var or__6156__auto__ = ns_detector;
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return devtools.munging.ns_exists_QMARK_;
}
})();
var tokens = cljs.core.vec(munged_name.split(/[$.]/));
var vec__14757 = devtools.munging.strip_arity(tokens);
var tokens__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14757,(0),null);
var arity = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14757,(1),null);
var vec__14758 = devtools.munging.detect_namespace_prefix.cljs$core$IFn$_invoke$arity$variadic(tokens__$1,cljs.core.array_seq([effective_detector], 0));
var fn_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14758,(0),null);
var tokens__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14758,(1),null);
var vec__14759 = devtools.munging.parse_protocol(tokens__$2,effective_detector);
var fn_name_tokens = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14759,(0),null);
var protocol_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14759,(1),null);
var protocol_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14759,(2),null);
var protocol_method_tokens = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14759,(3),null);
var fn_name = clojure.string.join.cljs$core$IFn$_invoke$arity$2("$",fn_name_tokens);
var protocol_method = (cljs.core.truth_(protocol_method_tokens)?clojure.string.join.cljs$core$IFn$_invoke$arity$2("$",protocol_method_tokens):null);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [fn_ns,fn_name,protocol_ns,protocol_name,protocol_method,arity], null);
}
});

devtools.munging.break_munged_name.cljs$lang$maxFixedArity = 2;
/**
 * Given a munged-name from Javascript lands attempts to break it into a namespace part and remaining short name.
 *   Then applies appropriate demunging on them and returns ClojureScript versions of the names.
 */
devtools.munging.break_and_demunge_name = (function devtools$munging$break_and_demunge_name(var_args){
var args14764 = [];
var len__7214__auto___14768 = arguments.length;
var i__7215__auto___14769 = (0);
while(true){
if((i__7215__auto___14769 < len__7214__auto___14768)){
args14764.push((arguments[i__7215__auto___14769]));

var G__14770 = (i__7215__auto___14769 + (1));
i__7215__auto___14769 = G__14770;
continue;
} else {
}
break;
}

var G__14766 = args14764.length;
switch (G__14766) {
case 1:
return devtools.munging.break_and_demunge_name.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devtools.munging.break_and_demunge_name.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14764.length)].join('')));

}
});

devtools.munging.break_and_demunge_name.cljs$core$IFn$_invoke$arity$1 = (function (munged_name){
return devtools.munging.break_and_demunge_name.cljs$core$IFn$_invoke$arity$2(munged_name,null);
});

devtools.munging.break_and_demunge_name.cljs$core$IFn$_invoke$arity$2 = (function (munged_name,ns_detector){
var result = devtools.munging.break_munged_name.cljs$core$IFn$_invoke$arity$2(munged_name,ns_detector);
var vec__14767 = result;
var munged_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14767,(0),null);
var munged_name__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14767,(1),null);
var munged_protocol_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14767,(2),null);
var munged_protocol_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14767,(3),null);
var munged_protocol_method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14767,(4),null);
var arity = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14767,(5),null);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [devtools.munging.proper_ns_demunge(munged_ns),devtools.munging.proper_demunge(munged_name__$1),(cljs.core.truth_(munged_protocol_ns)?devtools.munging.proper_ns_demunge(munged_protocol_ns):null),(cljs.core.truth_(munged_protocol_name)?devtools.munging.proper_demunge(munged_protocol_name):null),(cljs.core.truth_(munged_protocol_method)?devtools.munging.proper_demunge(munged_protocol_method):null),arity], null);
});

devtools.munging.break_and_demunge_name.cljs$lang$maxFixedArity = 2;
/**
 * Given function source code tries to retrieve [ns name & args] on best effort basis, where
 *   ns is demunged namespace part of the function name (or "" if namespace cannot be detected)
 *   name is demunged short name (or "" if function is anonymous or name cannot be retrieved)
 *   args is optional number of demunged argument names.
 * 
 *   Please note that this function always returns a vector with something. In worst cases ["" ""].
 *   
 */
devtools.munging.parse_fn_source_info = (function devtools$munging$parse_fn_source_info(fn_source){
var temp__4655__auto__ = devtools.munging.parse_fn_source(fn_source);
if(cljs.core.truth_(temp__4655__auto__)){
var vec__14774 = temp__4655__auto__;
var munged_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14774,(0),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14774,(1),null);
var vec__14775 = devtools.munging.break_and_demunge_name.cljs$core$IFn$_invoke$arity$1(munged_name);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14775,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14775,(1),null);
var demunged_args = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(devtools.munging.proper_arg_demunge,clojure.string.trim),clojure.string.split.cljs$core$IFn$_invoke$arity$2(args,/,/));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,name], null),demunged_args);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",""], null);
}
});
/**
 * Given Javascript function object tries to retrieve [ns name & args] as in parse-fn-source-info (on best effort basis).
 */
devtools.munging.parse_fn_info = (function devtools$munging$parse_fn_info(f){
var fn_source = devtools.munging.get_fn_source_safely(f);
return devtools.munging.parse_fn_source_info(fn_source);
});
/**
 * Given a Javascript function object tries to retrieve [ns name & args] as in parse-fn-info (on best effort basis).
 * 
 *   The difference from parse-fn-info is that this function prefers to read args from arities if available.
 *   It recurses arbitrary deep following IFn protocol leads.
 * 
 *   If we hit multi-arity situation in leaf, we don't attempt to list arguments and return ::multi-arity placeholder instead.
 * 
 *   The reason for reading arities is that it gives more accurate parameter names in some cases.
 *   We observed that variadic functions don't always contain original parameter names, but individual IFn arity functions do.
 */
devtools.munging.parse_fn_info_deep = (function devtools$munging$parse_fn_info_deep(f){
var fn_info = devtools.munging.parse_fn_info(f);
var arities = (devtools.munging.collect_fn_arities.cljs$core$IFn$_invoke$arity$1 ? devtools.munging.collect_fn_arities.cljs$core$IFn$_invoke$arity$1(f) : devtools.munging.collect_fn_arities.call(null,f));
if(cljs.core.some_QMARK_(arities)){
if((cljs.core.count(arities) > (1))){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2((2),fn_info),cljs.core.cst$kw$devtools$munging_SLASH_multi_DASH_arity);
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2((2),fn_info),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),devtools$munging$parse_fn_info_deep(cljs.core.second(cljs.core.first(arities)))));
}
} else {
return fn_info;
}
});
/**
 * Given a demunged ClojureScript parameter name. Tries to detect human readable part and returns the index where it ends.
 *   Returns nil if no prefix can be detected.
 * 
 *   The idea is to convert macro-generated parameters and other generated names to more friendly names.
 *   We observed that param names generated by gensym have prefix followed by big numbers.
 *   Other generated names contain two dashes after prefix (originally probably using underscores).
 */
devtools.munging.find_index_of_human_prefix = (function devtools$munging$find_index_of_human_prefix(name){
var sep_start = name.indexOf("--");
var num_prefix = cljs.core.count(cljs.core.second(cljs.core.re_find(/(.*?)\d{2,}/,name)));
var finds = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.pos_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sep_start,num_prefix], null));
if(!(cljs.core.empty_QMARK_(finds))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,finds);
} else {
return null;
}
});
/**
 * Given a name and intermediate state. Convert name to a human readable version by keeping human readable prefix with
 *   optional subscribt postfix and store it in ::result. Subscript number is picked based on state. State keeps track of
 *   previously assigned subscripts. Returns a new state.
 */
devtools.munging.humanize_name = (function devtools$munging$humanize_name(state,name){
var index = devtools.munging.find_index_of_human_prefix(name);
var prefix = (((index > (0)))?name.substring((0),index):name);
var temp__4655__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,prefix);
if(cljs.core.truth_(temp__4655__auto__)){
var subscript = temp__4655__auto__;
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,cljs.core.cst$kw$devtools$munging_SLASH_result,cljs.core.conj,[cljs.core.str(prefix),cljs.core.str(devtools.munging.make_subscript(subscript))].join('')),prefix,cljs.core.inc);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,cljs.core.cst$kw$devtools$munging_SLASH_result,cljs.core.conj,prefix),prefix,(2));
}
});
/**
 * Given a list of names, returns a list of human-readable versions of those names.
 *   It detects human-readable prefix using a simple heuristics. When names repeat it assigns simple subscripts starting with 2.
 *   Subscripts are assigned left-to-right.
 * 
 *   Given ["p--a" "p--b" "x" "p--c"] returns ["p" "p₂" "x" "p₃"]
 */
devtools.munging.humanize_names = (function devtools$munging$humanize_names(names){
return cljs.core.with_meta(cljs.core.cst$kw$devtools$munging_SLASH_result.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(devtools.munging.humanize_name,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$devtools$munging_SLASH_result,cljs.core.PersistentVector.EMPTY], null),names)),cljs.core.meta(names));
});
devtools.munging.collect_fn_fixed_arities = (function devtools$munging$collect_fn_fixed_arities(f,max_arity){
var arity = (0);
var collection = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if((arity > max_arity)){
return collection;
} else {
var G__14777 = (arity + (1));
var G__14778 = (function (){var temp__4655__auto__ = devtools.munging.get_fn_fixed_arity(f,arity);
if(cljs.core.truth_(temp__4655__auto__)){
var arity_fn = temp__4655__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(collection,arity,arity_fn);
} else {
return collection;
}
})();
arity = G__14777;
collection = G__14778;
continue;
}
break;
}
});
devtools.munging.collect_fn_variadic_arities = (function devtools$munging$collect_fn_variadic_arities(f){
var temp__4655__auto__ = devtools.munging.get_fn_variadic_arity(f);
if(cljs.core.truth_(temp__4655__auto__)){
var variadic_arity = temp__4655__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$devtools$munging_SLASH_variadic,variadic_arity], null);
} else {
return null;
}
});
devtools.munging.review_arity = (function devtools$munging$review_arity(p__14779){
var vec__14781 = p__14779;
var arity = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14781,(0),null);
var arity_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14781,(1),null);
var sub_arities = (devtools.munging.collect_fn_arities.cljs$core$IFn$_invoke$arity$1 ? devtools.munging.collect_fn_arities.cljs$core$IFn$_invoke$arity$1(arity_fn) : devtools.munging.collect_fn_arities.call(null,arity_fn));
if(cljs.core.truth_(cljs.core.cst$kw$devtools$munging_SLASH_variadic.cljs$core$IFn$_invoke$arity$1(sub_arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$devtools$munging_SLASH_variadic,arity_fn], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arity,arity_fn], null);
}
});
/**
 * Some arities can be marked as fixed arity but in fact point to a variadic-arity function. We want to detect this case
 *   and turn such improperly categorized arities to ::variadic.
 */
devtools.munging.review_arities = (function devtools$munging$review_arities(arities){
if(cljs.core.truth_(cljs.core.cst$kw$devtools$munging_SLASH_variadic.cljs$core$IFn$_invoke$arity$1(arities))){
return arities;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(devtools.munging.review_arity,arities));
}
});
/**
 * Given a Javascript function object, tries to inspect known arity properties generated by ClojureScript compiler and
 *   collects all available arity functions into a map. Arities are keyed by arity count and variadic arity gets ::variadic key.
 */
devtools.munging.collect_fn_arities = (function devtools$munging$collect_fn_arities(f){
var max_fixed_arity = devtools.munging.get_fn_max_fixed_arity(f);
var fixed_arities = devtools.munging.collect_fn_fixed_arities(f,(function (){var or__6156__auto__ = max_fixed_arity;
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return devtools.munging.max_fixed_arity_to_scan;
}
})());
var variadic_arities = devtools.munging.collect_fn_variadic_arities(f);
var arities = devtools.munging.review_arities(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([fixed_arities,variadic_arities], 0)));
if(!(cljs.core.empty_QMARK_(arities))){
return arities;
} else {
return null;
}
});
/**
 * ::variadic goes last, other keywords compare by name.
 */
devtools.munging.arity_keywords_comparator = (function devtools$munging$arity_keywords_comparator(x,y){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$devtools$munging_SLASH_variadic,x)){
return (1);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$devtools$munging_SLASH_variadic,y)){
return (-1);
} else {
return cljs.core.compare(cljs.core.name(x),cljs.core.name(y));

}
}
});
/**
 * numbers go first (ordered), then keywords (ordered by name), and then ::variadic sticks last
 */
devtools.munging.arities_key_comparator = (function devtools$munging$arities_key_comparator(x,y){
var kx_QMARK_ = (x instanceof cljs.core.Keyword);
var ky_QMARK_ = (y instanceof cljs.core.Keyword);
if((kx_QMARK_) && (ky_QMARK_)){
return devtools.munging.arity_keywords_comparator(x,y);
} else {
if(kx_QMARK_){
return (1);
} else {
if(ky_QMARK_){
return (-1);
} else {
return cljs.core.compare(x,y);

}
}
}
});
devtools.munging.arities_to_args_lists_STAR_ = (function devtools$munging$arities_to_args_lists_STAR_(arities){
var sorted_keys = cljs.core.sort.cljs$core$IFn$_invoke$arity$2(devtools.munging.arities_key_comparator,cljs.core.keys(arities));
var sorted_fns = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (sorted_keys){
return (function (p1__14782_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(arities,p1__14782_SHARP_);
});})(sorted_keys))
,sorted_keys);
var sorted_infos = cljs.core.map.cljs$core$IFn$_invoke$arity$2(devtools.munging.parse_fn_info_deep,sorted_fns);
var sorted_args_lists = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (sorted_keys,sorted_fns,sorted_infos){
return (function (p1__14783_SHARP_){
return cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),p1__14783_SHARP_);
});})(sorted_keys,sorted_fns,sorted_infos))
,sorted_infos);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.last(sorted_keys),cljs.core.cst$kw$devtools$munging_SLASH_variadic)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(sorted_args_lists),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.last(sorted_args_lists),cljs.core.assoc,cljs.core.cst$kw$devtools$munging_SLASH_variadic,true)], null));
} else {
return sorted_args_lists;
}
});
/**
 * Given a map of arity functions. Tries to parse individual functions and prepare an arguments list for each arity.
 *   Returned list of arguments list is sorted by arity count, variadic arity goes last if available.
 * 
 *   The function also optionally humanizes argument names in each arguments list if requested.
 */
devtools.munging.arities_to_args_lists = (function devtools$munging$arities_to_args_lists(var_args){
var args__7221__auto__ = [];
var len__7214__auto___14788 = arguments.length;
var i__7215__auto___14789 = (0);
while(true){
if((i__7215__auto___14789 < len__7214__auto___14788)){
args__7221__auto__.push((arguments[i__7215__auto___14789]));

var G__14790 = (i__7215__auto___14789 + (1));
i__7215__auto___14789 = G__14790;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((1) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((1)),(0))):null);
return devtools.munging.arities_to_args_lists.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7222__auto__);
});

devtools.munging.arities_to_args_lists.cljs$core$IFn$_invoke$arity$variadic = (function (arities,p__14786){
var vec__14787 = p__14786;
var humanize_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14787,(0),null);
var args_lists = devtools.munging.arities_to_args_lists_STAR_(arities);
if(cljs.core.truth_(humanize_QMARK_)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(devtools.munging.humanize_names,args_lists);
} else {
return args_lists;
}
});

devtools.munging.arities_to_args_lists.cljs$lang$maxFixedArity = (1);

devtools.munging.arities_to_args_lists.cljs$lang$applyTo = (function (seq14784){
var G__14785 = cljs.core.first(seq14784);
var seq14784__$1 = cljs.core.next(seq14784);
return devtools.munging.arities_to_args_lists.cljs$core$IFn$_invoke$arity$variadic(G__14785,seq14784__$1);
});
/**
 * Converts a list of arguments lists into a list of strings suitable for UI presentation.
 */
devtools.munging.args_lists_to_strings = (function devtools$munging$args_lists_to_strings(args_lists,spacer_symbol,multi_arity_symbol,rest_symbol){
var string_mapper = (function (arg){
var G__14792 = (((arg instanceof cljs.core.Keyword))?arg.fqn:null);
switch (G__14792) {
case "devtools.munging/multi-arity":
return multi_arity_symbol;

break;
default:
return arg;

}
});
var printer = ((function (string_mapper){
return (function (args_list){
var variadic_QMARK_ = cljs.core.cst$kw$devtools$munging_SLASH_variadic.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(args_list));
var args_strings = cljs.core.map.cljs$core$IFn$_invoke$arity$2(string_mapper,args_list);
return [cljs.core.str(clojure.string.join.cljs$core$IFn$_invoke$arity$2(spacer_symbol,cljs.core.butlast(args_strings))),cljs.core.str((cljs.core.truth_(variadic_QMARK_)?rest_symbol:spacer_symbol)),cljs.core.str(cljs.core.last(args_strings))].join('');
});})(string_mapper))
;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,cljs.core.map.cljs$core$IFn$_invoke$arity$2(printer,args_lists));
});
devtools.munging.extract_arities = (function devtools$munging$extract_arities(f,humanize_QMARK_,spacer_symbol,multi_arity_symbol,rest_symbol){
return devtools.munging.args_lists_to_strings(devtools.munging.arities_to_args_lists.cljs$core$IFn$_invoke$arity$variadic((function (){var or__6156__auto__ = devtools.munging.collect_fn_arities(f);
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$naked,f], null);
}
})(),cljs.core.array_seq([humanize_QMARK_], 0)),spacer_symbol,multi_arity_symbol,rest_symbol);
});
devtools.munging.common_protocol_QMARK_ = (function devtools$munging$common_protocol_QMARK_(protocol_ns,protocol_name){
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(protocol_ns,"cljs.core")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(protocol_name,"IFn"));
});
devtools.munging.present_fn_part = (function devtools$munging$present_fn_part(fn_ns,fn_name,include_ns_QMARK_){
return [cljs.core.str((cljs.core.truth_((function (){var and__6144__auto__ = include_ns_QMARK_;
if(cljs.core.truth_(and__6144__auto__)){
return !(cljs.core.empty_QMARK_(fn_ns));
} else {
return and__6144__auto__;
}
})())?[cljs.core.str(fn_ns),cljs.core.str("/")].join(''):null)),cljs.core.str(fn_name)].join('');
});
devtools.munging.present_protocol_part = (function devtools$munging$present_protocol_part(protocol_ns,protocol_name,protocol_method,include_protocol_ns_QMARK_){
return [cljs.core.str((cljs.core.truth_(include_protocol_ns_QMARK_)?protocol_ns:null)),cljs.core.str(((!(cljs.core.empty_QMARK_(protocol_name)))?[cljs.core.str((cljs.core.truth_(include_protocol_ns_QMARK_)?".":null)),cljs.core.str(protocol_name)].join(''):null)),cljs.core.str(((!(cljs.core.empty_QMARK_(protocol_method)))?[cljs.core.str((cljs.core.truth_((function (){var or__6156__auto__ = include_protocol_ns_QMARK_;
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return !(cljs.core.empty_QMARK_(protocol_name));
}
})())?":":null)),cljs.core.str(protocol_method)].join(''):null))].join('');
});
/**
 * Given javascript function name tries to present it as plain string for display in UI on best effort basis.
 */
devtools.munging.present_function_name = (function devtools$munging$present_function_name(munged_name,options){
var map__14797 = options;
var map__14797__$1 = ((((!((map__14797 == null)))?((((map__14797.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14797.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14797):map__14797);
var include_ns_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14797__$1,cljs.core.cst$kw$include_DASH_ns_QMARK_);
var include_protocol_ns_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14797__$1,cljs.core.cst$kw$include_DASH_protocol_DASH_ns_QMARK_);
var silence_common_protocols_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14797__$1,cljs.core.cst$kw$silence_DASH_common_DASH_protocols_QMARK_);
var ns_detector = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14797__$1,cljs.core.cst$kw$ns_DASH_detector);
var vec__14798 = devtools.munging.break_and_demunge_name.cljs$core$IFn$_invoke$arity$2(munged_name,ns_detector);
var fn_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14798,(0),null);
var fn_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14798,(1),null);
var protocol_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14798,(2),null);
var protocol_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14798,(3),null);
var protocol_method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14798,(4),null);
var arity = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14798,(5),null);
var arity_str = ((cljs.core.some_QMARK_(arity))?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arity,"variadic"))?"\u207F":devtools.munging.make_superscript(arity)):null);
if(cljs.core.empty_QMARK_(fn_name)){
return munged_name;
} else {
var fn_part = devtools.munging.present_fn_part(fn_ns,fn_name,include_ns_QMARK_);
var protocol_part = (cljs.core.truth_((function (){var and__6144__auto__ = protocol_ns;
if(cljs.core.truth_(and__6144__auto__)){
return cljs.core.not((function (){var and__6144__auto____$1 = silence_common_protocols_QMARK_;
if(cljs.core.truth_(and__6144__auto____$1)){
return devtools.munging.common_protocol_QMARK_(protocol_ns,protocol_name);
} else {
return and__6144__auto____$1;
}
})());
} else {
return and__6144__auto__;
}
})())?devtools.munging.present_protocol_part(protocol_ns,protocol_name,protocol_method,include_protocol_ns_QMARK_):null);
return [cljs.core.str((function (){var or__6156__auto__ = protocol_part;
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return fn_part;
}
})()),cljs.core.str(arity_str),cljs.core.str((cljs.core.truth_(protocol_part)?[cljs.core.str(" ("),cljs.core.str(fn_part),cljs.core.str(")")].join(''):null))].join('');
}
});
devtools.munging.get_basis = (function devtools$munging$get_basis(f){
var o__12554__auto__ = f;
return goog.object.get(o__12554__auto__,"getBasis").call(o__12554__auto__);
});
/**
 * Given a Javascript constructor function tries to retrieve [ns name basis]. Returns nil if not a cljs type.
 */
devtools.munging.parse_constructor_info = (function devtools$munging$parse_constructor_info(f){
if(cljs.core.truth_((function (){var and__6144__auto__ = goog.isObject(f);
if(cljs.core.truth_(and__6144__auto__)){
return goog.object.get(f,"cljs$lang$type");
} else {
return and__6144__auto__;
}
})())){
var type_name = devtools.munging.get_type_name(f);
var parts = type_name.split(/\//);
var basis = (function (){try{return devtools.munging.get_basis(f);
}catch (e14801){var e__12579__auto__ = e14801;
return cljs.core.PersistentVector.EMPTY;
}})();
if((cljs.core.count(parts) <= (2))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$_LT__EQ_,cljs.core.list(cljs.core.cst$sym$count,cljs.core.cst$sym$parts),(2))], 0)))].join('')));
}

while(true){
if((cljs.core.count(parts) < (2))){
parts.unshift(null);

continue;
} else {
}
break;
}

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(parts),basis);
} else {
return null;
}
});
devtools.munging.protocol_path = (function devtools$munging$protocol_path(protocol_selector){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(protocol_selector,/\./);
});
devtools.munging.get_protocol_object = (function devtools$munging$get_protocol_object(protocol_selector){
var obj = window;
var path = devtools.munging.protocol_path(protocol_selector);
while(true){
if(cljs.core.empty_QMARK_(path)){
return obj;
} else {
if(cljs.core.truth_(goog.isObject(obj))){
var G__14806 = (function (){var G__14804 = obj;
var G__14805 = cljs.core.first(path);
return goog.object.get(G__14804,G__14805);
})();
var G__14807 = cljs.core.rest(path);
obj = G__14806;
path = G__14807;
continue;
} else {
return null;
}
}
break;
}
});
devtools.munging.protocol_exists_QMARK_ = (function devtools$munging$protocol_exists_QMARK_(protocol_selector){
return cljs.core.some_QMARK_(devtools.munging.get_protocol_object(protocol_selector));
});
devtools.munging.get_protocol_selector = (function devtools$munging$get_protocol_selector(key){
var temp__4655__auto__ = cljs.core.re_matches(/(.*)\$$/,key);
if(cljs.core.truth_(temp__4655__auto__)){
var m = temp__4655__auto__;
if(!(clojure.string.includes_QMARK_(key,"cljs$lang$protocol_mask$partition"))){
var protocol_selector = clojure.string.replace(cljs.core.second(m),"$",".");
if(cljs.core.truth_(devtools.munging.protocol_exists_QMARK_(protocol_selector))){
return protocol_selector;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
devtools.munging.demunge_protocol_selector = (function devtools$munging$demunge_protocol_selector(protocol_selector){
var parts = cljs.core.map.cljs$core$IFn$_invoke$arity$2(devtools.munging.proper_demunge,devtools.munging.protocol_path(protocol_selector));
var _ = (((cljs.core.count(parts) >= (2)))?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("expected protocol selector to contain at least one dot: '"),cljs.core.str(protocol_selector),cljs.core.str("'")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$_GT__EQ_,cljs.core.list(cljs.core.cst$sym$count,cljs.core.cst$sym$parts),(2))], 0)))].join('')))})());
var ns = clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.butlast(parts));
var name = cljs.core.last(parts);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,name,protocol_selector], null);
});
devtools.munging.fast_path_protocols_lookup_table = new cljs.core.PersistentArrayMap(null, 2, [(0),cljs.core.PersistentHashMap.fromArrays([(8192),(4096),(524288),(128),(1048576),(1),(32768),(4),(268435456),(512),(33554432),(32),(256),(1024),(134217728),(16777216),(64),(262144),(2),(4194304),(131072),(67108864),(8388608),(16),(2097152),(1073741824),(2147483648),(2048),(8),(65536),(16384)],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cljs.core","IStack","cljs.core.IStack"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cljs.core","ISet","cljs.core.ISet"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cljs.core","IReduce","cljs.core.IReduce"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cljs.core","INext","cljs.core.INext"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cljs.core","IKVReduce","cljs.core.IKVReduce"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cljs.core","IFn","cljs.core.IFn"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cljs.core","IDeref","cljs.core.IDeref"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cljs.core","IEmptyableCollection","cljs.core.IEmptyableCollection"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cljs.core","ISorted","cljs.core.ISorted"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cljs.core","IAssociative","cljs.core.IAssociative"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cljs.core","IList","cljs.core.IList"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cljs.core","ASeq","cljs.core.ASeq"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cljs.core","ILookup","cljs.core.ILookup"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cljs.core","IMap","cljs.core.IMap"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cljs.core","IReversible","cljs.core.IReversible"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cljs.core","ISequential","cljs.core.ISequential"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cljs.core","ISeq","cljs.core.ISeq"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cljs.core","IWithMeta","cljs.core.IWithMeta"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cljs.core","ICounted","cljs.core.ICounted"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cljs.core","IHash","cljs.core.IHash"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cljs.core","IMeta","cljs.core.IMeta"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cljs.core","IRecord","cljs.core.IRecord"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cljs.core","ISeqable","cljs.core.ISeqable"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cljs.core","IIndexed","cljs.core.IIndexed"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cljs.core","IEquiv","cljs.core.IEquiv"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cljs.core","IWriter","cljs.core.IWriter"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cljs.core","IPrintWithWriter","cljs.core.IPrintWithWriter"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cljs.core","IMapEntry","cljs.core.IMapEntry"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cljs.core","ICollection","cljs.core.ICollection"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cljs.core","IDerefWithTimeout","cljs.core.IDerefWithTimeout"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cljs.core","IVector","cljs.core.IVector"], null)]),(1),cljs.core.PersistentHashMap.fromArrays([(8192),(4096),(128),(1),(32768),(4),(512),(32),(256),(1024),(64),(2),(16),(2048),(8),(65536),(16384)],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cljs.core","ICloneable","cljs.core.ICloneable"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cljs.core","INamed","cljs.core.INamed"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cljs.core","ITransientSet","cljs.core.ITransientSet"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cljs.core","IPending","cljs.core.IPending"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cljs.core","IReset","cljs.core.IReset"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cljs.core","IEditableCollection","cljs.core.IEditableCollection"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cljs.core","IChunkedSeq","cljs.core.IChunkedSeq"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cljs.core","ITransientMap","cljs.core.ITransientMap"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cljs.core","IMultiFn","cljs.core.IMultiFn"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cljs.core","IChunkedNext","cljs.core.IChunkedNext"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cljs.core","ITransientVector","cljs.core.ITransientVector"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cljs.core","IWatchable","cljs.core.IWatchable"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cljs.core","ITransientAssociative","cljs.core.ITransientAssociative"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cljs.core","IComparable","cljs.core.IComparable"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cljs.core","ITransientCollection","cljs.core.ITransientCollection"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cljs.core","ISwap","cljs.core.ISwap"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cljs.core","IAtom","cljs.core.IAtom"], null)])], null);
devtools.munging.key_for_protocol_partition = (function devtools$munging$key_for_protocol_partition(partition){
return [cljs.core.str("cljs$lang$protocol_mask$partition"),cljs.core.str(partition),cljs.core.str("$")].join('');
});
devtools.munging.scan_fast_path_protocols_partition = (function devtools$munging$scan_fast_path_protocols_partition(obj,partition){
if(typeof partition === 'number'){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$number_QMARK_,cljs.core.cst$sym$partition)], 0)))].join('')));
}

var partition_key = devtools.munging.key_for_protocol_partition(partition);
var partition_bits = (function (){var or__6156__auto__ = goog.object.get(obj,partition_key);
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return (0);
}
})();
if((partition_bits > (0))){
var lookup_table = cljs.core.get.cljs$core$IFn$_invoke$arity$2(devtools.munging.fast_path_protocols_lookup_table,partition);
var _ = ((cljs.core.map_QMARK_(lookup_table))?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("fast-path-protocols-lookup-table does not contain lookup table for partition "),cljs.core.str(partition)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$map_QMARK_,cljs.core.cst$sym$lookup_DASH_table)], 0)))].join('')))})());
var _STAR_ = ((function (lookup_table,_,partition_key,partition_bits){
return (function (accum,p__14810){
var vec__14811 = p__14810;
var bit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14811,(0),null);
var protocol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14811,(1),null);
if(((partition_bits & bit) === (0))){
return accum;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(accum,protocol);
}
});})(lookup_table,_,partition_key,partition_bits))
;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(_STAR_,cljs.core.PersistentVector.EMPTY,lookup_table);
} else {
return null;
}
});
devtools.munging.scan_fast_path_protocols = (function devtools$munging$scan_fast_path_protocols(obj){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(devtools.munging.scan_fast_path_protocols_partition,obj),cljs.core.range.cljs$core$IFn$_invoke$arity$1((2))));
});
devtools.munging.scan_slow_path_protocols = (function devtools$munging$scan_slow_path_protocols(obj){
var keys = goog.object.getKeys(obj);
var selectors = cljs.core.keep.cljs$core$IFn$_invoke$arity$2(devtools.munging.get_protocol_selector,keys);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(devtools.munging.demunge_protocol_selector,selectors);
});
devtools.munging.make_protocol_descriptor = (function devtools$munging$make_protocol_descriptor(ns,name,selector,fast_QMARK_){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$ns,ns,cljs.core.cst$kw$name,name,cljs.core.cst$kw$selector,selector,cljs.core.cst$kw$fast_QMARK_,fast_QMARK_], null);
});
devtools.munging.convert_to_protocol_descriptor = (function devtools$munging$convert_to_protocol_descriptor(fast_QMARK_,p__14812){
var vec__14814 = p__14812;
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14814,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14814,(1),null);
var selector = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14814,(2),null);
return devtools.munging.make_protocol_descriptor(ns,name,selector,fast_QMARK_);
});
devtools.munging.protocol_descriptors_comparator = (function devtools$munging$protocol_descriptors_comparator(a,b){
return cljs.core.compare(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(a),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(b));
});
devtools.munging.scan_protocols = (function devtools$munging$scan_protocols(obj){
var fast_path_protocols = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(devtools.munging.convert_to_protocol_descriptor,true),devtools.munging.scan_fast_path_protocols(obj));
var slow_path_protocols = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(devtools.munging.convert_to_protocol_descriptor,false),devtools.munging.scan_slow_path_protocols(obj));
var all_protocols = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fast_path_protocols,slow_path_protocols);
return cljs.core.sort.cljs$core$IFn$_invoke$arity$2(devtools.munging.protocol_descriptors_comparator,all_protocols);
});
devtools.munging.collect_protocol_methods = (function devtools$munging$collect_protocol_methods(obj,protocol_selector){
var key_prefix = clojure.string.replace(protocol_selector,/\./,"\\$");
var pattern = cljs.core.re_pattern([cljs.core.str("^"),cljs.core.str(key_prefix),cljs.core.str("\\$(.*)\\$arity\\$(\\d+)$")].join(''));
var all_keys = goog.object.getKeys(obj);
var matches = cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.re_matches,pattern),all_keys);
var methods$ = cljs.core.group_by(cljs.core.second,matches);
var match_to_arity = ((function (key_prefix,pattern,all_keys,matches,methods$){
return (function (match){
var arity = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(match,(2));
var o__12554__auto__ = window;
return goog.object.get(o__12554__auto__,"parseInt").call(o__12554__auto__,arity,(10));
});})(key_prefix,pattern,all_keys,matches,methods$))
;
var match_arity_comparator = ((function (key_prefix,pattern,all_keys,matches,methods$,match_to_arity){
return (function (a,b){
return cljs.core.compare(match_to_arity(a),match_to_arity(b));
});})(key_prefix,pattern,all_keys,matches,methods$,match_to_arity))
;
var post_process = ((function (key_prefix,pattern,all_keys,matches,methods$,match_to_arity,match_arity_comparator){
return (function (p__14820){
var vec__14821 = p__14820;
var munged_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14821,(0),null);
var matches__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14821,(1),null);
var name = devtools.munging.proper_demunge(munged_name);
var sorted_matches = cljs.core.sort.cljs$core$IFn$_invoke$arity$2(match_arity_comparator,matches__$1);
var sorted_fns = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (name,sorted_matches,vec__14821,munged_name,matches__$1,key_prefix,pattern,all_keys,matches,methods$,match_to_arity,match_arity_comparator){
return (function (p1__14815_SHARP_){
var G__14822 = obj;
var G__14823 = cljs.core.first(p1__14815_SHARP_);
return goog.object.get(G__14822,G__14823);
});})(name,sorted_matches,vec__14821,munged_name,matches__$1,key_prefix,pattern,all_keys,matches,methods$,match_to_arity,match_arity_comparator))
,sorted_matches);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,sorted_fns], null);
});})(key_prefix,pattern,all_keys,matches,methods$,match_to_arity,match_arity_comparator))
;
var by_name_comparator = ((function (key_prefix,pattern,all_keys,matches,methods$,match_to_arity,match_arity_comparator,post_process){
return (function (a,b){
return cljs.core.compare(cljs.core.first(a),cljs.core.first(b));
});})(key_prefix,pattern,all_keys,matches,methods$,match_to_arity,match_arity_comparator,post_process))
;
return cljs.core.sort.cljs$core$IFn$_invoke$arity$2(by_name_comparator,cljs.core.map.cljs$core$IFn$_invoke$arity$2(post_process,methods$));
});
