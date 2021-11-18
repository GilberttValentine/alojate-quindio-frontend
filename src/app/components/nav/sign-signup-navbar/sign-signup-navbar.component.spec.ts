import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignSignupNavbarComponent } from './sign-signup-navbar.component';

describe('SignSignupNavbarComponent', () => {
  let component: SignSignupNavbarComponent;
  let fixture: ComponentFixture<SignSignupNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignSignupNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignSignupNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
