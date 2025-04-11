// src/app/services/inventory.service.ts
import { Injectable } from '@angular/core';

interface Ingredient {
  name: string;
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class InventoryService {
  private inventory: Ingredient[] = [
    { name: 'Coffee', quantity: 10 },
    { name: 'Decaf Coffee', quantity: 10 },
    { name: 'Sugar', quantity: 10 },
    { name: 'Cream', quantity: 10 },
    { name: 'Steamed Milk', quantity: 10 },
    { name: 'Foamed Milk', quantity: 10 },
    { name: 'Espresso', quantity: 10 },
    { name: 'Cocoa', quantity: 10 },
    { name: 'Whipped Cream', quantity: 10 },
  ];

  // Get current inventory
  getInventory() {
    return [...this.inventory];
  }

  // Restock ingredients
  restock() {
    this.inventory.forEach((item) => (item.quantity = 10));
  }

  // Deduct ingredients when a drink is ordered
  deductIngredients(drinkIngredients: { name: string; quantity: number }[]) {
    drinkIngredients.forEach((ingredient) => {
      const item = this.inventory.find((i) => i.name === ingredient.name);
      if (item) item.quantity -= ingredient.quantity;
    });
  }

  // Check if ingredients are available
  checkInventory(ingredients: { name: string; quantity: number }[]) {
    return ingredients.every((ingredient) => {
      const item = this.inventory.find((i) => i.name === ingredient.name);
      return item && item.quantity >= ingredient.quantity;
    });
  }
}
