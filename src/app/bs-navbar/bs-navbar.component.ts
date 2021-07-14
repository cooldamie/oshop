import { AuthService } from './../authenthication/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/app';
import { Observable } from 'rxjs';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.scss']
})

export class BsNavbarComponent implements OnInit {


  constructor(public auth: AuthService) {

   }

  ngOnInit(): void {
  }
  logout() {
    this.auth.logout();
  }


}
