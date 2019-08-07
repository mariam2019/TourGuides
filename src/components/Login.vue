<template>
  <!-- Default form register -->
  <div class="card text-center bgrb">
     <div class="card-body">


    <h4 class=" text-center mb-1 thick">LOG IN</h4>

<br/>
   <div class="row">
     
    <input type="email" name="email"  v-model="input.email"  placeholder="Email" class="form-control"/>
  
    
   </div>
 <br/>
   <div class="row">
<input type="password" name="password" v-model="input.password" placeholder="Password" class="form-control"/>
   </div>
<br/>
   <div class="row" >
     <div class="col-sm-6 noMnoP " style="text-align:left">
       <div class="form-check">
      <input type="checkbox" class="form-check-input " id="remeberMe">
      <label class="form-check-label blue " for="remeberMe">Remeber me</label>
    </div>
     </div>
     <div class="col-sm-6 noMnoP" style="text-align:right">
      <a href="" class="blue">Forget password?</a>
       </div>
   </div>
 
    <div class="text-center mt-4" >
      <button class="btn btn2 btn-info"  v-on:click="login()" >Log in</button>
    </div>
  
  
  </div>
  </div>
  <!-- Default form register -->
</template>

<script>

    var SHA256 = require("crypto-js/sha256");
    import axios from "axios" 
    import router from '../routes.js';
   

    export default {
        name: 'Login',
        components: {
       
        },
        data() {
            return {
                input: {
                    email: "",
                    password: "",
                    hashPassword:""
                }
            }
        },
        methods: {
         
            login() {
            
                if(this.input.email != "" && this.input.password != "") {

                  this.input.hashPassword=SHA256(this.input.password);
                
               
                 axios.post('http://localhost:4100/login', {email:this.input.email,password:this.input.hashPassword.toString()})
                .then(function (response) {
                   localStorage.token=response.data.token;
                   localStorage.ID=response.data.id;
                   router.push('/')
                })
                .catch(function (error) {
                 alert(error);
                });
               
                    
                } else {
                  alert('A username and password must be present');
                    console.log("A username and password must be present");
                }
            }
        }
    }
</script>

<style scoped>
    #login {
        width: 500px;
        border: 1px solid #CCCCCC;
        background-color: #FFFFFF;
        margin: auto;
        margin-top: 200px;
        padding: 20px;
    }
    .bgrb{
      width: 27.5%;
      height: 60%;
      position: absolute;
  left: 37.5%;
 
  top: 20%;
 padding-left:2%;
 padding-right: 2%;
    }

    h4.thick {
  font-weight: bold;
  font-family: "Helvetica";
  
}

.btn2
{
  width: 112%;
  margin-left: -6%;
  background-color: #0071aa;
border: 1px solid #0071aa;
  
}
.foot
{
   width: 112%;
  margin-left: -6%;
}
.blue{
  color: #0071aa;
font-family: "Helvetica";
   font-size: 14px;
}
.noMnoP
{
  padding-left: 0%;
  padding-right: 0%;
  margin-left: 0%;
  margin-right: 0%;
}
</style>