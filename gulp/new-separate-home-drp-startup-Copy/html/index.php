<!DOCTYPE html>
<html lang="en" class="homepage">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
        <title>Home | Dubai Rapid Properties </title>
        <!-- Vendors CSS -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css"/>
        <link rel="icon" type="image/ico" href="favicon.ico">
        <meta name="format-detection" content="telephone=no">
        <!-- home CSS -->
        <link rel="stylesheet" href="assets/css/home.min.css">
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
                <div class="home-hero__filters">
                    <div class="tabs tabs--home-hero animate fadein-Up" data-delay="0.3s">
                        <ul class="tabs__list">
                            <li class="btn btn--white active" data-id="property">Property Search</li>
                            <li class="btn btn--white" data-id="holiday">Holiday Homes</li>
                        </ul>
                    </div>
                    <form class="hero-form animate fadein-Up" data-delay="0.4s" action="javascript:;">
                        <!-- first tabs content -->
                        <div class="hero-form__row" id="property">
                            <div class="hero-form__col hero-form__col--property">
                                <div class="form-field">
                                    <input type="text" class="form-field__control" placeholder="Rent">
                                    <div class="form-field__icon">
                                        <img src="assets/svg/dropdown-down.svg" alt="icon" width="11" height="8">
                                    </div>
                                </div>
                                <div class="hero-form__dropdown">
                                    <div class="tabs tabs--dropdown ">
                                        <ul class="tabs__list border-gray">
                                            <li class="btn btn--white active" data-id="property">Buy </li>
                                            <li class="btn btn--white" data-id="holiday">Rent </li>
                                        </ul>
                                    </div>
                                    <div class="hero-form__types">
                                        <label class="h6">Set Frequency </label>
                                        <ul class="hero-form__types__list">
                                            <li class="btn btn--gray">Yearly</li>
                                        </ul>
                                        <div class="hero-form__types__footer">
                                            <button class="btn btn--white">clear</button>
                                            <button class="btn btn--primary btn--icon">APPLY</button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="hero-form__col hero-form__col--property ">
                                <div class="form-field">
                                    <input type="text" class="form-field__control" placeholder="location">
                                    <div class="form-field__icon">
                                        <img src="assets/svg/location.svg" alt="icon" width="14" height="21">
                                    </div>
                                </div>
                            </div>
                            <div class="hero-form__col hero-form__col--property ">
                                <div class="form-field">
                                    <input type="text" class="form-field__control" placeholder="Residential">
                                    <div class="form-field__icon">
                                        <img src="assets/svg/dropdown-down.svg" alt="icon" width="11" height="8">
                                    </div>
                                </div>
                                <div class="hero-form__dropdown">
                                    <div class="tabs tabs--dropdown ">
                                        <ul class="tabs__list border-gray">
                                            <li class="btn btn--white active" data-id="property">Residential</li>
                                            <li class="btn btn--white" data-id="holiday">COMMERCIAL</li>
                                        </ul>
                                    </div>
                                    <div class="hero-form__types">
                                        <label class="h6">select Type</label>
                                        <ul class="hero-form__types__list">
                                            <li class="btn btn--gray active">Apartment</li>
                                            <li class="btn btn--gray">Villas</li>
                                            <li class="btn btn--gray">Townhouse</li>
                                            <li class="btn btn--gray">villa compound</li>
                                        </ul>
                                        <div class="hero-form__types__footer">
                                            <button class="btn btn--white">clear</button>
                                            <button class="btn btn--primary btn--icon">APPLY</button>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div class="hero-form__col hero-form__col--btn hero-form__col--property-btn">
                                <div class="hero-form__col--btn__wrapper">
                                    <div class="hero-form__dropdown-icon">
                                        <img src="assets/svg/dropdown.svg" alt="icon" width="23" height="23">
                                    </div>
                                    <div class="hero-form__dropdown">
                                        <div class="hero-form__types hero-form__types--sm">
                                            <div class="item">
                                                <label class="h6">Bedrooms</label>
                                                <div class="select">
                                                    <div class="selectBtn" data-type="firstOption">2</div>
                                                    <div class="selectDropdown">
                                                        <div class="option" data-type="firstOption">2</div>
                                                        <div class="option" data-type="secondOption">3</div>
                                                        <div class="option" data-type="thirdOption">4</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="item">
                                                <label class="h6">Bathrooms</label>
                                                <div class="select">
                                                    <div class="selectBtn" data-type="firstOption">2</div>
                                                    <div class="selectDropdown">
                                                        <div class="option" data-type="firstOption">2</div>
                                                        <div class="option" data-type="secondOption">3</div>
                                                        <div class="option" data-type="thirdOption">4</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="hero-form__types">
                                            <label class="h6">Area (Sqft) </label>
                                            <div class="select">
                                                <div class="selectBtn" data-type="firstOption">Minimum</div>
                                                <div class="selectDropdown">
                                                    <div class="option" data-type="firstOption">First option</div>
                                                    <div class="option" data-type="secondOption">Second option</div>
                                                    <div class="option" data-type="thirdOption">Third option</div>
                                                </div>
                                            </div>
                                            <div class="select">
                                                <div class="selectBtn" data-type="firstOption">Maximum</div>
                                                <div class="selectDropdown">
                                                    <div class="option" data-type="firstOption">First option</div>
                                                    <div class="option" data-type="secondOption">Second option</div>
                                                    <div class="option" data-type="thirdOption">Third option</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="hero-form__types">
                                            <label class="h6">Price Range (AED)</label>
                                            <div class="select">
                                                <div class="selectBtn" data-type="firstOption">Minimum</div>
                                                <div class="selectDropdown">
                                                    <div class="option" data-type="firstOption">First option</div>
                                                    <div class="option" data-type="secondOption">Second option</div>
                                                    <div class="option" data-type="thirdOption">Third option</div>
                                                </div>
                                            </div>
                                            <div class="select">
                                                <div class="selectBtn" data-type="firstOption">Maximum</div>
                                                <div class="selectDropdown">
                                                    <div class="option" data-type="firstOption">First option</div>
                                                    <div class="option" data-type="secondOption">Second option</div>
                                                    <div class="option" data-type="thirdOption">Third option</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="hero-form__types__footer">
                                            <button class="btn btn--white">clear</button>
                                            <button class="btn btn--primary btn--icon">APPLY FILTERS</button>
                                        </div>
                                    </div>
                                </div>
                                <button class="btn btn--primary btn--icon">SEARCH</button>
                            </div>
                        </div>
                        <!-- second tabs content -->
                        <div class="hero-form__row" id="holiday">
                            <div class="hero-form__col">
                                <div class="form-field">
                                    <input type="text" class="form-field__control" placeholder="location">
                                    <div class="form-field__icon">
                                        <img src="assets/svg/location.svg" alt="icon" width="14" height="21">
                                    </div>
                                </div>
                            </div>
                            <div class="hero-form__col">
                                <div class="form-field">
                                    <input type="text" class="form-field__control" placeholder="Arrival">
                                    <div class="form-field__icon">
                                        <img src="assets/svg/calendar.svg" alt="icon" width="18" height="18">
                                    </div>
                                </div>
                            </div>
                            <div class="hero-form__col">
                                <div class="form-field">
                                    <input type="text" class="form-field__control" placeholder="Departure">
                                    <div class="form-field__icon">
                                        <img src="assets/svg/calendar.svg" alt="icon" width="18" height="18">
                                    </div>
                                </div>
                            </div>
                            <div class="hero-form__col">
                                <div class="form-field">
                                    <input type="text" class="form-field__control" placeholder="Guests">
                                    <div class="form-field__icon">
                                        <img src="assets/svg/dropdown-down.svg" alt="icon" width="11" height="8">
                                    </div>
                                </div>
                                <div class="hero-form__dropdown">
                                    <div class="hero-form__types hero-form__types--guests">
                                        <label class="h6">1</label>                                      
                                        <label class="h6">2</label>                                      
                                        <label class="h6">3</label>                                      
                                    </div>
                                </div>
                            </div>
                            <div class="hero-form__col hero-form__col--btn hero-form__col--holiday-btn">
                                <div class="hero-form__col--btn__wrapper">
                                    <div class="hero-form__dropdown-icon">
                                        <img src="assets/svg/dropdown.svg" alt="icon" width="23" height="23">
                                    </div>
                                    <div class="hero-form__dropdown">
                                        <div class="hero-form__types hero-form__types--btn-frequency">
                                            <label class="h6">Set Frequency </label>
                                            <ul class="hero-form__types__list">
                                                <li class="btn btn--gray active">Yearly</li>
                                                <li class="btn btn--gray">Monthly </li>
                                                <li class="btn btn--gray">Weekly </li>
                                            </ul>
                                        </div>
                                        <div class="hero-form__types hero-form__types--sm">
                                            <div class="item">
                                                <label class="h6">Bedrooms</label>
                                                <div class="select">
                                                    <div class="selectBtn" data-type="firstOption">2</div>
                                                    <div class="selectDropdown">
                                                        <div class="option" data-type="firstOption">2</div>
                                                        <div class="option" data-type="secondOption">3</div>
                                                        <div class="option" data-type="thirdOption">4</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="item">
                                                <label class="h6">Bathrooms</label>
                                                <div class="select">
                                                    <div class="selectBtn" data-type="firstOption">2</div>
                                                    <div class="selectDropdown">
                                                        <div class="option" data-type="firstOption">2</div>
                                                        <div class="option" data-type="secondOption">3</div>
                                                        <div class="option" data-type="thirdOption">4</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="hero-form__types">
                                            <label class="h6">Area (Sqft) </label>
                                            <div class="select">
                                                <div class="selectBtn" data-type="firstOption">Minimum</div>
                                                <div class="selectDropdown">
                                                    <div class="option" data-type="firstOption">First option</div>
                                                    <div class="option" data-type="secondOption">Second option</div>
                                                    <div class="option" data-type="thirdOption">Third option</div>
                                                </div>
                                            </div>
                                            <div class="select">
                                                <div class="selectBtn" data-type="firstOption">Maximum</div>
                                                <div class="selectDropdown">
                                                    <div class="option" data-type="firstOption">First option</div>
                                                    <div class="option" data-type="secondOption">Second option</div>
                                                    <div class="option" data-type="thirdOption">Third option</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="hero-form__types">
                                            <label class="h6">Price Range (AED)</label>
                                            <div class="select">
                                                <div class="selectBtn" data-type="firstOption">Minimum</div>
                                                <div class="selectDropdown">
                                                    <div class="option" data-type="firstOption">First option</div>
                                                    <div class="option" data-type="secondOption">Second option</div>
                                                    <div class="option" data-type="thirdOption">Third option</div>
                                                </div>
                                            </div>
                                            <div class="select">
                                                <div class="selectBtn" data-type="firstOption">Maximum</div>
                                                <div class="selectDropdown">
                                                    <div class="option" data-type="firstOption">First option</div>
                                                    <div class="option" data-type="secondOption">Second option</div>
                                                    <div class="option" data-type="thirdOption">Third option</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="hero-form__types__footer">
                                            <button class="btn btn--white">clear</button>
                                            <button class="btn btn--primary btn--icon">APPLY FILTERS</button>
                                        </div>
                                    </div>
                                </div>
                                <button class="btn btn--primary btn--icon">SEARCH</button>
                            </div>
                        </div>

                    </form>
                </div>
                <div class="home-hero__social">
                    <span class="title">Follow Us</span>
                    <ul class="home-hero__social__lists">
                        <li class="animate fadein-Up" data-delay="0.1s">
                            <a href="javascript:;">
                                <img src="assets/svg/social/facebook.svg" alt="icon" width="15" height="15">
                            </a>
                        </li>
                        <li class="animate fadein-Up" data-delay="0.2s">
                            <a href="javascript:;">
                                <img src="assets/svg/social/youtube.svg" alt="icon" width="15" height="15">
                            </a>
                        </li>
                        <li class="animate fadein-Up" data-delay="0.3s">
                            <a href="javascript:;">
                                <img src="assets/svg/social/instagram.svg" alt="icon" width="15" height="15">
                            </a>
                        </li>
                    </ul>
                </div>
                <a href="javascript:;" class="home-hero__whatsapp">
                    <img src="assets/svg/whatsapp.svg" alt="whatsapp" width="35" height="35">
                </a>
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