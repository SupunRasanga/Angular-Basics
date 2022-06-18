import { Product } from './../../shared/interfaces/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured-list',
  templateUrl: './featured-list.component.html',
  styleUrls: ['./featured-list.component.css']
})
export class FeaturedListComponent implements OnInit {

  products: Product[] = [];

  // cardColor: string = 'bg-danger';
  constructor() { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.products = [
      {
        id: 3,
        title: 'Hummus',
        description: 'This humble Middle Eastern spread, made with chickpeas, garlic, lemon juice and tahini has become.',
        imagePath: 'https://dynaimage.cdn.cnn.com/cnn/q_auto,w_634,c_fill,g_auto,h_357,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F170209172755-hummus.jpg',
        price: 850,
        availableQty: 26
      },
      {
        id: 4,
        title: 'Fish \'n\' chips',
        description: 'Anything that\'s been around since the 1860s can\'t be doing much wrong. The staple of the.',
        imagePath: 'https://dynaimage.cdn.cnn.com/cnn/q_auto,w_634,c_fill,g_auto,h_357,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F170124150418-18---fish-and-chips.jpg',
        price: 690,
        availableQty: 23
      },
      {
        id: 5,
        title: 'Goi cuon (summer roll)',
        description: 'This snack made from pork, shrimp, herbs, rice vermicelli and other ingredients wrapped in.',
        imagePath: 'https://dynaimage.cdn.cnn.com/cnn/q_auto,w_634,c_fill,g_auto,h_357,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F170306134418-goi-cuon.jpg',
        price: 950,
        availableQty: 55
      }
    ];
  }

  getCardColor(avlQty: number): string {

    let cardColor: string;

    // if (avlQty > 50) {
    //   cardColor = 'bg-info';
    // } else if (avlQty > 25) {
    //   cardColor = 'bg-success';
    // } 

    cardColor = (avlQty > 50) ? 'bg-info' : 'bg-warning';

    // else {
    //   cardColor = 'bg-warning';
    // }
    return cardColor;
  }

}
