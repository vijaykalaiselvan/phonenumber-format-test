import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  name = 'Angular Demo';
  phoneNumbers=[];
  ngOnInit()  {
    this.phoneNumbers=['+11234567890','11234567890','1234567890','+112-3456-7890'];
  }
}
