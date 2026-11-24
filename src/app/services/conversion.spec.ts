import { TestBed } from '@angular/core/testing';
import { Conversion } from './conversion';

describe('Conversion', () => {
  let service: Conversion;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Conversion);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should convert meters to miles', () => {
    const result = service.convert(1000, 'meters', 'miles', 'distance');
    expect(result).toBeCloseTo(0.621371, 5);
  });

  it('should convert grams to pounds', () => {
    const result = service.convert(1000, 'grams', 'pounds', 'weight');
    expect(result).toBeCloseTo(2.20462, 5);
  });

  it('should convert Celsius to Fahrenheit', () => {
    const result = service.convert(0, 'celsius', 'fahrenheit', 'temperature');
    expect(result).toBeCloseTo(32, 5);
  });

  it('should return input value when from and to units are the same', () => {
    const value = 42;
    const result = service.convert(value, 'meters', 'meters', 'distance');
    expect(result).toBe(value);
  });

  it('should return NaN for invalid input', () => {
    const result = service.convert(NaN, 'meters', 'miles', 'distance');
    expect(result).toBeNaN();
  });
});
