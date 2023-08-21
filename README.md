# @virsas/vue-components

Virsas Vue3 / Quasar2 component and utility library

## Installation

### Install

```bash
cd vue3_project
npm install @virsas/vue-components
npm run dev
```

### Use plugin (edit main.js file)

```js
import { createApp } from "vue";

import App from "./App.vue";
import virsas from "@virsas/vue-components";

import "./main.css";

const app = createApp(App);

app.use(virsas);
app.mount("#app");
```

### Usage (edit any .vue file)

```vue
<script setup>
const assetsURL = import.meta.env.VITE_ASSETS_URL;
</script>

<template>
  <q-layout view="hHh LpR fff">
    <q-page-container>
      <q-page>
        <div class="row justify-center q-py-xl">
          <div class="col-xs-10 col-sm-6 col-md-3 col-3">
            <VLogo
              :darkable="true"
              :assets-url="assetsURL + '/logo'"
              logo-name="main"
            />
          </div>
        </div>
        <div class="row justify-center">
          <div class="col-xs-10 col-sm-8 col-md-4 col-4">
            <div class="text-center">
              <router-view />
            </div>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
```

### Usage of utilities

```js
import { defineStore } from "pinia";
import axios from "axios";

import { apiHeaders, notify } from "@virsas/vue-components";

const api = import.meta.env.VITE_API_URL;

export const useStore = defineStore("item", {
  state: () => ({
    items: [],
  }),
  actions: {
    async list() {
      try {
        const res = await axios.get(`${api}/items`, apiHeaders());
        this.items = res.data;
        return true;
      } catch (e) {
        notify({ message: `error.${e.response.data.error}` });
        return false;
      }
    },
  },
});
```

## Utilities List

### Content

- setMetadata

### Date

- stringToDate
- stringToDatetime
- stringToTime
- stringToTimestamp
- currentYear

### Header

- apiHeaders

### Notification

- notify

### Pagination

- pagedArray

### Time

- sleep

### Validation

- isValidEmail
- isValidTelephone
- isValidLength
- isValidConfirmation
- isGoodPassword

## Components List

### Elements

- VElementBreadcrumb
- VElementButton
- VElementIteem
- VElementLogo
- VElementTable

### Form

- VForm
- VFormDate
- VFormInput
- VFormSelect
- VFormCheckbox

### Page

- VPageHeader
- VPageLegal
- VPageLoading
- VPagePopup

## Individual components

### VElementLogo

#### Description

This component can be used to show a clickable or non clickable logo with configurable assets url, website to point to and image source for dark and light theme.

#### Props

| Prop Name     | Required | Default Value | Example value              |
| ------------- | -------- | ------------- | -------------------------- |
| assetsURL     | &#10003; |               | https://assets.example.org |
| logoName      | &#10003; |               | logo                       |
| logoExtencion | &#10005; | png           | jpg                        |
| websiteURL    | &#10005; |               | https://www.example.com    |
| websiteLocale | &#10005; |               | en-US                      |
| darkable      | &#10005; | false         | true                       |
| width         | &#10005; | 100%          | 50px                       |
| class         | &#10005; |               | q-mt-xl                    |
