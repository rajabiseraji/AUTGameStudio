/**
 * Created by rajab on 1/18/2017.
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
    selector: 'similar-games',

    // directives: [OwlCarousel],
    templateUrl: 'similarGames.component.html',
    styleUrls: ['gameCard.component.css','similarGames.component.css', 'materialize.css', 'mystyle.css', 'font-awesome.min.css']
})
export class SimilarGamesComponent implements OnInit{
    games : Array<Game> = [
        {
            title: 'بازی سازی امیرکبیر',
            abstract: 'این بازی چرت است و پرت است واین چیزا و اینا و اینا و این چیزا',
            info: 'اوره دیگه',
            Complete: 'کامل کامل کامل',
            rate: 2,
            large_image: 'app/img/call-of-duty-background-18.jpg',
            small_image: 'app/img/call-of-duty-background-18.jpg',
            number_of_comments: 23,

        },
        {
            title: 'بازی سازی امیرکبیر',
            abstract: 'این بازی چرت است و پرت است واین چیزا و اینا و اینا و این چیزا',
            info: 'اوره دیگه',
            Complete: 'کامل کامل کامل',
            rate: 2,
            large_image: 'app/img/call-of-duty-background-18.jpg',
            small_image: 'app/img/call-of-duty-background-18.jpg',
            number_of_comments: 23
        },
        {
            title: 'بازی GTA V',
            abstract: 'این بازی چرت است و پرت است واین چیزا و اینا و اینا و این چیزا',
            info: 'اوره دیگه',
            Complete: 'کامل کامل کامل',
            rate: 2,
            large_image: 'app/img/23815901722_4d1edf4ed1_b.jpg',
            small_image: 'app/img/23815901722_4d1edf4ed1_b.jpg',
            number_of_comments: 50
        },
        {
            title: 'بازی Uncharted',
            abstract: 'این بازی چرت است و پرت است واین چیزا و اینا و اینا و این چیزا',
            info: 'اوره دیگه',
            Complete: 'کامل کامل کامل',
            rate: 2,
            large_image: 'app/img/421645.jpg',
            small_image: 'app/img/421645.jpg',
            number_of_comments: 73
        }
    ];

    categories: Array<string> = [
        "اکشن", "هیجانی", "چرت و پرت"
    ];

    ngOnInit(): void {

    }


}