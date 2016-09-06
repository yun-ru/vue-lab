<template>
    <input type="text" v-model="msg">
    <b>Fist input: {{msg}}</b>
</template>

<script>
    export default {
        name: "FirstInputChild",
        data() {
            return {
                msg: ""
            }
        }
    }

</script>
