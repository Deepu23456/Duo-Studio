

function init() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });


    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

}

init()

var crsr = document.querySelector(".cursor")
var main = document.querySelector(".main")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x + 20+"px"
    crsr.style.top = dets.y + 20+"px"
})
let videocon = document.querySelector(".page1 video");

    let play = document.querySelector(".sound-on");

    videocon.addEventListener("mouseenter",function(){
    gsap.to(play,{
        opacity: 1,
        scale: 1,
    })
  })
    videocon.addEventListener("mouseleave",function(){
    gsap.to(play,{
        opacity: 0,
        scale: 0,
    })
  })
    videocon.addEventListener("mousemove",function(dets){
    gsap.to(play,{
        left: dets.x-70,
        top: dets.y-80,
    })
  })

gsap.from(".page1 h1,.page1 h2", {
    y: 10,
    rotate: 10,
    opacity: 0,
    delay: 0.3,
    duration: 0.7
})
var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        // markers:true,
        start: "top 27%",
        end: "top 0",
        scrub: 3
    }
})
tl.to(".page1 h1", {
    x: -100,
}, "anim")
tl.to(".page1 h2", {
    x: 100
}, "anim")
tl.to(".page1 video", {
    width: "90%"
}, "anim")

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        // markers:true,
        start: "top -115%",
        end: "top -120%",
        scrub: 3
    }
})
tl2.to(".main", {
    backgroundColor: "#fff",
})

var tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        // markers:true,
        start: "top -280%",
        end: "top -300%",
        scrub: 3
    }
})

tl3.to(".main",{
    backgroundColor:"#0F0D0D"
})


var boxes = document.querySelectorAll(".box");
boxes.forEach(function(elem){
   elem.addEventListener("mouseenter",function(){
    var att = elem.getAttribute("data-image");
    crsr.style.height = '330px';
    crsr.style.width = '430px';
    crsr.style.borderRadius = "0";
    crsr.style.backgroundImage = `url(${att})`;
   })
   elem.addEventListener("mouseleave",function(){
    var att = elem.getAttribute("data-image");
    crsr.style.backgroundColor = '#EDBFFF'
    crsr.style.height = '20px';
    crsr.style.width = '20px';
    crsr.style.borderRadius = "50%";
    crsr.style.backgroundImage = "none";
   })
})

var page2Left = document.querySelector(".page2-left h2");

var tl4 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page2-left h2",
        scroller: ".main",
        // markers:true,
        start: "top 25%",
        end: "top 10%",
        scrub: 3
    }
})

tl4.from(".page2-left h2",{
    x: -500,
    stagger: true
})

var page2right = document.querySelector(".page2-right p");

var tl5 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page2-right p",
        scroller: ".main",
        // markers:true,
        start: "top 25%",
        end: "top 10%",
        scrub: 3
    }
})

tl5.from(".page2-right p",{
    x: 500,
    stagger: true
})

var tl6 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page2 h1",
        scroller: ".main",
        // markers:true,
        start: "top 25%",
        end: "top 10%",
        scrub: 3
    }
})

tl6.from(".page2 h1",{
    scale: 0,
    stagger: true
})
var tl7 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page2-right button",
        scroller: ".main",
        
        // start: "top -280%",
        end: "top 50%",
        scrub: 3
    }
})

tl7.from(".page2-right button",{
    scale: 0,
    stagger: true
})

gsap.from(".page3 h1", {
    y: 10,
    rotate: 10,
    opacity: 0,
    // delay: 0.3,
    // duration: 0.7,
    scrollTrigger: {
        trigger: ".page3 h1",
        scroller: ".main",
        // markers:true,
        start: "top 50%",
        // end: "top 0%",
        scrub: 3
    }
    
})
// gsap.from(".page3 part1-a img", {
//     scale: 0,
//     scrollTrigger: {
//         trigger: ".page3 part1-a img",
//         scroller: ".main",
//         markers:true,
//         start: "top 50%",
//         end: "top 0%",
//         scrub: 3
//     }
    
// })

