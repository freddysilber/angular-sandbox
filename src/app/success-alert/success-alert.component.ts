import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent implements OnInit {
  @ViewChild('successElement') successRef: ElementRef

  constructor() { }

  ngOnInit(): void {
  }

  handleSuccessClick(successElement: HTMLInputElement) {
    console.log('Local Ref alt 2', this.successRef, this.successRef.nativeElement, this.successRef.nativeElement.value)
    console.log(successElement, successElement.value)
  }
}