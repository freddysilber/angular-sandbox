import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ExploringPipesComponent } from './exploring-pipes.component';

describe('ExploringPipesComponent', () => {
  let component: ExploringPipesComponent;
  let fixture: ComponentFixture<ExploringPipesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExploringPipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploringPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
