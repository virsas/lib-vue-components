<script setup>
import { computed } from "vue";

const props = defineProps({
  modelValue: {
    type: [String, Number, Array],
    default: "",
  },
  options: {
    type: Array,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  error: {
    type: String,
    default: undefined,
  },
  rules: {
    type: Array,
    default: undefined,
  },
  clearable: {
    type: Boolean,
    default: true,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  emitValue: {
    type: Boolean,
    default: true,
  },
  mapOptions: {
    type: Boolean,
    default: true,
  },
  multiple: {
    type: Boolean,
    default: false,
  },
  useChips: {
    type: Boolean,
    default: false,
  },
  hideSelected: {
    type: Boolean,
    default: true,
  },
  useInput: {
    type: Boolean,
    default: true,
  },
  fillInput: {
    type: Boolean,
    default: true,
  },
  noOption: {
    type: String,
    default: "No options",
  },
});
const emit = defineEmits(["update:modelValue"]);

const value = computed({
  get: () => props.modelValue,
  set: (value) => {
    emit("update:modelValue", value);
  },
});

const options = computed({
  get: () => props.options,
});
</script>

<template>
  <q-select
    v-model="value"
    :label="label"
    :options="options"
    :readonly="loading"
    lazy-rules="ondemand"
    :use-input="useInput"
    :hide-selected="hideSelected"
    :fill-input="fillInput"
    :emit-value="emitValue"
    :map-options="mapOptions"
    :clearable="clearable"
    :error-message="error"
    :rules="rules"
    :multiple="multiple"
    :use-chips="useChips"
  >
    <template #no-option>
      <q-item>
        <q-item-section class="text-grey">
          {{ noOption }}
        </q-item-section>
      </q-item>
    </template>
  </q-select>
</template>
