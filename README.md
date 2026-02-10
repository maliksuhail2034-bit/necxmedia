<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>NECXMEDIA — Precision Growth Engineering</title>

<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700;800;900&family=Space+Mono:wght@400;700&family=Crimson+Pro:wght@400;600&display=swap" rel="stylesheet">

<script src="https://cdn.jsdelivr.net/npm/gsap@3/dist/gsap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrollTrigger.min.js"></script>

<style>
:root{
  --bg-deep:#000000;
  --bg-surface:#0a0a0a;
  --bg-elevated:#141414;
  --text-primary:#ffffff;
  --text-secondary:#a8a8a8;
  --text-tertiary:#6b6b6b;
  --accent-primary:#00ff88;
  --accent-secondary:#00ccff;
  --accent-gold:#ffd700;
  --glow-green:rgba(0,255,136,.4);
  --glow-cyan:rgba(0,204,255,.3);
  --border-subtle:rgba(255,255,255,.06);
  --gradient-hero:linear-gradient(135deg, rgba(0,255,136,.12) 0%, rgba(0,204,255,.08) 100%);
}

*{margin:0;padding:0;box-sizing:border-box}

html{
  scroll-behavior:smooth;
}

body{
  font-family:'Outfit',sans-serif;
  background:var(--bg-deep);
  color:var(--text-primary);
  overflow-x:hidden;
  line-height:1.6;
}

/* BACKGROUND EFFECTS */
.bg-grid{
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background-image:
    linear-gradient(rgba(0,255,136,.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0,255,136,.02) 1px, transparent 1px);
  background-size:80px 80px;
  pointer-events:none;
  z-index:0;
}

.gradient-orb{
  position:fixed;
  border-radius:50%;
  filter:blur(120px);
  opacity:.15;
  pointer-events:none;
  z-index:0;
}

.orb-1{
  width:600px;
  height:600px;
  background:radial-gradient(circle, var(--accent-primary), transparent);
  top:-300px;
  right:-200px;
}

.orb-2{
  width:500px;
  height:500px;
  background:radial-gradient(circle, var(--accent-secondary), transparent);
  bottom:-200px;
  left:-150px;
}

/* NAVIGATION */
nav{
  position:fixed;
  top:0;
  width:100%;
  height:80px;
  background:rgba(10,10,10,.85);
  backdrop-filter:blur(30px) saturate(180%);
  border-bottom:1px solid var(--border-subtle);
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:0 5vw;
  z-index:1000;
  transition:all 0.3s ease;
}

nav.scrolled{
  height:70px;
  background:rgba(10,10,10,.95);
  box-shadow:0 10px 40px rgba(0,0,0,.5);
}

.logo-container{
  display:flex;
  align-items:center;
  gap:12px;
}

.logo-icon{
  width:36px;
  height:36px;
  background:linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
  border-radius:8px;
  display:flex;
  align-items:center;
  justify-content:center;
  font-family:'Space Mono', monospace;
  font-weight:700;
  font-size:18px;
  color:var(--bg-deep);
  box-shadow:0 0 30px var(--glow-green);
}

.logo{
  font-family:'Space Mono', monospace;
  font-weight:700;
  font-size:22px;
  letter-spacing:2px;
}

.nav-links{
  list-style:none;
  display:flex;
  gap:48px;
  align-items:center;
}

.nav-links a{
  color:var(--text-secondary);
  font-weight:600;
  font-size:15px;
  text-decoration:none;
  transition:color 0.3s ease;
  position:relative;
}

.nav-links a::after{
  content:'';
  position:absolute;
  bottom:-8px;
  left:0;
  width:0;
  height:2px;
  background:var(--accent-primary);
  transition:width 0.3s ease;
}

.nav-links a:hover{
  color:var(--text-primary);
}

.nav-links a:hover::after{
  width:100%;
}

.nav-cta{
  background:linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
  color:var(--bg-deep);
  padding:12px 32px;
  border-radius:50px;
  font-weight:800;
  font-size:14px;
  letter-spacing:0.5px;
  box-shadow:0 0 40px var(--glow-green);
  transition:all 0.3s ease;
  text-transform:uppercase;
}

.nav-cta:hover{
  transform:translateY(-2px);
  box-shadow:0 5px 50px var(--glow-green);
}

/* HERO SECTION */
.hero{
  position:relative;
  min-height:100vh;
  display:flex;
  align-items:center;
  justify-content:center;
  padding:120px 5vw 80px;
  overflow:hidden;
}

.hero-content{
  max-width:1200px;
  text-align:center;
  position:relative;
  z-index:10;
}

.hero-eyebrow{
  font-family:'Space Mono', monospace;
  font-size:13px;
  letter-spacing:3px;
  text-transform:uppercase;
  color:var(--accent-primary);
  margin-bottom:24px;
  font-weight:700;
}

.hero h1{
  font-size:clamp(3.5rem, 8vw, 7.5rem);
  font-weight:900;
  line-height:1;
  margin-bottom:32px;
  letter-spacing:-3px;
}

.hero h1 .gradient-text{
  background:linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
  background-clip:text;
  display:inline-block;
}

.hero-subtitle{
  font-size:clamp(1.1rem, 2vw, 1.4rem);
  color:var(--text-secondary);
  max-width:800px;
  margin:0 auto 48px;
  line-height:1.8;
}

.hero-cta-group{
  display:flex;
  gap:24px;
  justify-content:center;
  flex-wrap:wrap;
}

.cta-primary{
  background:linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
  color:var(--bg-deep);
  padding:20px 48px;
  border-radius:50px;
  font-weight:800;
  font-size:16px;
  letter-spacing:0.5px;
  text-transform:uppercase;
  display:inline-block;
  box-shadow:0 0 60px var(--glow-green);
  transition:all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position:relative;
  overflow:hidden;
}

.cta-primary::before{
  content:'';
  position:absolute;
  top:0;
  left:-100%;
  width:100%;
  height:100%;
  background:linear-gradient(90deg, transparent, rgba(255,255,255,.3), transparent);
  transition:left 0.5s ease;
}

.cta-primary:hover::before{
  left:100%;
}

.cta-primary:hover{
  transform:translateY(-3px) scale(1.02);
  box-shadow:0 10px 80px var(--glow-green);
}

