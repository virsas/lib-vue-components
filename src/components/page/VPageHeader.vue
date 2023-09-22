<script setup>
import VButton from "../element/VElementButton.vue";
import VBreadcrumb from "../element/VElementBreadcrumb.vue";

defineProps({
  onClick: {
    type: Function,
    default: undefined,
  },
  label: {
    type: String,
    required: true,
  },
  button: {
    type: Boolean,
    default: true,
  },
  buttonText: {
    type: String,
    default: undefined,
  },
  buttonColor: {
    type: String,
    default: "secondary",
  },
  buttonIcon: {
    type: String,
    default: undefined,
  },
  crumbs: {
    type: Array,
    default: undefined,
  },
  element_class: {
    type: String,
    default: "q-mb-md",
  },
  toolbar_class: {
    type: String,
    default: "q-pa-none",
  },
  header_class: {
    type: String,
    default: "q-ma-none text-h1",
  },
});
</script>

<template>
  <div :class="element_class">
    <q-toolbar :class="toolbar_class">
      <h1 :class="header_class">
        {{ label }}
      </h1>
      <q-space />
      <VButton
        v-if="buttonText"
        :label="buttonText"
        :icon="buttonIcon"
        :color="buttonColor"
        @click="onClick"
      />
    </q-toolbar>
    <VBreadcrumb
      v-if="crumbs"
      :crumbs="crumbs"
    />
  </div>
</template>
