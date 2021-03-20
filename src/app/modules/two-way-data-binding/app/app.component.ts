import { Component } from '@angular/core'

@Component({
	selector: 'app',
	templateUrl: 'app.component.html'
})
export class AppComponent {
	public readonly title: string = 'SIZER'
	public fontSizePx: number = 16;
}