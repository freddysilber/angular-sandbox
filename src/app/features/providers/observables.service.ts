import { Injectable } from '@angular/core'
import { Observable, Subscriber, Subscription, from, Subject, BehaviorSubject } from 'rxjs'
import { map, filter } from 'rxjs/operators'

type Stream =
	| string
	| number
	| object

const RETIREMENT = 65

@Injectable({
	providedIn: 'root'
})
export class ObservablesService {
	customIntervalSubscription: Subscription
	incrementEmitter: BehaviorSubject<Stream> = new BehaviorSubject<Stream>('Incrementing numbers')
	// incrementEmitter: Subject<number> = new Subject<number>()
	private _myStream: Stream[] = [
		'Freddy',
		'Silber',
		21
	]

	private _getYearsToRetirement(age: number): number {
		return RETIREMENT - age
	}

	exploreObservables() {
		let greeting: string = 'Hi, Im '
		const myObservable: Observable<Stream> = from(this._myStream).pipe(
			map((value: Stream) => {
				if (typeof value === 'number') {
					return `and I am ${value} years old. and ${this._getYearsToRetirement(value)} years from retirement!`
				}
				return value
			})
		)
		myObservable.subscribe((value: Stream) => greeting += value + ' ').unsubscribe()
		console.log(greeting)
	}

	startCustomObservable() {
		const customIntervalObserver: Observable<number> = new Observable((observer: Subscriber<any>) => {
			let count: number = 0
			setInterval(() => {
				observer.next(count)
				if (count === 2) {
					observer.complete()
				}
				if (count > 3) {
					observer.error(new Error('value is greater than 3'))
				}
				count++
			}, 1000)
		})

		this.customIntervalSubscription = customIntervalObserver.pipe(
			filter((data: number) => {
				return data > 0
			}),
			map((data: number) => {
				return 'Round: ' + data
			}))
			.subscribe((data: string) => {
				console.log(data)
			}, error => {
				console.error(error)
				alert(error.message)
			}, () => {
				alert('Observable completed!')
			})
	}
}