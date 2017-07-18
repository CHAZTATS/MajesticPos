import { ProductsService } from './till-front/services/products-service/products.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './till-front/components/navbar/navbar.component';
import { TillFrontComponent } from './till-front/components/till-front/till-front.component';
import { ReceiptComponent } from './till-front/components/receipt/receipt.component';
import { MainSectionComponent } from './till-front/components/main-section/main-section.component';
import { ProductCardComponent } from './till-front/components/product-card/product-card.component';
import { ReceiptProductComponent } from './till-front/components/receipt-product/receipt-product.component';
import { ReceiptFooterComponent } from './till-front/components/receipt-footer/receipt-footer.component';
import { BarcodeBarComponent } from './till-front/components/barcode-bar/barcode-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TillFrontComponent,
    ReceiptComponent,
    MainSectionComponent,
    ProductCardComponent,
    ReceiptProductComponent,
    ReceiptFooterComponent,
    BarcodeBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
