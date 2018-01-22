import { Adres } from '../adres/adres.config';

export interface Osoba {
  sys_id: number;
  rodzajOsoby: 'ZUB' | 'UBE';
  imie?: string;
  imie2?: string;
  nazwisko?: string;
  pesel?: string;
  dataOtrzymaniaPrawaJazdy?: string;
  telefon?: string;
  email?: string;
  adresy?: Adres[];
}
