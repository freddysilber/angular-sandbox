import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

import { Ticket, Matrix } from '../models'

const RISK_MATRIX_DIMENSIONS: number = 5
const DATA: Ticket[] = [
	{ name: 'OneOne', impact: 1, probability: 1 },
	{ name: 'Name', impact: 1, probability: 4 },
	{ name: 'First', impact: 1, probability: 4 },
	{ name: 'Second', impact: 2, probability: 5 },
	{ name: 'Third', impact: 5, probability: 3 },
	{ name: 'Fourth', impact: 4, probability: 1 },
	{ name: 'Center', impact: 3, probability: 3 },
	{ name: 'FiveFive', impact: 5, probability: 5 },
]

@Injectable({
	providedIn: 'root'
})
export class RiskMatrixService {
	private _RISK_MATRIX_DIMENSIONS: number = RISK_MATRIX_DIMENSIONS
	private _sampleData: Ticket[] = DATA
	canSelectMultiple: boolean = false
	selectedEmitter: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

	get matrixDimensions(): number {
		return this._RISK_MATRIX_DIMENSIONS
	}

	get data(): Ticket[] {
		return this._sampleData
	}

	newMatrix(dimensions: number): Matrix {
		return [...Array(dimensions)].map(() => Array(dimensions).fill(0))
	}

	populateMatrixData(dimensions: number, matrix: Matrix, tickets: Ticket[]): Matrix {
		tickets.forEach((ticket: Ticket) => {
			const { impact, probability } = ticket
			matrix[dimensions - probability][impact - 1] = matrix[dimensions - probability][impact - 1] + 1
		})
		return matrix
	}

	filterRiskTable(impact: number, probability: number): void {
		console.log('FILTER TABLE!', impact, probability)
	}

	// private getProbabilityValue(value: number) {
	// 	return this.rangeOfNumbers(1, MATRIX_DIMENSIONS).reverse().indexOf(+formatId(tar.parentElement.id) + 1) + 1 // probability value
	// }

	// private rangeOfNumbers(start, end) {
	// 	start === end ? [start] : [...this.rangeOfNumbers(start, end - 1), end]
	// }
}