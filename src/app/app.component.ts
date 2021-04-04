import { Component, OnInit, OnDestroy, EventEmitter, ViewChild, ComponentFactoryResolver, Inject } from '@angular/core'
import { Observable, Subscription } from 'rxjs'

import { SuccessAlertComponent } from './components/alerts/success-alert/success-alert.component'
import { WarningAlertComponent } from './components/alerts/warning-alert/warning-alert.component'

import { MESSAGING_TOKEN, MessagingService } from './services/messaging.service'
import { LoggingService } from './services/loggingService.service'
import { UserService } from './services/user.service'
import { CatFactsService } from './services/cat-facts.service'

import { ComponentPlaceholderDirective } from './directives'

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	providers: [LoggingService] // This could be injected in app.module.ts (this would be the very highest in the chain were we could inject this)
})
export class AppComponent implements OnInit, OnDestroy {
	@ViewChild(ComponentPlaceholderDirective, { static: true }) alertHost: ComponentPlaceholderDirective

	public name: string = 'Freddy'
	public username: string = '' // Test username
	public showSecret: boolean = false // Toggle show 'super secret' message
	public log: Date[] = [] // Collection of timestamps
	public switchValue: number = 0 // look at template for ngSwitch useage. This is the value to switch on in the template
	public userActivated: boolean = false // This value comes from a 'Subject' in the user.service.ts
	public welcomeMessage: string

	private _subscriptions: Subscription[] = []

	constructor(
		@Inject(MESSAGING_TOKEN) private messagingToken: MessagingService,
		private loggingService: LoggingService,
		private userService: UserService,
		private componentFactoryResolver: ComponentFactoryResolver
	) {
		console.log(this.messagingToken)
		console.log(this.messagingToken.messageName)
		// console.log(this.messagingToken.sendMessage('You have a new message!'))
		this.welcomeMessage = this.messagingToken.sendMessage('Welcome to Angular Sandbox');
	}

	ngOnInit(): void {
		this._subscriptions.push(
			this.userService.activatedEmitter.subscribe((didActivate: boolean) => {
				this.userActivated = didActivate
			})
		)
	}

	ngOnDestroy(): void {
		this._subscriptions.forEach((sub: Subscription) => sub.unsubscribe())
	}

	onToggleDisplay(): void {
		this.showSecret = !this.showSecret
		this.log.push(new Date())
	}

	onWorldCreated(event: EventEmitter<any>): void {
		console.log('You just opened up a whole other world!', event)
	}

	runSwitch(): void {
		this.switchValue++
		this.loggingService.logAString(`Switch is running! ${this.switchValue}`)
		const sum: number = this.loggingService.getSum(2, 9)
		const summ: number = this.loggingService.getSum(sum, 2)
		const summm: number = this.loggingService.getSum(this.loggingService.getSum(1, 2), this.loggingService.getSum(3, 4))
		console.log(sum, summ, summm)
	}

	public createComponent() {
		const successComponent = this.componentFactoryResolver.resolveComponentFactory(SuccessAlertComponent)
		console.log(successComponent)
		const warningComponent = this.componentFactoryResolver.resolveComponentFactory(WarningAlertComponent)

		const hostViewContainerRef = this.alertHost.viewContainerRef
		hostViewContainerRef.clear()

		const successComponentRef = hostViewContainerRef.createComponent(successComponent)
		console.log(successComponentRef)
		const warningComponentRef = hostViewContainerRef.createComponent(warningComponent)
		console.log(warningComponentRef)
	}
}