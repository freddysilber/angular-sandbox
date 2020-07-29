import { Component, OnInit } from '@angular/core'
import { FormsModule, FormGroup, FormControl, Validators, FormArray } from '@angular/forms'

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
      'userData': new FormGroup({
        'username': new FormControl(null, Validators.required),
        'email': new FormControl(null, [
          Validators.required, Validators.email // this makes the validations for required and valid email address for this field
        ]),
        'hobbies': new FormArray([])
      }),
    })
  }

  onsubmit() {
    console.log(this.signupForm) // This will log the form data
  }

  addHobby() {
    console.log('getting errors')
    // (<FormArray>this.signupForm.get('hobbies')).push(new FormControl())
  }
}