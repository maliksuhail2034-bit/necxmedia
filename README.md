<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>NECXMEDIA — Client Acquisition Systems</title>

<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800;900&display=swap" rel="stylesheet">

<script src="https://cdn.jsdelivr.net/npm/gsap@3/dist/gsap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrollTrigger.min.js"></script>

<style>
:root{
  --bg:#050505;
  --soft:#0c0c0c;
  --white:#fff;
  --muted:#9ca3af;
  --accent:#5effa1;
}

*{margin:0;padding:0;box-sizing:border-box}
html,body{
  font-family:Inter,sans-serif;
  background:var(--bg);
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
  background:rgba(0,0,0,.7);
  backdrop-filter:blur(16px);
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:0 6vw;
  z-index:999;
}
.logo{font-weight:900;letter-spacing:1px}
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
}

/* HERO */
.hero{
  min-height:100vh;
  display:flex;
  align-items:center;
  text-align:center;
}
.hero h1{
  font-size:clamp(3rem,5vw,4.8rem);
  font-weight:900;
  line-height:1.05;
  margin-bottom:28px;
}
.hero p{
  max-width:860px;
  margin:0 auto 48px;
  color:var(--muted);
  font-size:1.2rem;
}
.cta{
  background:var(--accent);
  color:#000;
  padding:18px 50px;
  border-radius:999px;
  font-weight:900;
  display:inline-block;
}

/* SERVICES */
.grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
  gap:48px;
}
.card{
  background:#0f0f0f;
  padding:48px;
  border-radius:28px;
  transition:.4s ease;
  cursor:pointer;
}
.card:hover{
  transform:translateY(-12px);
  box-shadow:0 40px 90px rgba(0,0,0,.6);
}
.card h3{margin-bottom:12px}

/* SERVICE DETAILS */
.service{
  background:var(--soft);
  padding:80px;
  border-radius:32px;
  margin-top:80px;
}
.service p{
  color:var(--muted);
  font-size:1.15rem;
  max-width:900px;
  line-height:1.6;
}

/* ABOUT */
.about p{
  max-width:900px;
  margin:30px auto;
  color:var(--muted);
  font-size:1.15rem;
}

/* CONTACT */
.contact-box{
  max-width:700px;
  margin:60px auto 0;
  background:#0f0f0f;
  padding:60px;
  border-radius:32px;
  text-align:center;
}
.contact-box a{
  display:inline-block;
  margin-top:24px;
  font-weight:800;
  color:var(--accent);
}

/* FOOTER */
footer{
  padding:40px;
  text-align:center;
  color:#777;
}

/* MOBILE */
@media(max-width:768px){
  nav ul{display:none}
  section{padding:110px 6vw}
  .service{padding:48px 28px}
  .contact-box{padding:48px 28px}
}
</style>
</head>

<body>

<nav>
  <div class="logo">NECXMEDIA</div>
  <ul>
    <li><a href="#home">Home</a></li>
    <li><a href="#services">Services</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
  <a href="#contact" class="nav-cta">Get Started</a>
</nav>

<section id="home" class="hero">
  <div style="width:100%">
    <h1>Systems That Turn Attention<br>Into Revenue</h1>
    <p>
      NECXMEDIA builds automated client acquisition systems
      for founders who want predictable growth — without chasing leads.
    </p>
    <a href="#contact" class="cta">Book a Strategy Call</a>
  </div>
</section>

<section id="services">
  <h2 class="center">Core Services</h2>

  <div class="grid" style="margin-top:80px">
    <div class="card" onclick="scrollToSection('funnels')">
      <h3>High-Converting Funnels</h3>
      <p>Pages engineered to convert traffic into booked calls.</p>
    </div>
    <div class="card" onclick="scrollToSection('email')">
      <h3>Email Automation</h3>
      <p>Follow-ups that nurture and close automatically.</p>
    </div>
    <div class="card" onclick="scrollToSection('growth')">
      <h3>Growth Systems</h3>
      <p>Predictable acquisition built for scale.</p>
    </div>
  </div>

  <div id="funnels" class="service">
    <h2>High-Converting Funnels</h2>
    <p>
      We design landing pages and funnels using behavioral psychology,
      clarity-driven copy, and conversion principles that guide prospects
      toward one action — booking a call.
    </p>
  </div>

  <div id="email" class="service">
    <h2>Email Automation</h2>
    <p>
      Automated email sequences that nurture trust, handle objections,
      and convert leads into clients without manual effort.
    </p>
  </div>

  <div id="growth" class="service">
    <h2>Growth Systems</h2>
    <p>
      Funnels, email, tracking, and optimization — combined into
      one predictable system designed to scale without chaos.
    </p>
  </div>
</section>

<section id="about" class="about">
  <h2 class="center">Why NECXMEDIA</h2>
  <p class="center">
    We don’t sell tactics. We build systems.
    Everything we design removes guesswork,
    increases leverage, and creates consistent client flow.
  </p>
</section>

<section id="contact">
  <h2 class="center">Let’s Build Your Growth System</h2>

  <div class="contact-box">
    <p>
      Want to scale without chasing leads?
      Let’s talk.
    </p>
    <a href="mailto:suhail@necxmedia.com">
      suhail@necxmedia.com
    </a>
  </div>
</section>

<footer>
  © 2026 NECXMEDIA. All rights reserved.
</footer>

<script>
gsap.registerPlugin(ScrollTrigger);

gsap.from(".hero h1", {y:80,opacity:0,duration:1.2,ease:"power4.out"});
gsap.from(".hero p", {y:40,opacity:0,delay:.3,duration:1});
gsap.from(".cta", {scale:.9,opacity:0,delay:.6});

gsap.utils.toArray(".card").forEach(card=>{
  gsap.from(card,{
    scrollTrigger:{trigger:card,start:"top 85%"},
    y:60,opacity:0,duration:.8
  });
});

function scrollToSection(id){
  document.getElementById(id).scrollIntoView({behavior:"smooth"});
}
</script>

</body>
</html>
