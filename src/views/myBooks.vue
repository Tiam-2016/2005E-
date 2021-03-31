<template>
    <div>
        <my-header class="books_header">
            <span class="back iconfont icon029cancel" @click="$router.back()"></span>
            <span>我的书架</span>
        </my-header>
        <div class="is_looking">
            <h2 v-back="$store.state.backColor">
                <span>正在看</span> 
                <i class="iconfont icondown" :class="current === 1 && arrowClass ? 'arrow-down' : ''" @click="choseItem(1)"></i>
            </h2>
            <transition name="slide">
                <ul v-show="showIsLooking">
                    <li v-for="(item, i) in $store.state.myBooks" :key="item.id">
                        <div v-if="item.state === 0">
                            <h3>{{item.name}}</h3>
                            <div>
                                <span class="sup_work" :style="{
                                    color: $store.state.backColor
                                }" @click="changeState(1, i)">标记为已看完</span>|
                                <span class="no_sup" @click="del(i)">删除图书</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </transition>
        </div>
        <div class="has_looked">
            <h2 v-back="$store.state.backColor">
                <span>已完结</span>
                <i class="iconfont icondown" :class="current === 2 && arrowClass ? 'arrow-down' : ''" @click="choseItem(2)"></i>
            </h2>
            <transition name="slide">
                <ul v-show="showHasLooked">
                    <li v-for="(item, i) in $store.state.myBooks" :key="item.id">
                        <div v-if="item.state === 1">
                            <h3>{{item.name}}</h3>
                            <div>
                                <span class="sup_work" :style="{
                                    color: $store.state.backColor
                                }" @click="changeState(0, i)">再看一遍</span> |
                                <span class="no_sup" @click="del(i)">删除图书</span>
                            </div>
                        </div>
                        
                    </li>
                </ul>
            </transition>
        </div>
    </div>
</template>

<script>
import myHeader from '@/components/myHeader/myHeader'
export default {
    name: '',
    components: {
        myHeader
    },
    data() { 
        return {
            current: 1,
            arrowClass: false,
            showIsLooking: false,
            showHasLooked: false
        }
    },
    created() {

    },
    methods:{
        choseItem(i) {
            this.current = i
            this.arrowClass = this.arrowClass ? false : true
            if(i === 1) {
                this.showIsLooking = !this.showIsLooking
            } else {
                this.showHasLooked = !this.showHasLooked
            }
        },

        changeState(state, i) {
            this.$store.commit('changeState', {state, i})
        },

        del(i) {
            this.$store.commit('delBooks', i)
        }
    },
}
</script>

<style scoped lang="scss">
.books_header {
    position: relative;
}
.books_header .back {
    font-size: 14px;
    color: cornflowerblue;
    position: absolute;
    left: 10px;
    top: 0;
}
.is_looking {
    margin-top: 20px;
}
.is_looking, .has_looked {
    width: 100%;
    ul{
        background-color: #f6f6f6;
        overflow: hidden;
        max-height: 200px;
    }
    li div{
        display: flex;
        justify-content: space-between;
        line-height: 40px;
        height: 40px;
        padding-left: 15px;
        h3{
            font-weight: bold;
        }
        .sup_work,  .no_sup{
            font-size: 12px;
            color: #ccc;
            padding: 0 5px;
        }
        .sup_work {
            font-weight: bold;
        }
    }
    h2 {
        font-size: 20px;
        font-weight: bold;
        color: #fff;
        line-height: 40px;
        padding: 0 15px;
        display: flex;
        justify-content: space-between;
    }
}
.icondown {
    transform: rotate(-90deg);
    transition: all 0.5s;
}
.icondown.arrow-down {
    transform: rotate(0deg);
}
.slide-enter-active, .slide-leave-active {
    transition: .5s;
}
.slide-enter, .slide-leave-to {
    opacity: 0;
}
</style>