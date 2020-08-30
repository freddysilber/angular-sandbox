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
  observer.next('Grape')
  observer.next('Waltermelon')
  observer.complete()

  return { unsubscribe() { } }
}
// START GEOLOCATION OBSERVABLE (FROM ANGULAR DOCS)
// Create an Observable that will start listening to geolocation updates
// when a consumer subscribes.
const locations = new Observable((observer) => {
  let watchId: number
  // Simple geolocation API check provides values to publish
  if ('geolocation' in navigator) {
    watchId = navigator.geolocation.watchPosition((position: Position) => {
      observer.next(position)
    }, (error: PositionError) => {
      observer.error(error)
    })
  } else {
    observer.error('Geolocation not available')
  }
  // When the consumer unsubscribes, clean up data ready for next subscription.
  return {
    unsubscribe() {
      navigator.geolocation.clearWatch(watchId)
    }
  }
})

// Call subscribe() to start listening for updates.
const locationsSubscription = locations.subscribe({
  next(position) {
    console.log('Current Position: ', position)
  },
  error(msg) {
    console.log('Error Getting Location: ', msg)
  }
})

// Stop listening for location after 10 seconds
setTimeout(() => {
  locationsSubscription.unsubscribe()
}, 10000)
// END GEOLOCATION OBSERVABLE
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
    this.timerSub = timer(0, 1000).subscribe(val => {
      this.timerValue = val
    })
  }

  stopTimer(): void {
    console.log(this.timerSub)
    this.timerSub.unsubscribe()
    this.timerSub = null // Set to null so user can start and stop timer as much as they want
  }
}