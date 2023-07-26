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
  direction: "vertical",
  loop: true,
  slidesPerView: 3,
  spaceBetween: 16,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let data = [
  {
    car_model: "COOLRAY",
    benefit: "1 800 000 ₸",
    trade_in: "900 000 ₸",
    credit: "600 000 ₸",
    img_way: "1",
  },
  {
    car_model: "AZKARRA",
    benefit: "1 500 000 ₸",
    trade_in: "550 000 ₸",
    credit: "530 000 ₸",
    img_way: "2",
  },
  {
    car_model: "GEOMETRY",
    benefit: "1 000 000 ₸",
    trade_in: "800 000 ₸",
    credit: "700 000 ₸",
    img_way: "3",
  },
  {
    car_model: "TUGELLA",
    benefit: "2 200 000 ₸",
    trade_in: "700 000 ₸",
    credit: "400 000 ₸",
    img_way: "4",
  },
  {
    car_model: "MONJARO",
    benefit: "1 090 000 ₸",
    trade_in: "600 000 ₸",
    credit: "300 000 ₸",
    img_way: "5",
  },
];

let index = 0;

function makeOfferBlock(i) {
  $(".offer__info").html(`
          <div class="offer__title">
            GEELY <span style="color: #002d96"><b>${data[i].car_model}</b></span>
          </div>

          <div class="offer__benefit">
            <div class="offer__benefit_wrap">
              ВЫГОДА ДО  <span class="offer__benefit_large"> ${data[i].benefit}</span>
            </div>
          </div>

          <div class="offer__block">
            <div class="offer__item">
              <img src="./img/trade-in.png" alt="" />
              <div class="offer__text">
                <b>ВЫГОДА ПО ТРЕЙД-ИН</b><br />до
                <span class="offer__text_large">${data[i].trade_in}</span>
              </div>
            </div>
            <div class="offer__item">
              <img src="./img/credit.png" alt="" />
              <div class="offer__text">
                <b>ВЫГОДА ПО КРЕДИТУ</b><br /><b>от</b>
                <span class="offer__text_large">${data[i].credit}</span>
              </div>
            </div>
            <div class="offer__item">
              <img src="./img/present.png" alt="" />
              <div class="offer__text">
                <b>ПАКЕТ ДОП.ОБОРУДОВАНИЯ</b><br /><b>В ПОДАРОК</b>
                <span class="offer__text_large">300 000 ₸</span>
              </div>
            </div>
          </div>

          <div class="offer__btn-wrap">
            <button class="offer__btn btn btn_white">
              Записаться на тест-драйв
            </button>
            <button class="offer__btn btn btn_sky">
              Честная рассрочка <b>0.01%</b>
            </button>
            <button class="offer__btn btn btn_blue">Узнать цену</button>
          </div>
        `);
}
makeOfferBlock(index);
outerSwiper.on("slideChange", function () {
  let currentSlide = outerSwiper.realIndex;
  makeOfferBlock(currentSlide);
});

const offerClickButtons = document.querySelectorAll(".offer__btn");
const overlayClick = document.querySelector(".overlay-click");

const onCardClick = (e) => {
  e.preventDefault();
  overlayClick.classList.add("overlay-active");
  document.body.style.overflow = "hidden";
};

offerClickButtons.forEach((button) => {
  button.addEventListener("click", onCardClick);
});

overlayClick.addEventListener("click", function (e) {
  if (
    !e.target.closest(".popup-wrap") &&
    !e.target.classList.contains("popup-wrap")
  ) {
    document.body.style.overflow = "visible";
    overlayClick.classList.remove("overlay-active");
  }
});

const popupClose = document.querySelector(".popup-close");
popupClose.addEventListener("click", function (e) {
  document.body.style.overflow = "visible";
  const overlayClick = document.querySelector(".overlay-click");
  overlayClick.classList.remove("overlay-active");
});
