import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourStayComponent } from './your-stay.component';

describe('YourStayComponent', () => {
  let component: YourStayComponent;
  let fixture: ComponentFixture<YourStayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourStayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YourStayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
