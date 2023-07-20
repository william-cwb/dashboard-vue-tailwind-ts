<template>
  <p @click="injectTest">Item</p>
</template>

<script lang="ts" setup>
import { inject } from "vue";

const injectTest = inject("on_click_teste");
</script>
