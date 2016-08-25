// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('cljs.stacktrace');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('clojure.string');
if(typeof cljs.stacktrace.parse_stacktrace !== 'undefined'){
} else {
/**
 * Parse a JavaScript stacktrace string into a canonical data form. The
 *   arguments:
 * 
 *   repl-env - the repl environment, an optional map with :host and :port keys
 *           if the stacktrace includes url, not file references
 *   st       - the original stacktrace string to parse
 *   err      - an error map. :ua-product key defines the type of stacktrace parser
 *           to use, for example :chrome
 *   opts     - additional options. :output-dir maybe given in this argument if
 *           :host and :port do not apply, for example, a file path
 * 
 *   The canonical stacktrace representation can easily be mapped to a
 *   ClojureScript one see mapped-stacktrace and mapped-stacktrace-str
 */
cljs.stacktrace.parse_stacktrace = (function (){var method_table__7069__auto__ = (function (){var G__22715 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22715) : cljs.core.atom.call(null,G__22715));
})();
var prefer_table__7070__auto__ = (function (){var G__22716 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22716) : cljs.core.atom.call(null,G__22716));
})();
var method_cache__7071__auto__ = (function (){var G__22717 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22717) : cljs.core.atom.call(null,G__22717));
})();
var cached_hierarchy__7072__auto__ = (function (){var G__22718 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22718) : cljs.core.atom.call(null,G__22718));
})();
var hierarchy__7073__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.stacktrace","parse-stacktrace"),((function (method_table__7069__auto__,prefer_table__7070__auto__,method_cache__7071__auto__,cached_hierarchy__7072__auto__,hierarchy__7073__auto__){
return (function (repl_env,st,err,opts){
return cljs.core.cst$kw$ua_DASH_product.cljs$core$IFn$_invoke$arity$1(err);
});})(method_table__7069__auto__,prefer_table__7070__auto__,method_cache__7071__auto__,cached_hierarchy__7072__auto__,hierarchy__7073__auto__))
,cljs.core.cst$kw$default,hierarchy__7073__auto__,method_table__7069__auto__,prefer_table__7070__auto__,method_cache__7071__auto__,cached_hierarchy__7072__auto__));
})();
}
cljs.stacktrace.parse_int = (function cljs$stacktrace$parse_int(s){
return parseInt(s,(10));
});
cljs.stacktrace.starts_with_QMARK_ = (function cljs$stacktrace$starts_with_QMARK_(s0,s1){
return goog.string.startsWith(s0,s1);
});
cljs.stacktrace.ends_with_QMARK_ = (function cljs$stacktrace$ends_with_QMARK_(s0,s1){
return goog.string.endsWith(s0,s1);
});
cljs.stacktrace.string__GT_regex = (function cljs$stacktrace$string__GT_regex(s){
return (new RegExp(s));
});
cljs.stacktrace.output_directory = (function cljs$stacktrace$output_directory(opts){
var or__6156__auto__ = cljs.core.cst$kw$output_DASH_dir.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return "out";
}
});
cljs.stacktrace.parse_stacktrace.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (repl_env,st,err,opts){
return st;
}));
cljs.stacktrace.parse_file_line_column = (function cljs$stacktrace$parse_file_line_column(flc){
if(cljs.core.not(cljs.core.re_find(/:/,flc))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [flc,null,null], null);
} else {
var xs = clojure.string.split.cljs$core$IFn$_invoke$arity$2(flc,/:/);
var vec__22728 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (xs){
return (function (p__22730,p__22731){
var vec__22732 = p__22730;
var pre = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22732,(0),null);
var post = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22732,(1),null);
var vec__22733 = p__22731;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22733,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22733,(1),null);
if((i <= (2))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pre,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(post,x)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(pre,x),post], null);
}
});})(xs))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,xs,cljs.core.range.cljs$core$IFn$_invoke$arity$3(cljs.core.count(xs),(0),(-1))));
var pre = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22728,(0),null);
var vec__22729 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22728,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22729,(0),null);
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22729,(1),null);
var file = clojure.string.join.cljs$core$IFn$_invoke$arity$2(":",pre);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__22734 = file;
if(cljs.stacktrace.starts_with_QMARK_(file,"(")){
return clojure.string.replace(G__22734,"(","");
} else {
return G__22734;
}
})(),cljs.stacktrace.parse_int((function (){var G__22735 = line;
if(cljs.stacktrace.ends_with_QMARK_(line,")")){
return clojure.string.replace(G__22735,")","");
} else {
return G__22735;
}
})()),cljs.stacktrace.parse_int((function (){var G__22736 = column;
if(cljs.stacktrace.ends_with_QMARK_(column,")")){
return clojure.string.replace(G__22736,")","");
} else {
return G__22736;
}
})())], null);
}
});
/**
 * Given a browser file url convert it into a relative path that can be used
 * to locate the original source.
 */
