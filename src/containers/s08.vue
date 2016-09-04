<template>
    <h1>{{$route.name}}</h1>
    <button @click="toggleActive">Toggle</button>
    <select v-model="transitionType">
        <option v-for="animation in animations" :value="animation">{{animation}}</option>
    </select>
    <div class="wrap">
        <h3 v-if="active" :transition="transitionType" @animationend="transitionEnd" @transitionend="transitionEnd('ruby',$event)" class="animated">Show me & Hide me</h3>
        <h3 class="animated" :class="animationType" transition="jello" @animationend="animationEnd('ruby',$event)">Nothing gona change I love you</h3>
        <h3>Nothing gona change I love you</h3>
        <h3>Nothing gona change I love you</h3>
    </div>
    <h3>{{textContent}}</h3>
    <div class="wrap">
        <p><input type="text" v-model="newUser" @keyup.enter="addUser"><button @click="addUser">add</button></p>
        <p><label for="search">Search: </label><input id="search" type="text" v-model="query"></p>
        <h4 v-for="user in users | filterBy query" transition="move" stagger="50">{{user}}</h4>
    </div>
</template>

<script>
    export default {
        name: "s08",
        data() {
            return {
                newUser: "",
                query: "",
                active: false,
                transitionType: "fadeDown",
                animationType: "jello",
                animations: ['fadeDown','move','bounce', 'fade'],
                textContent: "init",
                users: ['Ruby','Bill','Daniel','Pinky','Jane']
            }
        },
        methods: {
            addUser() {
                this.users.unshift(this.newUser)
                this.newUser = ""
            },
            toggleActive(){
                return this.active = !this.active
            },
            animationEnd(e) {
                this.animationType = ""
                setTimeout(function() {
                    this.animationType = "jello"
                }.bind(this))
            },
            transitionEnd(name,e) {
                console.log("transition end "+name)

            }
        },
        transitions: {
            bounce: {
                enterClass: 'bounceInLeft',
                leaveClass: 'bounceOutRight',
                beforeEnter(el) {
                    this.textContent = 'beforeEnter'
                },
                enter(el,done) {
                    this.textContent = 'enter'
                    setTimeout(function() {
                        console.log("delay 3000")
                        done()
                    }.bind(this),3000)
                },
                afterEnter(el) {
                    this.textContent = 'afterEnter'
                },
                enterCancelled(el) {
                    // handle cancellation
                },

                beforeLeave(el) {
                    this.textContent = 'beforeLeave'
                },
                leave(el) {
                    this.textContent = 'leave'
                },
                afterLeave(el) {
                    this.textContent = 'afterLeave'
                },
                leaveCancelled(el) {
                    // handle cancellation
                }
            },
            fadeDown: {
                enterClass: 'fadeInDown',
                leaveClass: 'fadeOutDown'
            }
        }
    }

</script>

<style lang="stylus">
    .wrap
        position: relative
        width: 300px
        margin: 0 auto
    .fade-transition
        transition: all .7s
    .fade-enter, .fade-leave
        opacity: 0
    .move-transition
        transition: all .3s
    .move-enter
        transform translateX(-100%)
        opacity: 0
    .move-leave
        transform translateX(100%)
        opacity: 0

</style>


<!--
如果 transition 特性没有值，类名默认是 .v-transition, .v-enter 和 .v-leave。

-->