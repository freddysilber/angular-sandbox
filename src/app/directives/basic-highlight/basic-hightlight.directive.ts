import { Directive, ElementRef, OnInit } from '@angular/core'

@Directive({
	selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {
	constructor(private elementRef: ElementRef) { }

	ngOnInit() {
		this.elementRef.nativeElement.style.backgroundColor = 'lightgreen'
		this.elementRef.nativeElement.style.color = 'red'
		this.elementRef.nativeElement.style.border = '1px solid black'
		this.elementRef.nativeElement.style.padding = '1rem'
	}
}