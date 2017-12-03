import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduledProgramsComponent } from './scheduled-programs.component';

describe('ScheduledProgramsComponent', () => {
  let component: ScheduledProgramsComponent;
  let fixture: ComponentFixture<ScheduledProgramsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduledProgramsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduledProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
