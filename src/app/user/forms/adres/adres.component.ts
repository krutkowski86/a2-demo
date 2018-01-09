import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-adres-form',
  templateUrl: './adres.component.html',
  styleUrls: ['./adres.component.scss']
})
export class AdresComponent {
  @Input() adresGroup: FormGroup;
}
