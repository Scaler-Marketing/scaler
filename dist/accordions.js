(()=>{function e(e){let t=e.querySelector(".accordion-item_trigger"),o=t.querySelector(".accordion-item_icon"),r=e.querySelector(".accordion-item_content");gsap.to(o,{rotate:"0deg",duration:.5,stagger:.01,ease:"expo.out"}),gsap.to(r,{height:"0",duration:.5,ease:"expo.inOut"}),t.classList.remove("active")}!function(){let t=document.querySelectorAll(".accordion-list");t&&t.forEach(t=>(function(t){let o=t.querySelectorAll(".accordion-item");if(!o)return;!function(e){let t=e.querySelectorAll(".accordion-item_trigger-line"),o=e.querySelectorAll(".accordion-item_icon"),r=e.querySelectorAll(".accordion-item_trigger h3");gsap.set(t,{xPercent:-100}),gsap.set(o,{scale:0,rotate:"90deg"}),gsap.set(r,{yPercent:100}),e.classList.add("ready");let c=gsap.timeline({paused:!0});c.to(t,{xPercent:0,duration:1,ease:"expo.Out",stagger:.1}).to(o,{scale:1,rotate:"0deg",duration:.5,ease:"expo.Out",stagger:.1},.05).to(r,{yPercent:0,duration:.5,ease:"expo.Out",stagger:.1},.06),gsap.timeline({scrollTrigger:{trigger:e,start:"center bottom",once:!0,onEnter:()=>{c.play()}}})}(t);let r=-1;o.forEach((t,c)=>{let i=t.querySelector(".accordion-item_trigger"),a=t.querySelector(".accordion-item_content");gsap.set(a,{height:0}),i.addEventListener("click",i=>{if(r===c)e(t),r=-1;else{if(-1!==r){let t=o[r];e(t,t.querySelectorAll(".accordion-item-title .char"))}(function(e){let t=e.querySelector(".accordion-item_trigger"),o=t.querySelector(".accordion-item_icon"),r=e.querySelector(".accordion-item_content");gsap.to(o,{rotate:"45deg",duration:.5,stagger:.01,ease:"expo.out"}),gsap.to(r,{height:"auto",duration:.5,ease:"expo.inOut"}),t.classList.add("active")})(t),r=c}})})})(t))}()})();
//# sourceMappingURL=accordions.js.map