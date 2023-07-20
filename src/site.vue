<template>
  <header>
    <div class="container">
      <div class="inner">
        <button class="menu button-mobile" @click="showMenu = true" />
        <div
          :class="['overlay', showMenu ? 'show' : '']"
          @click="showMenu = false"
        />
        <nav :class="[showMenu ? 'show' : '']">
          <div class="header-navbar">
            <p></p>
            <IcClose @click="showMenu = false" class="cursor" />
          </div>
          <ul>
            <li>Home</li>
            <li>About</li>
          </ul>
        </nav>
        <p class="logo">Logo</p>
        <p class="login">login</p>
      </div>
    </div>
  </header>
  <main>
    <button @click="showModal = true">Open modal</button>
    <input type="text" v-model="value" />
    <div
      :class="['backdrop-modal', showModal ? 'show' : '']"
      @click="onClickClose"
    >
      <div class="modal">
        <h1>The modal</h1>
        <button @click="showModal = false">close modal</button>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue";
import IcClose from "./components/Icons/IcClose.vue";

const showMenu = ref<boolean>(false);
const showModal = ref<boolean>(false);
const value = ref<String>("");
const onClickClose = ({ target, currentTarget }: any) => {
  if (target === currentTarget) {
    showModal.value = false;
  }
};
</script>


<style scoped>
main {
  margin-top: 100px;
}

input {
  width: 100%;
  height: 50px;
  font-size: 16px;
  border-color: rgb(18, 18, 20);
  color: #000;
  border: 2px solid rgb(18, 18, 20);
  padding: 0px 1em;
  border-radius: 5px;
  outline: none;
}

.backdrop-modal {
  z-index: 100;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
  justify-content: center;
  align-items: center;
  display: none;
}

.modal {
  width: 100%;
  max-width: 400px;
  height: 60%;
  background: #fff;
  padding: 1rem;
  border-radius: 0.4rem;
}

.backdrop-modal.show {
  display: flex;
}

.backdrop-modal.show > .modal {
  animation: modal 0.3s;
}

@keyframes modal {
  from {
    opacity: 0;
    transform: translate3d(0, 160px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

.header-navbar {
  justify-content: space-between;
  align-items: center;
  height: 110px;
  width: 100%;
  display: none;
  background: red;
  padding: 0 1rem;
}

.header-navbar .cursor {
  cursor: pointer;
}

.overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1;
  opacity: 0;
  transition: visibility 0.6s, opacity 0.6s linear;
  visibility: hidden;
}

header {
  position: fixed;
  width: 100%;
  z-index: 10;
  top: 0;
  left: 0;
  background: #fff;
  height: 66px;
  box-shadow: 0 2px rgba(0, 0, 0, 0.08);
}

.menu {
  display: none;
}

.container {
  margin: 0 auto;
  max-width: 1360px;
  width: 100%;
  height: 100%;
}

header .container .inner {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  height: 100%;
  padding: 1rem;
}

nav {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
}

nav ul {
  display: flex;
  align-items: center;
  justify-content: start;
  height: 100%;
}

.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.login {
  align-items: center;
  display: flex;
  justify-content: flex-end;
  height: 100%;
}

.button-mobile {
  border-radius: 4px;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
  border: 1px solid #000;
}

.button-mobile::after {
  content: "";
  display: block;
  width: 18px;
  height: 2px;
  border-radius: 4px;
  background: #000;
  box-shadow: 0 6px #000, 0 -6px #000;
}

@media only screen and (max-width: 1024px) {
  .menu {
    display: flex;
  }

  .header-navbar {
    display: flex;
  }

  nav {
    position: absolute;
    opacity: 0;
    top: 0;
    left: 0;
    width: 260px;
    height: 100vh;
    background: #fff;
    transform: translateX(-260px);
    transition: all 0.6s;
    flex-direction: column;
    align-items: flex-start;
  }

  nav ul {
    flex-direction: column;
    margin-top: 1rem;
  }

  nav.show {
    transform: translateX(0);
    opacity: 1;
    z-index: 10;
  }

  .overlay.show {
    visibility: visible;
    opacity: 1;
  }
}
</style>