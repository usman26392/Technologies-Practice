<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
        <title>How to </title>
        <link rel="icon" type="image/ico" href="/assets/favicon.ico">
        <meta name="format-detection" content="telephone=no">
        <!-- home CSS -->
        <link rel="stylesheet" href="/assets/css/home.min.css">
    </head>
    <body style="height: 49999px;">
        
        <main class="main-wrapper">
            <h2>icon bar horizontal</h2>
            <nav class="icon-bar">
                <a href="javascript:;" class="icon-bar__icon active">
                    <img src="./assets/svg/house-door-fill.svg" alt="home icon">
                </a>
                <a href="javascript:;" class="icon-bar__icon">
                    <img src="./assets/svg/search.svg" alt="home icon">
                </a>
                <a href="javascript:;" class="icon-bar__icon">
                    <img src="./assets/svg/chat-fill.svg " alt="home icon">
                </a>
                <a href="javascript:;" class="icon-bar__icon">
                    <img src="./assets/svg/globe.svg" alt="home icon">
                </a>
                <a href="javascript:;" class="icon-bar__icon">
                    <img src="./assets/svg/trash3.svg" alt="home icon">
                </a>
            </nav>

            <hr>
            
            <h2>icon bar vertical</h2>
            <nav class="icon-bar icon-bar--vertical">
                <a href="javascript:;" class="icon-bar__icon active">
                    <img src="./assets/svg/house-door-fill.svg" alt="home icon">
                </a>
                <a href="javascript:;" class="icon-bar__icon">
                    <img src="./assets/svg/search.svg" alt="home icon">
                </a>
                <a href="javascript:;" class="icon-bar__icon">
                    <img src="./assets/svg/chat-fill.svg " alt="home icon">
                </a>
                <a href="javascript:;" class="icon-bar__icon">
                    <img src="./assets/svg/globe.svg" alt="home icon">
                </a>
                <a href="javascript:;" class="icon-bar__icon">
                    <img src="./assets/svg/trash3.svg" alt="home icon">
                </a>
            </nav>

            <hr>

            <h2>tabs</h2>
            <div class="c-tabs">
                <ul class="c-tabs__list">
                    <li class="c-tabs__item">
                        <button class="c-tabs__button active" data-id="home">Home</button>
                    </li>
                    <li class="c-tabs__item">
                        <button class="c-tabs__button" data-id="profile">Profile</button>
                    </li>
                    <li class="c-tabs__item">
                        <button class="c-tabs__button" data-id="about">About</button>
                    </li>
                    <li class="c-tabs__item">
                        <button class="c-tabs__button" data-id="news">News</button>
                    </li>
                    <li class="c-tabs__item">
                        <button class="c-tabs__button" data-id="blog">Blog</button>
                    </li>
                    <li class="c-tabs__item">
                        <button class="c-tabs__button" data-id="article">Articles</button>
                    </li>
                </ul>
                <div class="c-tabs__content">
                    <div class="c-tabs__pane active" id="home">
                        <p>Home content: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, itaque.</p>
                    </div>
                    <div class="c-tabs__pane" id="profile">
                        <p>Profile content: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, itaque.</p>
                    </div>
                    <div class="c-tabs__pane" id="about">
                        <p>About content: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, itaque.</p>
                    </div>
                    <div class="c-tabs__pane" id="news">
                        <p>News content: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, itaque.</p>
                    </div>
                    <div class="c-tabs__pane" id="blog">
                        <p>blog content: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, itaque.</p>
                    </div>
                    <div class="c-tabs__pane" id="article">
                        <p>article content: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, itaque.</p>
                    </div>
                </div>
            </div>

            <hr>
            <h2>Accordion</h2>
            <div class="c-accordion">
                <div class="c-accordion__item">
                    <div class="c-accordion__header">
                        <button class="c-accordion__button">Accordion</button>
                    </div>
                    <div class="c-accordion__collapse">
                        <div class="c-accordion__collapse__body">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, nam.
                        </div>
                    </div>
                </div>
                <div class="c-accordion__item">
                    <div class="c-accordion__header">
                        <button class="c-accordion__button">Accordion</button>
                    </div>
                    <div class="c-accordion__collapse">
                        <div class="c-accordion__collapse__body">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, nam.
                        </div>
                    </div>
                </div>
                <div class="c-accordion__item">
                    <div class="c-accordion__header">
                        <button class="c-accordion__button">Accordion</button>
                    </div>
                    <div class="c-accordion__collapse">
                        <div class="c-accordion__collapse__body">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, nam.
                        </div>
                    </div>
                </div>
            </div>
            <hr>
            <hr>

            <h2>Modals</h2>
            <div class="modal" tabindex="-1">
                <div class="modal__dialog">
                    <div class="modal__content">
                        <div class="modal__header">
                            <button class="modal__cancel">X</button>
                        </div>
                        <div class="modal__body">
                            <h2>Lorem, ipsum dolor.</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium animi libero et quaerat rerum at possimus nemo quo ut aliquam sunt, maxime cumque beatae nulla odit, natus, doloribus esse minima.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium animi libero et quaerat rerum at possimus nemo quo ut aliquam sunt, maxime cumque beatae nulla odit, natus, doloribus esse minima.</p>
                        </div>
                        <div class="modal__footer"></div>
                    </div>
                </div>
            </div>
            <div class="modal-backdrop"></div>

            <button class="show-modal">show popup</button>

            <hr>
            <hr>
            <h2>custom cursor</h2>
            <section class="custom-cursor-sec">
                <div class="cursor">Drag</div>
                <div class="container">
                    <div class="custom-row">
                        <div class="col_lg_4">
                            <div class="box">
                                <h3 class="box__title">Lorem, ipsum dolor.</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, quo.</p>
                            </div>
                        </div>
                        <div class="col_lg_4">
                            <div class="box">
                                <h3 class="box__title">Lorem, ipsum dolor.</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, quo.</p>
                            </div>
                        </div>
                        <div class="col_lg_4">
                            <div class="box">
                                <h3 class="box__title">Lorem, ipsum dolor.</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, quo.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </main>




        

        
        <!-- home JS Files -->
        <script src="/assets/js/home.min.js"></script>
    </body>
</html>