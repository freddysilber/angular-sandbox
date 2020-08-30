import { Component, OnInit, OnDestroy } from '@angular/core'
import { timer, of, Subscription, Observable } from 'rxjs'

const myObserver = {
  next: (x: string) => console.log('Observer got a next value: ' + x),
  error: (err: string) => console.error('Observer got an error: ' + err),
  complete: () => console.log('Observer got a complete notification'),
}

const myObservable = of('apple', 'orange', 'bananna', 'grape', 'watermelon')

const sequence = new Observable(sequenceSubscriber)

function sequenceSubscriber(observer) {
  observer.next('Apple')
  observer.next('Orange')
  observer.next('Grappe')
  observer.complete()

  return { unsubscribe() { } }
}

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
    console.log('%c <-- OBSERVABLE PRACTICE -->', 'color: gold')
    myObservable.subscribe(myObserver)

    sequence.subscribe({
      next(msg) { console.log(msg) },
      complete() { console.log('Finished sequence') }
    })
  }

  ngOnDestroy(): void {
    if (this.timerSub) {
      this.timerSub.unsubscribe()
    }
  }

  startTimer(): void {
    if (this.timerSub) { // Try to prevent user to start multiple timers 
      return
    }
    this.timerSub = timer(0, 1000).subscribe(val => this.timerValue = val)
  }

  stopTimer(): void {
    this.timerSub.unsubscribe()
  }
}