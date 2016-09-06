<template>
    <p>{{index}} - Ruby like {{food}}!</p>
</template>

<script>
    export default {
        name: "ItemChild",
        data() {
            return {
                msg: ""
            }
        },
        props: ['food','index']
    }

</script>
