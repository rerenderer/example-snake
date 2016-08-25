// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('devtools.formatters.templating');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('clojure.walk');
goog.require('devtools.util');
goog.require('devtools.protocols');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.state');
goog.require('clojure.string');
devtools.formatters.templating.mark_as_group_BANG_ = (function devtools$formatters$templating$mark_as_group_BANG_(value){
var x14920_14921 = value;
x14920_14921.devtools$protocols$IGroup$ = true;


return value;
});
devtools.formatters.templating.group_QMARK_ = (function devtools$formatters$templating$group_QMARK_(value){
if(!((value == null))){
if((false) || (value.devtools$protocols$IGroup$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(devtools.protocols.IGroup,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(devtools.protocols.IGroup,value);
}
});
devtools.formatters.templating.mark_as_template_BANG_ = (function devtools$formatters$templating$mark_as_template_BANG_(value){
var x14925_14926 = value;
x14925_14926.devtools$protocols$ITemplate$ = true;


return value;
});
devtools.formatters.templating.template_QMARK_ = (function devtools$formatters$templating$template_QMARK_(value){
if(!((value == null))){
if((false) || (value.devtools$protocols$ITemplate$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(devtools.protocols.ITemplate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(devtools.protocols.ITemplate,value);
}
});
devtools.formatters.templating.mark_as_surrogate_BANG_ = (function devtools$formatters$templating$mark_as_surrogate_BANG_(value){
var x14930_14931 = value;
x14930_14931.devtools$protocols$ISurrogate$ = true;


return value;
});
devtools.formatters.templating.surrogate_QMARK_ = (function devtools$formatters$templating$surrogate_QMARK_(value){
if(!((value == null))){
if((false) || (value.devtools$protocols$ISurrogate$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(devtools.protocols.ISurrogate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(devtools.protocols.ISurrogate,value);
}
});
devtools.formatters.templating.reference_QMARK_ = (function devtools$formatters$templating$reference_QMARK_(value){
var and__6144__auto__ = devtools.formatters.templating.group_QMARK_(value);
if(cljs.core.truth_(and__6144__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((value[(0)]),"object");
} else {
return and__6144__auto__;
}
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__7221__auto__ = [];
var len__7214__auto___14939 = arguments.length;
var i__7215__auto___14940 = (0);
while(true){
if((i__7215__auto___14940 < len__7214__auto___14939)){
args__7221__auto__.push((arguments[i__7215__auto___14940]));

var G__14941 = (i__7215__auto___14940 + (1));
i__7215__auto___14940 = G__14941;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((0) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((0)),(0))):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__7222__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_([]);
var seq__14935_14942 = cljs.core.seq(items);
var chunk__14936_14943 = null;
var count__14937_14944 = (0);
var i__14938_14945 = (0);
while(true){
if((i__14938_14945 < count__14937_14944)){
var item_14946 = chunk__14936_14943.cljs$core$IIndexed$_nth$arity$2(null,i__14938_14945);
if(cljs.core.some_QMARK_(item_14946)){
if(cljs.core.coll_QMARK_(item_14946)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_(cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(item_14946)));
} else {
group.push(devtools.formatters.helpers.pref(item_14946));
}
} else {
}

var G__14947 = seq__14935_14942;
var G__14948 = chunk__14936_14943;
var G__14949 = count__14937_14944;
var G__14950 = (i__14938_14945 + (1));
seq__14935_14942 = G__14947;
chunk__14936_14943 = G__14948;
count__14937_14944 = G__14949;
i__14938_14945 = G__14950;
continue;
} else {
var temp__4657__auto___14951 = cljs.core.seq(seq__14935_14942);
if(temp__4657__auto___14951){
var seq__14935_14952__$1 = temp__4657__auto___14951;
if(cljs.core.chunked_seq_QMARK_(seq__14935_14952__$1)){
var c__6959__auto___14953 = cljs.core.chunk_first(seq__14935_14952__$1);
var G__14954 = cljs.core.chunk_rest(seq__14935_14952__$1);
var G__14955 = c__6959__auto___14953;
var G__14956 = cljs.core.count(c__6959__auto___14953);
var G__14957 = (0);
seq__14935_14942 = G__14954;
chunk__14936_14943 = G__14955;
count__14937_14944 = G__14956;
i__14938_14945 = G__14957;
continue;
} else {
var item_14958 = cljs.core.first(seq__14935_14952__$1);
if(cljs.core.some_QMARK_(item_14958)){
if(cljs.core.coll_QMARK_(item_14958)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_(cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(item_14958)));
} else {
group.push(devtools.formatters.helpers.pref(item_14958));
}
} else {
}

var G__14959 = cljs.core.next(seq__14935_14952__$1);
var G__14960 = null;
var G__14961 = (0);
var G__14962 = (0);
seq__14935_14942 = G__14959;
chunk__14936_14943 = G__14960;
count__14937_14944 = G__14961;
i__14938_14945 = G__14962;
continue;
}
} else {
}
}
break;
}

return group;
});

devtools.formatters.templating.make_group.cljs$lang$maxFixedArity = (0);

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq14934){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14934));
});
devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__7221__auto__ = [];
var len__7214__auto___14970 = arguments.length;
var i__7215__auto___14971 = (0);
while(true){
if((i__7215__auto___14971 < len__7214__auto___14970)){
args__7221__auto__.push((arguments[i__7215__auto___14971]));

var G__14972 = (i__7215__auto___14971 + (1));
i__7215__auto___14971 = G__14972;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((2) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((2)),(0))):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7222__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref(tag);
var style__$1 = devtools.formatters.helpers.pref(style);
var template = devtools.formatters.templating.mark_as_template_BANG_([tag__$1,((cljs.core.empty_QMARK_(style__$1))?{}:{"style": style__$1})]);
var seq__14966_14973 = cljs.core.seq(children);
var chunk__14967_14974 = null;
var count__14968_14975 = (0);
var i__14969_14976 = (0);
while(true){
if((i__14969_14976 < count__14968_14975)){
var child_14977 = chunk__14967_14974.cljs$core$IIndexed$_nth$arity$2(null,i__14969_14976);
if(cljs.core.some_QMARK_(child_14977)){
if(cljs.core.coll_QMARK_(child_14977)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_(cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(devtools.formatters.helpers.pref,child_14977))));
} else {
var temp__4655__auto___14978 = devtools.formatters.helpers.pref(child_14977);
if(cljs.core.truth_(temp__4655__auto___14978)){
var child_value_14979 = temp__4655__auto___14978;
template.push(child_value_14979);
} else {
}
}
} else {
}

var G__14980 = seq__14966_14973;
var G__14981 = chunk__14967_14974;
var G__14982 = count__14968_14975;
var G__14983 = (i__14969_14976 + (1));
seq__14966_14973 = G__14980;
chunk__14967_14974 = G__14981;
count__14968_14975 = G__14982;
i__14969_14976 = G__14983;
continue;
} else {
var temp__4657__auto___14984 = cljs.core.seq(seq__14966_14973);
if(temp__4657__auto___14984){
var seq__14966_14985__$1 = temp__4657__auto___14984;
if(cljs.core.chunked_seq_QMARK_(seq__14966_14985__$1)){
var c__6959__auto___14986 = cljs.core.chunk_first(seq__14966_14985__$1);
var G__14987 = cljs.core.chunk_rest(seq__14966_14985__$1);
var G__14988 = c__6959__auto___14986;
var G__14989 = cljs.core.count(c__6959__auto___14986);
var G__14990 = (0);
seq__14966_14973 = G__14987;
chunk__14967_14974 = G__14988;
count__14968_14975 = G__14989;
i__14969_14976 = G__14990;
continue;
} else {
var child_14991 = cljs.core.first(seq__14966_14985__$1);
if(cljs.core.some_QMARK_(child_14991)){
if(cljs.core.coll_QMARK_(child_14991)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_(cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(devtools.formatters.helpers.pref,child_14991))));
} else {
var temp__4655__auto___14992 = devtools.formatters.helpers.pref(child_14991);
if(cljs.core.truth_(temp__4655__auto___14992)){
var child_value_14993 = temp__4655__auto___14992;
template.push(child_value_14993);
} else {
}
}
} else {
}

var G__14994 = cljs.core.next(seq__14966_14985__$1);
var G__14995 = null;
var G__14996 = (0);
var G__14997 = (0);
seq__14966_14973 = G__14994;
chunk__14967_14974 = G__14995;
count__14968_14975 = G__14996;
i__14969_14976 = G__14997;
continue;
}
} else {
}
}
break;
}

return template;
});

