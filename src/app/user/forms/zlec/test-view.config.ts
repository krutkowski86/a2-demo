export const arrayKeys = {
  adresy: {
    $key: 'typAdresu'
  },
  osoby: {
    $key: 'rodzajOsoby'
  }
};

interface FieldModel {
  $key?: string;
  visible: boolean;
  sections?: SectionModel;
  fields: {
    [index: string]: {
      init?: string | number;
      disabled?: boolean;
      validators?: { key: string; value?: string | number }[];
    };
  };
}

interface ArrayModel {
  types: {
    [index: string]: FieldModel;
  };
}

interface SectionModel {
  [index: string]: FieldModel | ArrayModel;
}

interface ViewModel {
  sections: SectionModel;
}

export const DaneosoboweView: ViewModel = {
  sections: {
    osoby: {
      types: {
        ZUB: {
          visible: true,
          fields: {
            rodzajOsoby: {
              init: 'ZUB'
            },
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
            nazwisko: {
              validators: [
                {
                  key: 'required'
                }
              ]
            },
            pesel: {
              validators: [
                {
                  key: 'required'
                }
              ]
            },
            dataOtrzymaniaPrawaJazdy: {},
            telefon: {},
            email: {}
          },
          sections: {
            adresy: {
              types: {
                K: {
                  visible: true,
                  fields: {
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
                S: {
                  visible: true,
                  fields: {
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
              }
            }
          }
        },
        UBE: {
          visible: true,
          fields: {
            rodzajOsoby: {
              init: 'UBE'
            },
            typ: {
              init: 'F'
            },
            imie: {
              init: 'Marian',
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
          sections: {
            adresy: {
              types: {
                K: {
                  visible: true,
                  fields: {
                    typ: {
                      init: 'K'
                    },
                    ulica: {},
                    nrDomu: {},
                    nrMieszkania: {},
                    kodPocztowy: {},
                    miasto: {}
                  }
                },
                S: {
                  visible: true,
                  fields: {
                    typ: {
                      init: 'S'
                    },
                    ulica: {
                      validators: [{ key: 'required' }]
                    },
                    nrDomu: {},
                    nrMieszkania: {},
                    kodPocztowy: {},
                    miasto: {}
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};
