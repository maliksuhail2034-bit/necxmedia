<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>NECXMEDIA — Client Acquisition Systems</title>

<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap" rel="stylesheet">

<style>
:root {
  --black:#0a0a0a;
  --white:#ffffff;
  --gray:#f3f3f3;
  --accent:#5effa1;
  --muted:#9ca3af;
}

* {
  margin:0;
  padding:0;
  box-sizing:border-box;
}

html, body {
  width:100%;
  overflow-x:hidden;
  font-family:Inter, sans-serif;
}

section {
  width:100%;
  padding:120px 6vw;
}

/* CONTAINER */
.container {
  max-width:1200px;
  margin:0 auto;
}

/* NAV */
nav {
  position:fixed;
  top:0;
  left:0;
  width:100%;
  padding:20px 6vw;
  background:rgba(0,0,0,0.7);
  backdrop-filter:blur(10px);
  display:flex;
  justify-content:space-between;
  align-items:center;
  z-index:100;
}

nav .logo {
  font-weight:800;
  color:white;
}

nav a {
  background:var(--accent);
  color:black;
  padding:10px 22px;
  border-radius:999px;
  text-decoration:none;
  font-weight:600;
}

/* HERO */
.hero {
  min-height:100vh;
  background:radial-gradient(circle at top,#111 0%,#000 70%);
  color:white;
  display:flex;
  align-items:center;
  position:relative;
  overflow:hidden;
}

.hero-content {
  max-width:700px;
}

.hero h1 {
  font-size:clamp(2.4rem,5vw,4rem);
  font-weight:800;
  line-height:1.1;
  margin-bottom:24px;
}

.hero p {
  font-size:1.15rem;
  color:var(--muted);
  margin-bottom:40px;
}

.hero .cta {
  background:var(--accent);
  color:black;
  padding:16px 36px;
  border-radius:999px;
  text-decoration:none;
  font-weight:700;
  display:inline-block;
}

/* HERO SVG */
.hero svg {
  position:absolute;
  right:-200px;
  top:50%;
  transform:translateY(-50%);
  opacity:0.15;
  max-width:600px;
}

/* TRUST */
.trust {
  background:var(--gray);
  text-align:center;
  padding:50px 6vw;
  font-weight:600;
}

/* OFFER */
.offer h2 {
  text-align:center;
  font-size:clamp(2rem,4vw,3rem);
  margin-bottom:60px;
}

.offer-grid {
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
  gap:40px;
}

.card {
  background:white;
  padding:40px;
  border-radius:24px;
  box-shadow:0 30px 60px rgba(0,0,0,0.08);
}

.card h3 {
  margin-bottom:12px;
}

/* ABOUT */
.about {
  background:linear-gradient(180deg,#fff,#f7f7f7);
  text-align:center;
}

.about p {
  max-width:900px;
  margin:0 auto;
  font-size:1.15rem;
}

/* FINAL CTA */
.final-cta {
  background:black;
  color:white;
  text-align:center;
  padding-bottom:160px;
}

.final-cta a {
  margin-top:20px;
  display:inline-block;
  background:var(--accent);
  color:black;
  padding:16px 40px;
  border-radius:999px;
  font-weight:700;
  text-decoration:none;
}

/* FOOTER */
footer {
  background:#000;
  color:#777;
  text-align:center;
  padding:40px 20px;
  font-size:0.9rem;
}

/* ANIMATION */
.fade-up {
  opacity:0;
  transform:translateY(30px);
  transition:0.8s ease;
}

.fade-up.show {
  opacity:1;
  transform:none;
}

/* MOBILE FIX */
@media(max-width:768px) {
  section {
    padding:90px 6vw;
  }

  .hero svg {
    display:none;
  }
}
</style>
</head>

<body>

<nav>
  <div class="logo">NECXMEDIA</div>
  <a href="#contact">Get Started</a>
</nav>

<section class="hero">
  <div class="container hero-content fade-up">
    <h1>Stop Losing Leads.<br>Build a System That Closes Clients.</h1>
    <p>We build conversion-focused funnels and automated email systems that turn traffic into paying clients.</p>
    <a href="#contact" class="cta">Book a Strategy Call</a>
  </div>

  <svg viewBox="0 0 600 600">
    <circle cx="300" cy="300" r="280" stroke="#5effa1" stroke-width="2" fill="none"/>
    <circle cx="300" cy="300" r="200" stroke="#5effa1" stroke-width="1" fill="none"/>
    <circle cx="300" cy="300" r="120" stroke="#5effa1" stroke-width="1" fill="none"/>
  </svg>
</section>

<section class="trust">
  <div class="container">
    Used by founders who want predictable growth.
  </div>
</section>

<section class="offer">
  <div class="container">
    <h2 class="fade-up">Your Client Acquisition Engine</h2>
    <div class="offer-grid">
      <div class="card fade-up">
        <h3>High-Converting Funnels</h3>
        <p>Pages engineered to turn traffic into booked calls.</p>
      </div>
      <div class="card fade-up">
        <h3>Email Follow-Ups</h3>
        <p>Automations that nurture and close on autopilot.</p>
      </div>
      <div class="card fade-up">
        <h3>Systemized Growth</h3>
        <p>Predictable acquisition without chasing.</p>
      </div>
    </div>
  </div>
</section>

<section class="about">
  <div class="container fade-up">
    <h2>What We Do</h2>
    <p>
      We design client acquisition systems using high-conversion landing pages
      and automated email follow-ups so your business grows without chaos.
    </p>
  </div>
</section>

<section id="contact" class="final-cta">
  <div class="container fade-up">
    <h2>Ready to Scale?</h2>
    <p>Email us directly:</p>
    <a href="mailto:suhail@necxmedia.com">suhail@necxmedia.com</a>
  </div>
</section>

<footer>
  © 2026 NECXMEDIA. All rights reserved.
</footer>

<script>
const items=document.querySelectorAll(".fade-up");
const obs=new IntersectionObserver(e=>{
  e.forEach(i=>i.isIntersecting&&i.target.classList.add("show"))
},{threshold:.2});
items.forEach(i=>obs.observe(i));
</script>

</body>
</html>
