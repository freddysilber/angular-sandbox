import { Component } from '@angular/core'

import { ObservablesService } from '../../providers'

@Component({
	selector: 'app-observables',
	templateUrl: './observables.component.html',
	styleUrls: ['./observables.component.scss']
})
export class ObservablesComponent {
	inputPlaceholder: string

	constructor(
		private ObservablesService: ObservablesService
	) {
		this.inputPlaceholder = 'abcdefghijklmnopqrstuvwxyz'
	}

	sayHi() {
		this.ObservablesService.sayHi()
	}

	processAlphabet(event) {
		this.ObservablesService.processAlphabet(event.value)
	}
}