import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component'
import { ServerComponent } from './server/server.component'
import { ServersComponent } from './servers/servers.component'
import { WarningAlertComponent } from './components/alerts/warning-alert/warning-alert.component'
import { SuccessAlertComponent } from './components/alerts/success-alert/success-alert.component'
import { ClickerComponent } from './counter/clicker/clicker.component'
import { CountComponent } from './counter/count/count.component'
import { CounterComponent } from './counter/counter.component'
import { CockpitComponent } from './cockpit/cockpit.component'
import { GameControlComponent } from './interval-game/game-control/game-control.component'
import { OddComponent } from './interval-game/odd/odd.component'
import { EvenComponent } from './interval-game/even/even.component'
import { BasicHighlightDirective } from './directives/basic-highlight/basic-hightlight.directive'
import { BetterHighlightDirective } from './directives/better-highlight/better-highlight.directive'
import { UnlessDirective } from './unless.directive'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { DashboardComponent } from './dashboard/dashboard.component'
import { AppRoutingModule } from './app-routing.module';
import { UserComponent } from './user/user.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component'

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    ClickerComponent,
    CountComponent,
    CounterComponent,
    CockpitComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    DashboardComponent,
    UserComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }