import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {AnimalService} from '../service/animal.service';
import {ShelterService} from '../service/shelter.service';

@Injectable({
  providedIn: 'root'
})
export class ShelterResolver implements Resolve<Observable<any>> {
  constructor(private shelterService: ShelterService) {
  }

  resolve(route: ActivatedRouteSnapshot) {
    return this.shelterService.getShelter(route.paramMap.get('id'));
  }
}
