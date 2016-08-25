// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('devtools.hints');
goog.require('cljs.core');
goog.require('devtools.prefs');
goog.require('cljs.stacktrace');
devtools.hints.available_QMARK_ = (function devtools$hints$available_QMARK_(){
return true;
});
devtools.hints._STAR_installed_STAR_ = false;
devtools.hints._STAR_original_global_error_handler_STAR_ = null;
devtools.hints._STAR_original_type_error_prototype_to_string_STAR_ = null;
devtools.hints.processed_errors = cljs.core.volatile_BANG_(null);
devtools.hints.set_processed_errors_BANG_ = (function devtools$hints$set_processed_errors_BANG_(val){
return cljs.core.vreset_BANG_(devtools.hints.processed_errors,val);
});
devtools.hints.get_processed_errors_BANG_ = (function devtools$hints$get_processed_errors_BANG_(){
var temp__4655__auto__ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(devtools.hints.processed_errors) : cljs.core.deref.call(null,devtools.hints.processed_errors));
if(cljs.core.truth_(temp__4655__auto__)){
var val = temp__4655__auto__;
return val;
} else {
if(typeof WeakSet !== 'undefined'){
return devtools.hints.set_processed_errors_BANG_((new WeakSet()));
} else {
return null;
}
}
});
devtools.hints.empty_as_nil = (function devtools$hints$empty_as_nil(str){
if(cljs.core.empty_QMARK_(str)){
return null;
} else {
return str;
}
});
devtools.hints.ajax_reader = (function devtools$hints$ajax_reader(url){
var xhr = (new XMLHttpRequest());
xhr.open("GET",url,false);

xhr.send();

return devtools.hints.empty_as_nil(xhr.responseText);
});
devtools.hints.retrieve_javascript_source = (function devtools$hints$retrieve_javascript_source(where){
var reader = (function (){var or__6156__auto__ = devtools.prefs.pref(cljs.core.cst$kw$file_DASH_reader);
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return devtools.hints.ajax_reader;
}
})();
return (reader.cljs$core$IFn$_invoke$arity$1 ? reader.cljs$core$IFn$_invoke$arity$1(where) : reader.call(null,where));
});
devtools.hints.get_line = (function devtools$hints$get_line(lines,line_number){
return (lines[(line_number - (1))]);
});
devtools.hints.extend_content = (function devtools$hints$extend_content(content,lines,line_number,min_length){
if(((cljs.core.count(content) > min_length)) || (!((line_number > (0))))){
return content;
} else {
var prev_line_number = (line_number - (1));
var prev_line = devtools.hints.get_line(lines,prev_line_number);
var new_content = [cljs.core.str(prev_line),cljs.core.str("\n"),cljs.core.str(content)].join('');
return devtools$hints$extend_content(new_content,lines,prev_line_number,min_length);
}
});
devtools.hints.mark_call_closed_at_column = (function devtools$hints$mark_call_closed_at_column(line,column){
var n = (column - (1));
var prefix = line.substring((0),n);
var postfix = line.substring(n);
return [cljs.core.str(prefix),cljs.core.str(" <<< \u2622 NULL \u2622 <<< "),cljs.core.str(postfix)].join('');
});
devtools.hints.mark_null_call_site_location = (function devtools$hints$mark_null_call_site_location(file,line_number,column){
var content = devtools.hints.retrieve_javascript_source(file);
var lines = content.split("\n");
var line = devtools.hints.get_line(lines,line_number);
var marked_line = devtools.hints.mark_call_closed_at_column(line,column);
var min_length = (function (){var or__6156__auto__ = devtools.prefs.pref(cljs.core.cst$kw$sanity_DASH_hint_DASH_min_DASH_length);
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return (128);
}
})();
return devtools.hints.extend_content(marked_line,lines,line_number,min_length);
});
devtools.hints.make_sense_of_the_error = (function devtools$hints$make_sense_of_the_error(message,file,line_number,column){
if(cljs.core.truth_(cljs.core.re_matches(/Cannot read property 'call' of.*/,message))){
return devtools.hints.mark_null_call_site_location(file,line_number,column);
} else {
return null;

}
});
devtools.hints.error_object_sense = (function devtools$hints$error_object_sense(error){
try{var native_stack_trace = error.stack;
var stack_trace = (function (){var G__22870 = cljs.core.PersistentArrayMap.EMPTY;
var G__22871 = native_stack_trace;
var G__22872 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ua_DASH_product,cljs.core.cst$kw$chrome], null);
var G__22873 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$asset_DASH_root,""], null);
return (cljs.stacktrace.parse_stacktrace.cljs$core$IFn$_invoke$arity$4 ? cljs.stacktrace.parse_stacktrace.cljs$core$IFn$_invoke$arity$4(G__22870,G__22871,G__22872,G__22873) : cljs.stacktrace.parse_stacktrace.call(null,G__22870,G__22871,G__22872,G__22873));
})();
var top_item = cljs.core.second(stack_trace);
var map__22869 = top_item;
var map__22869__$1 = ((((!((map__22869 == null)))?((((map__22869.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22869.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22869):map__22869);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22869__$1,cljs.core.cst$kw$file);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22869__$1,cljs.core.cst$kw$line);
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22869__$1,cljs.core.cst$kw$column);
return devtools.hints.make_sense_of_the_error(error.message,file,line,column);
}catch (e22868){var _e = e22868;
return false;
}});
devtools.hints.type_error_to_string = (function devtools$hints$type_error_to_string(self){
var temp__4655__auto___22875 = devtools.hints.get_processed_errors_BANG_();
if(cljs.core.truth_(temp__4655__auto___22875)){
var seen_errors_22876 = temp__4655__auto___22875;
if(cljs.core.truth_(seen_errors_22876.has(self))){
} else {
seen_errors_22876.add(self);

var temp__4657__auto___22877 = devtools.hints.error_object_sense(self);
if(cljs.core.truth_(temp__4657__auto___22877)){
var sense_22878 = temp__4657__auto___22877;
self.message = [cljs.core.str(self.message),cljs.core.str(", a sanity hint:\n"),cljs.core.str(sense_22878)].join('');
} else {
}
}
} else {
}

return devtools.hints._STAR_original_type_error_prototype_to_string_STAR_.call(self);
});
devtools.hints.global_error_handler = (function devtools$hints$global_error_handler(message,url,line,column,error){
var res = (cljs.core.truth_(devtools.hints._STAR_original_global_error_handler_STAR_)?(devtools.hints._STAR_original_global_error_handler_STAR_.cljs$core$IFn$_invoke$arity$5 ? devtools.hints._STAR_original_global_error_handler_STAR_.cljs$core$IFn$_invoke$arity$5(message,url,line,column,error) : devtools.hints._STAR_original_global_error_handler_STAR_.call(null,message,url,line,column,error)):null);
if(cljs.core.not(res)){
var temp__4657__auto__ = devtools.hints.error_object_sense(error);
if(cljs.core.truth_(temp__4657__auto__)){
var sense = temp__4657__auto__;
console.info("A sanity hint for incoming uncaught error:\n",sense);

return false;
} else {
return null;
}
} else {
return true;
}
});
devtools.hints.install_type_error_enhancer = (function devtools$hints$install_type_error_enhancer(){
devtools.hints._STAR_original_global_error_handler_STAR_ = window.onerror;

window.onerror = devtools.hints.global_error_handler;

var prototype = TypeError.prototype;
devtools.hints._STAR_original_type_error_prototype_to_string_STAR_ = prototype.toString;

return prototype.toString = ((function (prototype){
return (function (){
var self = this;
return devtools.hints.type_error_to_string(self);
});})(prototype))
;
});
devtools.hints.installed_QMARK_ = (function devtools$hints$installed_QMARK_(){
return devtools.hints._STAR_installed_STAR_;
});
devtools.hints.install_BANG_ = (function devtools$hints$install_BANG_(){
if(cljs.core.truth_(devtools.hints._STAR_installed_STAR_)){
return null;
} else {
devtools.hints._STAR_installed_STAR_ = true;

devtools.hints.install_type_error_enhancer();

return true;
}
});
devtools.hints.uninstall_BANG_ = (function devtools$hints$uninstall_BANG_(){
if(cljs.core.truth_(devtools.hints._STAR_installed_STAR_)){
devtools.hints._STAR_installed_STAR_ = false;

if(cljs.core.truth_(devtools.hints._STAR_original_type_error_prototype_to_string_STAR_)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$sym$_STAR_original_DASH_type_DASH_error_DASH_prototype_DASH_to_DASH_string_STAR_], 0)))].join('')));
}

window.onerror = devtools.hints._STAR_original_global_error_handler_STAR_;

var prototype = TypeError.prototype;
return prototype.toString = devtools.hints._STAR_original_type_error_prototype_to_string_STAR_;
} else {
return null;
}
});
