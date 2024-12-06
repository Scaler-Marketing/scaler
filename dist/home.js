(()=>{function e(e,t,r,o){Object.defineProperty(e,t,{get:r,set:o,enumerable:!0,configurable:!0})}var t=globalThis,r={},o={},s=t.parcelRequire5d03;null==s&&((s=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var s={id:e,exports:{}};return r[e]=s,t.call(s.exports,s,s.exports),s.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){o[e]=t},t.parcelRequire5d03=s);var n=s.register;n("2rxJM",function(t,r){e(t.exports,"setLinesWrapper",()=>o);function o(e,t){e.forEach(e=>{let t=document.createElement("span");t.classList.add("line-wrapper"),e.parentNode.insertBefore(t,e),t.appendChild(e)}),"function"==typeof t&&t()}}),n("71MPf",function(t,r){e(t.exports,"initServicesList",()=>n);var o=s("2rxJM");function n(){let e=document.querySelectorAll(".services-list-item");e&&e.forEach(e=>{let t,r;let s=e.querySelector(".services-list-item-line"),n=e.querySelector("h3"),a=e.querySelector(".services-list-item-description > p"),i=e.querySelector(".button"),c=new SplitType(n,{types:"lines, words",tagName:"span"}),l=new SplitType(a,{types:"lines",tagName:"span"});(0,o.setLinesWrapper)(c.lines,()=>{t=n.querySelectorAll(".word"),gsap.set(t,{yPercent:100})}),(0,o.setLinesWrapper)(l.lines,()=>{r=a.querySelectorAll(".line"),gsap.set(r,{yPercent:100})}),gsap.set(s,{scaleX:0}),gsap.set(i,{yPercent:100}),gsap.timeline({scrollTrigger:{trigger:e,start:"top bottom-=20%",onEnter:()=>{gsap.timeline().to(s,{scaleX:1,duration:.5,ease:"expo.out"}).to(t,{yPercent:0,stagger:.1,duration:.5,ease:"expo.out"},"-=0.25").to(r,{yPercent:0,stagger:.05,ease:"expo.out"},"-=0.25").to(i,{yPercent:0,duration:.3,ease:"expo.out"},"-=0.25")}}})})}});var a=(s("2rxJM"),s("2rxJM")),i=s("71MPf");!function(){let e=new SplitType(".hero-subheadline p",{types:"lines",tagName:"span"});(0,a.setLinesWrapper)(e.lines,()=>{}),gsap.set(".hero-line._02, .hero-line._03",{height:0}),gsap.set(".header",{yPercent:-100}),gsap.set(".hero-video-bg",{opacity:0}),gsap.set(".hero-subheadline .line",{yPercent:100}),gsap.set(".section-reels",{y:"0rem"});let t=gsap.timeline(),r=document.querySelector(".hero-video-bg video");t.to(".hero-words-wrapper",{y:"-33.33%",duration:1,delay:.5,ease:"expo.inOut"}).to(".hero-words-wrapper",{y:"-66.66%",duration:1,ease:"expo.inOut"}).to(".hero-line",{height:"25vh",duration:1,ease:"power4.inOut"},2.1).to(".hero-line-spacer",{width:"100%",duration:1,ease:"power4.inOut"}).to(".header",{yPercent:0,duration:1,ease:"power4.inOut"},"-=1").to(".hero-subheadline .line",{yPercent:0,duration:.5,ease:"power4.Out",stagger:.05},"-=0.5").to(".hero-video-bg",{opacity:"100%",duration:.5,ease:"power4.Out",onStart:()=>{r.play()}},"-=1.5").to(".section-reels",{y:"-12rem",duration:.5,ease:"power4.Out",onStart:()=>{}},"-=0.5")}(),document.fonts.ready.then(()=>{ScrollTrigger.refresh(),function(){let e=new SplitType(".brand-core-text",{types:"lines, words",tagName:"span"});(0,a.setLinesWrapper)(e.lines,()=>{gsap.set(".brand-core-text .word",{yPercent:100})});let t=document.querySelectorAll(".brand-core-step");t.forEach((e,r)=>{let o=e.classList.contains("_03"),s=e.querySelectorAll(".word");!function(e,t,r,o,s){if(o?(e.getBoundingClientRect().height,window.outerHeight,t.forEach((t,r)=>{let o=20*r;gsap.fromTo(t,{yPercent:105},{yPercent:0,ease:"none",scrollTrigger:{trigger:e,scrub:!0,start:`${o}% top`,end:`${o+5}% top`,markers:!1,pin:!1}})})):gsap.fromTo(t,{yPercent:105},{yPercent:0,stagger:.1,ease:"none",scrollTrigger:{trigger:e,scrub:!0,start:"top top",end:"25% top",markers:!1,pin:!1}}),!r){let r,s;o?(e.getBoundingClientRect().height,window.outerHeight,r="70% top",s="75% top"):(r="40% top",s="50% top"),gsap.fromTo(t,{yPercent:0},{yPercent:-105,stagger:.1,ease:"none",immediateRender:!1,scrollTrigger:{trigger:e,scrub:!0,start:r,end:s,markers:!1,pin:!1}})}if(r){let t=e.querySelector(".button");gsap.set(t,{yPercent:101}),gsap.to(t,{yPercent:0,ease:"none",immediateRender:!1,scrollTrigger:{trigger:e,scrub:!0,start:"top top",end:"25% top",markers:!1,pin:!1}})}}(e,s,r===t.length-1,o,0)})}(),document.querySelectorAll(".case-study-item").forEach((e,t)=>{let r=gsap.timeline(),o=e.dataset.project,s=document.querySelector(`.case-study-spacer[data-project="${o}"]`),n=e.querySelector(".case-study-item-inner"),a=e.querySelector(".case-study-item-img");if(0===t){let e=document.querySelector(".portfolio-sticky-wrapper");gsap.set(e,{y:"0rem",width:"30%"}),gsap.set(document.querySelector(".case-studies-overlay"),{opacity:1}),gsap.set(document.querySelector(".hero-video-bg-wrapper"),{opacity:1}),gsap.set(document.querySelector(".case-studies-overlay-text"),{y:"0rem"}),gsap.set(document.querySelectorAll(".case-study-item-footer"),{opacity:0}),r.to(e,{ease:"none",y:"12rem",width:"100%",scrollTrigger:{trigger:s,scrub:!0,start:"top bottom",end:"top top"}}),gsap.to(document.querySelectorAll(".case-study-item-footer"),{ease:"none",opacity:1,scrollTrigger:{trigger:s,scrub:!0,start:"top bottom",end:"top top"}}),gsap.to(document.querySelector(".case-studies-overlay"),{ease:"none",opacity:0,scrollTrigger:{trigger:s,scrub:!0,start:"top bottom",end:"top center",onLeave:()=>{gsap.set(document.querySelector(".case-studies-overlay"),{display:"none"})},onEnterBack:()=>{gsap.set(document.querySelector(".case-studies-overlay"),{display:"block"})}}}),gsap.to(document.querySelector(".case-studies-overlay-text"),{ease:"none",y:"-10rem",scrollTrigger:{trigger:s,scrub:!0,start:"top bottom",end:"top center"}}),gsap.to(document.querySelector(".hero-video-bg-wrapper"),{ease:"none",opacity:0,scrollTrigger:{trigger:document.querySelector(".section-hero"),scrub:!0,start:"top top",end:"bottom top"}});return}gsap.set(n,{maskImage:"radial-gradient(circle at 50% 50%, black 50%, rgba(0, 0, 0, 0) 65%)",maskRepeat:"no-repeat",maskPosition:"center",maskSize:"0vw 0vw"}),gsap.set(n,{display:"none"}),r.to(n,{ease:"none",maskSize:"200vw 200vw",scrollTrigger:{trigger:s,scrub:!0,start:"top bottom",end:"100vh top"}}),gsap.to(n,{scrollTrigger:{trigger:s,scrub:!0,start:"top bottom",end:"bottom top",onEnter:()=>{gsap.set(n,{display:"block"})},onEnterBack:()=>{gsap.set(n,{display:"block"})},onLeave:()=>{gsap.set(n,{display:"none"})},onLeaveBack:()=>{gsap.set(n,{display:"none"})}}}),r.from(a,{scale:1.2,opacity:.5,ease:"none",scrollTrigger:{trigger:s,scrub:!0,start:"top bottom",end:"bottom center"}})}),function(){document.querySelector(".case-studies-progress-inner");let e=document.querySelector(".case-studies-progress"),t=document.querySelectorAll(".case-study-item-link").length,r=document.querySelector(".case-studies-spacer");e&&t&&gsap.fromTo(e,{scaleY:0},{scaleY:1,scrollTrigger:{trigger:r,start:"top top",end:"bottom bottom",scrub:!0}})}(),(0,i.initServicesList)()})})();
//# sourceMappingURL=home.js.map
