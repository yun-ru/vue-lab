<!--
# What's included?
  * Partial, Custom Filter

-->

<template>
    <h1>{{$route.name}}</h1>
    <input type="text" v-model="msg">
    <p>{{msg}}</p>
    <p>{{* msg}}</p>  <!-- Do not update on data change -->
    <partial name="my-partial"></partial>
    {{{dangerHTML}}}  <!-- raw html -->
    <div data-id="item-{{id}}">{{id}}</div>
    <h3>{{ ok ? 'YES' : 'NO' }}</h3>
    <p>{{ msg.split('').reverse().join('') }}</p>
    <p>{{ id+1 | plus100}}</p>
    <p>{{ msg | capitalize | sayMore }}</p>
    <p>{{{ msg | uppercase | sayMore | sendArgs 'go' 'ruby'}}}</p>

    <p v-if="ok">Hello!</p>

    <a :href="url">Ruby's site</a> <!-- same as v-bind:href="url" -->
    <br><br>
    <button class="btn btn-default" @click="sayHi('Ruby')">greeting</button> <!-- same as v-on:click="sayHi('Ruby')" -->
</template>

<script>
    export default {
        filters: {
            plus100(val) {
                return val + 100
            },
            sayMore(val) {
                return val + ' plus message come along'
            },
            sendArgs(val, arg1, arg2) {
                return `${val} <b>${arg1} ${arg2}</b>`
            }
        },
        data() {
            return {
                url: 'http://yun-ru.com',
                ok: true,
                id: 66,
                msg: "subject 01",
                greeting: "Hi! How are you?",
                dangerHTML: "<h3>I'm danger!</h3>"
            }
        },
        methods: {
          sayHi(name) {
              alert(`Hi! ${name}!`)
          }
        },
        partials: {
            'my-partial': "<p>Jenny says: <b class='text-danger'>{{greeting}}</b></p>"
        }
    }

</script>


