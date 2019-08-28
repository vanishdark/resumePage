import {Component} from '@angular/core';
import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'resumePage';
  underConstruction: boolean;

  constructor() {
    this.underConstruction = environment.production ? environment.underConstruction : false;
  }
}