devtools.formatters.templating.make_template.cljs$lang$maxFixedArity = (2);

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq14963){
var G__14964 = cljs.core.first(seq14963);
var seq14963__$1 = cljs.core.next(seq14963);
var G__14965 = cljs.core.first(seq14963__$1);
var seq14963__$2 = cljs.core.next(seq14963__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__14964,G__14965,seq14963__$2);
});
devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__7221__auto__ = [];
var len__7214__auto___15000 = arguments.length;
var i__7215__auto___15001 = (0);
while(true){
if((i__7215__auto___15001 < len__7214__auto___15000)){
args__7221__auto__.push((arguments[i__7215__auto___15001]));

var G__15002 = (i__7215__auto___15001 + (1));
i__7215__auto___15001 = G__15002;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((1) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((1)),(0))):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7222__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_(goog.object.get(template,"concat").apply(template,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.into_array,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq14998){
var G__14999 = cljs.core.first(seq14998);
var seq14998__$1 = cljs.core.next(seq14998);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14999,seq14998__$1);
});
devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__7221__auto__ = [];
var len__7214__auto___15005 = arguments.length;
var i__7215__auto___15006 = (0);
while(true){
if((i__7215__auto___15006 < len__7214__auto___15005)){
args__7221__auto__.push((arguments[i__7215__auto___15006]));

var G__15007 = (i__7215__auto___15006 + (1));
i__7215__auto___15006 = G__15007;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((1) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((1)),(0))):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7222__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(template,cljs.core.array_seq([args], 0));
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq15003){
var G__15004 = cljs.core.first(seq15003);
var seq15003__$1 = cljs.core.next(seq15003);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15004,seq15003__$1);
});
devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var args15008 = [];
var len__7214__auto___15013 = arguments.length;
var i__7215__auto___15014 = (0);
while(true){
if((i__7215__auto___15014 < len__7214__auto___15013)){
args15008.push((arguments[i__7215__auto___15014]));

var G__15015 = (i__7215__auto___15014 + (1));
i__7215__auto___15014 = G__15015;
continue;
} else {
}
break;
}

