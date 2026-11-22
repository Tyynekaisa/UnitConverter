import { Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { CategorySelector } from './components/category-selector/category-selector';
import { Converter } from './components/converter/converter';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { ConversionCategory } from './models/converter.model';
import { CONVERSION_CATEGORIES } from './data/conversion-data';

@Component({
  selector: 'app-root',
  imports: [Converter, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
