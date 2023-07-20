<template>
    <header class="flex items-center p-2">
        <IcMenu class="menu pb-1" @click="emit('onClickMenu')" />
    </header>
</template>

<script setup lang="ts">
import { defineEmits } from "vue"
import IcMenu from '../components/Icons/IcMenu.vue'

const emit = defineEmits<{
    (e: 'onClickMenu'): void
}>()
</script>

<style scoped>
header {
    grid-area: header;
    /* grid-template-areas: "appbar-banner" "appbar";
    grid-template-rows: min-content min-content; */
    position: sticky;
    top: 0;
    z-index: 50;
    background: var(--color-primary);
    /* padding: 0.8rem;
    padding-bottom: 1rem; */
    height: 3rem;
}

header .menu {
    cursor: pointer;
    display: none;
}


@media only screen and (max-width: 1024px) {
    header .menu {
        display: block;
    }
}
</style>