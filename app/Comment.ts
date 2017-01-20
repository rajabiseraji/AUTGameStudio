import {Player} from './Player';
import {Game} from './game';

export class Comment {
 constructor( public text:string,
  public rate: number,
  public date:string,
  public player: Player,
  public game: Game){};
}
