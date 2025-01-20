
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
    opacity:0,
    y:100,
    duration:3,
    delay:1,
    scrollTrigger:{
        trigger:".process h1",
        scroller:"body",
        scrub:2
    }
})

ti.from(".image",{
    opacity:0,
    y:100,
    duration:3,
    delay:1,
    scrollTrigger:{
        trigger:".SubscribeContainer",
        scroller:"body",
        scrub:2,
    
    }
})

ti.from("#Date .sameDate",{
y:100,
duration:5,
delay:1,
opacity:0,
scrollTrigger:{
    trigger:"#Date",
    scroller:"body",
    scrub:2,
    markers:true,
    start:"top 20%",
    end:"top 0%",
 
}


})

ti.from(".firstDate",{
   x:-100,
    duration:5,
    delay:1,
    opacity:0,
    scrollTrigger:{
        trigger:"#Date",
        scroller:"body",
        scrub:2,
        markers:true,
        start:"top 20%",
        end:"top 0%",
     
    }})

    ti.from(".secondDate",{
        x:100,
        duration:5,
        delay:1,
        opacity:0,
        scrollTrigger:{
            trigger:"#Date",
            scroller:"body",
            scrub:2,
            markers:true,
            start:"top 20%",
            end:"top 0%",
         
        }})

        // Business 



document.querySelectorAll(".card").forEach(element => {
    
 gsap.to(element,{
        scale:0.7,
        opacity:0,
        scrollTrigger:{
            trigger:element,
            start:"top 15%",
            end:"bottom 15%",
            markers:true,
            scrub:2
        }
    })




});