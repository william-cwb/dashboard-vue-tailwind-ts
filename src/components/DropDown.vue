<template>
  <div class="dropdown-wrapper relative m-8" ref="element" >
    <button
      v-on:click="onClickDropdown"
      class="text-white font-bold py-2 px-4 whitespace-no-wrap rounded transition duration-300 indigo"
      id="the-dropdown"
    >
      Dropdown
    </button>
    <transition name="fade">
      <div
        class="dropdown-menu text-white mt-1 rounded absolute z-10 shadow-lg w-40 max-w-xs indigo"
        v-if="show"
      >
        <ul class="list-none overflow-hidden rounded">
          <li v-for="car in cars" :key="car" class="flex py-2 px-4 transition duration-300 indigo">
              {{ car }}

          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted, onUnmounted } from "vue";

const cars = reactive(["BMW", "Mercedes", "Audi", "Volvo"]);
const show = ref(false);
const element = ref<HTMLElement | null>(null);

onMounted(() => {
  document.addEventListener('click', ({target}) => {
    if(target.id !== "the-dropdown"){
      show.value = false;
    }
  })
})

onUnmounted(() => {
  document.removeEventListener('click', (e) => {
  })
})

const onClickDropdown = (e) => {

  console.log(e);

  show.value = !show.value;
}

</script>

<style scoped>
.scale-enter-active,
.scale-leave-active {
  transition: all 0.5s;
  transform: scale(1);
}
.scale-enter,
.scale-leave-to {
  opacity: 0;
  transform: scale(0);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.indigo {
  background-color: #4c51bf;
}
</style>