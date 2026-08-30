<?php
// New Arrivals section for home page, Figma node 3-36
// Follows project guidelines: semantic HTML, BEM, grid, accessibility
?>
<section class="new-arrivals" aria-label="New Arrivals">
  <div class="container">
    <div class="custom-row new-arrivals__row">
      <div class="col_1 col_12">
        <div class="new-arrivals__title-wrap">
          <img src="/assets/svg/yellow-vector.svg" alt="Decorative leaf" class="new-arrivals__leaf" loading="lazy" />
          <h2 class="new-arrivals__title">NEW ARRIVALS</h2>
        </div>
        <div class="custom-row new-arrivals__cards">
          <div class="col_12 col_md_4">
            <a href="#" class="new-arrivals__card animate fadein-Up" data-delay="0.2s" aria-label="Explore Hoodies & Sweetshirt">
              <div class="new-arrivals__img">
                <img src="/assets/images/home/arrival-1.png" alt="Hoodies & Sweetshirt" class="img-hack" loading="lazy" />
              </div>
              <div class="new-arrivals__info">
                <div class="new-arrivals__text">
                  <div class="new-arrivals__name">Hoodies &amp; Sweetshirt</div>
                  <div class="new-arrivals__explore">Explore Now!</div>
                </div>
                <div class="new-arrivals__arrow-wrap">
                  <img src="/assets/svg/card-arrow.svg" alt="Arrow" class="new-arrivals__arrow" loading="lazy" />
                </div>
              </div>
            </a>
          </div>
          <div class="col_12 col_md_4">
            <a href="#" class="new-arrivals__card animate fadein-Up" data-delay="0.3s" aria-label="Explore Coats & Parkas">
              <div class="new-arrivals__img">
                <img src="/assets/images/home/arrival-2.png" alt="Coats & Parkas" class="img-hack" loading="lazy" />
              </div>
              <div class="new-arrivals__info">
                <div class="new-arrivals__text">
                  <div class="new-arrivals__name">Coats &amp; Parkas</div>
                  <div class="new-arrivals__explore">Explore Now!</div>
                </div>
                <div class="new-arrivals__arrow-wrap">
                  <img src="/assets/svg/card-arrow.svg" alt="Arrow" class="new-arrivals__arrow" loading="lazy" />
                </div>
              </div>
            </a>
          </div>
          <div class="col_12 col_md_4">
            <a href="#" class="new-arrivals__card animate fadein-Up" data-delay="0.4s" aria-label="Explore Tees & T-Shirt">
              <div class="new-arrivals__img">
                <img src="/assets/images/home/arrival-3.png" alt="Tees & T-Shirt" class="img-hack" loading="lazy" />
              </div>
              <div class="new-arrivals__info">
                <div class="new-arrivals__text">
                  <div class="new-arrivals__name">Tees &amp; T-Shirt</div>
                  <div class="new-arrivals__explore">Explore Now!</div>
                </div>
                <div class="new-arrivals__arrow-wrap">
                  <img src="/assets/svg/card-arrow.svg" alt="Arrow" class="new-arrivals__arrow" loading="lazy" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
