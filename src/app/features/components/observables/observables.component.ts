import { Component } from '@angular/core'

import { ObservablesService } from '../../providers'

@Component({
	selector: 'app-observables',
	templateUrl: './observables.component.html',
	styleUrls: ['./observables.component.scss']
})
export class ObservablesComponent {

	constructor(private ObservablesService: ObservablesService) {

	}

	sayHi() {
		this.ObservablesService.sayHi()
	}
}