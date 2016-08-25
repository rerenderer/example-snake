// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('rerenderer.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('rerenderer.platform.core');
goog.require('rerenderer.render');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
rerenderer.core.Game = (function (state_atom,initial_state,platform_info,render_state_BANG_,event_ch,__meta,__extmap,__hash){
this.state_atom = state_atom;
this.initial_state = initial_state;
this.platform_info = platform_info;
this.render_state_BANG_ = render_state_BANG_;
this.event_ch = event_ch;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
rerenderer.core.Game.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6770__auto__,k__6771__auto__){
var self__ = this;
var this__6770__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__6770__auto____$1,k__6771__auto__,null);
});

rerenderer.core.Game.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6772__auto__,k21558,else__6773__auto__){
var self__ = this;
var this__6772__auto____$1 = this;
var G__21560 = (((k21558 instanceof cljs.core.Keyword))?k21558.fqn:null);
switch (G__21560) {
case "state-atom":
return self__.state_atom;

break;
case "initial-state":
return self__.initial_state;

break;
case "platform-info":
return self__.platform_info;

break;
case "render-state!":
return self__.render_state_BANG_;

break;
case "event-ch":
return self__.event_ch;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k21558,else__6773__auto__);

}
});

rerenderer.core.Game.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6784__auto__,writer__6785__auto__,opts__6786__auto__){
var self__ = this;
var this__6784__auto____$1 = this;
var pr_pair__6787__auto__ = ((function (this__6784__auto____$1){
return (function (keyval__6788__auto__){
return cljs.core.pr_sequential_writer(writer__6785__auto__,cljs.core.pr_writer,""," ","",opts__6786__auto__,keyval__6788__auto__);
});})(this__6784__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__6785__auto__,pr_pair__6787__auto__,"#rerenderer.core.Game{",", ","}",opts__6786__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$state_DASH_atom,self__.state_atom],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$initial_DASH_state,self__.initial_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$platform_DASH_info,self__.platform_info],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$render_DASH_state_BANG_,self__.render_state_BANG_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$event_DASH_ch,self__.event_ch],null))], null),self__.__extmap));
});

rerenderer.core.Game.prototype.cljs$core$IIterable$ = true;

rerenderer.core.Game.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21557){
var self__ = this;
var G__21557__$1 = this;
return (new cljs.core.RecordIter((0),G__21557__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state_DASH_atom,cljs.core.cst$kw$initial_DASH_state,cljs.core.cst$kw$platform_DASH_info,cljs.core.cst$kw$render_DASH_state_BANG_,cljs.core.cst$kw$event_DASH_ch], null),cljs.core._iterator(self__.__extmap)));
});

rerenderer.core.Game.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6768__auto__){
var self__ = this;
var this__6768__auto____$1 = this;
return self__.__meta;
});

rerenderer.core.Game.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6764__auto__){
var self__ = this;
var this__6764__auto____$1 = this;
return (new rerenderer.core.Game(self__.state_atom,self__.initial_state,self__.platform_info,self__.render_state_BANG_,self__.event_ch,self__.__meta,self__.__extmap,self__.__hash));
});

rerenderer.core.Game.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6774__auto__){
var self__ = this;
var this__6774__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

rerenderer.core.Game.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6765__auto__){
var self__ = this;
var this__6765__auto____$1 = this;
var h__6591__auto__ = self__.__hash;
if(!((h__6591__auto__ == null))){
return h__6591__auto__;
} else {
var h__6591__auto____$1 = cljs.core.hash_imap(this__6765__auto____$1);
self__.__hash = h__6591__auto____$1;

return h__6591__auto____$1;
}
});

rerenderer.core.Game.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6766__auto__,other__6767__auto__){
var self__ = this;
var this__6766__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6144__auto__ = other__6767__auto__;
if(cljs.core.truth_(and__6144__auto__)){
var and__6144__auto____$1 = (this__6766__auto____$1.constructor === other__6767__auto__.constructor);
if(and__6144__auto____$1){
return cljs.core.equiv_map(this__6766__auto____$1,other__6767__auto__);
} else {
return and__6144__auto____$1;
}
} else {
return and__6144__auto__;
}
})())){
return true;
} else {
return false;
}
});

