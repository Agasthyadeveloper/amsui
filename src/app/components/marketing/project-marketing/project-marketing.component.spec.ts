import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectMarketingComponent } from './project-marketing.component';

describe('ProjectMarketingComponent', () => {
  let component: ProjectMarketingComponent;
  let fixture: ComponentFixture<ProjectMarketingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectMarketingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectMarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
