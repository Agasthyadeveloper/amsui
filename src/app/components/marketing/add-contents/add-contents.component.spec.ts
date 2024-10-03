import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddContentsComponent } from './add-contents.component';

describe('AddContentsComponent', () => {
  let component: AddContentsComponent;
  let fixture: ComponentFixture<AddContentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddContentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
