/**
 * Created by rajab on 1/20/2017.
 */
/**
 * Created by rajab on 1/19/2017.
 */
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { GameService } from './game.service';
import {Record} from './record'
import {Game} from "./game";
import {ActivatedRoute} from '@angular/router'
@Component({
    moduleId : module.id,
    selector: 'ranking-page',

    // directives: [OwlCarousel],
    templateUrl: 'ranking.component.html',
    styleUrls: ['ranking.component.css', 'styles/hw2-global.css', 'styles/leaderboard.css', 'materialize.css', 'mystyle.css', 'font-awesome.min.css']
})
export class RankingPageComponent implements OnInit{
    curGameName: string;
    records: Array<Record> = [] ;
    constructor(public gameService: GameService,private route: ActivatedRoute){
    }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.curGameName = this.route.snapshot.parent.params['game'];
            if (this.curGameName) {
                this.gameService.getLeaderboard(this.curGameName)
                    .subscribe(
                        records => this.records = records, //Bind to view
                        err => {
                            // Log errors if any
                            console.log(err);
                        });
            }
        });
    }
    // records: Array<Record> = [
    //     {
    //         player : {name: 'کریم کریم کریم', URL: './assets/img/CEIT.png'},
    //         score: 12000,
    //         level: 5,
    //         displacement: 170
    //     },
    //     {
    //         player : {name: 'کریم اون یکی کریم', URL: './assets/img/CEIT.png'},
    //         score: 122000,
    //         level: 7,
    //         displacement: 140
    //     },
    //     {
    //         player : {name: 'این یکی  کریم کریم', URL: './assets/img/CEIT.png'},
    //         score: 842000,
    //         level: 12,
    //         displacement: -20
    //     },
    //     {
    //         player : {name: 'کریم وسطی کریم', URL: './assets/img/CEIT.png'},
    //         score: 1800,
    //         level: 7,
    //         displacement: -10
    //     },
    //     {
    //         player : {name: 'کریم کریم برو بابا', URL: './assets/img/CEIT.png'},
    //         score: 450000,
    //         level: 9,
    //         displacement: 170
    //     },
    //     {
    //         player : {name: 'کریم بیا بابا کریم', URL: './assets/img/CEIT.png'},
    //         score: 870000,
    //         level: 12,
    //         displacement: 900
    //     }
    // ]
}