// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('devtools.formatters.budgeting');
goog.require('cljs.core');
goog.require('devtools.formatters.templating');
goog.require('devtools.formatters.state');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.markup');
devtools.formatters.budgeting.header_expander_depth_cost = (2);
devtools.formatters.budgeting.over_budget_values = ((typeof WeakSet !== 'undefined')?(new WeakSet()):cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY));
devtools.formatters.budgeting.add_over_budget_value_BANG_ = (function devtools$formatters$budgeting$add_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_(devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_(devtools.formatters.budgeting.over_budget_values,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(devtools.formatters.budgeting.over_budget_values) : cljs.core.deref.call(null,devtools.formatters.budgeting.over_budget_values)),value));
} else {
var o__12554__auto__ = devtools.formatters.budgeting.over_budget_values;
return goog.object.get(o__12554__auto__,"add").call(o__12554__auto__,value);
}
});
devtools.formatters.budgeting.delete_over_budget_value_BANG_ = (function devtools$formatters$budgeting$delete_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_(devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_(devtools.formatters.budgeting.over_budget_values,cljs.core.disj.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(devtools.formatters.budgeting.over_budget_values) : cljs.core.deref.call(null,devtools.formatters.budgeting.over_budget_values)),value));
} else {
var o__12554__auto__ = devtools.formatters.budgeting.over_budget_values;
return goog.object.get(o__12554__auto__,"delete").call(o__12554__auto__,value);
}
});
devtools.formatters.budgeting.has_over_budget_value_QMARK_ = (function devtools$formatters$budgeting$has_over_budget_value_QMARK_(value){
if(cljs.core.volatile_QMARK_(devtools.formatters.budgeting.over_budget_values)){
return cljs.core.contains_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(devtools.formatters.budgeting.over_budget_values) : cljs.core.deref.call(null,devtools.formatters.budgeting.over_budget_values)),value);
} else {
var o__12554__auto__ = devtools.formatters.budgeting.over_budget_values;
return goog.object.get(o__12554__auto__,"has").call(o__12554__auto__,value);
}
});
devtools.formatters.budgeting.object_reference_QMARK_ = (function devtools$formatters$budgeting$object_reference_QMARK_(json_ml){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(json_ml),"object");
});
devtools.formatters.budgeting.determine_depth = (function devtools$formatters$budgeting$determine_depth(json_ml){
if(cljs.core.array_QMARK_(json_ml)){
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(devtools$formatters$budgeting$determine_depth,json_ml)) + (1));
} else {
return (0);
}
});
devtools.formatters.budgeting.has_any_object_reference_QMARK_ = (function devtools$formatters$budgeting$has_any_object_reference_QMARK_(json_ml){
if(cljs.core.array_QMARK_(json_ml)){
if(cljs.core.truth_(devtools.formatters.budgeting.object_reference_QMARK_(json_ml))){
return true;
} else {
return cljs.core.some(devtools$formatters$budgeting$has_any_object_reference_QMARK_,json_ml);
}
} else {
return null;
}
});
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_ = (function devtools$formatters$budgeting$transfer_remaining_depth_budget_BANG_(object_reference,depth_budget){
if(!((depth_budget < (0)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$neg_QMARK_,cljs.core.cst$sym$depth_DASH_budget))], 0)))].join('')));
}

var data = cljs.core.second(object_reference);
var _ = ((cljs.core.object_QMARK_(data))?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$object_QMARK_,cljs.core.cst$sym$data)], 0)))].join('')))})());
var config = goog.object.get(data,"config");
var G__15228 = data;
var target__12573__auto__ = G__15228;
if(cljs.core.truth_(target__12573__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("unable to locate object path "),cljs.core.str(null),cljs.core.str(" in "),cljs.core.str(G__15228)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$sym$target__12573__auto__], 0)))].join('')));
}

var G__15229_15232 = target__12573__auto__;
var G__15230_15233 = cljs.core.last(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["config"], null));
var G__15231_15234 = devtools.formatters.state.set_depth_budget(config,depth_budget);
goog.object.set(G__15229_15232,G__15230_15233,G__15231_15234);

return G__15228;
});
devtools.formatters.budgeting.distribute_budget_BANG_ = (function devtools$formatters$budgeting$distribute_budget_BANG_(json_ml,depth_budget){
if(!((depth_budget < (0)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$neg_QMARK_,cljs.core.cst$sym$depth_DASH_budget))], 0)))].join('')));
}

