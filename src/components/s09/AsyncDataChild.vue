<template>
    <h4>User list</h4>
    <ul>
        <li v-for="user in users">{{user}}</li>
    </ul>
</template>

<script>
    export default {
        name: "AsyncDataChild",
        activate(done){
            setTimeout(function() {
                this.users = ["Ruby","Daniel","Bill"]
                done()
            }.bind(this),2000)
        },
        data() {
            return {
                users: null
            }
        }
    }

</script>
