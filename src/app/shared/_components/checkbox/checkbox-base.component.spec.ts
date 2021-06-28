import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxBaseComponent } from './checkbox-base.component';

describe('CheckboxBaseComponent', () => {
  let component: CheckboxBaseComponent;
  let fixture: ComponentFixture<CheckboxBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckboxBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
