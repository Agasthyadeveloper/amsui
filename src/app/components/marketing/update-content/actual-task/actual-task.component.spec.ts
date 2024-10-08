import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualTaskComponent } from './actual-task.component';

describe('ActualTaskComponent', () => {
  let component: ActualTaskComponent;
  let fixture: ComponentFixture<ActualTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActualTaskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
