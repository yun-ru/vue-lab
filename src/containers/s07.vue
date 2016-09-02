<template>
    <h1>{{$route.name}}</h1>
    <div>
        <input type="text" v-model="myText" placeholder="text something..">
        <span> My Text: {{myText}}</span>
    </div>
    <br>
    <div>
        <input id="weather" type="checkbox" v-model="raining">
        <label for="weather">{{raining? "raining" : "sunning"}}</label>
    </div>
    <br>
    <div class="row">
        <div class="col-sm-6">
            <p v-for="item in people">
                <input id="checkbox-{{item}}" :value="item" type="checkbox" v-model="friends">
                <label for="checkbox-{{item}}"> {{item}}</label>
            </p>
            <p>Selected Item: </p>
            <!--<p class="text-danger"><span v-for="f in friends">{{f}} </span> </p>-->
            {{friends | json}}
        </div>
        <div class="col-sm-6">
            <select v-model="selected">
                <option v-for="item in people" :value="item">{{item}}</option>
            </select>
            <br><br>
            <p v-for="item in people">
                <input id="radio-{{item}}" :value="item" type="radio" v-model="selected">
                <label for="radio-{{item}}"> {{item}}</label>
            </p>
            <h3>Selected: {{selected}}</h3>
        </div>
    </div>
    <hr>
    <div class="row">
        <div class="col-sm-12">
            <h3>Two way binding with 'value': </h3>
            <br>
        </div>
        <div class="col-sm-6">
            <select v-model="selectedUser1">
                <option v-for="user in users" value="{{user.id}}">{{user.id}} - {{user.name}}</option>
            </select>
            <span> Selected User's ID: <b class="text-danger">{{selectedUser1}}</b></span>
            <h3>{{val1DataType}}</h3>
        </div>
        <div class="col-sm-6">
            <select v-model="selectedUser2">
                <option v-for="user in users" :value="user.id">{{user.id}} - {{user.name}}</option>
            </select>
            <span> Selected User's ID: <b class="text-danger">{{selectedUser2}}</b></span>
            <h3>{{val2DataType}}</h3>
        </div>
    </div>
    <hr>
    <div class="row">
        <div class="col-sm-12">
            MessageA: {{msgA}} <br>
            MessageB: {{msgB}}
            <br><br>
        </div>
        <div class="col-sm-6">
            <input type="checkbox" v-model="msg" :true-value="msgA" :false-value="msgB">
            <p> {{msg}} </p>
        </div>
        <div class="col-sm-6">
            <input id="optA" name="msg" type="radio" v-model="msg" :value="msgA">
            <label for="optA"> optionA</label>
            <input id="optB" name="msg" type="radio" v-model="msg" :value="msgB">
            <label for="optB"> optionB</label>
            <p> {{msg}} </p>
        </div>
    </div>
    <div class="row">
        <div class="col-sm-12">
            <select v-model="selectedUserObj">
                <option v-for="user in users" :value="user">{{user.name}}</option>
            </select>
            {{selectedUserObj | json}}
        </div>
        <div class="col-sm-12">
            <h4>Lazy Change: </h4>
            <p>Message: {{msgA}}  <span>(on Change)</span></p>
            <input type="text" v-model="msgA" class="form-control" lazy>
            <br>
            <p>Message: {{msgB}}  <span>(debounce:500)</span></p>
            <input type="text" debounce="500" v-model="msgB" class="form-control">
        </div>
        <div class="col-sm-12">
            <hr>
            <h4>Automatic turn the data type to 'Number' by added a 'number' attribute:</h4>
            <input type="text" v-model="num" number>
            <p>{{numType}}</p>
        </div>
        <div class="col-sm-12">
            <p>Message: {{msgB}}</p>
            <input type="text" debounce="500" v-model="msgB" class="form-control">
        </div>
    </div>
    <br>
    <br>
    <br>
    <br>



</template>

<script>
    export default {
        data() {
            return {
                num: 10,
                msg: "",
                msgA: "I'm truly sorry!",
                msgB: "Hey! I don't feel sorry at all!",
                myText: "",
                raining: false,
                people: ['Peter','John','Kevin','Kite','Bill','Daniel','Mike','Pinky'],
                friends: [],
                selected: "John",
                users: [
                    {name: "Ruby", id: 101},
                    {name: "Bill", id: 102},
                    {name: "Daniel", id: 103},
                    {name: "John", id: 104}
                ],
                selectedUser1: null,
                selectedUser2: null,
                selectedUserObj: {}
            }
        },
        computed: {
            val1DataType() {
                return typeof this.selectedUser1
            },
            val2DataType() {
                return typeof this.selectedUser2
            },
            numType() {
                return typeof this.num
            }
        }
    }

</script>


