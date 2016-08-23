// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('rerenderer.platform.utils');
goog.require('cljs.core');
/**
 * Deserializes json to cljs data structure.
 */
rerenderer.platform.utils.from_json = (function rerenderer$platform$utils$from_json(data){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(JSON.parse(data),cljs.core.array_seq([cljs.core.cst$kw$keywordize_DASH_keys,true], 0));
});
/**
 * Serializes cljs data structure to json.
 */
rerenderer.platform.utils.to_json = (function rerenderer$platform$utils$to_json(data){
return JSON.stringify(cljs.core.clj__GT_js(data));
});
