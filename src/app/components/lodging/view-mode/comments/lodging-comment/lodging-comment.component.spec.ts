import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LodgingCommentComponent } from './lodging-comment.component';

describe('LodgingCommentComponent', () => {
  let component: LodgingCommentComponent;
  let fixture: ComponentFixture<LodgingCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LodgingCommentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LodgingCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