if(cljs.core.array_QMARK_(json_ml)){
var new_depth_budget_15243 = (depth_budget - (1));
if(cljs.core.truth_(devtools.formatters.budgeting.object_reference_QMARK_(json_ml))){
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_(json_ml,new_depth_budget_15243);
} else {
var seq__15239_15244 = cljs.core.seq(json_ml);
var chunk__15240_15245 = null;
var count__15241_15246 = (0);
var i__15242_15247 = (0);
while(true){
if((i__15242_15247 < count__15241_15246)){
var item_15248 = chunk__15240_15245.cljs$core$IIndexed$_nth$arity$2(null,i__15242_15247);
devtools$formatters$budgeting$distribute_budget_BANG_(item_15248,new_depth_budget_15243);

var G__15249 = seq__15239_15244;
var G__15250 = chunk__15240_15245;
var G__15251 = count__15241_15246;
var G__15252 = (i__15242_15247 + (1));
seq__15239_15244 = G__15249;
chunk__15240_15245 = G__15250;
count__15241_15246 = G__15251;
i__15242_15247 = G__15252;
continue;
} else {
var temp__4657__auto___15253 = cljs.core.seq(seq__15239_15244);
if(temp__4657__auto___15253){
var seq__15239_15254__$1 = temp__4657__auto___15253;
if(cljs.core.chunked_seq_QMARK_(seq__15239_15254__$1)){
var c__6959__auto___15255 = cljs.core.chunk_first(seq__15239_15254__$1);
var G__15256 = cljs.core.chunk_rest(seq__15239_15254__$1);
var G__15257 = c__6959__auto___15255;
var G__15258 = cljs.core.count(c__6959__auto___15255);
var G__15259 = (0);
seq__15239_15244 = G__15256;
chunk__15240_15245 = G__15257;
count__15241_15246 = G__15258;
i__15242_15247 = G__15259;
continue;
} else {
var item_15260 = cljs.core.first(seq__15239_15254__$1);
devtools$formatters$budgeting$distribute_budget_BANG_(item_15260,new_depth_budget_15243);

var G__15261 = cljs.core.next(seq__15239_15254__$1);
var G__15262 = null;
var G__15263 = (0);
var G__15264 = (0);
seq__15239_15244 = G__15261;
chunk__15240_15245 = G__15262;
count__15241_15246 = G__15263;
i__15242_15247 = G__15264;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return json_ml;
});
devtools.formatters.budgeting.was_over_budget_QMARK__BANG_ = (function devtools$formatters$budgeting$was_over_budget_QMARK__BANG_(value){
if(cljs.core.truth_(devtools.formatters.budgeting.has_over_budget_value_QMARK_(value))){
devtools.formatters.budgeting.delete_over_budget_value_BANG_(value);

return true;
} else {
return null;
}
});
devtools.formatters.budgeting.alter_json_ml_to_fit_in_remaining_budget_BANG_ = (function devtools$formatters$budgeting$alter_json_ml_to_fit_in_remaining_budget_BANG_(value,json_ml){
var temp__4655__auto__ = devtools.formatters.helpers.pref(cljs.core.cst$kw$initial_DASH_hierarchy_DASH_depth_DASH_budget);
if(cljs.core.truth_(temp__4655__auto__)){
var initial_hierarchy_depth_budget = temp__4655__auto__;
var remaining_depth_budget = (function (){var or__6156__auto__ = devtools.formatters.state.get_depth_budget();
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return (initial_hierarchy_depth_budget - (1));
}
})();
var depth = devtools.formatters.budgeting.determine_depth(json_ml);
var final_QMARK_ = cljs.core.not(devtools.formatters.budgeting.has_any_object_reference_QMARK_(json_ml));
var needed_depth = ((final_QMARK_)?depth:(depth + devtools.formatters.budgeting.header_expander_depth_cost));
if((remaining_depth_budget >= needed_depth)){
return devtools.formatters.budgeting.distribute_budget_BANG_(json_ml,remaining_depth_budget);
} else {
var expander_ml = devtools.formatters.templating.render_markup(devtools.formatters.markup._LT_header_expander_GT_(value));
devtools.formatters.budgeting.add_over_budget_value_BANG_(value);

return expander_ml;
}
} else {
return json_ml;
}
});
