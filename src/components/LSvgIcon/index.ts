import { App } from "vue";
import LSvgIcon from "./LSvgIcon.vue";

LSvgIcon.install = (app: App) => {
    app.component('l-svg-icon', LSvgIcon);
}

export default LSvgIcon;
