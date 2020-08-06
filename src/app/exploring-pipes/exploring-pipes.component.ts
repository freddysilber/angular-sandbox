import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exploring-pipes',
  templateUrl: './exploring-pipes.component.html',
  styleUrls: ['./exploring-pipes.component.css']
})
export class ExploringPipesComponent implements OnInit {
  myName: string = 'Freddy Silber'
  todaysDate = new Date()

  constructor() { }

  ngOnInit(): void {
  }

}
