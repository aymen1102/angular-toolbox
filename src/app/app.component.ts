import { Component } from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Interpolation
  version = '12.0';
  getVal(){
    return "Interpolation from method";
  }
  num = 23;

  //function
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


  //get input field value
  displayVal='';
  getValue(val:string){
    console.warn(val);
    this.displayVal = val;
  }

  //count
  count=0;
  counter(type:string){
    type==='add'?this.count++:this.count--
  }

  //Property binding
  name="Peter";
  disabled=false;

  
  //else condition
  show = false;


  // multiple condition
  color = 'blue';


  // loop in angular
  users=['Romain','Jack','Benjamin','Peter'];
  userDetails=[
    {name:'Romain',email:'romain@test.com',phone:'00000'},
    {name:'Jack',email:'jack@test.com',phone:'1111'},
    {name:'Benjamin',email:'benjamin@test.com',phone:'222222'},
    {name:'Peter',email:'peter@test.com',phone:'3333'}
  ]

  //Nested loop^
  userData=[
    {name:'Romain',email:'romain@test.com',phone:'00000',accounts:['facebook','gmail']},
    {name:'Jack',email:'jack@test.com',phone:'1111',accounts:['Instagram','gmail']},
    {name:'Benjamin',email:'benjamin@test.com',phone:'222222',accounts:['facebook','TikTok']},
    {name:'Peter',email:'peter@test.com',phone:'3333',accounts:['whatsapp','gmail']}
  ]


  updateColor(){
    this.color = "skyblue";
  }


  // Basic form
  userDataForm:any={};
  geDataForm(basicForm:NgForm){
    console.warn(basicForm);
    this.userDataForm=basicForm;
  }
}
