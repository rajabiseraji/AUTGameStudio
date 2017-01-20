/**
 * Created by rajab on 1/18/2017.
 */
import { Component, OnInit } from '@angular/core';
// import { OwlCarousel } from './owl-carousel.component';
import { GameService } from './game.service';
import { Game } from './game';
import {Comment} from './comment';
import { Player } from './player';
import { Tutorial } from './tutorial';

@Component({
    moduleId : module.id,
    selector: 'game-info',

    // directives: [OwlCarousel],
    templateUrl: 'gameInfo.component.html',
    styleUrls: ['gameInfo.component.css', 'materialize.css', 'mystyle.css', 'font-awesome.min.css']
})
export class GameInfoComponent implements OnInit{
    tmp: string = "لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد. معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند که صفحه طراحی یا صفحه بندی شده بعد از اینکه متن در آن قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته شده‌است. از آنجایی که طراحان عموما نویسنده متن نیستند و وظیفه رعایت حق تکثیر متون را ندارند و در همان حال کار آنها به نوعی وابسته به متن می‌باشد آنها با استفاده از محتویات ساختگی، صفحه گرافیکی خود را صفحه‌آرایی می‌کنند تا مرحله طراحی و صفحه‌بندی را به پایان برند.";
    currentGame: Game = {
        title: 'بازی GTA V',
        abstract: 'این بازی چرت است و پرت است واین چیزا و اینا و اینا و این چیزا',
        info: this.tmp,
        Complete: 'کامل کامل کامل',
        rate: 2,
        large_image: '/app/img/23815901722_4d1edf4ed1_b.jpg',
        small_image: '/app/img/23815901722_4d1edf4ed1_b.jpg',
        number_of_comments: 50
    };

    ngOnInit(): void {

    }

}