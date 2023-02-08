import { Component } from '@angular/core';
import {AuthenticationService} from "../authentication.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  sideBar = false
constructor(public authService: AuthenticationService) {
}
}
