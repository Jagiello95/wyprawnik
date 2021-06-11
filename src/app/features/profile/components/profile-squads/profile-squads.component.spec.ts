import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSquadsComponent } from './profile-squads.component';

describe('ProfileSquadsComponent', () => {
  let component: ProfileSquadsComponent;
  let fixture: ComponentFixture<ProfileSquadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileSquadsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileSquadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
