import VLogo from "./components/element/VLogo.vue";
import VForm from "./components/element/VForm.vue";
import VFormInput from "./components/element/VFormInput.vue";
import VFormSelect from "./components/element/VFormSelect.vue";
import VFormDate from "./components/element/VFormDate.vue";

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
