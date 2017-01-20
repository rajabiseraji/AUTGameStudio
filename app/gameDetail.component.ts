/**
 * Created by rajab on 1/17/2017.
 */
import { Component, OnInit } from '@angular/core';
// import { OwlCarousel } from './owl-carousel.component';
import { GameService } from './game.service';
import { Game } from './game';
import {Comment} from './comment';
import { Player } from './player';
import { Category } from './category';
import {ActivatedRoute} from '@angular/router';

@Component({
    moduleId : module.id,
    selector: 'game-detail',

    // directives: [OwlCarousel],
    templateUrl: 'gameDetail.component.html',
    styleUrls: ['gameDetail.component.css', 'materialize.css', 'mystyle.css', 'font-awesome.min.css','starsShow.component.css']
})
export class GameDetailComponent implements OnInit{
    currentGame : Game;


    categories: Array<string> = [
        "اکشن", "هیجانی", "چرت و پرت"
    ];

    curGameName: string;
    constructor(public gameServe: GameService,private route: ActivatedRoute){
    }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.curGameName = params['game'];
            if (this.curGameName) {
                this.gameServe.getGame(this.curGameName)
                    .subscribe(
                        game => this.currentGame = game, //Bind to view
                        err => {
                            // Log errors if any
                            console.log(err);
                        });
            }
        });
    }




}