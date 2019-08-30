import {NgModule} from '@angular/core';
import {PublicRoutingModule} from './public-routing.module';
import {TemplatesModule} from '../templates/templates.module';
import {HomeComponent} from './pages/home/home.component';
import {AboutMeComponent} from './pages/about-me/about-me.component';
import {SkillsComponent} from './pages/skills/skills-home/skills.component';
import {SharedModule} from '../../shared/shared.module';
import {SkillsDetailedComponent} from './pages/skills/skills-detailed/skills-detailed.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [HomeComponent, AboutMeComponent, SkillsComponent, SkillsDetailedComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([]),
    PublicRoutingModule,

    TemplatesModule
  ],
  exports: [
    HomeComponent,
    SkillsDetailedComponent
  ]
})
export class PublicModule {
}
