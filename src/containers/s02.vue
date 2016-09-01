<!--

Two way to show computed value:
 1. computed()
 2. $watch

-->

<template>
    <h1>{{$route.name}}</h1>
    <p><input type="text" v-model="msg"></p>
    <p><input type="text" v-model="num"></p>
    <p><input type="text" v-model="firstName"><input type="text" v-model="lastName"></p>
    <p>{{msg}}</p>
    <p>{{newNum}}</p>
    <p>{{newMsg}}</p>
    <h3>{{fullName}}</h3>
</template>

<script>
    export default {
        data() {
            return {
                msg: "good day",
                num: 50,
                newMsg: ""
            }
        },
        computed: {
            newNum() {
                return this.num-0 + 50
            }
        },
        ready() {
            this.$watch("msg",function() {
                this.newMsg = this.msg + '!!!'
            })
        }
    }

</script>


