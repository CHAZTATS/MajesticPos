import { Customer } from './customer';
import { ReceiptProduct } from './receipt-product';

export class Receipt {
    receiptProducts: ReceiptProduct[];
    total: number;
    customer: Customer;

    constructor() {
        this.receiptProducts = new Array();
        this.total = 0;
        this.customer = null;
    }
}