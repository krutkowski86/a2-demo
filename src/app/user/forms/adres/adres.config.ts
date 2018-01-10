export class Adres {
  constructor(
    public typ: 'K' | 'S',
    public kodPocztowy?: string,
    public miasto?: string,
    public ulica?: string,
    public nrDomu?: string,
    public nrMieszkania?: string
  ) {}
}

export const AdresyFormModel = {
  ulica: {
    validators: [
      {
        key: 'required'
      }
    ]
  },
  nrDomu: {},
  nrMieszkania: {},
  kodPocztowy: {},
  miasto: {}
};
