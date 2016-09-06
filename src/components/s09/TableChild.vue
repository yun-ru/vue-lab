<template>
    <tr v-for="user in users">
        <td>{{$index}}</td>
        <td>{{user}}</td>
    </tr>
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


