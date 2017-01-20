import { Injectable }    from '@angular/core';
import { Headers, Http, URLSearchParams,Response, RequestOptions, Jsonp  } from '@angular/http';
import 'rxjs/add/operator/map';

import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/catch';

import { Game } from './game';
import { Comment } from './comment';
import {Tutorial} from "./Tutorial";

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

  getGame(id: string): Observable<Game> {
    const url = `http://api.ie.ce-it.ir/F95/games/${id}/header.json`;
    return this.jsonp.get(url)
        .map((res:Response) => res.json().response.result.game || { })
        .catch(this.handleError);
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