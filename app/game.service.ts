import { Injectable }    from '@angular/core';
import { Headers, Http, URLSearchParams,Response, RequestOptions, Jsonp  } from '@angular/http';
import 'rxjs/add/operator/map';

import {Observable, ObjectUnsubscribedError} from 'rxjs/Rx';
import 'rxjs/add/operator/catch';

import { Game } from './game';
import { Comment } from './comment';
import {Tutorial} from "./Tutorial";
import {Record} from "./record";

@Injectable()
export class GameService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private gamesUrl = '';  // URL to web api

  constructor(private jsonp: Http) { }

  getHomePageNewGames(): Observable<Game[]> {
    const url = "http://api.ie.ce-it.ir/F95/home.json";
    return this.jsonp.get(url)
        .map(this.extractData);
        // .catch(this.handleError);
  }

  getSliderGames(): Observable<Game[]>{
    const url = "http://api.ie.ce-it.ir/F95/home.json";
    return this.jsonp.get(url)
        .map(this.extractGamesSlider)
    .catch(this.handleError);
  }

  getLatestComments(): Observable<Comment[]>{
    const url = "http://api.ie.ce-it.ir/F95/home.json";
    return this.jsonp.get(url)
        .map(this.extractComments)
        .catch(this.handleError);
  }

  getTutorials(): Observable<Tutorial[]>{
    const url = "http://api.ie.ce-it.ir/F95/home.json";
    return this.jsonp.get(url)
        .map(this.extractTutorials)
        .catch(this.handleError);
  }

  getSimilar(id: string): Observable<Game[]>{
    const url = `http://api.ie.ce-it.ir/F95/games/${id}/related_games.json`;
    return this.jsonp.get(url)
        .map(this.extractGamesRelated)
        .catch(this.handleError);
  }

  getLeaderboard(id: string): Observable<Record[]>{
    const url = `http://api.ie.ce-it.ir/F95/games/${id}/leaderboard.json`;
    return this.jsonp.get(url)
        .map(this.extractLeaderboard)
        .catch(this.handleError);
  }

  getComments(id: string, offset:number): Observable<Comment[]>{
    let url: string ;
    if (offset==0)
      url = `http://api.ie.ce-it.ir/F95/games/${id}/comments`;
    else
      url = `http://api.ie.ce-it.ir/F95/games/${id}/comments?offset=${offset}`;
    return this.jsonp.get(url)
        .map(this.extractCommentPageComments)
        .catch(this.handleError);
  }

  search(token: string): Observable<Game[]>{
    const url = `http://api.ie.ce-it.ir/F95/games?q=${token}`;
    return this.jsonp.get(url)
        .map(this.extractGamesRelated)
        .catch(this.handleError);
  }


  postFilter(f: Object, offset: number): Observable<Game[]>{
    let url: string ;
    if (offset==0)
      url = `http://api.ie.ce-it.ir/F95/games_list.json`;
    else
      url = `http://api.ie.ce-it.ir/F95/games_list.json?offset=${offset}`;
    let filters = JSON.stringify(f); // Stringify payload
    // let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    // let options = new RequestOptions({ headers: headers }); // Create a request option
    console.log(filters);
    return this.jsonp.post(url, filters) // ...using post request
        .map(this.extractGamesRelated) // ...and calling .json() on the response to return data
        // .catch(this.handleError);
  }



  getGame(id: string): Observable<Game> {
    const url = `http://api.ie.ce-it.ir/F95/games/${id}/header.json`;
    return this.jsonp.get(url)
        .map((res:Response) => res.json().response.result.game || { })
        .catch(this.handleError);
  }

  private extractCommentPageComments(res: Response) {
    let body = res.json();
    return body.response.result.comments || { };
  }

  private extractLeaderboard(res: Response) {
    let body = res.json();
    return body.response.result.leaderboard || { };
  }

  private extractGamesRelated(res: Response) {
    let body = res.json();
    console.log(body);
    return body.response.result.games || { };
  }


  private extractGamesSlider(res: Response) {
    let body = res.json();
    return body.response.result.homepage.slider || { };
  }

  private extractTutorials(res: Response) {
    let body = res.json();
    return body.response.result.homepage.tutorials || { };
  }

  private extractComments(res: Response) {
    let body = res.json();
    return body.response.result.homepage.comments || { };
  }


  private extractData(res: Response) {
    let body = res.json();
    return body.response.result.homepage.new_games || { };
  }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure

    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }





  private makeRequest(path: string) {
    let params = new URLSearchParams();
    params.set('per_page', '100');

    let url = `http://api.ie.ce-it.ir/F95/games/${ path}/header.json`;
    return this.jsonp.get(url)
        .map((res) => res.json());
  }
}



/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/