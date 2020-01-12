import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {AnimalService} from '../service/animal.service';

@Injectable({
  providedIn: 'root'
})
export class AnimalResolver implements Resolve<Observable<any>> {
  constructor(private animalService: AnimalService) {
  }

  resolve(route: ActivatedRouteSnapshot) {
    return this.animalService.getAnimal(route.paramMap.get('id'));
  }
}
