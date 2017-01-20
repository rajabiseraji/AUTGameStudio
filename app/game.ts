
import {Category} from './Category';

export class Game {



  constructor(
  public title: string,
  public abstract:string,
  public info:string,	
  public Complete:string,
  public rate: number, //Decimal 2,1 (0.0 to 5.0)	Average rate according to players rates (comments)
  public large_image:string,	//The game's large-sized image proper for homepage's slider
  public small_image:string,
  public number_of_comments: number) { }
}
