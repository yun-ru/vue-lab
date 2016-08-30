<template>
    <h3>Router</h3>
    <router-view></router-view>
    <div>
        <a v-link="{name: 'foo', params: {username: 'Ruby Chen'}}">Ruby</a>
        <button @click='sayhi'>say hi and redirect to Emit</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        methods: {
            sayhi() {
                alert("Hi");
                this.$router.go("emit");
            }
        }
    }

</script>

