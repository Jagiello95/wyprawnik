import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputBaseComponent } from './input-base.component';

describe('InputComponent', () => {
  let component: InputBaseComponent;
  let fixture: ComponentFixture<InputBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
