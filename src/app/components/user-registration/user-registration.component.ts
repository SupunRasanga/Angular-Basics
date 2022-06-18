
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormArray, FormBuilder, Validators  } from '@angular/forms';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  productForm!: FormGroup;

  submitted: boolean = false;

  isLoading: boolean = false;

  productTotal: number = 0;

  get f(){return this.productForm.controls;}

  get productItems() : FormArray{
    return this.productForm.get('productItems') as FormArray;
  }
  constructor(
    private fb: FormBuilder
  ) { }


  ngOnInit(): void {
    this.initForm();
    this.addNewLine();
  }

  initForm():void{
    this.productForm = this.fb.group({
      firstName: ['',[Validators.required, Validators.pattern('^[A-Za-z_-]{2,20}$')]],
      lastName: ['',[Validators.required, Validators.pattern('^[A-Za-z_-]{2,20}$')]],
      uploadDate: ['',[Validators.required]],
      contactNo: ['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{11}$")]],
      address1: ['',[Validators.required,Validators.maxLength(20)]],
      address2: ['',[Validators.required,Validators.maxLength(20)]],
      country: ['',[Validators.required]],
      company: ['',[Validators.required]],
      email: ['',[Validators.required, Validators.email]],
      productItems: this.fb.array([])
      });
  }

  addNewLine():void{
    this.productItems.push(this.initLineItem());
  }

  initLineItem(): FormGroup{
    return this.fb.group({
      productName: ['',[Validators.required]],
      unitPrice: ['',[Validators.required, Validators.min(0)]],
      availableQuantity: ['',[Validators.required, Validators.min(0)]]
    });
  }

  deleteLine(index: number): void{
    if(this.productItems.length >1){
      this.productItems.removeAt(index);
    }else{
      alert('At least one line item should be exists');
    }
    this.productItems.removeAt(index);
  }

  onTotalProducts():void{
    for (const formRow of this.productItems.controls) {
      const products: number = this.productItems.length;
    this.productTotal += products;
    console.log(this.productTotal)
  }
}

  onSubmit(){
    this.submitted = true;

    if(this.productForm.valid){
      console.log(this.productForm.value);
      //console.log(this.productForm.controls);

      //add values to form
      this.f.address.setValue('Default address');

      // Pass data into service
      this.isLoading = true;
      setTimeout(() => {
        console.log('Response');
        this.isLoading = false;

      }, 3000);
    }
  }
}
