import { Component } from '@angular/core'

@Component({
	selector: 'interval-game',
	templateUrl: './interval-game.component.html'
})
export class IntervalGameComponent {
	oddNumbers: number[] = [] // Collection of odd numbers
	evenNumbers: number[] = [] // Collection of even numbers

	onIntervalFired(firedNumber: number) {
		firedNumber % 2 === 0 ? this.evenNumbers.push(firedNumber) : this.oddNumbers.push(firedNumber)
	}
}