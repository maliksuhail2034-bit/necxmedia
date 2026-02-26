<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>NECXMEDIA — SaaS Revenue Infrastructure</title>

<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap" rel="stylesheet">

<script src="https://cdn.jsdelivr.net/npm/gsap@3/dist/gsap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrollTrigger.min.js"></script>

<style>
:root{
  --bg:#050505;
  --panel:#0e0e0e;
  --soft:#141414;
  --white:#ffffff;
  --muted:#9ca3af;
  --accent:#5effa1;
}

*{margin:0;padding:0;box-sizing:border-box}
body{
  font-family:Inter,sans-serif;
  background:var(--bg);
  color:var(--white);
}

section{padding:120px 8vw}
h1,h2,h3{line-height:1.1}
p{color:var(--muted);line-height:1.6}

nav{
  position:fixed;
  top:0;
  width:100%;
  background:rgba(5,5,5,.8);
  backdrop-filter:blur(10px);
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:20px 8vw;
  z-index:999;
}

.logo{
  font-weight:900;
  font-size:1.2rem;
}

.nav-cta{
  background:var(--accent);
  color:#000;
  padding:10px 22px;
  border-radius:999px;
  font-weight:800;
}

.hero{
  min-height:100vh;
  display:flex;
  align-items:center;
  text-align:center;
  background:radial-gradient(circle at top, #111 0%, #050505 60%);
}

.hero h1{
  font-size:clamp(3rem,5vw,4.5rem);
  font-weight:900;
  margin-bottom:20px;
}

.hero span{
  color:var(--accent);
}

.hero p{
  max-width:800px;
  margin:0 auto 40px;
  font-size:1.1rem;
}

.cta{
  background:var(--accent);
  color:#000;
  padding:18px 50px;
  border-radius:999px;
  font-weight:900;
  display:inline-block;
  margin-top:20px;
}

.stats{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(200px,1fr));
  gap:40px;
  margin-top:80px;
}

.stat{
  text-align:center;
}

.stat h2{
  font-size:2.5rem;
  color:var(--accent);
}

.system-grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
  gap:40px;
  margin-top:60px;
}

.card{
  background:var(--soft);
  padding:40px;
  border-radius:20px;
  border:1px solid rgba(255,255,255,.05);
  transition:.3s ease;
}

.card:hover{
  transform:translateY(-8px);
  border-color:var(--accent);
}

.highlight{
  background:linear-gradient(180deg,#111,#090909);
}

.testimonial{
  background:var(--soft);
  padding:40px;
  border-radius:20px;
  margin-top:40px;
  border:1px solid rgba(255,255,255,.05);
}

.apply-box{
  background:linear-gradient(180deg,#0f0f0f,#070707);
  padding:60px;
  border-radius:30px;
  max-width:600px;
  margin:60px auto 0;
  text-align:center;
  border:1px solid rgba(255,255,255,.05);
}

input{
  width:100%;
  padding:14px;
  margin-top:15px;
  border-radius:8px;
  border:none;
  background:#1a1a1a;
  color:#fff;
}

button{
  margin-top:20px;
  width:100%;
  padding:15px;
  background:var(--accent);
  color:#000;
  font-weight:800;
  border:none;
  border-radius:999px;
  cursor:pointer;
}

footer{
  text-align:center;
  padding:40px;
  color:#666;
}

@media(max-width:768px){
  section{padding:90px 6vw}
}
</style>
</head>

<body>

<nav>
  <div class="logo">NECXMEDIA</div>
  <a href="#apply" class="nav-cta">Apply</a>
</nav>

<section class="hero">
  <div style="width:100%">
    <h1>
      Predictable SaaS Growth.<br>
      <span>Installed In 30 Days.</span>
    </h1>
    <p>
      We build automated revenue infrastructure for SaaS founders doing $10k–$100k/month who want more qualified demos, lower CAC, and scalable growth.
    </p>
    <a href="#apply" class="cta">Apply For Revenue Install</a>

    <div class="stats">
      <div class="stat">
        <h2>+32%</h2>
        <p>Avg Demo Increase</p>
      </div>
      <div class="stat">
        <h2>-18%</h2>
        <p>Lower CAC</p>
      </div>
      <div class="stat">
        <h2>2-4x</h2>
        <p>Email ROI</p>
      </div>
    </div>
  </div>
</section>

<section>
  <h2 style="text-align:center;font-size:2.5rem;">The Revenue Infrastructure System™</h2>

  <div class="system-grid">
    <div class="card">
      <h3>Attraction Engine</h3>
      <p>Authority positioning + intent-driven lead capture that pulls qualified prospects.</p>
    </div>
    <div class="card">
      <h3>Conversion Architecture</h3>
      <p>Funnels engineered to pre-sell, qualify, and increase demo intent.</p>
    </div>
    <div class="card">
      <h3>Automated Pre-Sell</h3>
      <p>Email sequences that build belief and increase show-up & close rates.</p>
    </div>
  </div>
</section>

<section class="highlight">
  <h2 style="text-align:center;font-size:2.3rem;">Why Most SaaS Funnels Fail</h2>
  <p style="text-align:center;max-width:800px;margin:30px auto;">
    Cold traffic sent directly to a demo page rarely converts efficiently.
    We build structured education paths that warm prospects before they ever speak to your sales team.
  </p>
</section>

<section>
  <h2 style="text-align:center;font-size:2.3rem;">Founder Feedback</h2>

  <div class="testimonial">
    <p>
      “We were relying on ads and inconsistent demos. After installing the system,
      demo quality improved dramatically and our sales team closed faster.”
    </p>
    <br>
    <strong>— B2B SaaS Founder</strong>
  </div>
</section>

<section id="apply">
  <h2 style="text-align:center;font-size:2.5rem;">Apply For Revenue Install</h2>

  <div class="apply-box">
    <p>
      We only work with SaaS founders already generating $10k+/month.
      Limited onboarding slots per month.
    </p>

    <form>
      <input type="text" placeholder="Full Name" required>
      <input type="email" placeholder="Business Email" required>
      <input type="text" placeholder="Current Monthly Revenue" required>
      <button type="submit">Submit Application</button>
    </form>
  </div>
</section>

<footer>
© 2026 NECXMEDIA — Revenue Infrastructure for SaaS Founders
</footer>

<script>
gsap.from(".hero h1",{y:80,opacity:0,duration:1});
gsap.from(".hero p",{y:40,opacity:0,delay:.3});
gsap.from(".cta",{scale:.9,opacity:0,delay:.6});
</script>

</body>
</html>

