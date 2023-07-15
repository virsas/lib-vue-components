import VLogo from "./components/element/VLogo.vue";
import VForm from "./components/form/VForm.vue";
import VFormInput from "./components/form/VFormInput.vue";
import VFormSelect from "./components/form/VFormSelect.vue";
import VFormDate from "./components/form/VFormDate.vue";

const virsas = {
  install(Vue) {
    Vue.component("VLogo", VLogo);
    Vue.component("VForm", VForm);
    Vue.component("VFormInput", VFormInput);
    Vue.component("VFormSelect", VFormSelect);
    Vue.component("VFormDate", VFormDate);
  },
};

export default virsas;
