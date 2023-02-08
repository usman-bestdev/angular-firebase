import {Component} from '@angular/core';
import {AuthenticationService} from "../authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  color = '#e91e63'
  constructor(public authService: AuthenticationService) {
  }

  /**
   * On LogIn
   * @param email
   * @param password
   */
  logIn(email: string, password: string) {
    if (email && password) {
      this.authService.signIn(email, password)
    } else {
      window.alert('Both Fields are Required');
    }
  }


}
