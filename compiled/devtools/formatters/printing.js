// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('devtools.formatters.printing');
goog.require('cljs.core');
goog.require('devtools.prefs');
goog.require('devtools.format');
goog.require('devtools.protocols');
goog.require('devtools.formatters.state');
goog.require('devtools.formatters.helpers');
devtools.formatters.printing.markup_QMARK_ = (function devtools$formatters$printing$markup_QMARK_(value){
return cljs.core.cst$kw$devtools$formatters$printing_SLASH_markup.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(value));
});
devtools.formatters.printing.mark_as_markup = (function devtools$formatters$printing$mark_as_markup(value){
return cljs.core.with_meta(value,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$devtools$formatters$printing_SLASH_markup,true], null));
});
devtools.formatters.printing.build_markup = (function devtools$formatters$printing$build_markup(var_args){
var args__7221__auto__ = [];
var len__7214__auto___14867 = arguments.length;
var i__7215__auto___14868 = (0);
while(true){
if((i__7215__auto___14868 < len__7214__auto___14867)){
args__7221__auto__.push((arguments[i__7215__auto___14868]));

var G__14869 = (i__7215__auto___14868 + (1));
i__7215__auto___14868 = G__14869;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((2) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((2)),(0))):null);
return devtools.formatters.printing.build_markup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7222__auto__);
});

devtools.formatters.printing.build_markup.cljs$core$IFn$_invoke$arity$variadic = (function (markup_db,fn_key,args){
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(markup_db,fn_key);
if(cljs.core.truth_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("missing markup method in markup-db: "),cljs.core.str(fn_key)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$sym$f], 0)))].join('')));
}

return devtools.formatters.printing.mark_as_markup(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args));
});

devtools.formatters.printing.build_markup.cljs$lang$maxFixedArity = (2);

devtools.formatters.printing.build_markup.cljs$lang$applyTo = (function (seq14864){
var G__14865 = cljs.core.first(seq14864);
var seq14864__$1 = cljs.core.next(seq14864);
var G__14866 = cljs.core.first(seq14864__$1);
var seq14864__$2 = cljs.core.next(seq14864__$1);
return devtools.formatters.printing.build_markup.cljs$core$IFn$_invoke$arity$variadic(G__14865,G__14866,seq14864__$2);
});
devtools.formatters.printing.wrap_value_as_reference_if_needed = (function devtools$formatters$printing$wrap_value_as_reference_if_needed(markup_db,value){
if(cljs.core.truth_((function (){var or__6156__auto__ = devtools.formatters.helpers.directly_printable_QMARK_(value);
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return devtools.formatters.printing.markup_QMARK_(value);
}
})())){
return value;
} else {
return devtools.formatters.printing.build_markup.cljs$core$IFn$_invoke$arity$variadic(markup_db,cljs.core.cst$kw$reference_DASH_surrogate,cljs.core.array_seq([value], 0));
}
});

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {devtools.formatters.printing.Object}
*/
devtools.formatters.printing.TemplateWriter = (function (group,markup_db){
this.group = group;
this.markup_db = markup_db;
this.cljs$lang$protocol_mask$partition0$ = 1073741824;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
devtools.formatters.printing.TemplateWriter.prototype.merge = (function (a){
var self__ = this;
var _ = this;
return self__.group = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(self__.group,a);
});

devtools.formatters.printing.TemplateWriter.prototype.get_group = (function (){
var self__ = this;
var _ = this;
return self__.group;
});

devtools.formatters.printing.TemplateWriter.prototype.cljs$core$IWriter$_write$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return self__.group = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(self__.group,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [devtools.formatters.printing.wrap_value_as_reference_if_needed(self__.markup_db,o)], null));
});

devtools.formatters.printing.TemplateWriter.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
});

devtools.formatters.printing.TemplateWriter.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$group,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null)),cljs.core.cst$sym$markup_DASH_db], null);
});

devtools.formatters.printing.TemplateWriter.cljs$lang$type = true;

devtools.formatters.printing.TemplateWriter.cljs$lang$ctorStr = "devtools.formatters.printing/TemplateWriter";

devtools.formatters.printing.TemplateWriter.cljs$lang$ctorPrWriter = (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write(writer__6755__auto__,"devtools.formatters.printing/TemplateWriter");
});

devtools.formatters.printing.__GT_TemplateWriter = (function devtools$formatters$printing$__GT_TemplateWriter(group,markup_db){
return (new devtools.formatters.printing.TemplateWriter(group,markup_db));
});

