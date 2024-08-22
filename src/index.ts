import {App} from "vue";

import LSvgIcon from "./components/LSvgIcon";

const components = [
    {
        name: 'l-svg-icon',
        component: LSvgIcon
    }
]

const install = (app: App) => {
    components.forEach(item => {
        app.component(item.name, item.component)
    })
}

export {
    LSvgIcon,
    install
}

export default {
    install
}
