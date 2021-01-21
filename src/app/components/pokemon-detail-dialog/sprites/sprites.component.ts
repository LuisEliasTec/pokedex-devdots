import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sprites',
  templateUrl: './sprites.component.html',
  styleUrls: ['./sprites.component.css']
})
export class SpritesComponent implements OnInit {
  // Input
  @Input() sprites: any;

  constructor() { }

  ngOnInit(): void {}
}
