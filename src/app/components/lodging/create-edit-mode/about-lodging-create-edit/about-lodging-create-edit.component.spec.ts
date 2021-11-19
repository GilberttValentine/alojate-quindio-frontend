import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutLodgingCreateEditComponent } from './about-lodging-create-edit.component';

describe('AboutLodgingCreateEditComponent', () => {
  let component: AboutLodgingCreateEditComponent;
  let fixture: ComponentFixture<AboutLodgingCreateEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutLodgingCreateEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutLodgingCreateEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