devtools.formatters.printing.make_template_writer = (function devtools$formatters$printing$make_template_writer(markup_db){
return (new devtools.formatters.printing.TemplateWriter(cljs.core.PersistentVector.EMPTY,markup_db));
});
devtools.formatters.printing.already_reference_QMARK_ = (function devtools$formatters$printing$already_reference_QMARK_(group){
var temp__4655__auto__ = cljs.core.first(cljs.core.first(group));
if(cljs.core.truth_(temp__4655__auto__)){
var tag = temp__4655__auto__;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,"reference");
} else {
return null;
}
});
devtools.formatters.printing.wrap_group_in_reference_if_needed = (function devtools$formatters$printing$wrap_group_in_reference_if_needed(group,obj,markup_db){
if(cljs.core.truth_((function (){var and__6144__auto__ = cljs.core.not(devtools.formatters.printing.already_reference_QMARK_(group));
if(and__6144__auto__){
var or__6156__auto__ = devtools.formatters.helpers.expandable_QMARK_(obj);
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return devtools.formatters.helpers.abbreviated_QMARK_(group);
}
} else {
return and__6144__auto__;
}
})())){
var expandable_markup = cljs.core.apply.cljs$core$IFn$_invoke$arity$4(devtools.formatters.printing.build_markup,markup_db,cljs.core.cst$kw$expandable,group);
var surrogate_markup = devtools.formatters.printing.build_markup.cljs$core$IFn$_invoke$arity$variadic(markup_db,cljs.core.cst$kw$raw_DASH_surrogate,cljs.core.array_seq([obj,expandable_markup,cljs.core.cst$kw$target], 0));
var reference_markup = devtools.formatters.printing.build_markup.cljs$core$IFn$_invoke$arity$variadic(markup_db,cljs.core.cst$kw$reference,cljs.core.array_seq([surrogate_markup], 0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reference_markup], null);
} else {
return group;
}
});
devtools.formatters.printing.wrap_group_in_circular_warning_if_needed = (function devtools$formatters$printing$wrap_group_in_circular_warning_if_needed(group,markup_db,circular_QMARK_){
if(cljs.core.truth_(circular_QMARK_)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$4(devtools.formatters.printing.build_markup,markup_db,cljs.core.cst$kw$circular_DASH_reference,group)], null);
} else {
return group;
}
});
devtools.formatters.printing.wrap_group_in_meta_if_needed = (function devtools$formatters$printing$wrap_group_in_meta_if_needed(group,value,markup_db){
if(cljs.core.truth_(devtools.formatters.helpers.should_render_QMARK_(cljs.core.cst$kw$render_DASH_metas,value,(function (p1__14870_SHARP_){
return cljs.core.some_QMARK_(cljs.core.meta(p1__14870_SHARP_));
})))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$meta_DASH_wrapper.cljs$core$IFn$_invoke$arity$1(markup_db),cljs.core.meta(value)),group)], null);
} else {
return group;
}
});
devtools.formatters.printing.detect_edge_case_and_patch_it = (function devtools$formatters$printing$detect_edge_case_and_patch_it(group,obj,markup_db){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(group),(5))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(group,(0)),"#object[")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(group,(4)),"\"]"))) || ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(group),(5))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(group,(0)),"#object[")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(group,(4)),"]"))) || ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(group),(3))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(group,(0)),"#object[")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(group,(2)),"]")))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [devtools.formatters.printing.build_markup.cljs$core$IFn$_invoke$arity$variadic(markup_db,cljs.core.cst$kw$native_DASH_reference,cljs.core.array_seq([obj], 0))], null);
} else {
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(group),(3))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(group,(0)),"#<")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2([cljs.core.str(obj)].join(''),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(group,(1)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(group,(2)),">"))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.cljs$core$IFn$_invoke$arity$2(group,(0)),devtools.formatters.printing.build_markup(cljs.core.cst$kw$native_DASH_reference,obj),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(group,(2))], null);
} else {
return group;

}
}
});
devtools.formatters.printing.post_process_printed_output = (function devtools$formatters$printing$post_process_printed_output(output_group,obj,markup_db,circular_QMARK_){
return devtools.formatters.printing.wrap_group_in_meta_if_needed(devtools.formatters.printing.wrap_group_in_circular_warning_if_needed(devtools.formatters.printing.wrap_group_in_reference_if_needed(devtools.formatters.printing.detect_edge_case_and_patch_it(output_group,obj,markup_db),obj,markup_db),markup_db,circular_QMARK_),obj,markup_db);
});
devtools.formatters.printing.alt_printer_job = (function devtools$formatters$printing$alt_printer_job(obj,writer,opts){
var map__14879 = opts;
var map__14879__$1 = ((((!((map__14879 == null)))?((((map__14879.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14879.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14879):map__14879);
var markup_db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14879__$1,cljs.core.cst$kw$markup_DASH_db);
if(cljs.core.truth_((function (){var or__6156__auto__ = (function (){try{if(!((obj == null))){
if((false) || (obj.devtools$format$IDevtoolsFormat$)){
return true;
} else {
if((!obj.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(devtools.format.IDevtoolsFormat,obj);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(devtools.format.IDevtoolsFormat,obj);
}
}catch (e14883){var e__12579__auto__ = e14883;
return false;
}})();
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
try{if(!((obj == null))){
if((false) || (obj.devtools$protocols$IFormat$)){
return true;
} else {
if((!obj.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(devtools.protocols.IFormat,obj);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(devtools.protocols.IFormat,obj);
}
}catch (e14885){var e__12579__auto__ = e14885;
return false;
}}
})())){
return cljs.core._write(writer,devtools.formatters.printing.build_markup.cljs$core$IFn$_invoke$arity$variadic(markup_db,cljs.core.cst$kw$reference,cljs.core.array_seq([obj], 0)));
} else {
var temp__4655__auto__ = devtools.formatters.printing.build_markup.cljs$core$IFn$_invoke$arity$variadic(markup_db,cljs.core.cst$kw$atomic,cljs.core.array_seq([obj], 0));
if(cljs.core.truth_(temp__4655__auto__)){
var atomic_markup = temp__4655__auto__;
return cljs.core._write(writer,atomic_markup);
} else {
var default_impl = cljs.core.cst$kw$fallback_DASH_impl.cljs$core$IFn$_invoke$arity$1(opts);
var inner_opts = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_print_level_STAR_,(1)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$print_DASH_length,(0)):opts);
return (default_impl.cljs$core$IFn$_invoke$arity$3 ? default_impl.cljs$core$IFn$_invoke$arity$3(obj,writer,inner_opts) : default_impl.call(null,obj,writer,inner_opts));
}
}
});
devtools.formatters.printing.alt_printer_impl = (function devtools$formatters$printing$alt_printer_impl(obj,writer,opts){
var _STAR_current_state_STAR_14890 = devtools.formatters.state._STAR_current_state_STAR_;
devtools.formatters.state._STAR_current_state_STAR_ = devtools.formatters.state.get_current_state();

try{var map__14891 = opts;
var map__14891__$1 = ((((!((map__14891 == null)))?((((map__14891.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14891.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14891):map__14891);
var markup_db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14891__$1,cljs.core.cst$kw$markup_DASH_db);
var circular_QMARK_ = devtools.formatters.state.is_circular_QMARK_(obj);
var inner_writer = devtools.formatters.printing.make_template_writer(cljs.core.cst$kw$markup_DASH_db.cljs$core$IFn$_invoke$arity$1(opts));
devtools.formatters.state.push_object_to_current_history_BANG_(obj);

devtools.formatters.printing.alt_printer_job(obj,inner_writer,opts);

return writer.merge(devtools.formatters.printing.post_process_printed_output(inner_writer.get_group(),obj,markup_db,circular_QMARK_));
}finally {devtools.formatters.state._STAR_current_state_STAR_ = _STAR_current_state_STAR_14890;
}});
devtools.formatters.printing.managed_print = (function devtools$formatters$printing$managed_print(tag,markup_db,printer){
var writer = devtools.formatters.printing.make_template_writer(markup_db);
var opts = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$alt_DASH_impl,devtools.formatters.printing.alt_printer_impl,cljs.core.cst$kw$markup_DASH_db,markup_db,cljs.core.cst$kw$print_DASH_length,devtools.prefs.pref(cljs.core.cst$kw$max_DASH_header_DASH_elements),cljs.core.cst$kw$more_DASH_marker,devtools.prefs.pref(cljs.core.cst$kw$more_DASH_marker)], null);
var job_fn = ((function (writer,opts){
return (function (){
return (printer.cljs$core$IFn$_invoke$arity$2 ? printer.cljs$core$IFn$_invoke$arity$2(writer,opts) : printer.call(null,writer,opts));
});})(writer,opts))
;
var temp__4655__auto___14896 = devtools.formatters.state.get_managed_print_level();
if(cljs.core.truth_(temp__4655__auto___14896)){
var managed_print_level_14897 = temp__4655__auto___14896;
var _STAR_print_level_STAR_14895_14898 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = managed_print_level_14897;

try{devtools.formatters.state.update_current_state_BANG_(((function (_STAR_print_level_STAR_14895_14898,managed_print_level_14897,temp__4655__auto___14896,writer,opts,job_fn){
return (function (p1__14893_SHARP_){
return devtools.formatters.state.set_managed_print_level(p1__14893_SHARP_,null);
});})(_STAR_print_level_STAR_14895_14898,managed_print_level_14897,temp__4655__auto___14896,writer,opts,job_fn))
);

job_fn();
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_14895_14898;
}} else {
job_fn();
}

return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [devtools.prefs.pref(tag)], null),writer.get_group());
});
devtools.formatters.printing.managed_print_via_writer = (function devtools$formatters$printing$managed_print_via_writer(value,tag,markup_db){
return devtools.formatters.printing.managed_print(tag,markup_db,(function (writer,opts){
return cljs.core.pr_seq_writer(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null),writer,opts);
}));
});
devtools.formatters.printing.managed_print_via_protocol = (function devtools$formatters$printing$managed_print_via_protocol(value,tag,markup_db){
return devtools.formatters.printing.managed_print(tag,markup_db,(function (writer,opts){
return cljs.core._pr_writer(value,writer,opts);
}));
});
