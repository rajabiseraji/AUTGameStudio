/**
 * Created by rajab on 1/19/2017.
 */
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Overlay } from 'angular2-modal';
import { Modal } from 'angular2-modal/plugins/bootstrap';
import { GameService } from './game.service';
import { Game } from './game';
import {Comment} from './comment';

@Component({
    moduleId : module.id,
    selector: ' comment-page',

    // directives: [OwlCarousel],
    templateUrl: 'commentPage.component.html',
    styleUrls: ['gameCard.component.css','commentPage.component.css', 'materialize.css', 'mystyle.css', 'font-awesome.min.css']
})
export class CommentPageComponent implements OnInit{
    constructor(overlay: Overlay, vcRef: ViewContainerRef, public modal: Modal) {
        overlay.defaultViewContainer = vcRef;
    }

    ngOnInit(): void {
    }

    onClick(){
        this.modal.alert()
            .size('lg')
            .showClose(true)
            .title('A simple Alert style modal window')
            .body(`
            <h4>Alert is a classic (title/body/footer) 1 button modal window that 
            does not block.</h4>
            <b>Configuration:</b>
            <ul>
                <li>Non blocking (click anywhere outside to dismiss)</li>
                <li>Size large</li>
                <li>Dismissed with default keyboard key (ESC)</li>
                <li>Close wth button click</li>
                <li>HTML content</li>
            </ul>`)
            .open();
    }
    selectedGame : Game = {
        title: 'بازی Uncharted',
        abstract: 'این بازی چرت است و پرت است واین چیزا و اینا و اینا و این چیزا',
        info: 'اوره دیگه',
        Complete: 'کامل کامل کامل',
        rate: 2,
        large_image: 'app/img/421645.jpg',
        small_image: 'app/img/421645.jpg',
        number_of_comments: 73
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
            text: 'بهترین این  عمرم بود',
            rate: 4,
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
            rate: 2,
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
            rate: 3,
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

    counter: Array<any> = [1,2,3,4,5];
}