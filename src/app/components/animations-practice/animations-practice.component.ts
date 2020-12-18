import { Component } from '@angular/core'
import { trigger, state, style, transition, animate } from '@angular/animations'

@Component({
  selector: 'app-animations-practice',
  templateUrl: './animations-practice.component.html',
  styleUrls: ['./animations-practice.component.scss'],
  animations: [
    trigger('divState', [
      state('start', style({
        backgroundColor: 'red'
      })),
      state('stop', style({
        backgroundColor: 'blue'
      })),
      transition('start <=> stop', animate(500))
    ])
  ]
})
export class AnimationsPracticeComponent {
  animationState: string = 'start'

  constructor() { }

  onAnimate() {
    this.animationState === 'start' ? this.animationState = 'stop' : this.animationState = 'start'
  }
}