.cta-secondary{
  background:transparent;
  color:var(--text-primary);
  padding:20px 48px;
  border-radius:50px;
  font-weight:700;
  font-size:16px;
  border:2px solid var(--border-subtle);
  display:inline-block;
  transition:all 0.3s ease;
}

.cta-secondary:hover{
  border-color:var(--accent-primary);
  color:var(--accent-primary);
  box-shadow:0 0 30px var(--glow-green);
}

.hero-stats{
  display:flex;
  justify-content:center;
  gap:80px;
  margin-top:100px;
  flex-wrap:wrap;
}

.stat{
  text-align:center;
}

.stat-number{
  font-size:clamp(2.5rem, 4vw, 3.5rem);
  font-weight:900;
  color:var(--accent-primary);
  line-height:1;
  margin-bottom:8px;
}

.stat-label{
  font-size:14px;
  color:var(--text-tertiary);
  text-transform:uppercase;
  letter-spacing:2px;
  font-weight:600;
}

/* SECTION STYLING */
section{
  position:relative;
  padding:140px 5vw;
  z-index:10;
}

.section-header{
  text-align:center;
  max-width:900px;
  margin:0 auto 100px;
}

.section-eyebrow{
  font-family:'Space Mono', monospace;
  font-size:12px;
  letter-spacing:3px;
  text-transform:uppercase;
  color:var(--accent-primary);
  margin-bottom:20px;
  font-weight:700;
}

.section-title{
  font-size:clamp(2.5rem, 5vw, 4rem);
  font-weight:900;
  margin-bottom:24px;
  letter-spacing:-2px;
}

.section-description{
  font-size:1.2rem;
  color:var(--text-secondary);
  line-height:1.8;
}

/* SERVICES GRID */
.services-grid{
  display:grid;
  grid-template-columns:repeat(auto-fit, minmax(340px, 1fr));
  gap:32px;
  max-width:1400px;
  margin:0 auto;
}

.service-card{
  background:linear-gradient(135deg, rgba(20,20,20,.8), rgba(10,10,10,.9));
  border:1px solid var(--border-subtle);
  border-radius:24px;
  padding:48px;
  position:relative;
  overflow:hidden;
  transition:all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  cursor:pointer;
}

.service-card::before{
  content:'';
  position:absolute;
  top:0;
  left:0;
  right:0;
  height:4px;
  background:linear-gradient(90deg, var(--accent-primary), var(--accent-secondary));
  transform:scaleX(0);
  transform-origin:left;
  transition:transform 0.5s ease;
}

.service-card:hover::before{
  transform:scaleX(1);
}

.service-card::after{
  content:'';
  position:absolute;
  inset:0;
  background:radial-gradient(circle at 50% 0%, rgba(0,255,136,.08), transparent 70%);
  opacity:0;
  transition:opacity 0.5s ease;
}

.service-card:hover::after{
  opacity:1;
}

.service-card:hover{
  transform:translateY(-12px);
  border-color:rgba(0,255,136,.3);
  box-shadow:0 30px 80px rgba(0,0,0,.6), 0 0 60px var(--glow-green);
}

.service-icon{
  width:70px;
  height:70px;
  background:linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
  border-radius:16px;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:32px;
  margin-bottom:28px;
  box-shadow:0 0 30px var(--glow-green);
}

.service-card h3{
  font-size:1.6rem;
  font-weight:800;
  margin-bottom:16px;
  letter-spacing:-0.5px;
}

.service-card p{
  color:var(--text-secondary);
  line-height:1.8;
  font-size:1.05rem;
}

/* DETAILED SERVICE SECTIONS */
.service-detail{
  background:linear-gradient(135deg, rgba(20,20,20,.6), rgba(10,10,10,.8));
  border:1px solid var(--border-subtle);
  border-radius:32px;
  padding:80px 60px;
  max-width:1200px;
  margin:0 auto 60px;
  position:relative;
  overflow:hidden;
}

.service-detail::before{
  content:'';
  position:absolute;
  top:-50%;
  right:-50%;
  width:100%;
  height:100%;
  background:radial-gradient(circle, rgba(0,255,136,.05), transparent 70%);
  pointer-events:none;
}

.service-detail-content{
  position:relative;
  z-index:1;
}

.service-detail h2{
  font-size:clamp(2rem, 4vw, 3rem);
  font-weight:900;
  margin-bottom:24px;
  letter-spacing:-1px;
}

.service-detail p{
  font-size:1.15rem;
  color:var(--text-secondary);
  line-height:1.9;
  margin-bottom:20px;
}

.service-features{
  display:grid;
  grid-template-columns:repeat(auto-fit, minmax(250px, 1fr));
  gap:24px;
  margin-top:40px;
}

.feature-item{
  display:flex;
  align-items:flex-start;
  gap:16px;
}

.feature-icon{
  width:24px;
  height:24px;
  background:var(--accent-primary);
  border-radius:6px;
  flex-shrink:0;
  margin-top:4px;
  display:flex;
  align-items:center;
  justify-content:center;
  color:var(--bg-deep);
  font-weight:900;
  font-size:14px;
}

.feature-text{
  color:var(--text-secondary);
  line-height:1.6;
}

/* CASE STUDIES */
.case-studies{
  background:var(--bg-surface);
  border-radius:32px;
  padding:100px 60px;
  max-width:1400px;
  margin:0 auto;
}

.case-study-grid{
  display:grid;
  gap:48px;
  margin-top:80px;
}

.case-study{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:60px;
  align-items:center;
  padding:60px;
  background:rgba(20,20,20,.4);
  border:1px solid var(--border-subtle);
  border-radius:24px;
  transition:all 0.4s ease;
}

.case-study:hover{
  border-color:rgba(0,255,136,.2);
  transform:translateX(8px);
}

.case-study-content h3{
  font-size:2rem;
  font-weight:800;
  margin-bottom:16px;
  letter-spacing:-0.5px;
}

.case-study-meta{
  display:flex;
  gap:20px;
  margin-bottom:24px;
  flex-wrap:wrap;
}

.meta-tag{
  font-family:'Space Mono', monospace;
  font-size:11px;
  padding:6px 14px;
  background:rgba(0,255,136,.1);
  color:var(--accent-primary);
  border-radius:20px;
  text-transform:uppercase;
  letter-spacing:1px;
  font-weight:700;
}