rerenderer.core.Game.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6779__auto__,k__6780__auto__){
var self__ = this;
var this__6779__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$state_DASH_atom,null,cljs.core.cst$kw$platform_DASH_info,null,cljs.core.cst$kw$render_DASH_state_BANG_,null,cljs.core.cst$kw$event_DASH_ch,null,cljs.core.cst$kw$initial_DASH_state,null], null), null),k__6780__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__6779__auto____$1),self__.__meta),k__6780__auto__);
} else {
return (new rerenderer.core.Game(self__.state_atom,self__.initial_state,self__.platform_info,self__.render_state_BANG_,self__.event_ch,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__6780__auto__)),null));
}
});

rerenderer.core.Game.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6777__auto__,k__6778__auto__,G__21557){
var self__ = this;
var this__6777__auto____$1 = this;
var pred__21561 = cljs.core.keyword_identical_QMARK_;
var expr__21562 = k__6778__auto__;
if(cljs.core.truth_((pred__21561.cljs$core$IFn$_invoke$arity$2 ? pred__21561.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$state_DASH_atom,expr__21562) : pred__21561.call(null,cljs.core.cst$kw$state_DASH_atom,expr__21562)))){
return (new rerenderer.core.Game(G__21557,self__.initial_state,self__.platform_info,self__.render_state_BANG_,self__.event_ch,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__21561.cljs$core$IFn$_invoke$arity$2 ? pred__21561.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$initial_DASH_state,expr__21562) : pred__21561.call(null,cljs.core.cst$kw$initial_DASH_state,expr__21562)))){
return (new rerenderer.core.Game(self__.state_atom,G__21557,self__.platform_info,self__.render_state_BANG_,self__.event_ch,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__21561.cljs$core$IFn$_invoke$arity$2 ? pred__21561.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$platform_DASH_info,expr__21562) : pred__21561.call(null,cljs.core.cst$kw$platform_DASH_info,expr__21562)))){
return (new rerenderer.core.Game(self__.state_atom,self__.initial_state,G__21557,self__.render_state_BANG_,self__.event_ch,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__21561.cljs$core$IFn$_invoke$arity$2 ? pred__21561.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$render_DASH_state_BANG_,expr__21562) : pred__21561.call(null,cljs.core.cst$kw$render_DASH_state_BANG_,expr__21562)))){
return (new rerenderer.core.Game(self__.state_atom,self__.initial_state,self__.platform_info,G__21557,self__.event_ch,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__21561.cljs$core$IFn$_invoke$arity$2 ? pred__21561.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$event_DASH_ch,expr__21562) : pred__21561.call(null,cljs.core.cst$kw$event_DASH_ch,expr__21562)))){
return (new rerenderer.core.Game(self__.state_atom,self__.initial_state,self__.platform_info,self__.render_state_BANG_,G__21557,self__.__meta,self__.__extmap,null));
} else {
return (new rerenderer.core.Game(self__.state_atom,self__.initial_state,self__.platform_info,self__.render_state_BANG_,self__.event_ch,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__6778__auto__,G__21557),null));
}
}
}
}
}
});

rerenderer.core.Game.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6782__auto__){
var self__ = this;
var this__6782__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$state_DASH_atom,self__.state_atom],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$initial_DASH_state,self__.initial_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$platform_DASH_info,self__.platform_info],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$render_DASH_state_BANG_,self__.render_state_BANG_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$event_DASH_ch,self__.event_ch],null))], null),self__.__extmap));
});

rerenderer.core.Game.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6769__auto__,G__21557){
var self__ = this;
var this__6769__auto____$1 = this;
return (new rerenderer.core.Game(self__.state_atom,self__.initial_state,self__.platform_info,self__.render_state_BANG_,self__.event_ch,G__21557,self__.__extmap,self__.__hash));
});

rerenderer.core.Game.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6775__auto__,entry__6776__auto__){
var self__ = this;
var this__6775__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__6776__auto__)){
return cljs.core._assoc(this__6775__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__6776__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__6776__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__6775__auto____$1,entry__6776__auto__);
}
});

