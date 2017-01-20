/**
 * Created by rajab on 1/19/2017.
 */
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { GameService } from './game.service';
import {Game} from './game';
import {Category} from './category';
import {ActivatedRoute, Router} from '@angular/router';
import any = jasmine.any;
import {filters} from './filters'

@Component({
    moduleId : module.id,
    selector: 'search-page',

    // directives: [OwlCarousel],
    templateUrl: 'searchPage.component.html',
    styleUrls: ['gameCard.component.css','gameDetail.component.css','searchPage.component.css', 'materialize.css', 'mystyle.css', 'font-awesome.min.css']
})
export class SearchPageComponent implements OnInit {

    games : Array<Game> = [];
    searched: string;
    filters: filters;
    clicked: Array<boolean> = [false, false,false,false,false,false,false,false,false];
    clickedNum: Array<boolean> = [false, false,false,false,false,false,false,false,false];
    offset: number = 0;
    finished = false;

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

    press(n: number, s:string){
        if(!this.clicked[n]){
            this.clicked[n] = true;
            if(!this.filters)
                this.filters = new filters([], [s]);
            else {
                this.filters.categories.push(s);
            }
        } else {
            this.clicked[n] = false;
            if(this.filters)
                var index = this.filters.categories.indexOf(s,0);
                if(index>-1)
                    this.filters.categories.splice(index, 1);
        }
        if(this.filters)
            this.getResults();
    }

    pressNum(n:number){
        var s = 5-n;
        if(!this.clicked[n]){
            this.clicked[n] = true;
            if(!this.filters)
                this.filters = new filters([s], []);
            else {
                this.filters.rates.push(s);
            }
        } else {
            this.clicked[n] = false;
            if(this.filters)
                var index = this.filters.rates.indexOf(s,0);
            if(index>-1)
                this.filters.rates.splice(index, 1);
        }

        if(this.filters)
            this.getResults();
    }

    getResults(){
        console.log(this.filters);
        this.gameService.postFilter(this.filters, this.offset)
            .subscribe(
                results => {for(let r of results) this.games.push(r);
                    if(results.length!=0)
                        this.offset += results.length;
                    else
                        this.finished = true;}, //Bind to view
                err => {
                    // Log errors if any
                    console.log(err);
                });
    }

}