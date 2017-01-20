import { Component, OnInit } from '@angular/core';

import {Game} from './game';


@Component({
  moduleId: module.id,
  selector: 'gameCard',
  templateUrl: 'gameCard.component.html',
  styleUrls: [ 'gameCard.component.css' , 'materialize.css', 'mystyle.css']
})
export class gameCard {
	// selectedGame: Game =  {info: 'shit',
	// 		Complete: 'yes',
	// 		rate: 50,
     //        title: 'بازی سازی امیرکبیر',
     //        abstract: 'این بازی چرت است و پرت است واین چیزا و اینا و اینا و این چیزا',
     //        large_image: 'img/call-of-duty-background-18.jpg',
     //        small_image: 'app/img/call-of-duty-background-18.jpg',
     //        number_of_comments: 23};
     //
    selectedGame: Game;
    constructor(private g : Game){
	    this.selectedGame = g;
    }
}