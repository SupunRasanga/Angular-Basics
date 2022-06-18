import { Component, OnInit } from '@angular/core';
import { filter, map, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  subcription !: Subscription;

  orderStatus !: any;

  orderStatusObs !: Observable<any>;

  myObservable:Observable <any> = new Observable((observer) => {
    console.log('Observable starts');
    observer.next('a')
    observer.next('b')
    observer.next('c')
    observer.next('d')
    observer.next('e')
    observer.next('1')
    observer.next('2')
    observer.next('3')
    observer.next('4')
  });

  myObservable2:Observable <any> = new Observable((observer) => {
    console.log('Observable 2 starts');
    setTimeout(() => {observer.next('1')},1000);
    setTimeout(() => {observer.next('2')},2000);
    setTimeout(() => {observer.next('3')},3000);
   // setTimeout(() => {observer.error('Errors')},3500);
    setTimeout(() => {observer.next('4')},4000);
    setTimeout(() => {observer.complete()},5000);
    setTimeout(() => {observer.next('5')},6000);
  }).pipe(// Usage of Operators
    filter((data: any) => {
      return data > 2
    }),
    map((data: any) => {
      return data * 3
    })
  );


  constructor() { }

  ngOnInit(): void {
  //   this.myObservable.subscribe(
  //     val => {
  //       console.log(val)
  //     },
  //   error =>{
  //     console.log('Error occurred');
  //   },
  //   () =>{
  //     console.log('Completed');
  //   }
  //   );
  // }

  this.subcription = this.myObservable2.subscribe(
    val => {
      console.log(val)
    },
  error =>{
    console.log('Error occurred');
  },
  );




  this.myObservable2.subscribe(
    val => {
      console.log(val)
    },
  error =>{
    console.log('Error occurred');
  },
  );

  this.initOrderStatus();

}

initOrderStatus(){
  this.orderStatusObs = new Observable(observer => {
    setTimeout(() =>{
      observer.next('In Progress...')
    },2000);

    setTimeout(() =>{
      observer.next('Processing...')
    },4000);
    setTimeout(() =>{
      observer.next('Completed...')
    },6000);

    });

    this.subcription = this.orderStatusObs.subscribe(value => {
      this.orderStatus = value;

  });
}

ngOnDestroy(): void {
  this.subcription.unsubscribe();
}

}
