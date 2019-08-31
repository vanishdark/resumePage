import {Component, OnInit} from '@angular/core';
import {PublicRoutingNames} from '../../../../public/public-routing.names';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {scroll} from '../../../../../shared/utils/utils.util';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public homePage = '/home';
  private homePageRoute = PublicRoutingNames.ROUTE_HOME;


  public isAboutActive: boolean;
  public isHomeActive: boolean;
  public isSkillActive: boolean;

  constructor(private router: Router, private location: Location) {
  }

  ngOnInit() {
    this.isHomeActive = this.checkIfHome();
  }

  activeAbout() {
    this.isAboutActive = true;
    this.isHomeActive = false;
    this.isSkillActive = false;
    if (this.checkIfHome()) {
      scroll('about');
    } else {
      this.router.navigate([PublicRoutingNames.NAME_HOME], {fragment: 'about'});
    }
  }

  activeHome() {
    this.isHomeActive = true;
    this.isAboutActive = false;
    this.isSkillActive = false;
    if (this.checkIfHome()) {
      scroll('top');
    } else {
      this.router.navigate([PublicRoutingNames.NAME_HOME]);
    }
  }

  activeSkill() {
    this.isHomeActive = false;
    this.isAboutActive = false;
    this.isSkillActive = true;
    if (this.checkIfHome()) {
      scroll('skills');
    } else {
      this.router.navigate([PublicRoutingNames.NAME_HOME], {fragment: 'skills'});
    }
  }

  private checkIfHome(): boolean {
    return this.location.path() === this.homePage || this.location.path() === this.homePageRoute;
  }
}
