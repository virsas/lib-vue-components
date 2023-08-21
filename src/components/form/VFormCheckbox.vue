<script setup>
import { computed } from "vue";

const props = defineProps({
  modelValue: [Boolean],
  label: {
    type: String,
    required: true,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  color: {
    type: String,
    default: "primary",
  },
  class: {
    type: String,
    default: "row q-my-md"
  }
});
const emit = defineEmits(["update:modelValue"]);

const value = computed({
  get: () => props.modelValue,
  set: (value) => {
    emit("update:modelValue", value);
  },
});
</script>

<template>
  <div :class="class">
    <q-checkbox
      v-model="value"
      :label="label"
      :disable="loading"
      :color="color"
    />
  </div>
</template>
