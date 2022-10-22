let nextBtn=document.querySelector('.our-job-next')
let prevBtn=document.querySelector('.our-job-prev')
let nextBtn1=document.querySelector('.our-events-next')
let prevBtn1=document.querySelector('.our-events-prev')
var swiper = new Swiper(".start-Swiper", {
    autoplay: {
    delay: 3000,
    },
    loop:true,
});
var swiper = new Swiper(".our-job-Swiper", {
    navigation: {
        nextEl: nextBtn,
        prevEl: prevBtn,
    },
    autoplay: {
        delay: 3000,
    },
    breakpoints:{
        276:{
            slidesPerView:1,
        },
        576:{
            slidesPerView:2,
        },
        992:{
            slidesPerView:3,
        }
    },
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
});
var swiper = new Swiper(".our-events-Swiper", {
    navigation: {
        nextEl: nextBtn1,
        prevEl: prevBtn1,
    },
    autoplay: {
        delay: 3000,
    },
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
});
var swiper = new Swiper(".photos-Swiper", {
    autoplay: {
        delay: 3000,
    },
    breakpoints:{
        276:{
            slidesPerView:1,
        },
        576:{
            slidesPerView:2,
        },
        992:{
            slidesPerView:3,
        },
        1200:{
            slidesPerView:4,
        }
    },
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
});
var swiper = new Swiper(".videos-Swiper", {
    autoplay: {
        delay: 3000,
    },
    breakpoints:{
        276:{
            slidesPerView:1,
        },
        576:{
            slidesPerView:2,
        },
        992:{
            slidesPerView:3,
        }
    },
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
});