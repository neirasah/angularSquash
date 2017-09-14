import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { ClubListComponent } from './clubs/club-list.component';
import { ClubDetailComponent } from './clubs/club-detail.component';
import { WelcomeComponent } from './home/welcome.component';
import { CourtService } from './clubs/court.service';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './login/user/user.component';



@NgModule({
  declarations: [
    AppComponent,
    ClubListComponent,
    ClubDetailComponent,
    WelcomeComponent,
    LoginComponent,
    UserComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'login', component:LoginComponent },
      {path: 'clubs', component: ClubListComponent},
      {path: 'clubs/:id', component: ClubDetailComponent},
      {path: 'welcome', component: WelcomeComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: '**', redirectTo: 'welcome', pathMatch: 'full'},


    
    ])
  ],
  providers: [{provide:'court', useClass:CourtService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
