import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { StoreCounterComponent } from "./store-counter.component";
import { MockStore, provideMockStore } from "@ngrx/store/testing";
import { selectCount } from "./store/counter.selector";
import { By } from "@angular/platform-browser";
import * as fromCounterReducer from './store/counter.reducer';
import { Store } from "@ngrx/store";
import { Injector } from "@angular/core";


describe('StoreCounterComponent', () => {
    let store: MockStore;
    let fixture: ComponentFixture<StoreCounterComponent>;
    

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [StoreCounterComponent],
            providers: [provideMockStore({ initialState: { counter: 0 } })]
            });
        store = TestBed.inject(MockStore);
        }
    );
    it('should create the StoreCounterComponent app', () => {
        fixture = TestBed.createComponent(StoreCounterComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
      });
    it(`should test incrementCounter `, () => {
        const fixture = TestBed.createComponent(StoreCounterComponent);        
        fixture.detectChanges();
        const storeCounterComponent = fixture.componentInstance;
        storeCounterComponent.incrementCounter();       
        console.log(fixture.debugElement.query(By.css('.btn-success')).nativeNode);
        fixture.debugElement.query(By.css('.btn-success')).triggerEventHandler("click", ()=> console.log('triggered'));
        //fixture.debugElement.query(By.css('.btn-success')).nativeElement.click();
        fixture.detectChanges();
        const queryDivText = () =>
            //fixture.debugElement.queryAll(By.css('div'))[0].nativeNode.textContent;
            fixture.debugElement.query(By.all()).children[0].children[0].nativeElement.textContent;
        console.log(queryDivText());
        console.log(fixture.debugElement.query(By.all()));
        console.log(fixture.debugElement.query(By.all()).children[0].children[0].nativeElement.textContent);        
        expect(queryDivText().trim()).toBe('This is counter value: 0');     
    });
})