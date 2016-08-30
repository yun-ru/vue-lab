<template>
    <my-header @sleep='goodDream' v-ref:my-header>
        <p>The msg from parent.</p>
    </my-header>
    <h3>Emit</h3>
    <div>
        <button @click="hungry">hungry</button>
        <button @click="sayHi('Ruby')">say hi</button>
    </div>
</template>

<script>
    import myHeader from '../../components/header.vue'
    export default {
        data() {
            return {
                msg: 'Be good!!'
            }
        },
        created() {
            this.$on('buy',this.eatfood.bind(this,'pizza'));
        },
        ready() {
            console.log(this);
            this.$emit('greeting');
            this.$broadcast('parent-msg',this.msg)
        },
        methods: {
            goodDream() {
                console.log("you sleep");
                this.msg = 'Wish you have a good dream!';
                this.$broadcast('parent-msg',this.msg)
            },
            hungry() {
                console.log("I'm hungry!");
                this.$emit('buy','good food');
            },
            sayHi(name) {
                console.log("Hi Everyone!");
                if(name) console.log(`Hi ${name}!!!!`)
            },
            eatfood(food) {
                console.log(`Eat ${food}`)
            }
        },
        events: {
            'hook:ready'() {
                console.log("I hook to ready function!")
            },
            buy(thing) {
                console.log(`Go to buy ${thing}`);
            },
            greeting: 'sayHi',
            'child-msg'(msg) {
                console.log(msg)
            }

        },
        components: {
            myHeader
        }
    }

</script>

