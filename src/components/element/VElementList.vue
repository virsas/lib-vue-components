<script setup>
const props = defineProps({
  elementClass: {
    type: String,
    default: "full-width",
  },
  headerClass: {
    type: String,
    default: "full-width",
  },
  toolbarClass: {
    type: String,
    default: "",
  },
  itemClass: {
    type: String,
    default: "",
  },
  label: {
    type: String,
    required: true,
  },
  dense: {
    type: Boolean,
    default: true,
  },
  bordered: {
    type: Boolean,
    default: true,
  },
  separator: {
    type: Boolean,
    default: true,
  },
  caption: {
    type: Boolean,
    default: true,
  },
  items: {
    type: Array,
    default: [],
  }
});
</script>

<template>
  <div :class="elementClass">
    <q-toolbar :class="toolbarClass">
      <span :class="headerClass"> {{ label }} </span>
    </q-toolbar>
    <q-list
      :bordered="bordered"
      :separator="separator"
    >
      <q-item
        :dense="dense"
        v-for="(item, i) in items"
        :key="i"
      >
        <q-item-section>
          <q-item-label :caption="caption"> {{ item.key }}: </q-item-label>
        </q-item-section>
        <q-item-section>
          <q-item-label :class="itemClass">
            {{ item.value }}
          </q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>
