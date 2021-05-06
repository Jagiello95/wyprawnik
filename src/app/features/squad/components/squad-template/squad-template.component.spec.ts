import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquadTemplateComponent } from './squad-template.component';

describe('SquadTemplateComponent', () => {
  let component: SquadTemplateComponent;
  let fixture: ComponentFixture<SquadTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SquadTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SquadTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
