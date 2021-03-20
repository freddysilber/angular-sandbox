import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
	selector: 'sizer',
	templateUrl: 'sizer.component.html'
})
export class SizerComponent {

	@Input() size: number | string;
	@Output() sizeChange = new EventEmitter<number>();

	dec() {
		this.resize(-1);
	}

	inc() {
		this.resize(+1);
	}
	// https://angular.io/guide/two-way-binding
	resize(delta: number) {
		this.size = Math.min(40, Math.max(8, +this.size + delta));
		this.sizeChange.emit(this.size);
	}
}