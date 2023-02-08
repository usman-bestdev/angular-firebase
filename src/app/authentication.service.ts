import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  authToken: string = '';
  isLoading = false
  constructor(
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
  ) {
  }

  // Sign in with email/password
  signIn(email: string, password: string) {
    this.isLoading = true;
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        if (result) {
          this.isLoading = false;
          let user: any;
          user = result?.user?.multiFactor
          this.authToken = user.user.accessToken
            this.router.navigate(['dashboard']);
        }
      })
      .catch((error) => {
        this.isLoading = false;
        window.alert(error.message);
      });
  }

  // Sign up with email/password
  signUp(email: string, password: string) {
    this.isLoading = true;
    return this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        if (result) {
          this.isLoading = false;
          window.alert('SignUp Success');
        }
        /* Call the SendVerificaitonMail() function when new user sign
        up and returns promise */
      })
      .catch((error) => {
        this.isLoading = false;
        window.alert(error.message);
      });
  }
}
