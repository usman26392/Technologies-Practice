<!DOCTYPE html>
<html lang="en" class="loadjs">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Global Catering | Sitemap </title>
    <?php include 'includes/meta.php'; ?>
</head>

<body class="no-home">
    <?php include('includes/loader.php'); ?>
    <?php include 'includes/header.php'; ?>

    
    <main>
        
        <!-- hero -->
        <section class="hero-home inner--hero">
            <div class="container hero-home__container">
                <div class="hero-home__text">
                    <h1 class="h1 animate" data-animation="animate__fadeInUp" data-duration="200">Sitemap</h1>
                </div>
            </div>
            <div class="hero-home__bg">
                <picture>
                    <source media="(max-width: 767px)" srcset="/assets/images/about-us/mob-banner.jpg">
                    <img src="/assets/images/about-us/banner.jpg" alt="banner image">
                </picture>
            </div>
        </section>

        <section class="terms-sec thm-py-100">
            <div class="container">
                <h2 class="h2">Sitemap</h2>
                <ul>
                    <li>
                        <a href="/">home</a>
                    </li>
                    <li>
                        <a href="/about-us.php">about us</a>
                    </li>
                    <li>
                        <a href="/business-sectors/">business sectors</a>
                        <ul>
                            <li>
                                <a href="/business-sectors/restaurants.php">Restaurant</a>
                            </li>
                            <li>
                                <a href="/business-sectors/retail.php">Retail</a>
                            </li>
                            <li>
                                <a href="/business-sectors/catering.php">Catering</a>
                            </li>
                            <li>
                                <a href="/business-sectors/wholesale.php">Wholesale</a>
                            </li>

                        </ul>
                    </li>
                    <li>
                        <a href="/food-safety.php">food safety</a>
                    </li>
                    <li>
                        <a href="/news.php">news</a>
                    </li>
                </ul>
            </div>

        </section>

        

        <!-- cta -->
        <?php include 'includes/follow-us.php'; ?>

    </main>


    <?php include 'includes/footer.php'; ?>
    <?php include 'includes/scripts.php'; ?>
</body>

</html>

