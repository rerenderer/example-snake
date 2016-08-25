// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('devtools.util');
goog.require('cljs.core');
goog.require('devtools.prefs');
goog.require('clojure.data');
goog.require('devtools.version');
goog.require('goog.userAgent');
goog.require('cljs.pprint');
goog.require('devtools.defaults');
devtools.util._STAR_custom_formatters_active_STAR_ = false;
devtools.util._STAR_console_open_STAR_ = false;
devtools.util._STAR_custom_formatters_warning_reported_STAR_ = false;
devtools.util.make_version_info = (function devtools$util$make_version_info(){
var version = devtools.version.get_current_version();
return [cljs.core.str("v"),cljs.core.str(version)].join('');
});
devtools.util.make_lib_info = (function devtools$util$make_lib_info(){
return [cljs.core.str("CLJS DevTools "),cljs.core.str(devtools.version.get_current_version())].join('');
});
devtools.util.unknown_feature_msg = (function devtools$util$unknown_feature_msg(feature,known_features,lib_info){
return [cljs.core.str("No such feature "),cljs.core.str(feature),cljs.core.str(" is currently available in "),cljs.core.str(lib_info),cljs.core.str(". "),cljs.core.str("The list of supported features is "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([known_features], 0))),cljs.core.str(".")].join('');
});
devtools.util.feature_not_available_msg = (function devtools$util$feature_not_available_msg(feature){
return [cljs.core.str("Feature "),cljs.core.str(feature),cljs.core.str(" cannot be installed. "),cljs.core.str("Unsupported browser "),cljs.core.str(goog.userAgent.getUserAgentString()),cljs.core.str(".")].join('');
});
devtools.util.custom_formatters_not_active_msg = (function devtools$util$custom_formatters_not_active_msg(){
return [cljs.core.str("CLJS DevTools: some custom formatters were not rendered.\n"),cljs.core.str("https://github.com/binaryage/cljs-devtools/blob/master/docs/faq.md#why-some-custom-formatters-were-not-rendered")].join('');
});
devtools.util.get_lib_info = (function devtools$util$get_lib_info(){
return (devtools.util.make_lib_info.cljs$core$IFn$_invoke$arity$0 ? devtools.util.make_lib_info.cljs$core$IFn$_invoke$arity$0() : devtools.util.make_lib_info.call(null));
});
devtools.util.formatter_key = "devtoolsFormatters";
devtools.util.get_formatters_safe = (function devtools$util$get_formatters_safe(){
var formatters = (window[devtools.util.formatter_key]);
if(cljs.core.array_QMARK_(formatters)){
return formatters;
} else {
return [];
}
});
devtools.util.set_formatters_safe_BANG_ = (function devtools$util$set_formatters_safe_BANG_(new_formatters){
if(((new_formatters == null)) || (cljs.core.array_QMARK_(new_formatters))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$or,cljs.core.list(cljs.core.cst$sym$nil_QMARK_,cljs.core.cst$sym$new_DASH_formatters),cljs.core.list(cljs.core.cst$sym$array_QMARK_,cljs.core.cst$sym$new_DASH_formatters))], 0)))].join('')));
}

return (window[devtools.util.formatter_key] = ((cljs.core.empty_QMARK_(new_formatters))?null:new_formatters));
});
devtools.util.print_config_overrides_if_requested_BANG_ = (function devtools$util$print_config_overrides_if_requested_BANG_(msg){
if(cljs.core.truth_(devtools.prefs.pref(cljs.core.cst$kw$print_DASH_config_DASH_overrides))){
var diff = cljs.core.second(clojure.data.diff(devtools.defaults.prefs,devtools.prefs.get_prefs()));
if(!(cljs.core.empty_QMARK_(diff))){
return console.info(msg,(function (){var sb__7130__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_14613_14615 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_14614_14616 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_14613_14615,_STAR_print_fn_STAR_14614_14616,sb__7130__auto__,diff){
return (function (x__7131__auto__){
return sb__7130__auto__.append(x__7131__auto__);
});})(_STAR_print_newline_STAR_14613_14615,_STAR_print_fn_STAR_14614_14616,sb__7130__auto__,diff))
;

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(diff);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_14614_14616;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_14613_14615;
}
return [cljs.core.str(sb__7130__auto__)].join('');
})());
} else {
return null;
}
} else {
return null;
}
});

