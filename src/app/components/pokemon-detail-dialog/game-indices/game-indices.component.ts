import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-game-indices',
  templateUrl: './game-indices.component.html',
  styleUrls: ['./game-indices.component.css']
})
export class GameIndicesComponent implements OnInit {
  // Input
  @Input() game_indices: any;
  
  constructor() { }

  ngOnInit(): void {}
}
