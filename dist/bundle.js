!function(e){var t={};function n(o){if(t[o])return t[o].exports;var f=t[o]={i:o,l:!1,exports:{}};return e[o].call(f.exports,f,f.exports,n),f.l=!0,f.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){firebase.initializeApp({apiKey:"AIzaSyBxeb5QjCf-J4iv_r2qv-BRZRWGufYkmYw",authDomain:"chaos-burst.firebaseapp.com",databaseURL:"https://chaos-burst.firebaseio.com",projectId:"chaos-burst",storageBucket:"chaos-burst.appspot.com",messagingSenderId:"332063549155"});var n=firebase.database(),o={timeResults:[],effectResults:[]};let f={length:$("#length")};function s(e){return Math.floor(Math.random()*Math.floor(e))}!function(e,t,n){e.ref(t).once("value").then(e=>{e.forEach(e=>{let t=e.val().effect;o[n].push(t)})}).then(function(){f.length.text(o[n][s(o[n].length)].toLowerCase())}).then(function(){console.log("This happened!")})}(n,"/time","timeResults"),n.ref("/time").on("value",e=>{e.forEach(e=>{let t=e.val().effect;o.timeResults.push(t)}),f.length.text(o.timeResults[s(100)].toLowerCase())}),$(document).on("click",f.length,function(){f.length.text(o.timeResults[s(100)].toLowerCase().replace('"',""))}),n.ref("/effect").on("value",e=>{e.forEach(e=>{o.effectResults.push(e.val().effect)}),$("#eff").text(o.effectResults[s(1e4)].replace('"',"")+"."),1e4===o.effectResults.length&&firebase.database().goOffline()}),$(document).on("click","#effect",function(){$("#eff").text(o.effectResults[s(1e4)].replace('"',"")+".")}),$("#time").hide(),$("#ask").on("click",function(){$("#time").show("fast"),$(this).hide()})}]);