/**
* @constructor
*/
devtools.util.CustomFormattersDetector = (function (){
})

devtools.util.CustomFormattersDetector.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

devtools.util.CustomFormattersDetector.cljs$lang$type = true;

devtools.util.CustomFormattersDetector.cljs$lang$ctorStr = "devtools.util/CustomFormattersDetector";

devtools.util.CustomFormattersDetector.cljs$lang$ctorPrWriter = (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write(writer__6755__auto__,"devtools.util/CustomFormattersDetector");
});

devtools.util.__GT_CustomFormattersDetector = (function devtools$util$__GT_CustomFormattersDetector(){
return (new devtools.util.CustomFormattersDetector());
});

devtools.util.make_detector = (function devtools$util$make_detector(){
var detector = (new devtools.util.CustomFormattersDetector());
(detector["header"] = ((function (detector){
return (function (_object,_config){
devtools.util._STAR_custom_formatters_active_STAR_ = true;

return null;
});})(detector))
);

(detector["hasBody"] = cljs.core.constantly(false));

(detector["body"] = cljs.core.constantly(null));

return detector;
});
devtools.util.install_detector_BANG_ = (function devtools$util$install_detector_BANG_(detector){
var formatters = devtools.util.get_formatters_safe();
formatters.push(detector);

return devtools.util.set_formatters_safe_BANG_(formatters);
});
devtools.util.uninstall_detector_BANG_ = (function devtools$util$uninstall_detector_BANG_(detector){
var current_formatters = (window[devtools.util.formatter_key]);
if(cljs.core.array_QMARK_(current_formatters)){
var new_formatters = current_formatters.filter(((function (current_formatters){
return (function (p1__14617_SHARP_){
return !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(detector,p1__14617_SHARP_));
});})(current_formatters))
);
return devtools.util.set_formatters_safe_BANG_(new_formatters);
} else {
return null;
}
});
devtools.util.check_custom_formatters_active_BANG_ = (function devtools$util$check_custom_formatters_active_BANG_(){
if(cljs.core.truth_((function (){var and__6144__auto__ = devtools.util._STAR_console_open_STAR_;
if(cljs.core.truth_(and__6144__auto__)){
return cljs.core.not(devtools.util._STAR_custom_formatters_active_STAR_);
} else {
return and__6144__auto__;
}
})())){
if(cljs.core.truth_(devtools.util._STAR_custom_formatters_warning_reported_STAR_)){
return null;
} else {
devtools.util._STAR_custom_formatters_warning_reported_STAR_ = true;

return console.warn((devtools.util.custom_formatters_not_active_msg.cljs$core$IFn$_invoke$arity$0 ? devtools.util.custom_formatters_not_active_msg.cljs$core$IFn$_invoke$arity$0() : devtools.util.custom_formatters_not_active_msg.call(null)));
}
} else {
return null;
}
});
devtools.util.uninstall_detector_and_check_custom_formatters_active_BANG_ = (function devtools$util$uninstall_detector_and_check_custom_formatters_active_BANG_(detector){
devtools.util.uninstall_detector_BANG_(detector);

return devtools.util.check_custom_formatters_active_BANG_();
});
devtools.util.make_detection_printer = (function devtools$util$make_detection_printer(){
var f = (function (){
return null;
});
var G__14622_14626 = f;
var target__12573__auto___14627 = G__14622_14626;
if(cljs.core.truth_(target__12573__auto___14627)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("unable to locate object path "),cljs.core.str(null),cljs.core.str(" in "),cljs.core.str(G__14622_14626)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$sym$target__12573__auto__], 0)))].join('')));
}

