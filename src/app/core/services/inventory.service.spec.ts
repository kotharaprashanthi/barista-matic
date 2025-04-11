import { TestBed } from '@angular/core/testing';

import { InventoryService } from './inventory.service';

describe('InventoryService', () => {
  let service: InventoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InventoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a full inventory with 10 units of each ingredient', () => {
    const inventory = service.getInventory();
    expect(inventory.length).toBe(9);
    inventory.forEach(item => {
      expect(item.quantity).toBe(10);
    });
  });

  it('should restock all ingredients to 10 units', () => {
    // First deduct some items
    service.deductIngredients([{ name: 'Coffee', quantity: 5 }]);
    let inventory = service.getInventory();
    let coffee = inventory.find(i => i.name === 'Coffee');
    expect(coffee?.quantity).toBe(5);

    // Now restock
    service.restock();
    inventory = service.getInventory();
    inventory.forEach(item => {
      expect(item.quantity).toBe(10);
    });
  });

  it('should deduct ingredients correctly when a drink is ordered', () => {
    service.deductIngredients([
      { name: 'Coffee', quantity: 3 },
      { name: 'Sugar', quantity: 1 },
      { name: 'Cream', quantity: 1 },
    ]);

    const inventory = service.getInventory();
    expect(inventory.find(i => i.name === 'Coffee')?.quantity).toBe(7);
    expect(inventory.find(i => i.name === 'Sugar')?.quantity).toBe(9);
    expect(inventory.find(i => i.name === 'Cream')?.quantity).toBe(9);
  });

  it('should check if ingredients are sufficient - returns true when available', () => {
    const canMakeDrink = service.checkInventory([
      { name: 'Coffee', quantity: 3 },
      { name: 'Sugar', quantity: 1 },
    ]);
    expect(canMakeDrink).toBeTrue();
  });

  it('should check if ingredients are sufficient - returns false when not available', () => {
    // First simulate usage to lower inventory
    service.deductIngredients([{ name: 'Coffee', quantity: 10 }]);

    const canMakeDrink = service.checkInventory([
      { name: 'Coffee', quantity: 1 }, // should be 0 now
    ]);
    expect(canMakeDrink).toBeFalse();
  });

});
