import { Component, Input, OnDestroy, OnInit } from '@angular/core'
import { Subscription } from 'rxjs'

import { RiskMatrixService } from '../../providers'

@Component({
	selector: 'risk-cell',
	templateUrl: './risk-cell.component.html',
	styleUrls: ['./risk-cell.component.scss']
})
export class RiskCellComponent implements OnInit, OnDestroy {
	@Input('value') value: number
	@Input('row') row: number
	@Input('column') column: number

	isSelected: boolean = false
	private _selectedEmitterSub: Subscription

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

	ngOnInit(): void {
		this._selectedEmitterSub = this._riskMatrixService.selectedEmitter.subscribe((value: boolean) => {
			if (this.isSelected) {
				this.isSelected = value
			}
		})
	}

	ngOnDestroy(): void {
		this._selectedEmitterSub.unsubscribe()
	}

	selectCell(): void {
		if (this._riskMatrixService.canSelectMultiple) {
			this.isSelected = !this.isSelected
		} else {
			this._riskMatrixService.selectedEmitter.next(false)
			this.isSelected = true
		}
		this._riskMatrixService.filterRiskTable(this.column, this.row)
	}
}