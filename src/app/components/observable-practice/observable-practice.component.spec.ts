import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ObservablePracticeComponent } from './observable-practice.component';

describe('ObservablePracticeComponent', () => {
  let component: ObservablePracticeComponent;
  let fixture: ComponentFixture<ObservablePracticeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservablePracticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservablePracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
