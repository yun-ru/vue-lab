<template>
    <my-header></my-header>
    <h1 class="title">{{title}}</h1>
    <p>{{num? "good":"no"}}</p>
    <div>
        <a v-link='{name: "router"}'>Router</a>
        <a v-link='{name: "emit"}'>Emit</a>
        <a v-link='{name: "resource"}'>Resource</a>
    </div>
    <button @click="sayhi">sayhi</button>
    <router-view></router-view>
</template>

<script>
    import myHeader from '../components/header.vue';
    export default {
        replace: false,
        events: {
            'hook:created'() {
                console.log('created!')
            },
            greeting (name) {
                console.log(`Hi ${name}! Have a good day!`)
            },
            bye: 'sayGoodbye'
        },
        data() {
            return {
                num: 10,
                title: "Ruby's Vue",
                interval: []
            }
        },
        components: {
            myHeader
        },
        ready() {
            console.log(this);
            this.$on("bye",function(){
                console.log("byebye")
            })
//            this.$router.go("/login/foo");
            this.$http.put("https://jsonplaceholder.typicode.com/users/1",{name: "Ruby"});
        },
        methods: {
            sayhi() {
                console.log("hi ruby");
                this.$emit("bye");
                this.$emit("greeting","Ruby")
            },
            sayGoodbye: function() {
                console.log("goodbye!")
            }
        },
        route: {
            activate(transition) {
                console.log('hook-example activated!')
                transition.next()
            },
            deactivate(transition) {
                console.log('hook-example deactivated!')
                transition.next()
            }
        }
    }

</script>


<style>
    .title{
        color: darkcyan;
    }
    a{
        margin: 0 2px;
    }
</style>
