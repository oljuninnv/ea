<template>
    <swiper
      :modules="modules"
      :slides-per-view="this.$isMobile() ? 1 : 2"
      :space-between="50"
      :scrollbar="{ draggable: true }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      class="text-[#636363] italic flex"
    >
        <swiper-slide class = "bg-[#FFFFFF] p-5 shadow mb-[5%]">
            <div class="flex-[column]">
                <p class="mb-[5%] text-xs">“Онлайн-оплата счетов помогает компаниям экономить время,
                    работать быстрее и максимально экономить усилия клиентов.
                    Онлайн-оплата счетов помогает компаниям экономить время ”</p>
                    <img src="../assets/img/HomePage/Stars.svg" alt="stars">
            </div>
        </swiper-slide>
        <swiper-slide class = "bg-[#FFFFFF] p-5 shadow mb-[5%]">
            <div class="flex-[column]">
                <p class="mb-[5%] text-xs">“Онлайн-оплата счетов помогает компаниям экономить время,
                    работать быстрее и максимально экономить усилия клиентов.
                    Онлайн-оплата счетов помогает компаниям экономить время ”</p>
                    <img src="../assets/img/HomePage/Stars.svg" alt="stars">
            </div>
        </swiper-slide>
        <swiper-slide class = "bg-[#FFFFFF] p-5 shadow mb-[5%]">
            <div class="flex-[column] text-xs">
                <p class="mb-[5%]">“Онлайн-оплата счетов помогает компаниям экономить время,
                    работать быстрее и максимально экономить усилия клиентов.
                    Онлайн-оплата счетов помогает компаниям экономить время ”</p>
                    <img src="../assets/img/HomePage/Stars.svg" alt="stars">
            </div>
        </swiper-slide>
      
    </swiper>
  </template>
  <script>
    // import Swiper core and required modules
    import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
  
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';
  
    // Import Swiper styles
    import 'swiper/css';
    import 'swiper/css/navigation';
    import 'swiper/css/pagination';
    import 'swiper/css/scrollbar';
  
    // Import Swiper styles
    export default {
        name: "Reports", 
      components: {
        Swiper,
        SwiperSlide,
      },
      setup() {
        const onSwiper = (swiper) => {
          console.log(swiper);
        };
        const onSlideChange = () => {
          console.log('slide change');
        };
        
        return {
          onSwiper,
          onSlideChange,
          modules: [Navigation, Pagination, Scrollbar, A11y],
        };
      },
    };
  </script>