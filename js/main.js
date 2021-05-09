
const $smallBall = document.querySelector('.cursor__ball--small');

// Listeners
document.body.addEventListener('mousemove', onMouseMove);


// Move the cursor
function onMouseMove(e) {
  TweenMax.to($smallBall, .1, {
    x: e.clientX -8,
    y: e.clientY -10
  })
}
function vh(v) {
  var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  return (v * h) / 100;
}

function vw(v) {
  var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  return (v * w) / 100;
}



gsap.to(".pinkk", {duration: 5, x: vw(-60),repeat: -1,yoyo: true,ease: "sine.inOut"
,scrollTrigger: {
  trigger: "#herosection",
  start: "top bottom",
  toggleActions: "play pause play pause"
}});
gsap.to(".bluee", {duration: 5, x: vw(60),repeat: -1,yoyo: true,ease: "sine.inOut"
,scrollTrigger: {
  trigger: "#herosection",
  start: "top bottom",
  toggleActions: "play pause play pause"
}});
gsap.to(".title", {duration: 2, opacity: 1, y: -50});
gsap.to(".thing", {duration: 2, opacity: 1, y: -50});
