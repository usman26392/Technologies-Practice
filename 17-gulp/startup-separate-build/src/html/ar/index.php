<!DOCTYPE html>
<html lang="en" class="homepage">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
        <title>Home | Dubai Rapid Properties </title>
        <!-- Vendors CSS -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css" />
        <link rel="icon" type="image/ico" href="assets/favicon.ico">
        <meta name="format-detection" content="telephone=no">
        <!-- home CSS -->
        <link rel="stylesheet" href="assets/css/home-rtl.min.css">
    </head>

    <body class="home">

        <!-- Loader -->
        <?php include 'includes/loader.php'; ?>
        <!-- Header -->
        <?php include 'includes/header.php'; ?>

        <main>
            <!-- Home Hero -->
            <section class="home-hero section">
                <div class="swiper home-hero__slider">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <div class="home-hero__video">
                                <div class="img-wrapper">
                                    <img src="assets/images/home/hero.jpg" alt="hero">
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="home-hero__video">
                                <div class="img-wrapper">
                                    <img src="assets/images/home/hero.jpg" alt="hero">
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="home-hero__video">
                                <div class="img-wrapper">
                                    <img src="assets/images/home/hero.jpg" alt="hero">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="home-hero__title">
                    <h5 class="description1 text-upper animate fadein-Up" data-delay="0.1s">DUBAI RAPID PROPERTIES</h5>
                    <h1 class="description2 text-upper animate fadein-Up" data-delay="0.2s">THE PROPERTY SOLUTION</h1>
                </div>              
            </section>
        </main>

        <!-- Footer -->
        <?php include 'includes/footer.php'; ?>
        <!-- Swiper -->
        <script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>
        <!-- home JS Files -->
        <script src="assets/js/home.min.js"></script>
        <!-- Intersection Observer -->
        <script src="assets/js/vendors/intersection-observer.js"></script>

    </body>

</html>