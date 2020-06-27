import { Component } from '@angular/core'
import { LoggingService } from './loggingService.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoggingService]
})
export class AppComponent {
  name = 'Freddy'
  username: string = '' // Test username
  showSecret: boolean = false // Toggle show 'super secret' message
  log: Date[] = [] // Collection of timestamps
  oddNumbers: number[] = [] // Collection of odd numbers
  evenNumbers: number[] = [] // Collection of even numbers
  switchValue: number = 0 // look at template for ngSwitch useage. This is the value to switch on in the template

  constructor(private loggingService: LoggingService) { }

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

  runSwitch() {
    this.switchValue++
    this.loggingService.logAString(`Switch is running! ${this.switchValue}`)
    const sum: number = this.loggingService.getSum(2, 9)
    const summ: number = this.loggingService.getSum(sum, 2)
    console.log(sum, summ)
  }
}