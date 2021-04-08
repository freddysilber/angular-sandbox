import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable, Subscriber, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { ColdObservables } from './cold-observables.service';
import { HotObservables } from './hot-observables.service';

type Stream =
	| string
	| number
	| object;

const RETIREMENT = 65;

@Injectable({
	providedIn: 'root'
})
export class ObservablesService {
	customIntervalSubscription: Subscription
	incrementEmitter$: BehaviorSubject<Stream> = new BehaviorSubject<Stream>('Incrementing numbers')
	// incrementEmitter: Subject<number> = new Subject<number>()
	private _myStream: Stream[] = [
		'Freddy',
		'Silber',
		21
	];

	constructor(
		private _coldObservablesService: ColdObservables,
		private _hotObservablesService: HotObservables,
	) { }

	private _getYearsToRetirement(age: number): number {
		return RETIREMENT - age;
	}

	exploreObservables(): void {
		let greeting: string = 'Hi, Im ';
		const myObservable: Observable<Stream> = from(this._myStream).pipe(
			map((value: Stream) => {
				if (typeof value === 'number') {
					return `and I am ${value} years old. and ${this._getYearsToRetirement(value)} years from retirement!`
				}
				return value
			})
		);
		myObservable.subscribe((value: Stream) => greeting += value + ' ').unsubscribe();
		console.log(greeting);
	}

	startCustomObservable(): void {
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