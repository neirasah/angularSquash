import { Component, OnInit, Inject, Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IClub } from "./club";
import { ClubService } from './club.service';
import { CourtService } from './court.service';
import { ICourt } from './court';


@Component({ 
  templateUrl: './club-detail.component.html',
  styleUrls: ['./club-detail.component.css']
})

@Injectable()
export class ClubDetailComponent implements OnInit {
  pageTitle: string ='Squash Clubs Detail';
  club: IClub;
  courts:ICourt;
  

  constructor(private _clubService: ClubService,
              private _courtService: ClubService,
              private _route: ActivatedRoute,
              private _router: Router,
            ) { }


      

  ngOnInit() {


    let id =+this._route.snapshot.paramMap.get('id');
    this.pageTitle += `:${id}`;
    this.club = {

      clubId: id,
      "clubName": "The Club",
      "clubAddress": "Squashgatan 10",
      "clubCourts": 7,
      "clubOpen": "from 10:00 am to 10.00 pm",
      "imageUrl": "./assets/images/squash.jpg",
      
              }
        }



  onBack(): void {
    this._router.navigate(['/clubs']);
  }



}


