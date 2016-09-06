<template>
    <div class="box">
        <input class="form-control" type="text" v-model="msg" @keyup.enter="dispatchMsg" placeholder="Type some message to dispatch..">
    </div>
</template>

<script>
    export default {
        data() {
            return {
                msg: "This is a despatch msg from child."
            }
        },
        methods: {
            dispatchMsg() {
                if(this.msg.trim()){
                    this.$dispatch("child-msg",this.msg)
                }
                this.msg = ""
            }
        }
    }

</script>

<style lang="stylus">
    .box
        border: 1px solid #999
        padding: 20px
</style>


