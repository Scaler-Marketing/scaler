(()=>{function e(e){e.forEach(e=>{let t=document.createElement("span");t.classList.add("line-wrapper"),e.parentNode.insertBefore(t,e),t.appendChild(e)})}!function(){e(new SplitType(".hero-subheadline p",{types:"lines",tagName:"span"}).lines);let t=gsap.timeline(),r=document.querySelector(".hero-video-bg video"),o=document.querySelector(".reels-video-thumb");o.muted=!0,o.loop=!0,o.playsinline=!0,t.to(".hero-words-wrapper",{y:"-33.33%",duration:1,ease:"expo.inOut"}).to(".hero-words-wrapper",{y:"-66.66%",duration:1,ease:"expo.inOut"}).to(".hero-line",{height:"25vh",duration:1,ease:"power4.inOut"},2.1).to(".hero-line-spacer",{width:"100%",duration:1,ease:"power4.inOut"}).to(".header",{y:"0%",duration:1,ease:"power4.inOut"},"-=1").to(".hero-subheadline .line",{y:"0%",duration:.5,ease:"power4.Out",stagger:.05},"-=0.5").to(".hero-video-bg",{opacity:"100%",duration:.5,ease:"power4.Out",onStart:()=>{r.play()}},"-=1.5").to(".reels-video-container",{y:"0rem",duration:.5,ease:"power4.Out",onStart:()=>{o.play()}},"-=0.5")}(),e(new SplitType(".brand-core-text",{types:"lines, words",tagName:"span"}).lines),document.querySelectorAll(".brand-core-inner").forEach(e=>{let t=e.querySelectorAll(".word");gsap.timeline({paused:!0}),function(e,t){gsap.timeline({scrollTrigger:{trigger:e,scrub:!0,start:"top top",end:"bottom center",markers:!1,pin:!1}}).to(t,{yPercent:0,stagger:.2,duration:2,ease:"none"}).addPause(4).to(t,{yPercent:-100,stagger:.2,duration:2,ease:"none"})}(e,t)}),gsap.set(".hero-line._02, .hero-line._03",{height:0}),gsap.set(".header",{y:"-100%"}),gsap.set(".hero-subheadline .line",{y:"100%"}),gsap.set(".hero-video-bg",{opacity:0}),gsap.set(".reels-video-container",{y:"12rem"}),gsap.set(".brand-core-text .word",{yPercent:100}),gsap.set(".case-study-item-inner",{clipPath:"inset(50%)"}),document.querySelectorAll(".case-study-item").forEach(e=>{let t=gsap.timeline(),r=e.querySelector(".case-study-item-inner"),o=e.querySelector(".case-study-item-img");t.to(r,{clipPath:"inset(0%)",ease:"none",scrollTrigger:{trigger:e,scrub:!0,start:"top top",end:"center center"}}),t.from(o,{scale:1.2,opacity:.8,ease:"none",scrollTrigger:{trigger:e,scrub:!0,start:"top top",end:"center center"}})})})();
//# sourceMappingURL=home.js.map
