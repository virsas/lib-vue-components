<script setup>
defineProps({
  loading: {
    type: Boolean,
    default: false,
  }
});
</script>

<template>
  <q-inner-loading :showing="loading">
    <q-spinner-pie
      size="5em"
      color="primary"
    />
  </q-inner-loading>
</template>

