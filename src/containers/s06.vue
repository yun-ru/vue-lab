<template>
    <h1>{{$route.name}}</h1>
    <div>
        <button @click="greet">greet</button>
        <button @click="say('hi ruby')">say</button>
        <button @click="showMe('cool',$event)">showMe</button>
    </div>
    <br>
    <div @click="doThis">
        <p><a @click.prevent="doThis" href="#">prevent</a></p>
        <p><a @click.stop="doThis" href="#">stop</a></p>
        <p><a @click.stop.prevent="doThis" href="#">prevent & stop</a></p>
    </div>
    <br>
    <div>
        <input type="text" @keyup.13="handleSubmit">
        <input type="text" @keyup.enter="handleSubmit">
    </div>

</template>

<script>
    export default {
        data() {
            return {
                msg: "Have a good day!"
            }
        },
        methods: {
            greet(event) {
                alert(this.msg);
                console.log(event.target.tagName)
            },
            say(msg) {
                alert(msg)
            },
            showMe(msg,event) {
                event.target.className = msg
            },
            doThis() {
                alert("Do this!")
            },
            handleSubmit(event) {
                alert("You send " + event.target.value)
            }
        }
    }

</script>

<style lang="stylus">
    button.cool
        background-color: pink

</style>


