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

	get impact(): number {
		return this.column + 1
	}

	get probability(): number {
		return this._riskMatrixService.findProbability(this.row)
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
		if (!this.value) {
			return
		}

		if (this._riskMatrixService.canSelectMultiple) {
			this.isSelected = !this.isSelected
		} else {
			if (!this.isSelected) {
				this._riskMatrixService.selectedEmitter.next(false)
				this.isSelected = true
			} else {
				this.isSelected = !this.isSelected
			}
		}

		if (this.isSelected && !this._riskMatrixService.canSelectMultiple) {
			this._riskMatrixService.filterRiskTable(this.impact, this.probability)
		} else if (this.isSelected && this._riskMatrixService.canSelectMultiple) {
			this._riskMatrixService.selectedImpacts.add(this.impact)
			this._riskMatrixService.selectedProbabilities.add(this.probability)
			this._riskMatrixService.filterRiskTableMultiSelect()
		}

		if (!this.isSelected && !this._riskMatrixService.canSelectMultiple) {
			this._riskMatrixService.resetData()
		} else if (!this.isSelected && this._riskMatrixService.canSelectMultiple) {
			this._riskMatrixService.selectedImpacts.delete(this.impact)
			this._riskMatrixService.selectedProbabilities.delete(this.probability)
			this._riskMatrixService.filterRiskTableMultiSelect()
		}
	}
}