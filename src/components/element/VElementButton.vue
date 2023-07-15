<script setup>
defineProps({
  label: {
    type: String,
    default: undefined,
  },
  icon: {
    type: String,
    default: undefined,
  },
  type: {
    type: String,
    default: "button",
  },
  size: {
    type: String,
    default: "md",
  },
  color: {
    type: String,
    default: "primary",
  },
  textColor: {
    type: String,
    default: null,
  },
  unelevated: {
    type: Boolean,
    default: true,
  },
  flat: {
    type: Boolean,
    default: false,
  },
  dense: {
    type: Boolean,
    default: false,
  },
  round: {
    type: Boolean,
    default: false,
  },
  outline: {
    type: Boolean,
    default: false,
  },
  href: {
    type: String,
    default: undefined,
  },
  to: {
    type: String,
    default: undefined,
  },
  menu: {
    type: Boolean,
    default: false,
  },
  tooltip: {
    type: String,
    default: undefined,
  },
  image: {
    type: String,
    default: undefined,
  },
  imageWidth: {
    type: String,
    default: undefined,
  },
  loading: {
    type: Boolean,
    default: false,
  }
});
</script>

<template>
  <q-btn
    :type="type"
    :icon="icon"
    :label="label"
    :color="color"
    :text-color="textColor"
    :size="size"
    :unelevated="unelevated"
    :outline="outline"
    :flat="flat"
    :dense="dense"
    :round="round"
    :disabled="['submit'].includes(type) ? loading : undefined"
    :href="href"
    :target="href ? '_blank' : undefined"
    :to="to ? { name: to } : null"
  >
    <q-menu v-if="menu">
      <q-list>
        <slot />
      </q-list>
    </q-menu>
    <q-tooltip v-if="tooltip">
      {{ tooltip }}
    </q-tooltip>
    <q-img
      v-if="image"
      :width="imageWidth"
      :src="image"
    />
  </q-btn>
</template>
