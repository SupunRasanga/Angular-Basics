import { Product } from './../shared/interfaces/product';
import { Injectable, } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getData(): Product[] {

    const productList: Product[] = [
      {
        id: 1,
        title: 'French toast',
        description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
        imagePath: 'http://cdn.cnn.com/cnnnext/dam/assets/140430115517-06-comfort-foods.jpg',
        price: 550,
        availableQty: 38,
      },
      {
        id: 2,
        title: 'Chicken parm',
        description: 'Melted Parmesan and mozzarella cheese, and a peppery, garlicky tomato sauce drizzled over the top of a chicken fillet.',
        imagePath: 'https://dynaimage.cdn.cnn.com/cnn/q_auto,w_634,c_fill,g_auto,h_357,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F170920150817-chicken-parm.jpg',
        price: 380,
        availableQty: 12
      },
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
        availableQty: 42
      },
    ];
    return productList;
  }

  getPostList(): Observable<any[]> {
    return this.httpClient.get<any[]>('https://jsonplaceholder.typicode.com/posts');
  }

}