cljs.stacktrace.parse_file = (function cljs$stacktrace$parse_file(p__22737,file,p__22738){
var map__22743 = p__22737;
var map__22743__$1 = ((((!((map__22743 == null)))?((((map__22743.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22743.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22743):map__22743);
var repl_env = map__22743__$1;
var host = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22743__$1,cljs.core.cst$kw$host);
var host_port = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22743__$1,cljs.core.cst$kw$host_DASH_port);
var port = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22743__$1,cljs.core.cst$kw$port);
var map__22744 = p__22738;
var map__22744__$1 = ((((!((map__22744 == null)))?((((map__22744.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22744.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22744):map__22744);
var opts = map__22744__$1;
var asset_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22744__$1,cljs.core.cst$kw$asset_DASH_path);
var urlpat = (cljs.core.truth_(host)?cljs.stacktrace.string__GT_regex([cljs.core.str("http://"),cljs.core.str(host),cljs.core.str(":"),cljs.core.str((function (){var or__6156__auto__ = host_port;
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return port;
}
})()),cljs.core.str("/")].join('')):"");
var match = (cljs.core.truth_(host)?cljs.core.re_find(urlpat,file):cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$output_DASH_dir));
if(cljs.core.truth_(match)){
return clojure.string.replace(clojure.string.replace(file,urlpat,""),cljs.stacktrace.string__GT_regex([cljs.core.str("^"),cljs.core.str((function (){var or__6156__auto__ = (function (){var and__6144__auto__ = asset_path;
if(cljs.core.truth_(and__6144__auto__)){
return clojure.string.replace(asset_path,/^\//,"");
} else {
return and__6144__auto__;
}
})();
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return cljs.stacktrace.output_directory(opts);
}
})()),cljs.core.str("/")].join('')),"");
} else {
var temp__4655__auto__ = cljs.core.cst$kw$asset_DASH_root.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4655__auto__)){
var asset_root = temp__4655__auto__;
return clojure.string.replace(file,asset_root,"");
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Could not relativize URL "),cljs.core.str(file)].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$parse_DASH_stacktrace,cljs.core.cst$kw$reason,cljs.core.cst$kw$relativize_DASH_url], null));
}
}
});
cljs.stacktrace.chrome_st_el__GT_frame = (function cljs$stacktrace$chrome_st_el__GT_frame(repl_env,st_el,opts){
var xs = clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.replace(st_el,/\s+at\s+/,""),/\s+/);
var vec__22749 = ((((1) === cljs.core.count(xs)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.first(xs)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(xs),cljs.core.last(xs)], null));
var function$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22749,(0),null);
var flc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22749,(1),null);
var vec__22750 = cljs.stacktrace.parse_file_line_column(flc);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22750,(0),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22750,(1),null);
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22750,(2),null);
if(cljs.core.truth_((function (){var and__6144__auto__ = file;
if(cljs.core.truth_(and__6144__auto__)){
var and__6144__auto____$1 = function$;
if(cljs.core.truth_(and__6144__auto____$1)){
var and__6144__auto____$2 = line;
if(cljs.core.truth_(and__6144__auto____$2)){
return column;
} else {
return and__6144__auto____$2;
}
} else {
return and__6144__auto____$1;
}
} else {
return and__6144__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$file,cljs.stacktrace.parse_file(repl_env,file,opts),cljs.core.cst$kw$function,clojure.string.replace(function$,/Object\./,""),cljs.core.cst$kw$line,line,cljs.core.cst$kw$column,column], null);
} else {
if(clojure.string.blank_QMARK_(function$)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$file,null,cljs.core.cst$kw$function,clojure.string.replace(function$,/Object\./,""),cljs.core.cst$kw$line,null,cljs.core.cst$kw$column,null], null);
}
}
});
cljs.stacktrace.parse_stacktrace.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$chrome,(function (repl_env,st,err,opts){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__22753_SHARP_){
return cljs.stacktrace.chrome_st_el__GT_frame(repl_env,p1__22753_SHARP_,opts);
}),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__22752_SHARP_){
return !(cljs.stacktrace.starts_with_QMARK_(p1__22752_SHARP_,"    at eval"));
}),cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__22751_SHARP_){
return cljs.stacktrace.starts_with_QMARK_(p1__22751_SHARP_,"Error");
}),clojure.string.split_lines(st))))));
}));
cljs.stacktrace.safari_st_el__GT_frame = (function cljs$stacktrace$safari_st_el__GT_frame(repl_env,st_el,opts){
var vec__22756 = (cljs.core.truth_(cljs.core.re_find(/@/,st_el))?clojure.string.split.cljs$core$IFn$_invoke$arity$2(st_el,/@/):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,st_el], null));
var function$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22756,(0),null);
var flc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22756,(1),null);
var vec__22757 = cljs.stacktrace.parse_file_line_column(flc);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22757,(0),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22757,(1),null);
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22757,(2),null);
if(cljs.core.truth_((function (){var and__6144__auto__ = file;
if(cljs.core.truth_(and__6144__auto__)){
var and__6144__auto____$1 = function$;
if(cljs.core.truth_(and__6144__auto____$1)){
var and__6144__auto____$2 = line;
if(cljs.core.truth_(and__6144__auto____$2)){
return column;
} else {
return and__6144__auto____$2;
}
} else {
return and__6144__auto____$1;
}
} else {
return and__6144__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$file,cljs.stacktrace.parse_file(repl_env,file,opts),cljs.core.cst$kw$function,clojure.string.trim(function$),cljs.core.cst$kw$line,line,cljs.core.cst$kw$column,column], null);
} else {
if(clojure.string.blank_QMARK_(function$)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$file,null,cljs.core.cst$kw$function,clojure.string.trim(function$),cljs.core.cst$kw$line,null,cljs.core.cst$kw$column,null], null);
}
}
});
cljs.stacktrace.parse_stacktrace.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$safari,(function (repl_env,st,err,opts){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__22760_SHARP_){
return cljs.stacktrace.safari_st_el__GT_frame(repl_env,p1__22760_SHARP_,opts);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__22759_SHARP_){
return !(cljs.stacktrace.starts_with_QMARK_(p1__22759_SHARP_,"eval code"));
}),cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__22758_SHARP_){
return cljs.stacktrace.starts_with_QMARK_(p1__22758_SHARP_,"Error");
}),clojure.string.split_lines(st)))))));
}));
cljs.stacktrace.firefox_clean_function = (function cljs$stacktrace$firefox_clean_function(f){
var f__$1 = f;
var f__$2 = ((clojure.string.blank_QMARK_(f__$1))?null:((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(f__$1.indexOf("</"),(-1)))?(function (){var idx = f__$1.indexOf("</");
return f__$1.substring((idx + (2)));
})():f__$1
));
return clojure.string.replace(clojure.string.replace(f__$2,/</,""),(new RegExp("\\/")),"");
});
cljs.stacktrace.firefox_st_el__GT_frame = (function cljs$stacktrace$firefox_st_el__GT_frame(repl_env,st_el,opts){
var vec__22763 = (cljs.core.truth_(cljs.core.re_find(/@/,st_el))?clojure.string.split.cljs$core$IFn$_invoke$arity$2(st_el,/@/):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,st_el], null));
var function$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22763,(0),null);
var flc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22763,(1),null);
var vec__22764 = cljs.stacktrace.parse_file_line_column(flc);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22764,(0),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22764,(1),null);
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22764,(2),null);
if(cljs.core.truth_((function (){var and__6144__auto__ = file;
if(cljs.core.truth_(and__6144__auto__)){
var and__6144__auto____$1 = function$;
if(cljs.core.truth_(and__6144__auto____$1)){
var and__6144__auto____$2 = line;
if(cljs.core.truth_(and__6144__auto____$2)){
return column;
} else {
return and__6144__auto____$2;
}
} else {
return and__6144__auto____$1;
}
} else {
return and__6144__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$file,cljs.stacktrace.parse_file(repl_env,file,opts),cljs.core.cst$kw$function,cljs.stacktrace.firefox_clean_function(function$),cljs.core.cst$kw$line,line,cljs.core.cst$kw$column,column], null);
} else {
if(clojure.string.blank_QMARK_(function$)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$file,null,cljs.core.cst$kw$function,cljs.stacktrace.firefox_clean_function(function$),cljs.core.cst$kw$line,null,cljs.core.cst$kw$column,null], null);
}
}
});
cljs.stacktrace.parse_stacktrace.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$firefox,(function (repl_env,st,err,opts){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__22767_SHARP_){
return cljs.stacktrace.firefox_st_el__GT_frame(repl_env,p1__22767_SHARP_,opts);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__22766_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__22766_SHARP_.indexOf("> eval"),(-1));
}),cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__22765_SHARP_){
return cljs.stacktrace.starts_with_QMARK_(p1__22765_SHARP_,"Error");
}),clojure.string.split_lines(st)))))));
}));
cljs.stacktrace.parse_stacktrace.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$rhino,(function (repl_env,st,err,p__22768){
var map__22769 = p__22768;
var map__22769__$1 = ((((!((map__22769 == null)))?((((map__22769.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22769.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22769):map__22769);
var opts = map__22769__$1;
var output_dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22769__$1,cljs.core.cst$kw$output_DASH_dir);
var process_frame = ((function (map__22769,map__22769__$1,opts,output_dir){
return (function cljs$stacktrace$process_frame(frame_str){
if((clojure.string.blank_QMARK_(frame_str)) || (((-1) === frame_str.indexOf("\tat")))){
return null;
} else {
var vec__22777 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(frame_str,/:/);
var file_side = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22777,(0),null);
var line_fn_side = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22777,(1),null);
var file = clojure.string.replace(file_side,/\s+at\s+/,"");
var vec__22778 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(line_fn_side,/\s+/);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22778,(0),null);
var function$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22778,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$file,clojure.string.replace(file,[cljs.core.str(output_dir),cljs.core.str("/")].join(''),""),cljs.core.cst$kw$function,(cljs.core.truth_(function$)?clojure.string.replace(clojure.string.replace(function$,"(",""),")",""):null),cljs.core.cst$kw$line,(cljs.core.truth_((function (){var and__6144__auto__ = line;
if(cljs.core.truth_(and__6144__auto__)){
return !(clojure.string.blank_QMARK_(line));
} else {
return and__6144__auto__;
}
})())?cljs.stacktrace.parse_int(line):null),cljs.core.cst$kw$column,(0)], null);
}
});})(map__22769,map__22769__$1,opts,output_dir))
;
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(process_frame,clojure.string.split.cljs$core$IFn$_invoke$arity$2(st,/\n/))));
}));
cljs.stacktrace.parse_stacktrace.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$nashorn,(function (repl_env,st,err,p__22779){
var map__22780 = p__22779;
var map__22780__$1 = ((((!((map__22780 == null)))?((((map__22780.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22780.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22780):map__22780);
var opts = map__22780__$1;
var output_dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22780__$1,cljs.core.cst$kw$output_DASH_dir);
var process_frame = ((function (map__22780,map__22780__$1,opts,output_dir){
return (function cljs$stacktrace$process_frame(frame_str){
if((clojure.string.blank_QMARK_(frame_str)) || (((-1) === frame_str.indexOf("\tat")))){
return null;
} else {
var frame_str__$1 = clojure.string.replace(frame_str,/\s+at\s+/,"");
var vec__22788 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(frame_str__$1,/\s+/);
var function$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22788,(0),null);
var file_and_line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22788,(1),null);
var vec__22789 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(file_and_line,/:/);
var file_part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22789,(0),null);
var line_part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22789,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$file,clojure.string.replace(file_part.substring((1)),[cljs.core.str(output_dir),cljs.core.str("/")].join(''),""),cljs.core.cst$kw$function,function$,cljs.core.cst$kw$line,(cljs.core.truth_((function (){var and__6144__auto__ = line_part;
if(cljs.core.truth_(and__6144__auto__)){
return !(clojure.string.blank_QMARK_(line_part));
} else {
return and__6144__auto__;
}
})())?cljs.stacktrace.parse_int(line_part.substring((0),(cljs.core.count(line_part) - (1)))):null),cljs.core.cst$kw$column,(0)], null);
}
});})(map__22780,map__22780__$1,opts,output_dir))
;
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(process_frame,clojure.string.split.cljs$core$IFn$_invoke$arity$2(st,/\n/))));
}));
cljs.stacktrace.remove_ext = (function cljs$stacktrace$remove_ext(file){
return clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(file,/\.js$/,""),/\.cljs$/,""),/\.cljc$/,""),/\.clj$/,"");
});
/**
 * Given a cljs.source-map source map data structure map a generated line
 * and column back to the original line, column, and function called.
 */
