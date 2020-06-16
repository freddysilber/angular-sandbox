import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-clicker',
  templateUrl: './clicker.component.html',
  styleUrls: ['./clicker.component.css']
})
export class ClickerComponent implements OnInit {
  // @Input('clickerCount') count: number = 0
  // @Input('clickerCount') clickerCount: number = 0
  count = 0
  @Output() clickerCount = new EventEmitter<{ count: number }>()

  constructor() { }

  ngOnInit(): void {
  }

  upvote = () => {
    this.count++
    // this.clickerCount++
    console.log('click')
    this.clickerCount.emit({
      count: this.count
      // count: this.count++
    })
  }

  downvote = () => {
    this.count--
    this.clickerCount.emit({
      count: this.count
      // count: this.count--
    })
  }
}