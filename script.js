console.log(document.querySelectorAll(".object"))
const objects = document.querySelectorAll(".object")
const texts = document.querySelectorAll(".text")
const overarchivin = document.getElementById("overarchivin")

gsap.registerPlugin(ScrollTrigger) 

// gsap.fromTo(overarchivin,
//     { opacity: 0.1 },
//     {
//         scrollTrigger: {
//             trigger: overarchivin,
//             start: "start center", 
//             endTrigger: overarchivin,
//             scrub: 1,
//             toggleClass: "active",
//         }
//     }
// )
objects.forEach((obj, index) => {
    const target = obj.querySelector('img') || obj.querySelector('h1')
    gsap.fromTo(target, 
        { opacity: 0.1 }, 
        {
            scrollTrigger: {
                trigger: obj,
                start: "start center", // when object's center meets viewport's center
                endTrigger: obj,
                end: "bottom center", // when object's bottom leaves viewport's top
                // markers: true,
                scrub: 1,
                toggleClass: "active",
                onEnter: () => {
                    texts[index].style.zIndex = "1";
                    gsap.to(target, { opacity: 1, duration: 0.3 });
                    gsap.to(texts[index], { opacity: 1, duration: 0.3 });
                },
                onLeave: () => {
                    gsap.to(target, { opacity: 0.1, duration: 0.3 });
                    gsap.to(texts[index], { opacity: 0, duration: 0.3, onComplete: () => {
                        texts[index].style.zIndex = "0";
                    } });
                },
                onEnterBack: () => {
                    texts[index].style.zIndex = "1";
                    gsap.to(target, { opacity: 1, duration: 0.3 });
                    gsap.to(texts[index], { opacity: 1, duration: 0.3 });
                },
                onLeaveBack: () => {
                    gsap.to(target, { opacity: 0.1, duration: 0.3 });
                    gsap.to(texts[index], { opacity: 0, duration: 0.3, onComplete: () => {
                        texts[index].style.zIndex = "0";
                    } });
                }
            }
        }
    );
});

