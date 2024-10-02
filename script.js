function cursorEffect(){
    var page1 = document.querySelector(".page1");
    var cursor = document.querySelector(".cursor");
    
    page1.addEventListener("mousemove", function(dets){ 
        gsap.to(cursor,{
            x: dets.clientX,
            y: dets.clientY
        })
    })
    
    
    
    page1.addEventListener("mouseenter", function(){ 
        gsap.to(cursor,{
            opacity: 1,
            scale: 1
        })
    })
    
    page1.addEventListener("mouseleave", function(){ 
        gsap.to(cursor,{
           opacity: 0,
           scale: 0
        })
    })
}
cursorEffect()