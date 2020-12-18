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
		{ name: 'Something New', path: '/something-new' },
		{ name: 'Observable Practice', path: '/observable-practice' },
		{ name: 'Features', path: '/features' }
	]

	constructor() { }
}