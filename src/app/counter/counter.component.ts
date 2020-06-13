import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  // count = 3
  // clickerCount = 10
  @Input() clickerCount: number = 0

  constructor() { }

  ngOnInit(): void {
  }

}
