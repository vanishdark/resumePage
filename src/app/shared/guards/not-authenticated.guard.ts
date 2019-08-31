import {Injectable} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree
} from '@angular/router';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {PublicRoutingNames} from '../../modules/public/public-routing.names';
import {UnderConstructionVerifiedProvider} from '../providers/under-construction-verified.provider';

@Injectable({
  providedIn: 'root'
})
export class NotAuthenticatedGuard implements CanActivate, CanLoad {
  verified: any;

  constructor(private router: Router) {
    this.verified = new UnderConstructionVerifiedProvider();
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const underConstruction = route.data.underConstruction as boolean;
    const verified = this.verified.isVerified;

    return this.showUnderConstructionPage(underConstruction, verified);
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }

  showUnderConstructionPage(value: boolean, verified: boolean): boolean {
    if (environment.production && value && !verified) {
      this.verified.isVerified = true;
      this.router.navigate([PublicRoutingNames.NAME_UNDER_CONSTRUCTION]);
      return false;
    }
    if (!environment.production && value && !verified) {
      this.verified.isVerified = true;
      this.router.navigate([PublicRoutingNames.NAME_UNDER_CONSTRUCTION]);
      return false;
    }
    if (verified) {
      return true;
    }
    if (!verified && value === undefined) {
      this.router.navigate([PublicRoutingNames.NAME_HOME]);
      return false;
    }
    return true;
  }
}
