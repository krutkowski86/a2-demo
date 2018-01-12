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
      login: ['test', [Validators.required, Validators.minLength(5)]],
      haslo: ['', Validators.required],
      test: this._fb.group({
        abc: ''
      })
    });

    this.user.valueChanges.forEach(value => {
      console.log(value);
    });

    setTimeout(() => {
      this.user.controls.login.patchValue('abs');
    }, 3000);
  }

  zaloguj() {}
}
