import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'starsShow',
  templateUrl: 'starsShow.component.html',
  styleUrls: [ 'starsShow.component.css' ]
})
export class starsShow  {
  rate = 100;

  
  
  show(rate: number): void {
  	this.rate = rate;
  }	

}