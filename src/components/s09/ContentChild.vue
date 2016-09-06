<template>
    <p>Title: <slot name="title"></slot></p>
    <p>Content: <slot name="content"></slot></p>
    <p>Other: <slot></slot></p>
</template>

<script>
    export default {
        name: "Foo",
        data() {
            return {
                name: "Mr. Foo"
            }
        }
    }

</script>
