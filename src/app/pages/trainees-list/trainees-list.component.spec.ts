import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraineesListComponent } from './trainees-list.component';

describe('TraineesListComponent', () => {
  let component: TraineesListComponent;
  let fixture: ComponentFixture<TraineesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraineesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraineesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
