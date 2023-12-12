import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { BindingTestComponent } from './binding-test/binding-test.component';
import { DirectiveTestComponent } from './directive-test/directive-test.component';
import { GameComponent } from './game/game.component';
import { GameControlComponent } from './game/game-control/game-control.component';
import { OddComponent } from './game/odd/odd.component';
import { EvenComponent } from './game/even/even.component';
import { UserStatusComponent } from './user-status/user-status.component';
import { ActiveUserComponent } from './user-status/active-user/active-user.component';
import { InActiveUserComponent } from './user-status/inactive-user/inactive-user.component';
import { FormTestComponent } from './form-test/form-test.component';
import { ReactiveTestComponent } from './reactive-form-test/reactive-form-test.component';
import { PipeTestComponent } from './pipe-test/pipe-test.component';
import { ReverseStringPipe } from './pipe-test/reverse-string.pipe';
import { SortNamePipe } from './pipe-test/sort-name.pipe';
import { StoreModule } from '@ngrx/store';
import { StoreCounterComponent } from './store-counter/store-counter.component';
import { counterReducer } from './store-counter/store/counter.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CounterEffects } from './store-counter/store/counter.effects';
import { StandaloneTestComponent } from './standalone-test/standalone-test.component';
import { SignalTestComponent } from './signal-test/signal-test.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingTestComponent,
    DirectiveTestComponent,
    GameComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    UserStatusComponent,
    ActiveUserComponent,
    InActiveUserComponent,
    FormTestComponent,
    ReactiveTestComponent,
    PipeTestComponent,
    ReverseStringPipe,
    SortNamePipe,
    StoreCounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({counter: counterReducer}, {}),
    EffectsModule.forRoot([CounterEffects]),
    StandaloneTestComponent,
    SignalTestComponent
  ],
  exports: [
    StandaloneTestComponent,
    SignalTestComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
