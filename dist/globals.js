(()=>{var e=globalThis,t={},r={},o=e.parcelRequire5d03;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var o=r[e];delete r[e];var a={id:e,exports:{}};return t[e]=a,o.call(a.exports,a,a.exports),a.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){r[e]=t},e.parcelRequire5d03=o),(0,o.register)("2rxJM",function(e,t){function r(e,t){e.forEach(e=>{let t=document.createElement("span");t.classList.add("line-wrapper"),e.parentNode.insertBefore(t,e),t.appendChild(e)}),"function"==typeof t&&t()}Object.defineProperty(e.exports,"setLinesWrapper",{get:()=>r,set:void 0,enumerable:!0,configurable:!0})});var a=o("2rxJM");function n(e,t){e.pause(),t&&(e.currentTime=0)}!function(){let e=document.querySelectorAll(".menu-link[data-item]");if(!e)return;let t=document.querySelector(".menu-wrapper"),r=t.querySelector(".menu-inner"),o=t.querySelector(".menu-img-wrapper"),a=o.querySelectorAll(".menu-img-item"),n=document.querySelector(".button.menu");gsap.set(r,{clipPath:"inset(0% 0% 100% 0%)"}),gsap.set(o,{clipPath:"inset(100% 0% 0% 0%)"}),gsap.set(e,{opacity:0,yPercent:100});let i=gsap.timeline({paused:!0}),l=gsap.timeline({paused:!0});l.fromTo(n.querySelectorAll(".button-label-inner"),{xPercent:0},{xPercent:-100,ease:"power4.inOut",duration:.5}),i.to(t,{display:"flex",duration:0}).to(r,{clipPath:"inset(0% 0% 0% 0%)",ease:"power4.out",duration:.75}).to(o,{clipPath:"inset(0% 0% 0% 0%)",ease:"power4.out",duration:.75},"-=.75").to(e,{opacity:1,yPercent:0,stagger:.03,ease:"power4.out"},"-=0.5"),n.addEventListener("click",()=>{console.log("click"),n.classList.contains("active")?(i.reverse(),l.reverse(),n.classList.remove("active")):(i.play(),l.play(),n.classList.add("active"))});let s=document.querySelector(".menu-link.w--current[data-item]");s||(s=document.querySelector(".menu-link[data-item]:first-child"));let c=s.dataset.item;gsap.set(`.menu-img-item[data-item="${c}"]`,{zIndex:1}),e.forEach(e=>{e.addEventListener("mouseover",()=>{let t=e.dataset.item||null;if(!t||c===t)return;let r=document.querySelector(`.menu-img-item[data-item="${t}"]`);r&&(gsap.timeline().to(a,{zIndex:0,duration:0}).to(document.querySelector(`.menu-img-item[data-item="${c}"]`),{zIndex:1,duration:0}).to(r,{zIndex:2,duration:0}).fromTo(r,{clipPath:"inset(50%)"},{clipPath:"inset(0%)",duration:.75,ease:"power4.out"}).fromTo(r.querySelectorAll(".menu-img"),{scale:1.2},{scale:1,duration:.75,ease:"power4.out"},"-=.75"),c=t)})})}(),function(){let e=new SplitType("[stagger-text]",{types:"lines, words",tagName:"span"});(0,a.setLinesWrapper)(e.lines,()=>{gsap.set("[stagger-text] .word",{yPercent:100})}),document.querySelectorAll("[stagger-text]").forEach(e=>{let t=e.querySelectorAll(".word"),r=e.dataset.startPos||"top top",o=e.dataset.endPos||"bottom center",a=e.dataset.withScroll||!1;!function(e,t,r,o,a){let n={trigger:e,scrub:!0,start:r};a?(n.end=o,gsap.timeline({scrollTrigger:n}).to(words,{yPercent:0,stagger:.02,ease:"none"})):(n.onEnter=()=>{gsap.to(t,{yPercent:0,stagger:.02,ease:"power4.Out"})},gsap.timeline({scrollTrigger:n}))}(e,t,r,o,a)})}(),function(){let e=document.querySelectorAll("video.bg-video");e&&e.forEach(e=>{let t=e.dataset.start||"top bottom",r="true"===e.dataset.pauseOutside,o="true"===e.dataset.rewind;"true"===e.dataset.loop&&(e.loop=!0);let a={trigger:e,start:t,onEnter:()=>{e.play()}};r?(a.onLeave=()=>{n(e,o)},a.onLeaveBack=()=>{n(e,o)},a.onEnterBack=()=>{console.log("play video"),e.play()}):a.once=!0,ScrollTrigger.create(a)})}()})();
//# sourceMappingURL=globals.js.map
