/**
 * Created by rajab on 1/20/2017.
 */
import {Player} from './player'
export class Record {
    constructor(
     public   player: Player,
    public score: number,
    public level: number,
    public displacement: number
    ){};
}