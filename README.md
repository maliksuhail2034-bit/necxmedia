<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>NECXMEDIA — Client Acquisition Systems</title>

  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap" rel="stylesheet">

  <style>
    :root {
      --black: #0a0a0a;
      --white: #ffffff;
      --gray: #f3f3f3;
      --accent: #5effa1;
      --muted: #9ca3af;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: "Inter", sans-serif;
    }

    body {
      background: var(--white);
      color: var(--black);
      overflow-x: hidden;
    }

    section {
      width: 100vw;
      padding: 120px 6vw;
    }

    /* NAV */
    nav {
      position: fixed;
      top: 0;
      width: 100%;
      padding: 24px 6vw;
      background: rgba(0,0,0,0.7);
      backdrop-filter: blur(10px);
      display: flex;
      justify-content: space-between;
      align-items: center;
      z-index: 100;
    }

    nav .logo {
      font-weight: 800;
      letter-spacing: 1px;
      color: var(--white);
    }

    nav a {
      color: var(--black);
      background: var(--accent);
      padding: 10px 20px;
      border-radius: 999px;
      font-weight: 600;
      text-decoration: none;
    }

    /* HERO */
    .hero {
      background: radial-gradient(circle at top, #111 0%, #000 70%);
      color: var(--white);
      min-height: 100vh;
      display: flex;
      align-items: center;
      position: relative;
    }

    .hero-content {
      max-width: 900px;
      z-index: 2;
    }

    .hero h1 {
      font-size: clamp(2.5rem, 5vw, 4rem);
      font-weight: 800;
      line-height: 1.1;
      margin-bottom: 24px;
    }

    .hero p {
      font-size: 1.2rem;
      color: var(--muted);
      max-width: 700px;
      margin-bottom: 40px;
    }

    .hero .cta {
      display: inline-block;
      background: var(--accent);
      color: var(--black);
      padding: 16px 36px;
      border-radius: 999px;
      font-weight: 700;
      font-size: 1.1rem;
      text-decoration: none;
      transition: transform 0.3s ease;
    }

    .hero .cta:hover {
      transform: translateY(-3px);
    }

    /* HERO ILLUSTRATION */
    .hero-illustration {
      position: absolute;
      right: -10%;
      top: 50%;
      transform: translateY(-50%);
      opacity: 0.15;
      width: 700px;
    }

    /* TRUST */
    .trust {
      background: var(--gray);
      text-align: center;
      padding: 60px 6vw;
      font-weight: 600;
      letter-spacing: 0.5px;
    }

    /* OFFER */
    .offer h2 {
      font-size: clamp(2rem, 4vw, 3rem);
      font-weight: 800;
      margin-bottom: 60px;
      text-align: center;
    }

    .offer-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 40px;
    }

    .card {
      background: var(--white);
      border-radius: 24px;
      padding: 40px;
      box-shadow: 0 30px 60px rgba(0,0,0,0.08);
      transition: transform 0.4s ease;
    }

    .card:hover {
      transform: translateY(-10px);
    }

    .card h3 {
      font-size: 1.4rem;
      margin-bottom: 12px;
    }

    .card p {
      color: #555;
      line-height: 1.6;
    }

    /* ABOUT */
    .about {
      background: linear-gradient(180deg, #fff, #f7f7f7);
      text-align: center;
    }

    .about h2 {
      font-size: 3rem;
      margin-bottom: 24px;
    }

    .about p {
      max-width: 900px;
      margin: auto;
      font-size: 1.2rem;
      color: #444;
    }

    /* CTA */
    .final-cta {
      background: var(--black);
      color: var(--white);
      text-align: center;
    }

    .final-cta h2 {
      font-size: 3rem;
      margin-bottom: 20px;
    }

    .final-cta a {
      display: inline-block;
      margin-top: 24px;
      background: var(--accent);
      color: var(--black);
      padding: 16px 40px;
      border-radius: 999px;
      font-weight: 700;
      text-decoration: none;
    }

    footer {
      background: #000;
      color: #777;
      text-align: center;
      padding: 40px 0;
      font-size: 0.9rem;
    }

    /* ANIMATIONS */
    .fade-up {
      opacity: 0;
      transform: translateY(40px);
      transition: all 0.8s ease;
    }

    .fade-up.show {
      opacity: 1;
      transform: translateY(0);
    }
  </style>
</head>

<body>

<nav>
  <div class="logo">NECXMEDIA</div>
  <a href="#contact">Get Started</a>
</nav>

<section class="hero">
  <div class="hero-content fade-up">
    <h1>Stop Losing Leads.<br>Build a System That Closes Clients.</h1>
    <p>
      We build conversion-focused funnels and automated email systems that
      capture, nurture, and convert leads into paying clients — without chasing.
    </p>
    <a href="#contact" class="cta">Book a Strategy Call</a>
  </div>

  <!-- Futuristic SVG Illustration -->
  <svg class="hero-illustration" viewBox="0 0 600 600">
    <circle cx="300" cy="300" r="280" stroke="#5effa1" stroke-width="2" fill="none"/>
    <circle cx="300" cy="300" r="200" stroke="#5effa1" stroke-width="1" fill="none"/>
    <circle cx="300" cy="300" r="120" stroke="#5effa1" stroke-width="1" fill="none"/>
  </svg>
</section>

<section class="trust">
  Used by founders who want predictable growth — not guesswork.
</section>

<section class="offer">
  <h2 class="fade-up">Your Client Acquisition Engine</h2>
  <div class="offer-grid">
    <div class="card fade-up">
      <h3>High-Converting Funnels</h3>
      <p>Landing pages engineered to turn traffic into booked calls.</p>
    </div>
    <div class="card fade-up">
      <h3>Email Follow-Ups</h3>
      <p>Automated sequences that build trust and close deals on autopilot.</p>
    </div>
    <div class="card fade-up">
      <h3>Systemized Growth</h3>
      <p>No cold chasing. No manual work. Just predictable acquisition.</p>
    </div>
  </div>
</section>

<section class="about">
  <h2 class="fade-up">What We Do</h2>
  <p class="fade-up">
    We build client acquisition systems that turn traffic into booked calls using
    high-conversion landing pages and email follow-ups. We help businesses capture
    leads, nurture them, and convert them into paying clients without chasing or
    manual work.
  </p>
</section>

<section id="contact" class="final-cta">
  <h2 class="fade-up">Ready to Scale Without Chaos?</h2>
  <p class="fade-up">Reach out directly:</p>
  <a href="mailto:suhail@necxmedia.com">suhail@necxmedia.com</a>
</section>

<footer>
  © 2026 NECXMEDIA. All rights reserved.
</footer>

<script>
  const elements = document.querySelectorAll(".fade-up");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.2 });

  elements.forEach(el => observer.observe(el));
</script>

</body>
</html>
