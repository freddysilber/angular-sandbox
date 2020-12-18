import { Component } from '@angular/core'

interface Paths {
	name: string
	path: string
}

@Component({
	selector: 'feature-dashboard',
	templateUrl: './feature-dashboard.component.html'
})
export class FeatureDashboardComponent {

	public routes: Paths[] = [
		{ name: 'Observables', path: 'observables' }
	]
}