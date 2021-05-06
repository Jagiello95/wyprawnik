import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquadLayoutComponent } from './squad-layout.component';

describe('SquadLayoutComponent', () => {
  let component: SquadLayoutComponent;
  let fixture: ComponentFixture<SquadLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SquadLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SquadLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
