import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  authToken: string = ''
  constructor(
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
  ) {
  }

  // Sign in with email/password
  SignIn(email: string, password: string) {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        if (result) {
          let user: any;
          user = result?.user?.multiFactor
          this.authToken = user.user.accessToken
            this.router.navigate(['dashboard']);
        }
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  // Sign up with email/password
  signUp(email: string, password: string) {
    return this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        if (result) {
          window.alert('SignUp Success');
        }
        /* Call the SendVerificaitonMail() function when new user sign
        up and returns promise */
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }
}
