import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'crab-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {

  public userForm!: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder
  ) {
    this.userForm = this.formBuilder.group({
      userName: [undefined, [Validators.required]],
      userEmail: [undefined, [Validators.required, Validators.email]],
      message: [undefined]
    })
  }

}
