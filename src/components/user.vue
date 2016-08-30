<template>
    <p>My name is <b>{{user.name}}</b>, live in <b>{{user.city}}</b></p>
</template>

<script>
    export default {
        replace: false,
        props: ['user','index']
    }
</script>

