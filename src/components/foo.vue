<template>
    <h3 class="title">{{title}}</h3>
    <p class="text-danger">{{name}}</p>
    <button @click="changeTitle">Change Title</button>
</template>

<script>
    export default {
        replace: false,
        props: ['name'],
        data() {
            return {
                title: "foo"
            }
        },
        ready() {
        },
        methods: {
            changeTitle() {
                this.title = "fooooooo"
            }
        }
    }
</script>

