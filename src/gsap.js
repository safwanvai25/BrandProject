
gsap.from("#button-Container",{
    opacity:0,
    y:-100,
    duration:2,
    scrollTrigger:{
        trigger:"main",
        scroller:"body",
        start:"top 10%",
        end:"top 0%",
        scrub:2,
       
       
       
    }

})

gsap.from("#boxContainer1",{
    opacity:0,
    x:-100,
    duration:3,
    delay:1,
    scrollTrigger:{
        trigger:".process",
        scroller:"body",
        scrub:true,
        start:"top 10%",
        end:"top 0%",


    }
})

gsap.from("#boxContainer2",{
    opacity:0,
    y:100,
    duration:3,
    delay:1,
    scrollTrigger:{
        trigger:".process",
        scroller:"body",
      
        start:"top 10%",
        end:"top 0%",
        scrub:true

    }
})

gsap.from("#boxContainer3",{
    opacity:0,
    x:100,
    duration:3,
    delay:1,
    scrollTrigger:{
        trigger:".process",
        scroller:"body",
        scrub:true,
        start:"top 10%",
        end:"top 0%",

    }
})

let ti = gsap.timeline()
ti.from(".button2",{
    y:-20,
    duration:3,
    delay:1,
})
