import {Component, ViewEncapsulation} from '@angular/core';
import {AuthenticationService} from "../authentication.service";

@Component({
  selector: 'app-sign-up',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  constructor(public authService: AuthenticationService) {
  }

  /**
   * Sign Up Function
   * @param email
   * @param password
   * @constructor
   */
  signUp(email: string, password: string) {
    if (email && password) {
      this.authService.signUp(email, password)
    } else {
      window.alert('Both Fields are Required');
    }
  }
}
