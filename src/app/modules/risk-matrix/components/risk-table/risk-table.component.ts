import { Component } from '@angular/core'

import { RiskMatrixService } from '../../providers'

@Component({
	selector: 'risk-table',
	templateUrl: './risk-table.component.html',
	styleUrls: ['./risk-table.component.scss']
})
export class RiskTableComponent {
	public _columnHeaders: string[] = ['name', 'impact', 'probability']

	constructor(public _riskMatrixService: RiskMatrixService) {
	}
}