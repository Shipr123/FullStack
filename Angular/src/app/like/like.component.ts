import { Component, Input} from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent  {


   @Input()  isActive : boolean;
   @Input() likeCount : number;

   onClick(){

   this.likeCount +=(this.isActive)?-1 : +1 ;
   this.isActive=!this.isActive;

   }
  
}
