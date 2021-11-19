import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LodgingImagesComponent } from './lodging-images.component';

describe('LodgingImagesComponent', () => {
  let component: LodgingImagesComponent;
  let fixture: ComponentFixture<LodgingImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LodgingImagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LodgingImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