.case-study-content p{
  color:var(--text-secondary);
  line-height:1.8;
  margin-bottom:20px;
}

.case-results{
  display:grid;
  grid-template-columns:repeat(3, 1fr);
  gap:24px;
  margin-top:32px;
}

.result-metric{
  text-align:center;
  padding:20px;
  background:rgba(0,255,136,.05);
  border-radius:12px;
}

.result-number{
  font-size:2.2rem;
  font-weight:900;
  color:var(--accent-primary);
  line-height:1;
  margin-bottom:8px;
}

.result-label{
  font-size:13px;
  color:var(--text-tertiary);
  text-transform:uppercase;
  letter-spacing:1px;
}

.case-study-visual{
  background:linear-gradient(135deg, rgba(0,255,136,.1), rgba(0,204,255,.05));
  border-radius:16px;
  height:360px;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:80px;
  border:1px solid var(--border-subtle);
}

/* PROCESS SECTION */
.process-timeline{
  max-width:900px;
  margin:0 auto;
  position:relative;
}

.process-timeline::before{
  content:'';
  position:absolute;
  left:40px;
  top:0;
  bottom:0;
  width:2px;
  background:linear-gradient(180deg, var(--accent-primary), var(--accent-secondary));
  opacity:.3;
}

.process-step{
  display:flex;
  gap:40px;
  margin-bottom:80px;
  position:relative;
}

.step-number{
  width:80px;
  height:80px;
  background:linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
  border-radius:50%;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:2rem;
  font-weight:900;
  color:var(--bg-deep);
  flex-shrink:0;
  box-shadow:0 0 40px var(--glow-green);
  z-index:1;
}

.step-content{
  padding-top:10px;
  flex:1;
}

.step-content h3{
  font-size:1.8rem;
  font-weight:800;
  margin-bottom:12px;
  letter-spacing:-0.5px;
}

.step-content p{
  color:var(--text-secondary);
  line-height:1.8;
  font-size:1.05rem;
}

/* PHILOSOPHY SECTION */
.philosophy-content{
  max-width:1000px;
  margin:0 auto;
  text-align:center;
}

.philosophy-quote{
  font-family:'Crimson Pro', serif;
  font-size:clamp(1.8rem, 4vw, 3rem);
  font-weight:600;
  line-height:1.5;
  color:var(--text-primary);
  margin:60px 0;
  position:relative;
  font-style:italic;
}

.philosophy-quote::before{
  content:'"';
  font-size:8rem;
  position:absolute;
  top:-40px;
  left:-20px;
  color:var(--accent-primary);
  opacity:.2;
  font-family:'Crimson Pro', serif;
}

.philosophy-principles{
  display:grid;
  grid-template-columns:repeat(auto-fit, minmax(280px, 1fr));
  gap:40px;
  margin-top:80px;
}

.principle{
  text-align:left;
  padding:40px;
  background:rgba(20,20,20,.4);
  border:1px solid var(--border-subtle);
  border-radius:20px;
  transition:all 0.3s ease;
}

.principle:hover{
  border-color:rgba(0,255,136,.3);
  transform:translateY(-8px);
}

.principle-number{
  font-family:'Space Mono', monospace;
  font-size:3rem;
  font-weight:700;
  color:var(--accent-primary);
  opacity:.3;
  line-height:1;
  margin-bottom:16px;
}

.principle h3{
  font-size:1.4rem;
  font-weight:800;
  margin-bottom:12px;
}

.principle p{
  color:var(--text-secondary);
  line-height:1.7;
}

/* TESTIMONIALS */
.testimonials-grid{
  display:grid;
  grid-template-columns:repeat(auto-fit, minmax(320px, 1fr));
  gap:32px;
  max-width:1400px;
  margin:0 auto;
}

.testimonial{
  background:rgba(20,20,20,.6);
  border:1px solid var(--border-subtle);
  border-radius:20px;
  padding:40px;
  transition:all 0.3s ease;
}

.testimonial:hover{
  border-color:rgba(0,255,136,.3);
  transform:translateY(-6px);
}

.testimonial-text{
  font-size:1.1rem;
  line-height:1.8;
  color:var(--text-secondary);
  margin-bottom:28px;
  font-style:italic;
}

.testimonial-author{
  display:flex;
  align-items:center;
  gap:16px;
}

.author-avatar{
  width:50px;
  height:50px;
  background:linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
  border-radius:50%;
  display:flex;
  align-items:center;
  justify-content:center;
  font-weight:900;
  font-size:18px;
  color:var(--bg-deep);
}

.author-info h4{
  font-size:1rem;
  font-weight:700;
  margin-bottom:4px;
}

.author-info p{
  font-size:0.9rem;
  color:var(--text-tertiary);
}

/* FAQ SECTION */
.faq-container{
  max-width:900px;
  margin:0 auto;
}

.faq-item{
  background:rgba(20,20,20,.4);
  border:1px solid var(--border-subtle);
  border-radius:16px;
  margin-bottom:20px;
  overflow:hidden;
  transition:all 0.3s ease;
}

.faq-item:hover{
  border-color:rgba(0,255,136,.2);
}

.faq-question{
  padding:28px 32px;
  font-size:1.2rem;
  font-weight:700;
  cursor:pointer;
  display:flex;
  justify-content:space-between;
  align-items:center;
  user-select:none;
}

.faq-icon{
  font-size:1.5rem;
  color:var(--accent-primary);
  transition:transform 0.3s ease;
}

.faq-item.active .faq-icon{
  transform:rotate(45deg);
}

.faq-answer{
  max-height:0;
  overflow:hidden;
  transition:max-height 0.4s ease, padding 0.4s ease;
}

.faq-answer-content{
  padding:0 32px 32px;
  color:var(--text-secondary);
  line-height:1.8;
  font-size:1.05rem;
}

.faq-item.active .faq-answer{
  max-height:500px;
}

/* CONTACT SECTION */
.contact-container{
  max-width:800px;
  margin:0 auto;
  text-align:center;
}

.contact-box{
  background:linear-gradient(135deg, rgba(20,20,20,.8), rgba(10,10,10,.9));
  border:1px solid var(--border-subtle);
  border-radius:32px;
  padding:80px 60px;
  position:relative;
  overflow:hidden;
  margin-top:60px;
}

