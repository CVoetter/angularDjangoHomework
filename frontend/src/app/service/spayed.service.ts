import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpayedService {

  constructor() { }

  opNames = {
    y: 'Yes',
    n: 'No'
  };

}
