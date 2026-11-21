import { Component, signal, inject } from '@angular/core';
import { CategorySelector } from '../category-selector/category-selector';
import { UnitSelector } from '../unit-selector/unit-selector';
import { ConversionCategory, ConversionUnit } from '../../models/converter.model';
import { CONVERSION_CATEGORIES } from '../../data/conversion-data';
import { Conversion } from '../../services/conversion';
import { MatButtonModule } from '@angular/material/button';

@Component({
  imports: [CategorySelector, UnitSelector, MatButtonModule],
  selector: 'app-converter',
  styleUrl: './converter.css',
  templateUrl: './converter.html',
})
export class Converter {
  categories = CONVERSION_CATEGORIES;
  private conversionService = inject(Conversion);

  selectedCategory = signal<ConversionCategory>(CONVERSION_CATEGORIES[0]);

  fromUnit = signal<ConversionUnit>(CONVERSION_CATEGORIES[0].units[0]);

  toUnit = signal<ConversionUnit>(CONVERSION_CATEGORIES[0].units[1]);

  toSymbol = signal<string>(CONVERSION_CATEGORIES[0].units[1].symbol);

  inputValue = signal<number>(1);

  result = signal<number | null>(null);

  selectCategory(category: ConversionCategory): void {
    this.selectedCategory.set(category);
    this.fromUnit.set(category.units[0]);
    this.toUnit.set(category.units[1]);
    this.toSymbol.set(category.units[1].symbol);
  }

  selectFromUnit(unit: ConversionUnit): void {
    this.fromUnit.set(unit);
  }

  selectToUnit(unit: ConversionUnit): void {
    this.toUnit.set(unit);
  }

  selectToSymbol(unit: ConversionUnit): void {
    this.toSymbol.set(unit.symbol);
  }

  updateInputValue(value: string): void {
    this.inputValue.set(Number(value));
  }

  convert(): void {
    const convertedValue = this.conversionService.convert(
      this.inputValue(),
      this.fromUnit().id,
      this.toUnit().id,
      this.selectedCategory().id,
    );

    const roundedResult = Math.round(convertedValue * 100000) / 100000;
    const resultSymbol = this.toUnit().symbol;

    this.result.set(roundedResult);
    this.toSymbol.set(resultSymbol);
  }
}
