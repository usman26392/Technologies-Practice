<?php
// Favourites section (Young's Favourite) - semantic, BEM, grid, accessible
// Place in includes/home-sections/favourites.php
// Images from Figma (localhost assets)
?>
<section class="favourites">
  <div class="container">
    <div class="favourites__header">
      <div class="favourites__title-wrap">
        <h2 class="favourites__title">
          Young’s Favourite
        </h2>
        <img class="favourites__vector" src="/assets/svg/yellow-vector.svg" alt="" aria-hidden="true" />
      </div>
    </div>
    <div class="custom-row favourites__cards">
      <div class="col_12 col_md_6">
        <a class="favourites__card animate fadein-Up" data-delay="0.2s" href="#" tabindex="0">
          <div class="favourites__img-wrap">
            <img class="favourites__img" src="/assets/images/home/favourite-1.png" alt="Trending on instagram product" loading="lazy" />
          </div>
          <div class="favourites__info">
            <div class="favourites__text">
              <span class="favourites__card-title">Trending on instagram</span>
              <span class="favourites__card-subtitle">Explore Now!</span>
            </div>
            <span class="favourites__arrow">
              <img src="/assets/svg/card-arrow.svg" alt="" aria-hidden="true" />
            </span>
          </div>
        </a>
      </div>
      <div class="col_12 col_md_6">
        <a class="favourites__card animate fadein-Up" data-delay="0.3s" href="#" tabindex="0">
          <div class="favourites__img-wrap">
            <img class="favourites__img" src="/assets/images/home/favourite-2.png" alt="All Under $40 product" loading="lazy" />
          </div>
          <div class="favourites__info">
            <div class="favourites__text">
              <span class="favourites__card-title">All Under $40</span>
              <span class="favourites__card-subtitle">Explore Now!</span>
            </div>
            <span class="favourites__arrow">
              <img src="/assets/svg/card-arrow.svg" alt="" aria-hidden="true" />
            </span>
          </div>
        </a>
      </div>
    </div>
  </div>
</section>
