import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-stacks',
  templateUrl: './stacks.component.html',
  styleUrls: ['./stacks.component.scss']
})
export class StacksComponent implements OnInit{

    stacks: any[];
  
    constructor(private gameService: GameService) { }
  
    ngOnInit() {
      this.stacks = this.gameService.stacks;
    }
}
