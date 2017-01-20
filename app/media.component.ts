/**
 * Created by rajab on 1/20/2017.
 */
/**
 * Created by rajab on 1/19/2017.
 */
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { GameService } from './game.service';
import { Game } from './game';
import {Comment} from './comment';

@Component({
    moduleId : module.id,
    selector: 'media-page',

    // directives: [OwlCarousel],
    templateUrl: 'media.component.html',
    styleUrls: ['media.component.css', 'materialize.css', 'mystyle.css', 'font-awesome.min.css']
})
export class MediaPageComponent implements OnInit{
    ngOnInit(): void {
    }

}