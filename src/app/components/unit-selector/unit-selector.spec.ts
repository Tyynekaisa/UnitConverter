import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UnitSelector } from './unit-selector';
import { ConversionUnit } from '../../models/converter.model';
import { By } from '@angular/platform-browser';

describe('UnitSelector', () => {
  let component: UnitSelector;
  let fixture: ComponentFixture<UnitSelector>;

  const testUnits: ConversionUnit[] = [
    { id: 'meters', name: 'Meters', symbol: 'm' },
    { id: 'kilometers', name: 'Kilometers', symbol: 'km' },
    { id: 'miles', name: 'Miles', symbol: 'mi' },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnitSelector],
    }).compileComponents();

    fixture = TestBed.createComponent(UnitSelector);
    component = fixture.componentInstance;

    fixture.componentRef.setInput('units', testUnits);
    fixture.componentRef.setInput('selectedUnitId', 'meters');

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display all available units', () => {
    const select = fixture.debugElement.query(By.css('mat-select'));

    expect(select).toBeTruthy();
  });

  it('should emit the selected unit', () => {
    let emittedUnit: ConversionUnit | undefined;

    component.unitSelected.subscribe((unit) => {
      emittedUnit = unit;
    });

    component.selectUnit('kilometers');

    expect(emittedUnit).toEqual(testUnits[1]);
  });
});
