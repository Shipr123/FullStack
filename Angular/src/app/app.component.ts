import { Component } from '@angular/core';
import { EventOnclick } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  post={
    title : "Hello" ,
    isSelected :true };

    onChange( args : EventOnclick ){
      console.log('favorite changed', args);
      
    }
   courses = ["course1", "course2"];

}
