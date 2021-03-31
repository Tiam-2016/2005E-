<template>
    <div id="my_tab">
        <ul>
            <router-link tag="li" to="/about" :style="{
                background: $route.path === '/about'? $store.state.backColor : '#fff',
                color: $route.path === '/about'? '#fff' : $store.state.backColor
            }">图书商城</router-link>
            <router-link tag="li" to="/mybooks" :style="{
                background: $route.path === '/mybooks' ? $store.state.backColor : '#fff',
                color: $route.path === '/mybooks' ? '#fff' : $store.state.backColor
            }">我的书架</router-link>
        </ul>
    </div>
</template>

<script>
export default {
    name: '',
    created() {

    },
    methods:{

    },
}
</script>

<style scoped lang="scss">
.my_tab {
    width: 100%;
    height: 60px;
    border-top: 1px solid #ccc;
    ul {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        li{
            flex-basis: 50%;
            text-align: center;
            line-height: 50%;
            color: #fff;
        }
    }
}
</style>