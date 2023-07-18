import SearchModule from './SearchModule.js'
export default function SwiperModule() {
    function functionSlider(element, isLoop, isCenter, betWeenInit, autoplay, effects, breakpoint) {
        const swiperSlider = document.querySelectorAll(element)
        if (swiperSlider) {
            swiperSlider.forEach(item => {
                const swiper = item.querySelector('.swiper')
                const pagi = item.querySelector('.swiper-pagination')
                const next = item.querySelector('.swiper-next')
                const prev = item.querySelector('.swiper-prev')
                var slide = new Swiper(swiper, {
                    watchSlidesProgress: true,
                    speed: 1200,
                    autoplay: autoplay,
                    pagination: {
                        el: pagi,
                        type: 'bullets',
                        clickable: true,
                    },
                    navigation: {
                        nextEl: next,
                        prevEl: prev,
                    },
                    // slidesPerGroup: 2,
                    centeredSlides: isCenter,
                    loop: isLoop,
                    spaceBetween: betWeenInit,
                    effect: effects,
                    fadeEffect: {
                        crossFade: true
                    },
                    breakpoints: breakpoint,
                });
            })
        }
    }

    // element , isLoop, isCenter, betWeenInit, autoPlay, effects,breackpoint
    functionSlider(".story-slider", false, false, 24, { delay: 3000 }, "slide", {
        0: {
            slidesPerView: 1.2,
            freeMode: true,
        },
        500: {
            slidesPerView: 2.2,

        },
        768: {
            slidesPerView: 3,

        },
        1200: {
            slidesPerView: 3,
        }
    })

    function sliderParalax() {
        const swiperSliderParalax = document.querySelectorAll("element")
        if (swiperSliderParalax) {
            swiperSliderParalax.forEach(item => {
                const swiper = item.querySelector('.swiper')
                const pagi = item.querySelector('.swiper-pagination')
                const next = item.querySelector('.swiper-next')
                const prev = item.querySelector('.swiper-prev')
                var slide = new swiper(swiper, {
                    slidesPerView: 1,
                    spaceBetween: 0,
                    // loopedSlides: 6,
                    loop: false,
                    autoplay: {
                        delay: 7000,
                    },
                    pagination: {
                        el: pagi,
                        type: "bullets",
                    },
                    navigation: {
                        nextEl: next,
                        prevEl: prev,
                    },
                    speed: 1000,
                    effect: "coverflow",
                    parallax: true,
                    grabCursor: true,
                    centeredSlides: true,
                    coverflowEffect: {
                        rotate: 0.05,
                        depth: 0,
                        stretch: 0,
                        modifier: 1,
                        slideShadows: false,
                    },
                    on: {
                        init: function() {
                            let swiper = this;
                            for (let i = 0; i < swiper.slides.length; i++) {
                                $(swiper.slides[i])
                                    .find(".hbn-img-inner")
                                    .attr({
                                        "data-swiper-parallax": 0.9 * swiper.width,
                                        "data-swiper-paralalx-opacity": 0.1,
                                    });
                            }
                            let index = swiper.activeIndex;
                            $(swiper.slides).removeClass("active");
                            $(swiper.slides[index]).addClass("active");
                        },
                        resize: function() {
                            this.update();
                        },
                    },
                })
            })
        }
    }
    //slide reviews
    var totalSlides = $('.reviews_slide .swiper-slide').length;
    var swiper = new Swiper(".reviews_slide", {
        slidesPerView: 1,
        pagination: {
            el: '.swiper-pagination',
            renderBullet: function(index, className) {
                if (index === totalSlides - 1) {
                    let number_zero = (index < 9 ? '0' : '');
                    return '<span class="' + className + '"></span>' + `<span class="number_total_slide">${number_zero}${totalSlides}</span>` + '';
                }
                if (index == 0) {
                    return `<span class="number_total_slide">01</span>` + '<span class="' + className + '"></span>';
                } else {
                    return '<span class="' + className + '"></span>';
                }
            },
        },
    });

    //slide đói tác
    var partner = new Swiper(".partner_slide", {
        slidesPerView: 5,
        loop: true,
        autoplay: {
            delay: 3000
        },
        spaceBetween: 30,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
                freeMode: true,
            },
            500: {
                slidesPerView: 3,

            },
            768: {
                slidesPerView: 4,

            },
            1200: {
                slidesPerView: 5,
            }
        },
    });
    sliderParalax(".hbn-slider")
    var storySlider = new Swiper(".story-slider .swiper", {
        // freeMode: true,
        watchSlidesProgress: true,
        speed: 1200,
        autoplay: {
            delay: 3000,
        },
        pagination: {
            el: '.story-slider .swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        navigation: {
            nextEl: '.story-slider .swiper-next',
            prevEl: '.story-slider .swiper-prev',
        },
        // slidesPerGroup: 2,
        centeredSlides: false,
        loop: false,
        spaceBetween: 24,
        // effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        breakpoints: {
            0: {
                slidesPerView: 1.2,
                freeMode: true,
            },
            500: {
                slidesPerView: 2.2,

            },
            768: {
                slidesPerView: 3,

            },
            1200: {
                slidesPerView: 3,
            }
        }
    });
    // Slider Control
    // topsSliderMain.controller.control = topSliderThumb;
    // topSliderThumb.controller.control = topsSliderMain;
}