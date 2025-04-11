// src/app/drink.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DrinkService {
  private ingredientCosts: any = {
    Coffee: 0.75,
    'Decaf Coffee': 0.75,
    Sugar: 0.25,
    Cream: 0.25,
    'Steamed Milk': 0.35,
    'Foamed Milk': 0.35,
    Espresso: 1.10,
    Cocoa: 0.90,
    'Whipped Cream': 1.00,
  };

  private drinks: any = {
    Coffee: [
      { name: 'Coffee', quantity: 3 },
      { name: 'Sugar', quantity: 1 },
      { name: 'Cream', quantity: 1 },
    ],
    'Decaf Coffee': [
      { name: 'Decaf Coffee', quantity: 3 },
      { name: 'Sugar', quantity: 1 },
      { name: 'Cream', quantity: 1 },
    ],
    'Caffe Latte': [
      { name: 'Espresso', quantity: 2 },
      { name: 'Steamed Milk', quantity: 1 },
    ],
    'Caffe Americano': [
      { name: 'Espresso', quantity: 3 },
    ],
    'Caffe Mocha': [
      { name: 'Espresso', quantity: 1 },
      { name: 'Cocoa', quantity: 1 },
      { name: 'Steamed Milk', quantity: 1 },
      { name: 'Whipped Cream', quantity: 1 },
    ],
    'Cappuccino': [
      { name: 'Espresso', quantity: 2 },
      { name: 'Steamed Milk', quantity: 1 },
      { name: 'Foamed Milk', quantity: 1 },
    ],
  };

  // Function to calculate the cost of a drink
  calculateDrinkCost(drinkName: string): number {
    const drinkIngredients = this.drinks[drinkName];
    let totalCost = 0;

    drinkIngredients.forEach((ingredient: any) => {
      const ingredientCost = this.ingredientCosts[ingredient.name];
      totalCost += ingredientCost * ingredient.quantity;
    });

    return totalCost;
  }
}
