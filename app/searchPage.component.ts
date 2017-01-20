/**
 * Created by rajab on 1/19/2017.
 */
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { GameService } from './game.service';
import {Game} from './game';
import {Category} from './category';


@Component({
    moduleId : module.id,
    selector: 'search-page',

    // directives: [OwlCarousel],
    templateUrl: 'searchPage.component.html',
    styleUrls: ['gameCard.component.css','gameDetail.component.css','searchPage.component.css', 'materialize.css', 'mystyle.css', 'font-awesome.min.css']
})
export class SearchPageComponent implements OnInit {
    ngOnInit(): void {
    }

    searched: string = "FIFA";


    games : Array<Game> = [
        {
            title: 'بازی سازی امیرکبیر',
            abstract: 'این بازی چرت است و پرت است واین چیزا و اینا و اینا و این چیزا',
            info: 'اوره دیگه',
            categories: [new Category('اکشن'), new Category('چرت')],
            rate: 2,
            large_image: 'app/img/call-of-duty-background-18.jpg',
            small_image: 'app/img/call-of-duty-background-18.jpg',
            number_of_comments: 23,

        },
        {
            title: 'بازی سازی امیرکبیر',
            abstract: 'این بازی چرت است و پرت است واین چیزا و اینا و اینا و این چیزا',
            info: 'اوره دیگه',
            categories: [new Category('اکشن'), new Category('چرت')],
            rate: 2,
            large_image: 'app/img/call-of-duty-background-18.jpg',
            small_image: 'app/img/call-of-duty-background-18.jpg',
            number_of_comments: 23
        },
        {
            title: 'بازی GTA V',
            abstract: 'این بازی چرت است و پرت است واین چیزا و اینا و اینا و این چیزا',
            info: 'اوره دیگه',
            categories: [new Category('اکشن'), new Category('چرت')],
            rate: 2,
            large_image: 'app/img/23815901722_4d1edf4ed1_b.jpg',
            small_image: 'app/img/23815901722_4d1edf4ed1_b.jpg',
            number_of_comments: 50
        },
        {
            title: 'بازی Uncharted',
            abstract: 'این بازی چرت است و پرت است واین چیزا و اینا و اینا و این چیزا',
            info: 'اوره دیگه',
            categories: [new Category('اکشن'), new Category('چرت')],
            rate: 2,
            large_image: 'app/img/421645.jpg',
            small_image: 'app/img/421645.jpg',
            number_of_comments: 73
        }
    ];

    categories: Array<string> = [
        "اکشن", "هیجانی", "چرت و پرت"
    ];

    currentGame: Game = this.games[2];

}