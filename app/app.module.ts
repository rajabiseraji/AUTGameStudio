import './rxjs-extensions';


import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import { HttpModule }    from '@angular/http';

// import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './game-data';

import { requestOptionsProvider }   from './default-request-options.service';




import { GameService } from './game.service';
import { starsShow } from './starsShow.component';
import { gameCard } from './gameCard.component';
import {LoginComponent} from "./login.component";
import {RegisterComponent} from "./register.component";
import {HomeComponent} from "./home.component";
import {GameDetailComponent} from "./gameDetail.component";
import {GameInfoComponent} from "./gameInfo.component";
import {SimilarGamesComponent} from "./similarGames.component";
import {CommentPageComponent} from "./commentPage.component";
import {MediaPageComponent} from "./media.component";
import {RankingPageComponent} from "./ranking.component";
import {SearchPageComponent} from "./searchPage.component";

import { AppRoutingModule }     from './app-routing.module';

import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';

// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
// import $ from 'jquery';	
// import 'imports?jQuery=jquery!owl.carousel';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
    ModalModule.forRoot(),
    BootstrapModalModule
  ],
  declarations: [
    AppComponent, 
    starsShow,
    gameCard,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    GameInfoComponent,
    SimilarGamesComponent,
    GameDetailComponent,
    CommentPageComponent,
      MediaPageComponent,
      RankingPageComponent,
      SearchPageComponent
  ],
  providers: [ GameService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
