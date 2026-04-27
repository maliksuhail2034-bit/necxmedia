<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>NECXMEDIA — Leads That Already Understand You</title>
<meta name="description" content="We build lead education systems that filter, warm, and qualify your prospects before they ever speak to you.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,300;0,600;0,800;1,300;1,700&family=Instrument+Sans:wght@400;500;600&display=swap" rel="stylesheet">
<style>
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box}
:root{
  --bg:#faf8f4;
  --bg2:#f3efe8;
  --dark:#111108;
  --mid:#6b6860;
  --light:#c4bfb5;
  --orange:#e8531a;
  --orange2:#f26a35;
  --orangedk:#c44010;
  --orangebg:#fdf0ea;
  --white:#ffffff;
  --border:rgba(17,17,8,0.09);
}
html{scroll-behavior:smooth}
body{font-family:'Instrument Sans',sans-serif;background:var(--bg);color:var(--dark);line-height:1.6;overflow-x:hidden}
a{text-decoration:none;color:inherit}

/* NAV */
nav{
  position:fixed;inset:0 0 auto 0;height:68px;
  display:flex;align-items:center;justify-content:space-between;
  padding:0 5vw;
  background:rgba(250,248,244,0.92);
  backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px);
  border-bottom:1px solid var(--border);z-index:100;
}
.nav-logo{font-family:'Fraunces',serif;font-weight:800;font-size:1.12rem;letter-spacing:0.08em;color:var(--dark)}
.nav-links{list-style:none;display:flex;gap:32px}
.nav-links a{font-size:0.82rem;font-weight:500;color:var(--mid);letter-spacing:0.02em;transition:color 0.18s}
.nav-links a:hover{color:var(--dark)}
.nav-btn{
  background:var(--orange);color:var(--white);
  font-family:'Instrument Sans',sans-serif;font-size:0.82rem;font-weight:600;
  padding:9px 22px;border-radius:100px;border:none;cursor:pointer;
  transition:background 0.2s;display:inline-block;
}
.nav-btn:hover{background:var(--orangedk)}

/* HERO */
.hero{
  min-height:100vh;display:flex;flex-direction:column;
  align-items:center;justify-content:center;
  text-align:center;padding:130px 5vw 90px;
}
.hero-eyebrow{
  display:inline-flex;align-items:center;gap:8px;
  background:var(--orangebg);border:1px solid rgba(232,83,26,0.22);
  color:var(--orange);font-size:0.75rem;font-weight:600;
  letter-spacing:0.09em;text-transform:uppercase;
  padding:5px 15px;border-radius:100px;margin-bottom:34px;
  animation:rise 0.7s ease both;
}
.hero-eyebrow span{width:5px;height:5px;background:var(--orange);border-radius:50%;flex-shrink:0}
.hero h1{
  font-family:'Fraunces',serif;
  font-size:clamp(3rem,6vw,5.8rem);
  font-weight:800;line-height:1.02;
  color:var(--dark);max-width:940px;margin:0 auto 26px;
  animation:rise 0.8s 0.08s ease both;
}
.hero h1 i{color:var(--orange);font-style:italic;font-weight:300}
.hero-sub{
  font-size:clamp(1rem,1.8vw,1.18rem);color:var(--mid);
  max-width:580px;margin:0 auto 50px;line-height:1.74;
  animation:rise 0.8s 0.18s ease both;
}
.hero-actions{
  display:flex;gap:16px;justify-content:center;flex-wrap:wrap;
  animation:rise 0.8s 0.26s ease both;
}
.btn-primary{
  background:var(--dark);color:var(--white);
  padding:15px 36px;border-radius:100px;
  font-size:0.92rem;font-weight:600;display:inline-block;
  transition:background 0.2s,transform 0.15s;
}
.btn-primary:hover{background:var(--orange);transform:translateY(-1px)}
.btn-ghost{
  background:transparent;color:var(--mid);
  padding:15px 28px;border-radius:100px;
  font-size:0.9rem;font-weight:500;
  border:1px solid var(--border);display:inline-block;
  transition:color 0.2s,border-color 0.2s;
}
.btn-ghost:hover{color:var(--dark);border-color:rgba(17,17,8,0.25)}
.hero-trust{
  margin-top:54px;display:flex;align-items:center;gap:20px;
  font-size:0.78rem;color:var(--light);flex-wrap:wrap;justify-content:center;
  animation:rise 0.8s 0.34s ease both;
}
.hero-trust-div{width:1px;height:12px;background:var(--light);flex-shrink:0}

