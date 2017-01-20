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
    selector: 'home-comp',

    // directives: [OwlCarousel],
    templateUrl: 'home.component.html',
    styleUrls: ['app.component.css', 'mystyle.css', 'font-awesome.min.css']
})
export class HomeComponent implements OnInit{
    title = false;

    cl = 'col s2 green';

    // games: Game[] = [];

    constructor(private gameService: GameService) { }

    ngOnInit(): void {
        this.getGames();
    }

    getGames() {
        this.gameService.getGames()
        // .then(
        //   games => this.games = games);
    }

    bigImageUrl = 'call-of-duty-background-18.jpg';
    games: Array<Game> =  [
        {
            title: 'بازی سازی امیرکبیر',
            abstract: 'این بازی چرت است و پرت است واین چیزا و اینا و اینا و این چیزا',
            info: 'اوره دیگه',
            Complete: 'کامل کامل کامل',
            rate: 2,
            large_image: 'img/call-of-duty-background-18.jpg',
            small_image: 'img/call-of-duty-background-18.jpg',
            number_of_comments: 23
        },
        {
            title: 'بازی GTA V',
            abstract: 'این بازی چرت است و پرت است واین چیزا و اینا و اینا و این چیزا',
            info: 'اوره دیگه',
            Complete: 'کامل کامل کامل',
            rate: 2,
            large_image: 'img/23815901722_4d1edf4ed1_b.jpg',
            small_image: 'img/23815901722_4d1edf4ed1_b.jpg',
            number_of_comments: 50
        },
        {
            title: 'بازی Uncharted',
            abstract: 'این بازی چرت است و پرت است واین چیزا و اینا و اینا و این چیزا',
            info: 'اوره دیگه',
            Complete: 'کامل کامل کامل',
            rate: 2,
            large_image: 'img/421645.jpg',
            small_image: 'img/421645.jpg',
            number_of_comments: 73
        }
    ];

    dummyPlayer: Player = {
        name: 'mammad',
        URL: '/app/img/421645.jpg'
    };

    commentsTest: Array<Comment> = [  //must be retrieved using a comment service
        {
            text: 'بهترین بازی عمرم بود',
            rate: 5,
            date: 'دوشنبه فلان روز فلان روز',
            player: {
                name: 'mammad',
                URL: '/app/img/421645.jpg'
            },
            game: {
                title: 'بازی سازی امیرکبیر',
                abstract: 'این بازی چرت است و پرت است واین چیزا و اینا و اینا و این چیزا',
                info: 'اوره دیگه',
                Complete: 'کامل کامل کامل',
                rate: 2,
                large_image: 'img/call-of-duty-background-18.jpg',
                small_image: 'img/call-of-duty-background-18.jpg',
                number_of_comments: 23
            }
        },
        {
            text: 'بهترین بازی عمرم بود',
            rate: 5,
            date: 'دوشنبه فلان روز فلان روز',
            player: {
                name: 'mammad',
                URL: '/app/img/421645.jpg'
            },
            game: {
                title: 'بازی سازی امیرکبیر',
                abstract: 'این بازی چرت است و پرت است واین چیزا و اینا و اینا و این چیزا',
                info: 'اوره دیگه',
                Complete: 'کامل کامل کامل',
                rate: 2,
                large_image: 'img/call-of-duty-background-18.jpg',
                small_image: 'img/call-of-duty-background-18.jpg',
                number_of_comments: 23
            }
        }, {
            text: 'بهترین بازی عمرم بود',
            rate: 5,
            date: 'دوشنبه فلان روز فلان روز',
            player: {
                name: 'mammad',
                URL: '/app/img/421645.jpg'
            },
            game: {
                title: 'بازی سازی امیرکبیر',
                abstract: 'این بازی چرت است و پرت است واین چیزا و اینا و اینا و این چیزا',
                info: 'اوره دیگه',
                Complete: 'کامل کامل کامل',
                rate: 2,
                large_image: 'img/call-of-duty-background-18.jpg',
                small_image: 'img/call-of-duty-background-18.jpg',
                number_of_comments: 23
            }
        }

    ];


    tutorials: Array<Tutorial> = [
        {
            title: 'راهنمای بازی ۱',
            date: 'فلان روز ۹ بهمن',
            game: {
                title: 'بازی سازی امیرکبیر',
                abstract: 'این بازی چرت است و پرت است واین چیزا و اینا و اینا و این چیزا',
                info: 'اوره دیگه',
                Complete: 'کامل کامل کامل',
                rate: 2,
                large_image: 'app/img/call-of-duty-background-18.jpg',
                small_image: 'app/img/call-of-duty-background-18.jpg',
                number_of_comments: 23
            }
        },
        {
            title: 'راهنمای بازی ۲',
            date: 'فلان روز ۹ بهمن',
            game: {
                title: 'بازی سازی امیرکبیر',
                abstract: 'این بازی چرت است و پرت است واین چیزا و اینا و اینا و این چیزا',
                info: 'اوره دیگه',
                Complete: 'کامل کامل کامل',
                rate: 2,
                large_image: 'app/img/call-of-duty-background-18.jpg',
                small_image: 'app/img/call-of-duty-background-18.jpg',
                number_of_comments: 23
            }
        },
        {
            title: 'راهنمای بازی ۳',
            date: 'فلان روز ۹ بهمن',
            game: {
                title: 'بازی سازی امیرکبیر',
                abstract: 'این بازی چرت است و پرت است واین چیزا و اینا و اینا و این چیزا',
                info: 'اوره دیگه',
                Complete: 'کامل کامل کامل',
                rate: 2,
                large_image: 'app/img/call-of-duty-background-18.jpg',
                small_image: 'app/img/call-of-duty-background-18.jpg',
                number_of_comments: 23
            }
        },
        {
            title: 'راهنمای بازی ۴',
            date: 'فلان روز ۹ بهمن',
            game: {
                title: 'بازی سازی امیرکبیر',
                abstract: 'این بازی چرت است و پرت است واین چیزا و اینا و اینا و این چیزا',
                info: 'اوره دیگه',
                Complete: 'کامل کامل کامل',
                rate: 2,
                large_image: 'app/img/call-of-duty-background-18.jpg',
                small_image: 'app/img/call-of-duty-background-18.jpg',
                number_of_comments: 23
            }
        }

    ]



    // newGames: Array<Object> =  [
    //        {
    //          title: 'بازی سازی امیرکبیر',
    //          abstract: 'این بازی چرت است و پرت است واین چیزا و اینا و اینا و این چیزا',
    //          large_image: 'img/call-of-duty-background-18.jpg',
    //          small_image: 'img/call-of-duty-background-18.jpg',
    //          number_of_comments: 23
    //        },
    //        {
    //        title: 'بازی GTA V',
    //          abstract: 'این بازی چرت است و پرت است واین چیزا و اینا و اینا و این چیزا',
    //          large_image: 'img/23815901722_4d1edf4ed1_b.jpg',
    //        small_image: 'img/23815901722_4d1edf4ed1_b.jpg',
    //          number_of_comments: 50
    //        },
    //        {
    //          title: 'بازی Uncharted',
    //          abstract: 'این بازی چرت است و پرت است واین چیزا و اینا و اینا و این چیزا',
    //          large_image: 'img/421645.jpg',
    //          small_image: 'img/421645.jpg',
    //          number_of_comments: 73
    //        }
    //      ];

    currentGame: Game = this.games[0];

}
