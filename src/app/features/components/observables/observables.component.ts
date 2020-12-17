import { Component, OnDestroy } from '@angular/core'
import { from, interval, Observable, Subscription } from 'rxjs'
import { take, map, skip } from 'rxjs/operators'

import { ObservablesService } from '../../providers'

@Component({
	selector: 'app-observables',
	templateUrl: './observables.component.html',
	styleUrls: ['./observables.component.scss']
})
export class ObservablesComponent implements OnDestroy {
	inputPlaceholder: string
	private _sub: Subscription

	constructor(
		private ObservablesService: ObservablesService
	) {
		this.inputPlaceholder = 'abcdefghijklmnopqrstuvwxyz'
	}

	ngOnDestroy() {
		this.ObservablesService.customIntervalSubscription.unsubscribe()
	}

	startCustomObservable() {
		this.ObservablesService.startCustomObservable()
	}

	processAlphabet(event) {
		console.log(event.value.split(''))
		const alphabetObservable: Observable<string> = from(event.value.split('')).pipe(
			skip(1),
			take(15),
			map((letter: string) => 'letter: ' + letter)
		)

		alphabetObservable.subscribe((letter: string) => {
			console.log(letter)
		}).unsubscribe()

		this._sub = interval(100).subscribe(count => {
			if (!event.value[count]) {
				this._sub.unsubscribe()
			} else {
				console.log(event.value[count])
			}
		})
	}
}