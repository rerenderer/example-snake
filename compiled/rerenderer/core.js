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

rerenderer.core.Game.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6772__auto__,k22639,else__6773__auto__){
var self__ = this;
var this__6772__auto____$1 = this;
var G__22641 = (((k22639 instanceof cljs.core.Keyword))?k22639.fqn:null);
switch (G__22641) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k22639,else__6773__auto__);

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

rerenderer.core.Game.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22638){
var self__ = this;
var G__22638__$1 = this;
return (new cljs.core.RecordIter((0),G__22638__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state_DASH_atom,cljs.core.cst$kw$initial_DASH_state,cljs.core.cst$kw$platform_DASH_info,cljs.core.cst$kw$render_DASH_state_BANG_,cljs.core.cst$kw$event_DASH_ch], null),cljs.core._iterator(self__.__extmap)));
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

rerenderer.core.Game.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6777__auto__,k__6778__auto__,G__22638){
var self__ = this;
var this__6777__auto____$1 = this;
var pred__22642 = cljs.core.keyword_identical_QMARK_;
var expr__22643 = k__6778__auto__;
if(cljs.core.truth_((pred__22642.cljs$core$IFn$_invoke$arity$2 ? pred__22642.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$state_DASH_atom,expr__22643) : pred__22642.call(null,cljs.core.cst$kw$state_DASH_atom,expr__22643)))){
return (new rerenderer.core.Game(G__22638,self__.initial_state,self__.platform_info,self__.render_state_BANG_,self__.event_ch,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__22642.cljs$core$IFn$_invoke$arity$2 ? pred__22642.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$initial_DASH_state,expr__22643) : pred__22642.call(null,cljs.core.cst$kw$initial_DASH_state,expr__22643)))){
return (new rerenderer.core.Game(self__.state_atom,G__22638,self__.platform_info,self__.render_state_BANG_,self__.event_ch,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__22642.cljs$core$IFn$_invoke$arity$2 ? pred__22642.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$platform_DASH_info,expr__22643) : pred__22642.call(null,cljs.core.cst$kw$platform_DASH_info,expr__22643)))){
return (new rerenderer.core.Game(self__.state_atom,self__.initial_state,G__22638,self__.render_state_BANG_,self__.event_ch,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__22642.cljs$core$IFn$_invoke$arity$2 ? pred__22642.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$render_DASH_state_BANG_,expr__22643) : pred__22642.call(null,cljs.core.cst$kw$render_DASH_state_BANG_,expr__22643)))){
return (new rerenderer.core.Game(self__.state_atom,self__.initial_state,self__.platform_info,G__22638,self__.event_ch,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__22642.cljs$core$IFn$_invoke$arity$2 ? pred__22642.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$event_DASH_ch,expr__22643) : pred__22642.call(null,cljs.core.cst$kw$event_DASH_ch,expr__22643)))){
return (new rerenderer.core.Game(self__.state_atom,self__.initial_state,self__.platform_info,self__.render_state_BANG_,G__22638,self__.__meta,self__.__extmap,null));
} else {
return (new rerenderer.core.Game(self__.state_atom,self__.initial_state,self__.platform_info,self__.render_state_BANG_,self__.event_ch,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__6778__auto__,G__22638),null));
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

rerenderer.core.Game.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6769__auto__,G__22638){
var self__ = this;
var this__6769__auto____$1 = this;
return (new rerenderer.core.Game(self__.state_atom,self__.initial_state,self__.platform_info,self__.render_state_BANG_,self__.event_ch,G__22638,self__.__extmap,self__.__hash));
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

rerenderer.core.map__GT_Game = (function rerenderer$core$map__GT_Game(G__22640){
return (new rerenderer.core.Game(cljs.core.cst$kw$state_DASH_atom.cljs$core$IFn$_invoke$arity$1(G__22640),cljs.core.cst$kw$initial_DASH_state.cljs$core$IFn$_invoke$arity$1(G__22640),cljs.core.cst$kw$platform_DASH_info.cljs$core$IFn$_invoke$arity$1(G__22640),cljs.core.cst$kw$render_DASH_state_BANG_.cljs$core$IFn$_invoke$arity$1(G__22640),cljs.core.cst$kw$event_DASH_ch.cljs$core$IFn$_invoke$arity$1(G__22640),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__22640,cljs.core.cst$kw$state_DASH_atom,cljs.core.array_seq([cljs.core.cst$kw$initial_DASH_state,cljs.core.cst$kw$platform_DASH_info,cljs.core.cst$kw$render_DASH_state_BANG_,cljs.core.cst$kw$event_DASH_ch], 0)),null));
});

