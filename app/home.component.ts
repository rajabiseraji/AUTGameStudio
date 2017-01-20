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
import {Category} from "./Category";
import {Router} from '@angular/router';
@Component({
    moduleId : module.id,
    selector: 'home-comp',

    // directives: [OwlCarousel],
    providers: [GameService],
    templateUrl: 'home.component.html',
    styleUrls: ['app.component.css','similarGames.component.css', 'mystyle.css', 'font-awesome.min.css']
})
export class HomeComponent implements OnInit{
    title = false;

    cl = 'col s2 green';

    // games: Game[];

    constructor(private gameService: GameService, private route: Router) {
        this.getGames();
        this.getSlider();
        this.getComments();
        this.getTutorials();
    }

    newGames: Array<Game> = [];
    games: Array<Game> = [];
    currentGame: Game;
    commentsTest: Array<Comment> = [];
    tutorials: Array<Tutorial> = [];
    ngOnInit(): void {
        // this.getGames();
        // this.getSlider();
    }

    getGames() {
        this.gameService.getHomePageNewGames()
            .subscribe(
                newGames => {this.newGames = newGames; console.log(newGames)}, //Bind to view
                err => {
                    // Log errors if any
                    console.log(err);
                });

    }

    goTo(gameTitle: string){
        this.route.navigate(['/',gameTitle]);
    }

    getTutorials() {
        this.gameService.getTutorials()
            .subscribe(
                tutorials => {this.tutorials = tutorials; console.log(tutorials)}, //Bind to view
                err => {
                    // Log errors if any
                    console.log(err);
                });

    }

    getComments() {
        this.gameService.getLatestComments()
            .subscribe(
                comments => {this.commentsTest = comments; console.log(comments)}, //Bind to view
                err => {
                    // Log errors if any
                    console.log(err);
                });

    }

    getSlider() {
        this.gameService.getSliderGames()
            .subscribe(
                games => {this.games = games; console.log(games);
                    this.currentGame = this.games[0];}, //Bind to view
                err => {
                    // Log errors if any
                    console.log(err);
                });
    }



    dummyPlayer: Player = {
        name: 'mammad',
        URL: '/app/img/421645.jpg'
    };



    // tutorials: Array<Tutorial> = [
    //     {
    //         title: 'راهنمای بازی ۱',
    //         date: 'فلان روز ۹ بهمن',
    //         game: {
    //             title: 'بازی سازی امیرکبیر',
    //             abstract: 'این بازی چرت است و پرت است واین چیزا و اینا و اینا و این چیزا',
    //             info: 'اوره دیگه',
    //             categories: [new Category('اکشن'), new Category('چرت')],
    //             rate: 2,
    //             large_image: 'app/img/call-of-duty-background-18.jpg',
    //             small_image: 'app/img/call-of-duty-background-18.jpg',
    //             number_of_comments: 23
    //         }
    //     },
    //     {
    //         title: 'راهنمای بازی ۲',
    //         date: 'فلان روز ۹ بهمن',
    //         game: {
    //             title: 'بازی سازی امیرکبیر',
    //             abstract: 'این بازی چرت است و پرت است واین چیزا و اینا و اینا و این چیزا',
    //             info: 'اوره دیگه',
    //             categories: [new Category('اکشن'), new Category('چرت')],
    //             rate: 2,
    //             large_image: 'app/img/call-of-duty-background-18.jpg',
    //             small_image: 'app/img/call-of-duty-background-18.jpg',
    //             number_of_comments: 23
    //         }
    //     },
    //     {
    //         title: 'راهنمای بازی ۳',
    //         date: 'فلان روز ۹ بهمن',
    //         game: {
    //             title: 'بازی سازی امیرکبیر',
    //             abstract: 'این بازی چرت است و پرت است واین چیزا و اینا و اینا و این چیزا',
    //             info: 'اوره دیگه',
    //             categories: [new Category('اکشن'), new Category('چرت')],
    //             rate: 2,
    //             large_image: 'app/img/call-of-duty-background-18.jpg',
    //             small_image: 'app/img/call-of-duty-background-18.jpg',
    //             number_of_comments: 23
    //         }
    //     },
    //     {
    //         title: 'راهنمای بازی ۴',
    //         date: 'فلان روز ۹ بهمن',
    //         game: {
    //             title: 'بازی سازی امیرکبیر',
    //             abstract: 'این بازی چرت است و پرت است واین چیزا و اینا و اینا و این چیزا',
    //             info: 'اوره دیگه',
    //             categories: [new Category('اکشن'), new Category('چرت')],
    //             rate: 2,
    //             large_image: 'app/img/call-of-duty-background-18.jpg',
    //             small_image: 'app/img/call-of-duty-background-18.jpg',
    //             number_of_comments: 23
    //         }
    //     }
    //
    // ]
    //


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


}
