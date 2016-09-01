<template>
    <h1>{{$route.name}}</h1>
    <ul class="s03">
        <li v-for="item in itemList">
            <a class="link" :href="item.href? item.href : '#'" :class="{active: currentItem === item.name}">{{item.name}}</a>
        </li>
    </ul>
    <h3 :class="myClass">Ruby Chen</h3>
    <button :class="bigBtn">click me</button>
    <p>{{positive? 'positive' : 'unPositive'}}</p>
    <button :class="['btn', positive? 'btn-success' : 'btn-danger']">option</button>
    <button :class="['btn','btn-success',{active: true}]">option2</button>

    <p :style="{fontSize: myFontSize+'px', color: myColor}">Test</p>
    <p :style="myTextStyle">Test2</p>

</template>

<script>
    export default {
        data() {
          return {
              myTextStyle: {
                  'font-size': '30px',
                  color: 'darkblue'
              },
              myFontSize: 50,
              myColor: 'red',
              positive: true,
              currentItem: 'listA',
              itemList: [
                  {name: 'listA'},
                  {name: 'listB'},
                  {name: 'listC'},
                  {name: 'listD'},
              ],
              myClass: {
                  'text-danger': true
              },
              bigBtn: ['btn','btn-lg','btn-success']
          }
        }
    }

</script>

<style lang="stylus">
    ul.s03
        li > a.link
            color: #666
            &.active
                color: red
</style>