.contact-box::before{
  content:'';
  position:absolute;
  top:-100%;
  left:-100%;
  width:300%;
  height:300%;
  background:radial-gradient(circle, rgba(0,255,136,.08), transparent 50%);
  animation:rotate 20s linear infinite;
}

@keyframes rotate{
  from{transform:rotate(0deg)}
  to{transform:rotate(360deg)}
}

.contact-box-content{
  position:relative;
  z-index:1;
}

.contact-box h3{
  font-size:2rem;
  font-weight:900;
  margin-bottom:20px;
}

.contact-box p{
  font-size:1.15rem;
  color:var(--text-secondary);
  margin-bottom:40px;
  line-height:1.8;
}

.contact-email{
  font-family:'Space Mono', monospace;
  font-size:1.4rem;
  font-weight:700;
  color:var(--accent-primary);
  display:inline-block;
  padding:20px 40px;
  background:rgba(0,255,136,.05);
  border:2px solid rgba(0,255,136,.2);
  border-radius:50px;
  transition:all 0.3s ease;
}

.contact-email:hover{
  background:rgba(0,255,136,.1);
  border-color:var(--accent-primary);
  box-shadow:0 0 40px var(--glow-green);
  transform:translateY(-2px);
}

.contact-methods{
  display:flex;
  justify-content:center;
  gap:24px;
  margin-top:48px;
  flex-wrap:wrap;
}

.contact-method{
  padding:16px 32px;
  background:rgba(20,20,20,.6);
  border:1px solid var(--border-subtle);
  border-radius:50px;
  font-size:0.95rem;
  color:var(--text-secondary);
  transition:all 0.3s ease;
}

.contact-method:hover{
  border-color:rgba(0,255,136,.3);
  color:var(--text-primary);
}

/* FOOTER */
footer{
  background:var(--bg-surface);
  padding:80px 5vw 40px;
  border-top:1px solid var(--border-subtle);
  position:relative;
  z-index:10;
}

.footer-content{
  max-width:1400px;
  margin:0 auto;
  display:grid;
  grid-template-columns:2fr 1fr 1fr 1fr;
  gap:60px;
  margin-bottom:60px;
}

.footer-brand{
  max-width:350px;
}

.footer-logo{
  font-family:'Space Mono', monospace;
  font-weight:700;
  font-size:24px;
  letter-spacing:2px;
  margin-bottom:20px;
  display:inline-block;
}

.footer-tagline{
  color:var(--text-secondary);
  line-height:1.7;
  margin-bottom:24px;
}

.social-links{
  display:flex;
  gap:16px;
}

.social-link{
  width:44px;
  height:44px;
  background:rgba(255,255,255,.05);
  border-radius:50%;
  display:flex;
  align-items:center;
  justify-content:center;
  transition:all 0.3s ease;
  border:1px solid var(--border-subtle);
}

.social-link:hover{
  background:var(--accent-primary);
  border-color:var(--accent-primary);
  transform:translateY(-4px);
  box-shadow:0 8px 20px var(--glow-green);
}

.footer-column h4{
  font-size:1.1rem;
  font-weight:800;
  margin-bottom:20px;
  text-transform:uppercase;
  letter-spacing:1px;
}

.footer-links{
  list-style:none;
}

.footer-links li{
  margin-bottom:12px;
}

.footer-links a{
  color:var(--text-secondary);
  text-decoration:none;
  transition:color 0.3s ease;
  font-size:0.95rem;
}

.footer-links a:hover{
  color:var(--accent-primary);
}

.footer-bottom{
  text-align:center;
  padding-top:40px;
  border-top:1px solid var(--border-subtle);
  color:var(--text-tertiary);
  font-size:0.9rem;
}

/* MOBILE MENU */
.mobile-menu-toggle{
  display:none;
  flex-direction:column;
  gap:6px;
  cursor:pointer;
  z-index:1001;
}

.mobile-menu-toggle span{
  width:28px;
  height:3px;
  background:var(--text-primary);
  border-radius:2px;
  transition:all 0.3s ease;
}

.mobile-menu-toggle.active span:nth-child(1){
  transform:rotate(45deg) translate(8px, 8px);
}

.mobile-menu-toggle.active span:nth-child(2){
  opacity:0;
}

.mobile-menu-toggle.active span:nth-child(3){
  transform:rotate(-45deg) translate(8px, -8px);
}

/* RESPONSIVE */
@media(max-width:1024px){
  .case-study{
    grid-template-columns:1fr;
  }
  
  .footer-content{
    grid-template-columns:1fr 1fr;
    gap:40px;
  }
}

@media(max-width:768px){
  .nav-links{display:none}
  
  .mobile-menu-toggle{display:flex}
  
  section{padding:100px 6vw}
  
  .hero-stats{gap:40px}
  
  .services-grid{
    grid-template-columns:1fr;
  }
  
  .service-detail{
    padding:50px 32px;
  }
  
  .case-results{
    grid-template-columns:1fr;
  }
  
  .process-timeline::before{
    left:20px;
  }
  
  .step-number{
    width:60px;
    height:60px;
    font-size:1.5rem;
  }
  
  .process-step{
    gap:24px;
  }
  
  .contact-box{
    padding:50px 32px;
  }
  
  .footer-content{
    grid-template-columns:1fr;
    gap:48px;
  }
  
  .hero-cta-group{
    flex-direction:column;
    align-items:stretch;
  }
  
  .cta-primary, .cta-secondary{
    width:100%;
    text-align:center;
  }
}

@media(max-width:480px){
  .hero h1{
    font-size:2.5rem;
  }
  
  .section-title{
    font-size:2rem;
  }
  
  .service-card{
    padding:32px;
  }
  
  .philosophy-quote{
    font-size:1.5rem;
  }
}

/* SCROLL ANIMATIONS */
.fade-in{
  opacity:0;
  transform:translateY(30px);
}

.slide-in-left{
  opacity:0;
  transform:translateX(-40px);
}

.slide-in-right{
  opacity:0;
  transform:translateX(40px);
}

.scale-in{
  opacity:0;
  transform:scale(0.9);
}
</style>
</head>

<body>

