import Vue from 'vue'

Vue.directive('back', {
    bind(el, params) {
        el.style.backgroundColor = params.value
    },


    update(el, params) {
        el.style.backgroundColor = params.value
    }

})