cljs.stacktrace.mapped_line_column_call = (function cljs$stacktrace$mapped_line_column_call(sms,file,line,column){
var source_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(sms,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(cljs.stacktrace.remove_ext(file),"/",".")));
var get_best_column = ((function (source_map){
return (function cljs$stacktrace$mapped_line_column_call_$_get_best_column(columns,column__$1){
return cljs.core.last((function (){var or__6156__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(columns,cljs.core.last(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (source_map){
return (function (p1__22790_SHARP_){
return (p1__22790_SHARP_ <= (column__$1 - (1)));
});})(source_map))
,cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.keys(columns)))));
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return cljs.core.second(cljs.core.first(columns));
}
})());
});})(source_map))
;
var adjust = ((function (source_map){
return (function cljs$stacktrace$mapped_line_column_call_$_adjust(mapped){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (source_map){
return (function (p1__22791_SHARP_,p2__22792_SHARP_){
return (p1__22791_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__22791_SHARP_.cljs$core$IFn$_invoke$arity$1(p2__22792_SHARP_) : p1__22791_SHARP_.call(null,p2__22792_SHARP_));
});})(source_map))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.inc,cljs.core.inc,cljs.core.identity], null),mapped));
});})(source_map))
;
var default$ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,column,null], null);
var temp__4655__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(source_map,(line - (1)));
if(cljs.core.truth_(temp__4655__auto__)){
var columns = temp__4655__auto__;
return adjust(cljs.core.map.cljs$core$IFn$_invoke$arity$2(get_best_column(columns,column),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,cljs.core.cst$kw$col,cljs.core.cst$kw$name], null)));
} else {
return default$;
}
});
/**
 * Given opts and a canonicalized JavaScript stacktrace frame, return the
 *   ClojureScript frame.
 */