<!-- Background Effects -->
<div class="bg-grid"></div>
<div class="gradient-orb orb-1"></div>
<div class="gradient-orb orb-2"></div>

<!-- Navigation -->
<nav id="nav">
  <div class="logo-container">
    <div class="logo-icon">N</div>
    <div class="logo">NECXMEDIA</div>
  </div>
  
  <ul class="nav-links">
    <li><a href="#home">Home</a></li>
    <li><a href="#services">Systems</a></li>
    <li><a href="#process">Process</a></li>
    <li><a href="#case-studies">Results</a></li>
    <li><a href="#philosophy">Philosophy</a></li>
  </ul>
  
  <a href="#contact" class="nav-cta">Start Project</a>
  
  <div class="mobile-menu-toggle" onclick="toggleMobileMenu()">
    <span></span>
    <span></span>
    <span></span>
  </div>
</nav>

<!-- Hero Section -->
<section id="home" class="hero">
  <div class="hero-content">
    <div class="hero-eyebrow fade-in">PRECISION GROWTH ENGINEERING</div>
    <h1 class="fade-in">
      Build Once.<br>
      <span class="gradient-text">Scale Forever.</span>
    </h1>
    <p class="hero-subtitle fade-in">
      We engineer intelligent client acquisition systems for founders who understand
      that sustainable growth isn't about working harder—it's about building smarter infrastructure.
    </p>
    <div class="hero-cta-group fade-in">
      <a href="#contact" class="cta-primary">Deploy Growth System</a>
      <a href="#case-studies" class="cta-secondary">View Case Studies</a>
    </div>
    
    <div class="hero-stats">
      <div class="stat fade-in">
        <div class="stat-number">$47M+</div>
        <div class="stat-label">Revenue Generated</div>
      </div>
      <div class="stat fade-in">
        <div class="stat-number">320%</div>
        <div class="stat-label">Avg ROI Increase</div>
      </div>
      <div class="stat fade-in">
        <div class="stat-number">24/7</div>
        <div class="stat-label">Automated Systems</div>
      </div>
    </div>
  </div>
</section>

<!-- Services Section -->
<section id="services">
  <div class="section-header">
    <div class="section-eyebrow fade-in">CORE SYSTEMS</div>
    <h2 class="section-title fade-in">Engineering Precision Growth</h2>
    <p class="section-description fade-in">
      We don't build marketing campaigns. We build systems—assets that compound,
      scale predictably, and generate revenue while you sleep.
    </p>
  </div>

  <div class="services-grid">
    <div class="service-card fade-in">
      <div class="service-icon">⚡</div>
      <h3>Conversion Architecture</h3>
      <p>Funnels engineered like software—eliminating friction, forcing clarity, and guiding prospects toward inevitable decisions through behavioral design.</p>
    </div>
    
    <div class="service-card fade-in">
      <div class="service-icon">🎯</div>
      <h3>Automated Monetization</h3>
      <p>Email sequences that educate, disarm objections, and close deals autonomously. Your best sales pitch, delivered 24/7 without human intervention.</p>
    </div>
    
    <div class="service-card fade-in">
      <div class="service-icon">📈</div>
      <h3>Predictable Scale</h3>
      <p>Growth systems that compound instead of breaking. Integrated funnels, messaging, and feedback loops designed to scale without operational chaos.</p>
    </div>
  </div>

  <!-- Detailed Service Sections -->
  <div class="service-detail fade-in" id="conversion">
    <div class="service-detail-content">
      <h2>Conversion Architecture</h2>
      <p>
        We design funnels the way engineers design systems—removing noise, isolating variables,
        and creating a singular path toward conversion. Every element serves a measurable purpose.
      </p>
      <p>
        Your funnel isn't a creative experiment. It's a precision instrument optimized for
        one outcome: turning attention into revenue with mathematical efficiency.
      </p>
      
      <div class="service-features">
        <div class="feature-item">
          <div class="feature-icon">✓</div>
          <div class="feature-text">Behavioral psychology integration to reduce decision friction</div>
        </div>
        <div class="feature-item">
          <div class="feature-icon">✓</div>
          <div class="feature-text">Multi-variant testing infrastructure for continuous optimization</div>
        </div>
        <div class="feature-item">
          <div class="feature-icon">✓</div>
          <div class="feature-text">Analytics dashboards that reveal conversion bottlenecks</div>
        </div>
        <div class="feature-item">
          <div class="feature-icon">✓</div>
          <div class="feature-text">Mobile-first design ensuring conversion across all devices</div>
        </div>
      </div>
    </div>
  </div>

  <div class="service-detail fade-in" id="automation">
    <div class="service-detail-content">
      <h2>Automated Monetization</h2>
      <p>
        Intelligent email sequences that don't just nurture—they convert. Every message is
        strategically crafted to move prospects through your value ladder without manual intervention.
      </p>
      <p>
        Your knowledge, packaged into sequences that educate, build trust, handle objections,
        and close deals. Scale your best sales conversations infinitely.
      </p>
      
      <div class="service-features">
        <div class="feature-item">
          <div class="feature-icon">✓</div>
          <div class="feature-text">Segmentation logic that personalizes messaging at scale</div>
        </div>
        <div class="feature-item">
          <div class="feature-icon">✓</div>
          <div class="feature-text">Objection-handling sequences triggered by user behavior</div>
        </div>
        <div class="feature-item">
          <div class="feature-icon">✓</div>
          <div class="feature-text">Revenue attribution tracking to measure sequence performance</div>
        </div>
        <div class="feature-item">
          <div class="feature-icon">✓</div>
          <div class="feature-text">Automated follow-up systems that never let leads go cold</div>
        </div>
      </div>
    </div>
  </div>

  <div class="service-detail fade-in" id="scale">
    <div class="service-detail-content">
      <h2>Predictable Scale</h2>
      <p>
        Growth that doesn't require proportional increases in team size or operational complexity.
        We build systems designed to handle 10x volume without breaking.
      </p>
      <p>
        Your growth infrastructure: funnels, messaging, analytics, and feedback loops integrated
        into a single, scalable ecosystem that grows more efficient over time.
      </p>
      
      <div class="service-features">
        <div class="feature-item">
          <div class="feature-icon">✓</div>
          <div class="feature-text">Integrated tech stack eliminating data silos</div>
        </div>
        <div class="feature-item">
          <div class="feature-icon">✓</div>
          <div class="feature-text">Performance dashboards tracking real-time system health</div>
        </div>
        <div class="feature-item">
          <div class="feature-icon">✓</div>
          <div class="feature-text">Optimization protocols that compound improvement</div>
        </div>
        <div class="feature-item">
          <div class="feature-icon">✓</div>
          <div class="feature-text">Documentation ensuring systems survive team changes</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Process Section -->