/**
 * Initializes new rerenderer application.
 * 
 *   * `root-view` - function for rendering root canvas - `(fn [state options])`;
 *   * `event-handler` - function for handling events - `(fn [event-ch state-atom options])`;
 *   * `scale` - scale image to screen - `true/false`;
 *   * `options` - additional platform/app-dependent options.
 * 
 *   Returns `Game` record.
 */
rerenderer.core.init_BANG_ = (function rerenderer$core$init_BANG_(var_args){
var args__7221__auto__ = [];
var len__7214__auto___22671 = arguments.length;
var i__7215__auto___22672 = (0);
while(true){
if((i__7215__auto___22672 < len__7214__auto___22671)){
args__7221__auto__.push((arguments[i__7215__auto___22672]));

var G__22673 = (i__7215__auto___22672 + (1));
i__7215__auto___22672 = G__22673;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((0) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((0)),(0))):null);
return rerenderer.core.init_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__7222__auto__);
});

rerenderer.core.init_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__22652){
var map__22653 = p__22652;
var map__22653__$1 = ((((!((map__22653 == null)))?((((map__22653.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22653.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22653):map__22653);
var options = map__22653__$1;
var root_view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22653__$1,cljs.core.cst$kw$root_DASH_view);
var event_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22653__$1,cljs.core.cst$kw$event_DASH_handler);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22653__$1,cljs.core.cst$kw$state);
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
var state_atom = (function (){var G__22655 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$platform,platform_info);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22655) : cljs.core.atom.call(null,G__22655));
})();
var render_state_BANG_ = ((function (event_ch,platform_info,state_atom,map__22653,map__22653__$1,options,root_view,event_handler,state){
return (function (p1__22646_SHARP_){
return rerenderer.render.render_BANG_(root_view,p1__22646_SHARP_,options);
});})(event_ch,platform_info,state_atom,map__22653,map__22653__$1,options,root_view,event_handler,state))
;
(rerenderer.platform.core.listen_BANG_.cljs$core$IFn$_invoke$arity$2 ? rerenderer.platform.core.listen_BANG_.cljs$core$IFn$_invoke$arity$2(event_ch,options) : rerenderer.platform.core.listen_BANG_.call(null,event_ch,options));

cljs.core.add_watch(state_atom,cljs.core.cst$kw$render,((function (event_ch,platform_info,state_atom,render_state_BANG_,map__22653,map__22653__$1,options,root_view,event_handler,state){
return (function (p1__22648_SHARP_,p2__22649_SHARP_,p3__22650_SHARP_,p4__22647_SHARP_){
return render_state_BANG_(p4__22647_SHARP_);
});})(event_ch,platform_info,state_atom,render_state_BANG_,map__22653,map__22653__$1,options,root_view,event_handler,state))
);

render_state_BANG_(state);

