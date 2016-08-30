<template>
    <h3>Slot</h3>
    <slot-child>
        <p>I'm a msg from parent :)</p>
        <h3 slot="msgA">I'm Message A.</h3>
        <h3 slot="msgB">I'm Message B.</h3>
    </slot-child>
</template>

<script>
    import slotChild from '../../components/slot-child.vue'
    export default {
        data() {
            return {

            }
        },
        methods: {
        },
        components: {
            slotChild
        }
    }

</script>

