import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

/**
 * NOTES: 
 * 
 * As we just saw the hot Observable is able to share data between multiple subscribers. We call this behaviour “multicasting”.
 */
@Injectable({
	providedIn: 'root'
})
export class HotObservables {

	private readonly _rando: number = Math.random();

	private _randomNumber$: Observable<number> = new Observable((observer: Subscriber<number>) => {
		observer.next(this._rando)
	});

	constructor() {
		// This is Hot because the data is produced OUTSIDE the observable
		// Subscribing to the same Observable twice and we should get the same value because its hot
		this._randomNumber$.subscribe((value: number) => {
			console.log(value);
		});
		this._randomNumber$.subscribe((value: number) => {
			console.log(value);
		});
	}
}