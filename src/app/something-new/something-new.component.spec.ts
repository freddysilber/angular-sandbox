import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SomethingNewComponent } from './something-new.component';

describe('SomethingNewComponent', () => {
  let component: SomethingNewComponent;
  let fixture: ComponentFixture<SomethingNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SomethingNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomethingNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
