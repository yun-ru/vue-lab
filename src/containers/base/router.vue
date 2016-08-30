<template>
    <h3>Router</h3>
    <router-view></router-view>
    <div>
        <a v-link="{name: 'foo', params: {username: 'Ruby Chen'}}">Ruby</a>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        }
    }

</script>

