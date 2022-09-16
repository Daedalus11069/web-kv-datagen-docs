import Theme from "vitepress/theme";
import ZoomImg from "./components/ZoomImg.vue";

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.component("ZoomImg", ZoomImg);
  }
};
