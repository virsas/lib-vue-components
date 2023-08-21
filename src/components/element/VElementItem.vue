<script setup>
defineProps({
  text: {
    type: String,
    default: "",
  },
  to: {
    type: String,
    default: undefined,
  },
  overline: {
    type: String,
    default: "",
  },
  caption: {
    type: String,
    default: "",
  },
  icon: {
    type: String,
    default: "",
  },
  iconSize: {
    type: String,
    default: "sm",
  },
  menu: {
    type: Boolean,
    default: false,
  },
  clickable: {
    type: Boolean,
    default: true,
  },
  closePoppup: {
    type: Boolean,
    default: true,
  },
  class: {
    type: String,
    default: undefined,
  },
});
</script>

<template>
  <q-item
    v-close-popup="closePoppup"
    :clickable="clickable"
    :to="to ? { name: to } : null"
    exact
    active-class="active-link"
    :class="class"
  >
    <q-item-section
      v-if="icon !== ''"
      avatar
    >
      <q-icon
        :size="iconSize"
        :name="icon"
      />
    </q-item-section>
    <q-item-section>
      <q-item-label
        v-if="overline !== ''"
        overline
      >
        {{ overline }}
      </q-item-label>
      <q-item-label v-if="text !== ''">
        {{ text }}
      </q-item-label>
      <q-item-label
        v-if="caption !== ''"
        caption
      >
        {{ caption }}
      </q-item-label>
    </q-item-section>
    <q-menu v-if="menu">
      <q-list>
        <slot />
      </q-list>
    </q-menu>
  </q-item>
</template>
