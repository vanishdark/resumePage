import {Component, OnInit} from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  getYearDifference() {
    const year = moment().diff('2018-06-28', 'years');
    return year > 1 ? year + ' years' : year + ' year';
  }
}
