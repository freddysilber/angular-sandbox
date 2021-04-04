// Angular
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http';
// Components
import { AppComponent } from './app.component'
import {
	CatFactsComponent,
	ScssExploreComponent,
	ServerComponent,
	ServersComponent,
	WarningAlertComponent,
	SuccessAlertComponent,
	CockpitComponent,
	DashboardComponent,
	UserComponent,
	ReactiveFormComponent,
	ExploringPipesComponent,
	AnimationsPracticeComponent,
	ObservablePracticeComponent,
	NavigationComponent

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
	AppComponent,
	CatFactsComponent,
	ScssExploreComponent,
	ServerComponent,
	ServersComponent,
	WarningAlertComponent,
	SuccessAlertComponent,
	CockpitComponent,
	DashboardComponent,
	UserComponent,
	ReactiveFormComponent,
	ExploringPipesComponent,
	AnimationsPracticeComponent,
	ObservablePracticeComponent,
	NavigationComponent
]

@NgModule({
	declarations: [
		BasicHighlightDirective,
		BetterHighlightDirective,
		UnlessDirective,
		ComponentPlaceholderDirective,

		ShortenPipe,
		FilterPipe,

		COMPONENTS,
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