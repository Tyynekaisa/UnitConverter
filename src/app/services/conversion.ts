// conversion.ts
// Conversion service implements the conversion operations

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Conversion {
  private distanceFactors: Record<string, number> = {
    millimeters: 0.001,
    centimeters: 0.01,
    meters: 1,
    kilometers: 1000,
    inches: 0.0254,
    feet: 0.3048,
    yards: 0.9144,
    miles: 1609.34,
    light_years: 9.461e15,
    astronomical_units: 149597870700,
  };

  private weightFactors: Record<string, number> = {
    carats: 0.2,
    grams: 1,
    kilograms: 1000,
    tonnes: 1000000,
    pounds: 453.592,
    stones: 6350.29,
    ounces: 28.3495,
  };

  convert(value: number, fromUnit: string, toUnit: string, category: string): number {
    if (fromUnit === toUnit) {
      return value;
    }

    switch (category) {
      case 'distance': {
        const fromFactor = this.distanceFactors[fromUnit];
        const toFactor = this.distanceFactors[toUnit];

        if (fromFactor === undefined || toFactor === undefined) {
          throw new Error('Unknown distance unit');
        }

        return (value * fromFactor) / toFactor;
      }

      case 'weight': {
        const fromFactor = this.weightFactors[fromUnit];
        const toFactor = this.weightFactors[toUnit];

        if (fromFactor === undefined || toFactor === undefined) {
          throw new Error('Unknown weight unit');
        }

        return (value * fromFactor) / toFactor;
      }

      case 'temperature': {
        if (fromUnit === 'celsius' && toUnit === 'fahrenheit') {
          return (value * 9) / 5 + 32;
        } else if (fromUnit === 'fahrenheit' && toUnit === 'celsius') {
          return ((value - 32) * 5) / 9;
        } else if (fromUnit === 'celsius' && toUnit === 'kelvin') {
          return value + 273.15;
        } else if (fromUnit === 'kelvin' && toUnit === 'celsius') {
          return value - 273.15;
        } else if (fromUnit === 'fahrenheit' && toUnit === 'kelvin') {
          return ((value - 32) * 5) / 9 + 273.15;
        } else if (fromUnit === 'kelvin' && toUnit === 'fahrenheit') {
          return ((value - 273.15) * 9) / 5 + 32;
        } else {
          throw new Error('Unknown temperature unit');
        }
      }

      default:
        throw new Error(`Unsupported category: ${category}`);
    }
  }
}
