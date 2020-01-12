import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {SpeciesService} from '../service/species.service';

@Injectable({
  providedIn: 'root'
})
export class SpeciesOptionsResolver implements Resolve<Observable<any>> {
  constructor(private speciesService: SpeciesService) {
  }

  resolve() {
    return this.speciesService.retrieveSpeciesOptions();
  }
}
