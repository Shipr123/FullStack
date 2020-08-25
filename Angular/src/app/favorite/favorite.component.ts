import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation} from '@angular/core';


@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class FavoriteComponent implements OnInit {
 @Input('is-favorite') isSelected : boolean;
 @Output() change = new EventEmitter();

  onclick(){
    this.isSelected= !this.isSelected;
    this.change.emit( {newvalue: this.isSelected});
    
  }

  constructor() { }

  ngOnInit() {
  }

}

export interface EventOnclick {
  newvalue : boolean ;
}
