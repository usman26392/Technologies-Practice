
<!-- Vendors CSS -->
<link rel="stylesheet" href="https://unpkg.com/swiper@8/swiper-bundle.min.css" type="text/css">
<!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css" type="text/css"> -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" type="text/css">
<!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.5/jquery.mCustomScrollbar.css" /> -->
<!-- <link href="https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css" rel="stylesheet" type="text/css" /> -->

<!-- <link rel="stylesheet" href="/assets/css/jquery.jqplot.min.css"> -->

<link rel="icon" type="image/x-icon" href="/favicon.png">
<link rel="preload" as="font">

<!-- preload css and js -->
<!-- <link rel="preload" href="/assets/css/custom-main.css" as="style"> -->


<!-- normal Custom CSS -->
<link rel="stylesheet" href="/assets/css/custom-main.css">
    
<!-- <link rel="stylesheet" href="/assets/css/custom-main-rtl.css"> -->

<style>

.lds-wrapper {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: #F2F2F2;
        z-index: 99999;
    }

    .lds-ellipsis {
        display: inline-block;
        position: relative;
        width: 80px;
        height: 80px;
        position: fixed;
        z-index: 9999;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
    }

    .lds-ellipsis div {
        position: absolute;
        top: 33px;
        width: 13px;
        height: 13px;
        border-radius: 50%;
        background: #fff;
        animation-timing-function: cubic-bezier(0, 1, 1, 0);
        background: #000;
    }
    .lds-ellipsis div:nth-child(1) {
        left: 8px;
        animation: lds-ellipsis1 0.6s infinite;
        background: #931E5A;
    }
    .lds-ellipsis div:nth-child(2) {
        left: 8px;
        animation: lds-ellipsis2 0.6s infinite;
    }
    .lds-ellipsis div:nth-child(3) {
        left: 32px;
        animation: lds-ellipsis2 0.6s infinite;
        background: #931E5A;
    }
    .lds-ellipsis div:nth-child(4) {
        left: 56px;
        animation: lds-ellipsis3 0.6s infinite;
        background: #931E5A;
    }
    
    @keyframes lds-ellipsis1 {
        0% {
            transform: scale(0);
        }
        100% {
            transform: scale(1);
        }
    }

    @keyframes lds-ellipsis3 {
        0% {
            transform: scale(1);
        }
        100% {
            transform: scale(0);
        }
    }

    @keyframes lds-ellipsis2 {
        0% {
            transform: translate(0, 0);
        }
        100% {
            transform: translate(24px, 0);
        }
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