import { Component, OnInit } from '@angular/core';

import { GameEngine } from './game-engine';
import { NetworkEngine } from './network-engine';

@Component({
  selector: 'app-online-game',
  templateUrl: './online-game.component.html',
  styleUrls: ['./online-game.component.css']
})
export class OnlineGameComponent implements OnInit {

  engine: GameEngine;

  constructor() { }

  ngOnInit() {
    this.engine = new GameEngine(new NetworkEngine());
  }
}
