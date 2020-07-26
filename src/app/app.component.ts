import { Component, OnInit, OnDestroy } from '@angular/core'
import { LoggingService } from './loggingService.service'
import { UserService } from './user.service'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoggingService] // This could be injected in app.module.ts (this would be the very highest in the chain were we could inject this)
})
export class AppComponent implements OnInit, OnDestroy {
  name = 'Freddy'
  username: string = '' // Test username
  showSecret: boolean = false // Toggle show 'super secret' message
  log: Date[] = [] // Collection of timestamps
  oddNumbers: number[] = [] // Collection of odd numbers
  evenNumbers: number[] = [] // Collection of even numbers
  switchValue: number = 0 // look at template for ngSwitch useage. This is the value to switch on in the template
  userActivated: boolean = false // This value comes from a 'Subject' in the user.service.ts
  private activatedSub: Subscription

  constructor(private loggingService: LoggingService, private userService: UserService) { }

  ngOnInit() {
    this.activatedSub = this.userService.activatedEmitter.subscribe(didActivate => this.userActivated = didActivate)
  }

  ngOnDestroy() {
    this.activatedSub.unsubscribe()
  }

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
    const summm: number = this.loggingService.getSum(this.loggingService.getSum(1, 2), this.loggingService.getSum(3, 4))
    console.log(sum, summ, summm)
  }
}