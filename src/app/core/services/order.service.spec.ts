// src/app/services/order.service.spec.ts
import { TestBed } from '@angular/core/testing';
import { OrderService } from './order.service';
import { InventoryService } from './inventory.service';

describe('OrderService', () => {
  let service: OrderService;
  let inventoryServiceSpy: jasmine.SpyObj<InventoryService>;

  const mockDrink = {
    name: 'Coffee',
    ingredients: [
      { name: 'Coffee', quantity: 3 },
      { name: 'Sugar', quantity: 1 },
      { name: 'Cream', quantity: 1 },
    ]
  };

  beforeEach(() => {
    const spy = jasmine.createSpyObj('InventoryService', ['checkInventory', 'deductIngredients']);

    TestBed.configureTestingModule({
      providers: [
        OrderService,
        { provide: InventoryService, useValue: spy }
      ]
    });

    service = TestBed.inject(OrderService);
    inventoryServiceSpy = TestBed.inject(InventoryService) as jasmine.SpyObj<InventoryService>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return true and deduct ingredients when drink can be ordered', () => {
    inventoryServiceSpy.checkInventory.and.returnValue(true);

    const result = service.orderDrink(mockDrink);

    expect(result).toBeTrue();
    expect(inventoryServiceSpy.checkInventory).toHaveBeenCalledWith(mockDrink.ingredients);
    expect(inventoryServiceSpy.deductIngredients).toHaveBeenCalledWith(mockDrink.ingredients);
  });

  it('should return false and not deduct ingredients when drink cannot be ordered', () => {
    inventoryServiceSpy.checkInventory.and.returnValue(false);

    const result = service.orderDrink(mockDrink);

    expect(result).toBeFalse();
    expect(inventoryServiceSpy.checkInventory).toHaveBeenCalledWith(mockDrink.ingredients);
    expect(inventoryServiceSpy.deductIngredients).not.toHaveBeenCalled();
  });

  it('canOrderDrink should return true when inventory is sufficient', () => {
    inventoryServiceSpy.checkInventory.and.returnValue(true);
    expect(service.canOrderDrink(mockDrink)).toBeTrue();
  });

  it('canOrderDrink should return false when inventory is insufficient', () => {
    inventoryServiceSpy.checkInventory.and.returnValue(false);
    expect(service.canOrderDrink(mockDrink)).toBeFalse();
  });
});
