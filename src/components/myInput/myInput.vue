<template>
    <input type="text" :value="value" @input="iptChange" :placeholder="placeholder">
</template>

<script>
export default {
    name: '',
    props: {
        value: String,
        placeholder: String
    },
    methods:{
        iptChange(e) {
            this.$emit('input', e.target.value)
        }
    },
}
</script>