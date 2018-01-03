export interface CURRENCY {
  priority: number;
  code: string;
  to: Array<string>;
}

export interface TICKER {
  max: number;
  min: number;
  last: number;
  bid: number;
  ask: number;
  vwap: number;
  average: number;
  volume: number;
}

export interface TRADE {
  date: number;
  price: number;
  amount: number;
  tid: string;
}

export const CURRENCY_IMAGE =
  'https://bitbay.net/user/themes/bitbay/images/currency/';

export const CURRENCIES: CURRENCY[] = [
  {
    priority: 3,
    code: 'LTC',
    to: ['PLN', 'EUR', 'USD', 'BTC']
  },
  {
    priority: 5,
    code: 'DASH',
    to: ['PLN', 'EUR', 'USD', 'BTC']
  },
  {
    priority: 0,
    code: 'BTC',
    to: ['PLN', 'EUR', 'USD']
  },
  {
    priority: 2,
    code: 'LSK',
    to: ['PLN', 'EUR', 'USD', 'BTC']
  },
  {
    priority: 7,
    code: 'BTG',
    to: ['PLN', 'EUR', 'USD', 'BTC']
  },
  {
    priority: 1,
    code: 'ETH',
    to: ['PLN', 'EUR', 'USD', 'BTC']
  },
  {
    priority: 6,
    code: 'BCC',
    to: ['PLN', 'EUR', 'USD', 'BTC']
  },
  {
    priority: 4,
    code: 'GAME',
    to: ['PLN', 'EUR', 'USD', 'BTC']
  }
];
