<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>NECXMEDIA — Client Acquisition Systems</title>

<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800;900&display=swap" rel="stylesheet">

<style>
:root{
  --black:#050505;
  --white:#ffffff;
  --gray:#f4f4f4;
  --accent:#5effa1;
  --muted:#9ca3af;
  --glass:rgba(255,255,255,0.08);
}

/* RESET */
*{margin:0;padding:0;box-sizing:border-box}
html,body{
  width:100%;
  overflow-x:hidden;
  font-family:Inter,sans-serif;
  background:white;
  scroll-behavior:smooth;
}

a{color:inherit;text-decoration:none}

/* GLOBAL */
.section{
  width:100%;
  padding:130px 6vw;
  position:relative;
}

.center{text-align:center}

/* NAV */
nav{
  position:fixed;
  top:0;left:0;
  width:100%;
  height:72px;
  background:rgba(0,0,0,0.55);
  backdrop-filter:blur(18px);
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:0 6vw;
  z-index:100;
}

.logo{
  color:white;
  font-weight:900;
  letter-spacing:1px;
}

.nav-btn{
  background:var(--accent);
  color:black;
  padding:10px 26px;
  border-radius:999px;
  font-weight:700;
  transition:0.35s cubic-bezier(.22,.61,.36,1);
}
.nav-btn:hover{
  transform:translateY(-2px) scale(1.05);
  box-shadow:0 16px 40px rgba(94,255,161,0.45);
}

/* HERO */
.hero{
  min-height:100vh;
  background:
    radial-gradient(circle at 50% 0%, #1b1b1b 0%, #000 65%);
  display:flex;
  align-items:center;
  justify-content:center;
  color:white;
  overflow:hidden;
}

.hero::before{
  content:"";
  position:absolute;
  inset:-35%;
  background:
    radial-gradient(circle at center, rgba(94,255,161,0.18), transparent 60%);
  animation:slowSpin 26s linear infinite;
}

@keyframes slowSpin{
  from{transform:rotate(0deg)}
  to{transform:rotate(360deg)}
}

.hero-inner{
  max-width:1100px;
  text-align:center;
  position:relative;
  z-index:2;
}

.hero h1{
  font-size:clamp(3rem,5vw,4.8rem);
  font-weight:900;
  line-height:1.05;
  margin-bottom:28px;
  letter-spacing:-1px;
}

.hero p{
  font-size:1.2rem;
  color:var(--muted);
  max-width:900px;
  margin:0 auto 50px;
}

.hero .cta{
  background:var(--accent);
  color:black;
  padding:20px 52px;
  border-radius:999px;
  font-weight:800;
  display:inline-block;
  transition:0.4s cubic-bezier(.22,.61,.36,1);
}
.hero .cta:hover{
  transform:scale(1.07);
  box-shadow:0 22px 70px rgba(94,255,161,0.55);
}

/* TRUST */
.trust{
  background:var(--gray);
  padding:70px 6vw;
}
.trust p{
  text-align:center;
  font-weight:600;
  opacity:0.9;
  letter-spacing:0.3px;
}

/* OFFER */
.offer h2{
  font-size:clamp(2.4rem,4vw,3.4rem);
  margin-bottom:90px;
  text-align:center;
}

.offer-grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
  gap:60px;
}

.card{
  background:white;
  padding:60px;
  border-radius:30px;
  box-shadow:0 50px 120px rgba(0,0,0,0.08);
  position:relative;
  transition:0.45s cubic-bezier(.22,.61,.36,1);
}

.card::before{
  content:"";
  position:absolute;
  inset:0;
  border-radius:30px;
  background:
    linear-gradient(135deg, transparent 40%, rgba(94,255,161,0.15));
  opacity:0;
  transition:0.45s ease;
}

.card:hover{
  transform:translateY(-14px) scale(1.01);
  box-shadow:0 80px 180px rgba(0,0,0,0.16);
}

.card:hover::before{
  opacity:1;
}

.card h3{
  margin-bottom:16px;
  font-size:1.35rem;
  font-weight:700;
}
.card p{
  color:#444;
  line-height:1.6;
}

/* ABOUT */
.about{
  background:linear-gradient(180deg,#ffffff,#f6f6f6);
}

.about-inner{
  max-width:1000px;
  margin:0 auto;
  text-align:center;
}

.about p{
  font-size:1.2rem;
  line-height:1.75;
  margin-top:26px;
}

/* FINAL CTA */
.final{
  background:radial-gradient(circle at top, #111 0%, #000 70%);
  color:white;
  text-align:center;
  padding:160px 6vw;
}

.final h2{
  font-size:clamp(2.4rem,4vw,3.4rem);
  margin-bottom:24px;
}

.final p{
  color:var(--muted);
  margin-bottom:36px;
}

.final a{
  background:var(--accent);
  color:black;
  padding:20px 56px;
  border-radius:999px;
  font-weight:800;
  display:inline-block;
  transition:0.4s cubic-bezier(.22,.61,.36,1);
}
.final a:hover{
  transform:scale(1.08);
  box-shadow:0 24px 80px rgba(94,255,161,0.6);
}

/* FOOTER */
footer{
  background:black;
  color:#777;
  text-align:center;
  padding:44px 6vw;
  font-size:0.9rem;
}

/* SCROLL REVEAL */
.fade{
  opacity:0;
  transform:translateY(50px);
  transition:1s cubic-bezier(.22,.61,.36,1);
}
.fade.show{
  opacity:1;
  transform:none;
}

/* MOBILE */
@media(max-width:768px){
  .section{padding:100px 6vw}
}
</style>
</head>

<body>

<nav>
  <div class="logo">NECXMEDIA</div>
  <a href="#contact" class="nav-btn">Get Started</a>
</nav>

<section class="hero section">
  <div class="hero-inner fade">
    <h1>Stop Losing Leads.<br>Start Closing Clients.</h1>
    <p>
      We build conversion-focused funnels and automated email systems
      that quietly turn attention into booked calls and paying clients.
    </p>
    <a href="#contact" class="cta">Book a Strategy Call</a>
  </div>
</section>

<section class="trust">
  <p>Built for founders who want predictable, systemized growth — not guesswork.</p>
</section>

<section class="offer section">
  <h2 class="fade">Your Client Acquisition Engine</h2>
  <div class="offer-grid">
    <div class="card fade">
      <h3>High-Converting Funnels</h3>
      <p>Strategic landing pages designed to move visitors into booked calls.</p>
    </div>
    <div class="card fade">
      <h3>Email Automations</h3>
      <p>Intelligent follow-ups that nurture leads and close deals on autopilot.</p>
    </div>
    <div class="card fade">
      <h3>Predictable Growth</h3>
      <p>A repeatable system that scales without chaos, chasing, or burnout.</p>
    </div>
  </div>
</section>

<section class="about section">
  <div class="about-inner fade">
    <h2>What We Do</h2>
    <p>
      NECXMEDIA builds complete client acquisition systems —
      combining psychology-driven design, automation, and messaging
      so your business grows consistently, quietly, and sustainably.
    </p>
  </div>
</section>

<section id="contact" class="final">
  <h2 class="fade">Ready to Scale?</h2>
  <p class="fade">Let’s talk.</p>
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
