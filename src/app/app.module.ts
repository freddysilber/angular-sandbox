// Angular
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
// Components
import { AppComponent } from './app.component'
import { ServerComponent } from './server/server.component'
import { ServersComponent } from './servers/servers.component'
import { WarningAlertComponent } from './components/alerts/warning-alert/warning-alert.component'
import { SuccessAlertComponent } from './components/alerts/success-alert/success-alert.component'
import { CockpitComponent } from './cockpit/cockpit.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { UserComponent } from './user/user.component'
import { ReactiveFormComponent } from './reactive-form/reactive-form.component'
import { ExploringPipesComponent } from './exploring-pipes/exploring-pipes.component'
import { SomethingNewComponent } from './something-new/something-new.component'
import { ObservablePracticeComponent } from './observable-practice/observable-practice.component';
import { NavigationComponent } from './components/navigation/navigation.component'
// Pipes
import { ShortenPipe } from './pipes/shorten.pipe'
import { FilterPipe } from './pipes/filter.pipe'
// Directives
import {
  BasicHighlightDirective,
  BetterHighlightDirective,
  UnlessDirective
} from './directives'
// Modules
import { AppRoutingModule } from './app-routing.module'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { NglModule } from 'ng-lightning'

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
    DashboardComponent,
    UserComponent,
    ReactiveFormComponent,
    ExploringPipesComponent,
    SomethingNewComponent,
    ShortenPipe,
    FilterPipe,
    ObservablePracticeComponent,
    NavigationComponent,
    // BrowserAnimationsModule
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    NglModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }