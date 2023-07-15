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
  buttonIcon: {
    type: String,
    default: undefined,
  },
  crumbs: {
    type: Array,
    default: undefined,
  },
});
</script>

<template>
  <div class="q-mb-md">
    <q-toolbar class="q-pa-none">
      <h1 class="q-ma-none text-h4">
        {{ label }}
      </h1>
      <q-space />
      <VButton
        v-if="buttonText"
        :label="buttonText"
        :icon="buttonIcon"
        color="secondary"
        @click="onClick"
      />
    </q-toolbar>
    <VBreadcrumb
      v-if="crumbs"
      :crumbs="crumbs"
    />
  </div>
</template>
