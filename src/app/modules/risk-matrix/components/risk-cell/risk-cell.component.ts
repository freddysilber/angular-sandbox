import { Component, Input, Output } from '@angular/core'

@Component({
	selector: 'risk-cell',
	templateUrl: './risk-cell.component.html',
	styleUrls: ['./risk-cell.component.scss']
})
export class RiskCellComponent {
	@Input('value') value: number
	@Input('row') row: number
	@Input('column') column: number

	get isGreen(): boolean {
		if (this.column === 0 && this.row >= 2 && this.row <= 4
			|| this.row === 4 && this.column <= 2
			|| this.row === 3 && this.column === 1) {
			return true
		}
		return false
	}

	get isRed(): boolean {
		if (this.row === 0 && this.column >= 2 && this.column <= 4
			|| this.row === 1 && this.column >= 3 && this.column <= 4
			|| this.row === 2 && this.column === 4) {
			return true
		}
		return false
	}

	selectCell(event): void {
		let tar = event.target
		while (!tar.classList.contains('cell')) {
			tar = tar.parentElement
		}
		tar.style.border = '1px solid black'
	}
}