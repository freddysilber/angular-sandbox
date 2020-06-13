import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent implements OnInit {
  @Input() clickerCount: number = 0

  constructor() { }

  ngOnInit(): void {
  }

}
