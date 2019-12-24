import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HandComponent } from './hand/hand.component';
import { StacksComponent } from './stacks/stacks.component';
import { GameService } from './game.service';

@NgModule({
  declarations: [
    AppComponent,
    HandComponent,
    StacksComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
