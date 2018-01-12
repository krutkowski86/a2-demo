export const DaneosoboweView = {
  sekcje: {
    daneosobowe: {
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
            pola: {
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
          {
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
    adresy: {
      pola: {
        ulica: {},
        nrDomu: {},
        nrMieszkania: {},
        kodPocztowy: {},
        miasto: {}
      }
    }
  }
};