var G__14623_14628 = target__12573__auto___14627;
var G__14624_14629 = cljs.core.last(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["toString"], null));
var G__14625_14630 = ((function (G__14623_14628,G__14624_14629,G__14622_14626,target__12573__auto___14627,f){
return (function (){
devtools.util._STAR_console_open_STAR_ = true;

setTimeout(devtools.util.check_custom_formatters_active_BANG_,(0));

return "";
});})(G__14623_14628,G__14624_14629,G__14622_14626,target__12573__auto___14627,f))
;
goog.object.set(G__14623_14628,G__14624_14629,G__14625_14630);


return f;
});
devtools.util.wrap_with_custom_formatter_detection_BANG_ = (function devtools$util$wrap_with_custom_formatter_detection_BANG_(f){
if(cljs.core.not(devtools.prefs.pref(cljs.core.cst$kw$dont_DASH_detect_DASH_custom_DASH_formatters))){
var detector = devtools.util.make_detector();
devtools.util.install_detector_BANG_(detector);

var G__14636_14641 = "%c%s";
var G__14637_14642 = "color:transparent";
var G__14638_14643 = devtools.util.make_detection_printer();
(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__14636_14641,G__14637_14642,G__14638_14643) : f.call(null,G__14636_14641,G__14637_14642,G__14638_14643));

var G__14639 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(devtools.util.uninstall_detector_and_check_custom_formatters_active_BANG_,detector);
var G__14640 = (0);
return setTimeout(G__14639,G__14640);
} else {
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}
});
devtools.util.feature_for_display = (function devtools$util$feature_for_display(installed_features,feature){
var color = (cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.fromArray([feature], true),installed_features))?"color:#0000ff":"color:#ccc");
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["%c%s",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [color,[cljs.core.str(feature)].join('')], null)], null);
});
devtools.util.feature_list_display = (function devtools$util$feature_list_display(installed_features,feature_groups){
var labels = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(devtools.util.feature_for_display,installed_features),cljs.core.cst$kw$all.cljs$core$IFn$_invoke$arity$1(feature_groups));
var _STAR_ = ((function (labels){
return (function (accum,val){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(cljs.core.first(accum)),cljs.core.str(" "),cljs.core.str(cljs.core.first(val))].join(''),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.second(accum),cljs.core.second(val))], null);
});})(labels))
;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(_STAR_,cljs.core.first(labels),cljs.core.rest(labels));
});
devtools.util.display_banner_BANG_ = (function devtools$util$display_banner_BANG_(var_args){
var args__7221__auto__ = [];
var len__7214__auto___14649 = arguments.length;
var i__7215__auto___14650 = (0);
while(true){
if((i__7215__auto___14650 < len__7214__auto___14649)){
args__7221__auto__.push((arguments[i__7215__auto___14650]));

var G__14651 = (i__7215__auto___14650 + (1));
i__7215__auto___14650 = G__14651;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((3) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((3)),(0))):null);
return devtools.util.display_banner_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7222__auto__);
});

devtools.util.display_banner_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (installed_features,feature_groups,fmt,params){
var vec__14648 = devtools.util.feature_list_display(installed_features,feature_groups);
var fmt_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14648,(0),null);
var fmt_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14648,(1),null);
return devtools.util.wrap_with_custom_formatter_detection_BANG_(((function (vec__14648,fmt_str,fmt_params){
return (function() { 
var G__14652__delegate = function (add_fmt,add_args){
var items = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(fmt),cljs.core.str(" "),cljs.core.str(fmt_str),cljs.core.str(add_fmt)].join('')], null),params,cljs.core.array_seq([fmt_params,add_args], 0));
return console.info.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(items));
};
var G__14652 = function (add_fmt,var_args){
var add_args = null;
if (arguments.length > 1) {
var G__14653__i = 0, G__14653__a = new Array(arguments.length -  1);
while (G__14653__i < G__14653__a.length) {G__14653__a[G__14653__i] = arguments[G__14653__i + 1]; ++G__14653__i;}
  add_args = new cljs.core.IndexedSeq(G__14653__a,0);
} 
return G__14652__delegate.call(this,add_fmt,add_args);};
G__14652.cljs$lang$maxFixedArity = 1;
G__14652.cljs$lang$applyTo = (function (arglist__14654){
var add_fmt = cljs.core.first(arglist__14654);
var add_args = cljs.core.rest(arglist__14654);
return G__14652__delegate(add_fmt,add_args);
});
G__14652.cljs$core$IFn$_invoke$arity$variadic = G__14652__delegate;
return G__14652;
})()
;})(vec__14648,fmt_str,fmt_params))
);
});

