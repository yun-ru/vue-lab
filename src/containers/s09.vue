<template>
    <h1>{{$route.name}}</h1>
    <my-component></my-component>
    <component is="myComponent"></component>
    <input type="text" class="form-control" v-model="myMsg" placeholder="dynamic message comes here...">
    <hr>
    <Child parent-msg="I'm parent!" :dynamic-msg="myMsg" un-num="100" :num="99"></Child>
    <ul>
        <list-child></list-child>
    </ul>
    <table>
        <tr is="TableChild"></tr>
    </table>
    <br>
    <div>
        <p>Try Different Binding Way: <input type="text" v-model="msg"></p>

        <one-way-child :msg.once="msg"></one-way-child>
        <two-way-child :msg.sync="msg"></two-way-child>
    </div>

    <div>
        <h3>Communication</h3>
        <p>Use v-on(@) :</p>
        <communicate-child @child-msg="bestWayToBindChildMsg"></communicate-child>
        <br>
        <p>Use $on & events: </p>
        <communicate-child></communicate-child>
        <br>
        <p>Message from Child: <b class="text-danger">{{childMsg ? childMsg : "No message yet"}}</b></p>
    </div>

    <div>
        <h3>Reference: {{$refs.coolChild.name}}</h3>
        <cool-child v-ref:cool-child></cool-child>
    </div>
    <div>
        <h3>Dynamic Child: {{$refs.dynamicChild.name}}</h3>
        <p>
            <select v-model="childName" @change="showDynamicChild">
                <option v-for="child in dynamicChilds" :value="child">{{child}}</option>
            </select>
            <label v-for="child in dynamicChilds"><input type="radio" :value="child" v-model="childName" name="dynamic">{{child}}</label>
        </p>
        <component :is="childName" v-ref:dynamic-child></component>
    </div>
    <div>
        <h3>Slot <small class="text-muted">(Put content into specific place)</small></h3>
        <content-child>
            <b slot="title">A cool Title</b>
            <b slot="content">Some cool content comes here!</b>
            <b class="text-danger" slot>Other content...</b>
        </content-child>
    </div>

    <div>
        <h3>Alive Component</h3>
        <select v-model="currentChild">
            <option v-for="child in SecondInputChilds" :value="child">{{child}}</option>
        </select>
        <br><br>
        <p>Alive: </p>
        <p><component :is="currentChild" keep-alive></component></p>
        <p>Un Alive:</p>
        <p><component :is="currentChild"></component></p>
    </div>

    <div>
        <h3>Async Component</h3>
        <async-data-child></async-data-child>
    </div>

    <div>
        <h3>Transition:</h3>
        <p>
            <label><input v-model="selectedChild" type="radio" value="otherComponent" name="transition">other</label>
            <label><input v-model="selectedChild" type="radio" value="myComponent" name="transition">my</label>
        </p>
        <component :is="selectedChild" transition="move" transition-mode="out-in"></component>

        <p>
            <label><input v-model="selectedChild2" type="radio" value="Foo" name="transition2">Foo</label>
            <label><input v-model="selectedChild2" type="radio" value="Bar" name="transition2">Bar</label>
        </p>
        <component :is="selectedChild2" transition="move" transition-mode="out-in"></component>

    </div>
    <div>
        <h3>Child Item List</h3>
        <item-child v-for="food in foods" :food="food" :index="$index"></item-child>
    </div>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>

</template>

<script>
    import Child from '../components/s09/Child.vue'
    import ListChild from '../components/s09/ListChild.vue'
    import TableChild from '../components/s09/TableChild.vue'
    import OneWayChild from '../components/s09/OneWayChild.vue'
    import TwoWayChild from '../components/s09/TwoWayChild.vue'
    import CommunicateChild from '../components/s09/CommunicateChild.vue'
    import Foo from '../components/s09/Foo.vue'
    import Bar from '../components/s09/Bar.vue'
    import CoolChild from '../components/s09/CoolChild.vue'
    import ContentChild from '../components/s09/ContentChild.vue'
    import SecondInputChild from '../components/s09/SecondInputChild.vue'
    import FirstInputChild from '../components/s09/FirstInputChild.vue'
    import AsyncDataChild from '../components/s09/AsyncDataChild.vue'
    import ItemChild from '../components/s09/ItemChild.vue'
    export default {
        data() {
            return {
                myMsg: "",
                msg: "Initial Message",
                childMsg: "",
                childName: "Foo",
                dynamicChilds: ["Foo","Bar"],
                SecondInputChilds: ["SecondInputChild","FirstInputChild"],
                currentChild: "SecondInputChild",
                selectedChild: "otherComponent",
                selectedChild2: "Foo",
                foods: ['pizza','chicken','coke']
            }
        },
        ready() {
            this.$on("child-msg",this.handleChildMsg);
            console.log(this)
            console.log(this.$refs)
        },
        events: {
            "child-msg"(msg) {
                this.childMsg = msg
            }
        },
        methods: {
            handleChildMsg(msg) {
                console.log(msg)
            },
            bestWayToBindChildMsg(msg) {
                console.log("best way! " + msg )
            },
            showDynamicChild() {
                console.log(this.$refs.dynamicChild.name)
            }
        },
        components: {
            myComponent: { // myComponent === my-component
                template: "<p>My Component</p>"
            },
            otherComponent: {
                template: "<p>Other Component</p>"
            },
            Child,
            ListChild,
            TableChild,
            OneWayChild,
            TwoWayChild,
            CommunicateChild,
            Foo,
            Bar,
            CoolChild,
            ContentChild,
            SecondInputChild,
            FirstInputChild,
            AsyncDataChild,
            ItemChild
        }
    }

</script>

<style lang="stylus">
    td,tr
        border: 1px solid #ccc
        padding: 6px 20px
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

Three ways to listen on child message:
1. $on (can use together with 'events')
2. events (can use together with '$on')
3. v-on & @ (can only use alone)

/// 無效
<child-component v-show="active"></child-component>
// 無法用v-*來操作(顯示)child-component內的資料


Instence Component can only accept transition while the component was wrapped by a root tag.
ex:
<template>
    <div>  <-------- use a root tag to wrap all childs, so 'transition' can work on the root tag.
        <h4>Foo</h4>
        <p>I'm dynamic child! foo foo foo!!</p>
    </div>
</template>


-->