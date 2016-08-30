<template>
    <h1 class="title">{{title}}</h1>
    <nav>
        <a class="btn btn-default" v-link='{path: "/"}'>Index</a>
        <a class="btn btn-default" v-link='{name: "base"}'>Base</a>
    </nav>
    <router-view></router-view>
</template>

<script>
    export default {
        replace: false,
        data() {
            return {
                num: 10,
                title: "Ruby's Vue",
                interval: []
            }
        },
        ready() {
            this.$http.put("https://jsonplaceholder.typicode.com/users/1",{name: "Ruby"});
        }
    }

</script>


<style lang='stylus'>
    body,html
        height: 100%
    body
        padding: 20px
    nav
        padding: 10px 0

</style>
