import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TillFrontComponent } from './till-front.component';

describe('TillFrontComponent', () => {
  let component: TillFrontComponent;
  let fixture: ComponentFixture<TillFrontComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TillFrontComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TillFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
