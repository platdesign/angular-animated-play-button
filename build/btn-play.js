/**
 *
 *	@version	0.0.0
 *	@author		Christian Blaschke <mail@platdesign.de>
 *	@updated	2015-10-19 20:05:31
 *
 *	Based on the fabulous work of @LeaVerou =)
 *	http://dabblet.com/gist/d21d495d7ce2e5579916
 *
 */
!function n(r,t,e){function i(u,a){if(!t[u]){if(!r[u]){var f="function"==typeof require&&require;if(!a&&f)return f(u,!0);if(o)return o(u,!0);var l=new Error("Cannot find module '"+u+"'");throw l.code="MODULE_NOT_FOUND",l}var c=t[u]={exports:{}};r[u][0].call(c.exports,function(n){var t=r[u][1][n];return i(t?t:n)},c,c.exports,n,r,t,e)}return t[u].exports}for(var o="function"==typeof require&&require,u=0;u<e.length;u++)i(e[u]);return i}({1:[function(n,r){"use strict";var t=n(1),e=r.exports=t.module("pd.btn-play",[]);e.directive("btnPlay",function(){return{restrict:"A",link:function(n,r,t){function e(n){n?r.addClass("btn-play-playing"):r.removeClass("btn-play-playing")}r.addClass("btn-play"),n.$watch(function(){return n.$eval(t.btnPlay)},function(n,r){n!==r&&e(n)})}}})},{1:"angular"}]},{},[1]);