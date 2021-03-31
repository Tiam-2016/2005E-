<template>
    <li class="my_card">
        <slot></slot>
    </li>
</template>

<script>
export default {
    name: '',
    data() { 
        return {

        }
    },
    created() {

    },
    methods:{

    },
}
</script>

<style scoped>
    .my_card {
        padding: 15px;
        box-shadow: 2px 5px 10px #ccc;
    }
</style>