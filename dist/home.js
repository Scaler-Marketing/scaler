(()=>{function e(e,t,r,o){Object.defineProperty(e,t,{get:r,set:o,enumerable:!0,configurable:!0})}var t=globalThis,r={},o={},n=t.parcelRequire5d03;null==n&&((n=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var s=Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){o[e]=t},t.parcelRequire5d03=n);var s=n.register;s("2rxJM",function(t,r){e(t.exports,"setLinesWrapper",()=>o);function o(e,t){e.forEach(e=>{let t=document.createElement("span");t.classList.add("line-wrapper"),e.parentNode.insertBefore(t,e),t.appendChild(e)}),"function"==typeof t&&t()}}),s("hlG0U",function(t,r){e(t.exports,"initNewsSlider",()=>o);function o(){document.querySelector(".news-slider")&&document.querySelectorAll(".news-slider").forEach(e=>{new Swiper(e,{slidesPerView:"auto"});let t=e.querySelectorAll(".news-item");gsap.set(t,{y:"3rem",opacity:0}),gsap.timeline({scrollTrigger:{trigger:e,start:"25% bottom",onEnter:()=>{gsap.to(t,{y:"0rem",opacity:1,stagger:.1,duration:.5,ease:"expo.out"})}}}),t.forEach(e=>{let t=e.querySelector(".news-item-thumb-img._02"),r=e.querySelector(".news-item-thumb-img._03"),o=gsap.timeline({paused:!0});o.to(t,{scale:.8,duration:.3,ease:"expo.inOut"}).to(r,{scale:.6,duration:.3,ease:"expo.inOut"},"-=0.3"),e.addEventListener("mouseover",()=>{o.play()}),e.addEventListener("mouseout",()=>{o.reverse()})})})}}),s("71MPf",function(t,r){e(t.exports,"initServicesList",()=>s);var o=n("2rxJM");function s(){let e=document.querySelectorAll(".services-list-item");e&&e.forEach(e=>{let t,r;let n=e.querySelector(".services-list-item-line"),s=e.querySelector("h3"),a=e.querySelector(".services-list-item-description > p"),l=e.querySelector(".button"),c=new SplitType(s,{types:"lines, words",tagName:"span"}),p=new SplitType(a,{types:"lines",tagName:"span"});(0,o.setLinesWrapper)(c.lines,()=>{t=s.querySelectorAll(".word"),gsap.set(t,{yPercent:100})}),(0,o.setLinesWrapper)(p.lines,()=>{r=a.querySelectorAll(".line"),gsap.set(r,{yPercent:100})}),gsap.set(n,{scaleX:0}),gsap.set(l,{yPercent:100}),gsap.timeline({scrollTrigger:{trigger:e,start:"top bottom-=20%",onEnter:()=>{gsap.timeline().to(n,{scaleX:1,duration:.5,ease:"expo.out"}).to(t,{yPercent:0,stagger:.1,duration:.5,ease:"expo.out"},"-=0.25").to(r,{yPercent:0,stagger:.05,ease:"expo.out"},"-=0.25").to(l,{yPercent:0,duration:.3,ease:"expo.out"},"-=0.25")}}})})}});var a=(n("2rxJM"),n("2rxJM"));function l(e,t){gsap.fromTo(t,{maskImage:"radial-gradient(circle at 50% 50%, black 0%, rgba(0, 0, 0, 0) 5%)"},{duration:1,maskImage:"radial-gradient(circle at 50% 50%, black 100%, rgba(0, 0, 0, 0) 100%)"}),gsap.fromTo(e,{maskImage:"radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 0) 0%, black 5%)"},{duration:1,maskImage:"radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 0) 100%, black 100%)"}),gsap.timeline().fromTo(t.querySelector("p"),{opacity:0,scale:.8},{opacity:1,scale:1,duration:1,ease:"expo.out"}).fromTo(t.querySelector(".testimonials-source"),{opacity:0,yPercent:100},{opacity:1,yPercent:0,duration:.5},"-=1")}var c=n("hlG0U"),p=n("71MPf");!function(){let e=new SplitType(".hero-subheadline p",{types:"lines",tagName:"span"});(0,a.setLinesWrapper)(e.lines,()=>{}),gsap.set(".hero-line._02, .hero-line._03",{height:0}),gsap.set(".header",{yPercent:-100}),gsap.set(".hero-video-bg",{opacity:0}),gsap.set(".hero-subheadline .line",{yPercent:100}),gsap.set(".reels-video-container",{y:"12rem"});let t=gsap.timeline(),r=document.querySelector(".hero-video-bg video"),o=document.querySelector(".reels-video-thumb");o.muted=!0,o.loop=!0,o.playsinline=!0,t.to(".hero-words-wrapper",{y:"-33.33%",duration:1,delay:.5,ease:"expo.inOut"}).to(".hero-words-wrapper",{y:"-66.66%",duration:1,ease:"expo.inOut"}).to(".hero-line",{height:"25vh",duration:1,ease:"power4.inOut"},2.1).to(".hero-line-spacer",{width:"100%",duration:1,ease:"power4.inOut"}).to(".header",{yPercent:0,duration:1,ease:"power4.inOut"},"-=1").to(".hero-subheadline .line",{yPercent:0,duration:.5,ease:"power4.Out",stagger:.05},"-=0.5").to(".hero-video-bg",{opacity:"100%",duration:.5,ease:"power4.Out",onStart:()=>{r.play()}},"-=1.5").to(".reels-video-container",{y:"0rem",duration:.5,ease:"power4.Out",onStart:()=>{o.play()}},"-=0.5")}(),document.fonts.ready.then(()=>{let e,t,r,o;(function(){let e=new SplitType(".brand-core-text",{types:"lines, words",tagName:"span"});(0,a.setLinesWrapper)(e.lines,()=>{gsap.set(".brand-core-text .word",{yPercent:100})});let t=document.querySelectorAll(".brand-core-inner");t.forEach((e,r)=>{let o=e.classList.contains("_03");console.log(e,o);let n=e.querySelectorAll(".word"),s=r===t.length-1;o?n.forEach((t,r)=>{gsap.fromTo(t,{yPercent:100},{yPercent:0,ease:"none",scrollTrigger:{trigger:e,scrub:!0,start:`${10*r}% top`,end:`${10*r+10}% top`,markers:!1,pin:!1}})}):gsap.fromTo(n,{yPercent:100},{yPercent:0,stagger:.1,ease:"none",scrollTrigger:{trigger:e,scrub:!0,start:"top top",end:"30% top",markers:!1,pin:!1}}),s||gsap.fromTo(n,{yPercent:0},{yPercent:-100,stagger:.1,ease:"none",immediateRender:!1,scrollTrigger:{trigger:e,scrub:!0,start:"70% top",end:"bottom top",markers:!1,pin:!1}})})})(),gsap.set(".case-study-item-inner",{maskImage:"radial-gradient(circle at 50% 50%, black 50%, rgba(0, 0, 0, 0) 65%)",maskRepeat:"no-repeat",maskPosition:"center",maskSize:"0vw 0vw"}),document.querySelectorAll(".case-study-item").forEach(e=>{let t=gsap.timeline(),r=e.querySelector(".case-study-item-inner"),o=e.querySelector(".case-study-item-img");t.to(r,{ease:"none",maskSize:"200vw 200vw",scrollTrigger:{trigger:e,scrub:!0,start:"top top",end:"bottom bottom",onEnter:()=>{e.style.pointerEvents="auto"},onEnterBack:()=>{e.style.pointerEvents="auto"},onLeave:()=>{e.style.pointerEvents="auto"},onLeaveBack:()=>{e.style.pointerEvents="auto"}}}),t.from(o,{scale:1.2,opacity:.5,ease:"none",scrollTrigger:{trigger:e,scrub:!0,start:"top top",end:"center center"}})}),document.querySelectorAll(".case-study-title").forEach(e=>{let t=e.querySelector(".case-study-item-marquee");gsap.fromTo(t,{yPercent:100},{ease:"none",yPercent:0,scrollTrigger:{trigger:e,scrub:!0,start:"10% top",end:"20% top"}}),gsap.fromTo(t,{yPercent:0},{yPercent:-100,ease:"none",immediateRender:!1,scrollTrigger:{trigger:e,scrub:!0,start:"110% top",end:"120% top"}})}),function(){let e=document.querySelector(".case-studies-progress-inner"),t=document.querySelector(".case-studies-progress"),r=t.querySelector(".case-studies-progress-item"),o=document.querySelectorAll(".case-study-item-link").length,n=document.querySelector(".case-studies-scroll");if(!t||!o)return;for(i=1;i<o;i++){let e=r.cloneNode();t.appendChild(e)}let s=t.cloneNode(!0);s.classList.add("progress"),e.appendChild(s),gsap.fromTo(s,{clipPath:"inset(0% 0% 100% 0%)"},{clipPath:"inset(0% 0% 0% 0%)",scrollTrigger:{trigger:n,start:"top top",end:"bottom bottom",scrub:!0}})}(),e=document.querySelectorAll(".testimonial-item"),t=document.querySelector(".button.next"),r=document.querySelector(".button.prev"),o=0,gsap.set(".testimonial-item",{maskRepeat:"no-repeat",maskPosition:"center",maskSize:"100vw 100vw"}),gsap.set(".testimonial-item:not(:first-child)",{maskImage:"radial-gradient(circle at 50% 50%, black 0%, rgba(0, 0, 0, 0) 0%)"}),t.addEventListener("click",function(){let t=e[o];o<e.length-1?(l(t,e[o+1]),o++):(l(t,e[0]),o=0)}),r.addEventListener("click",function(){let t=e[o];o>0?(l(t,e[o-1]),o--):(l(t,e[e.length-1]),o=e.length-1)}),(0,c.initNewsSlider)(),(0,p.initServicesList)()})})();
//# sourceMappingURL=home.js.map
