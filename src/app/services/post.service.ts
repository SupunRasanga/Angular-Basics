import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getPostList(): Observable<any[]> {
    return this.httpClient.get<any[]>('https://jsonplaceholder.typicode.com/posts');
  }

  getPostById(id: number): Observable<any> {
    return this.httpClient.get<any>(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }


}