rerenderer.core.Game.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$state_DASH_atom,cljs.core.cst$sym$initial_DASH_state,cljs.core.cst$sym$platform_DASH_info,cljs.core.cst$sym$render_DASH_state_BANG_,cljs.core.cst$sym$event_DASH_ch], null);
});

rerenderer.core.Game.cljs$lang$type = true;

rerenderer.core.Game.cljs$lang$ctorPrSeq = (function (this__6804__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"rerenderer.core/Game");
});

rerenderer.core.Game.cljs$lang$ctorPrWriter = (function (this__6804__auto__,writer__6805__auto__){
return cljs.core._write(writer__6805__auto__,"rerenderer.core/Game");
});

rerenderer.core.__GT_Game = (function rerenderer$core$__GT_Game(state_atom,initial_state,platform_info,render_state_BANG_,event_ch){
return (new rerenderer.core.Game(state_atom,initial_state,platform_info,render_state_BANG_,event_ch,null,null,null));
});

rerenderer.core.map__GT_Game = (function rerenderer$core$map__GT_Game(G__21559){
return (new rerenderer.core.Game(cljs.core.cst$kw$state_DASH_atom.cljs$core$IFn$_invoke$arity$1(G__21559),cljs.core.cst$kw$initial_DASH_state.cljs$core$IFn$_invoke$arity$1(G__21559),cljs.core.cst$kw$platform_DASH_info.cljs$core$IFn$_invoke$arity$1(G__21559),cljs.core.cst$kw$render_DASH_state_BANG_.cljs$core$IFn$_invoke$arity$1(G__21559),cljs.core.cst$kw$event_DASH_ch.cljs$core$IFn$_invoke$arity$1(G__21559),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__21559,cljs.core.cst$kw$state_DASH_atom,cljs.core.array_seq([cljs.core.cst$kw$initial_DASH_state,cljs.core.cst$kw$platform_DASH_info,cljs.core.cst$kw$render_DASH_state_BANG_,cljs.core.cst$kw$event_DASH_ch], 0)),null));
});

