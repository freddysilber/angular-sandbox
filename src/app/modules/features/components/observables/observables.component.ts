import { Component, OnDestroy, OnInit } from '@angular/core';
import { from, interval, Observable, Subscription } from 'rxjs';
import { take, map, skip } from 'rxjs/operators';

import { ObservablesService } from '../../providers';

@Component({
	selector: 'app-observables',
	templateUrl: './observables.component.html',
	styleUrls: ['./observables.component.scss']
})
export class ObservablesComponent implements OnInit, OnDestroy {
	count: number;
	incrementOutput: string[] = [];
	inputPlaceholder: string;
	private _sub: Subscription;
	private _incrementSub: Subscription;

	constructor(
		private _observablesService: ObservablesService
	) {
		this.inputPlaceholder = 'abcdefghijklmnopqrstuvwxyz';
		this.count = 0;
	}

	ngOnInit(): void {
		this._incrementSub = this._observablesService.incrementEmitter$.pipe(
			map((value: number) => {
				if (typeof value === 'number') {
					return value % 2 === 0 ? `Even: ${value}` : `Odd: ${value}`;
				}
				return value;
			})
		).subscribe((value: string) => {
			this.incrementOutput.push(value);
		});
	}

	ngOnDestroy(): void {
		if (this._observablesService.customIntervalSubscription) {
			this._observablesService.customIntervalSubscription.unsubscribe();
		}
		if (this._incrementSub) {
			this._incrementSub.unsubscribe();
		}
	}

	increment(): void {
		this._observablesService.incrementEmitter$.next(this.count++);
	}

	exploreObservables(): void {
		this._observablesService.exploreObservables();
	}

	startCustomObservable(): void {
		this._observablesService.startCustomObservable();
	}

	processIncrementOutput(): void {
		const incrementOutput = from(this.incrementOutput).pipe(
			skip(2),
			take(3),
			map((value: string) => `this is a keeper: ${value}`)
		);
		incrementOutput.subscribe((value: string) => console.log(value)).unsubscribe();
	}

	processAlphabet(event): void {
		const alphabetObservable: Observable<string> = from(event.value.split('')).pipe(
			skip(1),
			take(15),
			map((letter: string) => 'letter: ' + letter)
		);

		alphabetObservable.subscribe((letter: string) => {
			console.log(letter);
		}).unsubscribe();

		this._sub = interval(100).subscribe(count => {
			if (!event.value[count]) {
				this._sub.unsubscribe();
			} else {
				console.log(event.value[count]);
			}
		});
	}
}
