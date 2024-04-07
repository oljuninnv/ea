<template>
  <section class="section">
    <div class="container hero flex mobile:flex-col desktop:flex-row">
      <div class="hero__text">
        <img
          src="../assets/img/HomePage/Over1000.svg"
          alt="Over1000.svg"
          class="hero__text__img__over"
        />
        <h1 class="text-3xl font-bold text-center mb-10">
          Исследуйте еду со всего <span class="change_color">мира</span>
        </h1>
        <p class="hero__text__p text-wrap desktop:w-auto">
          EatLy поможет вам установить цели экономии, получить предложения по
          возврату наличных, ознакомиться с более подробной информацией в
          разделе Отказ от ответственности и получать зарплату на два дня раньше
          срока. Получите бонус в размере ₽20.
        </p>
        <div class="button__list desktop:flex-row mobile:flex mobile:flex-col mobile:items-center">
          <button class="start button_animation">Начать</button>
          <button class="prof button_animation">Стать проффесионалом</button>
        </div>
        <img
          src="../assets/img/HomePage/Trust_Reviews.svg"
          alt="Trust_Reviews.svg"
          class="hero__text__img__reviews"
        />
      </div>
      <img src="../assets/img/HomePage/Hero.svg" alt="Hero.svg" />
    </div>
  </section>

  <section class="section">
    <div class="results ">
      <ul class="results__list flex mobile:flex-col mobile:gap-5 desktop:flex-row desktop:justify-around desktop:min-h-[12rem] p-2">
        <li class="results__item desktop:w-[13rem]">
          <h2 class="results__item__h2">10К+</h2>
          <p class="results__item__p">Довольных клиентов по всему миру</p>
        </li>
        <li class="results__item desktop:w-[13rem]">
          <h2 class="results__item__h2">4М</h2>
          <p class="results__item__p">
            Продаются полезные блюда, в том числе молочные коктейли.
          </p>
        </li>
        <li class="results__item desktop:w-[13rem]">
          <h2 class="results__item__h2">99,99%</h2>
          <p class="results__item__p">
            Надежная поддержка клиентов, мы предоставляем отличные впечатления
          </p>
        </li>
      </ul>
    </div>
  </section>

  <section class="section mt-6 h-max">
    <div class="container quality flex mobile:flex-col-reverse desktop:flex-row" id="mobile">
      <img src="../assets/img/HomePage/Mobile.svg" alt="Mobile.svg" />
      <div class="flex flex-col monile:items-center desktop:justify-center desktop:items-center desktop:gap-5">
        <h2 class="text-3xl font-bold mb-10 text-center">
          Высочайшее <span class="change_color">качество</span> для вашего
          здоровья
        </h2>
        <ul class="quality__list break-words">
          <li class="quality__item">
            Продукты высшего качества готовятся из ингредиентов, которые богаты
            необходимыми витаминами и минералами.
          </li>
          <li class="quality__item">
            Эти продукты способствуют общему оздоровлению, поддерживая здоровое
            пищеварение и повышая иммунитет
          </li>
        </ul>
        <button class="quality__button button_animation">Скачать ➜</button>
      </div>
    </div>
  </section>

  <section class="section container m-auto">
    <div
      class="container border-solid border-b-[1px] border-b-[#cbcbcb]"
      id="restorans"
    >
      <h2 class="style__h2 mb-10">
        Наш топ <span class="change_color">ресторанов</span>
      </h2>
      <ul class="m-auto w-[75%] flex gap-5 justify-between mobile:flex-col desktop:flex-row">
        <li class="restuarants__item">
          <div>
            <img
              src="../assets/img/HomePage/restuarants/chicken_king.svg"
              alt="chiken_king.svg"
            />
            <div class="restuarants__item__text m-2 space-y-2 pl-2 pr-2">
              <span
                class="bg-[#F7EDD0] text-[#DAA31A] h-[23px] block w-[4.5rem] text-center rounded"
                >Healthy</span
              >
              <h3 class="text-xl text-[#323142] font-bold">The Chicken King</h3>
              <div
                class="flex flex-row w-full mt-0 justify-between items-center"
              >
                <div>
                  <p class="flex flex-row items-center">
                    24min •
                    <img
                      class="h-[20%]"
                      src="../assets/img/HomePage/restuarants/Star.svg"
                      alt="stars"
                    />
                    4.8
                  </p>
                </div>
                <div>
                  <img
                    class="button_animation h-8"
                    src="../assets/img/HomePage/restuarants/Bookmark.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </li>
        <li class="restuarants__item">
          <div>
            <img
              src="../assets/img/HomePage/restuarants/burger_king.svg"
              alt="burger_king.svg"
            />
            <div class="restuarants__item__text m-2 space-y-2 pl-2 pr-2">
              <span
                class="bg-[#F7C5BA] text-[#FB471D] h-[23px] block w-[4.5rem] text-center rounded"
                >Trending</span
              >
              <h3 class="text-xl text-[#323142] font-bold">The Burger King</h3>
              <div
                class="flex flex-row w-full mt-0 justify-between items-center"
              >
                <div>
                  <p class="flex flex-row items-center">
                    24min •
                    <img
                      class="h-[20%]"
                      src="../assets/img/HomePage/restuarants/Star.svg"
                      alt="stars"
                    />
                    4.9
                  </p>
                </div>
                <div>
                  <img
                    class="button_animation h-8"
                    src="../assets/img/HomePage/restuarants/Bookmark.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </li>
        <li class="restuarants__item">
          <div>
            <img
              src="../assets/img/HomePage/restuarants/chicken_king.svg"
              alt="chiken_king.svg"
            />
            <div class="restuarants__item__text m-2 space-y-2 pl-2 pr-2">
              <span
                class="bg-[#F7EDD0] text-[#DAA31A] h-[23px] block w-[4.5rem] text-center rounded"
                >Healthy</span
              >
              <h3 class="text-xl text-[#323142] font-bold">The Chicken King</h3>
              <div
                class="flex flex-row w-full mt-0 justify-between items-center"
              >
                <div>
                  <p class="flex flex-row items-center">
                    24min •
                    <img
                      class="h-[20%]"
                      src="../assets/img/HomePage/restuarants/Star.svg"
                      alt="stars"
                    />
                    4.8
                  </p>
                </div>
                <div>
                  <img
                    class="button_animation h-8"
                    src="../assets/img/HomePage/restuarants/Bookmark.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <a
        v-if="this.$isMobile()"
        href="#"
        class="view-more left-[70%] top-2 !relative hover:left-[80%] transition-all"
        >Ещё -></a
      >
      <a v-else
        href="#"
        class="view-more left-[90%] top-5 !relative hover:left-[90.5%] transition-all"
        >Ещё ⭢</a
      >
    </div>
  </section>

  <section class="section container m-auto">
    <div
      class="container border-solid border-b-[1px] border-b-[#cbcbcb]"
      id="delicious"
    >
      <h2 class="style__h2 mb-10">
        Наш топ <span class="change_color">блюд</span>
      </h2>
      <ul class="m-auto flex gap-5 justify-between mobile:flex-col desktop:flex-row">
        <li class="w-[25%] mobile:w-[100%] bg-[#ffffff] rounded-3xl p-5 shadow">
          <img
            src="../assets/img/HomePage/dishes/Chicken_Hell.svg"
            alt="блюдо"
          />
          <span
            class="bg-[#F7EDD0] text-[#DAA31A] h-[23px] block w-[4.5rem] text-center rounded"
            >Healthy
          </span>
          <h3 class="text-xl text-[#323142] font-bold">Chicken Hell</h3>
          <div class="flex flex-row w-full mt-0 justify-between items-center">
            <p class="flex flex-row items-center">
              24min •
              <img
                class="h-[20%]"
                src="../assets/img/HomePage/restuarants/Star.svg"
                alt="stars"
              />
              4.8
            </p>
          </div>
          <div class="flex flex-row w-full mt-0 justify-between items-center">
            <p class="flex flex-row items-center">₽12.99</p>
            <img
              class="h-[5%] button_animation"
              src="../assets/img/HomePage/dishes/Add.svg"
              alt="add"
            />
          </div>
        </li>
        <li class="w-[25%] mobile:w-[100%] bg-[#ffffff] rounded-3xl p-5 shadow">
          <img src="../assets/img/HomePage/dishes/Swe_Dish.svg" alt="блюдо" />
          <span
            class="bg-[#F7C5BA] text-[#FB471D] h-[23px] block w-[4.5rem] text-center rounded"
            >Trending
          </span>
          <h3 class="text-xl text-[#323142] font-bold">Chicken Hell</h3>
          <div class="flex flex-row w-full mt-0 justify-between items-center">
            <p class="flex flex-row items-center">
              34min •
              <img
                class="h-[20%]"
                src="../assets/img/HomePage/restuarants/Star.svg"
                alt="stars"
              />
              4.8
            </p>
          </div>
          <div class="flex flex-row w-full mt-0 justify-between items-center">
            <p class="flex flex-row items-center">₽19.99</p>
            <img
              class="h-[5%] button_animation"
              src="../assets/img/HomePage/dishes/Add.svg"
              alt="add"
            />
          </div>
        </li>
        <li class="w-[25%] mobile:w-[100%] bg-[#ffffff] rounded-3xl p-5 shadow">
          <img src="../assets/img/HomePage/dishes/Swe_Dish2.svg" alt="блюдо" />
          <span
            class="bg-[#33ac6446] text-[#309d5c] h-[23px] block w-[4.5rem] text-center rounded"
            >Supreme
          </span>
          <h3 class="text-xl text-[#323142] font-bold">Chicken Hell</h3>
          <div class="flex flex-row w-full mt-0 justify-between items-center">
            <p class="flex flex-row items-center">
              34min •
              <img
                class="h-[20%]"
                src="../assets/img/HomePage/restuarants/Star.svg"
                alt="stars"
              />
              4.8
            </p>
          </div>
          <div class="flex flex-row w-full mt-0 justify-between items-center">
            <p class="flex flex-row items-center">₽19.99</p>
            <img
              class="h-[5%] button_animation"
              src="../assets/img/HomePage/dishes/Add.svg"
              alt="add"
            />
          </div>
        </li>
        <li class="w-[25%] mobile:w-[100%] bg-[#ffffff] rounded-3xl p-5 shadow">
          <img
            src="../assets/img/HomePage/dishes/Chicken_Hell.svg"
            alt="блюдо"
          />
          <span
            class="bg-[#F7EDD0] text-[#DAA31A] h-[23px] block w-[4.5rem] text-center rounded"
            >Healthy
          </span>
          <h3 class="text-xl text-[#323142] font-bold">Chicken Hell</h3>
          <div class="flex flex-row w-full mt-0 justify-between items-center">
            <p class="flex flex-row items-center">
              24min •
              <img
                class="h-[20%]"
                src="../assets/img/HomePage/restuarants/Star.svg"
                alt="stars"
              />
              4.8
            </p>
          </div>
          <div class="flex flex-row w-full mt-0 justify-between items-center">
            <p class="flex flex-row items-center">₽12.99</p>
            <img
              class="h-[5%] button_animation"
              src="../assets/img/HomePage/dishes/Add.svg"
              alt="add"
            />
          </div>
        </li>
        <li class="w-[25%] mobile:w-[100%] bg-[#ffffff] rounded-3xl p-5 shadow">
          <img src="../assets/img/HomePage/dishes/Swe_Dish.svg" alt="блюдо" />
          <span
            class="bg-[#F7C5BA] text-[#FB471D] h-[23px] block w-[4.5rem] text-center rounded"
            >Trending
          </span>
          <h3 class="text-xl text-[#323142] font-bold">Chicken Hell</h3>
          <div class="flex flex-row w-full mt-0 justify-between items-center">
            <p class="flex flex-row items-center">
              34min •
              <img
                class="h-[20%]"
                src="../assets/img/HomePage/restuarants/Star.svg"
                alt="stars"
              />
              4.8
            </p>
          </div>
          <div class="flex flex-row w-full mt-0 justify-between items-center">
            <p class="flex flex-row items-center">₽19.99</p>
            <img
              class="h-[5%] button_animation"
              src="../assets/img/HomePage/dishes/Add.svg"
              alt="add"
            />
          </div>
        </li>
      </ul>
      <a
        v-if="this.$isMobile()"
        href="#"
        class="view-more left-[70%] top-2 !relative hover:left-[80%] transition-all"
        >Ещё -></a
      >
      <a v-else
        href="#"
        class="view-more left-[90%] top-5 !relative hover:left-[90.5%] transition-all"
        >Ещё ⭢</a
      >
    </div>
  </section>

  <section class="section w-full flex flex-col items-center m-auto">
    <div class="container desktop:pl-8 border-solid border-b-[1px] border-b-[#cbcbcb]">
      <div class="" id="control">
        <h2 class=" text-3xl text-center leading-[3rem] mb-4 font-bold mobile:text-center">
          Контролируйте <span class="change_color">Покупки</span> с помощью
          Дашборда
        </h2>
        <div class="flex justify-between w-full mobile:flex-col desktop:flex-row">
          <ul class="space-y-4">
            <li
              class="bg-white w-[15rem] h-[9rem] flex rounded-2xl p-4 shadow-lg button_animation"
            >
              <img src="../assets/img/HomePage/dishes/Chicken_Hell.svg" alt="блюдо" />
              <div class="flex flex-col w-full p-2">
                <span class="font-bold text-xl">Chicken Hell</span>
                <span class="font-semibold">В пути</span>
                <p class="text-right mt-2">17:09</p>
              </div>
            </li>
            <li
              class="bg-white w-[15rem] h-[9rem] flex rounded-2xl p-4 shadow-lg button_animation"
            >
              <img src="../assets/img/HomePage/dishes/Swe_Dish.svg" alt="блюдо" />
              <div class="flex flex-col w-full p-2">
                <span class="font-bold text-xl">Chicken Hell</span>
                <span class="font-semibold">Доставлен</span>
                <p class="text-right mt-2">Вчера</p>
              </div>
            </li>
            <li
              class="bg-white w-[15rem] h-[9rem] flex rounded-2xl p-4 shadow-lg button_animation"
            >
              <img src="../assets/img/HomePage/dishes/Swe_Dish2.svg" alt="блюдо" />
              <div class="flex flex-col w-full p-2">
                <span class="font-bold text-xl">Chicken Hell</span>
                <span class="font-semibold text-[#f73c3c]">Отменено</span>
                <p class="text-right mt-2">Вчера</p>
              </div>
            </li>
          </ul>
          <div
            class="bg-white flex-col p-4 desktop:w-[25%] mobile:mt-6 mobile:w-[15rem] h-full shadow-lg rounded-xl mr-4"
          >
            <div class="flex justify-between items-center">
              <p class="font-bold text-xl">Покупки</p>
              <select
                name=""
                id=""
                class="rounded outline-none border-none bg-[#FAFAFA]"
              >
                <option value="week">За неделю</option>
                <option value="month">За месяц</option>
                <option value="year">За год</option>
              </select>
            </div>
            <div
              class="flex flex-col border-2 border-solid mt-6 rounded-xl p-4"
            >
              <div class="flex justify-between">
                <div class="flex space-x-2">
                  <img src="../assets/img/HomePage/icon_wallet.svg" class="w-[25%]" alt="icon" />
                  <div class="flex flex-col">
                    <span class="font-bold">Расход</span>
                    <span class="text-xs font-light text-[#A0AEC0]">Увеличился на 10%</span>
                  </div>
                </div>
                <p class="font-bold">₽409.00</p>
              </div>
              <div class="w-full h-[6px]  bg-[#6b5fbc33] rounded-xl mt-4">
                <div class="w-[70%] h-[6px] bg-[#6C5FBC]"></div>
              </div>
            </div>
            <div
              class="flex flex-col border-2 border-solid mt-6 rounded-xl p-4"
            >
              <div class="flex justify-between">
                <div class="flex space-x-2">
                    <img src="../assets/img/HomePage/vocher.svg" class="w-[25%]" alt="icon" />

                  <div class="flex flex-col">
                    <span class="font-bold">Vocher</span>
                    <span class="text-xs font-light text-[#A0AEC0]">Увеличился на 5%</span>
                  </div>
                </div>
                <p class="font-bold ">₽45.78</p>
              </div>
              <div class="w-full h-[6px]  bg-[#f8d93c33] rounded-xl mt-4">
                <div class="w-[70%] h-[6px] bg-[#f8d93c]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section container m-auto">
    <div class="report-container" id="customer">
      <h2 class="text-3xl font-bold text-center mb-10">Комментаторы <span class="change_color">говорят</span></h2>
      <Reports></Reports>
    </div>
  </section>

  <section class="section">
    <div class="container subscribe flex between relative space-x-* rounded-3xl w-[95%]">
      <div>
        <h2 class="style__h2 text-[#fff] mb-5">Получи скидку 50%</h2>
        <div class="bg-[#ffffff] flex justify-between p-2 rounded-3xl">
            <input class="outline-none w-[100%] bg-[#ffffff] border-none text-[#878787]" type="email" name="" id="" placeholder="Введите свой Email" />
            <input class="button_animation right-[50%] bg-[#5c4eae] rounded-2xl p-2 text-[#fff] font-light text-xs" type="button" value="Подписаться" />
        </div>       
      </div>
      <img class="absolute right-10 bottom-[-35%] w-[15%] mobile:hidden desktop:block" src="../assets/img/HomePage/Food_image.svg" alt="">
    </div>
  </section>
</template>

<script>
import Reports from "@/components/Reports.vue";
export default {
  components: {
    Reports,
  },
};
</script>
