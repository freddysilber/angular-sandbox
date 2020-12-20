import { Component } from '@angular/core'

import { Ticket, RiskMatrixService } from '../../providers'

@Component({
	selector: 'app-risk-matrix',
	templateUrl: './risk-matrix.component.html',
	styleUrls: ['./risk-matrix.component.scss']
})
export class RiskMatrixComponent {

	riskMatrix: number[][]

	constructor(private _riskMatrixService: RiskMatrixService) {
		this.riskMatrix = [...Array(_riskMatrixService.matrixDimensions)].map(() => Array(_riskMatrixService.matrixDimensions).fill(0))
		this._riskMatrixService.data.forEach((record: Ticket) => {
			const { impact, probability } = record
			this.riskMatrix[_riskMatrixService.matrixDimensions - probability][impact - 1] = this.riskMatrix[_riskMatrixService.matrixDimensions - probability][impact - 1] + 1
		})
	}
}