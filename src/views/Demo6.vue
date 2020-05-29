<template>
<v-app>
    <div>
        <v-card
            class="mx-auto"
            max-width="344"
            outlined
        >
            <h1>SUBMIT</h1>
            <form v-on:submit.prevent="submit">
                <br>
                
                <div>
                    <v-text-field
                        v-model="firstname"
                        :rules="nameRules"
                        :counter="10"
                        label="First name"
                        required
                        type="text" name="firstname" v-model.trim.lazy="applicant.firstname"
                    >
                    </v-text-field>
                </div>

                <div>
                    <v-text-field
                        v-model="lasstname"
                        :rules="nameRules"
                        :counter="10"
                        label="Last name"
                        required
                        type="text" name="lastname" v-model.lazy.trim="applicant.lastname"
                    >
                    </v-text-field>
                </div>
            
                <div>
                    <label for="sex">male </label>
                    <input type="radio" name="sex" value="male" v-model="applicant.sex">
                    <label for="sex">female</label>
                    <input type="radio" name="sex" value="female" v-model="applicant.sex">
                </div>

                <div>
                    <v-text-field
                        v-model="lasstname"
                        :rules="nameRules"
                        label="age"
                        required
                        type="number" name="age" v-model.number="applicant.age"
                    >
                    </v-text-field>
                </div>

                <div>
                    <select name="courses" v-model="applicant.course">
                        <option value="react">React</option>
                        <option value="vuejs">vuejs</option>
                        <option value="angular">angular</option>
                    </select>
                </div>
                
                <v-btn small color="error"  type="button" @click.exact="clear" @click.alt="userDefault">Clear</v-btn>
                <v-btn small type="submit">submit</v-btn>
            </form>
        </v-card>
        
        
        <div 
            style="
                margin-top:16px;
                color:red;
            "
        >
            {{JSON.stringify(applicant)}}
        </div>
    </div>
</v-app>

</template>

<script>
export default {
    name:"Demo6",

    data() {
        return {
            applicant:{
                firstname:"",
                lastname:"",
                sex:"",
                course:"react",
                age:0,
            },
            items:['Foo', 'Bar', 'Fizz', 'Buzz'],
        }
    },
    methods: {
        clear(){
            this.applicant ={
                firstname:"",
                lastname:"",
                sex:"",
                course:"react",
                age:0,
            }
        },
        submit(){
            //event.preventDefault();
            alert(JSON.stringify(this.applicant))
        },
        userDefault(){
            this.applicant = {
                firstname:"UNKNOWN",
                lastname:"UNKNOWN",
                sex:"male",
                course:"react",
                age:0,
            }
        },
    },
}
</script>

<style>

</style>