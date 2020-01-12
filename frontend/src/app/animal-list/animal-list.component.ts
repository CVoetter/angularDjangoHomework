import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AnimalService} from '../service/animal.service';
import {SpeciesService} from '../service/species.service';
import {ShelterService} from '../service/shelter.service';
import {SpayedService} from '../service/spayed.service';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.scss']
})
export class AnimalListComponent implements OnInit {

  animals: any[];
  displayedColumns = ['name', 'species_name', 'shelter_name', 'id'];

  constructor(private http: HttpClient, private animalService: AnimalService, public speciesService: SpeciesService, public shelterService: ShelterService, public spayedService: SpayedService) { }

  ngOnInit() {
    this.animalService.getAnimals()
      .subscribe((response: any[]) => {
        this.animals = response;
      });
  }

  deleteAnimal(animal) {
    this.animalService.deleteAnimal(animal)
      .subscribe(() => {
        this.ngOnInit();
      });
  }

}
