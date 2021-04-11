import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggrevComponent } from './suggrev.component';

describe('SuggrevComponent', () => {
  let component: SuggrevComponent;
  let fixture: ComponentFixture<SuggrevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuggrevComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggrevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
