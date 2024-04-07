<template>





    <footer v-if="this.$isMobile()">
        <div class="contanerElementMobil">
            <div class="logoElement">
                <img src="../assets/img/Logo.svg" alt="логотип">
                <ul class="listMobil">
                    <a href="#">
                        <li class="listItemMobil button_animation">
                            <img src="../assets/img/Footer/inst.svg" alt="">
                        </li>
                    </a>
                    <a href="#">
                        <li class="listItemMobil button_animation">
                            <img src="../assets/img/Footer/in.svg" alt="">
                        </li>
                    </a>
                    <a href="#">
                        <li class="listItemMobil button_animation">
                            <img src="../assets/img/Footer/facebook.svg" alt="">
                        </li>
                    </a>
                    <a href="#">
                        <li class="listItemMobil button_animation">
                            <img src="../assets/img/Footer/twitter.svg" alt="">
                        </li>
                    </a>
                </ul>
            </div>
            <div class="navElement">
                <nav class="navContaner">
                    <ul class="navList">
                        <router-link to="/" class="nav__list__item"><li>Меню</li></router-link>
                        <router-link to="/" class="nav__list__item"><li>Блог</li></router-link>
                        <router-link to="/" class="nav__list__item"><li>Цены</li></router-link>
                        <router-link to="/contact" class="nav__list__item"><li>Контакты</li></router-link>
                    </ul>
                </nav>
            </div>

            <hr class="separatorMobil">

            <div class="textElementMobil">
                <p class="textMobil">© 2021 FILON All Rights Reserv</p>
            </div>
        </div>
    </footer>
    
    <footer v-else>
        <div class="contanerElement">
            <!-- Логотип -->
            <div class="fotoElement">
                <router-link to="/" class="router-link"><img src="../assets/img/Logo.svg" alt="Логотип"></router-link>
                <nav>
                    <ul class="nav__list">
                        <router-link to="/" class="nav__list__item"><li>Меню</li></router-link>
                        <router-link to="/" class="nav__list__item"><li>Блог</li></router-link>
                        <router-link to="/" class="nav__list__item"><li>Цены</li></router-link>
                        <router-link to="/contact" class="nav__list__item"><li>Контакты</li></router-link>
                    </ul>
                </nav>
            </div>

            <hr>

            <div class="contacsElement">
                <p class="textElement">© 2021 FILON All Rights Reserv</p>
                <ul class="list">
                    <a href="#">
                        <li class="listItem button_animation">
                            <img src="../assets/img/Footer/inst.svg" alt="">
                        </li>
                    </a>
                    <a href="#">
                        <li class="listItem button_animation">
                            <img src="../assets/img/Footer/in.svg" alt="">
                        </li>
                    </a>
                    <a href="#">
                        <li class="listItem button_animation">
                            <img src="../assets/img/Footer/facebook.svg" alt="">
                        </li>
                    </a>
                    <a href="#">
                        <li class="listItem button_animation">
                            <img src="../assets/img/Footer/twitter.svg" alt="">
                        </li>
                    </a>
                </ul>
            </div>
        </div>
    </footer>
</template>




<script>
    import { RouterLink } from "vue-router";
    import "../assets/css/footer.css"
</script>