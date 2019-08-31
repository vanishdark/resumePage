import {NgModule} from '@angular/core';
import {PublicRoutingModule} from './public-routing.module';
import {TemplatesModule} from '../templates/templates.module';
import {HomeComponent} from './pages/home/home.component';
import {AboutMeComponent} from './pages/about-me/about-me.component';

@NgModule({
  declarations: [HomeComponent, AboutMeComponent],
  imports: [
    PublicRoutingModule,
    TemplatesModule],
  exports: [
    HomeComponent
  ]
})
export class PublicModule {
}