devtools.util.display_banner_BANG_.cljs$lang$maxFixedArity = (3);

devtools.util.display_banner_BANG_.cljs$lang$applyTo = (function (seq14644){
var G__14645 = cljs.core.first(seq14644);
var seq14644__$1 = cljs.core.next(seq14644);
var G__14646 = cljs.core.first(seq14644__$1);
var seq14644__$2 = cljs.core.next(seq14644__$1);
var G__14647 = cljs.core.first(seq14644__$2);
var seq14644__$3 = cljs.core.next(seq14644__$2);
return devtools.util.display_banner_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14645,G__14646,G__14647,seq14644__$3);
});
devtools.util.display_banner_if_needed_BANG_ = (function devtools$util$display_banner_if_needed_BANG_(features_to_install,feature_groups){
if(cljs.core.not(devtools.prefs.pref(cljs.core.cst$kw$dont_DASH_display_DASH_banner))){
var banner = [cljs.core.str("Installing %c%s%c and enabling features")].join('');
var lib_info_style = "color:black;font-weight:bold;";
var reset_style = "color:black";
return devtools.util.display_banner_BANG_.cljs$core$IFn$_invoke$arity$variadic(features_to_install,feature_groups,banner,cljs.core.array_seq([lib_info_style,devtools.util.get_lib_info(),reset_style], 0));
} else {
return devtools.util._STAR_custom_formatters_active_STAR_ = true;
}
});
devtools.util.report_unknown_features_BANG_ = (function devtools$util$report_unknown_features_BANG_(features,known_features){
var lib_info = devtools.util.get_lib_info();
var seq__14659 = cljs.core.seq(features);
var chunk__14660 = null;
var count__14661 = (0);
var i__14662 = (0);
while(true){
if((i__14662 < count__14661)){
var feature = chunk__14660.cljs$core$IIndexed$_nth$arity$2(null,i__14662);
if(cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.fromArray([feature], true),known_features))){
console.warn((devtools.util.unknown_feature_msg.cljs$core$IFn$_invoke$arity$3 ? devtools.util.unknown_feature_msg.cljs$core$IFn$_invoke$arity$3(feature,known_features,lib_info) : devtools.util.unknown_feature_msg.call(null,feature,known_features,lib_info)));
} else {
}

var G__14663 = seq__14659;
var G__14664 = chunk__14660;
var G__14665 = count__14661;
var G__14666 = (i__14662 + (1));
seq__14659 = G__14663;
chunk__14660 = G__14664;
count__14661 = G__14665;
i__14662 = G__14666;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__14659);
if(temp__4657__auto__){
var seq__14659__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14659__$1)){
var c__6959__auto__ = cljs.core.chunk_first(seq__14659__$1);
var G__14667 = cljs.core.chunk_rest(seq__14659__$1);
var G__14668 = c__6959__auto__;
var G__14669 = cljs.core.count(c__6959__auto__);
var G__14670 = (0);
seq__14659 = G__14667;
chunk__14660 = G__14668;
count__14661 = G__14669;
i__14662 = G__14670;
continue;
} else {
var feature = cljs.core.first(seq__14659__$1);
if(cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.fromArray([feature], true),known_features))){
console.warn((devtools.util.unknown_feature_msg.cljs$core$IFn$_invoke$arity$3 ? devtools.util.unknown_feature_msg.cljs$core$IFn$_invoke$arity$3(feature,known_features,lib_info) : devtools.util.unknown_feature_msg.call(null,feature,known_features,lib_info)));
} else {
}

