import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HalfLayoutComponent } from './half-layout.component';

describe('HalfLayoutComponent', () => {
  let component: HalfLayoutComponent;
  let fixture: ComponentFixture<HalfLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HalfLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HalfLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
