import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';




@Component({
  selector: 'app-pipes-example',
  templateUrl: './pipes-example.component.html',
  styleUrls: ['./pipes-example.component.css']
})
export class PipesExampleComponent implements OnInit {
  myString1: string = "Supun Rasanga";

  myString2: string = "Hello World";

  amount: number = 45684.241;

  currentDate = new Date();

  total: number = 56.25458;

  percentageVal: number = 0.12456;

  myObject: any[]=[
    {
      id: 1, name: "Abc"
    },
    {
      id: 2, name: "Def"
    },
    {
      id: 1, name: "Egh"
    }

  ];




  users: any[] = [
    {
      id : 1 , name : 'Kasun kaldera' , age: 25, gender : 'Male'
    },
    {
      id : 2 , name : 'Dasun Shanaka' , age: 12, gender : 'Male'
    },
    {
      id : 3 , name : 'Nimasha Gimhani' , age: 20, gender : 'Female'
    },
    {
      id : 4 , name : 'Gayathri Fernando' , age: 16, gender : 'Female'
    },
    {
      id : 5 , name : 'Shihara Madusanka' , age: 26, gender : 'Male'
    },
    {
      id : 6 , name : 'Imasha Gimhani' , age: 18, gender : 'Female'
    }
  ];

  alert:boolean =false;

  uName : any = [];
  tCount : any = [];
  uGender : any = [];


  constructor() {}

  ngOnInit(): void {
  }

  respond(){
    this.alert = true;
  }

}
