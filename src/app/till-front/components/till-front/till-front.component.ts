import { Customer } from './../../models/customer';
import { ReceiptProduct } from './../../models/receipt-product';
import { Receipt } from './../../models/receipt';
import { Component, OnInit } from '@angular/core';
import { Product } from "app/till-front/models/product";
import {AngularIndexedDB} from 'angular2-indexeddb';

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

    let db = new AngularIndexedDB('myDb', 1);

    db.createStore(1, (evt) => {
    let objectStore = evt.currentTarget.result.createObjectStore(
        'products', { keyPath: "id", autoIncrement: true });

        objectStore.createIndex("id", "id", { unique: false });
        objectStore.createIndex("name", "name", { unique: false });
        objectStore.createIndex("maker", "maker", { unique: false });
    }).then(() => {
      db.add('products', { id: '1', name: 'name1', maker: 'maker1', price: 12.99 }).then(() => {
          console.log("test");
      }, (error) => {
          console.log(error);
      });
      db.add('products', { id: '2', name: 'name2', maker: 'maker2', price: 10.00 }).then(() => {
          db.getByIndex('products', 'name', 'name1').then(product => {
            console.log(product);
          });
          db.getAll('products').then(products => {
            console.log(products);
          })
      }, (error) => {
          console.log(error);
      });
    });
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
