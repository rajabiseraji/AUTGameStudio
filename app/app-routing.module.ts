/**
 * Created by rajab on 1/17/2017.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home.component';
import {LoginComponent } from './login.component';
import {RegisterComponent } from './register.component';
import {GameDetailComponent } from './gameDetail.component';
import {GameInfoComponent } from './gameInfo.component';
import {SimilarGamesComponent} from './similarGames.component';
import {CommentPageComponent} from './commentPage.component';
import {MediaPageComponent} from './media.component';
import {RankingPageComponent} from './ranking.component';
import {SearchPageComponent} from './searchPage.component';

const routes : Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'list/:keyword', component: SearchPageComponent},
    {path: ':game', component: GameDetailComponent, children: [
        {path: 'info', component: GameInfoComponent, outlet: 'route1'},
        {path: 'similar', component: SimilarGamesComponent, outlet: 'route1'},
        {path: 'comments', component: CommentPageComponent, outlet: 'route1'},
        {path: 'media', component: MediaPageComponent, outlet: 'route1'},
        {path: 'ranking', component: RankingPageComponent, outlet: 'route1'}
    ] },
    {path: 'login', component: LoginComponent ,  data: {hideNavbar: true}}
    ];
@NgModule({
    imports: [ RouterModule.forRoot(routes, {useHash: true}) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}