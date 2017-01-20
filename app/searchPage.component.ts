/**
 * Created by rajab on 1/19/2017.
 */
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { GameService } from './game.service';
import {Game} from './game';
import {Category} from './category';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    moduleId : module.id,
    selector: 'search-page',

    // directives: [OwlCarousel],
    templateUrl: 'searchPage.component.html',
    styleUrls: ['gameCard.component.css','gameDetail.component.css','searchPage.component.css', 'materialize.css', 'mystyle.css', 'font-awesome.min.css']
})
export class SearchPageComponent implements OnInit {

    games : Array<Game>;
    searched: string;

    constructor(private route: ActivatedRoute, public gameService: GameService, private router: Router){

    }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.searched = params['keyword'];
            if (this.searched) {
                this.gameService.search(this.searched)
                    .subscribe(
                        game => this.games = game, //Bind to view
                        err => {
                            // Log errors if any
                            console.log(err);
                        });
            }
        });
    }

    goTo(gameTitle: string){
        this.router.navigate(['/',gameTitle]);
    }

}