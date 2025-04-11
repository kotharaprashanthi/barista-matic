// src/app/services/order.service.ts
import { Injectable } from '@angular/core';
import { InventoryService } from './inventory.service';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private inventoryService: InventoryService) { }

  // Order a drink if ingredients are available
  orderDrink(drink: any): boolean {
    if (this.inventoryService.checkInventory(drink.ingredients)) {
      this.inventoryService.deductIngredients(drink.ingredients);
      return true;
    }
    return false;
  }

  // Check if a drink can be ordered based on available ingredients
  canOrderDrink(drink: any): boolean {
    return this.inventoryService.checkInventory(drink.ingredients);
  }
}