var G__15010 = args15008.length;
switch (G__15010) {
case 1:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15008.length)].join('')));

}
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1 = (function (object){
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2(object,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2 = (function (object,header){
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3(object,header,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3 = (function (object,header,body){
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4(object,header,body,(0));
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4 = (function (object,header,body,start_index){
return devtools.formatters.templating.mark_as_surrogate_BANG_((function (){var obj15012 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__6156__auto__ = start_index;
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return (0);
}
})()};
return obj15012;
})());
});

devtools.formatters.templating.make_surrogate.cljs$lang$maxFixedArity = 4;
devtools.formatters.templating.get_surrogate_target = (function devtools$formatters$templating$get_surrogate_target(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_(surrogate))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$surrogate_QMARK_,cljs.core.cst$sym$surrogate)], 0)))].join('')));
}

return goog.object.get(surrogate,"target");
});
devtools.formatters.templating.get_surrogate_header = (function devtools$formatters$templating$get_surrogate_header(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_(surrogate))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$surrogate_QMARK_,cljs.core.cst$sym$surrogate)], 0)))].join('')));
}

return goog.object.get(surrogate,"header");
});
devtools.formatters.templating.get_surrogate_body = (function devtools$formatters$templating$get_surrogate_body(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_(surrogate))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$surrogate_QMARK_,cljs.core.cst$sym$surrogate)], 0)))].join('')));
}

return goog.object.get(surrogate,"body");
});
devtools.formatters.templating.get_surrogate_start_index = (function devtools$formatters$templating$get_surrogate_start_index(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_(surrogate))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$surrogate_QMARK_,cljs.core.cst$sym$surrogate)], 0)))].join('')));
}

