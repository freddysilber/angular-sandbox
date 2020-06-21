import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding } from '@angular/core'

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @HostBinding('style.backgroundColor') backgroundColor: string = 'black'

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // On render, set background to red
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'red')
    this.backgroundColor = 'red'
  }
  // onhover, change background color
  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', '#666')
    this.backgroundColor = '#666'
  }
  // onmouse leave, change background again
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'lightgreen')
    this.backgroundColor = 'lightgreen'
  }
}