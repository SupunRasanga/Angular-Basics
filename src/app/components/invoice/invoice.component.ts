import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  submitted: boolean = false;
  isLoading:boolean = false;

  invoiceForm!:FormGroup;
  get f(){return this.invoiceForm.controls;}

  get lineItems(): FormArray{
    return this.invoiceForm.get('lineItems') as FormArray;
  }
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm():void{
    this.invoiceForm = this.fb.group({
      invoiceNo:['',Validators.required],
      invoiceDate:['',Validators.required],
      customerName:['',Validators.required],
      contactNo:['',Validators.required],
      address:[''],
      remarks:[''],
      grossAmount:['',Validators.required],
      discount:[0,[Validators.required,Validators.min(0),Validators.max(100)]],
      netAmount:['',Validators.required],
      lineItems:this.fb.array([])
    });
  }

  onSubmit(){
    // console.log(this.invoiceForm.value);
    this.submitted = true;
    if(this.invoiceForm.valid){
      console.log(this.invoiceForm.value);

    }

  }

  addNewLine(){
    this.lineItems.push(this.initLineItem());
  }

  initLineItem():FormGroup{
   return this.fb.group({
    itemName:['',Validators.required],
    unitPrice:['',[Validators.required,Validators.min(0)]],
    quantity:['',[Validators.required,Validators.min(0)]],
    total:['',Validators.required],
  })
  }

  deleteLine(index:number):void{
    if(this.lineItems.length > 1){
    this.lineItems.removeAt(index);
  }else{
    alert('Atleast one line item should be exists');
  }
}

//#region Calculations

onUnitPriceQuantityChanged(i:number):void{
  const unitPrice:number = Number(this.lineItems.controls[i].get('unitPrice')?.value);
  const quantity:number = Number(this.lineItems.controls[i].get('quantity')?.value);
  this.lineItems.controls[i].get('total')?.setValue(unitPrice*quantity);
  this.calculateNetAmount();

}

calculateNetAmount():void{
  let grossAmount:number = 0;
  let netAmount:number = 0;
  const discount : number = Number(this.invoiceForm.get('discount')?.value);
  for (const formRow of this.lineItems.controls) {
  //  console.log( formRow.get('total')?.value);
  grossAmount += Number(formRow.get('total')?.value);

  }

  netAmount = grossAmount - ((grossAmount*discount)/100);
  this.invoiceForm.get('grossAmount')?.setValue(grossAmount);
  this.invoiceForm.get('netAmount')?.setValue(netAmount);

}

//#endregion
}