var c__10184__auto___22674 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10184__auto___22674,event_ch,platform_info,state_atom,render_state_BANG_,map__22653,map__22653__$1,options,root_view,event_handler,state){
return (function (){
var f__10185__auto__ = (function (){var switch__10117__auto__ = ((function (c__10184__auto___22674,event_ch,platform_info,state_atom,render_state_BANG_,map__22653,map__22653__$1,options,root_view,event_handler,state){
return (function (state_22662){
var state_val_22663 = (state_22662[(1)]);
if((state_val_22663 === (1))){
var inst_22656 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22657 = [cljs.core.cst$kw$init];
var inst_22658 = (new cljs.core.PersistentVector(null,1,(5),inst_22656,inst_22657,null));
var state_22662__$1 = state_22662;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22662__$1,(2),event_ch,inst_22658);
} else {
if((state_val_22663 === (2))){
var inst_22660 = (state_22662[(2)]);
var state_22662__$1 = state_22662;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22662__$1,inst_22660);
} else {
return null;
}
}
});})(c__10184__auto___22674,event_ch,platform_info,state_atom,render_state_BANG_,map__22653,map__22653__$1,options,root_view,event_handler,state))
;
return ((function (switch__10117__auto__,c__10184__auto___22674,event_ch,platform_info,state_atom,render_state_BANG_,map__22653,map__22653__$1,options,root_view,event_handler,state){
return (function() {
var rerenderer$core$state_machine__10118__auto__ = null;
var rerenderer$core$state_machine__10118__auto____0 = (function (){
var statearr_22667 = [null,null,null,null,null,null,null];
(statearr_22667[(0)] = rerenderer$core$state_machine__10118__auto__);

(statearr_22667[(1)] = (1));

return statearr_22667;
});
var rerenderer$core$state_machine__10118__auto____1 = (function (state_22662){
while(true){
var ret_value__10119__auto__ = (function (){try{while(true){
var result__10120__auto__ = switch__10117__auto__(state_22662);
if(cljs.core.keyword_identical_QMARK_(result__10120__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10120__auto__;
}
break;
}
}catch (e22668){if((e22668 instanceof Object)){
var ex__10121__auto__ = e22668;
var statearr_22669_22675 = state_22662;
(statearr_22669_22675[(5)] = ex__10121__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22662);

return cljs.core.cst$kw$recur;
} else {
throw e22668;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10119__auto__,cljs.core.cst$kw$recur)){
var G__22676 = state_22662;
state_22662 = G__22676;
continue;
} else {
return ret_value__10119__auto__;
}
break;
}
});
rerenderer$core$state_machine__10118__auto__ = function(state_22662){
switch(arguments.length){
case 0:
return rerenderer$core$state_machine__10118__auto____0.call(this);
case 1:
return rerenderer$core$state_machine__10118__auto____1.call(this,state_22662);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rerenderer$core$state_machine__10118__auto__.cljs$core$IFn$_invoke$arity$0 = rerenderer$core$state_machine__10118__auto____0;
rerenderer$core$state_machine__10118__auto__.cljs$core$IFn$_invoke$arity$1 = rerenderer$core$state_machine__10118__auto____1;
return rerenderer$core$state_machine__10118__auto__;
})()
;})(switch__10117__auto__,c__10184__auto___22674,event_ch,platform_info,state_atom,render_state_BANG_,map__22653,map__22653__$1,options,root_view,event_handler,state))
})();
var state__10186__auto__ = (function (){var statearr_22670 = (f__10185__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10185__auto__.cljs$core$IFn$_invoke$arity$0() : f__10185__auto__.call(null));
(statearr_22670[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10184__auto___22674);

return statearr_22670;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10186__auto__);
});})(c__10184__auto___22674,event_ch,platform_info,state_atom,render_state_BANG_,map__22653,map__22653__$1,options,root_view,event_handler,state))
);


if(cljs.core.truth_(event_handler)){
(event_handler.cljs$core$IFn$_invoke$arity$3 ? event_handler.cljs$core$IFn$_invoke$arity$3(event_ch,state_atom,options) : event_handler.call(null,event_ch,state_atom,options));
} else {
}

return rerenderer.core.map__GT_Game(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$state_DASH_atom,state_atom,cljs.core.cst$kw$initial_DASH_state,state,cljs.core.cst$kw$platform_DASH_info,platform_info,cljs.core.cst$kw$render_DASH_state_BANG_,render_state_BANG_,cljs.core.cst$kw$event_DASH_ch,event_ch], null));
});

rerenderer.core.init_BANG_.cljs$lang$maxFixedArity = (0);

rerenderer.core.init_BANG_.cljs$lang$applyTo = (function (seq22651){
return rerenderer.core.init_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22651));
});