cljs.stacktrace.mapped_frame = (function cljs$stacktrace$mapped_frame(p__22793,sms,opts){
var map__22797 = p__22793;
var map__22797__$1 = ((((!((map__22797 == null)))?((((map__22797.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22797.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22797):map__22797);
var function$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22797__$1,cljs.core.cst$kw$function);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22797__$1,cljs.core.cst$kw$file);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22797__$1,cljs.core.cst$kw$line);
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22797__$1,cljs.core.cst$kw$column);
var no_source_file_QMARK_ = ((cljs.core.not(file))?true:cljs.stacktrace.starts_with_QMARK_(file,"<"));
var vec__22799 = ((no_source_file_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,column,null], null):cljs.stacktrace.mapped_line_column_call(sms,file,line,column));
var line_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22799,(0),null);
var column_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22799,(1),null);
var call = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22799,(2),null);
var file_SINGLEQUOTE_ = ((no_source_file_QMARK_)?null:((cljs.stacktrace.ends_with_QMARK_(file,".js"))?[cljs.core.str(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(file,(0),(cljs.core.count(file) - (3)))),cljs.core.str(".cljs")].join(''):file));
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$function,function$,cljs.core.cst$kw$call,call,cljs.core.cst$kw$file,((no_source_file_QMARK_)?[cljs.core.str("NO_SOURCE_FILE"),cljs.core.str((cljs.core.truth_(file)?[cljs.core.str(" "),cljs.core.str(file)].join(''):null))].join(''):file_SINGLEQUOTE_),cljs.core.cst$kw$line,line_SINGLEQUOTE_,cljs.core.cst$kw$column,column_SINGLEQUOTE_], null);
});
/**
 * Given a vector representing the canonicalized JavaScript stacktrace
 * return the ClojureScript stacktrace. The canonical stacktrace must be
 * in the form:
 * 
 *  [{:file <string>
 *    :function <string>
 *    :line <integer>
 *    :column <integer>}*]
 * 
 * :file must be a URL path (without protocol) relative to :output-dir or a
 * identifier delimited by angle brackets. The returned mapped stacktrace will
 * also contain :url entries to the original sources if it can be determined
 * from the classpath.
 */