return goog.object.get(surrogate,"startIndex");
});
devtools.formatters.templating.make_reference = (function devtools$formatters$templating$make_reference(var_args){
var args__7221__auto__ = [];
var len__7214__auto___15022 = arguments.length;
var i__7215__auto___15023 = (0);
while(true){
if((i__7215__auto___15023 < len__7214__auto___15022)){
args__7221__auto__.push((arguments[i__7215__auto___15023]));

var G__15024 = (i__7215__auto___15023 + (1));
i__7215__auto___15023 = G__15024;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((1) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((1)),(0))):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7222__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__15019){
var vec__15020 = p__15019;
var state_override_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15020,(0),null);
if(((state_override_fn == null)) || (cljs.core.fn_QMARK_(state_override_fn))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$or,cljs.core.list(cljs.core.cst$sym$nil_QMARK_,cljs.core.cst$sym$state_DASH_override_DASH_fn),cljs.core.list(cljs.core.cst$sym$fn_QMARK_,cljs.core.cst$sym$state_DASH_override_DASH_fn))], 0)))].join('')));
}

if((object == null)){
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$span,cljs.core.cst$kw$nil_DASH_style,cljs.core.array_seq([cljs.core.cst$kw$nil_DASH_label], 0));
} else {
var sub_state = ((cljs.core.some_QMARK_(state_override_fn))?(function (){var G__15021 = devtools.formatters.state.get_current_state();
return (state_override_fn.cljs$core$IFn$_invoke$arity$1 ? state_override_fn.cljs$core$IFn$_invoke$arity$1(G__15021) : state_override_fn.call(null,G__15021));
})():devtools.formatters.state.get_current_state());
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["object",{"object": object, "config": sub_state}], 0));
}
});

devtools.formatters.templating.make_reference.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq15017){
var G__15018 = cljs.core.first(seq15017);
var seq15017__$1 = cljs.core.next(seq15017);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__15018,seq15017__$1);
});
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.pprint_str = (function devtools$formatters$templating$pprint_str(markup){
var sb__7130__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_15028_15031 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_15029_15032 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_15028_15031,_STAR_print_fn_STAR_15029_15032,sb__7130__auto__){
return (function (x__7131__auto__){
return sb__7130__auto__.append(x__7131__auto__);
});})(_STAR_print_newline_STAR_15028_15031,_STAR_print_fn_STAR_15029_15032,sb__7130__auto__))
;

try{var _STAR_print_level_STAR_15030_15033 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (300);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_15030_15033;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_15029_15032;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_15028_15031;
}
return [cljs.core.str(sb__7130__auto__)].join('');
});
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_15035 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([markup], 0));
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_15035;
}});
devtools.formatters.templating.add_stack_separators = (function devtools$formatters$templating$add_stack_separators(stack){
return cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("-------------",stack);
});
devtools.formatters.templating.replace_fns_with_markers = (function devtools$formatters$templating$replace_fns_with_markers(stack){
var f = (function (v){
if(cljs.core.fn_QMARK_(v)){
return "##fn##";
} else {
return v;
}
});
return clojure.walk.prewalk(f,stack);
});
devtools.formatters.templating.pprint_render_calls = (function devtools$formatters$templating$pprint_render_calls(stack){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(devtools.formatters.templating.pprint_str,stack);
});
devtools.formatters.templating.pprint_render_stack = (function devtools$formatters$templating$pprint_render_stack(stack){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",devtools.formatters.templating.add_stack_separators(devtools.formatters.templating.pprint_render_calls(devtools.formatters.templating.replace_fns_with_markers(cljs.core.reverse(stack)))));
});
devtools.formatters.templating.pprint_render_path = (function devtools$formatters$templating$pprint_render_path(path){
return devtools.formatters.templating.pprint_str(path);
});
devtools.formatters.templating.assert_markup_error = (function devtools$formatters$templating$assert_markup_error(msg){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str(msg),cljs.core.str("\n"),cljs.core.str("Render path: "),cljs.core.str(devtools.formatters.templating.pprint_render_path(devtools.formatters.templating._STAR_current_render_path_STAR_)),cljs.core.str("\n"),cljs.core.str("Render stack:\n"),cljs.core.str(devtools.formatters.templating.pprint_render_stack(devtools.formatters.templating._STAR_current_render_stack_STAR_))].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([false], 0)))].join('')));

});
devtools.formatters.templating.surrogate_markup_QMARK_ = (function devtools$formatters$templating$surrogate_markup_QMARK_(markup){
return (cljs.core.sequential_QMARK_(markup)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(markup),"surrogate"));
});
devtools.formatters.templating.render_special = (function devtools$formatters$templating$render_special(name,args){
var G__15037 = name;
switch (G__15037) {
case "surrogate":
var obj = cljs.core.first(args);
var converted_args = cljs.core.map.cljs$core$IFn$_invoke$arity$2(devtools.formatters.templating.render_json_ml_STAR_,cljs.core.rest(args));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.formatters.templating.make_surrogate,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj], null),converted_args));

