import { Component } from '@angular/core'

@Component({
  selector: 'app-exploring-pipes',
  templateUrl: './exploring-pipes.component.html',
  styleUrls: ['./exploring-pipes.component.scss']
})
export class ExploringPipesComponent {
  myName: string = 'Freddy Silber'
  greeting: string = 'Hello, My name is Freddy Silber and this is a really long gretting!'
  todaysDate: Date = new Date()
  filteredStatus: string = ''
  reference: string = 'https://angular.io/api?query=pipe'

  constructor() { }
}