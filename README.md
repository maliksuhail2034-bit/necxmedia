<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>NECXMEDIA — Intelligent Client Acquisition Systems</title>

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

/* SERVICES */
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
  cursor:pointer;
  position:relative;
}
.card::before{
  content:"";
  position:absolute;
  inset:0;
  border-radius:28px;
  background:linear-gradient(120deg,transparent,rgba(94,255,161,.08),transparent);
  opacity:0;
  transition:.4s;
}
.card:hover::before{opacity:1}
.card:hover{
  transform:translateY(-14px);
  box-shadow:0 50px 120px rgba(0,0,0,.7);
}
.card h3{margin-bottom:14px}

/* SERVICE DETAILS */
.service{
  background:var(--panel);
  padding:90px;
  border-radius:36px;
  margin-top:100px;
  border:1px solid rgba(255,255,255,.04);
}
.service h2{
  margin-bottom:20px;
}
.service p{
  color:var(--muted);
  font-size:1.15rem;
  max-width:920px;
  line-height:1.65;
}

/* ABOUT */
.about p{
  max-width:920px;
  margin:30px auto;
  color:var(--muted);
  font-size:1.15rem;
}

/* CONTACT */
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

/* FOOTER */
footer{
  padding:40px;
  text-align:center;
  color:#666;
}

/* MOBILE */
@media(max-width:768px){
  nav ul{display:none}
  section{padding:110px 6vw}
  .service{padding:50px 28px}
  .contact-box{padding:48px 28px}
}
</style>
</head>

<body>

<nav>
  <div class="logo">NECXMEDIA</div>
  <ul>
    <li><a href="#home">Home</a></li>
    <li><a href="#services">Systems</a></li>
    <li><a href="#about">Philosophy</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
  <a href="#contact" class="nav-cta">Initiate</a>
</nav>

<section id="home" class="hero">
  <div style="width:100%">
    <h1>
      Build Once.<br>
      <span>Scale Forever.</span>
    </h1>
    <p>
      NECXMEDIA engineers intelligent client acquisition systems
      for founders who want leverage, not hustle.
    </p>
    <a href="#contact" class="cta">Deploy Growth System</a>
  </div>
</section>

<section id="services">
  <h2 class="center">Core Systems</h2>

  <div class="grid" style="margin-top:90px">
    <div class="card" onclick="scrollToSection('funnels')">
      <h3>Conversion Architecture</h3>
      <p>Funnels designed to eliminate friction and force clarity.</p>
    </div>
    <div class="card" onclick="scrollToSection('email')">
      <h3>Automated Monetization</h3>
      <p>Email systems that convert attention into cash.</p>
    </div>
    <div class="card" onclick="scrollToSection('growth')">
      <h3>Predictable Scale</h3>
      <p>Systems that compound instead of breaking.</p>
    </div>
  </div>

  <div id="funnels" class="service">
    <h2>Conversion Architecture</h2>
    <p>
      We design funnels the way engineers design systems —
      removing noise, isolating variables, and guiding prospects
      toward a single inevitable decision.
    </p>
  </div>

  <div id="email" class="service">
    <h2>Automated Monetization</h2>
    <p>
      Intelligent email sequences that educate, disarm objections,
      and close deals without dependency on daily effort.
    </p>
  </div>

  <div id="growth" class="service">
    <h2>Predictable Scale</h2>
    <p>
      Funnels, messaging, and feedback loops combined into
      a system designed to scale without chaos.
    </p>
  </div>
</section>

<section id="about" class="about">
  <h2 class="center">Our Philosophy</h2>
  <p class="center">
    Attention is expensive. Systems are permanent.
    We build assets that compound long after the work is done.
  </p>
</section>

<section id="contact">
  <h2 class="center">Initiate Conversation</h2>

  <div class="contact-box">
    <p>
      If you’re building something serious,
      this is where it starts.
    </p>
    <a href="mailto:suhail@necxmedia.com">
      suhail@necxmedia.com
    </a>
  </div>
</section>

<footer>
  © 2026 NECXMEDIA. Engineered for scale.
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

function scrollToSection(id){
  document.getElementById(id).scrollIntoView({behavior:"smooth"});
}
</script>

</body>
</html>
