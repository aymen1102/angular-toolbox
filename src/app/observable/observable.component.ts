import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  name:any;
  letter:any;

  constructor() { }

  ngOnInit(): void {
    this.observable1.subscribe((name)=>{
      this.name=name;
    })
  }

  // First way to use Observable
  observable1 = new Observable((observer)=>{
    console.log('Observable starts')
    setTimeout(()=>{observer.next("Fares")},5000);
    setTimeout(()=>{observer.next("Jack")},4000);
    setTimeout(()=>{observer.next("Antoine")},3000);
    setTimeout(()=>{observer.next("Romain")},2000);
    setTimeout(()=>{observer.next("Laurine")},1000);
    setTimeout(()=>{observer.next("Agnes")},500);
  });


  //second way to create Observable =
  observable2 = Observable.create((observer0: { next: (arg0: string) => void; }) => {
    setTimeout(()=>{observer0.next("A")},5000);
    setTimeout(()=>{observer0.next("B")},4000);
    setTimeout(()=>{observer0.next("C")},3000);
    setTimeout(()=>{observer0.next("D")},2000);
    setTimeout(()=>{observer0.next("E")},1000);
    setTimeout(()=>{observer0.next("F")},500);
  });

  startObservable2(){
    this.observable2.subscribe((letter: any)=>{
      this.letter=letter;
    })
  }


}
