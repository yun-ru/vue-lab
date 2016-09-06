<template>
    <input type="text" v-model="msg">
    <b>Second input: {{msg}}</b>
</template>

<script>
    export default {
        name: "SecondInputChild",
        data() {
            return {
                msg: ""
            }
        }
    }

</script>
