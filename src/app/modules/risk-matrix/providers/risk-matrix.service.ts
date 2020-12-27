import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

import { Ticket, Matrix } from '../models'
import { DATA } from '../providers/risk-matrix-data'

@Injectable({
	providedIn: 'root'
})
export class RiskMatrixService {
	private _matrixDimensions: number = 5
	private _data: Ticket[] = DATA
	canSelectMultiple: boolean = false
	selectedEmitter: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
	selectedImpacts: Set<number> = new Set()
	selectedProbabilities: Set<number> = new Set()

	get matrixDimensions(): number {
		return this._matrixDimensions
	}

	get data(): Ticket[] {
		return this._data
	}

	buildMatrix(): Matrix {
		const matrix: Matrix = [...Array(this._matrixDimensions)].map(() => Array(this._matrixDimensions).fill(0))
		this.data.forEach((ticket: Ticket) => {
			const { impact, probability } = ticket
			matrix[this._matrixDimensions - probability][impact - 1] = matrix[this._matrixDimensions - probability][impact - 1] + 1
		})
		return matrix
	}

	filterRiskTable(impact: number, probability: number): void {
		this._data = DATA.filter((ticket: Ticket) => {
			return ticket.impact === impact && ticket.probability === probability
		})
	}

	filterRiskTableMultiSelect(): void {
		if (this.selectedImpacts.size === 0 && this.selectedProbabilities.size === 0) {
			this.resetData()
		} else {
			this._data = DATA.filter((ticket: Ticket) => {
				return this.selectedImpacts.has(ticket.impact) && this.selectedProbabilities.has(ticket.probability)
			})
		}
	}

	resetData(): void {
		this._data = DATA
	}

	findProbability(rowIndex: number): number {
		return this._rangeOfNumbers(1, this._matrixDimensions).reverse().indexOf(rowIndex + 1) + 1
	}

	private _rangeOfNumbers(start: number, end: number): number[] {
		return start === end ? [start] : [...this._rangeOfNumbers(start, end - 1), end]
	}
}