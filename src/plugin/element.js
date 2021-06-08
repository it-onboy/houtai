import Vue from "vue";
import {
    Button,
    Container,
    Header,
    Aside,
    Main,
    Footer,
    Input,
    Menu,
    Submenu,
    MenuItem,
    MenuItemGroup,
    Table,
    TableColumn,
    Form,
    FormItem,
    Pagination
    } from "element-ui";

const element = {
    install: function (Vue) {
        Vue.use(Button)
        Vue.use(Container)
        Vue.use(Header)
        Vue.use(Aside)
        Vue.use(Main)
        Vue.use(Footer)
        Vue.use(Input)
        Vue.use(Menu)
        Vue.use(Submenu)
        Vue.use(MenuItem)
        Vue.use(MenuItemGroup)
        Vue.use(Table)
        Vue.use(TableColumn)
        Vue.use(Form)
        Vue.use(FormItem)
        Vue.use(Pagination)
    }
}
export default element