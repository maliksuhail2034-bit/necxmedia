<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>NECXMEDIA — Client Acquisition Systems</title>

<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800;900&display=swap" rel="stylesheet">

<style>
/* =======================
   VARIABLES
======================= */
:root{
  --bg:#050505;
  --bg-soft:#0b0b0b;
  --white:#ffffff;
  --muted:#9ca3af;
  --accent:#5effa1;
  --glass:rgba(255,255,255,0.08);
}

/* =======================
   RESET
======================= */
*{margin:0;padding:0;box-sizing:border-box}
html,body{
  width:100%;
  background:var(--bg);
  color:white;
  font-family:Inter,sans-serif;
  overflow-x:hidden;
  cursor:none;
}

/* =======================
   CUSTOM CURSOR
======================= */
.cursor{
  position:fixed;
  width:18px;
  height:18px;
  border-radius:50%;
  background:var(--accent);
  pointer-events:none;
  mix-blend-mode:screen;
  transform:translate(-50%,-50%);
  z-index:9999;
  transition:transform 0.15s ease;
}
.cursor-glow{
  position:fixed;
  width:120px;
  height:120px;
  border-radius:50%;
  background:radial-gradient(circle,var(--accent),transparent 60%);
  opacity:0.2;
  pointer-events:none;
  transform:translate(-50%,-50%);
  z-index:9998;
}

/* =======================
   NOISE
======================= */
body::before{
  content:"";
  position:fixed;
  inset:0;
  background:url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4"/></filter><rect width="200" height="200" filter="url(%23n)" opacity="0.04"/></svg>');
  pointer-events:none;
  z-index:1;
}

/* =======================
   NAV
======================= */
nav{
  position:fixed;
  top:0;
  width:100%;
  height:80px;
  padding:0 6vw;
  display:flex;
  align-items:center;
  justify-content:space-between;
  background:rgba(0,0,0,0.55);
  backdrop-filter:blur(22px);
  z-index:100;
}

.logo{
  font-weight:900;
  letter-spacing:1px;
}

.nav-btn{
  padding:12px 30px;
  background:var(--accent);
  color:black;
  border-radius:999px;
  font-weight:800;
}

/* =======================
   SECTIONS
======================= */
.section{
  padding:160px 6vw;
  position:relative;
  z-index:2;
}

/* =======================
   HERO
======================= */
.hero{
  min-height:100vh;
  display:flex;
  align-items:center;
  justify-content:center;
  text-align:center;
  overflow:hidden;
}

.hero-grid{
  position:absolute;
  inset:0;
  background:
    linear-gradient(transparent 95%,rgba(255,255,255,0.04) 100%),
    linear-gradient(90deg,transparent 95%,rgba(255,255,255,0.04) 100%);
  background-size:80px 80px;
  animation:gridMove 20s linear infinite;
}

@keyframes gridMove{
  from{transform:translateY(0)}
  to{transform:translateY(80px)}
}

.hero-glow{
  position:absolute;
  inset:-40%;
  background:radial-gradient(circle,rgba(94,255,161,0.18),transparent 60%);
  animation:spin 30s linear infinite;
}

@keyframes spin{
  from{transform:rotate(0deg)}
  to{transform:rotate(360deg)}
}

.hero-inner{
  max-width:1100px;
  position:relative;
}

.hero h1{
  font-size:clamp(3.2rem,5vw,5rem);
  font-weight:900;
  line-height:1.05;
  margin-bottom:32px;
}

.hero p{
  color:var(--muted);
  font-size:1.25rem;
  max-width:900px;
  margin:0 auto 56px;
}

.cta{
  padding:22px 64px;
  background:var(--accent);
  color:black;
  border-radius:999px;
  font-weight:900;
  display:inline-block;
}

/* =======================
   TRUST
======================= */
.trust{
  text-align:center;
  padding:80px 6vw;
  color:var(--muted);
  background:#0c0c0c;
}

/* =======================
   OFFER / 3D CARDS
======================= */
.offer h2{
  text-align:center;
  font-size:clamp(2.6rem,4vw,3.6rem);
  margin-bottom:120px;
}

.offer-grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(300px,1fr));
  gap:80px;
}

