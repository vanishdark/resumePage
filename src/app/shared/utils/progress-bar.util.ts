import {Injectable} from '@angular/core';


@Injectable({providedIn: 'root'})
export class ProgressBarUtil {
  max = 100;
  animated = false;
  striped = false;
  type: string;
  showValue = false;
  height: string;
}