cljs.stacktrace.mapped_stacktrace = (function cljs$stacktrace$mapped_stacktrace(var_args){
var args22802 = [];
var len__7214__auto___22805 = arguments.length;
var i__7215__auto___22806 = (0);
while(true){
if((i__7215__auto___22806 < len__7214__auto___22805)){
args22802.push((arguments[i__7215__auto___22806]));

var G__22807 = (i__7215__auto___22806 + (1));
i__7215__auto___22806 = G__22807;
continue;
} else {
}
break;
}

var G__22804 = args22802.length;
switch (G__22804) {
case 2:
return cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22802.length)].join('')));

}
});

cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$2 = (function (stacktrace,sms){
return cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$3(stacktrace,sms,null);
});

cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$3 = (function (stacktrace,sms,opts){
var call__GT_function = (function cljs$stacktrace$call__GT_function(x){
if(cljs.core.truth_(cljs.core.cst$kw$call.cljs$core$IFn$_invoke$arity$1(x))){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$function],[cljs.core.cst$kw$call.cljs$core$IFn$_invoke$arity$1(x)]);
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
var call_merge = (function cljs$stacktrace$call_merge(function$,call){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic((function (munged_fn_name,unmunged_call_name){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(munged_fn_name,clojure.string.replace(cljs.core.munge(unmunged_call_name),".","$"))){
return unmunged_call_name;
} else {
return munged_fn_name;
}
}),cljs.core.array_seq([function$,call], 0));
});
var mapped_frames = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.memoize((function (p1__22800_SHARP_){
return cljs.stacktrace.mapped_frame(p1__22800_SHARP_,sms,opts);
})),stacktrace);
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$3(call_merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (mapped_frames){
return (function (p1__22801_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__22801_SHARP_,cljs.core.cst$kw$call);
});})(mapped_frames))
,mapped_frames),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(cljs.core.map.cljs$core$IFn$_invoke$arity$2(call__GT_function,mapped_frames)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY], null))));
});

