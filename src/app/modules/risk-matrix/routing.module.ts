import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RiskMatrixComponent } from './components';

const ROUTES: Routes = [
	{
		path: '',
		component: RiskMatrixComponent
	}
]

@NgModule({
	imports: [
		RouterModule.forChild(ROUTES)
	],
	exports: [
		RouterModule
	]
})
export class RiskMatrixRoutingModule { }