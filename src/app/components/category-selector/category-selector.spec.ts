import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategorySelector } from './category-selector';
import { ConversionCategory } from '../../models/converter.model';
import { By } from '@angular/platform-browser';

describe('CategorySelector', () => {
  let component: CategorySelector;
  let fixture: ComponentFixture<CategorySelector>;

  const testCategories: ConversionCategory[] = [
    {
      id: 'distance',
      name: 'Distance',
      icon: 'straighten',
      units: [],
    },
    {
      id: 'weight',
      name: 'Weight',
      icon: 'scale',
      units: [],
    },
    {
      id: 'temperature',
      name: 'Temperature',
      icon: 'device_thermostat',
      units: [],
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategorySelector],
    }).compileComponents();

    fixture = TestBed.createComponent(CategorySelector);
    component = fixture.componentInstance;

    fixture.componentRef.setInput('categories', testCategories);
    fixture.componentRef.setInput('selectedCategoryId', 'distance');

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display all category buttons', () => {
    const buttons = fixture.debugElement.queryAll(By.css('button'));

    expect(buttons.length).toBe(3);
  });

  it('should display category names on buttons', () => {
    const buttons = fixture.debugElement.queryAll(By.css('button'));

    const buttonTexts = buttons.map((button) => {
      const icon = button.nativeElement.querySelector('mat-icon');
      const text = button.nativeElement.textContent;

      return text.replace(icon?.textContent ?? '', '').trim();
    });

    expect(buttonTexts).toContain('Distance');
    expect(buttonTexts).toContain('Weight');
    expect(buttonTexts).toContain('Temperature');
  });

  it('should emit the selected category', () => {
    let emittedCategory: ConversionCategory | undefined;

    component.categorySelected.subscribe((category) => {
      emittedCategory = category;
    });

    component.selectCategory(testCategories[1]);

    expect(emittedCategory).toEqual(testCategories[1]);
  });

  it('should mark the selected category button', () => {
    const selectedButton = fixture.debugElement.query(By.css('button.selected'));

    expect(selectedButton).toBeTruthy();
    expect(selectedButton.nativeElement.textContent).toContain('Distance');
  });
});
