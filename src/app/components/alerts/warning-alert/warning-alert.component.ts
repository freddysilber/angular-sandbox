import { Component, OnInit, OnChanges, SimpleChanges, Input, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ContentChild, ElementRef } from '@angular/core'

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrls: ['./warning-alert.component.css']
})
export class WarningAlertComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  timesClicked: number = 0
  @Input() namechange: string
  @ContentChild('warningTitle') warningTitleContent: ElementRef

  constructor() {
    // console.log('constructor called')
  }

  ngOnInit(): void {
    // console.log('ngOnInit called')
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log('ngOnChanges is called', changes)
  }

  ngDoCheck() {
    // console.log('ngDoCheck called')
  }

  ngAfterContentInit() {
    // console.log('ngAfterContentInit called', this.warningTitleContent.nativeElement.textContent)
  }

  ngAfterContentChecked() {
    // console.log('ngAfterContentChecked called')
  }

  ngAfterViewInit() {
    // console.log('ngAfterViewInit called')
  }

  ngAfterViewChecked() {
    // console.log('ngAfterViewChecked')
  }

  ngOnDestroy() {
    // console.log('ngOnDestroy called')
  }

  handleWarningClick() {
    this.timesClicked++
  }
}