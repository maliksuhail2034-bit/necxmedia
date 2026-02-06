<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>NECXMEDIA — Client Acquisition Systems</title>

<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap" rel="stylesheet">

<style>
:root{
  --black:#0b0b0b;
  --white:#ffffff;
  --gray:#f4f4f4;
  --accent:#5effa1;
  --muted:#9ca3af;
}

/* RESET */
*{margin:0;padding:0;box-sizing:border-box;}
html,body{
  width:100%;
  overflow-x:hidden;
  font-family:Inter,sans-serif;
  background:white;
}

/* REMOVE DEFAULT LINK BLUE */
a{
  color:inherit;
  text-decoration:none;
}

/* GLOBAL SECTIONS */
.section{
  width:100%;
  padding:120px 6vw;
}

.center{
  text-align:center;
}

/* NAV */
nav{
  position:fixed;
  top:0;left:0;
  width:100%;
  height:72px;
  background:rgba(0,0,0,0.7);
  backdrop-filter:blur(12px);
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:0 6vw;
  z-index:100;
}

.logo{
  color:white;
  font-weight:800;
  letter-spacing:0.5px;
}

.nav-btn{
  background:var(--accent);
  color:black;
  padding:10px 24px;
  border-radius:999px;
  font-weight:600;
}

/* HERO */
.hero{
  min-height:100vh;
  background:radial-gradient(circle at top,#111 0%,#000 70%);
  display:flex;
  align-items:center;
  justify-content:center;
  color:white;
}

.hero-inner{
  max-width:1100px;
  width:100%;
  text-align:center;
}

.hero h1{
  font-size:clamp(2.8rem,5vw,4.5rem);
  font-weight:800;
  line-height:1.1;
  margin-bottom:28px;
}

.hero p{
  font-size:1.2rem;
  color:var(--muted);
  max-width:900px;
  margin:0 auto 48px;
}

.hero .cta{
  background:var(--accent);
  color:black;
  padding:18px 44px;
  border-radius:999px;
  font-weight:700;
  display:inline-block;
}

/* TRUST STRIP */
.trust{
  background:var(--gray);
  padding:50px 6vw;
}

.trust p{
  text-align:center;
  font-weight:600;
  opacity:0.85;
}

/* OFFER */
.offer{
  background:white;
}

.offer h2{
  font-size:clamp(2.2rem,4vw,3.2rem);
  margin-bottom:70px;
  text-align:center;
}

.offer-grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
  gap:50px;
}

.card{
  background:white;
  padding:48px;
  border-radius:28px;
  box-shadow:0 30px 70px rgba(0,0,0,0.08);
}

.card h3{
  margin-bottom:14px;
  font-size:1.2rem;
}

.card p{
  color:#444;
}

/* ABOUT */
.about{
  background:linear-gradient(180deg,#ffffff,#f6f6f6);
}

.about-inner{
  max-width:1100px;
  margin:0 auto;
  text-align:center;
}

.about p{
  font-size:1.2rem;
  line-height:1.6;
  margin-top:20px;
}

/* FINAL CTA */
.final{
  background:black;
  color:white;
  text-align:center;
  padding:140px 6vw;
}

.final h2{
  font-size:clamp(2.2rem,4vw,3.2rem);
  margin-bottom:20px;
}

.final p{
  color:var(--muted);
  margin-bottom:32px;
}

.final a{
  background:var(--accent);
  color:black;
  padding:18px 48px;
  border-radius:999px;
  font-weight:700;
  display:inline-block;
}

/* FOOTER */
footer{
  background:black;
  color:#777;
  text-align:center;
  padding:40px 6vw;
  font-size:0.9rem;
}

/* ANIMATION */
.fade{
  opacity:0;
  transform:translateY(30px);
  transition:0.8s ease;
}
.fade.show{
  opacity:1;
  transform:none;
}

/* MOBILE */
@media(max-width:768px){
  .section{padding:90px 6vw;}
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
      that capture, nurture, and convert leads into paying clients.
    </p>
    <a href="#contact" class="cta">Book a Strategy Call</a>
  </div>
</section>

<section class="trust">
  <p>Built for founders who want predictable, systemized growth.</p>
</section>

<section class="offer section">
  <h2 class="fade">Your Client Acquisition Engine</h2>
  <div class="offer-grid">
    <div class="card fade">
      <h3>High-Converting Funnels</h3>
      <p>Landing pages engineered to turn attention into booked calls.</p>
    </div>
    <div class="card fade">
      <h3>Email Automations</h3>
      <p>Follow-ups that nurture leads and close without manual effort.</p>
    </div>
    <div class="card fade">
      <h3>Predictable Growth</h3>
      <p>A system that scales without chaos or chasing prospects.</p>
    </div>
  </div>
</section>

<section class="about section">
  <div class="about-inner fade">
    <h2>What We Do</h2>
    <p>
      We design complete client acquisition systems using high-conversion
      landing pages and automated email follow-ups so your business
      grows consistently — without guesswork.
    </p>
  </div>
</section>

<section id="contact" class="final">
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
