// Angular
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http';
// Components
import { AppComponent } from './app.component'
import { ServerComponent } from './components/server/server.component'
import { ServersComponent } from './components/servers/servers.component'
import { WarningAlertComponent } from './components/alerts/warning-alert/warning-alert.component'
import { SuccessAlertComponent } from './components/alerts/success-alert/success-alert.component'
import { CockpitComponent } from './components/cockpit/cockpit.component'
import { DashboardComponent } from './components/dashboard/dashboard.component'
import { UserComponent } from './components/user/user.component'
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component'
import { ExploringPipesComponent } from './components/exploring-pipes/exploring-pipes.component'
import { AnimationsPracticeComponent } from './components/animations-practice/animations-practice.component'
import { ObservablePracticeComponent } from './components/observable-practice/observable-practice.component';
import { NavigationComponent } from './components/navigation/navigation.component'
import {
	CatFactsComponent,
	ScssExploreComponent
} from './components';
// Services
import { MESSAGING_TOKEN, MessagingService } from './services/messaging.service'
// Pipes
import { ShortenPipe } from './pipes/shorten.pipe'
import { FilterPipe } from './pipes/filter.pipe'
// Directives
import {
	BasicHighlightDirective,
	BetterHighlightDirective,
	UnlessDirective,
	ComponentPlaceholderDirective
} from './directives'
// Modules
import { AppRoutingModule } from './app-routing.module'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { NglModule } from 'ng-lightning'

const COMPONENTS = [
	CatFactsComponent,
	ScssExploreComponent
]

@NgModule({
	declarations: [
		AppComponent,
		ServerComponent,
		ServersComponent,
		WarningAlertComponent,
		SuccessAlertComponent,
		CockpitComponent,
		BasicHighlightDirective,
		BetterHighlightDirective,
		UnlessDirective,
		ComponentPlaceholderDirective,
		DashboardComponent,
		UserComponent,
		ReactiveFormComponent,
		ExploringPipesComponent,
		AnimationsPracticeComponent,
		COMPONENTS,
		ShortenPipe,
		FilterPipe,
		ObservablePracticeComponent,
		NavigationComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		AppRoutingModule,
		HttpClientModule,
		NgbModule,
		ReactiveFormsModule,
		NglModule
	],
	providers: [
		{
			provide: MESSAGING_TOKEN,
			useClass: MessagingService
			// useValue: 'Hello World - Messaging Token value'
			// useValue: messaging
		}
	],
	bootstrap: [AppComponent]
})
export class AppModule { }