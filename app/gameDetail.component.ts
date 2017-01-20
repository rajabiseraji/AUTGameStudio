/**
 * Created by rajab on 1/17/2017.
 */
import { Component, OnInit } from '@angular/core';
// import { OwlCarousel } from './owl-carousel.component';
import { GameService } from './game.service';
import { Game } from './game';
import {Comment} from './comment';
import { Player } from './player';
import { Tutorial } from './tutorial';

@Component({
    moduleId : module.id,
    selector: 'game-detail',

    // directives: [OwlCarousel],
    templateUrl: 'gameDetail.component.html',
    styleUrls: ['gameDetail.component.css', 'materialize.css', 'mystyle.css', 'font-awesome.min.css']
})
export class GameDetailComponent implements OnInit{
    currentGame : Game =  {
        title: 'بازی سازی امیرکبیر',
        abstract: 'این بازی چرت است و پرت است واین چیزا و اینا و اینا و این چیزا',
        info: 'اوره دیگه',
        Complete: 'کامل کامل کامل',
        rate: 2,
        large_image: 'img/call-of-duty-background-18.jpg',
        small_image: '/app/img/call-of-duty-background-18.jpg',
        number_of_comments: 23
    };

    categories: Array<string> = [
        "اکشن", "هیجانی", "چرت و پرت"
    ]

    ngOnInit(): void {

    }


}