<section id="process">
  <div class="section-header">
    <div class="section-eyebrow fade-in">OUR METHODOLOGY</div>
    <h2 class="section-title fade-in">Engineered Process</h2>
    <p class="section-description fade-in">
      Systems engineering applied to marketing. Every engagement follows a proven
      methodology that transforms complexity into clarity.
    </p>
  </div>

  <div class="process-timeline">
    <div class="process-step fade-in">
      <div class="step-number">1</div>
      <div class="step-content">
        <h3>Systems Audit</h3>
        <p>
          We map your current infrastructure—identifying bottlenecks, conversion leaks,
          and optimization opportunities. This reveals where you're losing revenue.
        </p>
      </div>
    </div>

    <div class="process-step fade-in">
      <div class="step-number">2</div>
      <div class="step-content">
        <h3>Architecture Design</h3>
        <p>
          We engineer your growth system—designing funnels, sequences, and messaging
          frameworks optimized for your specific market and offer structure.
        </p>
      </div>
    </div>

    <div class="process-step fade-in">
      <div class="step-number">3</div>
      <div class="step-content">
        <h3>System Implementation</h3>
        <p>
          We build and integrate everything—technical infrastructure, conversion assets,
          automation sequences, and analytics dashboards. Your system goes live.
        </p>
      </div>
    </div>

    <div class="process-step fade-in">
      <div class="step-number">4</div>
      <div class="step-content">
        <h3>Optimization Loop</h3>
        <p>
          We monitor, test, and refine continuously—using data to compound system
          performance. Your conversion rates improve month over month.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Case Studies Section -->
<section id="case-studies">
  <div class="case-studies">
    <div class="section-header">
      <div class="section-eyebrow fade-in">PROVEN RESULTS</div>
      <h2 class="section-title fade-in">Systems in Action</h2>
      <p class="section-description fade-in">
        Real businesses. Real systems. Real revenue growth.
      </p>
    </div>

    <div class="case-study-grid">
      <div class="case-study fade-in">
        <div class="case-study-content">
          <h3>SaaS Platform: 0 to $2.4M ARR</h3>
          <div class="case-study-meta">
            <span class="meta-tag">B2B SaaS</span>
            <span class="meta-tag">18 Months</span>
          </div>
          <p>
            Engineered complete funnel architecture from cold traffic to enterprise deals.
            Automated demo booking sequences increased qualified pipeline by 340% while
            reducing CAC by 60%.
          </p>
          <div class="case-results">
            <div class="result-metric">
              <div class="result-number">$2.4M</div>
              <div class="result-label">ARR Reached</div>
            </div>
            <div class="result-metric">
              <div class="result-number">340%</div>
              <div class="result-label">Pipeline Growth</div>
            </div>
            <div class="result-metric">
              <div class="result-number">60%</div>
              <div class="result-label">CAC Reduction</div>
            </div>
          </div>
        </div>
        <div class="case-study-visual">📊</div>
      </div>

      <div class="case-study fade-in">
        <div class="case-study-content">
          <h3>Consulting Firm: 5X Revenue in 12 Months</h3>
          <div class="case-study-meta">
            <span class="meta-tag">Professional Services</span>
            <span class="meta-tag">12 Months</span>
          </div>
          <p>
            Built automated lead qualification and nurture system. Founder went from
            manually chasing leads to having inbound prospects pre-sold through intelligent
            email sequences. Revenue multiplied 5X.
          </p>
          <div class="case-results">
            <div class="result-metric">
              <div class="result-number">5X</div>
              <div class="result-label">Revenue Growth</div>
            </div>
            <div class="result-metric">
              <div class="result-number">78%</div>
              <div class="result-label">Close Rate</div>
            </div>
            <div class="result-metric">
              <div class="result-number">15hrs</div>
              <div class="result-label">Weekly Time Saved</div>
            </div>
          </div>
        </div>
        <div class="case-study-visual">🎯</div>
      </div>

      <div class="case-study fade-in">
        <div class="case-study-content">
          <h3>E-Learning Platform: $850K Launch</h3>
          <div class="case-study-meta">
            <span class="meta-tag">Education Tech</span>
            <span class="meta-tag">Product Launch</span>
          </div>
          <p>
            Designed entire pre-launch system: waitlist funnel, anticipation sequences,
            and launch automation. Generated $850K in first 30 days with 42% conversion
            rate from email list to paying customers.
          </p>
          <div class="case-results">
            <div class="result-metric">
              <div class="result-number">$850K</div>
              <div class="result-label">Launch Revenue</div>
            </div>
            <div class="result-metric">
              <div class="result-number">42%</div>
              <div class="result-label">Conversion Rate</div>
            </div>
            <div class="result-metric">
              <div class="result-number">12.4K</div>
              <div class="result-label">Customers</div>
            </div>
          </div>
        </div>
        <div class="case-study-visual">🚀</div>
      </div>
    </div>
  </div>
</section>

<!-- Philosophy Section -->
<section id="philosophy">
  <div class="section-header">
    <div class="section-eyebrow fade-in">CORE BELIEFS</div>
    <h2 class="section-title fade-in">Our Philosophy</h2>
  </div>

  <div class="philosophy-content">
    <div class="philosophy-quote fade-in">
      Attention is expensive. Systems are permanent. We build assets that compound
      long after the work is done.
    </div>

    <div class="philosophy-principles">
      <div class="principle fade-in">
        <div class="principle-number">01</div>
        <h3>Leverage Over Labor</h3>
        <p>
          Growth shouldn't require heroic effort. Build systems that work while you sleep,
          scale without proportional resource increases, and compound over time.
        </p>
      </div>

      <div class="principle fade-in">
        <div class="principle-number">02</div>
        <h3>Clarity Beats Creativity</h3>
        <p>
          Confusion kills conversions. The best funnels aren't clever—they're clear.
          We eliminate ambiguity and guide prospects toward obvious next steps.
        </p>
      </div>

      <div class="principle fade-in">
        <div class="principle-number">03</div>
        <h3>Data Drives Decisions</h3>
        <p>
          Opinions are worthless. Metrics matter. We build measurement into everything,
          test hypotheses systematically, and optimize based on evidence.
        </p>
      </div>

      <div class="principle fade-in">
        <div class="principle-number">04</div>
        <h3>Systems Compound</h3>
        <p>
          The best marketing assets appreciate over time. Well-built systems get more
          efficient as they scale, creating unfair competitive advantages.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Testimonials Section -->
