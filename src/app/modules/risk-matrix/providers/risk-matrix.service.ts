import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

import { Ticket, Matrix } from '../models'

const DATA: Ticket[] = [
	{ name: 'OneOne', impact: 1, probability: 1 },
	{ name: 'TwoTwo', impact: 2, probability: 2 },
	{ name: 'Name', impact: 1, probability: 4 },
	{ name: 'First', impact: 1, probability: 4 },
	{ name: 'First', impact: 1, probability: 5 },
	{ name: 'ThreeFour', impact: 3, probability: 4 },
	{ name: 'ThreeFour', impact: 3, probability: 4 },
	{ name: 'ThreeFour', impact: 3, probability: 4 },
	{ name: 'ThreeFour', impact: 3, probability: 4 },
	{ name: 'Second', impact: 2, probability: 5 },
	{ name: 'Third', impact: 5, probability: 3 },
	{ name: 'Fourth', impact: 4, probability: 1 },
	{ name: 'FourFout', impact: 4, probability: 4 },
	{ name: 'Center', impact: 3, probability: 3 },
	{ name: 'FiveFive', impact: 5, probability: 5 },
	{ name: 'FiveFive', impact: 5, probability: 5 },
]

@Injectable({
	providedIn: 'root'
})
export class RiskMatrixService {
	private _matrixDimensions: number = 5
	private _sampleData: Ticket[] = DATA
	canSelectMultiple: boolean = false
	selectedEmitter: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
	selectedImpacts: Set<number> = new Set()
	selectedProbabilities: Set<number> = new Set()

	get matrixDimensions(): number {
		return this._matrixDimensions
	}

	get data(): Ticket[] {
		return this._sampleData
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
		this._sampleData = DATA.filter((ticket: Ticket) => {
			return ticket.impact === impact && ticket.probability === probability
		})
	}

	filterRiskTableMultiSelect(): void {
		if (this.selectedImpacts.size === 0 && this.selectedProbabilities.size === 0) {
			this.resetData()
		} else {
			this._sampleData = DATA.filter((ticket: Ticket) => {
				return this.selectedImpacts.has(ticket.impact) && this.selectedProbabilities.has(ticket.probability)
			})
		}
	}

	resetData(): void {
		this._sampleData = DATA
	}

	findProbability(rowIndex: number): number {
		return this._rangeOfNumbers(1, this._matrixDimensions).reverse().indexOf(rowIndex + 1) + 1
	}

	private _rangeOfNumbers(start: number, end: number): number[] {
		return start === end ? [start] : [...this._rangeOfNumbers(start, end - 1), end]
	}
}