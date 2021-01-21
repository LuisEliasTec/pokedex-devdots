import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-moves',
  templateUrl: './moves.component.html',
  styleUrls: ['./moves.component.css']
})
export class MovesComponent implements OnInit {
  // Input
  @Input() moves: any;
  
  //Booleans
  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {}
}
