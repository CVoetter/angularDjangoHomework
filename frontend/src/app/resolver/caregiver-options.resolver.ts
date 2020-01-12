import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {CaregiversService} from '../service/caregiver.service';

@Injectable({
  providedIn: 'root'
})
export class CaregiverOptionsResolver implements Resolve<Observable<any>> {
  constructor(private caregiverService: CaregiversService) {
  }

  resolve() {
    return this.caregiverService.retrieveCaregiversOptions();
  }
}
