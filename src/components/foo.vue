<template>
    <h1 class="title">{{title}}</h1>
    <h3>{{$route.params.username}}</h3>
</template>

<script>
    export default {
        data() {
            return {
                title: "foo"
            }
        }
    }
</script>

