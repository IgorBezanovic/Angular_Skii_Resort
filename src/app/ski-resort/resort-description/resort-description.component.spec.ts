import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResortDescriptionComponent } from './resort-description.component';

describe('ResortDescriptionComponent', () => {
  let component: ResortDescriptionComponent;
  let fixture: ComponentFixture<ResortDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResortDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResortDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
