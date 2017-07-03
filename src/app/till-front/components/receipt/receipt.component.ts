import { Receipt } from './../../models/receipt';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class ReceiptComponent implements OnInit {

  @Input() receipt: Receipt;
  oldQuantity: number;

  constructor() { }

  ngOnInit() {
  }

  ngDoCheck() {
    this.receipt.total = 0;
    this.receipt.receiptProducts.forEach(rp => {
      this.receipt.total += rp.subtotal;
    })
  }

}
