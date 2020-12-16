import { Component, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-clicker',
  templateUrl: './clicker.component.html',
  styleUrls: ['./clicker.component.scss']
})
export class ClickerComponent {
  @Output() clickerCount = new EventEmitter<{ count: number }>()
  likes = 0

  constructor() { }

  upvote() {
    this.likes++
    this.emitLikesEvent()
  }

  downvote() {
    this.likes--
    this.emitLikesEvent()
  }

  reset() {
    this.likes = 0
    this.emitLikesEvent()
  }

  emitLikesEvent = () => this.clickerCount.emit({ count: this.likes })
}