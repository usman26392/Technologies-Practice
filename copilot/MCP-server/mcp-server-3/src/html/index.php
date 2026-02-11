<!DOCTYPE html>
<html lang="en" class="homepage">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=2"
    />
    <meta name="description" content="Al Sadeem" />
    <title>Home | Fashion</title>
    <!-- Vendors CSS -->
    <link rel="icon" type="image/ico" href="/assets/favicon.ico" />
    <meta name="format-detection" content="telephone=no" />

    <!-- Google Fonts: Poppins -->
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700;900&display=swap"
      rel="stylesheet"
    />

    <!-- Inline critical CSS for above-the-fold and loader -->
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

    <!-- if Lazy load loader background image -->
    <!-- <script>
      window.addEventListener("DOMContentLoaded", function () {
        var loader = document.querySelector(".loader-first");
        if (loader) {
          var img = new window.Image();
          img.src = "/assets/images/footer/globe.png";
          img.onload = function () {
            loader.style.backgroundImage =
              'url("/assets/images/footer/globe.png")';
            loader.style.backgroundPosition = "center";
            loader.style.backgroundSize = "cover";
            loader.style.backgroundRepeat = "no-repeat";
          };
        }
      });
    </script> -->

    <!-- Preload and async load vendor CSS FIRST -->
    <link
      rel="preload"
      href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
      as="style"
      onload="this.onload=null;this.rel='stylesheet'"
    />
    <link
      rel="preload"
      href="https://cdn.jsdelivr.net/npm/atropos@2/atropos.min.css"
      as="style"
      onload="this.onload=null;this.rel='stylesheet'"
    />
    <noscript>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/atropos@2/atropos.min.css"
      />
    </noscript>
    <!-- Preload and async load main CSS AFTER vendors -->
    <link
      rel="preload"
      href="/assets/css/home.min.css"
      as="style"
      onload="this.onload=null;this.rel='stylesheet'"
    />
    <noscript>
      <link rel="stylesheet" href="/assets/css/home.min.css" />
    </noscript>
    <script>
      /*! CSS rel=preload polyfill for older browsers */
      (function () {
        if (
          !("relList" in document.createElement("link")) ||
          !document.createElement("link").relList.supports("preload")
        ) {
          var links = document.querySelectorAll(
            'link[rel="preload"][as="style"]'
          );
          for (var i = 0; i < links.length; i++) {
            var l = links[i];
            l.rel = "stylesheet";
          }
        }
      })();
    </script>

    <noscript>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/atropos@2/atropos.min.css"
      />
    </noscript>
  </head>

  <body class="home">
    <!-- Loader -->
    <?php include 'includes/loader.php';?>
    <!-- Header -->
    <?php include 'includes/header.php';?>

    <main>
      <?php include 'includes/home-sections/hero-banner.php';?>
      <?php include __DIR__ . '/includes/home-sections/brands.php';?>
      <?php include __DIR__ . '/includes/home-sections/new-arrivals.php';?>
      <?php include __DIR__ . '/includes/home-sections/favourites.php'; ?>
      <?php include __DIR__ . '/includes/home-sections/app-download.php'; ?>
      <?php include __DIR__ . '/includes/home-sections/community.php'; ?>
    </main>

    <!-- Footer -->
    <?php include 'includes/footer.php'; ?>
    <script
      src="https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.min.js"
      defer
    ></script>

    <!-- Swiper -->
    <script
      src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"
      defer
    ></script>
    <script
      src="https://cdn.jsdelivr.net/npm/atropos@2/atropos.min.js"
      defer
    ></script>

    <!-- home JS Files -->
    <script src="/assets/js/home.min.js" defer></script>

    <!-- <script>
      // Add loading="lazy" to all images after DOMContentLoaded
      document.addEventListener("DOMContentLoaded", function () {
        var imgs = document.querySelectorAll("img:not([loading])");
        imgs.forEach(function (img) {
          img.setAttribute("loading", "lazy");
        });
      });
    </script> -->
  </body>
</html>
