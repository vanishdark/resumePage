import {Component, OnInit} from '@angular/core';
import {PublicRoutingNames} from '../../../public-routing.names';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills = PublicRoutingNames.ROUTE_SKILLS;

  constructor() {
  }

  ngOnInit() {
  }

}
