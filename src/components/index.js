// Import custom elements
import VElementBreadcrumb from "./element/VElementBreadcrumb.vue";
import VElementButton from "./element/VElementButton.vue";
import VElementItem from "./element/VElementItem.vue";
import VElementLogo from "./element/VElementLogo.vue";
import VElementTable from "./element/VElementTable.vue";
// Import form elements
import VForm from "./form/VForm.vue";
import VFormInput from "./form/VFormInput.vue";
import VFormSelect from "./form/VFormSelect.vue";
import VFormDate from "./form/VFormDate.vue";
// Import page elements
import VPageHeader from "./page/VPageHeader.vue";
import VPageLegal from "./page/VPageLegal.vue";
import VPageLoading from "./page/VPageLoading.vue";
import VPagePopup from "./page/VPagePopup.vue";

export const virsas = {
  install(Vue) {
    // Install custom elements
    Vue.component("VElementBreadcrumb", VElementBreadcrumb);
    Vue.component("VElementButton", VElementButton);
    Vue.component("VElementItem", VElementItem);
    Vue.component("VElementLogo", VElementLogo);
    Vue.component("VElementTable", VElementTable);
    // Install form elements
    Vue.component("VForm", VForm);
    Vue.component("VFormInput", VFormInput);
    Vue.component("VFormSelect", VFormSelect);
    Vue.component("VFormDate", VFormDate);
    // Install page elements
    Vue.component("VPageHeader", VPageHeader);
    Vue.component("VPageLegal", VPageLegal);
    Vue.component("VPageLoading", VPageLoading);
    Vue.component("VPagePopup", VPagePopup);
  },
};
