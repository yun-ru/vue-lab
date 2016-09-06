<template>
    <h3>I'm a child of {{$route.name}}</h3>
    <p>{{msg}}</p>
    <p>{{parentMsg}}</p>
    <p>Dynamic Message: {{dynamicMsg}}</p>
    <p>{{unNum}} ( {{numType1}} )</p>
    <p>{{num}} ( {{numType2}} )</p>
</template>

<script>
    export default {
        data() {
            return {
                msg: "This is a good day!"
            }
        },
        computed: {
            numType1() {
                return typeof this.unNum
            },
            numType2() {
                return typeof this.num
            },
        },
        props: ['parentMsg','dynamicMsg','unNum','num']
    }

</script>


