import { Component } from '@angular/core'

import { RiskMatrixService } from '../../providers'
import { Ticket } from '../../providers'

@Component({
	selector: 'risk-table',
	templateUrl: './risk-table.component.html',
	styleUrls: ['./risk-table.component.scss']
})
export class RiskTableComponent {
	public _columnHeaders: string[] = ['name', 'impact', 'probability']
	// private _data: Ticket[]

	constructor(public _riskMatrixService: RiskMatrixService) {
		// this._data = _riskMatrixService.data
		// console.log(this._data)
	}
}