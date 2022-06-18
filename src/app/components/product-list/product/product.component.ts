//import { Product, productType } from './../../../shared/interfaces/product';
import { Product } from './../../../shared/interfaces/product';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product!: Product;

  constructor() { }

  ngOnInit(): void {

    // if(this.product.productType == productType.Import){
    //   // do something
    // }
    // if(this.product.productType == productType.Export){
    //   // do something
    // }
    // if(this.product.productType == productType.Chemical || this.product.productType == productType.RowMaterial){
    //   // do something
    // }
  }

}
