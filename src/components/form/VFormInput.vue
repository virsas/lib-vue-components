<script setup>
import { computed, ref } from "vue";

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: "",
  },
  length: {
    type: Number,
    default: 250,
  },
  label: {
    type: String,
    required: true,
  },
  error: {
    type: String,
    default: undefined,
  },
  search: {
    type: Boolean,
    default: false,
  },
  rules: {
    type: Array,
    default: undefined,
  },
  counter: {
    type: Boolean,
    default: true,
  },
  type: {
    type: String,
    default: 'text',
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  mask: {
    type: String,
    default: undefined,
  },
  maskFill: {
    type: String,
    default: "0",
  },
  maskReverseFill: {
    type: Boolean,
    default: false,
  },
});
const visiblePassword = ref(false);
const emit = defineEmits(["update:modelValue"]);

const value = computed({
  get: () => props.modelValue,
  set: (value) => {
    emit("update:modelValue", value);
  },
});

</script>

<template>
  <q-input
    v-model="value"
    :label="label"
    :maxlength="length"
    :counter="counter"
    :readonly="loading || readonly"
    lazy-rules="ondemand"
    :error-message="error"
    :rules="rules"
    :type="type === 'password' && visiblePassword ? 'text' : type"
    :outlined="search ? true : false"
    :dense="search ? true : false"
    @wheel="$event.target.blur()"
    :mask="mask"
    :fill-mask="maskFill"
    :reverse-fill-mask="maskReverseFill"
  >
    <template
      v-if="type === 'password' || search"
      #append
    >
      <q-icon
        v-if="search"
        name="search"
        class="cursor-pointer"
      />
      <q-icon
        v-if="type === 'password'"
        :name="visiblePassword ? 'visibility_off' : 'visibility'"
        class="cursor-pointer"
        @click="visiblePassword = !visiblePassword"
      />
    </template>
  </q-input>
</template>
