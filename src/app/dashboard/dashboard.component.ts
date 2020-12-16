import { Component, OnInit, OnDestroy } from '@angular/core'
import { Router } from '@angular/router'
import { Subscription, Observable } from 'rxjs'
import { map, filter } from 'rxjs/operators'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  title: string = 'Welcome to my Angular sandbox!'

  private firstObsSubscription: Subscription

  constructor(private router: Router) { }

  ngOnInit(): void {
    // this.firstObsSubscription = interval(1000).subscribe(count => {
    //   console.log('OBSERVABLE INTERVAL COUNT: ', count)
    // })
    const customIntervalObservable = Observable.create(observer => {
      let count: number = 0
      setInterval(() => {
        observer.next(count)
        if (count == 2) {
          observer.complete()
        }
        if (count > 3) {
          observer.error(new Error('Count is greater than 3!'))
        }
        count++
      }, 1000)
    })

    this.firstObsSubscription = customIntervalObservable.pipe(filter((data => {
      return data > 0
    })), map((data: number) => {
      return 'Round ' + (data + 1)
    })).subscribe(count => {
      console.log(count)
    }, error => {
      alert(error.message)
    }, () => {
      console.log('OBSERVABLE COMPLETED!')
    })
  }

  ngOnDestroy() {
    this.firstObsSubscription.unsubscribe()
  }

  onLoadServers() {
    // complex calculation here or processing
    this.router.navigate(['/servers']) // Programatically navigating to a route defined in our routes
  }
}