import {Component, HostListener, ViewChild} from '@angular/core';
import {environment} from '../environments/environment';
import {NavigationEnd, Router} from '@angular/router';
import {HeaderComponent} from './modules/templates/header/pages/header/header.component';
import {scrollToTop} from './shared/utils/utils.util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(HeaderComponent, {static: false}) header: HeaderComponent;

  title = 'resumePage';
  underConstruction: boolean;
  isShowToTop: boolean;
  topPosToStartShowing = 700;

  @HostListener('window:scroll')
  checkScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShowToTop = true;
    } else {
      this.isShowToTop = false;
    }
  }

  constructor(private router: Router) {
    this.underConstruction = environment.production ? environment.underConstruction : false;
    router.events.subscribe(value => {
      if (value instanceof NavigationEnd && value.url === '/skills') {
        this.header.isHomeActive = false;
        this.header.isAboutActive = false;
        this.header.isSkillActive = true;
      }
    });
  }

  goToTop() {
    scrollToTop();
  }
}
