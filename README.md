<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>NECXMEDIA — Client Acquisition Systems</title>

<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800;900&display=swap" rel="stylesheet">

<style>
/* =======================
   CORE VARIABLES
======================= */
:root{
  --bg:#050505;
  --bg-soft:#0b0b0b;
  --white:#ffffff;
  --muted:#9ca3af;
  --accent:#5effa1;
  --glass:rgba(255,255,255,0.08);
  --blur:blur(20px);
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
  scroll-behavior:smooth;
}

/* =======================
   GLOBAL
======================= */
.section{
  position:relative;
  padding:160px 6vw;
  z-index:2;
}

h1,h2,h3{
  letter-spacing:-0.02em;
}

a{
  color:inherit;
  text-decoration:none;
}

/* =======================
   NOISE OVERLAY
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
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:0 6vw;
  background:rgba(0,0,0,0.55);
  backdrop-filter:blur(22px);
  z-index:100;
}

.logo{
  font-weight:900;
  letter-spacing:1px;
}

.nav-btn{
  padding:12px 28px;
  background:var(--accent);
  color:black;
  border-radius:999px;
  font-weight:800;
  transition:0.4s cubic-bezier(.22,.61,.36,1);
}

.nav-btn:hover{
  transform:scale(1.08);
  box-shadow:0 20px 80px rgba(94,255,161,0.6);
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
  position:relative;
  overflow:hidden;
}

.hero-bg{
  position:absolute;
  inset:-40%;
  background:
    radial-gradient(circle at center, rgba(94,255,161,0.18), transparent 60%);
  animation:rotate 40s linear infinite;
}

@keyframes rotate{
  from{transform:rotate(0deg)}
  to{transform:rotate(360deg)}
}

.hero-inner{
  max-width:1100px;
  position:relative;
  z-index:3;
}

.hero h1{
  font-size:clamp(3.2rem,5vw,5rem);
  font-weight:900;
  line-height:1.05;
  margin-bottom:32px;
}

.hero p{
  font-size:1.25rem;
  color:var(--muted);
  max-width:900px;
  margin:0 auto 56px;
}

.cta{
  padding:22px 60px;
  background:var(--accent);
  color:black;
  border-radius:999px;
  font-weight:900;
  display:inline-block;
  transition:0.5s cubic-bezier(.22,.61,.36,1);
}

.cta:hover{
  transform:scale(1.1);
  box-shadow:0 30px 120px rgba(94,255,161,0.7);
}

/* =======================
   TRUST STRIP
======================= */
.trust{
  background:#0c0c0c;
  text-align:center;
  padding:80px 6vw;
  color:var(--muted);
  letter-spacing:0.4px;
}

/* =======================
   OFFER CARDS (3D)
======================= */
.offer{
  background:linear-gradient(180deg,#050505,#0b0b0b);
}

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
  background:linear-gradient(180deg,#0e0e0e,#060606);
  border-radius:32px;
  padding:64px;
  position:relative;
  transform-style:preserve-3d;
  transition:0.6s cubic-bezier(.22,.61,.36,1);
  box-shadow:0 60px 200px rgba(0,0,0,0.5);
}

.card::before{
  content:"";
  position:absolute;
  inset:0;
  border-radius:32px;
  border:1px solid rgba(94,255,161,0.25);
  opacity:0;
  transition:0.6s ease;
}

.card:hover{
  transform:translateY(-20px) scale(1.02);
}

.card:hover::before{
  opacity:1;
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
  background:#050505;
  text-align:center;
}

.about-inner{
  max-width:1000px;
  margin:0 auto;
}

.about p{
  font-size:1.3rem;
  color:var(--muted);
  margin-top:32px;
  line-height:1.8;
}

/* =======================
   FINAL CTA
======================= */
.final{
  background:
    radial-gradient(circle at top, #121212, #000);
  text-align:center;
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
  transition:0.5s cubic-bezier(.22,.61,.36,1);
}

.final a:hover{
  transform:scale(1.1);
  box-shadow:0 30px 120px rgba(94,255,161,0.7);
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
   SCROLL FADE
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

<nav>
  <div class="logo">NECXMEDIA</div>
  <a href="#contact" class="nav-btn">Get Started</a>
</nav>

<section class="hero section">
  <div class="hero-bg"></div>
  <div class="hero-inner fade">
    <h1>Stop Losing Leads.<br>Start Closing Clients.</h1>
    <p>
      We engineer client acquisition systems that quietly turn attention
      into booked calls and long-term revenue.
    </p>
    <a href="#contact" class="cta">Book a Strategy Call</a>
  </div>
</section>

<section class="trust">
  Built for founders who want leverage, not hustle.
</section>

<section class="offer section">
  <h2 class="fade">Your Client Acquisition Engine</h2>
  <div class="offer-grid">
    <div class="card fade">
      <h3>Conversion Architecture</h3>
      <p>Funnels designed with psychology, not templates.</p>
    </div>
    <div class="card fade">
      <h3>Automated Follow-Ups</h3>
      <p>Email systems that close while you sleep.</p>
    </div>
    <div class="card fade">
      <h3>Predictable Growth</h3>
      <p>A system that compounds instead of burns out.</p>
    </div>
  </div>
</section>

<section class="about section">
  <div class="about-inner fade">
    <h2>What We Do</h2>
    <p>
      NECXMEDIA builds silent, scalable acquisition systems for founders
      who value clarity, leverage, and long-term growth.
    </p>
  </div>
</section>

<section id="contact" class="final section">
  <h2 class="fade">Ready to Scale?</h2>
  <p class="fade">Reach us directly</p>
  <a href="mailto:suhail@necxmedia.com" class="fade">suhail@necxmedia.com</a>
</section>

<footer>
  © 2026 NECXMEDIA. All rights reserved.
</footer>

<script>
const els=document.querySelectorAll(".fade");
const obs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting) e.target.classList.add("show");
  });
},{threshold:0.2});
els.forEach(el=>obs.observe(el));
</script>

</body>
</html>
