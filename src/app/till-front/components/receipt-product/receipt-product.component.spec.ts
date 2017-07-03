import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptProductComponent } from './receipt-product.component';

describe('ReceiptProductComponent', () => {
  let component: ReceiptProductComponent;
  let fixture: ComponentFixture<ReceiptProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceiptProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiptProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
