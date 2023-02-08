import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SignUpComponent} from './sign-up/sign-up.component';
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../firebase-config";
import {AngularFireAuthModule} from '@angular/fire/compat/auth';
import {AuthenticationService} from "./authentication.service";
import {DashboardComponent} from './dashboard/dashboard.component';
import {AuthGuard} from "./guard/auth.guard";
import {MatProgressSpinner, MatProgressSpinnerModule} from "@angular/material/progress-spinner";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    MatProgressSpinnerModule
  ],
  providers: [
    AuthenticationService, AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
