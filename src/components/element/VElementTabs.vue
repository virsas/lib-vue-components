<script setup>
defineProps({
  tabs: {
    type: Array,
    required: true,
  },
  noCaps: {
    type: Boolean,
    default: true,
  },
  inlineLabel: {
    type: Boolean,
    default: true,
  },
  outsideArrows: {
    type: Boolean,
    default: true,
  },
  mobileArrows: {
    type: Boolean,
    default: true,
  },
  align: {
    type: String,
    default: "left",
  },
  elementClass: {
    type: String,
    default: undefined,
  },
});
</script>

<template>
  <q-tabs
    :no-caps="noCaps"
    :inline-label="inlineLabel"
    :outside-arrows="outsideArrows"
    :mobile-arrows="mobileArrows"
    :align="align"
    :class="elementClass"
  >
    <q-route-tab
      v-for="(tab, i) in tabs"
      :key="i"
      :icon="tab.icon"
      :label="tab.label"
      :to="{ name: tab.route }"
      exact
      :class="tab.class"
    />
  </q-tabs>
</template>
