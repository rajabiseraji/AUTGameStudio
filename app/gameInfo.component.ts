/**
 * Created by rajab on 1/18/2017.
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
    selector: 'game-info',

    // directives: [OwlCarousel],
    templateUrl: 'gameInfo.component.html',
    styleUrls: ['gameInfo.component.css', 'materialize.css', 'mystyle.css', 'font-awesome.min.css']
})
export class GameInfoComponent implements OnInit{
    currentGame: Game ;

    GameName: string;

    constructor(public gameService:GameService, private route:ActivatedRoute) {
    }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.GameName = this.route.snapshot.parent.params['game'];
            if (this.GameName) {
                this.gameService.getGame(this.GameName)
                    .subscribe(
                        currentGame => this.currentGame = currentGame, //Bind to view
                        err => {
                            // Log errors if any
                            console.log(err);
                        });
            }
        });

    }

}