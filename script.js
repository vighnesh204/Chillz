let tl = gsap.timeline()
// tl.from("#front", {
//     y: 900,
//     duration: 1,
// })
tl.from("#front #first", {
    y: 800,
    scale: 2,
    duration: 1
})
tl.from("#front h1", {
    y: 800,
    duration: 1
})
tl.from("#front #ice1", {
    y: 800,
    scale: 2,
    duration: 0.6
})
tl.from("#front #ice2", {
    y: 800,
    scale: 2,
    duration: 0.6
})
tl.from("#front #ice3", {
    y: 800,
    scale: 2,
    duration: 0.6
})
tl.from("#front #ice4", {
    y: 800,
    scale: 2,
    duration: 0.6
})
tl.from("#front #ice5", {
    y: 800,
    scale: 2,
    duration: 0.6
})
tl.from("nav h1", {
    y : -50,
    opacity : 0,
    delay : 0.4,
    duration : 0.6, 
    stagger : 0.5
})
tl.from("nav ul a", {
    y : -50,
    opacity : 0,
    delay : 0.4,
    duration : 0.6, 
    stagger : 0.5
})
let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#about",
        scroll: "body",
        start: "0% 90%",
        end: "50% 50%",
        scrub: true
    }
})
tl2.to("#first", {
    top: 595,
    left: 25,
    duration: 0.9,
    scale: 0.8
}, "combine")
tl2.to("#ice1", {
    top: 595,
    left: 215,
    scale: 0.8,
    duration: 0.9,
    rotate: 25
}, "combine")

let tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: "#menu",
        scroll: "body",
        start: "0% 90%",
        end: "50% 50%",
        scrub: true
    }
})
tl3.to("#first", {
    top: 1145,
    left: 470,
    duration: 0.9,
    scale: 0.8,
    zIndex: 1
}, "anime")
tl3.to("#ice1", {
    top: 1150,
    left: 670,
    scale: 0.8,
    duration: 0.9,
    rotate: 125
}, "anime")
tl3.from("#bull", {
    x:-400,
    duration: 0.9
}, "anime")
tl3.from("#third", {
    x:400,
    duration: 0.9
}, "anime")
tl3.from("#firstone", {
    x:-400,
    duration: 0.9,
    rotate: 125
}, "anime")
tl3.from("#lastone", {
    x:400,
    duration: 0.9,
    rotate: 125
}, "anime")

let tl4 = gsap.timeline({
    scrollTrigger: {
        trigger: "#contact",
        scroll: "body",
        start: "0% 90%",
        end: "50% 50%",
        scrub: true
    }
})
tl4.to("#first", {
    top: 1760,
    left: 735,
    duration: 0.9,
    scale: 0.8,
}, "combine")
tl4.to("#ice1", {
    top: 1760,
    left: 940,
    scale: 0.8,
    duration: 0.9,
    rotate: 25,
}, "combine")
tl4.to("#bull", {
    top: 560,
    left: 450,
    duration: 0.9,
    rotate: -20,
}, "combine")
tl4.to("#third", {
    top: 560,
    left: 175,
    duration: 0.9,
    rotate: 20
}, "combine")