import { Component, OnInit } from '@angular/core'
import { FormsModule, FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  signupForm: FormsModule

  constructor() { }

  ngOnInit(): void {
    // Syncs the form to the html from typescript
    this.signupForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      email: new FormControl(null, [
        Validators.required, Validators.email // this makes the validations for required and valid email address for this field
      ]),
    })
  }

  onsubmit() {
    console.log(this.signupForm) // This will log the form data
  }
}