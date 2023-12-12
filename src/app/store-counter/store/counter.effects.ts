import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { loadAction, reloadAction, saveAction } from "./counter.actions";
import { of, switchMap, tap, withLatestFrom } from "rxjs";
import { Store } from "@ngrx/store";
import { selectCount } from "./counter.selector";

@Injectable()
export class CounterEffects {
    constructor(private actions$: Actions, private store: Store<{counter: number}>) {}
    saveCounterEffect$ = createEffect(
        () => this.actions$.pipe(
                ofType(saveAction),
                withLatestFrom(this.store.select(selectCount)),
                tap(
                    ([action, counter]) => {                        
                        console.log(counter);
                        localStorage.setItem('counter', counter.toString());
                    }
                )
            )
        , {dispatch: false}
    );

    reloadActionEffect$ = createEffect(
        () => this.actions$.pipe(
            ofType(reloadAction),
            switchMap(
                () => {
                    const count = localStorage.getItem('counter');
                    if(count) {
                        return of(loadAction({counter: +count}));
                    }
                    return of(loadAction({counter: 0}));
                }
            )
        )
    );
}