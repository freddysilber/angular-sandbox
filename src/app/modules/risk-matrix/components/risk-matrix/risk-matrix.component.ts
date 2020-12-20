import { Component } from '@angular/core'

import { RiskMatrixService } from '../../providers'

@Component({
	selector: 'app-risk-matrix',
	templateUrl: './risk-matrix.component.html',
	styleUrls: ['./risk-matrix.component.scss']
})
export class RiskMatrixComponent {

	riskMatrix: number[][] = this._riskMatrixService.newMatrix(this._riskMatrixService.matrixDimensions)

	constructor(private _riskMatrixService: RiskMatrixService) {
		this.riskMatrix = this._riskMatrixService.populateMatrixData(this._riskMatrixService.matrixDimensions, this.riskMatrix, this._riskMatrixService.data)
	}

	handleToggle(event): void {
		console.log(event.target.checked)
	}
}