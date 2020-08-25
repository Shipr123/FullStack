import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError }  from 'rxjs/operator'
import { AppError } from './app-error';
import { NotFoundError } from './not-found-error';
import 'rxjs/Rx'
import {filter, map } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class DataService {

 
  constructor(private url, private http: HttpClient ) { }

Onget(){
    return this.http.get(this.url)
    .map((response:Response)=>response)
    .pipe(catchError(this.handleError));
  }
Create(resource){
   return this.http.post(this.url, JSON.stringify(resource))
   .pipe(catchError(this.handleError));
 }
 
 Update(resource){
   return this.http.patch(this.url + '/'+ resource, JSON.stringify({isread:true})) 
   .pipe(catchError (this.handleError));
 }
 
 delete(id){
   return this.http.delete(this.url+'/'+id)
  // .topromise()
   
.pipe(
    catchError((error:Response )=>{
     if(error.status===404)
     return throwError(new NotFoundError());
     
 
     return throwError( new AppError( error));
    }));

   }

  private handleError(error:Response){
    if(error.status===404)
    return throwError(new NotFoundError());
    
    return throwError( new AppError(error));

   } 

}