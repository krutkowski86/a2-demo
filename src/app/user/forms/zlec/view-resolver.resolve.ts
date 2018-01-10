import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router/src/interfaces';
import { setTimeout } from 'timers';
import { DaneosoboweView } from './test-view.config';

@Injectable()
export class ViewResolver implements Resolve<any> {
  resolve() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(DaneosoboweView);
      }, 1000);
    });

    return promise;
  }
}