/* VIDEO SECTION */
.video-section{background:var(--dark);padding:100px 5vw}
.video-inner{max-width:860px;margin:0 auto;text-align:center}
.section-tag{font-size:0.74rem;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;margin-bottom:18px}
.video-section .section-tag{color:var(--orange2)}
.video-section h2{
  font-family:'Fraunces',serif;
  font-size:clamp(1.8rem,3.5vw,2.8rem);
  font-weight:700;color:var(--white);margin-bottom:14px;line-height:1.12;
}
.section-sub{color:rgba(250,248,244,0.45);font-size:0.97rem;max-width:500px;margin:0 auto 52px;line-height:1.65}

/* YouTube embed player */
.yt-wrap{
  position:relative;width:100%;max-width:320px;
  margin:0 auto;border-radius:20px;overflow:hidden;
  aspect-ratio:9/16;
  box-shadow:0 40px 120px rgba(0,0,0,0.7);
  background:#000;
}
.yt-wrap iframe{
  position:absolute;inset:0;
  width:100%;height:100%;border:none;
}
.yt-overlay.gone{opacity:0;pointer-events:none}
.yt-overlay{
  position:absolute;inset:0;
  display:flex;flex-direction:column;
  align-items:center;justify-content:center;
  background:linear-gradient(160deg,rgba(0,0,0,0.22) 0%,rgba(0,0,0,0.55) 100%);
  cursor:pointer;transition:opacity 0.3s;
}
.play-ring{
  width:76px;height:76px;
  background:var(--orange);border-radius:50%;
  display:flex;align-items:center;justify-content:center;
  box-shadow:0 8px 48px rgba(232,83,26,0.55);
  transition:transform 0.2s,background 0.2s;
}
.yt-overlay:hover .play-ring{transform:scale(1.1);background:var(--orange2)}
.play-ring svg{width:28px;height:28px;fill:white;margin-left:4px}
.play-label{margin-top:16px;color:rgba(255,255,255,0.72);font-size:0.8rem;font-weight:500;letter-spacing:0.04em}

/* PROBLEM */
.problem-section{padding:110px 5vw;background:var(--bg)}
.problem-inner{max-width:1080px;margin:0 auto}
.problem-section .section-tag{color:var(--orange)}
.problem-section h2{
  font-family:'Fraunces',serif;
  font-size:clamp(1.9rem,3.5vw,3rem);
  font-weight:700;color:var(--dark);
  max-width:680px;line-height:1.12;margin-bottom:14px;margin-top:16px;
}
.problem-intro{color:var(--mid);font-size:1.02rem;max-width:600px;margin-bottom:64px;line-height:1.7}
.problem-grid{
  display:grid;grid-template-columns:repeat(3,1fr);
  gap:1px;background:var(--border);
  border:1px solid var(--border);border-radius:20px;overflow:hidden;
}
.prob-card{background:var(--white);padding:44px 36px;transition:background 0.25s}
.prob-card:hover{background:var(--orangebg)}
.prob-num{font-family:'Fraunces',serif;font-size:2.6rem;font-weight:300;color:var(--orange);opacity:0.28;line-height:1;margin-bottom:20px}
.prob-card h3{font-size:1rem;font-weight:600;color:var(--dark);margin-bottom:10px}
.prob-card p{font-size:0.88rem;color:var(--mid);line-height:1.65}

