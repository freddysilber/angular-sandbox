import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
// import { map } from 'rxjs/operators';

/**
 * Topic: Cold Observables Study and Research
 * 
 * RESOURCES: 
 * https://luukgruijs.medium.com/understanding-hot-vs-cold-observables-62d04cf92e03
 * 
 * NOTES:
 * 
 * We call an Observable “cold” when the data is produced inside the Observable.
 */
@Injectable({
	providedIn: 'root'
})
export class ColdObservables {

	private _randomNumber$: Observable<number> = new Observable((observer: Subscriber<number>) => {
		observer.next(Math.random())
	});

	constructor() {
		// Were subscribing to the SAME Observable twice and we should get different numbers in each because its cold
		// this._randomNumber$.pipe(
		// 	map((value: number) => `Your random number: ${value}`)
		// ).subscribe((randomNumber: string) => {
		// 	// alert(randomNumber)
		// 	console.log(randomNumber)
		// }).unsubscribe();

		this._randomNumber$.subscribe((value: number) => {
			console.log(value)
		});
		this._randomNumber$.subscribe((value: number) => {
			console.log(value)
		});
	}
}