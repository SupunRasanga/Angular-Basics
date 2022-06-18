import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MustMatch } from 'src/app/shared/validators/must-match.validator';

@Component({
  selector: 'app-reactive-form-v2',
  templateUrl: './reactive-form-v2.component.html',
  styleUrls: ['./reactive-form-v2.component.css']
})
export class ReactiveFormV2Component implements OnInit {

  studentForm!: FormGroup;

  submitted: boolean = false;

  isLoading: boolean = false;

  isClear: boolean = false;

  isShown: boolean = false ;

  get f(){ return this.studentForm.controls }

  constructor(
    private formBuilder: FormBuilder,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.initFrom();
  }

  initFrom():void {
    this.studentForm = this.formBuilder.group({
      firstName: ['',[Validators.required, Validators.pattern('^[A-Za-z_-]{2,20}$')]],
      lastName: ['',[Validators.required, Validators.pattern('^[A-Za-z_-]{2,20}$')]],
      dob: ['',[Validators.required]],
      contactNo: ['',[Validators.required]],
      address: ['',[Validators.required,Validators.maxLength(200)]],
      email: ['',[Validators.required, Validators.email]],
      // password: ['',[Validators.required, Validators.minLength(8)]],
      // comPassword: ['',[Validators.required]],
      password: ['',Validators.minLength(8)],
      comPassword: ['']
    },{
        validators : MustMatch('password','comPassword')
    });

  }

  onSubmit(){
    this.submitted = true;

    //if(this.studentForm.get('password')?.setValidators(Validators.required))
    //if(this.studentForm.get('comPassword')?.setValidators(Validators.required))


    if(this.studentForm.valid){

      console.log(this.studentForm.value);
      //console.log(this.studentForm.controls);

      //add values to form
      this.f.address.setValue('Default address');

      // Pass data into service
      this.isLoading = true;
      setTimeout(() => {
        console.log('Response');
        this.isLoading = false;

      }, 3000);



    }
    //this. router.navigate(['/', 'customer']);

    //Add values into form Controls
  //   this.studentForm.patchValue({
  //     firstName: 'Supun',
  //     lastName: 'Rasanga',
  //     dob: '2000-06-04',
  //     contactNo: '0773044121'
  //   })

  //   if(this.studentForm.invalid){
  //     alert('Invalid');
  //   }
   }
   setAsPasswordRequired():void{
    //this.studentForm.get('password')?.setValidators(Validators.required);
    //this.studentForm.get('ComPassword')?.setValidators(Validators.required);

    this.f.password.setValidators(Validators.required);
    this.f.comPassword.setValidators(Validators.required);
  }
   clearForm():void{
    this.submitted=false;
    this.isClear = true;
      setTimeout(() => {
        console.log('Response');
        this.isClear = false;

      }, 3000);
    this.studentForm.reset();
   }




}
