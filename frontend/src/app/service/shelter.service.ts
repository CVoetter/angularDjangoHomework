import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShelterService {

  constructor(private http: HttpClient) { }

  retrieveShelterOptions() {
    return this.http.get <any[]>('api/shelter/options');
  }

  getShelters() {
    return this.http.get('/api/shelter/list');
  }

  createShelter(shelter) {
    return this.http.post('/api/shelter/create', shelter);
  }

  updateShelter(shelter) {
    return this.http.put('/api/shelter/' + shelter.id + '/update', shelter);
  }

  deleteShelter(shelter) {
    return this.http.delete('/api/shelter/' + shelter.id + '/delete', shelter);
  }

  getShelter(id) {
    return this.http.get('/api/shelter/' + id + '/get');
  }
}
