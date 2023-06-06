import { defineComponent, createVNode, createTextVNode, openBlock, createElementBlock } from "vue";
const JSXButton = defineComponent({
  name: "JSXButton",
  render() {
    return createVNode("button", null, [createTextVNode("JSX Button")]);
  }
});
const _sfc_main = {
  name: "SFCButton"
};
const _export_sfc = (sfc, props2) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props2) {
    target[key] = val;
  }
  return target;
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", null, "SFC Button");
}
const SFCButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const __uno = "";
const props = {
  color: {
    type: String,
    default: "blue"
  }
};
const SButton = defineComponent({
  name: "SButton",
  props,
  setup(props2, {
    slots
  }) {
    return () => createVNode("button", {
      "class": `
      py-2
      px-4
      font-semibold
      rounded-lg
      shadow-md
      text-white
      bg-${props2.color}-500
          hover:bg-${props2.color}-700
      border-none
      cursor-pointer
      `
    }, [slots.default ? slots.default() : "\u666E\u901A\u6309\u94AE"]);
  }
});
const entry = {
  install(app) {
    app.component(JSXButton.name, JSXButton);
    app.component(SFCButton.name, SFCButton);
    app.component(SButton.name, SButton);
  }
};
export {
  JSXButton,
  SFCButton,
  entry as default
};
