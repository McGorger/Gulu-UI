import Vue from 'vue';
import Button from './button';
import ButtonGroup from './button-group';
import Input from './input.vue';
import Icon from './icon.vue';
import Row from './row.vue';
import Col from './col.vue';
import Layout from './layout.vue';
import Footer from './footer.vue';
import Sider from './Sider.vue';
import Content from './content.vue';
import Header from './header.vue';
import Toast from './toast.vue';
import plugin from './plugin';
Vue.component('g-button', Button)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-icon', Icon)
Vue.component('g-input', Input)
Vue.component('g-row', Row);
Vue.component('g-col', Col);
Vue.component('g-layout', Layout);
Vue.component('g-header', Header);
Vue.component('g-footer', Footer);
Vue.component('g-sider', Sider);
Vue.component('g-content', Content);
Vue.component('g-toast', Toast);
Vue.use(plugin);
new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: false,
        loading3: true,
        message: "hi"
    },
    created() {
        this.$toast('你的智商要充值', {
            position:'middle',
            enableHtml:true,
            closeButton:{
                text:"已充值",
                callback(){
                    console.log('dada');
                }
            },
            autoClose:true,
            autoCloseDelay:100

        });
    },
    methods: {

        showToast() {

        }
    }
})

