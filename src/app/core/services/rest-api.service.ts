import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RestApiService {
  constructor(private _http: HttpClient) {}

  get<T>(url, options?) {
    const promise = new Promise<T>((resolve, reject) => {
      this._http
        .get(url, options)
        .toPromise<any>()
        .then(
          res => {
            resolve(res);
          },
          rej => {
            console.log('error', rej);
          }
        );
    });

    return promise;
  }
}
