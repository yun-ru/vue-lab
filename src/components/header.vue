<template>
    <div>
        <button @click="speak">Peter</button>
        <button @click="goSleep">Sleep</button>
        <slot>No data</slot>
        <p>{{parentMsg}}</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                parentMsg: '',
                name: 'Peter',
                msg() {
                    return `Hi! My name is ${this.name}`
                }
            }
        },
        methods: {
            speak() {
                this.$dispatch('child-msg',this.msg())
            },
            goSleep() {
                this.$emit('sleep')
            }
        },
        events: {
            'parent-msg'(msg) {
                this.parentMsg = msg
            }
        }
    }

</script>

