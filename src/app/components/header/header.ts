import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

export interface Tile {
  cols: number;
  rows: number;
  content: string;
}

@Component({
  imports: [MatIconModule],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {}