rerenderer.core.load_image = (function rerenderer$core$load_image(src){
var img = (new Image());
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
img.onload = ((function (img,ch){
return (function (){
var c__10139__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10139__auto__,img,ch){
return (function (){
var f__10140__auto__ = (function (){var switch__10072__auto__ = ((function (c__10139__auto__,img,ch){
return (function (state_21580){
var state_val_21581 = (state_21580[(1)]);
if((state_val_21581 === (1))){
var state_21580__$1 = state_21580;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21580__$1,(2),ch,true);
} else {
if((state_val_21581 === (2))){
var inst_21578 = (state_21580[(2)]);
var state_21580__$1 = state_21580;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21580__$1,inst_21578);
} else {
return null;
}
}
});})(c__10139__auto__,img,ch))
;
return ((function (switch__10072__auto__,c__10139__auto__,img,ch){
return (function() {
var rerenderer$core$load_image_$_state_machine__10073__auto__ = null;
var rerenderer$core$load_image_$_state_machine__10073__auto____0 = (function (){
var statearr_21585 = [null,null,null,null,null,null,null];
(statearr_21585[(0)] = rerenderer$core$load_image_$_state_machine__10073__auto__);

(statearr_21585[(1)] = (1));

return statearr_21585;
});
var rerenderer$core$load_image_$_state_machine__10073__auto____1 = (function (state_21580){
while(true){
var ret_value__10074__auto__ = (function (){try{while(true){
var result__10075__auto__ = switch__10072__auto__(state_21580);
if(cljs.core.keyword_identical_QMARK_(result__10075__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10075__auto__;
}
break;
}
}catch (e21586){if((e21586 instanceof Object)){
var ex__10076__auto__ = e21586;
var statearr_21587_21589 = state_21580;
(statearr_21587_21589[(5)] = ex__10076__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21580);

return cljs.core.cst$kw$recur;
} else {
throw e21586;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10074__auto__,cljs.core.cst$kw$recur)){
var G__21590 = state_21580;
state_21580 = G__21590;
continue;
} else {
return ret_value__10074__auto__;
}
break;
}
});
rerenderer$core$load_image_$_state_machine__10073__auto__ = function(state_21580){
switch(arguments.length){
case 0:
return rerenderer$core$load_image_$_state_machine__10073__auto____0.call(this);
case 1:
return rerenderer$core$load_image_$_state_machine__10073__auto____1.call(this,state_21580);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rerenderer$core$load_image_$_state_machine__10073__auto__.cljs$core$IFn$_invoke$arity$0 = rerenderer$core$load_image_$_state_machine__10073__auto____0;
rerenderer$core$load_image_$_state_machine__10073__auto__.cljs$core$IFn$_invoke$arity$1 = rerenderer$core$load_image_$_state_machine__10073__auto____1;
return rerenderer$core$load_image_$_state_machine__10073__auto__;
})()
;})(switch__10072__auto__,c__10139__auto__,img,ch))
})();
var state__10141__auto__ = (function (){var statearr_21588 = (f__10140__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10140__auto__.cljs$core$IFn$_invoke$arity$0() : f__10140__auto__.call(null));
(statearr_21588[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10139__auto__);

return statearr_21588;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10141__auto__);
});})(c__10139__auto__,img,ch))
);

return c__10139__auto__;
});})(img,ch))
;

img.src = src;

return ch;
});
/**
 * Initializes new rerenderer application.
 * 
 *   * `root-view` - function for rendering root canvas - `(fn [state options])`;
 *   * `event-handler` - function for handling events - `(fn [event-ch state-atom options])`;
 *   * `scale` - scale image to screen - `true/false`;
 *   * `preload-images` - urls that should be loaded before first render;
 *   * `options` - additional platform/app-dependent options.
 * 
 *   Returns `Game` record.
 */
rerenderer.core.init_BANG_ = (function rerenderer$core$init_BANG_(var_args){
var args__7221__auto__ = [];
var len__7214__auto___21684 = arguments.length;
var i__7215__auto___21685 = (0);
while(true){
if((i__7215__auto___21685 < len__7214__auto___21684)){
args__7221__auto__.push((arguments[i__7215__auto___21685]));

var G__21686 = (i__7215__auto___21685 + (1));
i__7215__auto___21685 = G__21686;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((0) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((0)),(0))):null);
return rerenderer.core.init_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__7222__auto__);
});

rerenderer.core.init_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__21597){
var map__21598 = p__21597;
var map__21598__$1 = ((((!((map__21598 == null)))?((((map__21598.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21598.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21598):map__21598);
var options = map__21598__$1;
var root_view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21598__$1,cljs.core.cst$kw$root_DASH_view);
var event_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21598__$1,cljs.core.cst$kw$event_DASH_handler);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21598__$1,cljs.core.cst$kw$state);
var preload_images = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21598__$1,cljs.core.cst$kw$preload_DASH_images);
if(cljs.core.ifn_QMARK_(root_view)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$ifn_QMARK_,cljs.core.cst$sym$root_DASH_view)], 0)))].join('')));
}

if(cljs.core.map_QMARK_(state)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$map_QMARK_,cljs.core.cst$sym$state)], 0)))].join('')));
}

var event_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var platform_info = (rerenderer.platform.core.information.cljs$core$IFn$_invoke$arity$1 ? rerenderer.platform.core.information.cljs$core$IFn$_invoke$arity$1(options) : rerenderer.platform.core.information.call(null,options));
var state_atom = (function (){var G__21600 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$platform,platform_info);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21600) : cljs.core.atom.call(null,G__21600));
})();
var render_state_BANG_ = ((function (event_ch,platform_info,state_atom,map__21598,map__21598__$1,options,root_view,event_handler,state,preload_images){
return (function (p1__21591_SHARP_){
return rerenderer.render.render_BANG_(root_view,p1__21591_SHARP_,options);
});})(event_ch,platform_info,state_atom,map__21598,map__21598__$1,options,root_view,event_handler,state,preload_images))
;
(rerenderer.platform.core.listen_BANG_.cljs$core$IFn$_invoke$arity$2 ? rerenderer.platform.core.listen_BANG_.cljs$core$IFn$_invoke$arity$2(event_ch,options) : rerenderer.platform.core.listen_BANG_.call(null,event_ch,options));

