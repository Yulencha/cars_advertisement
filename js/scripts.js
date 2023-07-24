// $(document).ready(function () {
//   $(".slider-big").slick({
//     slidesToShow: 1,
//     dots: true,
//     arrows: false,
//   });

//   $(".slider-mini").slick({
//     vertical: true,
//     verticalSwiping: true,
//     slidesToShow: 3,
//     prevArrow:
//       '<input class="slick-prev" type="image" src="./img/prevArrow.png" alt="вверх»"></input>',
//     nextArrow:
//       '<input class="slick-next" type="image" src="./img/nextArrow.png" alt="вниз»"></input>',
//   });

// let data = [
//   {
//     car_model: "COOLRAY",
//     benefit: "1 800 000 ₸",
//     trade_in: "900 000 ₸",
//     credit: "600 000 ₸",
//     img_way: "1",
//   },
//   {
//     car_model: "AZKARRA",
//     benefit: "1 500 000 ₸",
//     trade_in: "550 000 ₸",
//     credit: "530 000 ₸",
//     img_way: "2",
//   },
//   {
//     car_model: "GEOMETRY",
//     benefit: "1 000 000 ₸",
//     trade_in: "800 000 ₸",
//     credit: "700 000 ₸",
//     img_way: "3",
//   },
//   {
//     car_model: "TUGELLA",
//     benefit: "2 200 000 ₸",
//     trade_in: "700 000 ₸",
//     credit: "400 000 ₸",
//     img_way: "4",
//   },
//   {
//     car_model: "MONJARO",
//     benefit: "1 090 000 ₸",
//     trade_in: "600 000 ₸",
//     credit: "300 000 ₸",
//     img_way: "5",
//   },
// ];
// let index = 0;
// function makeOfferBlock(i) {

//   $(".offer").html(`
//   <div class="offer__wrap">
//       <div class="offer__cars-slider">
//         <div class="offer__col1 slider-mini">
//           <div class="slider-mini__item">
//             <img src="./img/cars_color/${data[index].img_way}/1.png" alt="Вид спереди" />
//           </div>
//           <div class="slider-mini__item">
//             <img src="./img/cars_color/${data[index].img_way}/2.png" alt="Вид сбоку" />
//           </div>
//           <div class="slider-mini__item">
//             <img src="./img/cars_color/${data[index].img_way}/3.png" alt="Салон1" />
//           </div>
//           <div class="slider-mini__item">
//             <img src="./img/cars_color/${data[index].img_way}/4.png" alt="Салон2" />
//           </div>
//           <div class="slider-mini__item">
//             <img src="./img/cars_color/${data[index].img_way}/5.png" alt="Салон3" />
//           </div>
//         </div>
//         <div class="offer__col2 slider-big">
//           <div class="slider-big__item">
//             <img src="./img/cars_color/1/main.png" alt="Вид сбоку" />
//           </div>
//           <div class="slider-big__item">
//             <img src="./img/cars_color/2/main.png" alt="Вид сбоку" />
//           </div>
//           <div class="slider-big__item">
//             <img src="./img/cars_color/3/main.png" alt="Вид сбоку" />
//           </div>
//           <div class="slider-big__item">
//             <img src="./img/cars_color/4/main.png" alt="Вид сбоку" />
//           </div>
//           <div class="slider-big__item">
//             <img src="./img/cars_color/5/main.png" alt="Вид сбоку" />
//           </div>
//         </div>
//       </div>

//       <div class="offer__cars-info">
//         <img src="./img/guarantee.png" alt="6 лет гарантии" />
//         <img src="./img/equipment.png" alt="Подобрать комплектацию" />
//       </div>
//       <div class="offer__info">
//         <div class="offer__title">
//           GEELY <span style="color: #002d96"><b>COOLRAY</b></span>
//         </div>

//         <div class="offer__benefit">
//           <div class="offer__benefit_wrap">
//             ВЫГОДА ДО <span class="offer__benefit_large"> 1 800 000 ₸</span>
//           </div>
//         </div>

//         <div class="offer__block">
//           <div class="offer__item">
//             <img src="./img/trade-in.png" alt="" />
//             <div class="offer__text">
//               <b>ВЫГОДА ПО ТРЕЙД-ИН</b><br />до
//               <span class="offer__text_large">900 000 ₸</span>
//             </div>
//           </div>
//           <div class="offer__item">
//             <img src="./img/credit.png" alt="" />
//             <div class="offer__text">
//               <b>ВЫГОДА ПО КРЕДИТУ</b><br /><b>от</b>
//               <span class="offer__text_large">600 000 ₸</span>
//             </div>
//           </div>
//         </div>
//         <div class="offer__block">
//           <div class="offer__item">
//             <img src="./img/present.png" alt="" />
//             <div class="offer__text">
//               <b>ПАКЕТ ДОП.ОБОРУДОВАНИЯ</b><br /><b>В ПОДАРОК</b>
//               <span class="offer__text_large">300 000 ₸</span>
//             </div>
//           </div>
//         </div>
//         <div class="offer__btn-wrap">
//           <button class="offer__btn btn btn_white">
//             Записаться на тест-драйв
//           </button>
//           <button class="offer__btn btn btn_sky">
//             Честная рассрочка <b>0.01%</b>
//           </button>
//           <button class="offer__btn btn btn_blue">Узнать цену</button>
//         </div>
//       </div>
//     </div>`);
// }
//   makeOfferBlock(index);
//   $(".slider-big").on("afterChange", function (event, slick, currentSlide) {
//     // index = currentSlide;
//     console.log(currentSlide);
//     // console.log(data[index]);
//     // makeOfferBlock(index);
//   });
// });

const outerSwiper = new Swiper(".outer-swiper", {
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
});

const innerSwiper = new Swiper(".inner-swiper", {
  // Optional parameters
  direction: "vertical",
  loop: true,
  slidesPerView: 3,
  spaceBetween: 16,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
