/**
 * Created by rajab on 1/17/2017.
 */
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrls: [ './styles/login.component.css', './styles/hw2-global.css' , './font-awesome.min.css']
})
export class LoginComponent implements OnInit {
    title = true;
    ngOnInit(): void {

    }

}