/* HOW IT WORKS */
.how-section{padding:110px 5vw;background:var(--bg2)}
.how-inner{max-width:1080px;margin:0 auto}
.how-section .section-tag{color:var(--orange)}
.how-section h2{font-family:'Fraunces',serif;font-size:clamp(1.9rem,3vw,2.7rem);font-weight:700;color:var(--dark);margin-bottom:10px;margin-top:16px}
.how-intro{color:var(--mid);font-size:1rem;max-width:540px;margin-bottom:64px;line-height:1.7}
.how-steps{display:flex;flex-direction:column;gap:3px}
.step{
  background:var(--white);border:1px solid var(--border);border-radius:16px;
  padding:40px 44px;display:grid;grid-template-columns:52px 1fr;
  gap:32px;align-items:start;transition:box-shadow 0.25s;
}
.step:hover{box-shadow:0 12px 40px rgba(17,17,8,0.07)}
.step-num{
  width:52px;height:52px;border-radius:14px;
  background:var(--orangebg);border:1px solid rgba(232,83,26,0.18);
  display:flex;align-items:center;justify-content:center;
  font-family:'Fraunces',serif;font-weight:600;font-size:1.1rem;color:var(--orange);flex-shrink:0;
}
.step-body h3{font-size:1.05rem;font-weight:600;color:var(--dark);margin-bottom:8px}
.step-body p{font-size:0.9rem;color:var(--mid);line-height:1.68}

/* SYSTEM */
.system-section{padding:110px 5vw;background:var(--bg)}
.system-inner{max-width:1080px;margin:0 auto}
.system-section .section-tag{color:var(--orange)}
.system-section h2{font-family:'Fraunces',serif;font-size:clamp(1.9rem,3vw,2.7rem);font-weight:700;color:var(--dark);margin-bottom:10px;margin-top:16px}
.system-intro{color:var(--mid);font-size:1rem;max-width:520px;margin-bottom:60px;line-height:1.7}
.system-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:20px}
.svc{
  background:var(--white);border:1px solid var(--border);border-radius:20px;
  padding:44px;transition:transform 0.25s,box-shadow 0.25s;
}
.svc:hover{transform:translateY(-4px);box-shadow:0 20px 60px rgba(17,17,8,0.09)}
.svc-icon{
  width:46px;height:46px;border-radius:13px;
  background:var(--orangebg);
  display:flex;align-items:center;justify-content:center;margin-bottom:22px;
}
.svc-icon svg{width:22px;height:22px;stroke:var(--orange);fill:none;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}
.svc h3{font-family:'Fraunces',serif;font-size:1.2rem;font-weight:600;color:var(--dark);margin-bottom:10px}
.svc p{font-size:0.88rem;color:var(--mid);line-height:1.68}
.svc-tag{display:inline-block;margin-top:18px;font-size:0.74rem;font-weight:600;color:var(--orange);background:var(--orangebg);padding:3px 12px;border-radius:100px;letter-spacing:0.04em}

/* PROOF */

/* FUNNEL SECTION */
.funnel-section{padding:110px 5vw;background:var(--dark)}
.funnel-inner{max-width:1080px;margin:0 auto}
.funnel-section .section-tag{color:var(--orange2)}
.funnel-section h2{
  font-family:'Fraunces',serif;
  font-size:clamp(1.9rem,3vw,2.7rem);
  font-weight:700;color:var(--white);margin-bottom:10px;margin-top:16px;
}
.funnel-intro{color:rgba(250,248,244,0.48);font-size:1rem;max-width:560px;margin-bottom:70px;line-height:1.7}

/* Funnel visual */
.funnel-visual{
  display:flex;flex-direction:column;align-items:center;gap:0;
  max-width:680px;margin:0 auto 80px;
}
.funnel-stage{
  width:100%;display:flex;align-items:stretch;
  position:relative;
}
.funnel-stage-inner{
  flex:1;
  padding:22px 28px;
  display:flex;align-items:center;justify-content:space-between;gap:20px;
  position:relative;z-index:1;
  transition:opacity 0.2s;
  border-radius:12px;
  margin-bottom:4px;
}
.funnel-stage:nth-child(1) .funnel-stage-inner{background:rgba(232,83,26,0.9);margin:0 0px}
.funnel-stage:nth-child(2) .funnel-stage-inner{background:rgba(232,83,26,0.72);margin:0 36px}
.funnel-stage:nth-child(3) .funnel-stage-inner{background:rgba(232,83,26,0.54);margin:0 72px}
.funnel-stage:nth-child(4) .funnel-stage-inner{background:rgba(232,83,26,0.38);margin:0 108px}
.funnel-stage:nth-child(5) .funnel-stage-inner{background:rgba(232,83,26,0.22);margin:0 144px}

