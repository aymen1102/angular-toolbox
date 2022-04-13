import { Component, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { FormsModule, NgForm,FormGroup,FormControl,Validators} from '@angular/forms';
import { MemberDataService } from './services/member-data.service';
import { userInformation } from './interfaces/userInformation';
import { AdminListComponent } from './admin-list/admin-list.component';
import { UserListComponent } from './user-list/user-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private memberData:MemberDataService,
    private vcr:ViewContainerRef,
    private cfr:ComponentFactoryResolver){
    memberData.member().subscribe((data)=>{
      this.member=data;
      console.warn(data)
    });

    
  }


  //Interpolation
  version = '12.0';
  getVal(){
    return "Interpolation from method";
  }
  num = 23;


  //Function
  getName(){
    alert("This is a function called !")
  }
  getAge(age:number){
    alert("This is a function with parameter called : "+age)
  }


  //Important events
  getData(text:string){
    console.warn(text);
  }


  //Get input field value
  displayVal='';
  getValue(val:string){
    console.warn(val);
    this.displayVal = val;
  }


  //Count
  count=0;
  counter(type:string){
    type==='add'?this.count++:this.count--
  }


  //Property binding
  name="Peter";
  disabled=false;

  
  //Else condition
  show = false;


  //Multiple condition
  color = 'blue';


  //Loop in angular
  users=['Romain','Jack','Benjamin','Peter'];
  userDetails=[
    {name:'Romain',email:'romain@test.com',phone:'00000'},
    {name:'Jack',email:'jack@test.com',phone:'1111'},
    {name:'Benjamin',email:'benjamin@test.com',phone:'222222'},
    {name:'Peter',email:'peter@test.com',phone:'3333'}
  ]


  //Nested loop
  userData=[
    {name:'Romain',email:'romain@test.com',phone:'00000',accounts:['facebook','gmail']},
    {name:'Jack',email:'jack@test.com',phone:'1111',accounts:['Instagram','gmail']},
    {name:'Benjamin',email:'benjamin@test.com',phone:'222222',accounts:['facebook','TikTok']},
    {name:'Peter',email:'peter@test.com',phone:'3333',accounts:['whatsapp','gmail']}
  ]


  updateColor(){
    this.color = "skyblue";
  }


  //Basic form
  userDataForm:any={};
  geDataForm(basicForm:NgForm){
    console.warn(basicForm);
    this.userDataForm=basicForm;
  }


  //Toggle element on button & hide and show tag 
  display = true;
  toggle(){
    this.display=!this.display;
  }


  //Todo list
  list:any[]=[];
  addTask(item:string){
    this.list.push(
      {id:this.list.length,name:item}
    );
    console.warn(this.list);
  }
  removeTask(id:number){
    this.list=this.list.filter(item=> item.id!=id);
  }

  
  //Pass data child to component
  data=10;
  updateData(){
    this.data=Math.random();
  }


  //Reusable component
  usersDetails=[
    {name:'Romain',email:'romain@test.com',phone:'00000'},
    {name:'Jack',email:'jack@test.com',phone:'1111'},
    {name:'Benjamin',email:'benjamin@test.com',phone:'222222'},
    {name:'Peter',email:'peter@test.com',phone:'3333'}
  ];


  //Send data child to parent component
  data0 = "x";
  updateData0(item:string){
      console.warn(item);
      this.data0=item;
  }


  //Two way binding
  product:any[]=[];


  //Template reference variable
  getValue0(item:any){
    console.warn(item)
  }


  //Basic of Typescript for angular
  genericType:number|string=20;
  object:{name:string,phone:number}={name:'Ahmed',phone:521545}
  array:number[]=[20,30,40]
  getAnyType(item:any){
    this.object={name:'Peter',phone:235468};
    this.array=[21,54,5485 ]
    return item;
  }
  getStringType(){
    this.genericType = "hello";
  }
  getNumberType(){
    this.getAnyType(30);
  }


  //Pipes in Angular
  title:string="Computer";
  today=Date();
  capString(item:string){
    return item.toUpperCase();
  }


  //Advanced pipes in Angular
  text:string="This is my house";
  person:any={name:"Jack",age:17,job:"student"}


  //Forms:Template driven form
  loginUser(item:any){
    console.warn(item)
  }


  //Forms: Reactive form in angular
  loginForm2 = new FormGroup({
    user:new FormControl('Peter'),
    password:new FormControl('123456')
  })
  loginUserReactive(){
    console.warn(this.loginForm2)
  }


  //Forms: Reactive form valid
  loginForm3 = new FormGroup({
    user:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(5)])
  })
  loginUserReactiveValidation(){
      console.warn(this.loginForm3.value)
  }
  get user(){
    return this.loginForm3.get('user');
  }
  get password(){
    return this.loginForm3.get('password');
  }


  // Service
  member:any;


  // Model and interfaces
  getUserInformations(){
    const userInformation:userInformation = {
      id:10,
      name: "Laurent",
      french: true
    }
    return userInformation;
  }


  // Lazy loading component in angular
  async loadAdmin(){
    this.vcr.clear();
    const {AdminListComponent} = await import('./admin-list/admin-list.component');
    this.vcr.createComponent(
      this.cfr.resolveComponentFactory(AdminListComponent)
    )
  }
  
  async loadUser(){
    this.vcr.clear();
    const {UserListComponent} = await import('./user-list/user-list.component');
    this.vcr.createComponent(
      this.cfr.resolveComponentFactory(UserListComponent)
    )
  }

}
