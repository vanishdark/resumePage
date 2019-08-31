import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {PublicRoutingNames} from './public-routing.names';
import {UnderConstructionPageComponent} from '../templates/under-construction/pages/under-construction-page/under-construction-page.component';
import {NotAuthenticatedGuard} from '../../shared/guards/not-authenticated.guard';
import {environment} from '../../../environments/environment';
import {HomeComponent} from './pages/home/home.component';
import {SkillsDetailedComponent} from './pages/skills/skills-detailed/skills-detailed.component';

const routes: Routes = [
  {path: '', redirectTo: PublicRoutingNames.NAME_HOME, pathMatch: 'full'},
  {
    path: PublicRoutingNames.NAME_HOME,
    component: HomeComponent,
    canActivate: [NotAuthenticatedGuard],
    data: {underConstruction: environment.underConstruction}
  },
  {
    path: PublicRoutingNames.NAME_UNDER_CONSTRUCTION,
    component: UnderConstructionPageComponent,
    canActivate: [NotAuthenticatedGuard]
  },
  {
    path: PublicRoutingNames.NAME_SKILLS,
    component: SkillsDetailedComponent,
    canActivate: [NotAuthenticatedGuard],
    data: {underConstruction: environment.underConstruction}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule {
}
