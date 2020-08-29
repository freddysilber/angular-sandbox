import { Component, OnInit, OnDestroy } from '@angular/core'
import { timer, Subscription } from 'rxjs'

@Component({
  selector: 'app-observable-practice',
  templateUrl: './observable-practice.component.html',
  styleUrls: ['./observable-practice.component.css']
})
export class ObservablePracticeComponent implements OnInit, OnDestroy {
  private timerSub: Subscription
  public timerValue: number = 0

  constructor() { }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this.timerSub.unsubscribe()
  }

  startTimer(): void {
    this.timerSub = timer(0, 500).subscribe(val => this.timerValue = val)
  }

  stopTimer(): void {
    this.timerSub.unsubscribe()
  }
}