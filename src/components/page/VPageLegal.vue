<script setup>
import { ref } from 'vue'

import VElementButton from "../element/VElementButton.vue"

const props = defineProps({
  url: {
    type: String,
    required: true,
  },
  locale: {
    type: String,
    default: "",
  },
  class: {
    type: String,
    default: undefined,
  }
})

const finalURL = ref(props.url)
if (props.locale !== "") {
  finalURL.value = props.url + "/" + props.locale
}
</script>

<template>
  <div :class="class">
    <VElementButton
      :label="$t('action.legal.terms')"
      :href="finalURL + '/terms'"
      type="a"
      :flat="true"
      size="sm"
    />
    <VElementButton
      :label="$t('action.legal.privacy')"
      :href="finalURL + '/privacy'"
      type="a"
      :flat="true"
      size="sm"
    />
    <VElementButton
      :label="$t('action.legal.cookies')"
      :href="finalURL + '/cookies'"
      type="a"
      :flat="true"
      size="sm"
    />
  </div>
</template>