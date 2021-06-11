import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormIconComponent } from './form-icon.component';

describe('FormIconComponent', () => {
  let component: FormIconComponent;
  let fixture: ComponentFixture<FormIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
