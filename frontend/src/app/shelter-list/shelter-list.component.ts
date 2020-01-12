import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ShelterService} from '../service/shelter.service';

@Component({
  selector: 'app-shelter-list',
  templateUrl: './shelter-list.component.html',
  styleUrls: ['./shelter-list.component.scss']
})
export class ShelterListComponent implements OnInit {

  shelters: any[];
  displayedColumns = ['name', 'street', 'city', 'postcode', 'healthcare', 'id']

  constructor(private http: HttpClient, private shelterService: ShelterService) { }

  ngOnInit() {
    this.shelterService.getShelters()
      .subscribe((response: any[]) => {
        this.shelters = response;
      });
  }

  deleteShelter(shelter) {
    this.shelterService.deleteShelter(shelter)
      .subscribe(() => {
        this.ngOnInit();
      });
  }

}
