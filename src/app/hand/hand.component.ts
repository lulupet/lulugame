import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-hand',
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.scss']
})
export class HandComponent implements OnInit {

  hand: any[];

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.hand = this.gameService.hand;
  }

  onDraw() {
    this.gameService.drawCards(1);
  }

}
