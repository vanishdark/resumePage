import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {scroll} from '../../../../shared/utils/utils.util';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  protected comingFrom = '';

  constructor(private location: Location) {
    this.comingFrom = window.location.hash;
    window.location.hash = '';
  }

  ngOnInit() {
    console.log(this.location.path(true));
    this.redirectToHash();
  }

  private redirectToHash() {
    if (this.comingFrom === '#about') {
      scroll('about');
    } else if (this.comingFrom === '#skills') {
      scroll('skills');
    } else {
      scroll('top');
    }
  }
}
