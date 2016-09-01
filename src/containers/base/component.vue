<template>
    <h3>Component</h3>
    <table>
        <thead is="TRComponent"></thead>
    </table>
</template>

<script>
    import TRComponent from '../../components/tr-component.vue'
    export default {
        data() {
            return {

            }
        },
        components: {
            TRComponent
        }
    }

</script>


<!--

a 不能包含其它的交互元素（如按钮，链接）
ul 和 ol 只能直接包含 li
select 只能包含 option 和 optgroup
table 只能直接包含 thead, tbody, tfoot, tr, caption, col, colgroup
tr 只能直接包含 th 和 td

对于自定义元素，应当使用 is 特性：

<table>
    <tr is="my-component"></tr>
</table>

-->