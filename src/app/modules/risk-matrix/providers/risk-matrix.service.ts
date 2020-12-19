import { Injectable } from '@angular/core'

@Injectable({
	providedIn: 'root'
})
export class RiskMatrixService {

	private _RISK_MATRIX_DIMENSIONS: number = 5

	get matrixDimension() {
		return this._RISK_MATRIX_DIMENSIONS
	}

}