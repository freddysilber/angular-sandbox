import { Component } from '@angular/core'
import { RiskMatrixService } from '../../providers'

@Component({
	selector: 'risk-table',
	templateUrl: './risk-table.component.html',
	styleUrls: ['./risk-table.component.scss']
})
export class RiskTableComponent {
	constructor(private _riskMatrixService: RiskMatrixService) {
		console.log(_riskMatrixService)
	}
}