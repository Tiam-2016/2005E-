import Vue from 'vue'

import myLoading from '@/components/myLoading/myLoading'

const MyLoading = Vue.extend(myLoading)

const Loading = new MyLoading({
    el: document.createElement('div')
})

Loading.show = false

const $loading = {
    show(msg) {
        Loading.show = true
        Loading.msg = msg
        document.body.appendChild(Loading.$el)
    },

    hide() {
        Loading.show = false
    }
}

export default {
    install() {
        if(!Vue.$loading) {
            Vue.$loading = $loading
        }
        Vue.mixin({
            created() {
                this.$loading = Vue.$loading
            }
        })
    }
}