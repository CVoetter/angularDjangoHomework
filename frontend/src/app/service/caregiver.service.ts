import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CaregiversService {

  constructor(private http: HttpClient) { }

  retrieveCaregiversOptions() {
    return this.http.get <any[]>('api/caregiver/options');
  }
}
