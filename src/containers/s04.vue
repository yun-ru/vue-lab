<template>
    <h1>{{$route.name}}</h1>

    <h3 v-if="good">It's a good day</h3>
    <h3 v-else>It's not a good day</h3>

    <template v-if="good">
        <p>I feel good</p>
        <p>Because it's about time to go home.</p>
    </template>

    <p v-if="num > 10">The Number is grater than 10 !!</p>
    <p v-else>The Number is less or equal to 10</p>

    <component-a v-show="ok"></component-a>
    <component-b v-show="!ok"></component-b>

    <component-a v-if="ok"></component-a>
    <component-b v-else></component-b>


</template>

<script>
    export default {
        data() {
            return {
                ok: true,
                good: true,
                num : 15
            }
        },
        components: {
            componentA: {
                template: "<h2>I'm component A</h2>"
            },
            componentB: {
                template: "<h2>I'm component B</h2>"
            }
        }
    }

</script>


<!--

v-show & v-if 用法上大致一樣，
不同的是有 v-show 的元素会始终渲染并保持在 DOM 中。v-show 是简单的切换元素的 CSS 属性 display。

* v-show 不支持 <template> 语法。
* 将 v-show 用在组件上时不能接 v-else，須改用 v-show="!xx" 代替。

一般来说，v-if 有更高的切换消耗而 v-show 有更高的初始渲染消耗。
因此，如果需要频繁切换 v-show 较好，如果在运行时条件不大可能改变 v-if 较好。



-->