break;
case "reference":
var obj = cljs.core.first(args);
var converted_obj = (cljs.core.truth_(devtools.formatters.templating.surrogate_markup_QMARK_(obj))?(devtools.formatters.templating.render_json_ml_STAR_.cljs$core$IFn$_invoke$arity$1 ? devtools.formatters.templating.render_json_ml_STAR_.cljs$core$IFn$_invoke$arity$1(obj) : devtools.formatters.templating.render_json_ml_STAR_.call(null,obj)):obj);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.formatters.templating.make_reference,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [converted_obj], null),cljs.core.rest(args)));

break;
default:
return devtools.formatters.templating.assert_markup_error([cljs.core.str("no matching special tag name: '"),cljs.core.str(name),cljs.core.str("'")].join(''));

}
});
devtools.formatters.templating.emptyish_QMARK_ = (function devtools$formatters$templating$emptyish_QMARK_(v){
if((cljs.core.seqable_QMARK_(v)) || (cljs.core.array_QMARK_(v)) || (typeof v === 'string')){
return cljs.core.empty_QMARK_(v);
} else {
return false;
}
});
devtools.formatters.templating.render_subtree = (function devtools$formatters$templating$render_subtree(tag,children){
var vec__15040 = tag;
var html_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15040,(0),null);
var style = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15040,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.cljs$core$IFn$_invoke$arity$2(devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_(markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_15042 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(devtools.formatters.templating._STAR_current_render_path_STAR_,cljs.core.first(markup));

try{var tag = devtools.formatters.helpers.pref(cljs.core.first(markup));
if(typeof tag === 'string'){
return devtools.formatters.templating.render_special(tag,cljs.core.rest(markup));
} else {
if(cljs.core.sequential_QMARK_(tag)){
return devtools.formatters.templating.render_subtree(tag,cljs.core.rest(markup));
} else {
return devtools.formatters.templating.assert_markup_error([cljs.core.str("invalid json-ml markup at "),cljs.core.str(devtools.formatters.templating.print_preview(markup)),cljs.core.str(":")].join(''));

}
}
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_15042;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_15045 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_15046 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_(markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_15046;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_15045;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("result of markup rendering must be a template,\n"),cljs.core.str("resolved to "),cljs.core.str(devtools.formatters.templating.pprint_str(value)),cljs.core.str("initial value: "),cljs.core.str(devtools.formatters.templating.pprint_str(initial_value))].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([false], 0)))].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_(value)){
var G__15047 = initial_value;
var G__15048 = (value.cljs$core$IFn$_invoke$arity$0 ? value.cljs$core$IFn$_invoke$arity$0() : value.call(null));
initial_value = G__15047;
value = G__15048;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__15049 = initial_value;
var G__15050 = devtools.formatters.helpers.pref(value);
initial_value = G__15049;
value = G__15050;
continue;
} else {
if(cljs.core.sequential_QMARK_(value)){
var G__15051 = initial_value;
var G__15052 = devtools.formatters.templating.render_json_ml(value);
initial_value = G__15051;
value = G__15052;
continue;
} else {
if(cljs.core.truth_(devtools.formatters.templating.template_QMARK_(value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_(value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.reference_QMARK_(value))){
return value;
} else {
return (devtools.formatters.templating.assert_failed_markup_rendering.cljs$core$IFn$_invoke$arity$2 ? devtools.formatters.templating.assert_failed_markup_rendering.cljs$core$IFn$_invoke$arity$2(initial_value,value) : devtools.formatters.templating.assert_failed_markup_rendering.call(null,initial_value,value));

}
}
}
}
}
}
break;
}
});
devtools.formatters.templating.render_markup = (function devtools$formatters$templating$render_markup(value){
return devtools.formatters.templating.render_markup_STAR_(value,value);
});