cljs.stacktrace.mapped_stacktrace.cljs$lang$maxFixedArity = 3;
/**
 * Given a vector representing the canonicalized JavaScript stacktrace and a map
 *   of library names to decoded source maps, print the ClojureScript stacktrace .
 *   See mapped-stacktrace.
 */
cljs.stacktrace.mapped_stacktrace_str = (function cljs$stacktrace$mapped_stacktrace_str(var_args){
var args22809 = [];
var len__7214__auto___22822 = arguments.length;
var i__7215__auto___22823 = (0);
while(true){
if((i__7215__auto___22823 < len__7214__auto___22822)){
args22809.push((arguments[i__7215__auto___22823]));

var G__22824 = (i__7215__auto___22823 + (1));
i__7215__auto___22823 = G__22824;
continue;
} else {
}
break;
}

var G__22811 = args22809.length;
switch (G__22811) {
case 2:
return cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22809.length)].join('')));

}
});

cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$2 = (function (stacktrace,sms){
return cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$3(stacktrace,sms,null);
});

cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$3 = (function (stacktrace,sms,opts){
var sb__7130__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_22812_22826 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_22813_22827 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_22812_22826,_STAR_print_fn_STAR_22813_22827,sb__7130__auto__){
return (function (x__7131__auto__){
return sb__7130__auto__.append(x__7131__auto__);
});})(_STAR_print_newline_STAR_22812_22826,_STAR_print_fn_STAR_22813_22827,sb__7130__auto__))
;

