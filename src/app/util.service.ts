import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  colors = {
    red: 'red',
    green: 'green',
    lightgreen: 'lightgreen',
    blue: 'blue',
    orange: 'orange'
  }

  constructor() { }
}