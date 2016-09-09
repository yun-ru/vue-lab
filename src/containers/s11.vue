<template>
    <h1>{{$route.name}}</h1>
    <p>{{bb}}</p>
    <button @click="toggle">toggle</button>
    <button @click="changeMsg">change msg</button>
    <p v-if="active" v-my-fee:hello.a.b="msg"></p>
    <h3 v-demo="{color: 'pink'}"></h3>
    <h3 v-literal-demo.literal="{color: 'pink'}"></h3>
    <ele-demo></ele-demo>
    <h4 v-my-demo2="memo">init</h4>  <!-- catch from data: memo -->
    <h4 v-my-demo2.literal="memo">init2</h4>  <!-- see bottom PS -->
    <button @click="changeParam">change param</button>
    <h3 v-cool.literal="fun" :a="aa"></h3>
    <button @click="changeUserName">change user's name</button>
    <p v-deep-sample="user"></p>
    <p v-non-deep-sample="user"></p>
    <div>
        <input type="text" v-my-two-way="userName">
        {{userName}}
    </div>

</template>

<script>
    export default {
        data() {
            return {
                aa: "I'm aa",
                bb: 22,
                msg: "good day",
                active: false,
                memo: "I say memo",
                userName: "initUser",
                user: {name: "Ruby"}
            }
        },
        methods: {
            changeMsg() {
                this.msg = this.msg === "good day" ? "bad day" : "good day"
            },
            toggle() {
                this.active = !this.active
            },
            changeParam() {
                this.aa = this.aa === "I'm aa" ? "I'm not aa" : "I'm aa"
            },
            changeUserName() {
                this.user.name = this.user.name === "Ruby" ? "Bill" : "Ruby"
            }
        },
        ready() {
            console.log(this)
        },
        directives: {
            "my-fee": {
                bind() {
                    console.log('my-fee was bind!')
                },
                update(newValue,oldValue) {
                    this.el.innerHTML =
                            'name - '       + this.name + '<br>' +
                            'expression - ' + this.expression + '<br>' +
                            'argument - '   + this.arg + '<br>' +
                            'modifiers - '  + JSON.stringify(this.modifiers) + '<br>' +
                            'newValue - '      + newValue + '<br>' +
                            'oldValue - '      + oldValue
                },
                unbind() {
                    console.log("unbind...")
                },
            },
            demo(value) {
                this.el.innerHTML = value.color
            },
            literalDemo(value) {
                this.el.innerHTML = value
            },
            myDemo2: {
                bind() {
                    console.log("my demo 2")
                },
                update(val) {
                    this.el.innerHTML = val
                }
            },
            cool: {
                bind() {
                    this.el.innerHTML = this.params.a
                },
                update(val) {
                    this.el.innerHTML = this.el.innerHTML + " " + val
                },
                params: ['a'],
                paramWatchers: {
                    a(newValue, oldValue) {
                        console.log(`newParam: ${newValue}`)
                        console.log(`oldParam: ${oldValue}`)
                    }
                }
            },
            myTwoWay: {
                twoWay: true,
                bind() {
                    this.handler = function() {
                        this.set(this.el.value);  // Directive.set() can only be used inside twoWayDirectives.
                    }.bind(this)
                    this.el.addEventListener('input', this.handler)
                },
                unbind() {
                    this.el.removeEventListener('input', this.handler)
                }
            },
            deepSample: {
                deep: true,
                update(obj) {
                    console.log("deep change: " + obj.name)
                }
            },
            nonDeepSample: {
                update(obj) {
                    console.log("non deep change: " + obj.name)
                } // This function would only been called at first time
            }
        },
        elementDirectives: {
            eleDemo: {
                bind() {
                    this.el.innerHTML = "element demo"
                }
            }
        }
    }

</script>


<!--

# modify: .literal
   - Show itself as a string instead catch from data: memo
   - The value in update() will be called only once, because a plain string cannot be reactive



skip: acceptStatement, terminal, priority


-->