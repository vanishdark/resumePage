import {AppRoutingNames} from '../../app-routing.names';

export class PublicRoutingNames {
  static readonly NAME_BASE = AppRoutingNames.NAME_PUBLIC;

  static readonly NAME_HOME = 'home';
  static readonly NAME_UNDER_CONSTRUCTION = 'under-construction';
  static readonly NAME_SKILLS = 'skills';

  static ROUTE_DEFAULT = '/' + PublicRoutingNames.NAME_BASE;
  static ROUTE_HOME = PublicRoutingNames.ROUTE_DEFAULT + '/' + PublicRoutingNames.NAME_HOME;
  static ROUTE_TOP = PublicRoutingNames.ROUTE_HOME + '#top';
  static ROUTE_SKILLS = '/' + PublicRoutingNames.NAME_SKILLS;
}
