// src/app/drink.service.spec.ts
import { TestBed } from '@angular/core/testing';
import { DrinkService } from './drink.service';

describe('DrinkService', () => {
  let service: DrinkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DrinkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should calculate the correct cost for Coffee', () => {
    const cost = service.calculateDrinkCost('Coffee');
    // Coffee (3 x 0.75) + Sugar (1 x 0.25) + Cream (1 x 0.25) = 2.25 + 0.25 + 0.25 = 2.75
    expect(cost).toBeCloseTo(2.75);
  });

  it('should calculate the correct cost for Caffe Mocha', () => {
    const cost = service.calculateDrinkCost('Caffe Mocha');
    // Espresso (1 x 1.10) + Cocoa (1 x 0.90) + Steamed Milk (1 x 0.35) + Whipped Cream (1 x 1.00)
    const expected = 1.10 + 0.90 + 0.35 + 1.00;
    expect(cost).toBeCloseTo(expected);
  });

  it('should calculate the correct cost for Cappuccino', () => {
    const cost = service.calculateDrinkCost('Cappuccino');
    // Espresso (2 x 1.10) + Steamed Milk (1 x 0.35) + Foamed Milk (1 x 0.35)
    const expected = 2 * 1.10 + 0.35 + 0.35;
    expect(cost).toBeCloseTo(expected);
  });
});
