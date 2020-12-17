import { Component, OnDestroy } from '@angular/core'
import { interval, Subscription } from 'rxjs'

import { ObservablesService } from '../../providers'

@Component({
	selector: 'app-observables',
	templateUrl: './observables.component.html',
	styleUrls: ['./observables.component.scss']
})
export class ObservablesComponent implements OnDestroy {
	inputPlaceholder: string
	private sub: Subscription

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
		this.sub = interval(100).subscribe(count => {
			if (!event.value[count]) {
				this.sub.unsubscribe()
			} else {
				console.log(event.value[count])
			}
		})
	}
}