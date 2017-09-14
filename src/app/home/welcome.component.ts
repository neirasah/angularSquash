import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: './welcome.component.html'
})
export class WelcomeComponent implements OnInit {
    public pageTitle: string = 'Welcome!';
    public pageDescription: string ='Here you can check some of the top squash clubs in Malmö and make a booking of the court in any of them';

    ngOnInit() {
        console.log(localStorage["user"]);
    }
}
