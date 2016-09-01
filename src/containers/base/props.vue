<template>
    <input v-model="name">
    <br>
    <Bar num="13" msg="ruby"></Bar>
    <br>
    <div class="row">
        <div class="col-sm-6">
            <Foo :name.sync="name"></Foo>
        </div>
        <div class="col-sm-6">
    <Foo :name.once="name" v-ref:foo></Foo>
        </div>
    </div>
    <br><br>
    <User v-for="user in users" :user="user" :index="$index"></User>
</template>

<script>
    import Foo from '../../components/foo.vue';
    import Bar from '../../components/bar.vue';
    import User from '../../components/user.vue';

    export default {
        data() {
                return {
                    name: "Ruby",
                    users: [{
                        name: 'Ruby',
                        city: 'Taichung'
                    }, {
                        name: 'Peter',
                        city: 'Taipei'
                    }, {
                        name: 'John',
                        city: 'Taichung'
                    }]
                }
            },
            ready() {
              console.log(this.$refs.foo.title);
              console.log(this)
            },
            components: {
                Foo,
                Bar,
                User
            }
    }
</script>