(()=>{var e=globalThis,t={},r={},o=e.parcelRequire5d03;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var o=r[e];delete r[e];var a={id:e,exports:{}};return t[e]=a,o.call(a.exports,a,a.exports),a.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){r[e]=t},e.parcelRequire5d03=o),(0,o.register)("2rxJM",function(e,t){function r(e,t){e.forEach(e=>{let t=document.createElement("span");t.classList.add("line-wrapper"),e.parentNode.insertBefore(t,e),t.appendChild(e)}),"function"==typeof t&&t()}Object.defineProperty(e.exports,"setLinesWrapper",{get:()=>r,set:void 0,enumerable:!0,configurable:!0})});var a=o("2rxJM");function n(e,t){e.pause(),t&&(e.currentTime=0)}!function(){let e=new SplitType("[stagger-text]",{types:"lines, words",tagName:"span"});(0,a.setLinesWrapper)(e.lines,()=>{gsap.set("[stagger-text] .word",{yPercent:100})}),document.querySelectorAll("[stagger-text]").forEach(e=>{let t=e.querySelectorAll(".word"),r=e.dataset.startPos||"top top",o=e.dataset.endPos||"bottom center",a=e.dataset.withScroll||!1;!function(e,t,r,o,a){let n={trigger:e,scrub:!0,start:r};a?(n.end=o,gsap.timeline({scrollTrigger:n}).to(words,{yPercent:0,stagger:.02,ease:"none"})):(n.onEnter=()=>{gsap.to(t,{yPercent:0,stagger:.02,ease:"power4.Out"})},gsap.timeline({scrollTrigger:n}))}(e,t,r,o,a)})}(),function(){let e=document.querySelectorAll("video.bg-video");e&&e.forEach(e=>{let t=e.dataset.start||"top bottom",r="true"===e.dataset.pauseOutside,o="true"===e.dataset.rewind,a="true"===e.dataset.loop;console.log("video set: ",t,r,o,a),a&&(e.loop=!0);let s={trigger:e,start:t,onEnter:()=>{console.log("play video"),e.play()}};r&&(s.onLeave=()=>{n(e,o)},s.onLeaveBack=()=>{n(e,o)},s.onEnterBack=()=>{console.log("play video"),e.play()}),ScrollTrigger.create(s)})}()})();
//# sourceMappingURL=globals.js.map
