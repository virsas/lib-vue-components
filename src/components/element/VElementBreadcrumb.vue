<script setup>
defineProps({
  crumbs: {
    type: Array,
    required: true,
  },
  class: {
    type: String,
    default: undefined,
  },
});
</script>

<template>
  <q-breadcrumbs :class="class">
    <q-breadcrumbs-el
      v-for="(crumb, i) in crumbs"
      :key="i"
      :label="$t(crumb.label)"
      :to="crumb.to ? { name: crumb.to } : null"
    />
  </q-breadcrumbs>
</template>
