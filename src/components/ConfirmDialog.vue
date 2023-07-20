<template>
  <slot />
  <Teleport to="#app">
    <div
      :class="['backdrop-modal', showModal ? 'show' : '']"
      @click="onClickClose"
    >
      <div class="modal">
        <h1>The modal</h1>
        <button @click="onClickAnswer(false)">Não</button>
        <button @click="onClickAnswer(true)">Sim</button>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, provide } from "vue";

const showModal = ref<boolean>(false);

const onClickClose = ({ target, currentTarget }: any) => {
  if (target === currentTarget) {
    showModal.value = false;
  }
};

let promisse = null;

provide("onClickOpenModal", () => {
  showModal.value = true;
  return new Promise((res) => {
    promisse = res;
  });
});

const onClickAnswer = (value: boolean) => {
  if (promisse !== null) {
    promisse(value);
  }
  showModal.value = false;
};
</script>

<style scoped>
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
</style>
