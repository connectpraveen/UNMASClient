import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfregistrationComponent } from './selfregistration.component';

describe('SelfregistrationComponent', () => {
  let component: SelfregistrationComponent;
  let fixture: ComponentFixture<SelfregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
