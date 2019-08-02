import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetServiceComponent } from './get-service/get-service.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/getService', pathMatch: 'full' },
/**
 * New paths must added to this array. 
 * */ 
  { path: 'getService', component: GetServiceComponent }
  /**
   * for children paths, add the property "children" and child paths in an array.
   * Don't forget to add a new route-outlet in the template of the component with children paths
   */
//   { path: '[yourpath]', component: [Component name], children: [
//     { path: '', component: [starting point Component of the new route-outlet] },
//     { path: '[childpath]', component: [RecipeEditComponent] },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
