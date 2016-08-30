<template>
    <h3 class="title">{{title}}</h3>
    <button @click="changeTitle">Change Title</button>
</template>

<script>
    export default {
        data() {
            return {
                title: "foo"
            }
        },
        methods: {
            changeTitle() {
                this.title = "fooooooo"
            }
        }
    }
</script>

