<template>
    <h3>Mixin</h3>
    <button @click="sayHi">sayHi</button>
</template>

<script>
    var myMixin = {
        created() {
            console.log("I been created from remote mixin!")
        },
        methods: {
            sayHi() {
                alert("hi from remote mixin")
            }
        }
    };
    export default {
        mixins: [myMixin],
        created() {
            console.log("I been created from component self!")
        },
        data() {
            return {

            }
        },
        methods: {
            sayHi() {
                alert("hi")
            }
        }
    }

</script>

