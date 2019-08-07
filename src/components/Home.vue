<template>
<div>
<div class="row">
    <nav class="navbar fixed-top navbar-light topnav" >
        
            <div >
            <a class="navbar-brand logo" href="#">LOGO</a>
            </div>
            <div class=" pull-right" style="text-align:right" v-if="!loggedin">
                <router-link to="/login">Login</router-link>
            </div>
            <div class="row">
                <div class="col-sm-4"> <button class="tabs activeT" > Production Employee  <br>  &nbsp; </button></div>
                <div class="col-sm-4"><button class="tabs" >Ahmed Yasser <br> Operation </button></div>
                <div class="col-sm-4"><button class="tabs" > Mohamed Yasser <br> Manager</button></div>
                 
            </div>
             <div class=" pull-right" style="text-align:right" v-if="loggedin">
                 
                 <div class="row">
                     <div class="col-sm-6">
                         <a class="navbar-brand admin" href="#">Agency Admin</a>
                     </div>
                     <div class="col-sm-6">
                    <div class = "btn-group" style="margin-right:1%">
                        
                        <img src="../assets/Iconography/user-3.png" alt="User" class="user_img">
                        <a  class="dropdown-toggle clickable" data-toggle = "dropdown" >
                        </a>
                        <ul class = "dropdown-menu" role = "menu">
                            <li style="margin-left:2%; font-size:10px"><a href="#"> Profile</a></li>
                            <li style="margin-left:2%; font-size:10px"><a href="#" v-on:click="returnLogin">Logout</a></li>
                        </ul>
                    </div>
                     </div>
                 </div>
             </div>
        
    </nav>
