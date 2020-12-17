import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'

@Injectable({
	providedIn: 'root'
})
export class ObservablesService {
	alphabetObservable: Observable<string[]> = new Observable

	public sayHi() {
		alert('Welcome to observables lessons')
	}

	public processAlphabet(text) {
		this.alphabetObservable = of(text.split(''))
		console.log(this.alphabetObservable)
		this.alphabetObservable.subscribe(letter => console.log(letter))
		// this.alphabetObservable.subscribe({
		// 	next: (x: string) => console.log('Observer got a next value: ' + x),
		// 	error: (err: string) => console.error('Observer got an error: ' + err),
		// 	complete: () => console.log('Observer got a complete notification'),
		// })
	}
}