try{var seq__22814_22828 = cljs.core.seq(cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$3(stacktrace,sms,opts));
var chunk__22815_22829 = null;
var count__22816_22830 = (0);
var i__22817_22831 = (0);
while(true){
if((i__22817_22831 < count__22816_22830)){
var map__22818_22832 = chunk__22815_22829.cljs$core$IIndexed$_nth$arity$2(null,i__22817_22831);
var map__22818_22833__$1 = ((((!((map__22818_22832 == null)))?((((map__22818_22832.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22818_22832.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22818_22832):map__22818_22832);
var function_22834 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22818_22833__$1,cljs.core.cst$kw$function);
var file_22835 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22818_22833__$1,cljs.core.cst$kw$file);
var line_22836 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22818_22833__$1,cljs.core.cst$kw$line);
var column_22837 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22818_22833__$1,cljs.core.cst$kw$column);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\t",[cljs.core.str((cljs.core.truth_(function_22834)?[cljs.core.str(function_22834),cljs.core.str(" ")].join(''):null)),cljs.core.str("("),cljs.core.str(file_22835),cljs.core.str((cljs.core.truth_(line_22836)?[cljs.core.str(":"),cljs.core.str(line_22836)].join(''):null)),cljs.core.str((cljs.core.truth_(column_22837)?[cljs.core.str(":"),cljs.core.str(column_22837)].join(''):null)),cljs.core.str(")")].join('')], 0));

var G__22838 = seq__22814_22828;
var G__22839 = chunk__22815_22829;
var G__22840 = count__22816_22830;
var G__22841 = (i__22817_22831 + (1));
seq__22814_22828 = G__22838;
chunk__22815_22829 = G__22839;
count__22816_22830 = G__22840;
i__22817_22831 = G__22841;
continue;
} else {
var temp__4657__auto___22842 = cljs.core.seq(seq__22814_22828);
if(temp__4657__auto___22842){
var seq__22814_22843__$1 = temp__4657__auto___22842;
if(cljs.core.chunked_seq_QMARK_(seq__22814_22843__$1)){
var c__6959__auto___22844 = cljs.core.chunk_first(seq__22814_22843__$1);
var G__22845 = cljs.core.chunk_rest(seq__22814_22843__$1);
var G__22846 = c__6959__auto___22844;
var G__22847 = cljs.core.count(c__6959__auto___22844);
var G__22848 = (0);
seq__22814_22828 = G__22845;
chunk__22815_22829 = G__22846;
count__22816_22830 = G__22847;
i__22817_22831 = G__22848;
continue;
} else {
var map__22820_22849 = cljs.core.first(seq__22814_22843__$1);
var map__22820_22850__$1 = ((((!((map__22820_22849 == null)))?((((map__22820_22849.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22820_22849.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22820_22849):map__22820_22849);
var function_22851 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22820_22850__$1,cljs.core.cst$kw$function);
var file_22852 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22820_22850__$1,cljs.core.cst$kw$file);
var line_22853 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22820_22850__$1,cljs.core.cst$kw$line);
var column_22854 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22820_22850__$1,cljs.core.cst$kw$column);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\t",[cljs.core.str((cljs.core.truth_(function_22851)?[cljs.core.str(function_22851),cljs.core.str(" ")].join(''):null)),cljs.core.str("("),cljs.core.str(file_22852),cljs.core.str((cljs.core.truth_(line_22853)?[cljs.core.str(":"),cljs.core.str(line_22853)].join(''):null)),cljs.core.str((cljs.core.truth_(column_22854)?[cljs.core.str(":"),cljs.core.str(column_22854)].join(''):null)),cljs.core.str(")")].join('')], 0));

var G__22855 = cljs.core.next(seq__22814_22843__$1);
var G__22856 = null;
var G__22857 = (0);
var G__22858 = (0);
seq__22814_22828 = G__22855;
chunk__22815_22829 = G__22856;
count__22816_22830 = G__22857;
i__22817_22831 = G__22858;
continue;
}
} else {
}
}
break;
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_22813_22827;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_22812_22826;
}
return [cljs.core.str(sb__7130__auto__)].join('');
});

cljs.stacktrace.mapped_stacktrace_str.cljs$lang$maxFixedArity = 3;
