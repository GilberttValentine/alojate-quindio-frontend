import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalNavbarComponent } from './normal-navbar.component';

describe('NormalNavbarComponent', () => {
  let component: NormalNavbarComponent;
  let fixture: ComponentFixture<NormalNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NormalNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
