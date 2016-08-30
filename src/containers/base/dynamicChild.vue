<template>
    <h3>Dynamic Children</h3>
    <p>Change Child to ... </p>
    <button class="btn btn-link" @click='changeChild("bar")'>Bar</button>
    <button class="btn btn-link" @click='changeChild("foo")'>Foo</button>
    <component :is='myChild'></component>
</template>

<script>
    import Foo from '../../components/foo.vue';
    import Bar from '../../components/bar.vue';
    export default {
        data() {
            return {
                myChild: 'foo'
            }
        },
        methods: {
            changeChild(name) {
                this.myChild = name
            }
        },
        components: {
            foo: Foo,
            bar: Bar
        }
    }

</script>