.funnel-stage-left{display:flex;align-items:center;gap:16px}
.funnel-stage-icon{
  width:38px;height:38px;border-radius:10px;
  background:rgba(255,255,255,0.15);
  display:flex;align-items:center;justify-content:center;flex-shrink:0;
}
.funnel-stage-icon svg{width:18px;height:18px;stroke:#fff;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}
.funnel-stage-name{font-weight:600;font-size:0.95rem;color:#fff}
.funnel-stage-desc{font-size:0.78rem;color:rgba(255,255,255,0.7);margin-top:2px}
.funnel-stage-count{
  font-family:'Fraunces',serif;font-size:1.6rem;font-weight:700;
  color:rgba(255,255,255,0.5);white-space:nowrap;
}

/* Funnel outcome row */
.funnel-outcome{
  display:flex;align-items:center;justify-content:center;gap:12px;
  margin-top:28px;
}
.funnel-outcome-line{flex:1;height:1px;background:rgba(255,255,255,0.1)}
.funnel-outcome-pill{
  background:var(--orange);color:#fff;
  padding:10px 24px;border-radius:100px;
  font-size:0.82rem;font-weight:600;letter-spacing:0.04em;
  white-space:nowrap;
}

/* Funnel explainer cards below */
.funnel-cards{
  display:grid;grid-template-columns:repeat(3,1fr);
  gap:16px;margin-top:64px;
}
.funnel-card{
  background:rgba(255,255,255,0.04);
  border:1px solid rgba(255,255,255,0.07);
  border-radius:18px;padding:36px 28px;
  transition:background 0.25s;
}
.funnel-card:hover{background:rgba(255,255,255,0.07)}
.funnel-card-num{
  font-family:'Fraunces',serif;font-size:2rem;
  font-weight:300;color:var(--orange);opacity:0.4;
  line-height:1;margin-bottom:16px;
}
.funnel-card h3{font-size:0.98rem;font-weight:600;color:var(--white);margin-bottom:8px}
.funnel-card p{font-size:0.85rem;color:rgba(250,248,244,0.45);line-height:1.65}

@media(max-width:860px){
  .funnel-cards{grid-template-columns:1fr}
  .funnel-stage-count{display:none}
  .funnel-stage:nth-child(1) .funnel-stage-inner{margin:0 0px}
  .funnel-stage:nth-child(2) .funnel-stage-inner{margin:0 16px}
  .funnel-stage:nth-child(3) .funnel-stage-inner{margin:0 32px}
  .funnel-stage:nth-child(4) .funnel-stage-inner{margin:0 48px}
  .funnel-stage:nth-child(5) .funnel-stage-inner{margin:0 64px}
  .funnel-stage-inner{padding:16px 18px}
  .funnel-stage-desc{display:none}
}

.proof-bar{background:var(--orange);padding:60px 5vw}
.proof-bar-inner{max-width:1080px;margin:0 auto;display:grid;grid-template-columns:repeat(4,1fr);gap:40px;text-align:center}
.proof-num{font-family:'Fraunces',serif;font-size:2.6rem;font-weight:800;color:var(--white);line-height:1;margin-bottom:8px}
.proof-label{font-size:0.82rem;color:rgba(255,255,255,0.7);font-weight:500}

/* ── CONTACT ── */
.contact-section{background:var(--dark);padding:110px 5vw}
.contact-inner{max-width:640px;margin:0 auto;text-align:center}
.contact-section .section-tag{color:var(--orange2);margin-bottom:20px}
.contact-section h2{
  font-family:'Fraunces',serif;
  font-size:clamp(2rem,4vw,3.2rem);
  font-weight:800;color:var(--white);line-height:1.08;margin-bottom:18px;
}
.contact-section > .contact-inner > p{
  color:rgba(250,248,244,0.45);font-size:0.98rem;line-height:1.72;margin-bottom:48px;
}

/* Formspree form */
#contact-form{display:flex;flex-direction:column;gap:12px;max-width:460px;margin:0 auto 20px}
.form-row{display:flex;gap:0;border:1px solid rgba(255,255,255,0.1);border-radius:100px;overflow:hidden;background:rgba(255,255,255,0.05)}
.form-row input{
  flex:1;background:transparent;border:none;outline:none;
  padding:15px 22px;color:var(--white);
  font-family:'Instrument Sans',sans-serif;font-size:0.88rem;
}
.form-row input::placeholder{color:rgba(255,255,255,0.28)}
.form-name-row{
  border:1px solid rgba(255,255,255,0.1);border-radius:100px;overflow:hidden;
  background:rgba(255,255,255,0.05);
}
.form-name-row input{
  width:100%;background:transparent;border:none;outline:none;
  padding:15px 22px;color:var(--white);
  font-family:'Instrument Sans',sans-serif;font-size:0.88rem;
}
.form-name-row input::placeholder{color:rgba(255,255,255,0.28)}
.form-submit{
  background:var(--orange);color:var(--white);border:none;
  padding:15px 22px;border-radius:100px;
  font-family:'Instrument Sans',sans-serif;font-size:0.88rem;font-weight:600;
  cursor:pointer;transition:background 0.2s;width:100%;
}
.form-submit:hover{background:var(--orange2)}
.form-submit:disabled{background:#555;cursor:not-allowed}

/* success / error states */
.form-msg{
  font-size:0.84rem;margin-top:8px;
  padding:12px 20px;border-radius:12px;display:none;
}
.form-msg.success{display:block;background:rgba(34,197,94,0.12);color:#4ade80}
.form-msg.error{display:block;background:rgba(232,83,26,0.12);color:var(--orange2)}

.contact-alt{font-size:0.82rem;color:rgba(250,248,244,0.28);margin-top:16px}
.contact-alt a{color:var(--orange2);font-weight:600}

/* SETUP NOTICE — remove after adding your Formspree ID */
.setup-notice{
  background:rgba(232,83,26,0.1);border:1px solid rgba(232,83,26,0.3);
  border-radius:12px;padding:16px 20px;margin-bottom:24px;
  font-size:0.82rem;color:rgba(250,248,244,0.7);line-height:1.6;text-align:left;
}
.setup-notice strong{color:var(--orange2)}

footer{
  background:#0c0c09;padding:28px 5vw;
  display:flex;align-items:center;justify-content:space-between;
  border-top:1px solid rgba(255,255,255,0.05);
}
.footer-logo{font-family:'Fraunces',serif;font-weight:800;font-size:0.95rem;letter-spacing:0.08em;color:rgba(250,248,244,0.3)}
footer p{font-size:0.76rem;color:rgba(250,248,244,0.2)}

.reveal{opacity:0;transform:translateY(24px);transition:opacity 0.65s ease,transform 0.65s ease}
.reveal.visible{opacity:1;transform:none}
@keyframes rise{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:none}}

@media(max-width:860px){
  .nav-links{display:none}
  .problem-grid{grid-template-columns:1fr;background:none;border:none;gap:16px}
  .prob-card{border:1px solid var(--border);border-radius:16px}
  .system-grid{grid-template-columns:1fr}
  .proof-bar-inner{grid-template-columns:repeat(2,1fr)}
  .step{grid-template-columns:1fr;gap:16px}
}
@media(max-width:540px){
  .hero h1{font-size:2.5rem}
  .proof-bar-inner{grid-template-columns:1fr 1fr}
}
</style>
</head>
<body>

<nav>
  <div class="nav-logo">NECXMEDIA</div>
  <ul class="nav-links">
    <li><a href="#problem">The Problem</a></li>
    <li><a href="#howitworks">How It Works</a></li>
    <li><a href="#funnel">The Funnel</a></li>
    <li><a href="#system">The System</a></li>
    <li><a href="#contact">Work With Us</a></li>
  </ul>
  <a href="mailto:suhail@necxmedia.com" class="nav-btn">Get Started</a>
</nav>


<!-- HERO -->
<section class="hero" id="home">
  <div class="hero-eyebrow"><span></span>Lead Education System</div>
  <h1>Leads that understand you<br>before they <i>ever call you.</i></h1>
  <p class="hero-sub">
    We build the sales funnels, content systems, and email sequences that educate, filter, and qualify your leads for you. By the time someone reaches out, they already know what you do, they already trust you, and they are already sold.
  </p>
  <div class="hero-actions">
    <a href="#contact" class="btn-primary">Build my system</a>
    <a href="#howitworks" class="btn-ghost">See how it works</a>
  </div>
  <div class="hero-trust">
    <span>No more explaining your offer from scratch</span>
    <div class="hero-trust-div"></div>
    <span>Leads that filter themselves</span>
    <div class="hero-trust-div"></div>
    <span>Runs without you</span>
  </div>
</section>


<!-- VIDEO -->
<section class="video-section" id="demo">
  <div class="video-inner">
    <div class="section-tag reveal">Watch This First</div>
    <h2 class="reveal">See the whole idea<br>in under two minutes</h2>
    <p class="section-sub reveal">This short clip explains exactly how the system works. Watch it and you will know whether this is what you have been looking for.</p>

    <div class="yt-wrap reveal">
      <iframe
        id="ytIframe"
        src="https://www.youtube-nocookie.com/embed/UZKhfRnFTew?rel=0&modestbranding=1&playsinline=1"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        title="NECXMEDIA Lead Education System">
      </iframe>
      <div class="yt-overlay" id="ytOverlay">
        <div class="play-ring">
          <svg viewBox="0 0 24 24"><path d="M8 5.14v14l11-7-11-7z"/></svg>
        </div>
        <p class="play-label">Watch the overview</p>
      </div>
    </div>
  </div>
</section>


<!-- PROBLEM -->
<section class="problem-section" id="problem">
  <div class="problem-inner">
    <div class="section-tag reveal">The Real Problem</div>
    <h2 class="reveal">You repeat your offer on every single call.<br>That is time you will never get back.</h2>
    <p class="problem-intro reveal">Your leads come in knowing nothing. You spend the first half of every conversation just getting them up to speed. That is not a sales problem. That is a system problem.</p>
    <div class="problem-grid reveal">
      <div class="prob-card">
        <div class="prob-num">01</div>
        <h3>Every conversation starts from zero</h3>
        <p>You explain what you do, how it works, why it is different, and why it is worth it. Every single time. The same 20 minutes, every single call, with no system doing it for you in the background.</p>
      </div>
      <div class="prob-card">
        <div class="prob-num">02</div>
        <h3>Interested leads go cold and disappear</h3>
        <p>Someone shows interest, then life happens. Without a sequence following up and keeping them warm, those half-won opportunities just quietly walk away. You never even know why.</p>
      </div>
      <div class="prob-card">
        <div class="prob-num">03</div>
        <h3>Wrong-fit people waste your best hours</h3>
        <p>No filter means anyone can book a call. You end up spending serious time with people who were never going to buy. A good lead education system removes them before they ever reach you.</p>
      </div>
    </div>
  </div>
</section>


<!-- HOW IT WORKS -->
<section class="how-section" id="howitworks">
  <div class="how-inner">
    <div class="section-tag reveal">How It Works</div>
    <h2 class="reveal">We build the system that educates.<br>You show up and close.</h2>
    <p class="how-intro reveal">Here is exactly what happens from the moment a stranger finds you to the moment they book a call ready to buy.</p>
    <div class="how-steps">
      <div class="step reveal">
        <div class="step-num">1</div>
        <div class="step-body">
          <h3>We find the beliefs your leads need to hold before they buy</h3>
          <p>Every offer has a specific set of objections and mental blocks that stop people from saying yes. We map those out first. That becomes the entire content strategy. Everything we build from here is designed to move people through those beliefs one at a time.</p>
        </div>
      </div>
      <div class="step reveal">
        <div class="step-num">2</div>
        <div class="step-body">
          <h3>We build a sales funnel that explains your offer without you</h3>
          <p>A landing page alone does nothing. We build a full funnel journey where each step educates, removes doubt, and builds trust. By the end of it a lead understands exactly what you do, why it works, and whether it is right for them. The right ones move forward. The wrong ones self-select out.</p>
        </div>
      </div>
      <div class="step reveal">
        <div class="step-num">3</div>
        <div class="step-body">
          <h3>We deploy content across channels to keep the funnel fed</h3>
          <p>Videos, short-form posts, email sequences. We turn your knowledge into content that reaches your audience where they already are, answers the questions they are already asking, and pulls warm leads into your funnel every week without you posting manually every day.</p>
        </div>
      </div>
      <div class="step reveal">
        <div class="step-num">4</div>
        <div class="step-body">
          <h3>Leads arrive pre-educated, pre-qualified, and ready to decide</h3>
          <p>When someone books a call after going through your system, they already understand your offer, they already believe in the approach, and they have already decided you are worth talking to. The conversation becomes a formality. You just confirm the fit and close.</p>
        </div>
      </div>
    </div>
  </div>
</section>


<!-- THE SYSTEM -->
<section class="system-section" id="system">
  <div class="system-inner">
    <div class="section-tag reveal">What Goes Into the System</div>
    <h2 class="reveal">Every piece has one job.<br>Move the lead closer to yes.</h2>
    <p class="system-intro reveal">The system is made up of four components that work together. Each one feeds the next.</p>
    <div class="system-grid">
      <div class="svc reveal">
        <div class="svc-icon">
          <svg viewBox="0 0 24 24"><path d="M3 3h18v5H3zM3 10h18v5H3zM3 17h10v4H3z"/></svg>
        </div>
        <h3>Sales Funnels That Educate</h3>
        <p>Not just a page. A full journey from stranger to sold. We design and write funnels where every step shifts one belief and makes the next step obvious. Leads who go through it understand your offer better than most people you explain it to in person.</p>
        <span class="svc-tag">The Core</span>
      </div>
      <div class="svc reveal">
        <div class="svc-icon">
          <svg viewBox="0 0 24 24"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>
        </div>
        <h3>Video Content System</h3>
        <p>Video is the fastest way to build trust at scale. We build a content system around short videos that answer your leads' biggest questions, address their real objections, and show them exactly why your approach works. Each one pulls people deeper into your world.</p>
        <span class="svc-tag">Trust Builder</span>
      </div>
      <div class="svc reveal">
        <div class="svc-icon">
          <svg viewBox="0 0 24 24"><path d="M4 4h16v16H4z"/><path d="M8 10h8M8 14h5"/></svg>
        </div>
        <h3>Email Sequences That Nurture</h3>
        <p>Not newsletters. Sequences. Every email has a specific job: shift a belief, remove an objection, share proof, or invite action. We write them so they feel personal and worth reading, not like something to archive and forget.</p>
        <span class="svc-tag">Always-On Follow-Up</span>
      </div>
      <div class="svc reveal">
        <div class="svc-icon">
          <svg viewBox="0 0 24 24"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
        </div>
        <h3>Multi-Channel Content Deployment</h3>
        <p>We take your core ideas and turn them into content for every channel your audience uses. Your funnel keeps getting new leads without you having to be active everywhere manually every single day.</p>
        <span class="svc-tag">Continuous Reach</span>
      </div>
    </div>
  </div>
</section>



<!-- SALES FUNNEL -->
<section class="funnel-section" id="funnel">
  <div class="funnel-inner">
    <div class="section-tag reveal">The Sales Funnel</div>
    <h2 class="reveal">A funnel is not a page.<br>It is a sequence of beliefs.</h2>
    <p class="funnel-intro reveal">Most businesses have a website. We build a system where every single step moves a stranger one belief closer to becoming a paying client. Here is what that looks like.</p>

    <!-- Visual funnel diagram -->
    <div class="funnel-visual reveal">

      <div class="funnel-stage">
        <div class="funnel-stage-inner">
          <div class="funnel-stage-left">
            <div class="funnel-stage-icon">
              <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>
            </div>
            <div>
              <div class="funnel-stage-name">Awareness</div>
              <div class="funnel-stage-desc">They discover you through content, ads, or referral</div>
            </div>
          </div>
          <div class="funnel-stage-count">100</div>
        </div>
      </div>

      <div class="funnel-stage">
        <div class="funnel-stage-inner">
          <div class="funnel-stage-left">
            <div class="funnel-stage-icon">
              <svg viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
            </div>
            <div>
              <div class="funnel-stage-name">Interest</div>
              <div class="funnel-stage-desc">They enter your funnel and start consuming your content</div>
            </div>
          </div>
          <div class="funnel-stage-count">68</div>
        </div>
      </div>

      <div class="funnel-stage">
        <div class="funnel-stage-inner">
          <div class="funnel-stage-left">
            <div class="funnel-stage-icon">
              <svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
            </div>
            <div>
              <div class="funnel-stage-name">Education</div>
              <div class="funnel-stage-desc">Emails and videos answer their questions and remove doubt</div>
            </div>
          </div>
          <div class="funnel-stage-count">41</div>
        </div>
      </div>

      <div class="funnel-stage">
        <div class="funnel-stage-inner">
          <div class="funnel-stage-left">
            <div class="funnel-stage-icon">
              <svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            </div>
            <div>
              <div class="funnel-stage-name">Conviction</div>
              <div class="funnel-stage-desc">They believe in your approach and self-qualify as a right fit</div>
            </div>
          </div>
          <div class="funnel-stage-count">19</div>
        </div>
      </div>

      <div class="funnel-stage">
        <div class="funnel-stage-inner">
          <div class="funnel-stage-left">
            <div class="funnel-stage-icon">
              <svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </div>
            <div>
              <div class="funnel-stage-name">Conversion</div>
              <div class="funnel-stage-desc">They book a call already sold. You just confirm and close.</div>
            </div>
          </div>
          <div class="funnel-stage-count">12</div>
        </div>
      </div>

      <div class="funnel-outcome">
        <div class="funnel-outcome-line"></div>
        <div class="funnel-outcome-pill">12 ready-to-buy calls from every 100 strangers</div>
        <div class="funnel-outcome-line"></div>
      </div>
    </div>

    <!-- Three funnel principles -->
    <div class="funnel-cards">
      <div class="funnel-card reveal">
        <div class="funnel-card-num">01</div>
        <h3>Every page has one job</h3>
        <p>We never put two goals on the same page. Each step in the funnel does exactly one thing: move the lead to the next step. No distractions, no confusion, no leaks.</p>
      </div>
      <div class="funnel-card reveal">
        <div class="funnel-card-num">02</div>
        <h3>The funnel educates, not just sells</h3>
        <p>Most funnels push people toward a yes. Ours pull people toward understanding. When someone truly understands your offer, the yes happens on its own. That is what makes it stick.</p>
      </div>
      <div class="funnel-card reveal">
        <div class="funnel-card-num">03</div>
        <h3>Wrong-fit leads exit themselves</h3>
        <p>A well-built funnel does not just convert the right people. It politely removes the wrong ones before they ever waste your time. You only speak to people who have already decided.</p>
      </div>
    </div>
  </div>
</section>


<!-- PROOF -->
<div class="proof-bar">
  <div class="proof-bar-inner">
    <div>
      <div class="proof-num">90%</div>
      <div class="proof-label">of your sales conversation is just educating. A system does that for free, at scale, around the clock.</div>
    </div>
    <div>
      <div class="proof-num">3x</div>
      <div class="proof-label">more likely to close when a lead arrives having already consumed your content</div>
    </div>
    <div>
      <div class="proof-num">12 hrs</div>
      <div class="proof-label">saved per week once follow-up, nurture, and education run themselves</div>
    </div>
    <div>
      <div class="proof-num">Zero</div>
      <div class="proof-label">wrong-fit calls when your funnel filters leads before they reach your calendar</div>
    </div>
  </div>
</div>


<!-- CONTACT -->
<section class="contact-section" id="contact">
  <div class="contact-inner">
    <div class="section-tag">Work With Us</div>
    <h2>Let your system do<br>the explaining.</h2>
    <p>If you are ready to stop explaining your offer on every call and want a system that does it for you, reach out directly.</p>

    <a href="mailto:suhail@necxmedia.com" class="contact-email-link">suhail@necxmedia.com</a>
    <br><br>
    <a href="mailto:suhail@necxmedia.com" class="btn-primary" style="display:inline-block;margin-top:8px;background:var(--orange)">suhail@necxmedia.com</a>
  </div>
</section>


<footer>
  <div class="footer-logo">NECXMEDIA</div>
  <p>2026 NECXMEDIA. Built for founders who want leverage.</p>
</footer>


<script>
/* VIDEO PLAY BUTTON */
const overlay = document.getElementById('ytOverlay');
const iframe  = document.getElementById('ytIframe');
if (overlay && iframe) {
  overlay.addEventListener('click', function() {
    var src = iframe.src;
    if (src.indexOf('autoplay=1') === -1) {
      iframe.src = src + '&autoplay=1';
    }
    overlay.classList.add('gone');
  });
}

/* SCROLL REVEAL */
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));


</script>

</body>
</html>
