import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-invoice-display',
  templateUrl: './invoice-display.component.html',
  styleUrls: ['./invoice-display.component.css']
})
export class InvoiceDisplayComponent implements OnInit {

  @Input('invItem') invoiceItem: string;

  constructor() { }

  ngOnInit() {
  }

}