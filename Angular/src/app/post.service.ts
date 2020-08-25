import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { DataService } from './data.service';
//import { Observable, throwError } from 'rxjs';
//import { map,catchError }  from 'rxjs/operator'
//import { AppError } from './app-error';
//import { NotFoundError } from './not-found-error';




@Injectable({
  providedIn: 'root'
})
export class PostService  extends DataService{
  constructor( http: HttpClient ) {
    super('http://jsonplaceholder.typicode.com/posts',http);
    
  }

}
