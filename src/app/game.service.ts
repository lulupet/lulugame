import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  pile = [];

  constructor() { }

  newGame() {

    var arr = Array.from({length: (99 - 2)}, (v, k) => k + 2);
    var i, j, temp;

    for (i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    this.pile = arr;
  }
}
