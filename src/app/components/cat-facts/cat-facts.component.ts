import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CatFactsService } from 'src/app/services/cat-facts.service';

@Component({
	selector: 'cat-facts',
	templateUrl: 'cat-facts.component.html'
})
export class CatFactsComponent {

	public catFacts: Observable<any[]> = this._catFactsService.getCatFacts()

	constructor(
		private _catFactsService: CatFactsService
	) { }
}