import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Game } from './game';

@Injectable()
export class GameService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private gamesUrl = 'app/games';  // URL to web api

  constructor(private http: Http) { }

  getGames(): Promise<Game[]> {
    return this.http.get(this.gamesUrl)
               .toPromise()
               .then(response => response.json().data as Game[])
               .catch(this.handleError);
  }


  getGame(id: number): Promise<Game> {
    const url = `${this.gamesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Game)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}



/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/