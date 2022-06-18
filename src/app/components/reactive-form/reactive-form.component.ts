import { Component, OnInit, ViewChild } from '@angular/core';
import { Student } from 'src/app/shared/models/student';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
studentModel: Student = new Student();

@ViewChild('f') form:any;

languages:string[]=['Sinhala','English','Tamil','Germen'];
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit():void{
    if(this.form.invalid){
      alert('Please enter valid data.');
      return;
    }
    console.log(this.form.value.name.fname);

     //pass the form object to backend via the Service
    alert('Success.');
    this.form.reset();
    this.form.value.language='';
  }



}
