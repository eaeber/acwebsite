import Swiper from 'swiper'
import { Navigation, Controller } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

document.addEventListener("projectLoad", () => {
    Swiper.use([Navigation, Controller])

    var swiperThumbs = new Swiper(".thumbnailSwiper", {
        slidesPerView: 5,
        spaceBetween: 15,
        centeredSlides: true,
        initialSlide: 0,

        threshold: 10,
        loop: false,
        slideToClickedSlide: true,


    });


    var swiperMain = new Swiper(".mainSwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        threshold: 10,
        loop: false,
        loopAdditionalSlides: 0,
        spaceBetween: 15,

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        thumbs: {
            swiper: swiperThumbs,
        },

        breakpoints: {
            640: {
                slidesPerView: 1.1,
                spaceBetween: 15,
            }
        }
    });

    swiperMain.controller.control = swiperThumbs;
    swiperThumbs.controller.control = swiperMain;

    swiperMain.params.controller.by = 'slide';
    swiperThumbs.params.controller.by = 'slide';

    swiperMain.update();
    swiperThumbs.update();
})