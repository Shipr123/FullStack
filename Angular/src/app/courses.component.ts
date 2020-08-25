import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
   selector: 'courses',
   template: `
   Name:<input [(ngModel)]="email"  (keyup.enter)="onKeyUp()" /> <br>
   {{course.title | uppercase}} <br>
   {{course.Name | uppercase }} <br> 
   {{ course.Class | number }} <br>
   {{ course.date}}<br>
   {{ para | summary : '5' }} `


})

export class CoursesComponent{
   email="this.com";

   onKeyUp(){ 
    console.log(this.email);
   }
  para="this is the main hall for eating the lunch you should come fast or food will get finish and yu will feelhungry like never before";
   course={
      title:"the Book",
      Name:"Shipra",
      Class:4546778,
      date: new Date(2016,3,1)
   }
}