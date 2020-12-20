import { Component } from '@angular/core'

import { RiskMatrixService } from '../../providers'
import { Ticket } from '../../providers'

@Component({
	selector: 'risk-table',
	templateUrl: './risk-table.component.html',
	styleUrls: ['./risk-table.component.scss']
})
export class RiskTableComponent {
	private data: Ticket[]

	constructor(private _riskMatrixService: RiskMatrixService) {
		this.data = _riskMatrixService.data
		console.log(this.data)
	}
}