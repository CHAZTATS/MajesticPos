import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarcodeBarComponent } from './barcode-bar.component';

describe('BarcodeBarComponent', () => {
  let component: BarcodeBarComponent;
  let fixture: ComponentFixture<BarcodeBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarcodeBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarcodeBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
