import { Component } from '@angular/core'
// import { trigger, state, style, transition, animate } from '@angular/animations'

@Component({
  selector: 'app-something-new',
  templateUrl: './something-new.component.html',
  styleUrls: ['./something-new.component.css'],
  // animations: [
  //   trigger('divState', [
  //     state('start', style({
  //       backgroundColor: 'red'
  //     })),
  //     state('stop', style({
  //       backgroundColor: 'blue'
  //     })),
  //     transition('start <=> stop', animate(500))
  //   ])
  // ]
})
export class SomethingNewComponent {
  animationState: string = 'start'

  constructor() { }

  onAnimate() {
    this.animationState === 'start' ? this.animationState = 'stop' : this.animationState = 'start'
  }
}