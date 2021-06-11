import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileLeftSidebarComponent } from './profile-left-sidebar.component';

describe('ProfileLeftSidebarComponent', () => {
  let component: ProfileLeftSidebarComponent;
  let fixture: ComponentFixture<ProfileLeftSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileLeftSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileLeftSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
