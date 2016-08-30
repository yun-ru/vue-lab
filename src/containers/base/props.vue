<template>
    <input v-model="name">
    <br>
    <Foo :name="name"></Foo>
    <br><br>
    <User v-for="user in users" :user="user" :index="$index"></User>
</template>

<script>

    import Foo from '../../components/foo.vue';
    import User from '../../components/user.vue';

    export default {
        data() {
            return {
                name: "Ruby",
                users: [
                    {name: 'Ruby', city: 'Taichung'},
                    {name: 'Peter', city: 'Taipei'},
                    {name: 'John', city: 'Taichung'}
                ]
            }
        },
        components: {
            Foo,
            User
        }
    }

</script>

