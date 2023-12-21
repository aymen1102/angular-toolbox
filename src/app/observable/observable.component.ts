import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  name: string = '';
  letter: string = '';
  users: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.observable1.subscribe((name)=>{
      this.name=name;
    })
  }

  // Observable 1
  observable1 = new Observable<string>(observer => {
    console.log('Observable starts')
    setTimeout(()=>{observer.next("Fares")},5000);
    setTimeout(()=>{observer.next("Jack")},4000);
    setTimeout(()=>{observer.next("Antoine")},3000);
    setTimeout(()=>{observer.next("Romain")},2000);
    setTimeout(()=>{observer.next("Laurine")},1000);
    setTimeout(()=>{observer.next("Agnes")},500);
  });


  // Observable 2
  observable2 = new Observable<string>(observer => {
    setTimeout(() => observer.next("A"), 5000);
    setTimeout(() => observer.next("B"), 4000);
    setTimeout(() => observer.next("C"), 3000);
    setTimeout(() => observer.next("D"), 2000);
    setTimeout(() => observer.next("E"), 1000);
    setTimeout(() => observer.next("F"), 500);
  });

  startObservable2(){
    this.observable2.subscribe((letter: any)=>{
      this.letter=letter;
    })
  }


  // Observable 3
  getData(): Observable<any> {
    const url = 'https://jsonplaceholder.typicode.com/users';
    return this.http.get(url);
  }

  startObservable3(){
    this.getData().subscribe(data => {
      this.users = data;
    })
  }
}
