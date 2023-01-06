import {Component} from '@angular/core';
import {AuthenticationService} from "../authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(public authService: AuthenticationService) {
  }

  /**
   * On LogIn
   * @param email
   * @param password
   */
  logIn(email: string, password: string) {
    this.authService.SignIn(email, password)
  }


}
