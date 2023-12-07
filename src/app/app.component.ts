import { Component, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { userInformation } from './interfaces/userInformation';
import { UserDataService } from './services/users-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private userDataService: UserDataService,
    private vcr: ViewContainerRef,
    private cfr: ComponentFactoryResolver) {

    // get Users from 
    userDataService.getUsers().subscribe((userData) => {
      this.usersList = userData;
    });
  }


  //Interpolation
  version = '12.0';
  getValueFromFunction() {
    return "interpolation from function";
  }
  num = 23;


  //Property binding
  name = "Peter";
  isDisabled = true;


  //Two way binding
  inputValue: string = "";


  //Important events
  displayWarning(text: string) {
    console.warn(text);
  }


  //Function
  getName() {
    alert("This is a called function !")
  }
  getAge(age: number) {
    alert("This is a called function with parameter : " + age)
  }


  //Else condition
  show = false;


  //Multiple condition
  color = 'blue';


  //Loop in angular
  //Nested loop
  //Reusable component
  userData = [
    { name: 'Romain', email: 'romain@gmail.com', phone: '06 21 35 56 46', accounts: ['facebook', 'gmail'] },
    { name: 'Jack', email: 'jack@outlook.com', phone: '07 65 46 54 55', accounts: ['Instagram', 'gmail'] },
    { name: 'Benjamin', email: 'benjamin@gmail.com', phone: '04 45 54 21 54', accounts: ['facebook', 'TikTok'] },
    { name: 'Peter', email: 'peter@gmail.com', phone: '01 21 54 32 54', accounts: ['whatsapp', 'gmail'] }
  ]

  
  //Template reference variable
  setTemplateVariable(templateVariable: any) {
    console.warn(templateVariable.value)
  }


    //Get input field value
    inputFieldValue = '';
    getValue(inputFieldValue: string) {
      console.warn(inputFieldValue);
      this.inputFieldValue = inputFieldValue;
    }
  

  //Pass data child to component
  variableFromParent = "The variable from parent is passed to child component";
  updateVariableFromParent() {
    this.variableFromParent = "The variable is updated"
  }

  //Pass data child to parent component
  variableFromChild = "";
  updateVariableFromChild(item: string) {
    console.warn(item);
    this.variableFromChild = item;
  }


  // Service
  usersList: any;


  //Pipes in Angular
  title: string = "Learn angular";
  today = Date();
  toUpperCase(item: string) {
    return item.toUpperCase();
  }


  //Advanced pipes in Angular
  text: string = "This is my house";
  person: any = { name: "Jack", age: 17, job: "student" }


  //Basic form
  userDataForm: any = {};
  getForm1(form1: NgForm) {
    console.warn(form1);
    this.userDataForm = form1;
  }


  //Forms:Template driven form
  getForm2(item: any) {
    console.warn(item)
  }


  //Forms: Reactive form in angular
  form4 = new FormGroup({
    user: new FormControl('Peter'),
    password: new FormControl('123456')
  })
  getForm4() {
    console.warn(this.form4)
  }


  //Forms: Reactive form valid
  form5 = new FormGroup({
    user: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)])
  })
  getForm5() {
    console.warn(this.form5.value)
  }
  get user() {
    return this.form5.get('user');
  }
  get password() {
    return this.form5.get('password');
  }


  // Lazy loading component in angular
  async loadAdmin() {
    this.vcr.clear();
    const { AdminListComponent } = await import('./admin-list/admin-list.component');
    this.vcr.createComponent(
      this.cfr.resolveComponentFactory(AdminListComponent)
    )
  }
  async loadUser() {
    this.vcr.clear();
    const { UserListComponent } = await import('./user-list/user-list.component');
    this.vcr.createComponent(
      this.cfr.resolveComponentFactory(UserListComponent)
    )
  }



  // Model and interfaces
  getUserInformations() {
    const userInformation: userInformation = {
      id: 10,
      name: "Laurent",
      french: true
    }
    return userInformation;
  }


  //Count
  count = 0;
  counter(type: string) {
    type === 'add' ? this.count++ : this.count--
  }

  updateColor() {
    this.color = "skyblue";
  }



  //Toggle element on button & hide and show tag 
  display = true;
  toggle() {
    this.display = !this.display;
  }


  //Todo list
  list: any[] = [];
  addTask(item: string) {
    this.list.push(
      { id: this.list.length, name: item }
    );
    console.warn(this.list);
  }
  removeTask(id: number) {
    this.list = this.list.filter(item => item.id != id);
  }



  //Basic of Typescript for angular
  genericType: number | string = 20;
  object: { name: string, phone: number } = { name: 'Ahmed', phone: 521545 }
  array: number[] = [20, 30, 40]
  getAnyType(item: any) {
    this.object = { name: 'Peter', phone: 235468 };
    this.array = [21, 54, 5485]
    return item;
  }
  getStringType() {
    this.genericType = "hello";
  }
  getNumberType() {
    this.getAnyType(30);
  }

}