</div>
<div class="row" style="background-color: #fafafa;">
    <div class="col-md-2">
        <div class="sidenav">
            <div class="row">
               
      <div class="clickable"> <img src="../assets/Iconography/menu.png" alt="Menu"  style=" margin-top:40%; margin-bottom:60%" ></div>
       <div  v-bind:class = "{activeSB:visible[0],clickable:true}" v-on:click="activate(0)"><img src="../assets/Iconography/accomodation.png" alt="Accomodation"></div>
       <div  v-bind:class = "{activeSB:visible[1],clickable:true}" v-on:click="activate(1)"><img src="../assets/Iconography/transportation.png" alt="Transportation"  ></div>
       <div  v-bind:class = "{activeSB:visible[2],clickable:true}" v-on:click="activate(2)"><img src="../assets/Iconography/tour guide.png" alt="Tour Guide" ></div>
       <div  v-bind:class = "{activeSB:visible[3],clickable:true}" v-on:click="activate(3)"><img src="../assets/Iconography/hot-air-balloon.png" alt="Sightseeing" ></div>
       <div  v-bind:class = "{activeSB:visible[4],clickable:true}" v-on:click="activate(4)"><img src="../assets/Iconography/flights.png" alt="Flights" ></div>
       <div  v-bind:class = "{activeSB:visible[5],clickable:true}" v-on:click="activate(5)"><img src="../assets/Iconography/trip program.png" alt="Trip Program" ></div>
       <div  v-bind:class = "{activeSB:visible[6],clickable:true}" v-on:click="activate(6)"><img src="../assets/Iconography/archiiive.png" alt="Archive" ></div>
            </div>
        </div>
    </div>
    <div class="col-md-10 bgrb2">
        <div class="tab ">
        <button class="tablinks" v-on:click="activate(0)"  v-bind:class = "{active:visible[0]}" >Accomodation</button>
        <button class="tablinks" v-on:click="activate(1)"  v-bind:class = "{active:visible[1]}">Transportation</button>
        <button class="tablinks" v-on:click="activate(2)"  v-bind:class = "{active:visible[2]}">Tour Guides</button>
        <button class="tablinks" v-on:click="activate(3)"  v-bind:class = "{active:visible[3]}">Sightseeing</button>
        <button class="tablinks" v-on:click="activate(4)"  v-bind:class = "{active:visible[4]}">Flights</button>
        <button class="tablinks" v-on:click="activate(5)"  v-bind:class = "{active:visible[5]}">Trip Programs</button>
        <button class="tablinks" v-on:click="activate(6)"  v-bind:class = "{active:visible[6]}">Archived</button>
        </div>
        <br/>
        <div   v-if="visible[0]">
        <p>Accomodation</p>
        </div>

         <div   v-if="visible[1]">
        <p>Transportation</p>
        </div>

         <div    v-if="visible[2]" >
        <div class="row "  v-if="loggedin">
            <div class="col-sm-6" >
                <div class="row">
                    
                    <div class="col-sm-5" >
                        <button class="btn   btn-blue"  v-on:click="showadd()"><font-awesome-icon icon="plus" class="clickable" /> | Add Tour Guide</button>
                    </div>
                    <div class="col-sm-5" >
                         <div class="input-group mb-4">
                            <div class="input-group-prepend">
                            <button id="button-addon4" type="button" class=" form-control" style="border-right:0px; color:#707070;"><font-awesome-icon icon="search" class="clickable" /></button>
                            </div>
                            <input type="search" placeholder="Guide Name" aria-describedby="button-addon4" class="form-control bg-none "  style="border-left:0px;">
                        </div>
                    </div>
                    <div class="col-sm-2"></div>
                </div>
             </div>
             <div class="col-sm-6" style=" padding:0px">
                 <div class="row" style=" padding:0px">
                     <div class="col-sm-1"></div>
                     <div class="col-sm-5" style="padding:0px">
                         <button class="btn   btn-white"  ><font-awesome-icon icon="download" class="clickable" /> Download Excel Sheet</button>
                     </div>
                     <div class="col-sm-3" style="padding:0px">
                         <button class="btn btn-blue"  v-on:click="eraseFilter()"  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;All&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  </button>
                     </div>
                     <div class="col-sm-3" style="padding:0px">
                         <button class="btn  btn-white2" v-on:click="showfilter()" > 
                            <img src="../assets/Iconography/FILTERS.png" alt=""  style="width:15px; height:15px;" > Filters</button>
                     </div>
                 </div>
             </div>
        </div>
        <br v-if="loggedin"/>
        <div class="row filterarea" v-if="filtering" >
            <div class="col-sm-4"></div>
            <div class="col-sm-8">
                <div class="row">
                    <div class="col-sm-6">
                        <multiselect  v-model="cityF"  :options="cities"  placeholder="City" label="name" track-by="name">
                        </multiselect>
                       
                    </div>
                    <div class="col-sm-6">
                        <multiselect  v-model="languageF" :options="languages" :multiple="true" :close-on-select="false" :clear-on-select="false" :preserve-search="true" placeholder="Language" label="name" track-by="name" :preselect-first="false">
                        </multiselect>
                    </div>
                </div>
            </div>
        </div>
        <br v-if="filtering"/>
        <div class="row " v-if="adding" >

            <div class="card text-center  ">
                <div class="card-body">

                    <div class="row">
                    <div class="col-sm-3">
                        <input type="text" v-model="name" name="name"  placeholder="Name" class="form-control"/>
                    </div>
                    <div class="col-sm-3">
                        <input type="text" v-model="number" name="number"  placeholder="Contact Number" class="form-control"/>
                    </div>
                    <div class="col-sm-3">
                        <multiselect v-model="city" :options="cities"  placeholder="City" label="name" track-by="name">
                        </multiselect>
                    </div>

                    <div class="col-sm-3">
                        <input type="number" v-model="fees" name="fees"  placeholder="Fees" class="form-control"/>
                    </div>
                    </div>
                    <br/>
                     <div class="row">
                    <div class="col-sm-3">
                        <input type="text" v-model="nationality" name="nationality"  placeholder="Nationality" class="form-control"/>
                    </div>
                    <div class="col-sm-3">
                        <input type="text" v-model="nationalid" name="nationalid"  placeholder="National ID" class="form-control"/>
                    </div>
                     <div class="col-sm-3">
                        <input type="text"  v-model="passportnum" name="passportnum"  placeholder="Passport Number" class="form-control"/>
                    </div>

                    <div class="col-sm-3">
                        <input type="text" v-model="licensenum" name="licensenum"  placeholder="License Number" class="form-control"/>
                    </div>
                    </div>
                    <br/>
                    <div class="row" >
                       <div v-bind:class = "{ 'col-sm-3' : language.length<=2,'col-sm-6' : language.length>2 && language.length<=4 ,'col-sm-9' : language.length>4 && language.length<=6 ,'col-sm-12' : language.length>6}">
                           
                        <multiselect v-model="language" :options="languages" :multiple="true" :close-on-select="false" :clear-on-select="false" :preserve-search="true" placeholder="Language" label="name" track-by="name" :preselect-first="false">
                           
                        </multiselect>
                       
                        </div>
                    </div>
                    <br/>
                    <div class="row" >
                        <div class="col-sm-8"></div>
                        <div class="col-sm-4">
                            <div class="row" >
                                <div class="col-sm-6" style="padding-right:0px">
                                <button class="btn  btn-info create" v-on:click="add()" >Create</button>
                                </div>
                                <div class="col-sm-6" style="padding-left:0px">
                                <button class="btn  btn-light cancel" v-on:click="coveradd()" >Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
             
                </div>
            </div>

        </div>
       <br v-if="adding" />
            <div class="row" v-if="tourGuides.length && loaded" >
                    <table class="table table-bordered ">
                    <thead>
                    <tr>
                        <th>Name <font-awesome-icon icon="caret-down" class="clickable" v-if="sortAsc" v-on:click="sort(1)"/>
                        <font-awesome-icon icon="caret-up" class="clickable" v-if="sortDesc" v-on:click="sort(-1)"/>
                        </th>
                        <th>Number</th>
                        <th>City</th>
                        <th>Fees</th>
                        <th>Language(s)</th>
                        <th v-if="loggedin"></th>
                    </tr>
                    </thead>
                    <tbody>
                        <!-- eslint-disable -->
                    <tr v-for="(guide,index) in tourGuides" v-bind:key="guide.ID" v-if="!filtered[index]">
                        <td>{{guide.name}}</td>
                        <td>{{guide.number}}</td>
                        <td>{{guide.city}}</td>
                        <td>{{guide.fees}}</td>
                        <td>
                            
                            <span class="lang" v-for="lang in guide.languages" v-bind:key="lang">
                                {{lang}}</span></td>
                        <td v-if="loggedin">
                            <div class="row">
                            <div class="col-sm-8"><a href="#" class="anc">Archive</a></div>
                            <div class="col-sm-4">
                                <div class = "btn-group">
                                    <a   data-toggle = "dropdown">
                                    <font-awesome-icon icon="ellipsis-v" class="clickable"/>
                                     </a>
                                    <ul class = "dropdown-menu" role = "menu">
                                    <li v-on:click="setData(index)" data-toggle="modal" data-target="#myModal" > &nbsp;&nbsp; <a href="#"><font-awesome-icon icon="pen" /> Update</a></li>
                                    <li v-on:click="erase(guide.ID,index)">&nbsp;&nbsp;<a href="#"><font-awesome-icon icon="trash" /> &nbsp;Delete</a></li>
                                    </ul>
                                </div>
                            </div>
                            </div>
                        </td>
                    </tr>
                    <!-- eslint-enable -->
                    
                    </tbody>
                </table>
            </div>

            <!-- Modal -->
            <div class="modal fade" id="myModal" role="dialog">
                <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Update tour guide</h4>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div class="modal-body">
                    
                        <div class="card text-center ">
                            <div class="card-body">

                                <div class="row">
                                <div class="col-sm-3">
                                    <input type="text" v-model="name" name="nameM"  class="form-control"/>
                                </div>
                                <div class="col-sm-3">
                                    <input type="text" v-model="number" name="numberM"  class="form-control"/>
                                </div>
                                <div class="col-sm-3">
                                    <multiselect v-model="city" :options="cities"  label="name" track-by="name">
                                    </multiselect>
                                </div>

                                <div class="col-sm-3">
                                    <input type="number" v-model="fees" name="feesM"   class="form-control"/>
                                </div>
                                </div>
                                <br/>
                                <div class="row">
                                <div class="col-sm-3">
                                    <input type="text" v-model="nationality" name="nationalityM"  class="form-control"/>
                                </div>
                                <div class="col-sm-3">
                                    <input type="text" v-model="nationalid" name="nationalidM" class="form-control"/>
                                </div>
                                <div class="col-sm-3">
                                    <input type="text"  v-model="passportnum" name="passportnumM"  class="form-control"/>
                                </div>

                                <div class="col-sm-3">
                                    <input type="text" v-model="licensenum" name="licensenumM"  class="form-control"/>
                                </div>
                                </div>
                                <br/>
                                <div class="row">
                                <div v-bind:class = "{ 'col-sm-3' : language.length<=2,'col-sm-6' : language.length>2 && language.length<=4 ,'col-sm-9' : language.length>4 && language.length<=6 ,'col-sm-12' : language.length>6}">
                    
                                    <multiselect v-model="language" :options="languages" :multiple="true" :close-on-select="false" :clear-on-select="false" :preserve-search="true" placeholder="Language" label="name" track-by="name" :preselect-first="false">
                           
                        </multiselect>
                                
                                    </div>
                                </div>
                                
                        
                            </div>
                        </div>
                    
                    </div>
                    <div class="modal-footer">

                    <div class="row" >    
                                <div class="col-sm-6" >
                                <button type="button" class="btn btn-primary create" data-dismiss="modal" v-on:click="update()" >Update</button>
                                </div>
                                <div class="col-sm-6" >
                                <button type="button" class="btn btn-default cancel" data-dismiss="modal">Close</button>
                                </div>
                    </div>

                    </div>
                </div>
                </div>
            </div>

        </div>

         <div  v-if="visible[3]">
        <p>Sightseeing</p>
        </div>

         <div   v-if="visible[4]">
        <p>Flights</p>
        </div>

         <div v-if="visible[5]">
        <p>Trip Programs</p>
        </div>

         <div   v-if="visible[6]">
        <p>Archived</p>
        </div>

       

        
    </div>
