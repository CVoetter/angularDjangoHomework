import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AnimalListComponent} from './animal-list/animal-list.component';
import {AnimalFormComponent} from './animal-form/animal-form.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './guards/auth.guard';
import {ShelterListComponent} from './shelter-list/shelter-list.component';
import {ShelterFormComponent} from './shelter-form/shelter-form.component';
import {ShelterOptionsResolver} from './resolver/shelter-options.resolver';
import {AnimalResolver} from './resolver/animal.resolver';
import {CaregiverOptionsResolver} from './resolver/caregiver-options.resolver';
import {SpeciesOptionsResolver} from './resolver/species-options.resolver';
import {ShelterResolver} from './resolver/shelter.resolver';


const routes: Routes = [
  { path: 'animal-list', component: AnimalListComponent, canActivate: [AuthGuard] },
  { path: 'shelter-list', component: ShelterListComponent, canActivate: [AuthGuard] },
  { path: 'animal-form', component: AnimalFormComponent, canActivate: [AuthGuard], resolve: {
    shelterOptions: ShelterOptionsResolver, caregiverOptions: CaregiverOptionsResolver, speciesOptions: SpeciesOptionsResolver
    } },
  { path: 'shelter-form', component: ShelterFormComponent, canActivate: [AuthGuard] },
  { path: 'animal-form/:id', component: AnimalFormComponent, canActivate: [AuthGuard], resolve: {
      shelterOptions: ShelterOptionsResolver, caregiverOptions: CaregiverOptionsResolver,
      speciesOptions: SpeciesOptionsResolver, animal: AnimalResolver
    } },
  { path: 'shelter-form/:id', component: ShelterFormComponent, canActivate: [AuthGuard], resolve: {
    shelter: ShelterResolver
    } },
  { path: '', redirectTo: 'animal-list', pathMatch: 'full' },
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
