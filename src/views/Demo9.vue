<template>
<v-app>
    <div >
        <li v-for="(item, index) in array2" :key="index">
            {{item}}
        </li>
        ---------------------------------------------------------
        <li v-for="(item, index) in array2" :key="index">
            {{item.no}}
        </li>
        --------------------------------------------------------- <br>
        <input type="text" placeholder="Title" v-model="course.title"><br>
        <input type="text" placeholder="price" v-model="course.price"><br>
        <button @click="addcourse">Submit</button>
        
        
        <ul>
            <li v-for="(course, index) in dycourse" :key="index">
                {{course.title}} , {{course.price}} <button @click="removed(index)">x</button>
            </li>
        </ul>
    </div>

</v-app>

</template>

<script>
export default {
    name:'Demo9',
    methods: {
        addcourse(){
            this.dycourse.push(this.course)
            this.course = {title:"",price:0}
        },
        removed(index){
            this.dycourse.splice(index,1)
        }
    },
    data() {
        return {
            course:{
                title:"" , price:0
            },
            dycourse:[

            ],
            array2:[
                {title:'A' , no:'1'},
                {title:'B' , no:'2'},
                {title:'C' , no:'3'}
            ]
        }
    },
}
</script>

<style>

</style>