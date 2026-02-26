<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>NECXMEDIA — SaaS Revenue Infrastructure</title>

<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800;900&display=swap" rel="stylesheet">

<script src="https://cdn.jsdelivr.net/npm/gsap@3/dist/gsap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrollTrigger.min.js"></script>

<style>
:root{
  --bg:#040404;
  --panel:#0b0b0b;
  --white:#ffffff;
  --muted:#9ca3af;
  --accent:#5effa1;
  --glow:rgba(94,255,161,.25);
}

*{margin:0;padding:0;box-sizing:border-box}
html,body{
  font-family:Inter,sans-serif;
  background:radial-gradient(circle at top,#0b0b0b 0%,#040404 60%);
  color:var(--white);
  scroll-behavior:smooth;
}

a{text-decoration:none;color:inherit}
section{padding:140px 6vw}
.center{text-align:center}

/* NAV */
nav{
  position:fixed;
  top:0;
  width:100%;
  height:76px;
  background:rgba(4,4,4,.7);
  backdrop-filter:blur(20px);
  border-bottom:1px solid rgba(255,255,255,.04);
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:0 6vw;
  z-index:999;
}

.logo{
  font-weight:900;
  letter-spacing:1px;
  position:relative;
}
.logo::after{
  content:"";
  position:absolute;
  bottom:-6px;
  left:0;
  width:30%;
  height:2px;
  background:var(--accent);
  box-shadow:0 0 20px var(--glow);
}

nav ul{
  list-style:none;
  display:flex;
  gap:32px;
}
nav ul a{
  color:var(--muted);
  font-weight:600;
}
nav ul a:hover{color:var(--white)}

.nav-cta{
  background:var(--accent);
  color:#000;
  padding:10px 26px;
  border-radius:999px;
  font-weight:800;
  box-shadow:0 0 40px var(--glow);
}

/* HERO */
.hero{
  min-height:100vh;
  display:flex;
  align-items:center;
  text-align:center;
}
.hero h1{
  font-size:clamp(3.2rem,5vw,5rem);
  font-weight:900;
  line-height:1.02;
  margin-bottom:28px;
}
.hero h1 span{
  color:var(--accent);
  text-shadow:0 0 40px var(--glow);
}
.hero p{
  max-width:900px;
  margin:0 auto 48px;
  color:var(--muted);
  font-size:1.2rem;
}
.cta{
  background:var(--accent);
  color:#000;
  padding:18px 54px;
  border-radius:999px;
  font-weight:900;
  display:inline-block;
  box-shadow:0 0 60px var(--glow);
}

/* GRID */
.grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
  gap:48px;
}
.card{
  background:linear-gradient(180deg,#0f0f0f,#0a0a0a);
  padding:52px;
  border-radius:28px;
  border:1px solid rgba(255,255,255,.04);
  transition:.45s ease;
  position:relative;
}
.card:hover{
  transform:translateY(-14px);
  box-shadow:0 50px 120px rgba(0,0,0,.7);
}
.card h3{margin-bottom:14px}

/* PANEL */
.panel{
  background:var(--panel);
  padding:90px;
  border-radius:36px;
  margin-top:100px;
  border:1px solid rgba(255,255,255,.04);
}
.panel p{
  color:var(--muted);
  font-size:1.15rem;
  max-width:920px;
  line-height:1.65;
}

.contact-box{
  max-width:720px;
  margin:70px auto 0;
  background:linear-gradient(180deg,#0f0f0f,#090909);
  padding:70px;
  border-radius:36px;
  border:1px solid rgba(255,255,255,.04);
  text-align:center;
}
.contact-box a{
  display:inline-block;
  margin-top:28px;
  font-weight:900;
  color:var(--accent);
  font-size:1.1rem;
}

footer{
  padding:40px;
  text-align:center;
  color:#666;
}

@media(max-width:768px){
  nav ul{display:none}
  section{padding:110px 6vw}
  .panel{padding:50px 28px}
  .contact-box{padding:48px 28px}
}
</style>
</head>

<body>

<nav>
  <div class="logo">NECXMEDIA</div>
  <ul>
    <li><a href="#system">System</a></li>
    <li><a href="#results">Results</a></li>
    <li><a href="#philosophy">Philosophy</a></li>
    <li><a href="#apply">Apply</a></li>
  </ul>
  <a href="#apply" class="nav-cta">Apply</a>
</nav>

<section class="hero">
  <div style="width:100%">
    <h1>
      Predictable Demos.<br>
      <span>Lower CAC. Higher LTV.</span>
    </h1>
    <p>
      We install automated revenue infrastructure for SaaS founders
      doing $10k–$100k/month who want consistent demo bookings
      without increasing ad spend or relying on manual outreach.
    </p>
    <a href="#apply" class="cta">Apply For Revenue Install</a>
  </div>
</section>

<section id="system">
  <h2 class="center">The SaaS Revenue Infrastructure System™</h2>

  <div class="grid" style="margin-top:90px">

    <div class="card">
      <h3>Layer 1 — Attraction Engine</h3>
      <p>Authority positioning that pulls in high-intent prospects instead of random traffic.</p>
    </div>

    <div class="card">
      <h3>Layer 2 — Conversion Architecture</h3>
      <p>Strategic landing pages engineered to pre-sell, qualify, and drive demo intent.</p>
    </div>

    <div class="card">
      <h3>Layer 3 — Automated Pre-Sell</h3>
      <p>Email systems that educate, eliminate objections, and increase demo show-up rates.</p>
    </div>

  </div>

  <div class="panel">
    <h2>Why This Works</h2>
    <p>
      Most SaaS founders send cold traffic directly to a demo page
      and hope it converts.
      We build structured conversion paths that educate prospects
      before they ever speak to you — increasing close rates,
      lowering CAC, and filtering out low-quality demos.
    </p>
  </div>
</section>

<section id="results">
  <h2 class="center">What This Means For You</h2>
  <div class="panel center">
    <p>
      • More qualified demo bookings<br><br>
      • Higher close rates from pre-sold prospects<br><br>
      • Lower customer acquisition cost<br><br>
      • Increased LTV through backend optimization<br><br>
      • A system that compounds instead of breaking
    </p>
  </div>

  <div class="panel center">
    <h2>Performance Commitment</h2>
    <p>
      If demo bookings don’t increase within 60 days,
      we continue optimizing at no additional cost
      until the system performs.
    </p>
  </div>
</section>

<section id="philosophy">
  <h2 class="center">Our Philosophy</h2>
  <div class="panel center">
    <p>
      SaaS growth is not about hacks.
      It’s about leverage.
      Attention is rented.
      Infrastructure is owned.
      We build systems that compound long after campaigns end.
    </p>
  </div>
</section>

<section id="apply">
  <h2 class="center">Apply For Revenue Infrastructure Install</h2>

  <div class="contact-box">
    <p>
      We only work with SaaS founders already generating
      at least $10k/month and serious about building
      real revenue infrastructure.
      If that’s you — this is where it starts.
    </p>
    <a href="mailto:suhail@necxmedia.com">
      Apply via Email
    </a>
  </div>
</section>

<footer>
  © 2026 NECXMEDIA. Revenue Infrastructure for SaaS.
</footer>

<script>
gsap.registerPlugin(ScrollTrigger);

gsap.from(".hero h1",{y:90,opacity:0,duration:1.2,ease:"power4.out"});
gsap.from(".hero p",{y:40,opacity:0,delay:.3});
gsap.from(".cta",{scale:.9,opacity:0,delay:.6});

gsap.utils.toArray(".card").forEach(card=>{
  gsap.from(card,{
    scrollTrigger:{trigger:card,start:"top 85%"},
    y:70,
    opacity:0,
    duration:.9,
    ease:"power3.out"
  });
});
</script>

</body>
</html>
