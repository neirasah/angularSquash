import { Component, OnInit } from '@angular/core';
import { IClub } from "./club";
import { ClubService } from './club.service';


@Component ({
    //selector: 'p-clubs',
    templateUrl: './club-list.component.html',
    styleUrls: ['./club-list.component.css']

})
export class ClubListComponent implements OnInit {
    pageTitle: string = 'Malmö Squash Clubs';
    imageWidth: number=150;
    imageMargin: number=2;
    clubs: IClub[] =[];  


//injecting instance of the clubService
constructor(private _clubService: ClubService){

}

ngOnInit(): void {
    this.clubs = this._clubService.getClubs();
    console.log(localStorage["user"]);
}

}