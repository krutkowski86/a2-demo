import { Adres } from '../adres/adres.config';

export class Osoba {
  constructor(
    public typ: string,
    public imie: string,
    public imie2: string,
    public nazwisko: string,
    public pesel: string,
    public dataOtrzymaniaPrawaJazdy: string,
    public telefon: string,
    public email: string,
    public adresy: Adres[]
  ) {}
}

export const DaneosoboweFormModel = {
  imie: {
    validators: [
      {
        key: 'required'
      },
      {
        key: 'minLength',
        value: 5
      }
    ]
  },
  typ: {},
  imie2: {},
  nazwisko: {},
  pesel: {},
  dataOtrzymaniaPrawaJazdy: {},
  telefon: {},
  email: {}
};
