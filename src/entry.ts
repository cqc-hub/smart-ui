import { App } from "vue";
import JSXButton from "./button/JsxButton";
import SFCButton from "./button/SFCButton.vue";
import SButton from "./button";

export { JSXButton, SFCButton };

export default {
  install(app: App): void {
    app.component(JSXButton.name, JSXButton);
    app.component(SFCButton.name, SFCButton);
    app.component(SButton.name, SButton);
  },
};
