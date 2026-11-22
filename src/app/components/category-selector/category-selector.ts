import { Component, input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ConversionCategory } from '../../models/converter.model';

@Component({
  imports: [MatButtonModule, MatIconModule],
  selector: 'app-category-selector',
  styleUrl: './category-selector.css',
  templateUrl: './category-selector.html',
})
export class CategorySelector {
  categories = input.required<ConversionCategory[]>();
  selectedCategoryId = input.required<string>();

  categorySelected = output<ConversionCategory>();

  selectCategory(category: ConversionCategory): void {
    this.categorySelected.emit(category);
  }
}
