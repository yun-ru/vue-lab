<template>
    <div class="row">
        <div class="col-sm-3">
            <h3 class="title">{{title}}</h3>
            <nav>
                <a v-link='{path: "/"}'>Index</a>
                <a v-link='{name: "s01"}'>01. Data Binding Syntax</a>
                <a v-link='{name: "s02"}'>02. Computed Properties</a>
                <a v-link='{name: "s03"}'>03. Class and Style Bindings</a>
                <a v-link='{name: "s04"}'>04. Conditional Rendering</a>
                <a v-link='{name: "s05"}'>05. List Rendering</a>
                <a v-link='{name: "s06"}'>06. Methods and Event Handling</a>
                <a v-link='{name: "s07"}'>07. Form Input Bindings</a>
                <a v-link='{name: "s08"}'>08. Transitions</a>
                <a v-link='{name: "s09"}'>09. Components</a>
                <a v-link='{name: "s10"}'>10. Reactivity in Depth</a>
                <a v-link='{name: "s11"}'>11. Custom Directives</a>
                <a v-link='{name: "s12"}'>12. Custom Filters</a>
                <a v-link='{name: "base"}'>13. Mixins</a>
            </nav>

        </div>
        <div class="col-sm-9">

            <router-view></router-view>
        </div>
    </div>
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
        a
            display: block
            margin: 5px 0


</style>
