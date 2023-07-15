// Import custom elements
import VElementBreadcrumb from "./components/element/VElementBreadcrumb.vue";
import VElementButton from "./components/element/VElementButton.vue";
import VElementLogo from "./components/element/VElementLogo.vue";
// Import form elements
import VForm from "./components/form/VForm.vue";
import VFormInput from "./components/form/VFormInput.vue";
import VFormSelect from "./components/form/VFormSelect.vue";
import VFormDate from "./components/form/VFormDate.vue";
// Import page elements
import VPageHeader from "./components/page/VPageHeader.vue";

const virsas = {
  install(Vue) {
    // Install custom elements
    Vue.component("VElementBreadcrumb", VElementBreadcrumb);
    Vue.component("VElementButton", VElementButton);
    Vue.component("VElementLogo", VElementLogo);
    // Install form elements
    Vue.component("VForm", VForm);
    Vue.component("VFormInput", VFormInput);
    Vue.component("VFormSelect", VFormSelect);
    Vue.component("VFormDate", VFormDate);
    // Install page elements
    Vue.component("VPageHeader", VPageHeader);
  },
};

export default virsas;
