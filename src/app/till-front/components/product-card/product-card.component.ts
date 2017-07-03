import { Product } from './../../models/product';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() product: Product;
  @Output() addToBasket: EventEmitter<Product> = new EventEmitter<Product>();
  
  constructor() { }

  ngOnInit() {
    console.log(this.product);
  }

  addProductToBasket() {
    this.addToBasket.emit(this.product);
  }

}
