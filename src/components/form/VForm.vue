<script setup>
import { onMounted, ref } from 'vue';

const props = defineProps({
  onSubmit: {
    type: Function,
    required: true,
  },
  autoCorrect: {
    type: String,
    default: "off",
  },
  autoCapitalize: {
    type: String,
    default: "off",
  },
  autoComplete: {
    type: String,
    default: "off",
  },
  spellCheck: {
    type: String,
    default: "false",
  },
});

const form = ref(null)

const submitForm = () => {
  form.value.validate().then((success) => {
    if (success) {
      props.onSubmit()
    }
  });
};

onMounted(() => {
  form.value.reset();
})
</script>

<template>
  <q-form
    ref="form"
    :autocorrect="autoCorrect"
    :autocapitalize="autoCapitalize"
    :autocomplete="autoComplete"
    :spellcheck="spellCheck"
    @submit="submitForm"
  >
    <slot />
  </q-form>
</template>