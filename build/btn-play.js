/**
 *
 *	@version	0.0.2
 *	@author		Christian Blaschke <mail@platdesign.de>
 *	@updated	2015-10-19 20:18:48
 *
 *	Based on the fabulous work of @LeaVerou =)
 *	http://dabblet.com/gist/d21d495d7ce2e5579916
 *
 */
!function n(e,t,r){function i(u,a){if(!t[u]){if(!e[u]){var f="function"==typeof require&&require;if(!a&&f)return f(u,!0);if(o)return o(u,!0);var l=new Error("Cannot find module '"+u+"'");throw l.code="MODULE_NOT_FOUND",l}var c=t[u]={exports:{}};e[u][0].call(c.exports,function(n){var t=e[u][1][n];return i(t?t:n)},c,c.exports,n,e,t,r)}return t[u].exports}for(var o="function"==typeof require&&require,u=0;u<r.length;u++)i(r[u]);return i}({1:[function(n,e){(function(n){"use strict";var t=n.angular,r=e.exports=t.module("pd.btn-play",[]);r.directive("btnPlay",function(){return{restrict:"A",link:function(n,e,t){function r(n){n?e.addClass("btn-play-playing"):e.removeClass("btn-play-playing")}e.addClass("d-btn-play"),n.$watch(function(){return n.$eval(t.btnPlay)},function(n,e){n!==e&&r(n)})}}})}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}]},{},[1]);