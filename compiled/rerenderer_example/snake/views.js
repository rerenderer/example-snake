// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('rerenderer_example.snake.views');
goog.require('cljs.core');
goog.require('rerenderer.primitives');
rerenderer_example.snake.views.colors = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$background,"#F3FFE2",cljs.core.cst$kw$interface,"#1695A3",cljs.core.cst$kw$text,"#225378",cljs.core.cst$kw$game_DASH_item,"#EB7F00"], null);
rerenderer_example.snake.views.background = (function rerenderer_example$snake$views$background(var_args){
var args__7221__auto__ = [];
var len__7214__auto___21425 = arguments.length;
var i__7215__auto___21426 = (0);
while(true){
if((i__7215__auto___21426 < len__7214__auto___21425)){
args__7221__auto__.push((arguments[i__7215__auto___21426]));

var G__21427 = (i__7215__auto___21426 + (1));
i__7215__auto___21426 = G__21427;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((0) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((0)),(0))):null);
return rerenderer_example.snake.views.background.cljs$core$IFn$_invoke$arity$variadic(argseq__7222__auto__);
});

rerenderer_example.snake.views.background.cljs$core$IFn$_invoke$arity$variadic = (function (children){
return rerenderer.primitives.rectangle.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$width,(800),cljs.core.cst$kw$height,(600),cljs.core.cst$kw$x,(0),cljs.core.cst$kw$y,(0),cljs.core.cst$kw$color,cljs.core.cst$kw$background.cljs$core$IFn$_invoke$arity$1(rerenderer_example.snake.views.colors)], null),cljs.core.array_seq([children], 0));
});

rerenderer_example.snake.views.background.cljs$lang$maxFixedArity = (0);

