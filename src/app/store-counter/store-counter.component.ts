import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { decrementAction, incrementAction, reloadAction, saveAction } from "./store/counter.actions";
import { selectCount } from "./store/counter.selector";

@Component({
    selector: 'app-store-counter',
    templateUrl: './store-counter.component.html'
})
export class StoreCounterComponent {
    count$: Observable<number> ;

    constructor(private store: Store<{counter: number}>) {
        //this.count$ = this.store.select('counter');
        this.count$ = this.store.select(selectCount);
    }
    
    incrementCounter() {
        const larray = [{inc: 1}, {inc:2}, {inc:3}];
        let  carray = [...larray];
        carray[1] = carray[0];
        console.log( ...larray);
        console.log("carray");
        console.log(...carray);

        this.store.dispatch(incrementAction({inc:2}));
    }

    decrementCounter() {
        this.store.dispatch(decrementAction({dec:2}));
    }
    
    saveCounter() {
        this.store.dispatch(saveAction());
    }
    
    reloadCounter() {
        this.store.dispatch(reloadAction());
    }
}
