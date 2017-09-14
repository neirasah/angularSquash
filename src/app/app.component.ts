import { Component, OnInit } from '@angular/core';
import { ClubService } from './clubs/club.service';
import { CourtService } from './clubs/court.service';
import { AuthenticateService } from './login/loginService/authenticate.service';

@Component({
  selector: 'p-root',
  //template: ``,
  //styleUrls: ['./app.component.css'],
  providers: [
    ClubService,
    AuthenticateService
  ],
  templateUrl: './app.component.html',
  
})
export class AppComponent implements OnInit {
  pageTitle: string = 'Top Squash Clubs in Malmö';
  constructor(private auth:AuthenticateService) { }

  ngOnInit() {
    console.log(this.auth.checkLoginStatus);
  }


  /*logout():void {
    this.auth.logout();
  }*/

}
