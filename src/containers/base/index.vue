<template>
    <div>
        <a class="btn btn-link" v-link='{name: "router"}'>Router</a>
        <a class="btn btn-link" v-link='{name: "slot"}'>Slot</a>
        <a class="btn btn-link" v-link='{name: "emit"}'>Emit</a>
        <a class="btn btn-link" v-link='{name: "resource"}'>Resource</a>
        <a class="btn btn-link" v-link='{name: "dynamicChild"}'>DynamicChild</a>
        <a class="btn btn-link" v-link='{name: "props"}'>Props</a>
        <a class="btn btn-link" v-link='{name: "component"}'>Component</a>
    </div>
    <hr>
    <router-view></router-view>
</template>

<script>
    export default {
        data() {
            return {

            }
        }
    }

</script>

