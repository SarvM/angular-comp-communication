import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { InvoiceInputComponent } from './invoice-input/invoice-input.component';
import { InvoiceDisplayComponent } from './invoice-display/invoice-display.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, InvoiceInputComponent, InvoiceDisplayComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
