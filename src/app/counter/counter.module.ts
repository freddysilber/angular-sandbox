import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'

import { ClickerComponent } from './clicker/clicker.component'
import { AppComponent } from '../app.component'
import { CountComponent } from './count/count.component'

@NgModule({
	declarations: [
		ClickerComponent,
		CountComponent
	],
	imports: [
		BrowserModule,
		FormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class CounterModule { }