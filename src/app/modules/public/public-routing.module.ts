import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {PublicRoutingNames} from './public-routing.names';
import {UnderConstructionPageComponent} from '../templates/under-construction/pages/under-construction-page/under-construction-page.component';

const routes: Routes = [
  {path: '', redirectTo: PublicRoutingNames.NAME_UNDER_CONSTRUCTION, pathMatch: 'full'},
  {path: PublicRoutingNames.NAME_UNDER_CONSTRUCTION, component: UnderConstructionPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule {
}
