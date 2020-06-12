import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-clicker',
  templateUrl: './clicker.component.html',
  styleUrls: ['./clicker.component.css']
})
export class ClickerComponent implements OnInit {
  // @Input('clickerCount') count: number = 0
  @Input('clickerCount') clickerCount: number = 0

  constructor() { }

  ngOnInit(): void {
  }

  upvote = () => [
    this.clickerCount++
  ]

  downvote = () => {
    this.clickerCount--
  }
}