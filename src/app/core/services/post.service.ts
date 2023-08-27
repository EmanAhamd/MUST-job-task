import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Ipost } from '../models/post';


Observable

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private baseURL = "https://jsonplaceholder.typicode.com";
  myPosts:Ipost[] = []

  constructor(private http:HttpClient) { }
  
  getAllPosts():Observable<any>{
    return this.http.get(`${this.baseURL}/posts`);
  }
}
