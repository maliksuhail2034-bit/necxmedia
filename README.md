<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>NECXMEDIA — Client Acquisition Funnels</title>

  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: "Inter", Arial, sans-serif;
    }

    body {
      line-height: 1.6;
      color: #111;
      background: #fff;
    }

    a {
      text-decoration: none;
      color: inherit;
    }

    section {
      width: 100%;
      padding: 60px 20px;
    }

    .container {
      max-width: 1100px;
      margin: auto;
    }

    /* NAV */
    nav {
      position: sticky;
      top: 0;
      width: 100%;
      background: #000;
      color: #fff;
      padding: 18px 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    nav .logo {
      font-size: 22px;
      font-weight: 700;
      letter-spacing: 1px;
    }
    nav .cta-btn {
      background: #fff;
      color: #000;
      padding: 10px 18px;
      font-weight: 600;
      border-radius: 4px;
    }

    /* HERO */
    .hero {
      background: #000;
      color: #fff;
      text-align: center;
      padding-top: 120px;
      padding-bottom: 120px;
    }
    .hero h1 {
      font-size: 42px;
      font-weight: 800;
      margin-bottom: 16px;
      line-height: 1.2;
    }
    .hero p {
      font-size: 20px;
      color: #ccc;
      margin-bottom: 24px;
    }
    .hero .btn-primary {
      background: #ff5a5f;
      color: #fff;
      padding: 14px 26px;
      font-size: 18px;
      font-weight: 600;
      border-radius: 6px;
      display: inline-block;
      margin-top: 12px;
    }

    /* SOCIAL PROOF */
    .proof {
      background: #f9f9f9;
      text-align: center;
      padding: 40px 20px;
    }
    .proof p {
      font-size: 18px;
      margin-bottom: 12px;
      color: #555;
    }

    /* BENEFITS */
    .benefits {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 24px;
      margin-top: 40px;
    }
    .benefit-box {
      background: #fff;
      border: 1px solid #ddd;
      padding: 24px;
      border-radius: 8px;
    }
    .benefit-box h4 {
      font-size: 20px;
      font-weight: 700;
      margin-bottom: 10px;
    }
    .benefit-box p {
      font-size: 16px;
      color: #444;
    }

    /* ABOUT */
    .about h3 {
      font-size: 32px;
      font-weight: 700;
      text-align: center;
      margin-bottom: 18px;
    }
    .about p {
      font-size: 18px;
      line-height: 1.5;
      color: #333;
      text-align: center;
      margin: auto;
      max-width: 850px;
    }

    /* CONTACT */
    .contact {
      text-align: center;
      background: #f2f2f2;
    }
    .contact h3 {
      font-size: 28px;
      margin-bottom: 10px;
    }
    .contact p {
      font-size: 18px;
    }
    .contact a {
      font-weight: 600;
      color: #000;
      border-bottom: 2px solid #000;
    }

    /* RESPONSIVE PADDING */
    @media (max-width: 768px) {
      .hero h1 {
        font-size: 32px;
      }
      .hero p {
        font-size: 18px;
      }
    }
  </style>
</head>

<body>

  <!-- NAVBAR -->
  <nav>
    <div class="logo">NECXMEDIA</div>
    <a href="#contact" class="cta-btn">Get Started</a>
  </nav>

  <!-- HERO -->
  <section class="hero">
    <div class="container">
      <h1>Stop Losing Leads. Start Converting High-Paying Clients.</h1>
      <p>We build conversion-focused funnels and automated email systems that capture, nurture, and close leads — repeatedly & reliably.</p>
      <a href="#contact" class="btn-primary">Book Your Strategy Call</a>
    </div>
  </section>

  <!-- SOCIAL PROOF -->
  <section class="proof">
    <div class="container">
      <p>Trusted by founders & coaches who scaled to 5-6 figures without cold outreach.</p>
      <!-- You can replace the text above with real logos later -->
    </div>
  </section>

  <!-- BENEFITS -->
  <section>
    <div class="container">
      <h3 style="text-align:center; font-size:28px; margin-bottom:24px;">Your Business. Our Precision Engine.</h3>
      <div class="benefits">
        <div class="benefit-box">
          <h4>High-Converting Funnels</h4>
          <p>Landing pages designed specifically to turn clicks into booked calls.</p>
        </div>
        <div class="benefit-box">
          <h4>Automated Email Systems</h4>
          <p>Email sequences that nurture leads 24/7 and reduce churn.</p>
        </div>
        <div class="benefit-box">
          <h4>Booked Calls, Not Cold Outreach</h4>
          <p>No more chasing — we deliver leads that schedule themselves.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ABOUT -->
  <section class="about">
    <div class="container">
      <h3>What We Do</h3>
      <p>We build client acquisition systems that turn traffic into booked calls using high-conversion landing pages and email follow-ups. We help businesses capture leads, nurture them, and convert them into paying clients without chasing or manual work.</p>
    </div>
  </section>

  <!-- CONTACT -->
  <section id="contact" class="contact">
    <div class="container">
      <h3>Ready To Scale?</h3>
      <p>Email us at <a href="mailto:suhail@necxmedia.com">suhail@necxmedia.com</a></p>
    </div>
  </section>

</body>
</html>
