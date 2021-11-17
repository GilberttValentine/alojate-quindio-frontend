import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelHostNavbarComponent } from './panel-host-navbar.component';

describe('PanelHostNavbarComponent', () => {
  let component: PanelHostNavbarComponent;
  let fixture: ComponentFixture<PanelHostNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelHostNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelHostNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
