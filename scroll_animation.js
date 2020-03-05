var tl = new TimelineMax({ onUpdate: updatePercentage });
var t2 = new TimelineMax();
var t3 = new TimelineMax();
var t4 = new TimelineMax();
var t5 = new TimelineMax();
const controller = new ScrollMagic.Controller();

tl.from(".photo_one", 0.1, { x: -200, y: -150, opacity: 0 });
t2.from(".photo_two", 1, { y: -150, opacity: 0 });
t3.from(".photo_three", 1, { x: -200, y: 200, opacity: 0 });
t4.from(".photo_four", 2, { y: 200, opacity: 0 });
t5.from(".photo_five", 1, { x: 500, opacity: 0 });
//tl.from('span', 1, { width: 0}, "=-.5");
//tl.from('#office', 1, {x:-200, opacity: 0,ease: Power4.easeInOut}, "=-1");
//tl.from('#building', 1, {x:200, opacity: 0, ease: Power4.easeInOut}, "=-.7");

//tl2.from("#box", 1, {opacity: 0, scale: 0});
//tl2.to("#box", .5, {left: "20%", scale: 1.3, borderColor: 'white', borderWidth: 12, boxShadow: '1px 1px 0px 0px rgba(0,0,0,0.09)'})

const scene1 = new ScrollMagic.Scene({
  triggerElement: ".container_gallery",
  triggerHook: "onLeave",
  duration: "100%"
})
  .setPin(".container_gallery")
  .setTween(tl)
  .addTo(controller);

const scene2 = new ScrollMagic.Scene({
  triggerElement: ".container_gallery",
  triggerHook: "onLeave",
  duration: "100%"
})
  .setPin(".container_gallery")
  .setTween(t2)
  .addTo(controller);

const scene3 = new ScrollMagic.Scene({
  triggerElement: ".container_gallery",
  triggerHook: "onLeave",
  duration: "100%"
})
  .setPin(".container_gallery")
  .setTween(t3)
  .addTo(controller);

const scene4 = new ScrollMagic.Scene({
  triggerElement: ".container_gallery",
  triggerHook: "onLeave",
  duration: "100%"
})
  .setPin(".container_gallery")
  .setTween(t4)
  .addTo(controller);

const scene5 = new ScrollMagic.Scene({
  triggerElement: ".container_gallery",
  triggerHook: "onLeave",
  duration: "100%"
})
  .setPin(".container_gallery")
  .setTween(t5)
  .addTo(controller);

//const scene2 = new ScrollMagic.Scene({
///  triggerElement: "blockquote"
//})
//  .setTween(tl2)
//		.addTo(controller);

function updatePercentage() {
  //percent.innerHTML = (tl.progress() *100 ).toFixed();
  tl.progress();
}
