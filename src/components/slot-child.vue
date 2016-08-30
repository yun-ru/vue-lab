<template>
    <h4>Slot Children</h4>
    <slot name='msgB'>I'm default to msgB</slot>
    <slot>No child msg.</slot>
    <p class="text-muted">I'm a msg in slot children</p>
    <slot name='msgA'>I'm default to msgA</slot>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        methods: {
        }
    }

</script>

