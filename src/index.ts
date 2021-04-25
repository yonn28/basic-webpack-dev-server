import { combineLatest, fromEvent, of } from "rxjs"
import { pluck, startWith } from "rxjs/operators"



const gameSize = 1000;
const creategameObject = ( x: any ,y: any ) => ({ x, y })


combineLatest(
    of({ ...creategameObject(gameSize/2 , gameSize/2 -1) , score: 0, lives: 3 }),
    fromEvent(document, 'keyup').pipe(startWith(''),pluck('code'))
)


