import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  invoiceItems: {type: string, name: string, price: string}[] = []

  constructor() {
    //this.invoiceItems = [ {type: 'veg', name : 'test', price: '100'}];
  }

  onVegAdded(el: any) {
    this.invoiceItems.push(el);
  }

  onCosAdded(el: any) {
    this.invoiceItems.push(el);
  }

}