rerenderer_example.snake.views.background.cljs$lang$applyTo = (function (seq21424){
return rerenderer_example.snake.views.background.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21424));
});
rerenderer_example.snake.views.button = (function rerenderer_example$snake$views$button(p__21428){
var map__21431 = p__21428;
var map__21431__$1 = ((((!((map__21431 == null)))?((((map__21431.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21431.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21431):map__21431);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21431__$1,cljs.core.cst$kw$text);
return rerenderer.primitives.rectangle.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$width,(600),cljs.core.cst$kw$height,(100),cljs.core.cst$kw$x,(100),cljs.core.cst$kw$y,(400),cljs.core.cst$kw$color,cljs.core.cst$kw$interface.cljs$core$IFn$_invoke$arity$1(rerenderer_example.snake.views.colors)], null),cljs.core.array_seq([rerenderer.primitives.text(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$width,(600),cljs.core.cst$kw$height,(100),cljs.core.cst$kw$x,(20),cljs.core.cst$kw$y,(20),cljs.core.cst$kw$color,cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(rerenderer_example.snake.views.colors),cljs.core.cst$kw$font_DASH_size,(32),cljs.core.cst$kw$value,text], null))], 0));
});
rerenderer_example.snake.views.title = (function rerenderer_example$snake$views$title(p__21433){
var map__21436 = p__21433;
var map__21436__$1 = ((((!((map__21436 == null)))?((((map__21436.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21436.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21436):map__21436);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21436__$1,cljs.core.cst$kw$text);
return rerenderer.primitives.text(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$width,(600),cljs.core.cst$kw$height,(200),cljs.core.cst$kw$x,(100),cljs.core.cst$kw$y,(100),cljs.core.cst$kw$color,cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(rerenderer_example.snake.views.colors),cljs.core.cst$kw$font_DASH_size,(96),cljs.core.cst$kw$value,text], null));
});
rerenderer_example.snake.views.start_menu = (function rerenderer_example$snake$views$start_menu(){
return rerenderer_example.snake.views.background.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([rerenderer_example.snake.views.title(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text,"SNAKE"], null)),rerenderer_example.snake.views.button(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text,"Touch or press space to start"], null))], 0));
});
rerenderer_example.snake.views.game_over = (function rerenderer_example$snake$views$game_over(score){
return rerenderer_example.snake.views.background.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([rerenderer_example.snake.views.title(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text,"GAME OVER"], null)),rerenderer.primitives.text(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$width,(600),cljs.core.cst$kw$height,(100),cljs.core.cst$kw$x,(100),cljs.core.cst$kw$y,(270),cljs.core.cst$kw$color,cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(rerenderer_example.snake.views.colors),cljs.core.cst$kw$font_DASH_size,(48),cljs.core.cst$kw$value,[cljs.core.str("SCORE: "),cljs.core.str(score)].join('')], null)),rerenderer_example.snake.views.button(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text,"Touch or press space to start again"], null))], 0));
});
rerenderer_example.snake.views.pause = (function rerenderer_example$snake$views$pause(score){
return rerenderer_example.snake.views.background.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([rerenderer_example.snake.views.title(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text,"PAUSE"], null)),rerenderer.primitives.text(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$width,(600),cljs.core.cst$kw$height,(100),cljs.core.cst$kw$x,(100),cljs.core.cst$kw$y,(270),cljs.core.cst$kw$color,cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(rerenderer_example.snake.views.colors),cljs.core.cst$kw$font_DASH_size,(48),cljs.core.cst$kw$value,[cljs.core.str("SCORE: "),cljs.core.str(score)].join('')], null)),rerenderer_example.snake.views.button(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text,"Touch or press space to continue"], null))], 0));
});
rerenderer_example.snake.views.live = (function rerenderer_example$snake$views$live(p__21438){
var map__21441 = p__21438;
var map__21441__$1 = ((((!((map__21441 == null)))?((((map__21441.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21441.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21441):map__21441);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21441__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21441__$1,cljs.core.cst$kw$y);
return rerenderer.primitives.image(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$width,(36),cljs.core.cst$kw$height,(32),cljs.core.cst$kw$x,x,cljs.core.cst$kw$y,y,cljs.core.cst$kw$sx,(0),cljs.core.cst$kw$sy,(0),cljs.core.cst$kw$src,"sprite.png"], null));
});
rerenderer_example.snake.views.panel = (function rerenderer_example$snake$views$panel(score,lives){
return rerenderer.primitives.rectangle.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$width,(800),cljs.core.cst$kw$height,(50),cljs.core.cst$kw$x,(0),cljs.core.cst$kw$y,(0),cljs.core.cst$kw$color,cljs.core.cst$kw$interface.cljs$core$IFn$_invoke$arity$1(rerenderer_example.snake.views.colors)], null),cljs.core.array_seq([rerenderer.primitives.text(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$width,(300),cljs.core.cst$kw$height,(50),cljs.core.cst$kw$color,cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(rerenderer_example.snake.views.colors),cljs.core.cst$kw$font_DASH_size,(24),cljs.core.cst$kw$x,(10),cljs.core.cst$kw$y,(8),cljs.core.cst$kw$value,[cljs.core.str("SCORE: "),cljs.core.str(score)].join('')], null)),rerenderer.primitives.text(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$width,(100),cljs.core.cst$kw$height,(50),cljs.core.cst$kw$color,cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(rerenderer_example.snake.views.colors),cljs.core.cst$kw$font_DASH_size,(24),cljs.core.cst$kw$x,(530),cljs.core.cst$kw$y,(8),cljs.core.cst$kw$value,"LIVES:"], null)),(function (){var iter__6928__auto__ = (function rerenderer_example$snake$views$panel_$_iter__21449(s__21450){
return (new cljs.core.LazySeq(null,(function (){
var s__21450__$1 = s__21450;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__21450__$1);
if(temp__4657__auto__){
var s__21450__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21450__$2)){
var c__6926__auto__ = cljs.core.chunk_first(s__21450__$2);
var size__6927__auto__ = cljs.core.count(c__6926__auto__);
var b__21452 = cljs.core.chunk_buffer(size__6927__auto__);
if((function (){var i__21451 = (0);
while(true){
if((i__21451 < size__6927__auto__)){
var n = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6926__auto__,i__21451);
cljs.core.chunk_append(b__21452,rerenderer_example.snake.views.live(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,((610) + (n * (36))),cljs.core.cst$kw$y,(8)], null)));

var G__21455 = (i__21451 + (1));
i__21451 = G__21455;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21452),rerenderer_example$snake$views$panel_$_iter__21449(cljs.core.chunk_rest(s__21450__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21452),null);
}
} else {
var n = cljs.core.first(s__21450__$2);
return cljs.core.cons(rerenderer_example.snake.views.live(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,((610) + (n * (36))),cljs.core.cst$kw$y,(8)], null)),rerenderer_example$snake$views$panel_$_iter__21449(cljs.core.rest(s__21450__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__6928__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(lives));
})()], 0));
});
rerenderer_example.snake.views.translate = (function rerenderer_example$snake$views$translate(pos){
return (pos * (20));
});
rerenderer_example.snake.views.bread = (function rerenderer_example$snake$views$bread(p__21456){
var map__21459 = p__21456;
var map__21459__$1 = ((((!((map__21459 == null)))?((((map__21459.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21459.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21459):map__21459);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21459__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21459__$1,cljs.core.cst$kw$y);
return rerenderer.primitives.image(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$width,(20),cljs.core.cst$kw$height,(20),cljs.core.cst$kw$x,x,cljs.core.cst$kw$y,y,cljs.core.cst$kw$sx,(40),cljs.core.cst$kw$sy,(0),cljs.core.cst$kw$src,"sprite.png"], null));
});
rerenderer_example.snake.views.snake_part = (function rerenderer_example$snake$views$snake_part(p__21461){
var map__21464 = p__21461;
var map__21464__$1 = ((((!((map__21464 == null)))?((((map__21464.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21464.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21464):map__21464);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21464__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21464__$1,cljs.core.cst$kw$y);
return rerenderer.primitives.image(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$width,(20),cljs.core.cst$kw$height,(20),cljs.core.cst$kw$x,x,cljs.core.cst$kw$y,y,cljs.core.cst$kw$sx,(70),cljs.core.cst$kw$sy,(0),cljs.core.cst$kw$src,"sprite.png"], null));
});
rerenderer_example.snake.views.field = (function rerenderer_example$snake$views$field(candy,snake){
return rerenderer.primitives.rectangle.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$width,(800),cljs.core.cst$kw$height,(550),cljs.core.cst$kw$x,(0),cljs.core.cst$kw$y,(50),cljs.core.cst$kw$color,cljs.core.cst$kw$background.cljs$core$IFn$_invoke$arity$1(rerenderer_example.snake.views.colors)], null),cljs.core.array_seq([(function (){var iter__6928__auto__ = (function rerenderer_example$snake$views$field_$_iter__21476(s__21477){
return (new cljs.core.LazySeq(null,(function (){
var s__21477__$1 = s__21477;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__21477__$1);
if(temp__4657__auto__){
var s__21477__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21477__$2)){
var c__6926__auto__ = cljs.core.chunk_first(s__21477__$2);
var size__6927__auto__ = cljs.core.count(c__6926__auto__);
var b__21479 = cljs.core.chunk_buffer(size__6927__auto__);
if((function (){var i__21478 = (0);
while(true){
if((i__21478 < size__6927__auto__)){
var vec__21484 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6926__auto__,i__21478);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21484,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21484,(1),null);
cljs.core.chunk_append(b__21479,rerenderer_example.snake.views.snake_part(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,rerenderer_example.snake.views.translate(x),cljs.core.cst$kw$y,rerenderer_example.snake.views.translate(y)], null)));

var G__21486 = (i__21478 + (1));
i__21478 = G__21486;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21479),rerenderer_example$snake$views$field_$_iter__21476(cljs.core.chunk_rest(s__21477__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21479),null);
}
} else {
var vec__21485 = cljs.core.first(s__21477__$2);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21485,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21485,(1),null);
return cljs.core.cons(rerenderer_example.snake.views.snake_part(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,rerenderer_example.snake.views.translate(x),cljs.core.cst$kw$y,rerenderer_example.snake.views.translate(y)], null)),rerenderer_example$snake$views$field_$_iter__21476(cljs.core.rest(s__21477__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__6928__auto__(snake);
})(),rerenderer_example.snake.views.bread(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,rerenderer_example.snake.views.translate(cljs.core.first(candy)),cljs.core.cst$kw$y,rerenderer_example.snake.views.translate(cljs.core.second(candy))], null))], 0));
});
rerenderer_example.snake.views.game_scene = (function rerenderer_example$snake$views$game_scene(score,lives,candy,snake){
return rerenderer_example.snake.views.background.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([rerenderer_example.snake.views.panel(score,lives),rerenderer_example.snake.views.field(candy,snake)], 0));
});
rerenderer_example.snake.views.root_view = (function rerenderer_example$snake$views$root_view(p__21487){
var map__21493 = p__21487;
var map__21493__$1 = ((((!((map__21493 == null)))?((((map__21493.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21493.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21493):map__21493);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21493__$1,cljs.core.cst$kw$status);
var score = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21493__$1,cljs.core.cst$kw$score);
var lives = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21493__$1,cljs.core.cst$kw$lives);
var candy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21493__$1,cljs.core.cst$kw$candy);
var snake = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21493__$1,cljs.core.cst$kw$snake);
var pred__21495 = cljs.core._EQ_;
var expr__21496 = status;
if(cljs.core.truth_((pred__21495.cljs$core$IFn$_invoke$arity$2 ? pred__21495.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$start_DASH_menu,expr__21496) : pred__21495.call(null,cljs.core.cst$kw$start_DASH_menu,expr__21496)))){
return rerenderer_example.snake.views.start_menu();
} else {
if(cljs.core.truth_((pred__21495.cljs$core$IFn$_invoke$arity$2 ? pred__21495.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$game_DASH_over,expr__21496) : pred__21495.call(null,cljs.core.cst$kw$game_DASH_over,expr__21496)))){
return rerenderer_example.snake.views.game_over(score);
} else {
if(cljs.core.truth_((pred__21495.cljs$core$IFn$_invoke$arity$2 ? pred__21495.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$in_DASH_progress,expr__21496) : pred__21495.call(null,cljs.core.cst$kw$in_DASH_progress,expr__21496)))){
return rerenderer_example.snake.views.game_scene(score,lives,candy,snake);
} else {
if(cljs.core.truth_((pred__21495.cljs$core$IFn$_invoke$arity$2 ? pred__21495.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pause,expr__21496) : pred__21495.call(null,cljs.core.cst$kw$pause,expr__21496)))){
return rerenderer_example.snake.views.pause(score);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__21496)].join('')));
}
}
}
}
});
