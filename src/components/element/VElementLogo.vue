<script setup>
import { computed, ref, watch } from "vue";
import { useQuasar } from "quasar";

const $q = useQuasar();

const props = defineProps({
  // It darkeable is set to true, Origin or Invert will be attached to the end of the logo name based on the theme color
  darkable: {
    type: Boolean,
    default: false,
  },
  lightName: {
    type: String,
    default: "Origin",
  },
  darkName: {
    type: String,
    default: "Invert",
  },
  assetsUrl: {
    type: String,
    required: true,
  },
  logoName: {
    type: String,
    required: true,
  },
  logoExtencion: {
    type: String,
    default: "png",
  },
  websiteURL: {
    type: String,
    default: undefined,
  },
  websiteLocale: {
    type: String,
    default: "",
  },
  width: {
    type: String,
    default: "100%",
  },
  class: {
    type: String,
    default: undefined,
  },
});

const logoColor = ref("");
const imageURL = computed({
  get: () =>
    props.assetsUrl + "/" + props.logoName + logoColor.value + "." + props.logoExtencion,
});

const websiteURL = ref(props.websiteURL);
if (props.websiteLocale != "") {
  websiteURL.value = props.websiteURL + "/" + props.websiteLocale;
}

if (props.darkable) {
  const dark = computed({ get: () => $q.dark.isActive });
  logoColor.value = props.lightName;

  if (dark.value) {
    logoColor.value = props.darkName;
  }

  watch(dark, (val) => {
    if (val) {
      logoColor.value = props.darkName;
    } else {
      logoColor.value = props.lightName;
    }
  });
}
</script>

<template>
  <span v-if="websiteURL">
    <a :href="websiteURL">
      <q-img
        :src="imageURL"
        :width="width"
        :class="class"
      />
    </a>
  </span>
  <span v-else>
    <q-img
      :src="imageURL"
      :width="width"
      :class="class"
    />
  </span>
</template>
