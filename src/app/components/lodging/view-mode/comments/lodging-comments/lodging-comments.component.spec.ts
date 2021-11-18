import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LodgingCommentsComponent } from './lodging-comments.component';

describe('LodgingCommentsComponent', () => {
  let component: LodgingCommentsComponent;
  let fixture: ComponentFixture<LodgingCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LodgingCommentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LodgingCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
