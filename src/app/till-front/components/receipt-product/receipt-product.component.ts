import { ReceiptProduct } from './../../models/receipt-product';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tr[receiptProduct]',
  templateUrl: './receipt-product.component.html',
  styleUrls: ['./receipt-product.component.css']
})
export class ReceiptProductComponent implements OnInit {

  @Input() receiptProduct: ReceiptProduct;

  constructor() { }

  ngOnInit() {
    console.log(this.receiptProduct);
  }

  increaseQuantity() {
    this.receiptProduct.quantity++;
    this.updateSubtotal();
  }

  decreaseQuantity() {
    this.receiptProduct.quantity--;
    this.updateSubtotal();
  }

  updateSubtotal() {
    this.receiptProduct.subtotal = this.receiptProduct.product.price * this.receiptProduct.quantity;
  }

}
