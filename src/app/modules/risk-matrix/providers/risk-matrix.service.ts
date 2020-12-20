import { Injectable } from '@angular/core'

export interface Ticket {
	name: string,
	impact: number,
	probability: number
}

@Injectable({
	providedIn: 'root'
})
export class RiskMatrixService {

	protected _RISK_MATRIX_DIMENSIONS: number = 5
	protected _sampleData: Ticket[] = [
		{ name: 'OneOne', impact: 1, probability: 1 },
		{ name: 'Name', impact: 1, probability: 4 },
		{ name: 'First', impact: 1, probability: 4 },
		{ name: 'Second', impact: 2, probability: 5 },
		{ name: 'Third', impact: 5, probability: 3 },
		{ name: 'Fourth', impact: 4, probability: 1 },
		{ name: 'Center', impact: 3, probability: 3 }
	]

	get matrixDimensions(): number {
		return this._RISK_MATRIX_DIMENSIONS
	}

	get data(): Ticket[] {
		return this._sampleData
	}
}