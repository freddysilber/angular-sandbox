import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-clicker',
  templateUrl: './clicker.component.html',
  styleUrls: ['./clicker.component.css']
})
export class ClickerComponent implements OnInit {
  @Output() clickerCount = new EventEmitter<{ count: number }>()
  likes = 0

  constructor() { }

  ngOnInit(): void {
  }

  upvote = () => {
    this.likes++
    this.emitLikesEvent()
  }

  downvote = () => {
    this.likes--
    this.emitLikesEvent()
  }

  emitLikesEvent = () => this.clickerCount.emit({ count: this.likes })
}