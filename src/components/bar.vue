<template>
    <h3>{{name}}</h3>
    <h3>{{num}}</h3>
    <p class="text-info">{{$route.params.msg}}</p>
</template>

<script>
    export default {
        replace: false,
        data() {
            return {
                title: "bar"
            }
        },
        props: {
            name: {
                coerce(val) {
                    return val + ' is a good guy!'
                }
            },
            num: {
                validator(val) {
                    return val > 10
                }
            }
        },
        ready() {
            console.log(this)
        }
    }

</script>

<style lang="stylus">
    .text-info
        color: red
</style>