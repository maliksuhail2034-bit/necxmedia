<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
html,body{width:100%;overflow-x:hidden;font-family:Inter,sans-serif;}

/* GLOBAL */
.section{
  width:100%;
  padding:120px 0;
}

.inner{
  max-width:1200px;
  margin:0 auto;
  padding:0 6vw;
  text-align:center;
}

/* NAV */
nav{
  position:fixed;
  top:0;left:0;
  width:100%;
  height:70px;
  display:flex;
  align-items:center;
  justify-content:center;
  background:rgba(0,0,0,0.65);
  backdrop-filter:blur(10px);
  z-index:100;
}

nav .nav-inner{
  width:100%;
  max-width:1200px;
  padding:0 6vw;
  display:flex;
  justify-content:space-between;
  align-items:center;
}

.logo{
  font-weight:800;
  color:white;
}

.nav-btn{
  background:var(--accent);
  color:black;
  padding:10px 24px;
  border-radius:999px;
  font-weight:600;
  text-decoration:none;
}

/* HERO */
.hero{
  min-height:100vh;
  background:radial-gradient(circle at top,#111 0%,#000 70%);
  display:flex;
  align-items:center;
}

.hero h1{
  color:white;
  font-size:clamp(2.6rem,5vw,4.2rem);
  font-weight:800;
  line-height:1.1;
  margin-bottom:24px;
}

.hero p{
  color:var(--muted);
  font-size:1.2rem;
  max-width:800px;
  margin:0 auto 40px;
}

.hero .cta{
  background:var(--accent);
  color:black;
  padding:18px 42px;
  border-radius:999px;
  font-weight:700;
  text-decoration:none;
  display:inline-block;
}

/* TRUST */
.trust{
  background:var(--gray);
  padding:50px 0;
}

.trust p{
  font-weight:600;
}

/* OFFER */
.offer h2{
  font-size:clamp(2rem,4vw,3rem);
  margin-bottom:60px;
}

.offer-grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
  gap:40px;
  text-align:left;
}

.card{
  background:white;
  padding:40px;
  border-radius:24px;
  box-shadow:0 20px 50px rgba(0,0,0,0.08);
}

.card h3{
  margin-bottom:12px;
}

/* ABOUT */
.about{
  background:linear-gradient(180deg,#fff,#f7f7f7);
}

.about p{
  max-width:900px;
  margin:0 auto;
  font-size:1.15rem;
}

/* CTA */
.final{
  background:black;
  color:white;
}

.final a{
  margin-top:24px;
  display:inline-block;
  background:var(--accent);
  color:black;
  padding:18px 44px;
  border-radius:999px;
  font-weight:700;
  text-decoration:none;
}

/* FOOTER */
footer{
  background:#000;
  color:#777;
  padding:40px 0;
  text-align:center;
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
  .section{padding:90px 0;}
}
</style>
</head>

<body>

<nav>
  <div class="nav-inner">
    <div class="logo">NECXMEDIA</div>
    <a href="#contact" class="nav-btn">Get Started</a>
  </div>
</nav>

<section class="section hero">
  <div class="inner fade">
    <h1>Stop Losing Leads.<br>Start Closing Clients.</h1>
    <p>We build conversion-focused funnels and automated email systems that capture, nurture, and convert leads into paying clients.</p>
    <a href="#contact" class="cta">Book a Strategy Call</a>
  </div>
</section>

<section class="section trust">
  <div class="inner fade">
    <p>Built for founders who want predictable growth.</p>
  </div>
</section>

<section class="section offer">
  <div class="inner">
    <h2 class="fade">Your Client Acquisition System</h2>
    <div class="offer-grid">
      <div class="card fade">
        <h3>High-Converting Funnels</h3>
        <p>Pages designed to turn traffic into booked calls.</p>
      </div>
      <div class="card fade">
        <h3>Email Automations</h3>
        <p>Follow-ups that nurture leads and close automatically.</p>
      </div>
      <div class="card fade">
        <h3>Systemized Growth</h3>
        <p>Predictable acquisition without manual chasing.</p>
      </div>
    </div>
  </div>
</section>

<section class="section about">
  <div class="inner fade">
    <h2>What We Do</h2>
    <p>
      We build client acquisition systems that combine high-conversion landing pages
      with automated email follow-ups so your business grows without chaos.
    </p>
  </div>
</section>

<section id="contact" class="section final">
  <div class="inner fade">
    <h2>Ready to Scale?</h2>
    <p>Email us directly</p>
    <a href="mailto:suhail@necxmedia.com">suhail@necxmedia.com</a>
  </div>
</section>

<footer>
  © 2026 NECXMEDIA. All rights reserved.
</footer>

<script>
const els=document.querySelectorAll(".fade");
const obs=new IntersectionObserver(e=>{
  e.forEach(i=>i.isIntersecting&&i.target.classList.add("show"));
},{threshold:.2});
els.forEach(el=>obs.observe(el));
</script>

</body>
</html>
