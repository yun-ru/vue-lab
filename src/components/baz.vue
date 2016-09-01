<template>
    <h3>Baz</h3>
    <p>{{msg}}</p>
</template>

<script>
    export default {
        replace: false,
        data: function() {
            return {
                msg: "no msg"
            }
        },
        activate(done) {
            console.log("hi test activate");
            setTimeout(function(){
                this.msg = "have a good day";
                done();
            }.bind(this),2000)
        },
    }
</script>

