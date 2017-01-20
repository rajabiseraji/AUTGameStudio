import { Component } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  moduleId : module.id, 
  selector: 'my-app',

  // directives: [OwlCarousel],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css', 'mystyle.css', 'font-awesome.min.css']
})
export class AppComponent {
  constructor(private router: Router){

  }

  goTo(token: string){
    this.router.navigate(['list/',token]);
  }


}
