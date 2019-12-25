import { Component, OnInit } from '@angular/core';
import { GameService } from './game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  pile: any[];

  constructor(private gameService: GameService) {}

  ngOnInit() {
    this.gameService.newGame();
    this.pile = this.gameService.pile;
  }
}
