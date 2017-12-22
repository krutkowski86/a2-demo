import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: FormGroup;
  constructor(private _fb: FormBuilder) {}

  ngOnInit() {
    this.user = this._fb.group({
      login: ['', Validators.required],
      haslo: ['', Validators.required]
    });
  }

  zaloguj() {}
}
