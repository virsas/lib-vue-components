<script setup>
import { computed } from "vue";

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: "primary",
  },
  position: {
    type: String,
    default: "right",
  },
  maximized: {
    type: Boolean,
    default: true,
  },
  fullWidth: {
    type: Boolean,
    default: false,
  },
  onClose: {
    type: Function,
    default: null,
  }
});

const emit = defineEmits(["update:modelValue"]);

const open = computed({
  get: () => props.modelValue,
  set: (open) => {
    emit("update:modelValue", open);
  },
});
</script>

<template>
  <q-dialog
    v-model="open"
    persistent
    :transition-show="position === 'standard' ? 'scale' : 'slide-left'"
    :transition-hide="position === 'standard' ? 'scale' : 'slide-right'"
    :position="position"
    :maximized="maximized"
  >
    <q-card :style="fullWidth ? 'width: 100vw;' : 'width: 100vw; max-width: 600px;'">
      <q-toolbar :class="'bg-' + color">
        <h3 class="q-ma-none">
          {{ label }}
        </h3>
        <q-space />
        <q-btn
          flat
          round
          icon="close"
          @click="onClose"
        />
      </q-toolbar>
      <q-card-section class="full-width">
        <slot />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>
