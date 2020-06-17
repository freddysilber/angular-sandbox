import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component'
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { ClickerComponent } from './counter/clicker/clicker.component';
import { CountComponent } from './counter/count/count.component';
import { CounterComponent } from './counter/counter.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { GameControlComponent } from './game-control/game-control.component';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component'
import { BasicHighlightDirective } from './basic-highlight/basic-hightlight.directive';

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
    BasicHighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
