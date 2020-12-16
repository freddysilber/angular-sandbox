import { Component } from '@angular/core'

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  count: number = 0

  constructor() { }

  handleCount(event) {
    this.count = event.count
  }

}
