import { Injectable } from '@angular/core'

@Injectable({
	providedIn: 'root'
})
export class ObservablesService {

	sayHi() {
		alert('Welcome to observables lessons')
	}
}