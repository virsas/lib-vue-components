<script setup>
import { ref } from "vue";
import VFormInput from "../form/VFormInput.vue"
import VElementButton from "./VElementButton.vue"

const props = defineProps({
  rows: {
    type: Array,
    required: true,
  },
  columns: {
    type: Array,
    required: true,
  },
  actions: {
    type: Array,
    default: undefined,
  },
  showFunction: {
    type: Function,
    default() {
      return true;
    },
  },
  rowKey: {
    type: String,
    default: "id",
  },
  sortBy: {
    type: String,
    default: "createdAt",
  },
  rowsPerPage: {
    type: Number,
    default: 20,
  },
  page: {
    type: Number,
    default: 1,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  class: {
    type: String,
    default: undefined,
  },
  imageWidth: {
    type: String,
    default: "25px",
  },
});

const filter = ref();
const pagination = ref({
  sortBy: props.sortBy,
  descending: true,
  page: props.page,
  rowsPerPage: props.rowsPerPage,
});

</script>

<template>
  <div :class="class">
    <q-toolbar class="q-px-none">
      <q-space />
      <VFormInput
        v-model="filter"
        :counter="false"
        :label="$t('table.global.search')"
        :search="true"
      />
    </q-toolbar>
    <div v-if="rows">
      <q-table
        flat
        :row-key="rowKey"
        :no-data-label="$t('table.global.noDataResponse')"
        :no-results-label="$t('table.global.noDataFiltered')"
        :rows="rows"
        :columns="columns"
        :loading="loading"
        :filter="filter"
        :pagination="pagination"
        :rows-per-page-options="[0]"
        bordered
      >
        <template #header="headprops">
          <q-tr :props="headprops">
            <q-th
              v-for="col in headprops.cols"
              :key="col.name"
              :props="headprops"
              class="text-left"
            >
              {{ col.label }}
            </q-th>
            <q-th
              v-if="actions && actions.length > 0"
              class="text-left"
            >
              {{ $t("table.global.actions") }}
            </q-th>
          </q-tr>
        </template>
        <template #body="bodyprops">
          <q-tr :props="bodyprops">
            <q-td
              v-for="col in bodyprops.cols"
              :key="col.name"
              :props="bodyprops"
              @click="showFunction(bodyprops.row.id)"
            >
              <span
                v-if="(typeof col.value === 'string' || col.value instanceof String) && col.value.includes('https://') && col.value.includes('.png')"
              >
                <q-img
                  :width="imageWidth"
                  :src="col.value"
                />
              </span>
              <span v-else>
                <span v-if="col.value === true">
                  <q-icon
                    class="text-green"
                    name="circle"
                  />
                </span>
                <span v-if="col.value === false">
                  <q-icon
                    class="text-red"
                    name="circle"
                  />
                </span>
                <span v-if="col.value !== false && col.value !== true">
                  {{ col.value }}
                </span>
              </span>
            </q-td>
            <q-td v-if="actions && actions.length > 0">
              <VElementButton
                v-for="action in actions"
                :key="action.type"
                :icon="action.icon"
                size="sm"
                class="q-mr-sm"
                :round="true"
                color="secondary"
                :tooltip="$t('action.button.' + action.type)"
                @click="action.function(bodyprops.row)"
              />
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </div>
  </div>
</template>
