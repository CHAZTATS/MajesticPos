import { Customer } from './../../models/customer';
import { ReceiptProduct } from './../../models/receipt-product';
import { Receipt } from './../../models/receipt';
import { Component, OnInit } from '@angular/core';
import { Product } from "app/till-front/models/product";

@Component({
  selector: 'app-till-front',
  templateUrl: './till-front.component.html',
  styleUrls: ['./till-front.component.css']
})
export class TillFrontComponent implements OnInit {

  receipt = new Receipt();
  customer = {} as Customer;

  constructor() { 
    
  }

  ngOnInit() {
    this.customer.id = 1;
    this.customer.name = "Charles Taverner"
    this.receipt.customer = this.customer;
    console.log(this.receipt);
  }

  addProductToReceipt($product: Product) {
    let productAlreadyinReceipt = this.receipt.receiptProducts.find(p => p.product.id == $product.id);

    if(productAlreadyinReceipt){
      productAlreadyinReceipt.quantity++;
      productAlreadyinReceipt.subtotal = productAlreadyinReceipt.quantity * productAlreadyinReceipt.product.price;

    } else {
      let receiptProduct = new ReceiptProduct;
      receiptProduct.product = $product;
      receiptProduct.quantity = 1;
      receiptProduct.subtotal = $product.price;
      this.receipt.receiptProducts.push(receiptProduct);
    }
  }

}
