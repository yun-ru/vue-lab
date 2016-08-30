<template>
    <h3>Router</h3>
    <div>
        <a class="btn btn-link" v-link="{name: 'bar', params: {msg: 'have a good day'}}">msgA</a>
        <a class="btn btn-link" v-link="{name: 'bar', params: {msg: 'good morning'}}">msgB</a>
        <button @click='sayhi'>say hi and redirect to Emit</button>
    </div>
    <router-view></router-view>
</template>

<script>
    export default {
        data() {
                return {

                }
            },
            ready() {

                console.log(this);
            },
            methods: {
                sayhi() {
                    alert("Hi");
                    this.$router.go({name: 'emit'});
                }
            }
    }
</script>