export const arrayKeys = {
  adresy: {
    $key: 'typAdresu'
  },
  osoby: {
    $key: 'rodzajOsoby'
  }
};

interface FieldModel {
  $key: string;
  visible?: boolean;
  pola: {
    [index: string]: {
      init?: string | number;
      disabled?: boolean;
      validators?: { key: string; value?: string | number }[];
    };
  };
  sekcje?: SectionModel;
}

interface SectionModel {
  [index: string]: FieldModel | Array<FieldModel>;
}

interface ViewModel {
  sekcje: SectionModel;
}

export const DaneosoboweView: ViewModel = {
  sekcje: {
    osoby: [
      {
        $key: 'UBJ',
        pola: {
          typ: {
            init: 'F'
          },
          imie: {
            disabled: true,
            init: 'Stefan',
            validators: [
              {
                key: 'required'
              }
            ]
          },
          imie2: {},
          nazwisko: {},
          pesel: {},
          dataOtrzymaniaPrawaJazdy: {},
          telefon: {},
          email: {}
        }
      }
    ]
  }
};

export const DaneosoboweView2: ViewModel = {
  sekcje: {
    osoby: [
      {
        $key: 'UBJ',
        pola: {
          typ: {
            init: 'F'
          },
          imie: {
            disabled: true,
            init: 'Stefan',
            validators: [
              {
                key: 'required'
              }
            ]
          },
          imie2: {},
          nazwisko: {},
          pesel: {},
          dataOtrzymaniaPrawaJazdy: {},
          telefon: {},
          email: {}
        },
        sekcje: {
          adresy: [
            {
              $key: 'K',
              pola: {
                typ: {
                  init: 'K'
                },
                ulica: {
                  disabled: true,
                  init: 'Polna'
                },
                nrDomu: {},
                nrMieszkania: {
                  validators: [
                    {
                      key: 'required'
                    }
                  ]
                },
                kodPocztowy: {},
                miasto: {}
              }
            },
            {
              $key: 'S',
              pola: {
                typ: {
                  init: 'S'
                },
                ulica: {},
                nrDomu: {},
                nrMieszkania: {},
                kodPocztowy: {},
                miasto: {}
              }
            }
          ]
        }
      },
      {
        $key: 'UBE',
        visible: false,
        pola: {
          typ: {
            init: 'F'
          },
          imie: {
            disabled: true,
            init: 'Stefan',
            validators: [
              {
                key: 'required'
              }
            ]
          },
          imie2: {},
          nazwisko: {},
          pesel: {},
          dataOtrzymaniaPrawaJazdy: {},
          telefon: {},
          email: {}
        },
        sekcje: {
          adresy: [
            {
              $key: 'K',
              visible: false,
              pola: {
                typ: {
                  init: 'K'
                },
                ulica: {
                  disabled: true,
                  init: 'Polna'
                },
                nrDomu: {},
                nrMieszkania: {
                  validators: [
                    {
                      key: 'required'
                    }
                  ]
                },
                kodPocztowy: {},
                miasto: {}
              }
            },
            {
              $key: 'S',
              pola: {
                typ: {
                  init: 'S'
                },
                ulica: {},
                nrDomu: {},
                nrMieszkania: {},
                kodPocztowy: {},
                miasto: {}
              }
            }
          ]
        }
      }
    ]
  }
};
