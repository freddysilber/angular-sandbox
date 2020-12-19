import { Component } from '@angular/core'

import { RiskMatrixService } from '../../providers/risk-matrix.service'

@Component({
	selector: 'app-risk-matrix',
	templateUrl: './risk-matrix.component.html',
	styleUrls: ['./risk-matrix.component.scss']
})
export class RiskMatrixComponent {

	riskMatrix: number[][]

	constructor(private _riskMatrixService: RiskMatrixService) {
		this.riskMatrix = [...Array(_riskMatrixService.matrixDimensions)].map(() => Array(_riskMatrixService.matrixDimensions).fill(0))
		console.log(this.riskMatrix)
		console.log(this._riskMatrixService.data)
		this._riskMatrixService.data.forEach(record => {
			console.log(record)
			this.riskMatrix[_riskMatrixService.matrixDimensions - record.probability][record.impact - 1] = this.riskMatrix[_riskMatrixService.matrixDimensions - record.probability][record.impact - 1] + 1
			// riskMatrix[MATRIX_DIMENSIONS - probability][impact - 1] = riskMatrix[MATRIX_DIMENSIONS - probability][impact - 1] + 1
		})
	}
}