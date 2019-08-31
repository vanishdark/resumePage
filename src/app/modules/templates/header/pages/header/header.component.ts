import {Component, OnInit} from '@angular/core';
import {PublicRoutingNames} from '../../../../public/public-routing.names';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public homePage = PublicRoutingNames.ROUTE_DEFAULT;

  constructor() {
  }

  ngOnInit() {
  }

}
