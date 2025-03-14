import Swiper from 'swiper'
import { Navigation, Controller } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

document.addEventListener("projectLoad", () => {
    Swiper.use([Navigation, Controller])

    var swiperThumbs = new Swiper(".thumbnailSwiper", {
        slidesPerView: 3,
        spaceBetween: 15,
        centeredSlides: true,
        initialSlide: 0,
        
        threshold: 10,
        loop: true,
        slideToClickedSlide: true,
        
        
    });


    var swiperMain = new Swiper(".mainSwiper", {
        slidesPerView: 1.1,
        centeredSlides: true,
        threshold: 10,
        loop: true,
        loopAdditionalSlides: 0,
        spaceBetween: 15,
        
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        thumbs: {
            swiper: swiperThumbs,
        }
    });

    swiperMain.controller.control = swiperThumbs;
    swiperThumbs.controller.control = swiperMain
})