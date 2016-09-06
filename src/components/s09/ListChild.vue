<template>
    <li v-for="user in users">{{user}}</li>
</template>

<script>
    export default {
        data() {
            return {
                users: ['Ruby','Bill','Daniel']
            }
        }
    }

</script>


