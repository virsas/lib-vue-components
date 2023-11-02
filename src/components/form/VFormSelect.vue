<script setup>
import { computed, ref } from "vue";

const props = defineProps({
  modelValue: {
    type: [String, Number],
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

const options = ref(props.options)
</script>

<template>
  <q-select
    v-model="value"
    :label="label"
    :options="options"
    :readonly="loading"
    lazy-rules="ondemand"
    use-input
    hide-selected
    fill-input
    :emit-value="emitValue"
    :map-options="mapOptions"
    :clearable="clearable"
    :error-message="error"
    :rules="rules"
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
