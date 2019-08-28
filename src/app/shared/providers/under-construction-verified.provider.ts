import {Injectable} from '@angular/core';

@Injectable()
export class UnderConstructionVerifiedProvider {

  private _isVerified = false;

  get isVerified(): boolean {
    return this._isVerified;
  }

  set isVerified(value: boolean) {
    this._isVerified = value;
  }
}
