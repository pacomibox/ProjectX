import {Component} from '@angular/core';

/**
 * @title Dynamic grid-list
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class GridListDynamicComponent {
  tiles = [
    {text: 'One', cols: 1, rows: 5, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 5, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 5, color: 'lightpink'},

  ];
}