var G__14671 = cljs.core.next(seq__14659__$1);
var G__14672 = null;
var G__14673 = (0);
var G__14674 = (0);
seq__14659 = G__14671;
chunk__14660 = G__14672;
count__14661 = G__14673;
i__14662 = G__14674;
continue;
}
} else {
return null;
}
}
break;
}
});
devtools.util.is_known_feature_QMARK_ = (function devtools$util$is_known_feature_QMARK_(known_features,feature){
return cljs.core.boolean$(cljs.core.some(cljs.core.PersistentHashSet.fromArray([feature], true),known_features));
});
devtools.util.convert_legacy_feature = (function devtools$util$convert_legacy_feature(feature){
var G__14676 = (((feature instanceof cljs.core.Keyword))?feature.fqn:null);
switch (G__14676) {
case "custom-formatters":
return cljs.core.cst$kw$formatters;

break;
case "sanity-hints":
return cljs.core.cst$kw$hints;

break;
default:
return feature;

}
});
devtools.util.convert_legacy_features = (function devtools$util$convert_legacy_features(features){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(devtools.util.convert_legacy_feature,features);
});
devtools.util.sanititze_features_BANG_ = (function devtools$util$sanititze_features_BANG_(features,feature_groups){
var known_features = cljs.core.cst$kw$all.cljs$core$IFn$_invoke$arity$1(feature_groups);
var features__$1 = devtools.util.convert_legacy_features(features);
devtools.util.report_unknown_features_BANG_(features__$1,known_features);

return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(devtools.util.is_known_feature_QMARK_,known_features),features__$1);
});
devtools.util.resolve_features_BANG_ = (function devtools$util$resolve_features_BANG_(features_desc,feature_groups){
var features = (cljs.core.truth_((function (){var and__6144__auto__ = (features_desc instanceof cljs.core.Keyword);
if(and__6144__auto__){
return (features_desc.cljs$core$IFn$_invoke$arity$1 ? features_desc.cljs$core$IFn$_invoke$arity$1(feature_groups) : features_desc.call(null,feature_groups));
} else {
return and__6144__auto__;
}
})())?(features_desc.cljs$core$IFn$_invoke$arity$1 ? features_desc.cljs$core$IFn$_invoke$arity$1(feature_groups) : features_desc.call(null,feature_groups)):(((features_desc == null))?cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(feature_groups):((cljs.core.seqable_QMARK_(features_desc))?features_desc:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [features_desc], null)
)));
return devtools.util.sanititze_features_BANG_(features,feature_groups);
});
devtools.util.install_feature_BANG_ = (function devtools$util$install_feature_BANG_(feature,features_to_install,available_fn,install_fn){
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.fromArray([feature], true),features_to_install))){
if(cljs.core.truth_((function (){var or__6156__auto__ = devtools.prefs.pref(cljs.core.cst$kw$bypass_DASH_availability_DASH_checks);
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return (available_fn.cljs$core$IFn$_invoke$arity$1 ? available_fn.cljs$core$IFn$_invoke$arity$1(feature) : available_fn.call(null,feature));
}
})())){
return (install_fn.cljs$core$IFn$_invoke$arity$0 ? install_fn.cljs$core$IFn$_invoke$arity$0() : install_fn.call(null));
} else {
return console.warn((devtools.util.feature_not_available_msg.cljs$core$IFn$_invoke$arity$1 ? devtools.util.feature_not_available_msg.cljs$core$IFn$_invoke$arity$1(feature) : devtools.util.feature_not_available_msg.call(null,feature)));
}
} else {
return null;
}
});
