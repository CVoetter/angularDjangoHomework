import { Component, OnInit } from '@angular/core';
import {AbstractControl, AsyncValidatorFn, FormBuilder, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {AnimalService} from '../service/animal.service';
import {SpeciesService} from '../service/species.service';
import {ShelterService} from '../service/shelter.service';
import {CaregiversService} from '../service/caregiver.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {SpayedService} from '../service/spayed.service';

@Component({
  selector: 'app-animal-form',
  templateUrl: './animal-form.component.html',
  styleUrls: ['./animal-form.component.scss']
})
export class AnimalFormComponent implements OnInit {

  animalFormGroup;
  shelterOptions;
  caregiverOptions;
  speciesOptions;


  constructor(private fb: FormBuilder, private http: HttpClient, private route: ActivatedRoute,
              private router: Router, private animalService: AnimalService,
              public spayedService: SpayedService, private shelterService: ShelterService,
              private caregiversService: CaregiversService, private speciesService: SpeciesService) { }
  ngOnInit() {
    const data = this.route.snapshot.data;
    this.shelterOptions = data.shelterOptions;
    this.caregiverOptions = data.caregiverOptions;
    this.speciesOptions = data.speciesOptions;

    this.animalFormGroup = this.fb.group({
      'id': [null],
      'name': ['', Validators.required],
      'species': [null],
      'spayed': [null],
      'entry_date': [null],
      'age': [1, Validators.max(50)],
      'shelter': [null],
      'caregiver': [[]],
    });

    if (data.animal) {
      this.animalFormGroup.patchValue(data.animal);
    }
  }

  createAnimal() {
    const animal = this.animalFormGroup.value;
    if (animal.id) {
      this.animalService.updateAnimal(animal)
        .subscribe(() => {
          alert('updated successfully');
        });
    } else {
      this.animalService.createAnimal(animal)
        .subscribe((response: any) => {
          this.router.navigate(['/animal-form/' + response.id]);
        });
    }
  }

}
