
const $smallBall = document.querySelector('.cursor__ball--small');

// Listeners
document.body.addEventListener('mousemove', onMouseMove);


// Move the cursor
function onMouseMove(e) {
  TweenMax.to($smallBall, .4, {
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



gsap.from(".pinkk", {duration: 5, x: vw(-60),repeat: -1,yoyo: true,ease: "sine.inOut"
});
gsap.from(".bluee", {duration: 5, x: vw(60),repeat: -1,yoyo: true,ease: "sine.inOut"
});
gsap.from(".title", {duration: 1, opacity: 0, x: -40});
gsap.from(".title", {duration: 1, letterSpacing: 0,delay:0.5});
gsap.from(".line", {duration: 3, y: vw(10),repeat: -1,yoyo: true,ease: "sine.inOut"
});

