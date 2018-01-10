import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-zlec',
  templateUrl: './zlec.component.html',
  styleUrls: ['./zlec.component.scss']
})
export class ZlecComponent implements OnInit {
  zlecForm: FormGroup;
  constructor() {}

  ngOnInit() {}
}
