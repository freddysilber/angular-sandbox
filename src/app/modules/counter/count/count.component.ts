import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.scss']
})
export class CountComponent {
  @Input() currentCount: number = 0

  constructor() { }
}