<section id="testimonials">
  <div class="section-header">
    <div class="section-eyebrow fade-in">CLIENT FEEDBACK</div>
    <h2 class="section-title fade-in">What Founders Say</h2>
  </div>

  <div class="testimonials-grid">
    <div class="testimonial fade-in">
      <p class="testimonial-text">
        "NECXMEDIA didn't just build us a funnel—they engineered our entire growth infrastructure.
        We went from manual lead chasing to automated client acquisition. Game changer."
      </p>
      <div class="testimonial-author">
        <div class="author-avatar">MK</div>
        <div class="author-info">
          <h4>Michael Kerr</h4>
          <p>Founder, TechVantage AI</p>
        </div>
      </div>
    </div>

    <div class="testimonial fade-in">
      <p class="testimonial-text">
        "Finally, a marketing agency that thinks like engineers. They built systems that actually
        scale. Our conversion rates doubled in 90 days, and we haven't touched the setup since."
      </p>
      <div class="testimonial-author">
        <div class="author-avatar">SL</div>
        <div class="author-info">
          <h4>Sarah Lindstrom</h4>
          <p>CEO, Catalyst Advisory</p>
        </div>
      </div>
    </div>

    <div class="testimonial fade-in">
      <p class="testimonial-text">
        "The ROI is absurd. We spent $45K on their system and generated $680K in the first year.
        Best investment we've made in the business. Period."
      </p>
      <div class="testimonial-author">
        <div class="author-avatar">DT</div>
        <div class="author-info">
          <h4>David Torres</h4>
          <p>Co-Founder, Momentum Labs</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- FAQ Section -->
<section id="faq">
  <div class="section-header">
    <div class="section-eyebrow fade-in">FREQUENTLY ASKED</div>
    <h2 class="section-title fade-in">Common Questions</h2>
  </div>

  <div class="faq-container">
    <div class="faq-item fade-in">
      <div class="faq-question" onclick="toggleFaq(this)">
        <span>What makes your approach different from typical marketing agencies?</span>
        <span class="faq-icon">+</span>
      </div>
      <div class="faq-answer">
        <div class="faq-answer-content">
          We don't run campaigns—we build systems. Agencies deliver temporary results that
          disappear when you stop paying them. We engineer permanent infrastructure that
          compounds over time. You own the asset. It works 24/7. It scales without chaos.
        </div>
      </div>
    </div>

    <div class="faq-item fade-in">
      <div class="faq-question" onclick="toggleFaq(this)">
        <span>How long does implementation take?</span>
        <span class="faq-icon">+</span>
      </div>
      <div class="faq-answer">
        <div class="faq-answer-content">
          System complexity determines timeline. Simple funnel builds: 4-6 weeks. Complete
          growth infrastructure: 8-12 weeks. We move fast but refuse to compromise quality.
          Better to take an extra week and get it right than rush and rebuild later.
        </div>
      </div>
    </div>

    <div class="faq-item fade-in">
      <div class="faq-question" onclick="toggleFaq(this)">
        <span>What's the investment range?</span>
        <span class="faq-icon">+</span>
      </div>
      <div class="faq-answer">
        <div class="faq-answer-content">
          Projects typically range from $25K to $150K depending on scope and complexity.
          We structure engagements based on the value we'll create, not arbitrary hourly rates.
          Every project includes implementation, optimization, and knowledge transfer.
        </div>
      </div>
    </div>

    <div class="faq-item fade-in">
      <div class="faq-question" onclick="toggleFaq(this)">
        <span>Do you work with startups or only established companies?</span>
        <span class="faq-icon">+</span>
      </div>
      <div class="faq-answer">
        <div class="faq-answer-content">
          We work with founders at various stages, but there's a prerequisite: product-market
          fit must be validated. If you're still figuring out your offer, we're not the right
          partner yet. Once you know what sells, we scale it systematically.
        </div>
      </div>
    </div>

    <div class="faq-item fade-in">
      <div class="faq-question" onclick="toggleFaq(this)">
        <span>What results can we expect?</span>
        <span class="faq-icon">+</span>
      </div>
      <div class="faq-answer">
        <div class="faq-answer-content">
          Typical clients see 200-400% increases in conversion rates and 3-10X ROI within
          the first year. Exact results depend on your market, offer strength, and traffic
          quality. We optimize for sustainable compound growth, not vanity metrics.
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Contact Section -->
<section id="contact">
  <div class="contact-container">
    <div class="section-header">
      <div class="section-eyebrow fade-in">LET'S BUILD</div>
      <h2 class="section-title fade-in">Initiate Conversation</h2>
    </div>

    <div class="contact-box fade-in">
      <div class="contact-box-content">
        <h3>Ready to Build Real Infrastructure?</h3>
        <p>
          If you're building something serious and ready to engineer sustainable growth,
          this is where it starts. No generic proposals. No time wasters.
        </p>
        <a href="mailto:suhail@necxmedia.com" class="contact-email">
          suhail@necxmedia.com
        </a>
        
        <div class="contact-methods">
          <div class="contact-method">📅 Book Strategy Call</div>
          <div class="contact-method">💬 Direct Message</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Footer -->
