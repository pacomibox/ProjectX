import { Component, OnInit } from '@angular/core';
@Component({
selector: 'app-home',
templateUrl: './home.component.html',
styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 logros: ILogro[];
 titulo: 'Bienvenidos';
 constructor() { }
 ngOnInit() {
 this.logros = this.getLogros();
 }
 getLogros(): ILogro[] {
  return [{
   id: 1,
   title: 'ipsum dolor',
   description: 'Lorem ipsum'
  }, {
   id: 2,
   title: 'ipsum dolor',
   description: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet'
  }, {
   id: 3,
   title: 'ipsum dolor',
   description: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet'
  }
 ];
 }
}
interface ILogro {
  id: number;
  title: string;
  description ?: string;
}
