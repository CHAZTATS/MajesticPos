import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptFooterComponent } from './receipt-footer.component';

describe('ReceiptFooterComponent', () => {
  let component: ReceiptFooterComponent;
  let fixture: ComponentFixture<ReceiptFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceiptFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiptFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
