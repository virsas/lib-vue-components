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
  }
})

const finalURL = ref(props.url)
if (props.locale !== "") {
  finalURL.value = props.url + "/" + props.locale
}
</script>

<template>
  <VElementButton
    :label="$t('action.legal.terms')"
    :href="finalURL + '/terms'"
    type="a"
    :flat="true"
  />
  <VElementButton
    :label="$t('action.legal.privacy')"
    :href="finalURL + '/privacy'"
    type="a"
    :flat="true"
  />
  <VElementButton
    :label="$t('action.legal.cookies')"
    :href="finalURL + '/cookies'"
    type="a"
    :flat="true"
  />
</template>