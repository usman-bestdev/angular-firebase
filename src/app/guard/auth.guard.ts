import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot,} from '@angular/router';
import {AuthenticationService} from "../authentication.service";

@Injectable({
  providedIn: 'root',
})

export class AuthGuard implements CanActivate {
  constructor(public authService: AuthenticationService, public router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    let ind = false
    if (this.authService.authToken) {
      ind = true;
    } else {
      this.router.navigate(['login']);

    }
    return ind;
  }
}
