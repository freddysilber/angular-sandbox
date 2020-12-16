import { Component, Input, ContentChild, ElementRef } from '@angular/core'

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrls: ['./warning-alert.component.css']
})
export class WarningAlertComponent {
  timesClicked: number = 0
  @Input() namechange: string
  @ContentChild('warningTitle') warningTitleContent: ElementRef

  constructor() { }

  handleWarningClick() {
    this.timesClicked++
  }
}