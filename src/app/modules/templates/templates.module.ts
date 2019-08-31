import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UnderConstructionPageComponent} from './under-construction/pages/under-construction-page/under-construction-page.component';
import {HeaderComponent} from './header/pages/header/header.component';
import {PublicRoutingModule} from '../public/public-routing.module';
import {FooterComponent} from './footer/pages/footer/footer.component';


@NgModule({
  declarations: [
    UnderConstructionPageComponent,
    HeaderComponent,
    FooterComponent],
  imports: [
    CommonModule,
    PublicRoutingModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class TemplatesModule {
}
