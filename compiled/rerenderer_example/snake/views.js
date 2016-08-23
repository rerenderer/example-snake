// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('rerenderer_example.snake.views');
goog.require('cljs.core');
goog.require('rerenderer.primitives');
rerenderer_example.snake.views.colors = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$background,"#F3FFE2",cljs.core.cst$kw$interface,"#1695A3",cljs.core.cst$kw$text,"#225378",cljs.core.cst$kw$game_DASH_item,"#EB7F00"], null);
rerenderer_example.snake.views.background = (function rerenderer_example$snake$views$background(var_args){
var args__7221__auto__ = [];
var len__7214__auto___23390 = arguments.length;
var i__7215__auto___23391 = (0);
while(true){
if((i__7215__auto___23391 < len__7214__auto___23390)){
args__7221__auto__.push((arguments[i__7215__auto___23391]));

var G__23392 = (i__7215__auto___23391 + (1));
i__7215__auto___23391 = G__23392;
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

rerenderer_example.snake.views.background.cljs$lang$applyTo = (function (seq23389){
return rerenderer_example.snake.views.background.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq23389));
});
rerenderer_example.snake.views.button = (function rerenderer_example$snake$views$button(p__23393){
var map__23396 = p__23393;
var map__23396__$1 = ((((!((map__23396 == null)))?((((map__23396.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23396.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23396):map__23396);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23396__$1,cljs.core.cst$kw$text);
return rerenderer.primitives.rectangle.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$width,(600),cljs.core.cst$kw$height,(100),cljs.core.cst$kw$x,(100),cljs.core.cst$kw$y,(400),cljs.core.cst$kw$color,cljs.core.cst$kw$interface.cljs$core$IFn$_invoke$arity$1(rerenderer_example.snake.views.colors)], null),cljs.core.array_seq([rerenderer.primitives.text(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$width,(600),cljs.core.cst$kw$height,(100),cljs.core.cst$kw$x,(20),cljs.core.cst$kw$y,(20),cljs.core.cst$kw$color,cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(rerenderer_example.snake.views.colors),cljs.core.cst$kw$font_DASH_size,(32),cljs.core.cst$kw$value,text], null))], 0));
});
rerenderer_example.snake.views.title = (function rerenderer_example$snake$views$title(p__23398){
var map__23401 = p__23398;
var map__23401__$1 = ((((!((map__23401 == null)))?((((map__23401.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23401.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23401):map__23401);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23401__$1,cljs.core.cst$kw$text);
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
rerenderer_example.snake.views.panel = (function rerenderer_example$snake$views$panel(score,lives){
return rerenderer.primitives.rectangle.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$width,(800),cljs.core.cst$kw$height,(50),cljs.core.cst$kw$x,(0),cljs.core.cst$kw$y,(0),cljs.core.cst$kw$color,cljs.core.cst$kw$interface.cljs$core$IFn$_invoke$arity$1(rerenderer_example.snake.views.colors)], null),cljs.core.array_seq([rerenderer.primitives.text(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$width,(300),cljs.core.cst$kw$height,(50),cljs.core.cst$kw$color,cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(rerenderer_example.snake.views.colors),cljs.core.cst$kw$font_DASH_size,(24),cljs.core.cst$kw$x,(10),cljs.core.cst$kw$y,(8),cljs.core.cst$kw$value,[cljs.core.str("SCORE: "),cljs.core.str(score)].join('')], null)),rerenderer.primitives.text(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$width,(300),cljs.core.cst$kw$height,(50),cljs.core.cst$kw$color,cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(rerenderer_example.snake.views.colors),cljs.core.cst$kw$font_DASH_size,(24),cljs.core.cst$kw$x,(600),cljs.core.cst$kw$y,(8),cljs.core.cst$kw$value,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,"LIVES: ",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(lives,"\u2764"))], null))], 0));
});
rerenderer_example.snake.views.translate = (function rerenderer_example$snake$views$translate(pos){
return (pos * (20));
});
rerenderer_example.snake.views.field = (function rerenderer_example$snake$views$field(candy,snake){
return rerenderer.primitives.rectangle.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$width,(800),cljs.core.cst$kw$height,(550),cljs.core.cst$kw$x,(0),cljs.core.cst$kw$y,(50),cljs.core.cst$kw$color,cljs.core.cst$kw$background.cljs$core$IFn$_invoke$arity$1(rerenderer_example.snake.views.colors)], null),cljs.core.array_seq([(function (){var iter__6928__auto__ = (function rerenderer_example$snake$views$field_$_iter__23413(s__23414){
return (new cljs.core.LazySeq(null,(function (){
var s__23414__$1 = s__23414;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__23414__$1);
if(temp__4657__auto__){
var s__23414__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23414__$2)){
var c__6926__auto__ = cljs.core.chunk_first(s__23414__$2);
var size__6927__auto__ = cljs.core.count(c__6926__auto__);
var b__23416 = cljs.core.chunk_buffer(size__6927__auto__);
if((function (){var i__23415 = (0);
while(true){
if((i__23415 < size__6927__auto__)){
var vec__23421 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6926__auto__,i__23415);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23421,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23421,(1),null);
cljs.core.chunk_append(b__23416,rerenderer.primitives.rectangle(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$x,(rerenderer_example.snake.views.translate(x) + (1)),cljs.core.cst$kw$y,(rerenderer_example.snake.views.translate(y) + (1)),cljs.core.cst$kw$width,(18),cljs.core.cst$kw$height,(18),cljs.core.cst$kw$color,cljs.core.cst$kw$game_DASH_item.cljs$core$IFn$_invoke$arity$1(rerenderer_example.snake.views.colors)], null)));

var G__23423 = (i__23415 + (1));
i__23415 = G__23423;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23416),rerenderer_example$snake$views$field_$_iter__23413(cljs.core.chunk_rest(s__23414__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23416),null);
}
} else {
var vec__23422 = cljs.core.first(s__23414__$2);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23422,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23422,(1),null);
return cljs.core.cons(rerenderer.primitives.rectangle(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$x,(rerenderer_example.snake.views.translate(x) + (1)),cljs.core.cst$kw$y,(rerenderer_example.snake.views.translate(y) + (1)),cljs.core.cst$kw$width,(18),cljs.core.cst$kw$height,(18),cljs.core.cst$kw$color,cljs.core.cst$kw$game_DASH_item.cljs$core$IFn$_invoke$arity$1(rerenderer_example.snake.views.colors)], null)),rerenderer_example$snake$views$field_$_iter__23413(cljs.core.rest(s__23414__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__6928__auto__(snake);
})(),rerenderer.primitives.text(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$x,rerenderer_example.snake.views.translate(cljs.core.first(candy)),cljs.core.cst$kw$y,(rerenderer_example.snake.views.translate(cljs.core.second(candy)) - (5)),cljs.core.cst$kw$width,(30),cljs.core.cst$kw$height,(30),cljs.core.cst$kw$font_DASH_size,(20),cljs.core.cst$kw$value,"\uD83C\uDF4E",cljs.core.cst$kw$color,cljs.core.cst$kw$game_DASH_item.cljs$core$IFn$_invoke$arity$1(rerenderer_example.snake.views.colors)], null))], 0));
});
rerenderer_example.snake.views.game_scene = (function rerenderer_example$snake$views$game_scene(score,lives,candy,snake){
return rerenderer_example.snake.views.background.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([rerenderer_example.snake.views.panel(score,lives),rerenderer_example.snake.views.field(candy,snake)], 0));
});
rerenderer_example.snake.views.root_view = (function rerenderer_example$snake$views$root_view(p__23424){
var map__23430 = p__23424;
var map__23430__$1 = ((((!((map__23430 == null)))?((((map__23430.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23430.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23430):map__23430);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23430__$1,cljs.core.cst$kw$status);
var score = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23430__$1,cljs.core.cst$kw$score);
var lives = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23430__$1,cljs.core.cst$kw$lives);
var candy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23430__$1,cljs.core.cst$kw$candy);
var snake = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23430__$1,cljs.core.cst$kw$snake);
var pred__23432 = cljs.core._EQ_;
var expr__23433 = status;
if(cljs.core.truth_((pred__23432.cljs$core$IFn$_invoke$arity$2 ? pred__23432.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$start_DASH_menu,expr__23433) : pred__23432.call(null,cljs.core.cst$kw$start_DASH_menu,expr__23433)))){
return rerenderer_example.snake.views.start_menu();
} else {
if(cljs.core.truth_((pred__23432.cljs$core$IFn$_invoke$arity$2 ? pred__23432.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$game_DASH_over,expr__23433) : pred__23432.call(null,cljs.core.cst$kw$game_DASH_over,expr__23433)))){
return rerenderer_example.snake.views.game_over(score);
} else {
if(cljs.core.truth_((pred__23432.cljs$core$IFn$_invoke$arity$2 ? pred__23432.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$in_DASH_progress,expr__23433) : pred__23432.call(null,cljs.core.cst$kw$in_DASH_progress,expr__23433)))){
return rerenderer_example.snake.views.game_scene(score,lives,candy,snake);
} else {
if(cljs.core.truth_((pred__23432.cljs$core$IFn$_invoke$arity$2 ? pred__23432.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pause,expr__23433) : pred__23432.call(null,cljs.core.cst$kw$pause,expr__23433)))){
return rerenderer_example.snake.views.pause(score);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__23433)].join('')));
}
}
}
}
});
