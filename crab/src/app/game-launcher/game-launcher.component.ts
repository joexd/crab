import { Component, OnInit } from '@angular/core';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'crab-game-launcher',
  templateUrl: './game-launcher.component.html',
  styleUrls: ['./game-launcher.component.scss']
})
export class GameLauncherComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
