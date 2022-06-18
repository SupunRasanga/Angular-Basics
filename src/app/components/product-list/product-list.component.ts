import { ProductService } from './../../services/product.service';
import { Product } from './../../shared/interfaces/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  postList: any[] = [];

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.getProducts();
    // this.getPostList();
  }

  getProducts() {
    this.products = this.productService.getData();
  }

  getPostList() {

    this.productService.getPostList().subscribe((res:any) => {
      this.postList = res;      
    });   

  }

}