.card{
  background:linear-gradient(180deg,#0f0f0f,#050505);
  border-radius:32px;
  padding:64px;
  transform-style:preserve-3d;
  transition:0.4s ease;
  box-shadow:0 80px 200px rgba(0,0,0,0.6);
}

.card h3{
  font-size:1.5rem;
  margin-bottom:18px;
}

.card p{
  color:var(--muted);
  line-height:1.7;
}

/* =======================
   ABOUT
======================= */
.about{
  text-align:center;
}

.about-inner{
  max-width:1000px;
  margin:0 auto;
}

.about p{
  color:var(--muted);
  font-size:1.3rem;
  margin-top:28px;
  line-height:1.8;
}

/* =======================
   FINAL CTA
======================= */
.final{
  text-align:center;
  background:radial-gradient(circle at top,#121212,#000);
}

.final h2{
  font-size:clamp(2.6rem,4vw,3.6rem);
  margin-bottom:24px;
}

.final p{
  color:var(--muted);
  margin-bottom:44px;
}

.final a{
  padding:22px 64px;
  background:var(--accent);
  color:black;
  border-radius:999px;
  font-weight:900;
}

/* =======================
   FOOTER
======================= */
footer{
  padding:48px;
  text-align:center;
  color:#777;
  background:#000;
}

/* =======================
   SCROLL REVEAL
======================= */
.fade{
  opacity:0;
  transform:translateY(60px);
  transition:1.2s cubic-bezier(.22,.61,.36,1);
}
.fade.show{
  opacity:1;
  transform:none;
}
</style>
</head>

<body>

<div class="cursor"></div>
<div class="cursor-glow"></div>

<nav>
  <div class="logo">NECXMEDIA</div>
  <a href="#contact" class="nav-btn magnetic">Get Started</a>
</nav>

<section class="hero section">
  <div class="hero-grid"></div>
  <div class="hero-glow"></div>
  <div class="hero-inner fade">
    <h1>Stop Losing Leads.<br>Start Closing Clients.</h1>
    <p>
      We engineer client acquisition systems that quietly
      turn attention into booked calls and compounding revenue.
    </p>
    <a href="#contact" class="cta magnetic">Book a Strategy Call</a>
  </div>
</section>

<section class="trust">
  Built for founders who value leverage, clarity, and systems.
</section>

<section class="offer section">
  <h2 class="fade">Your Client Acquisition Engine</h2>
  <div class="offer-grid">
    <div class="card fade tilt">
      <h3>Conversion Architecture</h3>
      <p>Funnels designed with psychology, not templates.</p>
    </div>
    <div class="card fade tilt">
      <h3>Automated Follow-Ups</h3>
      <p>Email systems that close while you sleep.</p>
    </div>
    <div class="card fade tilt">
      <h3>Predictable Growth</h3>
      <p>Systems that compound instead of burning out.</p>
    </div>
  </div>
</section>

<section class="about section">
  <div class="about-inner fade">
    <h2>What We Do</h2>
    <p>
      NECXMEDIA builds silent, scalable acquisition systems for
      founders who want consistent growth without chaos.
    </p>
  </div>
</section>

<section id="contact" class="final section">
  <h2 class="fade">Ready to Scale?</h2>
  <p class="fade">Reach us directly</p>
  <a href="mailto:suhail@necxmedia.com" class="fade magnetic">suhail@necxmedia.com</a>
</section>

<footer>
  © 2026 NECXMEDIA. All rights reserved.
</footer>

<script>
/* CURSOR */
const cursor=document.querySelector('.cursor');
const glow=document.querySelector('.cursor-glow');

document.addEventListener('mousemove',e=>{
  cursor.style.left=glow.style.left=e.clientX+'px';
  cursor.style.top=glow.style.top=e.clientY+'px';
});

/* MAGNETIC BUTTONS */
document.querySelectorAll('.magnetic').forEach(el=>{
  el.addEventListener('mousemove',e=>{
    const r=el.getBoundingClientRect();
    el.style.transform=
      `translate(${(e.clientX-r.left-r.width/2)/6}px,
                 ${(e.clientY-r.top-r.height/2)/6}px) scale(1.08)`;
  });
  el.addEventListener('mouseleave',()=>{
    el.style.transform='translate(0,0) scale(1)';
  });
});

/* 3D TILT CARDS */
document.querySelectorAll('.tilt').forEach(card=>{
  card.addEventListener('mousemove',e=>{
    const r=card.getBoundingClientRect();
    const x=(e.clientX-r.left-r.width/2)/20;
    const y=(e.clientY-r.top-r.height/2)/20;
    card.style.transform=`rotateY(${x}deg) rotateX(${-y}deg) translateY(-12px)`;
  });
  card.addEventListener('mouseleave',()=>{
    card.style.transform='none';
  });
});

/* SCROLL REVEAL */
const els=document.querySelectorAll('.fade');
const obs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting) e.target.classList.add('show');
  });
},{threshold:0.2});
els.forEach(el=>obs.observe(el));
</script>

</body>
</html>
