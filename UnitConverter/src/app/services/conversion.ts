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

  // Conversion methods for distance units
  // meters to...
  //   metersToMiles(value: number): number {
  //     return value / 1609.34;
  //   }
  //   metersToLightYears(value: number): number {
  //     return value / 9.461e15;
  //   }
  //   metersToAu(value: number): number {
  //     return value / 149597870700;
  //   }
  //   // miles to...
  //   milesToMeters(value: number): number {
  //     return value * 1609.34;
  //   }
  //   milesToLightYears(value: number): number {
  //     return value / 5.879e12;
  //   }
  //   milesToAu(value: number): number {
  //     return value / 92955807.3;
  //   }
  //   // light years to...
  //   lightYearsToMeters(value: number): number {
  //     return value * 9.461e15;
  //   }
  //   lightYearsToMiles(value: number): number {
  //     return value * 5.879e12;
  //   }
  //   lightYearsToAu(value: number): number {
  //     return value * 63241.1;
  //   }
  //   // astronomical units to...
  //   auToMeters(value: number): number {
  //     return value * 149597870700;
  //   }
  //   auToMiles(value: number): number {
  //     return value * 92955807.3;
  //   }
  //   auToLightYears(value: number): number {
  //     return value / 63241.1;
  //   }

  //   // Conversion methods for weight units
  //   // carats to...
  //   caratsToGrams(value: number): number {
  //     return value * 0.2;
  //   }
  //   caratsToOunces(value: number): number {
  //     return value * 0.00705479;
  //   }
  //   // grams to...
  //   gramsToCarats(value: number): number {
  //     return value * 5;
  //   }
  //   gramsToOunces(value: number): number {
  //     return value * 0.03527396;
  //   }
  //   // ounces to...
  //   ouncesToCarats(value: number): number {
  //     return value * 141.7476;
  //   }
  //   ouncesToGrams(value: number): number {
  //     return value * 28.3495;
  //   }

  //   // Conversion methods for temperature units
  //   // Celsius to...
  //   celsiusToFahrenheit(value: number): number {
  //     return (value * 9) / 5 + 32;
  //   }
  //   celsiusToKelvin(value: number): number {
  //     return value + 273.15;
  //   }
  //   // Fahrenheit to...
  //   fahrenheitToCelsius(value: number): number {
  //     return ((value - 32) * 5) / 9;
  //   }
  //   fahrenheitToKelvin(value: number): number {
  //     return ((value - 32) * 5) / 9 + 273.15;
  //   }
  //   // Kelvin to...
  //   kelvinToCelsius(value: number): number {
  //     return value - 273.15;
  //   }
  //   kelvinToFahrenheit(value: number): number {
  //     return ((value - 273.15) * 9) / 5 + 32;
  //   }

  //   // If from and to units are the same, return the input value
  //   identityConversion(value: number): number {
  //     return value;
  //   }
}