</div>
</div>
</template>

<script>
// Get the element with id="defaultOpen" and click on it
import Multiselect from 'vue-multiselect'
import axios from "axios" 
import Vue from 'vue';
import router from '../routes.js';

 export default {
     components: { Multiselect },
      name: 'Home',
        data() {
             return {
                 loggedin:false, sortAsc:true,sortDesc:false,
          visible:[false,false,true,false,false,false,false],
          filtered:[],
          name:"",number:"",fees:"",nationality:"",nationalid:"",passportnum:"",licensenum:"",
          adding:false,filtering:false,
          city:"",cityF:"",
          cities:[{ name:"New Valley"},{ name:"Matruh"},{name:"Red Sea"},{name:"Giza"},{name:"South Sinai"},{name:"North Sinai"},{name:"Suez"},{name:"Beheira"},{name:"Helwan"},{name:"Sharqia"},{name:"Dakahlia"},{name:
          "Kafr el-Sheikh"},{name:"Alexandria"},{name:"Monufia"},{name:"Minya"},{name:"Gharbia"},{name:"Faiyum"},{name:"Qena"},{name:"Asyut"},{name:"Sohag"},{name:"Ismailia"},{name:"BeniSuef"},{name:"Qalyubia"},{name:
          "Aswan"},{name:"Damietta"},{name:"Cairo"},{name:"Port Said"},{name:"Luxor"},{name:"6th of October"}],
         
          language: [],languageF:[],
      languages: [
       { name:'Afrikaans'},{name:'Albanian'},{name:'Arabic'},{name:'Armenian'},{name:'Basque'},{name:'Bengali'},{name:'Bulgarian'},{name:'Catalan'},
       {name:'Cambodian'},{name:'Chinese (Mandarin)'},{name:'Croatian'},{name:'Czech'},{name:'Danish'},{name:'Dutch'},{name:'English'},{name:'Estonian'}
       ,{name:'Fiji'},{name:'Finnish'},{name:'French'},{name:'Georgian'},{name:'German'},{name:'Greek'},{name:'Gujarat'},{name:'Hebrew'},{name:'Hindi'}
       ,{name:'Hungarian'},{name:'Icelandic'},{name:'Indonesian'},{name:'Irish'},{name:'Italian'},{name:'Japanese'},{name:'Javanese'},{name:'Korean'}
       ,{name:'Latin'},{name:'Latvian'},{name:'Lithuanian'},{name:'Macedonian'},{name:'Malay'},{name:'Malayalam'},{name:'Maltese'},{name:'Maori'}
       ,{name:'Marathi'},{name:'Mongolian'},{name:'Nepali'},{name:'Norwegian'},{name:'Persian'},{name:'Polish'},{name:'Portuguese'},{name:'Punjabi'}
       ,{name:'Quechua'},{name:'Romanian'},{name:'Russian'},{name:'Samoan'},{name:'Serbian'},{name:'Slovak'},{name:'Slovenian'},{name:'Spanish'}
       ,{name:'Swahili'},{name:'Swedish'},{name:'Tamil'},{name:'Tatar'},{name:'Telugu'},{name:'Thai'},{name:'Tibetan'},{name:'Tonga'},{name:'Turkish'}
       ,{name:'Ukrainian'},{name:'Urdu'},{name:'Uzbek'},{name:'Vietnamese'},{name:'Welsh'},{name:'Xhosa'}
      ]
      ,tourGuides:[],
      id:-1
      ,loaded:false
             }

        },
        methods: {
            showfilter(){this.filtering=true},
            coverfilter(){this.coverfilter=false},
            showadd(){

                this.adding=true;
               
               
            },
            coveradd(){

                this.adding=false;
               
               
            },
            activate(i)
            {
               this.visible=[false,false,false,false,false,false,false];
               this.visible[i]=true;
            },
            add()
            {
                this.adding=false;
               var self=this;
                if (this.city!=null && this.language!=null&&this.name!="" && this.number!="" && this.city!="" && this.fees!="" && this.fees>=0 && this.nationality!="" && this.nationalid!=""&&
                this.passportnum!="" && this.licensenum!="" && this.language.length!=0)
                {
                
                    var languageN=[]
                    this.language.forEach(language => {
                       
                        languageN.push(language['name'])
                       
                    });

                   
                    axios.post('http://localhost:4100/addTourGuide', 
                    {name:this.name,number:this.number,fees:this.fees,nationality:this.nationality,nationalid:this.nationalid,
                    passportnum:this.passportnum,licensenum:this.licensenum,languages:languageN,city:this.city.name,id:localStorage.ID},
                     {headers: {"x-access-token": localStorage.getItem("token")}})
                .then(function (response) {
                    if(response.status==200)
                    {
                        Vue.notify({
                        group: 'foo',
                        text: 'Tour Guide is added successfully',
                        closeOnClick:true,
                        type:'success'
                        })
                        if(response.data.id!==undefined)
                        {
                        self.tourGuides.push({name:self.name,number:self.number,fees:self.fees,languages:languageN,city:self.city.name,ID:response.data.id
                        ,passport_num:self.passportnum,license_num:self.licensenum,nationality:self.nationality,nationalid:self.nationalid})

                            if(!self.filtering)
                            self.filtered.push(false);
                            else{
                                var langs=[]
                                self.languageF.forEach(element => {
                                    langs.push(element.name);
                                });
                               
                                
                                if( (self.city.name!=""&&self.city.name!=self.cityF.name) || !(langs.every(r=> languageN.includes(r))))
                                    self.filtered.push(true);
                                else self.filtered.push(false);
                            }
                        }
                   }
                   else if (response.status==401)
                   self.returnLogin();
                })
                .catch(function (error) {
                 alert(error);
                 if(error.message=="Request failed with status code 401")
                self.returnLogin();
                });
                }

            },
            setData(i)
            {
                this.name=this.tourGuides[i].name;
                this.number=this.tourGuides[i].number;
                this.fees=this.tourGuides[i].fees;
                this.nationality=this.tourGuides[i].nationality;
                this.nationalid=this.tourGuides[i].nationalid;
                this.passportnum=this.tourGuides[i].passport_num;
                this.licensenum=this.tourGuides[i].license_num;
                
                this.language=[];
                this.tourGuides[i].languages.forEach(element => {
                    this.language.push({'name':element})
                });

                this.city={'name':this.tourGuides[i].city};
                this.id=this.tourGuides[i].ID;
                
            }
            ,
            update()
            {
                
                var self=this;
                if (this.city!=null && this.language!=null&&this.name!="" && this.number!="" && this.city!="" && this.fees!="" && this.fees>=0 && this.nationality!="" && this.nationalid!=""&&
                this.passportnum!="" && this.licensenum!="" && this.language.length!=0)
                {
                
                    var languageN=[]
                    this.language.forEach(language => {
                       
                        languageN.push(language['name'])
                       
                    });

                   
                    axios.put('http://localhost:4100/updateTourGuide/'+self.id.toString(), 
                    {name:self.name,number:self.number,fees:self.fees,nationality:self.nationality,nationalid:self.nationalid,
                    passportnum:self.passportnum,licensenum:self.licensenum,languages:languageN,city:self.city.name},
                     {headers: {"x-access-token": localStorage.getItem("token")}})
                .then(function (response) {
                    if(response.status==200)
                    {
                        Vue.notify({
                        group: 'foo',
                        text: 'Tour Guide updated successfully',
                        closeOnClick:true,
                        type:'success'
                        })
                        var index=-1;
                         self.tourGuides.find((o, i) => {
                            if (o.ID === self.id) {
                               

                                var myobj = {name:self.name,number:self.number,fees:self.fees,nationality:self.nationality,nationalid:self.nationalid,
                    passport_num:self.passportnum,license_num:self.licensenum,languages:languageN,city:self.city.name,ID:self.id} ;
                                Vue.set(self.tourGuides, i, myobj);
                                index=i;
                                return true; // stop searching
                            }
                        });

                        if(!self.filtering)
                            self.filtered[index]=(false);
                            else{
                                var langs=[]
                                self.languageF.forEach(element => {
                                    langs.push(element.name);
                                });
                               
                                
                                if( (self.city.name!=""&&self.city.name!=self.cityF.name) || !(langs.every(r=> languageN.includes(r))))
                                    self.filtered[index]=(true);
                                else self.filtered[index]=(false);
                            }
                        
                   }
                   else if (response.status==401)
                   self.returnLogin();
                })
                .catch(function (error) {
                 alert(error);
                 if(error.message=="Request failed with status code 401")
                self.returnLogin();
                });
                }
            },
            erase(i,index)
            {
                var self=this;
                axios.delete('http://localhost:4100/delTourGuide/'+i, 
                     {headers: {"x-access-token": localStorage.getItem("token")}})
                .then(function (response) {
                   if(response.status==200)
                   {
                    Vue.notify({
                    group: 'foo',
                    text: 'Tour Guide deleted successfully',
                        closeOnClick:true,
                        type:'success'
                    });
                    /*self.tourGuides = self.tourGuides.filter( function(item) {
                        return item.ID!=i;
                    });*/
                    
                    self.tourGuides.splice(index, 1); 
                    self.filtered.splice(index,1);
                   } 
                   else if (response.status==401)
                   self.returnLogin();
                    
                })
                .catch(function (error) {
                alert(error);
                if(error.message=="Request failed with status code 401")
                self.returnLogin();
                });
            },
            myfilter(city)
            {
                console.log(city);
                for (let index = 0; index < this.tourGuides.length; index++) {
                    const element = this.tourGuides[index];
                    console.log(city)
                    console.log(element.city)
                    if(this.cityF!="" && element.city!=city.name)
                    this.filtered[index]=true;
                    
                }
               
            },
            eraseFilter(){
                this.filtered=Array(this.tourGuides.length).fill(false)
                this.filtering=false;
            },
            returnLogin()
            {
                localStorage.token="";
                router.push('/login');
            },
            sort(order)
            {
                if (order==1){this.sortAsc=false; this.sortDesc=true;}
                else {this.sortDesc=false; this.sortAsc=true;}
            }
            
        },
        created()
            {
               var self = this;
               if(localStorage.token)self.loggedin=true;
               
               if(self.loggedin)
               {
                axios.get('http://localhost:4100/getTourGuide/'+localStorage.ID, 
                     {headers: {"x-access-token": localStorage.getItem("token")}})
                .then(function (response) {
                    if(response.status==200)
                    {
                    self.loaded=true;
                   self.tourGuides=response.data;
                   self.filtered=Array(self.tourGuides.length).fill(false)
                    }
                    else if (response.status==401)
                   self.returnLogin();
                })
                .catch(function (error) {
                    
                alert(error);
                if(error.message=="Request failed with status code 401")
                self.returnLogin();
                });
               }
               else{
                   axios.get('http://localhost:4100/getTourGuides')
                .then(function (response) {
                    if(response.status==200)
                    {
                    self.loaded=true;
                   self.tourGuides=response.data;
                   
                    }
                   })
                .catch(function (error) {  
                alert(error);
                });
               }
            },
            watch: {
                cityF: function() {
                this.filtered=Array(this.tourGuides.length).fill(false);
                if(this.cityF!=null&&this.cityF!=""){
                    for (let index = 0; index < this.tourGuides.length; index++) {
                        const element = this.tourGuides[index];
                        if( element.city!=this.cityF.name)
                        this.filtered[index]=true;
                        
                    }
                }
                if(this.languageF!=null&&this.languageF.length>=0)
                {
                    var langs=[]
                    this.languageF.forEach(element => {
                        langs.push(element.name);
                    });
                     for (let index = 0; index < this.tourGuides.length; index++) {
                        const element = this.tourGuides[index];
                        if( !langs.every(r=> element.languages.includes(r)))
                            this.filtered[index]=true;
                        
                    }

                }

                },
                languageF: function() {
                this.filtered=Array(this.tourGuides.length).fill(false)
                if(this.cityF!=null&&this.cityF!=""){
                    for (let index = 0; index < this.tourGuides.length; index++) {
                        const element = this.tourGuides[index];
                        if( element.city!=this.cityF.name)
                        this.filtered[index]=true;
                        
                    }
                }
                if(this.languageF!=null&&this.languageF.length>=0)
                {
                    var langs=[]
                    this.languageF.forEach(element => {
                        langs.push(element.name);
                    });
                     for (let index = 0; index < this.tourGuides.length; index++) {
                        const element = this.tourGuides[index];
                        if( !langs.every(r=> element.languages.includes(r)))
                            this.filtered[index]=true;
                        
                    }

                }
                }
            }
        

 }
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style scoped>

