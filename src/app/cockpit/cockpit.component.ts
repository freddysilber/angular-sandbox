import { Component, EventEmitter, Output } from '@angular/core'

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.scss']
})
export class CockpitComponent {
  @Output() worldCreated = new EventEmitter<{ worldSize: number, worldName: string }>()

  constructor() { }

  createWorld() {
    console.log('cockpit world created')
    this.worldCreated.emit({
      worldSize: 9,
      worldName: 'Fredsontopia'
    })
  }
}
