import { Component, OnInit } from '@angular/core'
import { UserService } from '../user.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  onActivate() {
    this.userService.activatedEmitter.next(true)
    // this.userService.activatedEmitter.emit(true)
  }
}