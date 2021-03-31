<template>
    <div id="my-loading" v-show="show">
        <div>{{msg}}</div>
    </div>
</template>

<script>
export default {
    name: '',
    props: {
        show: Boolean,
        msg: String
    }
}
</script>

<style scoped>
#my-loading {
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
}
#my-loading div{
    padding: 0 20px;
    line-height: 40px;
    background-color: rgba(0, 0, 0, 0.8);
    color: #fff;
    border-radius: 6px;
}
</style>