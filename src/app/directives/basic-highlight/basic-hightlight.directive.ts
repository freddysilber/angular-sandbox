import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
	selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {

	@HostListener('mouseenter') onMouseEnter() {
		this.elementRef.nativeElement.style.color = 'red';
	}

	@HostListener('mouseleave') onMouseLeave() {
		this.elementRef.nativeElement.style.color = 'darkgray';
	}

	constructor(private elementRef: ElementRef) { }

	ngOnInit() {
		this.elementRef.nativeElement.style.backgroundColor = 'lightgreen';
		this.elementRef.nativeElement.style.color = 'darkgray';
		this.elementRef.nativeElement.style.border = '1px solid black';
		this.elementRef.nativeElement.style.padding = '1rem';

	}
}