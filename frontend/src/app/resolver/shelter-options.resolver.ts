import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {ShelterService} from '../service/shelter.service';

@Injectable({
  providedIn: 'root'
})
export class ShelterOptionsResolver implements Resolve<Observable<any>> {
  constructor(private shelterService: ShelterService) {
  }

  resolve() {
    return this.shelterService.retrieveShelterOptions();
  }
}
