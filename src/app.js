import Vue from 'vue';
import Button from './button';
import ButtonGroup from './button-group';
import Input from './input.vue';
import Icon from './icon.vue';
Vue.component('g-button',Button)
Vue.component('g-button-group',ButtonGroup)
Vue.component('g-icon',Icon)
Vue.component('g-input',Input)
new Vue({
    el:'#app',
    data:{
        loading1:false,
        loading2:false,
        loading3:true
    },
})
import chai from 'chai'
import spies from 'chai-spies'
chai.use(spies);
const expect  = chai.expect;
// 单元测试
// {
//     const Constructor =Vue.extend(Button);
//     const button = new Constructor({
//         propsData:{
//            icon:'setting'
//         }
//     });
//     button.$mount();
//     let useElement  =  button.$el.querySelector('use');
//     expect(useElement.getAttribute('xlink:href')).to.eq('#i-setting');
//     button.$el.remove();
//     button.$destroy();
// }
// {
//     const Constructor =Vue.extend(Button);
//     const vm = new Constructor({
//         propsData:{
//            icon:'setting',
//            loading:true
//         }
//     });
//     vm.$mount();
//     let useElement  =  vm.$el.querySelector('use');
//     expect(useElement.getAttribute('xlink:href')).to.eq('#i-loading');
//     vm.$el.remove();
//     vm.$destroy();
// }
// {
//     const Constructor =Vue.extend(Button);
//     const vm = new Constructor({
//         propsData:{
//            icon:'setting',
//            loading:true
//         }
//     });
//     vm.$mount('#test');
//     let svg  =  vm.$el.querySelector('svg');
//   let {order}= window.getComputedStyle(svg);
//     expect(order).to.eq('1');
//     vm.$el.remove();
//     vm.$destroy();
// }
// {
//     const Constructor =Vue.extend(Button);
//     const vm = new Constructor({
//         propsData:{
//            icon:'setting',
  
//         }
//     });
//     vm.$mount();  
//     let spy = chai.spy(function(){})
//     vm.$on('click',spy)
//     let  button  =  vm.$el;
//     button.click();
//     expect(spy).to.have.been.called();
// }