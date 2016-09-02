<template>
    <h1>{{$route.name}}</h1>
    <div>
        <button @click="handleClick">click me</button>
    </div>
    <br>
    <ul>
        <li v-for="user in users | orderBy '_uid'" >uid: {{user._uid}} - {{listTitle}} : {{$index}} - {{user.name}} </li>
    </ul>

    <ul>
        <li v-for="(i,item) of users">{{i}} - {{item.name}}</li>
    </ul>
    <br>
    <template v-for="(i,item) of users">
        <p>{{i}} <b>{{item.name}}</b> {{item.city}}</p>
        <hr>
    </template>

    <ul>
        <li v-for="value in info">{{$key}} - {{value}}</li>
    </ul>

    <ul>
        <li v-for="(k,v) in info">{{k}} - {{v}}</li>
    </ul>


    <div>
        <p v-for="n in 6">{{$index}} - {{n}}</p>
    </div>


</template>

<script>
    export default {
        data() {
            return {
                listTitle: "User List",
                users: [
                    {_uid: 5, name: 'Ruby', city: ""},
                    {_uid: 1, name: 'Jenny', city: ""},
                    {_uid: 7, name: 'Kobe', city: ""},
                ],
                info: {
                    name: "Ruby",
                    city: "Taichung",
                    age: 29,
                    job: "Frontend Developer"
                }
            }
        },
        methods: {
            handleClick() {
//                this.users.push({name:'Ryan'})
                this.users = this.users.map(function(item,index){
                    if(index===1){
                        item.city = "Taichung";
                    }
                    return item;
                })
            }
        }
    }

</script>


