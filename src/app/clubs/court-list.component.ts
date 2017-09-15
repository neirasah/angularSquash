import { Component, OnInit } from '@angular/core';
import { ICourt } from './court';
import { CourtService } from './court.service';


@Component ({
    selector: 'p-courts',
    templateUrl: './court-list.component.html',

})
export class CourtListComponent implements OnInit {
    courts: ICourt[] =[];  


//injecting instance of the courtService
constructor(private _courtService: CourtService){

}

ngOnInit(): void {
    this.courts = this._courtService.getCourts();
   
}

}