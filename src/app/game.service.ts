import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  pile = [];
  hand = [];

  constructor() { }

  newGame() {

    var arr = Array.from({length: (99 - 2)}, (v, k) => k + 2);
    var j, temp;

    for (var i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    this.pile = arr;

    for (var i = 0; i < 8; i++) {
      this.hand.push(this.pile.pop());
    }
  }
}
