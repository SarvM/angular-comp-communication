import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-invoice-input',
  templateUrl: './invoice-input.component.html',
  styleUrls: ['./invoice-input.component.css']
})
export class InvoiceInputComponent implements OnInit {

  @ViewChild('itemName', {static: false}) itemNameRef: ElementRef;
  @ViewChild('itemPrice', {static: false}) itemPriceRef: ElementRef;

  @Output('vegAdd') vegAdd: EventEmitter<any> = new EventEmitter();
  @Output('cosAdd') cosAdd: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onAddVegetable() {
    var invoiceItem = {
      type: 'veg',
      name: this.itemNameRef.nativeElement.value,
      price: this.itemPriceRef.nativeElement.value
    }
    this.vegAdd.emit(invoiceItem);
  }

  onAddCosmetics() {
    var invoiceItem = {
      type: 'cos',
      name: this.itemNameRef.nativeElement.value,
      price: this.itemPriceRef.nativeElement.value
    }
    this.cosAdd.emit(invoiceItem);
  }

}