import { Component, Input } from '@angular/core'

import { RiskMatrixService } from '../../providers'

@Component({
	selector: 'risk-cell',
	templateUrl: './risk-cell.component.html',
	styleUrls: ['./risk-cell.component.scss']
})
export class RiskCellComponent {
	@Input('value') value: number
	@Input('row') row: number
	@Input('column') column: number

	isSelected: boolean = false

	constructor(private _riskMatrixService: RiskMatrixService) { }

	get isGreen(): boolean {
		return this.column === 0 && this.row >= 2 && this.row <= 4 || this.row === 4 && this.column <= 2 || this.row === 3 && this.column === 1
	}

	get isRed(): boolean {
		return this.row === 0 && this.column >= 2 && this.column <= 4 || this.row === 1 && this.column >= 3 && this.column <= 4 || this.row === 2 && this.column === 4
	}

	get selected(): boolean {
		return this.isSelected
	}

	selectCell(): void {
		this.isSelected = !this.isSelected
		this._riskMatrixService.filterRiskTable(this.column, this.row)
	}
}