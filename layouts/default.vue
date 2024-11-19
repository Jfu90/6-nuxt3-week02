<script setup>
import HeaderView from '~/components/global/AppHeader.vue';
import FooterView from '~/components/global/AppFooter.vue';
</script>

<template>
  <HeaderView />
  <slot />
  <FooterView />
</template>

<style scoped></style>
