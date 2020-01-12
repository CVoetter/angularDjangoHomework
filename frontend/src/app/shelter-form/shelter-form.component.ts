import { Component, OnInit } from '@angular/core';
import {AbstractControl, AsyncValidatorFn, FormBuilder, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {AnimalService} from '../service/animal.service';
import {SpeciesService} from '../service/species.service';
import {ShelterService} from '../service/shelter.service';
import {CaregiversService} from '../service/caregiver.service';
import {SpayedService} from '../service/spayed.service';


@Component({
  selector: 'app-shelter-form',
  templateUrl: './shelter-form.component.html',
  styleUrls: ['./shelter-form.component.scss']
})
export class ShelterFormComponent implements OnInit {

  shelterFormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private route: ActivatedRoute,
              private router: Router, private animalService: AnimalService,
              public spayedService: SpayedService, private shelterService: ShelterService,
              private caregiversService: CaregiversService, private speciesService: SpeciesService) { }

  ngOnInit() {
    const data = this.route.snapshot.data;

    this.shelterFormGroup = this.fb.group({
      id: [null],
      name: ['', [Validators.required]],
      street: [null, [Validators.required, this.badWordValidator()]],
      city: [null, [Validators.required]],
      postcode: [null, [Validators.required, Validators.min(999), Validators.max(9999)]],
      healthcare: [false],
    });

    if (data.shelter) {
      this.shelterFormGroup.patchValue(data.shelter);
    }
  }

  createShelter() {
    const shelter = this.shelterFormGroup.value;
    if (shelter.id) {
      this.shelterService.updateShelter(shelter)
        .subscribe(() => {
          alert('updated successfully');
        });
    } else {
      this.shelterService.createShelter(shelter)
        .subscribe((response: any) => {
          this.router.navigate(['/shelter-form/' + response.id]);
        });
    }
  }

  badWordValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const forbidden = /bad word/.test(control.value);
      return forbidden ? {badWord: {value: control.value}} : null;
    };
  }
}
