import { Product } from './../../models/product';
import { ProductsService } from './../../services/products-service/products.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.css']
})
export class MainSectionComponent implements OnInit {

  products: Product[];
  @Output() productAddedToBasketEmitter: EventEmitter<Product> = new EventEmitter<Product>();

  constructor(private _productsService: ProductsService) { }

  ngOnInit() {
    this._productsService.getAllProducts().subscribe(
      data => {this.products = data.json()},
      err => {},
      () => {console.log(this.products)}
    )
  }

  productAddedToBasket($product) {
    this.productAddedToBasketEmitter.emit($product);
  }

}
