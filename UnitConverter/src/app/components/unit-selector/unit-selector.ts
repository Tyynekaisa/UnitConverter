// unit-selector.ts
import { Component, input, output } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ConversionUnit } from '../../models/converter.model';

@Component({
  imports: [MatSelectModule, MatFormFieldModule],
  selector: 'app-unit-selector',
  styleUrl: './unit-selector.css',
  templateUrl: './unit-selector.html',
})
export class UnitSelector {
  units = input.required<ConversionUnit[]>();
  selectedUnitId = input.required<string>();

  unitSelected = output<ConversionUnit>();

  selectUnit(unitId: string): void {
    const selectedUnit = this.units().find((unit) => unit.id === unitId);

    if (selectedUnit) {
      this.unitSelected.emit(selectedUnit);
    }
  }
}
