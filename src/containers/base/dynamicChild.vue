<template>
    <h3>Dynamic Children</h3>
    <br>
    <div>
        <button class="btn btn-default" @click="changeAnimateChild('ruby')">Ruby</button>
        <button class="btn btn-default" @click="changeAnimateChild('daniel')">Daniel</button>
        <component :is='animateChild' transition="fade" transition-mode="out-in"></component>
    </div>
    <hr>
    <div>
        <button class="btn btn-default" @click='changeChild("bar")'>Bar</button>
        <button class="btn btn-default" @click='changeChild("foo")'>Foo</button>
        <button class="btn btn-default" @click='changeChild("baz")'>Baz</button>
    </div>
    <br>
    <div class="row">
        <div class="col-sm-6">
            <p class="text-muted">Change Child to (keep alive) ...</p>
            <component :is='myChild' keep-alive></component>
        </div>
        <div class="col-sm-6">
            <p class="text-muted">Change Child to ...</p>
            <component :is='myChild'></component>
        </div>
    </div>
</template>

<script>
    import Foo from '../../components/foo.vue';
    import Bar from '../../components/bar.vue';
    import Baz from '../../components/baz.vue';
    export default {
        data() {
            return {
                myChild: 'foo',
                animateChild: 'ruby'
            }
        },
        methods: {
            changeChild(name) {
                this.myChild = name
            },
            changeAnimateChild(name) {
                this.animateChild = name
            }
        },
        components: {
            foo: Foo,
            bar: Bar,
            baz: Baz,
            ruby: {
                template: "<h1>Hi Ruby</p>"
            },
            daniel: {
                template: "<h1>Hi Daniel</p>"
            }
        }
    }

</script>

<style>
    .fade-transition {
        transition: opacity .3s ease;
    }
    .fade-enter, .fade-leave {
        opacity: 0;
    }
</style>

