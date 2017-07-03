import { ReceiptProduct } from './../../models/receipt-product';
import { Receipt } from './../../models/receipt';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-receipt-footer',
  templateUrl: './receipt-footer.component.html',
  styleUrls: ['./receipt-footer.component.css']
})
export class ReceiptFooterComponent implements OnInit {

  @Input() total: number;
  
  constructor() { }

  ngOnInit() {
  }

}
