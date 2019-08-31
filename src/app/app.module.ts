import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TemplatesModule} from './modules/templates/templates.module';
import {PublicModule} from './modules/public/public.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PublicModule,
    TemplatesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
