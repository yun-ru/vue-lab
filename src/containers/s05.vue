<template>
    <h1>{{$route.name}}</h1>
    <div>
        <button @click="handleClick">click me</button>
    </div>
    <br>
    <ul>
        <li v-for="user in users"> {{listTitle}} : {{$index}} - {{user.name}} </li>
    </ul>

    <ul>
        <li v-for="(i,item) of users">{{i}} - {{item.name}}</li>
    </ul>
    <br>
    <template v-for="(i,item) of users">
        <p>{{i}} <b>{{item.name}}</b> {{item.city}}</p>
        <hr>
    </template>



</template>

<script>
    export default {
        data() {
            return {
                listTitle: "User List",
                users: [
                    {_uid: 5, name: 'Ruby', city: ""},
                    {_uid: 1, name: 'Jenny', city: ""},
                    {_uid: 7, name: 'Aobe', city: ""},
                ]
            }
        },
        methods: {
            handleClick() {
//                this.users.push({name:'Ryan'})
                this.users = this.users.map(function(item){
                    item.city = "Taichung";
                    return item
                })
            }
        }
    }

</script>


