import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageChipComponent } from './language-chip.component';

describe('LanguageChipComponent', () => {
  let component: LanguageChipComponent;
  let fixture: ComponentFixture<LanguageChipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguageChipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
