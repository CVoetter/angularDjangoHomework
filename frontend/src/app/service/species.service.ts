import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpeciesService {

  constructor(private http: HttpClient) { }

  retrieveSpeciesOptions() {
    return this.http.get <any[]>('api/species/options');
  }
}