<footer>
  <div class="footer-content">
    <div class="footer-brand">
      <div class="footer-logo">NECXMEDIA</div>
      <p class="footer-tagline">
        Engineering intelligent client acquisition systems for founders who want leverage, not hustle.
      </p>
      <div class="social-links">
        <a href="#" class="social-link">𝕏</a>
        <a href="#" class="social-link">in</a>
        <a href="#" class="social-link">▶</a>
      </div>
    </div>

    <div class="footer-column">
      <h4>Systems</h4>
      <ul class="footer-links">
        <li><a href="#conversion">Conversion Architecture</a></li>
        <li><a href="#automation">Automated Monetization</a></li>
        <li><a href="#scale">Predictable Scale</a></li>
      </ul>
    </div>

    <div class="footer-column">
      <h4>Company</h4>
      <ul class="footer-links">
        <li><a href="#philosophy">Philosophy</a></li>
        <li><a href="#case-studies">Case Studies</a></li>
        <li><a href="#process">Process</a></li>
        <li><a href="#faq">FAQ</a></li>
      </ul>
    </div>

    <div class="footer-column">
      <h4>Resources</h4>
      <ul class="footer-links">
        <li><a href="#">Systems Audit</a></li>
        <li><a href="#">Growth Framework</a></li>
        <li><a href="#">ROI Calculator</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
  </div>

  <div class="footer-bottom">
    © 2026 NECXMEDIA. All systems engineered for scale. Built to compound.
  </div>
</footer>

<script>
// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Nav Scroll Effect
window.addEventListener('scroll', () => {
  const nav = document.getElementById('nav');
  if(window.scrollY > 50){
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// Hero Animations
gsap.from('.hero .fade-in', {
  y: 60,
  opacity: 0,
  duration: 1,
  stagger: 0.15,
  ease: 'power3.out'
});

gsap.from('.hero-stats .stat', {
  y: 40,
  opacity: 0,
  duration: 0.8,
  stagger: 0.1,
  delay: 0.8,
  ease: 'power3.out'
});

// Scroll-triggered animations for all fade-in elements
gsap.utils.toArray('.fade-in').forEach((element, index) => {
  // Skip hero elements (already animated)
  if(element.closest('.hero')) return;
  
  gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      start: 'top 85%',
      toggleActions: 'play none none none'
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
  });
});

// Service Cards Hover Animation
document.querySelectorAll('.service-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    gsap.to(card, {
      scale: 1.02,
      duration: 0.3,
      ease: 'power2.out'
    });
  });
  
  card.addEventListener('mouseleave', () => {
    gsap.to(card, {
      scale: 1,
      duration: 0.3,
      ease: 'power2.out'
    });
  });
});

// Parallax Effect for Gradient Orbs
gsap.to('.orb-1', {
  scrollTrigger: {
    trigger: 'body',
    start: 'top top',
    end: 'bottom bottom',
    scrub: 1
  },
  y: 300,
  rotation: 180
});

gsap.to('.orb-2', {
  scrollTrigger: {
    trigger: 'body',
    start: 'top top',
    end: 'bottom bottom',
    scrub: 1
  },
  y: -200,
  rotation: -180
});

// FAQ Toggle
function toggleFaq(element) {
  const faqItem = element.parentElement;
  const allFaqItems = document.querySelectorAll('.faq-item');
  
  // Close all other FAQs
  allFaqItems.forEach(item => {
    if(item !== faqItem && item.classList.contains('active')) {
      item.classList.remove('active');
    }
  });
  
  // Toggle current FAQ
  faqItem.classList.toggle('active');
}

// Mobile Menu Toggle
function toggleMobileMenu() {
  const toggle = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  toggle.classList.toggle('active');
  
  if(navLinks.style.display === 'flex') {
    navLinks.style.display = 'none';
  } else {
    navLinks.style.display = 'flex';
    navLinks.style.flexDirection = 'column';
    navLinks.style.position = 'absolute';
    navLinks.style.top = '80px';
    navLinks.style.left = '0';
    navLinks.style.right = '0';
    navLinks.style.background = 'rgba(10,10,10,0.98)';
    navLinks.style.padding = '40px';
    navLinks.style.borderBottom = '1px solid var(--border-subtle)';
  }
}

// Smooth Scroll with Offset
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target) {
      const offset = 80;
      const targetPosition = target.offsetTop - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Counter Animation for Stats
const observerOptions = {
  threshold: 0.5,
  rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      const stat = entry.target;
      const finalValue = stat.textContent;
      
      // Only animate numbers
      if(/\d/.test(finalValue)) {
        animateValue(stat, finalValue);
      }
      
      observer.unobserve(stat);
    }
  });
}, observerOptions);

document.querySelectorAll('.stat-number, .result-number').forEach(stat => {
  observer.observe(stat);
});

function animateValue(element, finalValue) {
  const duration = 2000;
  const hasPlus = finalValue.includes('+');
  const hasDollar = finalValue.includes('$');
  const hasPercent = finalValue.includes('%');
  const hasX = finalValue.includes('X');
  const hasHrs = finalValue.includes('hrs');
  const hasK = finalValue.includes('K');
  const hasM = finalValue.includes('M');
  
  let numValue = parseFloat(finalValue.replace(/[^0-9.]/g, ''));
  
  const startTime = performance.now();
  
  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    const easeOutQuart = 1 - Math.pow(1 - progress, 4);
    const currentValue = numValue * easeOutQuart;
    
    let displayValue = currentValue.toFixed(1);
    
    if(hasDollar) displayValue = '$' + displayValue;
    if(hasM) displayValue = displayValue + 'M';
    if(hasK) displayValue = displayValue + 'K';
    if(hasX) displayValue = displayValue + 'X';
    if(hasPercent) displayValue = displayValue + '%';
    if(hasHrs) displayValue = displayValue + 'hrs';
    if(hasPlus) displayValue = displayValue + '+';
    
    element.textContent = displayValue;
    
    if(progress < 1) {
      requestAnimationFrame(update);
    } else {
      element.textContent = finalValue;
    }
  }
  
  requestAnimationFrame(update);
}

// Add cursor glow effect
document.addEventListener('mousemove', (e) => {
  const glow = document.createElement('div');
  glow.style.cssText = `
    position: fixed;
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(0,255,136,0.03), transparent 70%);
    pointer-events: none;
    left: ${e.clientX - 150}px;
    top: ${e.clientY - 150}px;
    z-index: 9999;
    transition: opacity 0.3s ease;
  `;
  
  document.body.appendChild(glow);
  
  setTimeout(() => {
    glow.style.opacity = '0';
    setTimeout(() => glow.remove(), 300);
  }, 100);
});
</script>

</body>
</html>
