<template>
  <confirm-dialog>
    <div class="main__layout">
      <TheSidebar :showMenu="showMenu" @onClickClose="showMenu = false" />
      <TheHeader @onClickMenu="showMenu = true" />
      <main>
        <slot />
      </main>
    </div>
  </confirm-dialog>
</template>

<script setup lang="ts">
import { ref, provide } from "vue";
import TheSidebar from "../components/TheSidebar.vue";
import TheHeader from "../components/TheHeader.vue";
import ConfirmDialog from "../components/ConfirmDialog.vue";

const showModal = ref<boolean>(false);
const showMenu = ref<boolean>(false);
</script>
<style scoped>
.main__layout {
  display: grid;
  grid: "nav header" min-content "nav main" 1fr / min-content 1fr;
  min-height: 100vh;
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

@media only screen and (max-width: 1024px) {
  main {
    grid-area: main;
  }
}
</style>