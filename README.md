<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>NECXMEDIA — Client Acquisition Systems</title>

<!-- FONT -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap" rel="stylesheet">

<!-- GSAP -->
<script src="https://unpkg.com/gsap@3/dist/gsap.min.js"></script>
<script src="https://unpkg.com/gsap@3/dist/ScrollTrigger.min.js"></script>

<style>
:root{
  --black:#0a0a0a;
  --white:#ffffff;
  --accent:#5effa1;
  --muted:#9ca3af;
}

/* RESET */
*{margin:0;padding:0;box-sizing:border-box;}
html,body{
  font-family:Inter,sans-serif;
  background:#000;
  color:white;
  overflow-x:hidden;
}

/* NAV */
nav{
  position:fixed;
  top:0;left:0;
  width:100%;
  height:72px;
  padding:0 6vw;
  display:flex;
  justify-content:space-between;
  align-items:center;
  background:rgba(0,0,0,0.7);
  backdrop-filter:blur(14px);
  z-index:100;
}
nav .logo{font-weight:800;}
nav .links a{
  margin-left:28px;
  font-size:0.9rem;
  color:#ccc;
}
nav .links a:hover{color:var(--accent);}

/* HERO */
.hero{
  min-height:100vh;
  display:flex;
  align-items:center;
  justify-content:center;
  text-align:center;
  padding:140px 6vw;
  position:relative;
}
.hero::before{
  content:"";
  position:absolute;
  inset:-50%;
  background:radial-gradient(circle at 30% 20%,rgba(94,255,161,0.15),transparent 40%);
  animation:drift 20s linear infinite;
}
@keyframes drift{
  0%{transform:translate(0,0);}
  50%{transform:translate(10%,10%);}
  100%{transform:translate(0,0);}
}
.hero-inner{
  position:relative;
  max-width:1100px;
}
.hero h1{
  font-size:clamp(2.6rem,5vw,4.6rem);
  font-weight:800;
  line-height:1.05;
}
.hero p{
  margin:32px auto 48px;
  max-width:800px;
  color:var(--muted);
}
.cta{
  background:var(--accent);
  color:black;
  padding:18px 48px;
  border-radius:999px;
  font-weight:700;
  display:inline-block;
}

/* SECTIONS */
.section{
  padding:120px 6vw;
}
.center{text-align:center;}

.services-grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
  gap:48px;
  margin-top:80px;
}

.card{
  background:#0f0f0f;
  padding:48px;
  border-radius:28px;
  position:relative;
  cursor:pointer;
  transition:transform .4s ease, box-shadow .4s ease;
}
.card::after{
  content:"";
  position:absolute;
  inset:0;
  border-radius:28px;
  background:linear-gradient(120deg,transparent,rgba(94,255,161,0.15),transparent);
  opacity:0;
  transition:.4s;
}
.card:hover{
  transform:translateY(-12px);
  box-shadow:0 40px 120px rgba(0,0,0,.6);
}
.card:hover::after{opacity:1;}
.card h3{margin-bottom:14px;}
.card p{color:#aaa;font-size:0.95rem;}

/* ABOUT */
.about{
  background:linear-gradient(180deg,#000,#0a0a0a);
}
.about p{
  max-width:900px;
  margin:24px auto 0;
  color:#bbb;
}

/* CONTACT */
.final{
  padding:140px 6vw;
  text-align:center;
}
.final p{color:var(--muted);}
.final a{
  display:inline-block;
  margin-top:28px;
  color:var(--accent);
  font-weight:700;
  word-break:break-word;
}

/* FOOTER */
footer{
  padding:40px;
  text-align:center;
  color:#666;
  font-size:0.85rem;
}

/* MOBILE */
@media(max-width:768px){
  nav .links{display:none;}
  .hero{padding-top:180px;}
}
</style>
</head>

<body>

<nav>
  <div class="logo">NECXMEDIA</div>
  <div class="links">
    <a href="#services">Services</a>
    <a href="#about">About</a>
    <a href="#contact">Contact</a>
  </div>
</nav>

<section class="hero">
  <div class="hero-inner">
    <h1>Stop Losing Leads.<br>Start Closing Clients.</h1>
    <p>
      We engineer client acquisition systems that convert attention
      into predictable revenue — automatically.
    </p>
    <a href="#contact" class="cta">Book Strategy Call</a>
  </div>
</section>

<section id="services" class="section center">
  <h2>Client Acquisition Engine</h2>

  <div class="services-grid">
    <div class="card">
      <h3>High-Converting Funnels</h3>
      <p>Precision-designed landing experiences that turn traffic into booked calls.</p>
    </div>
    <div class="card">
      <h3>Email Automations</h3>
      <p>Smart follow-ups that nurture, qualify, and close leads on autopilot.</p>
    </div>
    <div class="card">
      <h3>Predictable Growth</h3>
      <p>Systems that scale revenue without scaling chaos.</p>
    </div>
  </div>
</section>

<section id="about" class="section about center">
  <h2>What We Do</h2>
  <p>
    NECXMEDIA builds automated client acquisition infrastructure for founders
    who want leverage — not hustle. Funnels, email systems, and conversion
    architecture engineered to compound.
  </p>
</section>

<section id="contact" class="final">
  <h2>Ready to Scale?</h2>
  <p>Reach us directly</p>
  <a href="mailto:suhail@necxmedia.com">suhail@necxmedia.com</a>
</section>

<footer>
  © 2026 NECXMEDIA. All rights reserved.
</footer>

<script>
gsap.registerPlugin(ScrollTrigger);

gsap.from(".hero h1",{y:60,opacity:0,duration:1.2,ease:"power4.out"});
gsap.from(".hero p",{y:40,opacity:0,duration:1,delay:.2});
gsap.from(".cta",{scale:.9,opacity:0,delay:.4});

gsap.utils.toArray(".card").forEach(card=>{
  gsap.from(card,{
    scrollTrigger:{trigger:card,start:"top 85%"},
    y:40,opacity:0,duration:.8
  });
});
</script>

</body>
</html>
