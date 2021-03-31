<template>
    <div id="my-header" v-back="$store.state.backColor">
        <slot></slot>
    </div>
</template>
<style scoped lang="scss">
    #my-header {
        height: 60px;
        text-align: center;
        line-height: 60px;
        font-size: 20px;
        font-weight: bold;
        color: #fff;
    }
</style>