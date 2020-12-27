import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

import { Ticket, Matrix } from '../models'
import { DATA } from '../providers/risk-matrix-data'

interface Filters {
	impact: number[],
	probability: number[]
}
@Injectable({
	providedIn: 'root'
})
export class RiskMatrixService {
	private _matrixDimensions: number = 5
	private _data: Ticket[] = DATA
	private _filters: Filters = {
		impact: [],
		probability: []
	}
	canSelectMultiple: boolean = false
	selectedEmitter: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

	get matrixDimensions(): number {
		return this._matrixDimensions
	}

	get data(): Ticket[] {
		return this._data
	}

	handleFilterState(impact: number, probability: number, isAdding: boolean) {
		if (isAdding) {
			this._filters.impact.push(impact)
			this._filters.probability.push(probability)
		} else {
			this._filters.impact.splice(this._filters.impact.indexOf(impact), 1)
			this._filters.probability.splice(this._filters.probability.indexOf(probability), 1)
		}
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
		if (this._filters.impact.length === 0 && this._filters.probability.length === 0) {
			this.resetData()
		} else {
			this._data = DATA.filter((ticket: Ticket) => {
				return this._filters.impact.includes(ticket.impact) && this._filters.probability.includes(ticket.probability)
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