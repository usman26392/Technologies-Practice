<!-- Vendors CSS -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
/>

<link rel="icon" type="image/ico" href="/assets/favicon.ico" />
<meta name="format-detection" content="telephone=no" />
<!-- Custom CSS -->
<link href="/assets/css/custom.min.css" rel="stylesheet" type="text/css" />

<style>
      body {
        font-family: "Poppins", sans-serif;
        font-weight: 400;
        background-color: white;
        color: black;
        line-height: 1.5;
        margin: 0;
        padding: 0;
      }

      .loader-first {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100vh;
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        background: #fff; /* Use solid color as placeholder */
        transition: var(--transition-ease);
        backdrop-filter: blur(8px);
      }

      .loader-first .logo {
        display: flex;
        align-items: center;
        gap: 1em;
      }

      .loader-first .nav-logo-text {
        font-size: 2em;
        font-weight: 900;
      }

      .loader-closed {
        transform: translateY(-100%);
      }

      .alert-warnning {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 999999;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        font-size: 20px;
        text-transform: uppercase;
        text-align: center;
        line-height: 1.5em;
        font-weight: 700;
        color: #fff;
        background: #000;
        overflow: hidden;
      }

      .alert-warnning p {
        position: absolute;
        left: 50%;
        top: 50%;
        font-size: 18px;
        transform: translate(-50%, -50%);
        color: #fff;
      }
    </style>
