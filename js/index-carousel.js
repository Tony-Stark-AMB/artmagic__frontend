// import Aos from "aos.js";
import {Swiper, Navigation, Pagination} from "./import.js";

// console.log(Aos)

export const {mainBanner, catalogCarousel} = {
 
  mainBanner: {
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    speed: 2000,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
  },
  catalogCarousel: {
    slidesPerView: 5,
    slidesPerGroup: 5,
    speed: 2000,
    pagination: {
      clickable: true,
      el: ".swiper-pagination",
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
  },
  modules: [Navigation, Pagination]
}

new Swiper(".main__banner", mainBanner);
new Swiper(".main__catalog__list__wrap", catalogCarousel);



