<template>
  <div v-if="this.$isMobile()" class="flex-col justify-between m-0">
      <img src="../assets/img/Contact/Box.svg" alt="фон" class="mt-5 m-auto mb-5">
      <form action="" class=" items-center justify-center flex flex-col gap-5">
        <input type="text" placeholder="Полное имя" id="name">
        <input class = "contact__email" type="email" placeholder="Введите emai" id="email">
        <textarea placeholder="Напишите вашу проблему" id="message"></textarea>
        <div class="label__container">
                  <label class="checkbox__label">
                      <input class="checkbox__input" type="checkbox" />
                      <span class="checkbox__span"
                        >Согласие на обработку персональных данных</span
                      >
                    </label></div>
        <input type="submit" value="Отправить" class="contact__submit button_animation">
      </form>
  </div>

  <div v-else class="flex justify-between max-w-[100rem] m-auto">
    <img src="../assets/img/Contact/Group.svg" alt="фон" class="mt-[5%] mb-[10%]">     
    <div class="right mr-[10%] mt-[5%]">
      <h1 class="text-3xl font-bold text-center mb-10">
          Служба <span class="change_color">поддержки</span>
        </h1>
      <form method="POST" class=" items-center justify-center flex flex-col gap-5">
        <input type="text" placeholder="Полное имя" id="name">
        <input class = "contact__email" type="email" placeholder="Введите emai" id="email">
        <textarea placeholder="Напишите вашу проблему" id="message"></textarea>
        <div class="label__container">
                  <label class="checkbox__label">
                      <input class="checkbox__input" type="checkbox" />
                      <span class="checkbox__span"
                        >Согласие на обработку персональных данных</span
                      >
                    </label></div>
        <input type="submit" value="Отправить" class="contact__submit button_animation" onclick="New()">
      </form>
    </div>
  </div>
</template>

<style >
   input[type="text"]  {
    border: 2px solid #6c5fbc ;
    border-radius:17px;
    padding: 21px 9px 21px 25px;
    width: 493px;
    height: 80px;
    background: #f9f9f9;
   }

   .contact__email  {
    border: 2px solid #6c5fbc ;
    border-radius:17px;
    padding: 21px 9px 21px 25px;
    width: 493px;
    height: 80px;
    background: #f9f9f9;
   }

   .contact__submit{
    border-radius: 16px;
    width: 493px;
    height: 80px;
    background: #6c5fbc;
   }

   textarea{
    border: 2px solid #6c5fbc ;
    border-radius:18px;
    padding: 22px 35px 22px 27px;
    width: 493px;
    height: 345px;
    background: #f9f9f9;
   }
   .checkbox__input {
  display: none;
  position: absolute;
  appearance: none;
}

.checkbox__label {
  position: relative;
  padding-left: 2rem;
}

.checkbox__span::after {
  content: "";
  position: absolute;
  top:5px;
  left: 0;
  width: 15px;
  height: 15px;
  border: 1px solid #000;
  transition: 0.3s;
}

.checkbox__input:checked + .checkbox__span::after {
  border: 1px solid rgb(255, 255, 255);
}

.checkbox__span::before {
  content: "\2714";
  position: absolute;
  bottom: -1px;
  left: -1px;
  opacity: 0;
  font-size: 12px;
  color: rgb(255, 255, 255);
  transition: 0.3s;
}

.checkbox__input:checked + .checkbox__span::before {
  opacity: 1;
  transform: rotate(360deg);
}
@media screen and (max-width: 768px){
  input[type="text"]  {
    border: 2px solid #6c5fbc ;
    border-radius:17px;
    padding: 21px 9px 21px 25px;
    width: 315px;
    height: 80px;
    background: #f9f9f9;
   }

   .contact__email  {
    border: 2px solid #6c5fbc ;
    border-radius:17px;
    padding: 21px 9px 21px 25px;
    width: 315px;
    height: 80px;
    background: #f9f9f9;
   }

   .contact__submit{
    border-radius: 16px;
    width: 315px;
    height: 80px;
    background: #6c5fbc;
   }

   textarea{
    border: 2px solid #6c5fbc ;
    border-radius:18px;
    padding: 22px 35px 22px 27px;
    width: 315px;
    height: 345px;
    background: #f9f9f9;
   }
   .checkbox__input {
  display: none;
  position: absolute;
  appearance: none;
}

.checkbox__label {
  position: relative;
  padding-left: 2rem;
}

.checkbox__span::after {
  content: "";
  position: absolute;
  top:2px;
  left: 0;
  width: 15px;
  height: 15px;
  border: 1px solid #000;
  transition: 0.3s;
}

.checkbox__input:checked + .checkbox__span::after {
  border: 1px solid rgb(255, 255, 255);
}

.checkbox__span::before {
  content: "\2714";
  position: absolute;
  bottom: -1px;
  left: 2px;
  opacity: 0;
  font-size: 12px;
  color: rgb(38, 255, 0);
  transition: 0.3s;
}

.checkbox__input:checked + .checkbox__span::before {
  opacity: 1;
  transform: rotate(360deg);
}
}

</style>
