<!DOCTYPE html>
<html lang="en" class="homepage">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Homepage | Dubai Rapid Properties </title>
        <?php include 'includes/meta.php'; ?>
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

            <!-- features -->
            <section class="feature-properties section">
                <div class="container">
                    <div class="generic-panel">
                        <div class="generic-panel__leftside">
                            <span class="orange-title orange__bottom__line animate fadein-Up" data-delay="0.1s">FEATURED
                                PROPERTIES</span>
                            <h2 class="h2 animate fadein-Up" data-delay="0.2s">A New Way Of Living</h2>
                            <div class="tabs tabs--features animate fadein-Up" data-delay="0.3s">
                                <ul class="tabs__list">
                                    <li class="btn btn--white active">RESIDENTIAL</li>
                                    <li class="btn btn--white">COMMERCIAL</li>
                                </ul>
                            </div>
                        </div>
                        <div class="generic-panel__rightside animate fadein-Up" data-delay="0.4s">
                            <a href="javascript:;" class="btn btn--primary btn--icon">EXPLORE ALL</a>
                        </div>
                    </div>
                    <div class="feature-wrapper">
                        <div class="custom-row">
                            <div class="col_12">
                                <div class="swiper feature_slider">
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide">
                                            <div class="card">
                                                <a href="javascript:;" class="card-wrapper">
                                                    <div class="card__figure">
                                                        <img class="lazy-img" src="assets/images/dot.jpg"
                                                            data-src="assets/images/home/property-1.jpg" alt="property"
                                                            width="433" height="309">
                                                    </div>
                                                    <div class="card__body">
                                                        <div class="card__header">
                                                            <span class="card__category">Villa</span>
                                                            <h4 class="card__title line-clamp-1">Saheel 1, Arabian
                                                                Ranches, Dubai
                                                            </h4>
                                                            <p class="card__description line-clamp-1">Furnished Villa |
                                                                Vacant |
                                                                Excellent To See</p>
                                                        </div>
                                                        <div class="card__footer">
                                                            <div class="card__amount-description">
                                                                <h4 class="price">AED 50,800,00</h4>
                                                                <div class="features">
                                                                    <div class="type">
                                                                        <span class="icon">
                                                                            <img src="assets/svg/beds.svg" alt="icon"
                                                                                width="18" height="13">
                                                                        </span>
                                                                        <span class="quantitiy">5</span>
                                                                    </div>
                                                                    <div class="type">
                                                                        <span class="icon">
                                                                            <img src="assets/svg/baths.svg" alt="icon"
                                                                                width="18" height="13">
                                                                        </span>
                                                                        <span class="quantitiy">4</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="card__route-icon">
                                                            <img src="assets/svg/right-icon.svg" alt="icon" width="18"
                                                                height="12">
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="javascript:;" class="card-cta">
                                                    <div class="card-cta__avatar">
                                                        <div class="avatar">
                                                            <img class="lazy-img" src="assets/images/dot.jpg"
                                                                data-src="assets/images/home/avatar.png" alt="avatar"
                                                                width="51" height="49">
                                                        </div>
                                                        <div class="title">
                                                            <span class="listby">Listed By</span>
                                                            <span class="owner">Nina Montez</span>
                                                        </div>
                                                    </div>
                                                    <div class="card-cta__icon">
                                                        <img src="assets/svg/whatsapp.svg" alt="whatsapp" width="35"
                                                            height="35">
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="card">
                                                <a href="javascript:;" class="card-wrapper">
                                                    <div class="card__figure">
                                                        <img class="lazy-img" src="assets/images/dot.jpg"
                                                            data-src="assets/images/home/property-2.jpg" alt="property"
                                                            width="433" height="309">
                                                    </div>
                                                    <div class="card__body">
                                                        <div class="card__header">
                                                            <span class="card__category">Villa</span>
                                                            <h4 class="card__title line-clamp-1">Saheel 1, Arabian
                                                                Ranches, Dubai
                                                            </h4>
                                                            <p class="card__description line-clamp-1">Furnished Villa |
                                                                Vacant |
                                                                Excellent To See</p>
                                                        </div>
                                                        <div class="card__footer">
                                                            <div class="card__amount-description">
                                                                <h4 class="price">AED 50,800,00</h4>
                                                                <div class="features">
                                                                    <div class="type">
                                                                        <span class="icon">
                                                                            <img src="assets/svg/beds.svg" alt="icon"
                                                                                width="18" height="13">
                                                                        </span>
                                                                        <span class="quantitiy">5</span>
                                                                    </div>
                                                                    <div class="type">
                                                                        <span class="icon">
                                                                            <img src="assets/svg/baths.svg" alt="icon"
                                                                                width="18" height="13">
                                                                        </span>
                                                                        <span class="quantitiy">4</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="card__route-icon">
                                                            <img src="assets/svg/right-icon.svg" alt="icon" width="18"
                                                                height="12">
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="javascript:;" class="card-cta">
                                                    <div class="card-cta__avatar">
                                                        <div class="avatar">
                                                            <img class="lazy-img" src="assets/images/dot.jpg"
                                                                data-src="assets/images/home/avatar.png" alt="avatar"
                                                                width="51" height="49">
                                                        </div>
                                                        <div class="title">
                                                            <span class="listby">Listed By</span>
                                                            <span class="owner">Nina Montez</span>
                                                        </div>
                                                    </div>
                                                    <div class="card-cta__icon">
                                                        <img src="assets/svg/whatsapp.svg" alt="whatsapp" width="35"
                                                            height="35">
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="card">
                                                <a href="javascript:;" class="card-wrapper">
                                                    <div class="card__figure">
                                                        <img class="lazy-img" src="assets/images/dot.jpg"
                                                            data-src="assets/images/home/property-3.jpg" alt="property"
                                                            width="433" height="309">
                                                    </div>
                                                    <div class="card__body">
                                                        <div class="card__header">
                                                            <span class="card__category">Villa</span>
                                                            <h4 class="card__title line-clamp-1">Saheel 1, Arabian
                                                                Ranches, Dubai
                                                            </h4>
                                                            <p class="card__description line-clamp-1">Furnished Villa |
                                                                Vacant |
                                                                Excellent To See</p>
                                                        </div>
                                                        <div class="card__footer">
                                                            <div class="card__amount-description">
                                                                <h4 class="price">AED 50,800,00</h4>
                                                                <div class="features">
                                                                    <div class="type">
                                                                        <span class="icon">
                                                                            <img src="assets/svg/beds.svg" alt="icon"
                                                                                width="18" height="13">
                                                                        </span>
                                                                        <span class="quantitiy">5</span>
                                                                    </div>
                                                                    <div class="type">
                                                                        <span class="icon">
                                                                            <img src="assets/svg/baths.svg" alt="icon"
                                                                                width="18" height="13">
                                                                        </span>
                                                                        <span class="quantitiy">4</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="card__route-icon">
                                                            <img src="assets/svg/right-icon.svg" alt="icon" width="18"
                                                                height="12">
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="javascript:;" class="card-cta">
                                                    <div class="card-cta__avatar">
                                                        <div class="avatar">
                                                            <img class="lazy-img" src="assets/images/dot.jpg"
                                                                data-src="assets/images/home/avatar.png" alt="avatar"
                                                                width="51" height="49">
                                                        </div>
                                                        <div class="title">
                                                            <span class="listby">Listed By</span>
                                                            <span class="owner">Nina Montez</span>
                                                        </div>
                                                    </div>
                                                    <div class="card-cta__icon">
                                                        <img src="assets/svg/whatsapp.svg" alt="whatsapp" width="35"
                                                            height="35">
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <!-- <div class="swiper-slide">
                                            <div class="card">
                                                <a href="javascript:;" class="card-wrapper">
                                                    <div class="card__figure">
                                                        <img class="lazy-img" src="assets/images/dot.jpg"
                                                            data-src="assets/images/home/property-1.jpg" alt="property"
                                                            width="433" height="309">
                                                    </div>
                                                    <div class="card__body">
                                                        <div class="card__header">
                                                            <span class="card__category">Villa</span>
                                                            <h4 class="card__title line-clamp-1">Saheel 1, Arabian
                                                                Ranches, Dubai
                                                            </h4>
                                                            <p class="card__description line-clamp-1">Furnished Villa |
                                                                Vacant |
                                                                Excellent To See</p>
                                                        </div>
                                                        <div class="card__footer">
                                                            <div class="card__amount-description">
                                                                <h4 class="price">AED 50,800,00</h4>
                                                                <div class="features">
                                                                    <div class="type">
                                                                        <span class="icon">
                                                                            <img src="assets/svg/beds.svg" alt="icon"
                                                                                width="18" height="13">
                                                                        </span>
                                                                        <span class="quantitiy">5</span>
                                                                    </div>
                                                                    <div class="type">
                                                                        <span class="icon">
                                                                            <img src="assets/svg/baths.svg" alt="icon"
                                                                                width="18" height="13">
                                                                        </span>
                                                                        <span class="quantitiy">4</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="card__route-icon">
                                                            <img src="assets/svg/right-icon.svg" alt="icon" width="18"
                                                                height="12">
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="javascript:;" class="card-cta">
                                                    <div class="card-cta__avatar">
                                                        <div class="avatar">
                                                            <img class="lazy-img" src="assets/images/dot.jpg"
                                                                data-src="assets/images/home/avatar.png" alt="avatar"
                                                                width="51" height="49">
                                                        </div>
                                                        <div class="title">
                                                            <span class="listby">Listed By</span>
                                                            <span class="owner">Nina Montez</span>
                                                        </div>
                                                    </div>
                                                    <div class="card-cta__icon">
                                                        <img src="assets/svg/whatsapp.svg" alt="whatsapp" width="35"
                                                            height="35">
                                                    </div>
                                                </a>
                                            </div>
                                        </div> -->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-advertisement animate fadein-Left" data-delay="0.2s">
                    <div class="card-advertisement__figure">
                        <img class="lazy-img" src="assets/images/dot.jpg"
                            data-src="assets/images/home/advertisement.jpg" alt="advertisement" width="555"
                            height="764">
                    </div>
                    <div class="card-advertisement__text">
                        <div class="card-advertisement__title">
                            <h3 class="h3">Your Dream Apartment, Just A Click Away</h3>
                            <a href="javascript:;" class="round-btn">
                                <img src="assets/svg/right-icon.svg" alt="icon" width="18" height="12">
                            </a>
                        </div>
                        <div class="card-advertisement__contact">
                            <span class="item">For Details</span>
                            <a href="tel:+971234567" class="item w-uline">+971 234 567</a>
                        </div>
                    </div>
                </div>
            </section>

            <!-- HOLIDAY HOMES: duplicate of features -->
            <section class="feature-properties section light-gray-bg">
                <div class="container">
                    <div class="generic-panel">
                        <div class="generic-panel__leftside">
                            <span class="orange-title orange__bottom__line animate fadein-Up" data-delay="0.1s">HOLIDAY
                                HOMES</span>
                            <h2 class="h2 m-0 animate fadein-Up" data-delay="0.2s">Make Your Holiday Exciting</h2>
                        </div>
                        <div class="generic-panel__rightside animate fadein-Up" data-delay="0.3s">
                            <a href="javascript:;" class="btn btn--primary btn--icon">EXPLORE ALL</a>
                        </div>
                    </div>
                    <div class="feature-wrapper">
                        <div class="custom-row">
                            <div class="col_12">
                                <div class="swiper holiday_slider">
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide">
                                            <div class="card">
                                                <a href="javascript:;" class="card-wrapper">
                                                    <div class="card__figure">
                                                        <img class="lazy-img" src="assets/images/dot.jpg"
                                                            data-src="assets/images/home/holiday-1.jpg" alt="property"
                                                            width="433" height="309">
                                                    </div>
                                                    <div class="card__body">
                                                        <div class="card__header">
                                                            <span class="card__category">Villa</span>
                                                            <h4 class="card__title line-clamp-1">Saheel 1, Arabian
                                                                Ranches, Dubai
                                                            </h4>
                                                            <p class="card__description line-clamp-1">Furnished Villa |
                                                                Vacant |
                                                                Excellent To See</p>
                                                        </div>
                                                        <div class="card__footer">
                                                            <div class="card__amount-description">
                                                                <h4 class="price">AED 50,800,00</h4>
                                                                <div class="features">
                                                                    <div class="type">
                                                                        <span class="icon">
                                                                            <img src="assets/svg/beds.svg" alt="icon"
                                                                                width="18" height="13">
                                                                        </span>
                                                                        <span class="quantitiy">5</span>
                                                                    </div>
                                                                    <div class="type">
                                                                        <span class="icon">
                                                                            <img src="assets/svg/baths.svg" alt="icon"
                                                                                width="18" height="13">
                                                                        </span>
                                                                        <span class="quantitiy">4</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="card__route-icon">
                                                            <img src="assets/svg/right-icon.svg" alt="icon" width="18"
                                                                height="12">
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="javascript:;" class="card-cta">
                                                    <div class="card-cta__avatar">
                                                        <div class="avatar">
                                                            <img class="lazy-img" src="assets/images/dot.jpg"
                                                                data-src="assets/images/home/avatar.png" alt="avatar"
                                                                width="51" height="49">
                                                        </div>
                                                        <div class="title">
                                                            <span class="listby">Listed By</span>
                                                            <span class="owner">Nina Montez</span>
                                                        </div>
                                                    </div>
                                                    <div class="card-cta__icon">
                                                        <img src="assets/svg/whatsapp.svg" alt="whatsapp" width="35"
                                                            height="35">
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="card">
                                                <a href="javascript:;" class="card-wrapper">
                                                    <div class="card__figure">
                                                        <img class="lazy-img" src="assets/images/dot.jpg"
                                                            data-src="assets/images/home/holiday-2.jpg" alt="property"
                                                            width="433" height="309">
                                                    </div>
                                                    <div class="card__body">
                                                        <div class="card__header">
                                                            <span class="card__category">Villa</span>
                                                            <h4 class="card__title line-clamp-1">Saheel 1, Arabian
                                                                Ranches, Dubai
                                                            </h4>
                                                            <p class="card__description line-clamp-1">Furnished Villa |
                                                                Vacant |
                                                                Excellent To See</p>
                                                        </div>
                                                        <div class="card__footer">
                                                            <div class="card__amount-description">
                                                                <h4 class="price">AED 50,800,00</h4>
                                                                <div class="features">
                                                                    <div class="type">
                                                                        <span class="icon">
                                                                            <img src="assets/svg/beds.svg" alt="icon"
                                                                                width="18" height="13">
                                                                        </span>
                                                                        <span class="quantitiy">5</span>
                                                                    </div>
                                                                    <div class="type">
                                                                        <span class="icon">
                                                                            <img src="assets/svg/baths.svg" alt="icon"
                                                                                width="18" height="13">
                                                                        </span>
                                                                        <span class="quantitiy">4</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="card__route-icon">
                                                            <img src="assets/svg/right-icon.svg" alt="icon" width="18"
                                                                height="12">
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="javascript:;" class="card-cta">
                                                    <div class="card-cta__avatar">
                                                        <div class="avatar">
                                                            <img class="lazy-img" src="assets/images/dot.jpg"
                                                                data-src="assets/images/home/avatar.png" alt="avatar"
                                                                width="51" height="49">
                                                        </div>
                                                        <div class="title">
                                                            <span class="listby">Listed By</span>
                                                            <span class="owner">Nina Montez</span>
                                                        </div>
                                                    </div>
                                                    <div class="card-cta__icon">
                                                        <img src="assets/svg/whatsapp.svg" alt="whatsapp" width="35"
                                                            height="35">
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="card">
                                                <a href="javascript:;" class="card-wrapper">
                                                    <div class="card__figure">
                                                        <img class="lazy-img" src="assets/images/dot.jpg"
                                                            data-src="assets/images/home/holiday-3.jpg" alt="property"
                                                            width="433" height="309">
                                                    </div>
                                                    <div class="card__body">
                                                        <div class="card__header">
                                                            <span class="card__category">Villa</span>
                                                            <h4 class="card__title line-clamp-1">Saheel 1, Arabian
                                                                Ranches, Dubai
                                                            </h4>
                                                            <p class="card__description line-clamp-1">Furnished Villa |
                                                                Vacant |
                                                                Excellent To See</p>
                                                        </div>
                                                        <div class="card__footer">
                                                            <div class="card__amount-description">
                                                                <h4 class="price">AED 50,800,00</h4>
                                                                <div class="features">
                                                                    <div class="type">
                                                                        <span class="icon">
                                                                            <img src="assets/svg/beds.svg" alt="icon"
                                                                                width="18" height="13">
                                                                        </span>
                                                                        <span class="quantitiy">5</span>
                                                                    </div>
                                                                    <div class="type">
                                                                        <span class="icon">
                                                                            <img src="assets/svg/baths.svg" alt="icon"
                                                                                width="18" height="13">
                                                                        </span>
                                                                        <span class="quantitiy">4</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="card__route-icon">
                                                            <img src="assets/svg/right-icon.svg" alt="icon" width="18"
                                                                height="12">
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="javascript:;" class="card-cta">
                                                    <div class="card-cta__avatar">
                                                        <div class="avatar">
                                                            <img class="lazy-img" src="assets/images/dot.jpg"
                                                                data-src="assets/images/home/avatar.png" alt="avatar"
                                                                width="51" height="49">
                                                        </div>
                                                        <div class="title">
                                                            <span class="listby">Listed By</span>
                                                            <span class="owner">Nina Montez</span>
                                                        </div>
                                                    </div>
                                                    <div class="card-cta__icon">
                                                        <img src="assets/svg/whatsapp.svg" alt="whatsapp" width="35"
                                                            height="35">
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <!-- <div class="swiper-slide">
                                            <div class="card">
                                                <a href="javascript:;" class="card-wrapper">
                                                    <div class="card__figure">
                                                        <img class="lazy-img" src="assets/images/dot.jpg"
                                                            data-src="assets/images/home/holiday-1.jpg" alt="property"
                                                            width="433" height="309">
                                                    </div>
                                                    <div class="card__body">
                                                        <div class="card__header">
                                                            <span class="card__category">Villa</span>
                                                            <h4 class="card__title line-clamp-1">Saheel 1, Arabian
                                                                Ranches, Dubai
                                                            </h4>
                                                            <p class="card__description line-clamp-1">Furnished Villa |
                                                                Vacant |
                                                                Excellent To See</p>
                                                        </div>
                                                        <div class="card__footer">
                                                            <div class="card__amount-description">
                                                                <h4 class="price">AED 50,800,00</h4>
                                                                <div class="features">
                                                                    <div class="type">
                                                                        <span class="icon">
                                                                            <img src="assets/svg/beds.svg" alt="icon"
                                                                                width="18" height="13">
                                                                        </span>
                                                                        <span class="quantitiy">5</span>
                                                                    </div>
                                                                    <div class="type">
                                                                        <span class="icon">
                                                                            <img src="assets/svg/baths.svg" alt="icon"
                                                                                width="18" height="13">
                                                                        </span>
                                                                        <span class="quantitiy">4</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="card__route-icon">
                                                            <img src="assets/svg/right-icon.svg" alt="icon" width="18"
                                                                height="12">
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="javascript:;" class="card-cta">
                                                    <div class="card-cta__avatar">
                                                        <div class="avatar">
                                                            <img class="lazy-img" src="assets/images/dot.jpg"
                                                                data-src="assets/images/home/avatar.png" alt="avatar"
                                                                width="51" height="49">
                                                        </div>
                                                        <div class="title">
                                                            <span class="listby">Listed By</span>
                                                            <span class="owner">Nina Montez</span>
                                                        </div>
                                                    </div>
                                                    <div class="card-cta__icon">
                                                        <img src="assets/svg/whatsapp.svg" alt="whatsapp" width="35"
                                                            height="35">
                                                    </div>
                                                </a>
                                            </div>
                                        </div> -->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-advertisement animate fadein-Left" data-delay="0.2s">
                    <div class="card-advertisement__figure">
                        <img class="lazy-img" src="assets/images/dot.jpg"
                            data-src="assets/images/home/advertisement-2.jpg" alt="advertisement" width="555"
                            height="764">
                    </div>
                    <div class="card-advertisement__text">
                        <div class="card-advertisement__title">
                            <h3 class="h3">Family Love For New Home</h3>
                            <a href="javascript:;" class="round-btn">
                                <img src="assets/svg/right-icon.svg" alt="icon" width="18" height="12">
                            </a>
                        </div>
                        <div class="card-advertisement__contact">
                            <span class="item">For Details</span>
                            <a href="tel:+971234567" class="item w-uline">+971 234 567</a>
                        </div>
                    </div>
                </div>
            </section>


            <!-- interior design -->
            <section class="interior-designs section gray-bg ">
                <div class="container">
                    <div class="generic-panel generic-panel--full">
                        <div class="generic-panel__leftside">
                            <span class="orange-title orange__bottom__line animate fadein-Up" data-delay="0.1s">INTERIOR
                                DESIGN</span>
                            <h2 class="h2 white-col m-0 animate fadein-Up" data-delay="0.2s">Creating Spaces That Work
                            </h2>
                        </div>
                        <div class="generic-panel__rightside animate fadein-Up" data-delay="0.3s">
                            <a href="javascript:;" class="btn btn--primary btn--icon">EXPLORE ALL</a>
                        </div>
                    </div>
                </div>
                <div class="container interior-designs--container">
                    <div class="feature-wrapper">
                        <div class="custom-row">
                            <div class="col_12">
                                <div class="swiper interior-designs_slider">
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide">
                                            <a href="javascript:;" class="card-interior">
                                                <div class="card-interior__figure">
                                                    <img class="lazy-img" src="assets/images/dot.jpg"
                                                        data-src="assets/images/home/interior-1.jpg" alt="interior"
                                                        width="435" height="609">
                                                </div>
                                                <div class="btn btn--circle-icon">EXPLORE ALL
                                                    <div class="round-btn">
                                                        <img src="assets/svg/right-icon.svg" alt="icon" width="18"
                                                            height="12">
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="swiper-slide">
                                            <a href="javascript:;" class="card-interior">
                                                <div class="card-interior__figure">
                                                    <img class="lazy-img" src="assets/images/dot.jpg"
                                                        data-src="assets/images/home/interior-2.jpg" alt="interior"
                                                        width="435" height="609">
                                                </div>
                                                <div class="btn btn--circle-icon">EXPLORE ALL
                                                    <div class="round-btn">
                                                        <img src="assets/svg/right-icon.svg" alt="icon" width="18"
                                                            height="12">
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="swiper-slide">
                                            <a href="javascript:;" class="card-interior">
                                                <div class="card-interior__figure">
                                                    <img class="lazy-img" src="assets/images/dot.jpg"
                                                        data-src="assets/images/home/interior-3.jpg" alt="interior"
                                                        width="435" height="609">
                                                </div>
                                                <div class="btn btn--circle-icon">EXPLORE ALL
                                                    <div class="round-btn">
                                                        <img src="assets/svg/right-icon.svg" alt="icon" width="18"
                                                            height="12">
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="swiper-slide">
                                            <a href="javascript:;" class="card-interior">
                                                <div class="card-interior__figure">
                                                    <img class="lazy-img" src="assets/images/dot.jpg"
                                                        data-src="assets/images/home/interior-4.jpg" alt="interior"
                                                        width="435" height="609">
                                                </div>
                                                <div class="btn btn--circle-icon">EXPLORE ALL
                                                    <div class="round-btn">
                                                        <img src="assets/svg/right-icon.svg" alt="icon" width="18"
                                                            height="12">
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="swiper-slide">
                                            <a href="javascript:;" class="card-interior">
                                                <div class="card-interior__figure">
                                                    <img class="lazy-img" src="assets/images/dot.jpg"
                                                        data-src="assets/images/home/interior-1.jpg" alt="interior"
                                                        width="435" height="609">
                                                </div>
                                                <div class="btn btn--circle-icon">EXPLORE ALL
                                                    <div class="round-btn">
                                                        <img src="assets/svg/right-icon.svg" alt="icon" width="18"
                                                            height="12">
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <!-- home contact us -->
            <section class="h-contact-us section">
                <div class="container h-contact-us__container">
                    <div class="custom-row no-gutters">
                        <div class="col_4">
                            <div class="section h-contact-us__description">
                                <span class="orange-title orange__bottom__line animate fadein-Up"
                                    data-delay="0.1s">CONTACT US</span>
                                <h2 class="h2 animate fadein-Up" data-delay="0.2s">Connect With The Experts</h2>
                                <ul class="h-contact-us__list">
                                    <li class="animate fadein-Up" data-delay="0.1s">
                                        <a href="javascript:;" class="h-contact-us__list__item">
                                            <div class="round-btn">
                                                <img src="assets/svg/location-lg.svg" alt="icon" width="16" height="24">
                                            </div>
                                            <h6 class="h6">Golden Mile 9, Palm Jumeirah, Dubai</h6>
                                        </a>
                                    </li>
                                    <li class="animate fadein-Up" data-delay="0.2s">
                                        <a href="tel:+971234567" class="h-contact-us__list__item">
                                            <div class="round-btn">
                                                <img src="assets/svg/call.svg" alt="icon" width="23" height="23">
                                            </div>
                                            <h6 class="h6">+971 234 567</h6>
                                        </a>
                                    </li>
                                    <li class="animate fadein-Up" data-delay="0.3s">
                                        <a href="tel:+971234567" class="h-contact-us__list__item">
                                            <div class="round-btn">
                                                <img src="assets/svg/fax.svg" alt="icon" width="22" height="22">
                                            </div>
                                            <h6 class="h6">+971 234 567</h6>
                                        </a>
                                    </li>
                                    <li class="animate fadein-Up" data-delay="0.4s">
                                        <a href="mailto:office@dubairapidproperties.com"
                                            class="h-contact-us__list__item">
                                            <div class="round-btn">
                                                <img src="assets/svg/email.svg" alt="icon" width="25" height="25">
                                            </div>
                                            <h6 class="h6">office@dubairapidproperties.com</h6>
                                        </a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div class="col_4">
                            <div class="h-contact-us__figure">
                                <div class="img-wrapper">
                                    <img src="assets/images/dot.jpg" data-src="assets/images/home/h-contact-us.jpg"
                                        alt="contact us" width="508" height="697" class="img-hack lazy-img">
                                </div>
                                <a href="javascript:;" class="btn btn--white btn--icon animate fadein-Up"
                                    data-delay="0.2s">CONTACT US</a>
                            </div>
                        </div>
                        <div class="col_4">
                            <div class="h-contact-us__form primary-bg">
                                <form action="javascript:;">
                                    <div class="form-field form-field--transparent animate fadein-Up" data-delay="0.1s">
                                        <input type="text" class="form-field__control" placeholder="Your Full Name">

                                    </div>
                                    <div class="form-field form-field--transparent animate fadein-Up" data-delay="0.2s">
                                        <input type="email" class="form-field__control" placeholder="Your Email">

                                    </div>
                                    <div class="form-field form-field--transparent animate fadein-Up" data-delay="0.3s">
                                        <input type="tel" class="form-field__control" placeholder="Your Contat No.">
                                    </div>
                                    <div class="form-field form-field--transparent animate fadein-Up" data-delay="0.4s">
                                        <textarea class="form-field__control" placeholder="Your Message"></textarea>
                                    </div>
                                    <div class="animate fadein-Up" data-delay="0.5s">
                                        <button class="btn btn--secondary btn--icon">SUBMIT</button>
                                        <!-- type="submit" temporay not use -->
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- blogs -->
            <section class="blogs light-gray-bg2 section">
                <div class="container">
                    <div class="generic-panel generic-panel--full">
                        <div class="generic-panel__leftside">
                            <span class="orange-title orange__bottom__line animate fadein-Up"
                                data-delay="0.1s">BLOGS</span>
                            <h2 class="h2  m-0 animate fadein-Up" data-delay="0.2s">Stay Updated With The Latest</h2>
                        </div>
                        <div class="generic-panel__rightside animate fadein-Up" data-delay="0.3s">
                            <a href="javascript:;" class="btn btn--primary btn--icon">EXPLORE ALL</a>
                        </div>
                    </div>
                </div>
                <div class="blogs-slider-wrapper">
                    <div class="swiper blogs-slider">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <a href="javascript:;" class="blogs-card">
                                    <div class="blogs-card__figure">
                                        <img src="assets/images/dot.jpg" data-src="assets/images/home/blog-1.jpg"
                                            alt="blog" class="img-hack lazy-img" width="460" height="352">
                                        <div class="box-date">
                                            <span class="box-date__day">21</span>
                                            <span class="box-date__month">October</span>
                                        </div>
                                    </div>
                                    <div class="blogs-card__text">
                                        <span class="orange-title orange-title--small">Blog</span>
                                        <h4 class="h4">Why 2021 Was The Year Of Real Estate Emerging?</h4>
                                        <p class="black-col line-clamp-3">Lorem Ipsum is simply dummy text of the
                                            printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy</p>
                                        <div class="round-btn">
                                            <img src="assets/svg/right-icon.svg" alt="icon" width="18" height="12">
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="swiper-slide">
                                <a href="javascript:;" class="blogs-card">
                                    <div class="blogs-card__figure">
                                        <img src="assets/images/dot.jpg" data-src="assets/images/home/blog-2.jpg"
                                            alt="blog" class="img-hack lazy-img" width="460" height="352">
                                        <div class="box-date">
                                            <span class="box-date__day">21</span>
                                            <span class="box-date__month">October</span>
                                        </div>
                                    </div>
                                    <div class="blogs-card__text">
                                        <span class="orange-title orange-title--small">Blog</span>
                                        <h4 class="h4">Why 2021 Was The Year Of Real Estate Emerging?</h4>
                                        <p class="black-col">Lorem Ipsum is simply dummy text of the printing and
                                            typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy</p>
                                        <div class="round-btn">
                                            <img src="assets/svg/right-icon.svg" alt="icon" width="18" height="12">
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="swiper-slide">
                                <a href="javascript:;" class="blogs-card">
                                    <div class="blogs-card__figure">
                                        <img src="assets/images/dot.jpg" data-src="assets/images/home/blog-1.jpg"
                                            alt="blog" class="img-hack lazy-img" width="460" height="352">
                                        <div class="box-date">
                                            <span class="box-date__day">21</span>
                                            <span class="box-date__month">October</span>
                                        </div>
                                    </div>
                                    <div class="blogs-card__text">
                                        <span class="orange-title orange-title--small">Blog</span>
                                        <h4 class="h4">Why 2021 Was The Year Of Real Estate Emerging?</h4>
                                        <p class="black-col">Lorem Ipsum is simply dummy text of the printing and
                                            typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy</p>
                                        <div class="round-btn">
                                            <img src="assets/svg/right-icon.svg" alt="icon" width="18" height="12">
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div class="swiper-button-prev"></div>
                        <div class="swiper-button-next"></div>

                    </div>
                </div>
            </section>



        </main>

        <!-- Footer -->
        <?php include 'includes/footer.php'; ?>
        <?php include 'includes/scripts.php'; ?>

    </body>

</html>