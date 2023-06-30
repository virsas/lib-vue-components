import components from "./components";

const plugin = {
  install(Vue) {
    for (const prop in components) {
      if (Object.hasOwn(components, prop)) {
        const component = components[prop];
        Vue.component(component.name, component);
      }
    }
  },
};

export default plugin;
