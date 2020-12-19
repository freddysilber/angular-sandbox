import { Component, Input } from '@angular/core'

@Component({
	selector: 'risk-cell',
	templateUrl: './risk-cell.component.html',
	styleUrls: ['./risk-cell.component.scss']
})
export class RiskCellComponent {
	@Input('value') value
	@Input('row') row
	@Input('column') column

	get isGreen() {
		console.log(this.row, this.column)
		if (this.column === 0 && this.row >= 2 && this.row <= 4 || this.row === 4 && this.column <= 2 || this.row === 3 && this.column === 1) {
			return true
		}
	}
}