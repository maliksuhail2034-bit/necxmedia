<!i love you hareem>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>NECXMEDIA — Client Acquisition Systems</title>

<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800;900&display=swap" rel="stylesheet">

<style>
:root{
  --bg:#050505;
  --bg-soft:#0c0c0c;
  --white:#ffffff;
  --muted:#9ca3af;
  --accent:#5effa1;
}

*{margin:0;padding:0;box-sizing:border-box}

html,body{
  background:var(--bg);
  color:white;
  font-family:Inter,sans-serif;
  scroll-behavior:smooth;
}

/* ---------------- NAV ---------------- */
nav{
  position:fixed;
  top:0;
  width:100%;
  height:76px;
  background:rgba(0,0,0,0.65);
  backdrop-filter:blur(18px);
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:0 6vw;
  z-index:100;
}

nav .logo{
  font-weight:900;
  letter-spacing:1px;
}

nav ul{
  display:flex;
  gap:32px;
  list-style:none;
}

nav a{
  text-decoration:none;
  color:var(--muted);
  font-weight:600;
}

nav a:hover{
  color:white;
}

.nav-cta{
  background:var(--accent);
  color:black;
  padding:10px 24px;
  border-radius:999px;
  font-weight:800;
}

/* ---------------- SECTIONS ---------------- */
section{
  padding:140px 6vw;
}

.hero{
  min-height:100vh;
  display:flex;
  align-items:center;
  justify-content:center;
  text-align:center;
}

.hero-inner{
  max-width:1100px;
}

.hero h1{
  font-size:clamp(3rem,5vw,4.8rem);
  font-weight:900;
  line-height:1.05;
  margin-bottom:28px;
}

.hero p{
  color:var(--muted);
  font-size:1.2rem;
  max-width:900px;
  margin:0 auto 48px;
}

.cta{
  display:inline-block;
  padding:18px 50px;
  background:var(--accent);
  color:black;
  border-radius:999px;
  font-weight:900;
}

/* ---------------- SERVICES ---------------- */
.services{
  background:var(--bg-soft);
}

.services-grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
  gap:48px;
  margin-top:80px;
}

.service-card{
  background:#0f0f0f;
  padding:48px;
  border-radius:28px;
  cursor:pointer;
  transition:0.3s ease;
}

.service-card:hover{
  transform:translateY(-10px);
}

.service-card h3{
  margin-bottom:16px;
}

.service-card p{
  color:var(--muted);
}

/* ---------------- SERVICE PAGES ---------------- */
.service-page{
  display:none;
  max-width:1000px;
  margin:0 auto;
}

.service-page.active{
  display:block;
}

.service-page h2{
  font-size:2.6rem;
  margin-bottom:24px;
}

.service-page p{
  color:var(--muted);
  line-height:1.7;
  margin-bottom:20px;
}

/* ---------------- ABOUT ---------------- */
.about{
  text-align:center;
}

.about-inner{
  max-width:900px;
  margin:0 auto;
}

.about p{
  color:var(--muted);
  font-size:1.2rem;
  margin-top:24px;
}

/* ---------------- CONTACT ---------------- */
.contact{
  background:#000;
  text-align:center;
}

.contact-box{
  max-width:500px;
  margin:0 auto;
  display:flex;
  flex-direction:column;
  gap:20px;
}

.contact-box a{
  background:var(--accent);
  color:black;
  padding:16px;
  border-radius:999px;
  font-weight:800;
  text-decoration:none;
}

/* ---------------- FOOTER ---------------- */
footer{
  text-align:center;
  padding:40px;
  color:#777;
}

/* ---------------- MOBILE FIXES ---------------- */
@media(max-width:768px){
  nav ul{display:none}
  section{padding:110px 6vw}
  .contact-box{width:100%}
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

<!-- HOME -->
<section id="home" class="hero">
  <div class="hero-inner">
    <h1>Stop Losing Leads.<br>Start Closing Clients.</h1>
    <p>
      We design client acquisition systems that turn attention
      into booked calls and predictable revenue.
    </p>
    <a href="#services" class="cta">View Services</a>
  </div>
</section>

<!-- SERVICES -->
<section id="services" class="services">
  <h2 style="text-align:center">Our Services</h2>

  <div class="services-grid">
    <div class="service-card" onclick="openService('funnels')">
      <h3>High-Converting Funnels</h3>
      <p>Landing pages engineered to convert attention into action.</p>
    </div>
    <div class="service-card" onclick="openService('email')">
      <h3>Email Automation Systems</h3>
      <p>Automated follow-ups that close without manual effort.</p>
    </div>
    <div class="service-card" onclick="openService('growth')">
      <h3>Predictable Growth Systems</h3>
      <p>Repeatable systems designed for long-term scale.</p>
    </div>
  </div>

  <!-- FUNNELS -->
  <div id="funnels" class="service-page">
    <h2>High-Converting Funnels</h2>
    <p>
      We design funnels that guide prospects through a clear,
      psychology-driven journey — from first impression to booked call.
    </p>
    <p>
      Every page is built with intent: messaging hierarchy, trust signals,
      and friction-less conversion paths.
    </p>
  </div>

  <!-- EMAIL -->
  <div id="email" class="service-page">
    <h2>Email Automation Systems</h2>
    <p>
      We build automated email sequences that nurture leads,
      handle objections, and follow up consistently.
    </p>
    <p>
      Your sales process runs in the background — without manual chasing.
    </p>
  </div>

  <!-- GROWTH -->
  <div id="growth" class="service-page">
    <h2>Predictable Growth Systems</h2>
    <p>
      We connect funnels, email, and tracking into a single
      acquisition system that scales without chaos.
    </p>
    <p>
      No guesswork. No spikes. Just steady, measurable growth.
    </p>
  </div>
</section>

<!-- ABOUT -->
<section id="about" class="about">
  <div class="about-inner">
    <h2>About NECXMEDIA</h2>
    <p>
      NECXMEDIA builds acquisition systems for founders who want clarity,
      leverage, and consistent growth — not tactics that burn out.
    </p>
  </div>
</section>

<!-- CONTACT -->
<section id="contact" class="contact">
  <h2>Ready to Scale?</h2>
  <div class="contact-box">
    <a href="mailto:suhail@necxmedia.com">suhail@necxmedia.com</a>
  </div>
</section>

<footer>
  © 2026 NECXMEDIA. All rights reserved.
</footer>

<script>
function openService(id){
  document.querySelectorAll('.service-page')
    .forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  document.getElementById(id).scrollIntoView({behavior:'smooth'});
}
</script>

</body>
</html>
