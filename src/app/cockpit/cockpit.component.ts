import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() worldCreated = new EventEmitter<{ worldSize: number, worldName: string }>()

  constructor() { }

  ngOnInit(): void {
  }

  createWorld() {
    console.log('cockpit world created')
    this.worldCreated.emit({
      worldSize: 9,
      worldName: 'Fredsontopia'
    })
  }
}
