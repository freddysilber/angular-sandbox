import {
  Directive,
  Renderer2,
  OnInit,
  ElementRef,
  HostListener,
  HostBinding,
  Input
} from '@angular/core'

@Directive({
  selector: '[appBetterHighlight]' // name of directive to be placed on the element
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'dodgerblue' // default colo
  @Input('appBetterHighlight') highlightColor: string = 'red' // hightlight color / color to change
  @HostBinding('style.backgroundColor') backgroundColor: string // what the directive does

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
  // On init (on render) set target element to the default color ('dodgerblue')
  ngOnInit() {
    this.backgroundColor = this.defaultColor
  }
  // onhover, change background color
  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.backgroundColor = this.highlightColor
  }
  // onmouse leave, change background again
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundColor = this.defaultColor
  }
}