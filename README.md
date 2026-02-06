# index.html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>NECXMEDIA – Client Acquisition Systems</title>

  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: Arial, Helvetica, sans-serif;
    }

    body {
      line-height: 1.6;
    }

    /* NAVBAR */
    nav {
      background: #000;
      color: #fff;
      padding: 16px 32px;
      position: sticky;
      top: 0;
      z-index: 10;
    }

    nav h1 {
      font-size: 20px;
      letter-spacing: 1px;
    }

    /* HERO SECTION */
    .hero {
      background: #000;
      color: #fff;
      min-height: 90vh;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 60px 20px;
    }

    .hero-content {
      max-width: 800px;
    }

    .hero h2 {
      font-size: 42px;
      margin-bottom: 20px;
      font-weight: 700;
    }

    .hero p {
      font-size: 18px;
      color: #ccc;
    }

    /* ABOUT SECTION */
    .about {
      background: #f2f2f2;
      color: #000;
      padding: 80px 20px;
    }

    .about-container {
      max-width: 900px;
      margin: auto;
      text-align: center;
    }

    .about h3 {
      font-size: 32px;
      margin-bottom: 24px;
    }

    .about p {
      font-size: 18px;
      margin-bottom: 16px;
      color: #333;
    }

    /* CONTACT SECTION */
    .contact {
      background: #e6e6e6;
      padding: 60px 20px;
      text-align: center;
    }

    .contact h3 {
      font-size: 28px;
      margin-bottom: 16px;
    }

    .contact p {
      font-size: 18px;
    }

    .contact a {
      color: #000;
      font-weight: bold;
      text-decoration: none;
      border-bottom: 2px solid #000;
      padding-bottom: 4px;
    }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .hero h2 {
        font-size: 32px;
      }

      .about h3 {
        font-size: 26px;
      }
    }
  </style>
</head>

<body>

  <!-- NAVBAR -->
  <nav>
    <h1>NECXMEDIA</h1>
  </nav>

  <!-- HERO -->
  <section class="hero">
    <div class="hero-content">
      <h2>Stop losing leads. Start converting them into paying clients.</h2>
      <p>
        We build conversion-focused funnels and email systems that capture,
        nurture, and close leads.
      </p>
    </div>
  </section>

  <!-- ABOUT -->
  <section class="about">
    <div class="about-container">
      <h3>What We Do</h3>
      <p>
        We build client acquisition systems that turn traffic into booked calls
        using high-conversion landing pages and email follow-ups.
      </p>
      <p>
        We help businesses capture leads, nurture them, and convert them into
        paying clients without chasing or manual work.
      </p>
    </div>
  </section>

  <!-- CONTACT -->
  <section class="contact">
    <h3>Reach Us</h3>
    <p>
      Email us at:
      <a href="mailto:suhail@necxmedia.com">suhail@necxmedia.com</a>
    </p>
  </section>

</body>
</html>

