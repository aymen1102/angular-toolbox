import { Component } from '@angular/core';

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
}
