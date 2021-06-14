const $smallBall = document.querySelector('.cursor__ball--small');

// Listeners
document.body.addEventListener('mousemove', onMouseMove);


// Move the cursor
function onMouseMove(e) {
  TweenMax.to($smallBall, .4, {
    x: e.clientX - 8,
    y: e.clientY - 10
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



gsap.from(".pinkk", {
  duration: 5,
  x: vw(-50),
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});
gsap.from(".pinkk", {
  duration: 3,
  opacity: 0
});
gsap.from(".bluee", {
  duration: 5,
  x: vw(50),
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});
gsap.from(".bluee", {
  duration: 3,
  opacity: 0
});

gsap.from(".title", {
  duration: 1,
  opacity: 0,
  x: -40
});

gsap.from(".title", {
  duration: 2,
  letterSpacing: 0,
  delay: 0.5
});

gsap.from(".line", {
  duration: 3,
  y: 200,
  repeat: -1,
  yoyo: true
});

gsap.from(".navv", {
  duration: 1,
  opacity: 0,
  x: 40
});

gsap.from(".meimg", {
  scrollTrigger: {
    trigger: ".meimg",
    toggleActions: "play resume restart reset",
    scrub: 2
  },
  duration: 1,
  x: 200
});

gsap.from(".mecircle", {
  scrollTrigger: {
    trigger: ".mycircle",
    toggleActions: "play resume restart reset",
    scrub: 1
  },
  duration: 1,
  x: -100
});


gsap.to(".leftitle1", {
  scrollTrigger: {
    trigger: ".leftitle1",
    toggleActions: "play resume restart reset",
    scrub: 2
  },
  duration: 1,
  y: -200
});
gsap.to(".leftitle2", {
  scrollTrigger: {
    trigger: ".leftitle2",
    toggleActions: "play resume restart reset",
    scrub: 2
  },
  duration: 1,
  y: -200
});

gsap.to(".leftitle3", {
  scrollTrigger: {
    trigger: ".leftitle3",
    toggleActions: "play resume restart reset",
    scrub: 2
  },
  duration: 1,
  y: -200
});

gsap.to(".leftitle4", {
  scrollTrigger: {
    trigger: ".leftitle4",
    toggleActions: "play resume restart reset",
    scrub: 2
  },
  duration: 1,
  y: -200
});


gsap.from(".melball1", {
  scrollTrigger: {
    trigger: ".melball1",
    toggleActions: "play resume restart reset",
    scrub: 1
  },
  duration: 1,
  y: -300
});

gsap.from(".merball1", {
  scrollTrigger: {
    trigger: ".merball1",
    toggleActions: "play resume restart reset",
    scrub: 1
  },
  duration: 1,
  y: 400
});

gsap.from(".melball2", {
  scrollTrigger: {
    trigger: ".melball2",
    toggleActions: "play resume restart reset",
    scrub: 1
  },
  duration: 1,
  y: -300
});

gsap.from(".merball2", {
  scrollTrigger: {
    trigger: ".merball2",
    toggleActions: "play resume restart reset",
    scrub: 1
  },
  duration: 1,
  y: 400
});

gsap.from(".melball3", {
  scrollTrigger: {
    trigger: ".melball3",
    toggleActions: "play resume restart reset",
    scrub: 1
  },
  duration: 1,
  y: -300
});

gsap.from(".merball3", {
  scrollTrigger: {
    trigger: ".merball3",
    toggleActions: "play resume restart reset",
    scrub: 1
  },
  duration: 1,
  y: 400
});

gsap.from(".melball4", {
  scrollTrigger: {
    trigger: ".melball4",
    toggleActions: "play resume restart reset",
    scrub: 1
  },
  duration: 1,
  y: -300
});

gsap.from(".merball4", {
  scrollTrigger: {
    trigger: ".merball4",
    toggleActions: "play resume restart reset",
    scrub: 1
  },
  duration: 1,
  y: 400
});

gsap.from(".ballcis1", {
  scrollTrigger: {
    trigger: ".ballcis1",
    toggleActions: "play resume restart reset",
    scrub: 0.5
  },
  duration: 1,
  y: -300
});

gsap.from(".ballcis2", {
  scrollTrigger: {
    trigger: ".ballcis2",
    toggleActions: "play resume restart reset",
    scrub: 1
  },
  duration: 1,
  y: 200
});

gsap.from(".ballcis3", {
  scrollTrigger: {
    trigger: ".ballcis3",
    toggleActions: "play resume restart reset",
    scrub: 0.5
  },
  duration: 1,
  y: -300
});

gsap.from(".ballgra1", {
  scrollTrigger: {
    trigger: ".ballgra1",
    toggleActions: "play resume restart reset",
    scrub: 0.5
  },
  duration: 1,
  y: 100
});

gsap.from(".ballgra2", {
  scrollTrigger: {
    trigger: ".ballgra2",
    toggleActions: "play resume restart reset",
    scrub: 1
  },
  duration: 1,
  y: -200
});
gsap.from(".ballgra3", {
  scrollTrigger: {
    trigger: ".ballgra3",
    toggleActions: "play resume restart reset",
    scrub: 0.5
  },
  duration: 1,
  y: 100
});

gsap.from(".ballmo1", {
  scrollTrigger: {
    trigger: ".ballmo1",
    toggleActions: "play resume restart reset",
    scrub: 1
  },
  duration: 1,
  y: -200
});
gsap.from(".ballmo2", {
  scrollTrigger: {
    trigger: ".ballmo2",
    toggleActions: "play resume restart reset",
    scrub: 1
  },
  duration: 1,
  y: 200
});