import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AnimationsPracticeComponent } from './animations-practice.component';

describe('AnimationsPracticeComponent', () => {
  let component: AnimationsPracticeComponent;
  let fixture: ComponentFixture<AnimationsPracticeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AnimationsPracticeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimationsPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
