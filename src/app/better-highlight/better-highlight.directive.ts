import { Directive, Renderer2, OnInit, ElementRef, HostListener } from '@angular/core'

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // On render, set background to red
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'red')
  }
  // onhover, change background color
  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', '#666')
  }
  // onmouse leave, change background again
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'lightgreen')
  }
}