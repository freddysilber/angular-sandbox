import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  @Input() clickerCount: number = 0
  count: number = 0

  constructor() { }

  ngOnInit(): void {
  }

  handleCount(event) {
    this.count = event.count
  }

}
