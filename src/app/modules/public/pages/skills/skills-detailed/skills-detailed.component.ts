import {Component, OnInit} from '@angular/core';
import {scrollToTop} from '../../../../../shared/utils/utils.util';

@Component({
  selector: 'app-skills-detailed',
  templateUrl: './skills-detailed.component.html',
  styleUrls: ['./skills-detailed.component.scss']
})
export class SkillsDetailedComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    scrollToTop();
  }

}
