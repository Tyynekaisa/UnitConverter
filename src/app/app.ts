// app.ts
// Angular Unit Converter
// Anna-Kaisa Juhola

import { Component } from '@angular/core';
import { Converter } from './components/converter/converter';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Converter, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
