<template>
    <h3>Emit</h3>
    <div>
        <button @click="hungry">hungry</button>
        <button @click="sayHi('Ruby')">say hi</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        created() {
            this.$on('buy',eatfood.bind(this,'pizza'));
        },
        ready() {
            console.log("readey!");
            this.$emit('greeting');
        },
        methods: {
            hungry() {
                console.log("I'm hungry!");
                this.$emit('buy','good food');
            },
            sayHi(name) {
                console.log("Hi Everyone!");
                if(name) console.log(`Hi ${name}!!!!`)
            }
        },
        events: {
            'hook:ready'() {
                console.log("I hook to ready function!")
            },
            buy(thing) {
                console.log(`Go to buy ${thing}`);
            },
            greeting: 'sayHi'

        }
    }

    function eatfood(food) {
        console.log(`Eat ${food}`)
    }
</script>

