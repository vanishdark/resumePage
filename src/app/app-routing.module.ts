import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PublicRoutingNames} from './modules/public/public-routing.names';

const routes: Routes = [
  {path: '', redirectTo: PublicRoutingNames.NAME_BASE, pathMatch: 'full'},
  {path: PublicRoutingNames.NAME_BASE, loadChildren: './modules/public/public.module#PublicModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
