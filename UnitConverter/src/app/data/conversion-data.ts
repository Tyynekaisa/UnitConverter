import { ConversionCategory } from '../models/converter.model';

export const CONVERSION_CATEGORIES: ConversionCategory[] = [
  {
    id: 'distance',
    name: 'Distance',
    icon: 'straighten',
    units: [
      { id: 'millimeters', name: 'Millimeters', symbol: 'mm' },
      { id: 'centimeters', name: 'Centimeters', symbol: 'cm' },
      { id: 'meters', name: 'Meters', symbol: 'm' },
      { id: 'kilometers', name: 'Kilometers', symbol: 'km' },
      { id: 'inches', name: 'Inches', symbol: 'in' },
      { id: 'feet', name: 'Feet', symbol: 'ft' },
      { id: 'yards', name: 'Yards', symbol: 'yd' },
      { id: 'miles', name: 'Miles', symbol: 'mi' },
      { id: 'light_years', name: 'Light Years', symbol: 'ly' },
      { id: 'astronomical_units', name: 'Astronomical Units', symbol: 'AU' },
    ],
  },
  {
    id: 'weight',
    name: 'Weight',
    icon: 'scale',
    units: [
      { id: 'grams', name: 'Grams', symbol: 'g' },
      { id: 'kilograms', name: 'Kilograms', symbol: 'kg' },
      { id: 'tonnes', name: 'Tonnes', symbol: 't' },
      { id: 'carats', name: 'Carats', symbol: 'ct' },
      { id: 'ounces', name: 'Ounces', symbol: 'oz' },
      { id: 'pounds', name: 'Pounds', symbol: 'lb' },
      { id: 'stones', name: 'Stones', symbol: 'st' },
    ],
  },
  {
    id: 'temperature',
    name: 'Temperature',
    icon: 'device_thermostat',
    units: [
      { id: 'celsius', name: 'Celsius', symbol: '°C' },
      { id: 'fahrenheit', name: 'Fahrenheit', symbol: '°F' },
      { id: 'kelvin', name: 'Kelvin', symbol: 'K' },
    ],
  },
];
