import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewrevComponent } from './viewrev.component';

describe('ViewrevComponent', () => {
  let component: ViewrevComponent;
  let fixture: ComponentFixture<ViewrevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewrevComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewrevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
