<template>
    <header v-if="this.$isMobile()">
        <a href="#"><img src="../assets/img/Logo.svg" alt="Логотип"></a>
        <div @mouseover="isNavigation = true" @mouseleave="isNavigation = false"><a href="#">
            <img src="../assets/img/Header/menu.svg" alt="Меню"></a>
        
        <div class="absolute right-4 top-[8%] bg-[#d1d1d1]" v-if="isNavigation">
            <ul>
                <router-link to="/" class="nav__list__item"><li>Меню</li></router-link>
                <router-link to="/" class="nav__list__item"><li>Блог</li></router-link>
                <router-link to="/" class="nav__list__item"><li>Цены</li></router-link>
                <router-link to="/contact" class="nav__list__item"><li>Контакты</li></router-link>
            </ul>
        </div>
    </div>
    </header>

    <header v-else>
        <div class="a__list">
            <router-link to="/" class="router-link"><img src="../assets/img/Logo.svg" alt="Логотип"></router-link>
            <nav>
                <ul class="nav__list">
                    <router-link to="/" class="nav__list__item"><li>Меню</li></router-link>
                    <router-link to="/" class="nav__list__item"><li>Блог</li></router-link>
                    <router-link to="/" class="nav__list__item"><li>Цены</li></router-link>
                    <router-link to="/contact" class="nav__list__item"><li>Контакты</li></router-link>
                    <li @mouseover="isNavigation = true" @mouseleave="isNavigation = false">
                        <a href="#" class="nav__list__item">Навигация</a>
                        <div class="absolute p-2 bg-[#d1d1d1]" v-if="isNavigation & this.$route.name =='home'">
            <ul>
                <a href="#mobile"><li>Приложение</li></a>
                <a href="#restorans"><li>Рестораны</li></a>
                <a href="#delicious"><li>Блюда</li></a>
                <a href="#control"><li>Панель мониторинга</li></a>
                <a href="#customer"><li>Отзывы</li></a>
            </ul>
        </div>
                    </li>
        </ul>
            </nav>
        </div>

        <div class="button__list">
            <button class="login button_animation">Войти</button>
            <button class="sign_up button_animation">Зарегистрироваться</button>
        </div>      

 
    </header>
</template>



<script>
    import { RouterLink } from "vue-router";
    import "../assets/css/header.css"    
    export default {
        data() {
            return {
                isNavigation: false,
            }
        }
    }
    
</script>