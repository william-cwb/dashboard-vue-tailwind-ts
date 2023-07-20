<template>
  <div :class="['sidebar', showMenu ? 'show' : '']">
    <div class="flex justify-between items-center w-full h-12 py-2 px-4">
      <h4 class="text-lg text-white" @click="handleClickModal">LOGO</h4>
      <IcClose class="ic_close" @click="emit('onClickClose')" />
    </div>
    <hr class="border-secondary mx-2" />
    <nav class="mt-4">
      <ul>
        <a href="#">
          <li class="text-white flex items-center p-2">
            <IcHome />
            <span class="text-sm tracking-widest ml-2 text-secondary"
              >Home</span
            >
          </li>
          <li class="text-white flex items-center p-2">
            <IcHome />
            <span class="text-sm tracking-widest ml-2 text-secondary"
              >Home</span
            >
          </li>
        </a>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, inject } from "vue";
import IcClose from "../components/Icons/IcClose.vue";
import IcHome from "../components/Icons/IcHome.vue";

const onClickOpenModal = inject("onClickOpenModal");

const handleClickModal = async () => {
  const value = await onClickOpenModal();
  console.log(value);
};

const emit = defineEmits<{
  (e: "onClickClose"): void;
}>();

const props = defineProps({
  showMenu: {
    type: Boolean,
    required: true,
  },
});
</script>

<style scoped>
.sidebar {
  grid-area: nav;
  height: 100vh;
  position: sticky;
  top: 0;
  background: var(--color-primary);
}

.sidebar .ic_close {
  display: none;
  cursor: pointer;
}

.sidebar nav {
  display: flex;
  flex-direction: column;
  height: 100vh;
  transition: width 3s cubic-bezier(0.4, 0, 0.2, 1);
  width: var(--width-sidebar);
}

@media only screen and (max-width: 1024px) {
  .sidebar {
    position: absolute;
    transform: translate3d(calc(-1 * var(--width-sidebar)), 0, 0);
    z-index: 1000;
    transition: transform 0.3s cubic-bezier(0.4, 0, 1, 1);
  }

  .sidebar.show {
    transition: all 0.3s;
    transform: translate3d(0, 0, 0);
    transition: all 0.3s;
  }

  .sidebar .ic_close {
    display: block;
  }
}
</style>