.tabs{
    height: 50px;
    width: 180px;
    margin-right: 1%;
    margin-left: 1%;
    margin-bottom: 0%;
    margin-top: 10%;
    padding: 2%;
    background-color: #eaeaea;
   border:#eaeaea;
   border-radius: 4px;
}
.activeT{
    border-radius: 4px;
background-color: #fafafa;
border: 1px solid #eaeaea;
border-bottom: 0px;
}
.topnav{
background-color: #ffffff;
border-bottom: 1px solid gainsboro;
padding: 0%;
}
.sidenav {
  height: 100%;
  border-right: 1px solid gainsboro;
  width: 80px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
 background-color: #fafafa;
  overflow-x: hidden;
  padding-top: 60px;

}
.sidenav img{
   width: 40px;
   height:40px;
   margin-left: 35px;
   margin-top: 5%;
   margin-bottom: 5%;
 display: block;
}
.activeSB {
    background-color: #eaeaea;
    width: 100%;
}
.sidenav a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
}

/* Style the tab */
.tab {
  overflow: hidden;
 
  background-color: #fff;
  margin-left: 5%;
  margin-right: 5%;
}

/* Style the buttons inside the tab */
.tab button {
  background-color: inherit;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  transition: 0.3s;
  font-size: 15px;
   border-bottom: 1px solid gainsboro;
}

