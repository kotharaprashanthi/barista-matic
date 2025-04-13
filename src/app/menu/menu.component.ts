import { Component } from '@angular/core';
import { OrderService } from '../core/services/order.service';
import { DrinkService } from '../core/services/drink.service';

@Component({
  selector: 'app-menu',
  standalone: false,
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  orderStatus: { [key: string]: string | boolean } = {}; // Track order status
  isProcessing: boolean = false; // Global processing flag
  isLoading: boolean = false;
  ingredientList = [
    'Coffee', 'Decaf Coffee', 'Sugar', 'Cream', 'Steamed Milk',
    'Foamed Milk', 'Espresso', 'Cocoa', 'Whipped Cream'
  ];

   ingredientPrices: any = {
    'Coffee': 0.75,
    'Decaf Coffee': 0.75,
    'Sugar': 0.25,
    'Cream': 0.25,
    'Steamed Milk': 0.35,
    'Foamed Milk': 0.35,
    'Espresso': 1.10,
    'Cocoa': 0.90,
    'Whipped Cream': 1.00
  };

  ingredientsInStock: { [key: string]: number } = {
    Coffee: 10,
    'Decaf Coffee': 10,
    Sugar: 10,
    Cream: 10,
    'Steamed Milk': 10,
    'Foamed Milk': 10,
    Espresso: 10,
    Cocoa: 10,
    'Whipped Cream': 10,
  };

  drinks = [
    { name: 'Coffee', ingredients: [{ name: 'Coffee', quantity: 3 }, { name: 'Sugar', quantity: 1 }, { name: 'Cream', quantity: 1 }], cost: 2.75, image: 'coffee.png' },
    { name: 'Decaf Coffee', ingredients: [{ name: 'Decaf Coffee', quantity: 3 }, { name: 'Sugar', quantity: 1 }, { name: 'Cream', quantity: 1 }], cost: 2.75, image: 'decafee.png' },
    { name: 'Caffe Latte', ingredients: [{ name: 'Espresso', quantity: 2 }, { name: 'Steamed Milk', quantity: 1 }], cost: 2.55, image: 'latte.png' },
    { name: 'Caffe Americano', ingredients: [{ name: 'Espresso', quantity: 3 }], cost: 3.30, image: 'cafeeamericano.png' },
    { name: 'Caffe Mocha', ingredients: [{ name: 'Espresso', quantity: 1 }, { name: 'Cocoa', quantity: 1, }, { name: 'Steamed Milk', quantity: 1 }, { name: 'Whipped Cream', quantity: 1 }], cost: 3.35, image: 'mocha.png' },
    { name: 'Cappuccino', ingredients: [{ name: 'Espresso', quantity: 2 }, { name: 'Steamed Milk', quantity: 1 }, { name: 'Foamed Milk', quantity: 1 }], cost: 2.90, image: 'cappacino.png' },
  ];

  constructor(private orderService: OrderService) { }

  ngOnInit(): void { }

  canOrderDrink(drink: any): boolean {
    return this.orderService.canOrderDrink(drink);
  }

  // Handle ordering a drink
  orderDrink(drink: any): void {
    const success = this.orderService.orderDrink(drink);
    if (success) {
      this.isLoading = true;
      setTimeout(() => {
        this.orderStatus[drink.name] = 'completed'; // Mark the order as completed
        this.isLoading = false; // Hide the loading modal
        // Update inventory here, e.g., deduct ingredients
      }, 3000);
    } else {
      alert(`Not enough ingredients to make ${drink.name}`);
    }
  }

  calculateDrinkCost(drink: any): number {
    return drink.ingredients.reduce((total: number, ingredient: any) => {
      const unitCost = this.ingredientPrices[ingredient.name] ?? 0;
      return total + unitCost * ingredient.quantity;
    }, 0);
  }
}




