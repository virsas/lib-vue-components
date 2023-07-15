<script setup>
defineProps({
  crumbs: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <q-breadcrumbs>
    <q-breadcrumbs-el
      v-for="(crumb, i) in crumbs"
      :key="i"
      :label="$t(crumb.label)"
      :to="crumb.to ? { name: crumb.to } : null"
    />
  </q-breadcrumbs>
</template>
