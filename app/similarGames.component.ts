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
import {Router, ActivatedRoute} from '@angular/router';

@Component({
    moduleId : module.id,
    selector: 'similar-games',

    // directives: [OwlCarousel],
    templateUrl: 'similarGames.component.html',
    styleUrls: ['gameCard.component.css', 'starsShow.component.css','similarGames.component.css', 'materialize.css', 'mystyle.css', 'font-awesome.min.css']
})
export class SimilarGamesComponent implements OnInit{
    games : Array<Game> ;
    curGameName: string;


    constructor(public gameService: GameService, private router: Router, private route: ActivatedRoute){
    }


    goTo(gameTitle: string){
        this.router.navigate(['/',gameTitle]);
    }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.curGameName = this.route.snapshot.parent.params['game'];
            if (this.curGameName) {
                this.gameService.getSimilar(this.curGameName)
                    .subscribe(
                        game => this.games = game, //Bind to view
                        err => {
                            // Log errors if any
                            console.log(err);
                        });
            }
        });
    }


}