cljs.core.add_watch(state_atom,cljs.core.cst$kw$render,((function (event_ch,platform_info,state_atom,render_state_BANG_,map__21598,map__21598__$1,options,root_view,event_handler,state,preload_images){
return (function (p1__21593_SHARP_,p2__21594_SHARP_,p3__21595_SHARP_,p4__21592_SHARP_){
return render_state_BANG_(p4__21592_SHARP_);
});})(event_ch,platform_info,state_atom,render_state_BANG_,map__21598,map__21598__$1,options,root_view,event_handler,state,preload_images))
);

var c__10139__auto___21687 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10139__auto___21687,event_ch,platform_info,state_atom,render_state_BANG_,map__21598,map__21598__$1,options,root_view,event_handler,state,preload_images){
return (function (){
var f__10140__auto__ = (function (){var switch__10072__auto__ = ((function (c__10139__auto___21687,event_ch,platform_info,state_atom,render_state_BANG_,map__21598,map__21598__$1,options,root_view,event_handler,state,preload_images){
return (function (state_21652){
var state_val_21653 = (state_21652[(1)]);
if((state_val_21653 === (7))){
var inst_21607 = (state_21652[(7)]);
var inst_21609 = (state_21652[(8)]);
var inst_21606 = (state_21652[(9)]);
var inst_21608 = (state_21652[(10)]);
var inst_21617 = (state_21652[(2)]);
var inst_21618 = (inst_21609 + (1));
var tmp21654 = inst_21607;
var tmp21655 = inst_21606;
var tmp21656 = inst_21608;
var inst_21606__$1 = tmp21655;
var inst_21607__$1 = tmp21654;
var inst_21608__$1 = tmp21656;
var inst_21609__$1 = inst_21618;
var state_21652__$1 = (function (){var statearr_21657 = state_21652;
(statearr_21657[(7)] = inst_21607__$1);

(statearr_21657[(8)] = inst_21609__$1);

(statearr_21657[(9)] = inst_21606__$1);

(statearr_21657[(11)] = inst_21617);

(statearr_21657[(10)] = inst_21608__$1);

return statearr_21657;
})();
var statearr_21658_21688 = state_21652__$1;
(statearr_21658_21688[(2)] = null);

(statearr_21658_21688[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21653 === (1))){
var inst_21605 = cljs.core.seq(preload_images);
var inst_21606 = inst_21605;
var inst_21607 = null;
var inst_21608 = (0);
var inst_21609 = (0);
var state_21652__$1 = (function (){var statearr_21659 = state_21652;
(statearr_21659[(7)] = inst_21607);

(statearr_21659[(8)] = inst_21609);

(statearr_21659[(9)] = inst_21606);

(statearr_21659[(10)] = inst_21608);

return statearr_21659;
})();
var statearr_21660_21689 = state_21652__$1;
(statearr_21660_21689[(2)] = null);

(statearr_21660_21689[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21653 === (4))){
var inst_21607 = (state_21652[(7)]);
var inst_21609 = (state_21652[(8)]);
var inst_21614 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_21607,inst_21609);
var inst_21615 = rerenderer.core.load_image(inst_21614);
var state_21652__$1 = state_21652;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21652__$1,(7),inst_21615);
} else {
if((state_val_21653 === (15))){
var inst_21650 = (state_21652[(2)]);
var state_21652__$1 = state_21652;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21652__$1,inst_21650);
} else {
if((state_val_21653 === (13))){
var inst_21637 = (state_21652[(2)]);
var state_21652__$1 = state_21652;
var statearr_21661_21690 = state_21652__$1;
(statearr_21661_21690[(2)] = inst_21637);

(statearr_21661_21690[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21653 === (6))){
var inst_21642 = (state_21652[(2)]);
var state_21652__$1 = state_21652;
var statearr_21662_21691 = state_21652__$1;
(statearr_21662_21691[(2)] = inst_21642);

(statearr_21662_21691[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21653 === (3))){
var inst_21644 = (state_21652[(2)]);
var inst_21645 = render_state_BANG_(state);
var inst_21646 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21647 = [cljs.core.cst$kw$init];
var inst_21648 = (new cljs.core.PersistentVector(null,1,(5),inst_21646,inst_21647,null));
var state_21652__$1 = (function (){var statearr_21663 = state_21652;
(statearr_21663[(12)] = inst_21645);

(statearr_21663[(13)] = inst_21644);

return statearr_21663;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21652__$1,(15),event_ch,inst_21648);
} else {
if((state_val_21653 === (12))){
var inst_21621 = (state_21652[(14)]);
var inst_21630 = cljs.core.first(inst_21621);
var inst_21631 = rerenderer.core.load_image(inst_21630);
var state_21652__$1 = state_21652;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21652__$1,(14),inst_21631);
} else {
if((state_val_21653 === (2))){
var inst_21609 = (state_21652[(8)]);
var inst_21608 = (state_21652[(10)]);
var inst_21611 = (inst_21609 < inst_21608);
var inst_21612 = inst_21611;
var state_21652__$1 = state_21652;
if(cljs.core.truth_(inst_21612)){
var statearr_21664_21692 = state_21652__$1;
(statearr_21664_21692[(1)] = (4));

} else {
var statearr_21665_21693 = state_21652__$1;
(statearr_21665_21693[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21653 === (11))){
var inst_21621 = (state_21652[(14)]);
var inst_21625 = cljs.core.chunk_first(inst_21621);
var inst_21626 = cljs.core.chunk_rest(inst_21621);
var inst_21627 = cljs.core.count(inst_21625);
var inst_21606 = inst_21626;
var inst_21607 = inst_21625;
var inst_21608 = inst_21627;
var inst_21609 = (0);
var state_21652__$1 = (function (){var statearr_21666 = state_21652;
(statearr_21666[(7)] = inst_21607);

(statearr_21666[(8)] = inst_21609);

(statearr_21666[(9)] = inst_21606);

(statearr_21666[(10)] = inst_21608);

return statearr_21666;
})();
var statearr_21667_21694 = state_21652__$1;
(statearr_21667_21694[(2)] = null);

(statearr_21667_21694[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21653 === (9))){
var state_21652__$1 = state_21652;
var statearr_21668_21695 = state_21652__$1;
(statearr_21668_21695[(2)] = null);

(statearr_21668_21695[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21653 === (5))){
var inst_21621 = (state_21652[(14)]);
var inst_21606 = (state_21652[(9)]);
var inst_21621__$1 = cljs.core.seq(inst_21606);
var state_21652__$1 = (function (){var statearr_21669 = state_21652;
(statearr_21669[(14)] = inst_21621__$1);

return statearr_21669;
})();
if(inst_21621__$1){
var statearr_21670_21696 = state_21652__$1;
(statearr_21670_21696[(1)] = (8));

} else {
var statearr_21671_21697 = state_21652__$1;
(statearr_21671_21697[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21653 === (14))){
var inst_21621 = (state_21652[(14)]);
var inst_21633 = (state_21652[(2)]);
var inst_21634 = cljs.core.next(inst_21621);
var inst_21606 = inst_21634;
var inst_21607 = null;
var inst_21608 = (0);
var inst_21609 = (0);
var state_21652__$1 = (function (){var statearr_21672 = state_21652;
(statearr_21672[(7)] = inst_21607);

(statearr_21672[(8)] = inst_21609);

(statearr_21672[(9)] = inst_21606);

(statearr_21672[(10)] = inst_21608);

(statearr_21672[(15)] = inst_21633);

return statearr_21672;
})();
var statearr_21673_21698 = state_21652__$1;
(statearr_21673_21698[(2)] = null);

(statearr_21673_21698[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21653 === (10))){
var inst_21640 = (state_21652[(2)]);
var state_21652__$1 = state_21652;
var statearr_21674_21699 = state_21652__$1;
(statearr_21674_21699[(2)] = inst_21640);

(statearr_21674_21699[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21653 === (8))){
var inst_21621 = (state_21652[(14)]);
var inst_21623 = cljs.core.chunked_seq_QMARK_(inst_21621);
var state_21652__$1 = state_21652;
if(inst_21623){
var statearr_21675_21700 = state_21652__$1;
(statearr_21675_21700[(1)] = (11));

} else {
var statearr_21676_21701 = state_21652__$1;
(statearr_21676_21701[(1)] = (12));

}

return cljs.core.cst$kw$recur;
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
}
}
}
}
}
}
});})(c__10139__auto___21687,event_ch,platform_info,state_atom,render_state_BANG_,map__21598,map__21598__$1,options,root_view,event_handler,state,preload_images))
;
return ((function (switch__10072__auto__,c__10139__auto___21687,event_ch,platform_info,state_atom,render_state_BANG_,map__21598,map__21598__$1,options,root_view,event_handler,state,preload_images){
return (function() {
var rerenderer$core$state_machine__10073__auto__ = null;
var rerenderer$core$state_machine__10073__auto____0 = (function (){
var statearr_21680 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21680[(0)] = rerenderer$core$state_machine__10073__auto__);

(statearr_21680[(1)] = (1));

return statearr_21680;
});
var rerenderer$core$state_machine__10073__auto____1 = (function (state_21652){
while(true){
var ret_value__10074__auto__ = (function (){try{while(true){
var result__10075__auto__ = switch__10072__auto__(state_21652);
if(cljs.core.keyword_identical_QMARK_(result__10075__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10075__auto__;
}
break;
}
}catch (e21681){if((e21681 instanceof Object)){
var ex__10076__auto__ = e21681;
var statearr_21682_21702 = state_21652;
(statearr_21682_21702[(5)] = ex__10076__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21652);

return cljs.core.cst$kw$recur;
} else {
throw e21681;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10074__auto__,cljs.core.cst$kw$recur)){
var G__21703 = state_21652;
state_21652 = G__21703;
continue;
} else {
return ret_value__10074__auto__;
}
break;
}
});
rerenderer$core$state_machine__10073__auto__ = function(state_21652){
switch(arguments.length){
case 0:
return rerenderer$core$state_machine__10073__auto____0.call(this);
case 1:
return rerenderer$core$state_machine__10073__auto____1.call(this,state_21652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rerenderer$core$state_machine__10073__auto__.cljs$core$IFn$_invoke$arity$0 = rerenderer$core$state_machine__10073__auto____0;
rerenderer$core$state_machine__10073__auto__.cljs$core$IFn$_invoke$arity$1 = rerenderer$core$state_machine__10073__auto____1;
return rerenderer$core$state_machine__10073__auto__;
})()
;})(switch__10072__auto__,c__10139__auto___21687,event_ch,platform_info,state_atom,render_state_BANG_,map__21598,map__21598__$1,options,root_view,event_handler,state,preload_images))
})();
var state__10141__auto__ = (function (){var statearr_21683 = (f__10140__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10140__auto__.cljs$core$IFn$_invoke$arity$0() : f__10140__auto__.call(null));
(statearr_21683[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10139__auto___21687);

return statearr_21683;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10141__auto__);
});})(c__10139__auto___21687,event_ch,platform_info,state_atom,render_state_BANG_,map__21598,map__21598__$1,options,root_view,event_handler,state,preload_images))
);


if(cljs.core.truth_(event_handler)){
(event_handler.cljs$core$IFn$_invoke$arity$3 ? event_handler.cljs$core$IFn$_invoke$arity$3(event_ch,state_atom,options) : event_handler.call(null,event_ch,state_atom,options));
} else {
}

return rerenderer.core.map__GT_Game(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$state_DASH_atom,state_atom,cljs.core.cst$kw$initial_DASH_state,state,cljs.core.cst$kw$platform_DASH_info,platform_info,cljs.core.cst$kw$render_DASH_state_BANG_,render_state_BANG_,cljs.core.cst$kw$event_DASH_ch,event_ch], null));
});

rerenderer.core.init_BANG_.cljs$lang$maxFixedArity = (0);

rerenderer.core.init_BANG_.cljs$lang$applyTo = (function (seq21596){
return rerenderer.core.init_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21596));
});
