import { Component, ViewChild, ElementRef, ContentChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.scss']
})
export class SuccessAlertComponent implements AfterViewInit {
  @ViewChild('successElement') successRef: ElementRef

  constructor() { }

  public handleSuccessClick(successElement: HTMLInputElement): void {
    console.log('Local Ref alt 2', this.successRef, this.successRef.nativeElement, this.successRef.nativeElement.value)
    // this.successRef.nativeElement.value = 'Success alert assigned a new value'
    console.log(successElement, successElement.value)
  }

  ngAfterViewInit() {
    console.log('afterviewinit')
    console.log(this.successRef)
  }
}