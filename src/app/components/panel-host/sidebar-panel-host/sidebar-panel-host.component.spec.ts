import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarPanelHostComponent } from './sidebar-panel-host.component';

describe('SidebarPanelHostComponent', () => {
  let component: SidebarPanelHostComponent;
  let fixture: ComponentFixture<SidebarPanelHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarPanelHostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarPanelHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
