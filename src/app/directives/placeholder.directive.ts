import { Directive, ViewContainerRef } from '@angular/core'

@Directive({
	selector: '[componentPlaceholder]'
})
export class ComponentPlaceholderDirective {
	constructor(public viewContainerRef: ViewContainerRef) { }
}