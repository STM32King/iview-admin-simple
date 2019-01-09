<template>
    <InputNumber :max="10" :min="1" v-model="value1"></InputNumber>
</template>
<script>
    export default {
        data () {
            return {
                value1: 1
            }
        }
    }
</script>
