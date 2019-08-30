import {Component, OnInit} from '@angular/core';
import {PublicRoutingNames} from '../../../../public/public-routing.names';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public homePage = PublicRoutingNames.ROUTE_HOME;
  private homePageTop = PublicRoutingNames.ROUTE_TOP;

  public isAboutActive: boolean;
  public isHomeActive: boolean;
  public isSkillActive: boolean;

  constructor(private router: Router, private location: Location) {
  }

  ngOnInit() {

    this.isHomeActive = this.location.path() === this.homePage || this.location.path() === this.homePageTop;
  }

  activeAbout() {
    this.isAboutActive = true;
    this.isHomeActive = false;
    this.isSkillActive = false;
  }

  activeHome() {
    this.isHomeActive = true;
    this.isAboutActive = false;
    this.isSkillActive = false;
  }

  activeSkill() {
    this.isHomeActive = false;
    this.isAboutActive = false;
    this.isSkillActive = false;
  }
}
