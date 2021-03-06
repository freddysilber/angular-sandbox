import { Component } from '@angular/core'

interface Paths {
	name: string
	path: string
}

@Component({
	selector: 'app-navigation',
	templateUrl: './navigation.component.html',
	styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
	appTitle: string = 'Angular Sandbox'

	public routes: Paths[] = [
		{ name: 'Counter', path: '/counter' },
		{ name: 'Servers', path: '/servers' },
		{ name: 'Game', path: '/game' },
		{ name: 'Reactive Form', path: '/reactive-form' },
		{ name: 'Pipes', path: '/pipes' },
		{ name: 'Animations', path: '/animations' },
		{ name: 'Observable Practice', path: '/observable-practice' },
		{ name: 'Features', path: '/features' },
		{ name: 'Risk Matrix', path: '/riskMatrix' },
		{ name: 'Two Way Data Binding', path: '/two-way-data-binding' }
	]

	constructor() { }
}