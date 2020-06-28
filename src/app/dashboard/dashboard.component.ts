import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title: string = 'Welcome to my Angular sandbox!'

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onLoadServers() {
    // complex calculation here or processing
    this.router.navigate(['/servers']) // Programatically navigating to a route defined in our routes
  }
}