/* Change background color of buttons on hover */
.tab button:hover {
  background-color: #ddd;
}

/* Create an active/current tablink class */
.tab button.active {
 border-bottom: 2px solid #0071aa;;
}

.bgrb2{
    width: 100%;
   margin-top: 20px;
  margin-left: 180px;
  padding-right: 90px;
  
}
.anc
{
    color: gray;
    text-decoration-line: underline;
}

.logo
{
    width: 93px;
height: 44px;
font-size: 25px;
color: #0071aa;
font-family: "Helvetica";
font-weight: bold;
}
a{
    color: #0071aa;
}
.admin
{
    width: 115px;
height: 13px;
font-size: 15px;
color: #454545;
font-family: "Helvetica";
font-weight: bold;
}
.user_img
{
    width:20px;
    height:20px;
    color: #0071aa;
}
.clickable{
    cursor: pointer;
}

.create{
border-radius: 3px;

background-color: #0071aa;
}
.btn-blue
{
  background-color: #0071aa;
  text-decoration-color: #fff;  
  color:#fff;
}
.btn-white
{
  background-color: #ffffff;
  border-color: #0071aa;
  color: #0071aa;
}

.btn-white2
{
  background-color: #ffffff;
  border-color:gainsboro;
  
}
.cancel{
border-radius: 3px;
border: 0.4000000059604645px solid #707070;
}
 .success {
    background-color: #41ff4a;
    border-left-color: #42A85F;
  }
.filterarea{
    background-color:#eaeaea; 
    padding-top:3%;
   padding-bottom: 3%;
}
.lang{
    background-color:#eaeaea; 
    padding:5px; 
    margin-right:2px;
    margin-left:2px; 
   
}

</style>
