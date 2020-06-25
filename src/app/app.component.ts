import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Freddy'
  username: string = ''
  showSecret: boolean = false
  log = []
  oddNumbers: number[] = []
  evenNumbers: number[] = []
  switchValue: number = 5 // look at template for ngSwitch useage

  onToggleDisplay() {
    this.showSecret = !this.showSecret
    this.log.push(new Date())
  }

  onWorldCreated(event) {
    console.log('You just opened up a whole other world!', event)
  }

  onIntervalFired(firedNumber: number) {
    firedNumber % 2 === 0 ? this.evenNumbers.push(firedNumber) : this.oddNumbers.push(firedNumber)
  }
}
