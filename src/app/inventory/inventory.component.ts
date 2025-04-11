import { Component } from '@angular/core';
import { InventoryService } from '../core/services/inventory.service';

interface Ingredient {
  name: string;
  quantity: number;
}

@Component({
  selector: 'app-inventory',
  standalone: false,
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.css'
})
export class InventoryComponent {
  ingredients: Ingredient[] = [
    { name: 'Coffee', quantity: 10 },
    { name: 'Decaf Coffee', quantity: 10 },
    { name: 'Sugar', quantity: 10 },
    { name: 'Cream', quantity: 10 },
    { name: 'Steamed Milk', quantity: 10 },
    { name: 'Foamed Milk', quantity: 10 },
    { name: 'Espresso', quantity: 10 },
    { name: 'Cocoa', quantity: 10 },
    { name: 'Whipped Cream', quantity: 10 }
  ];

  inventory: { name: string; quantity: number }[] = [];

  constructor(private inventoryService: InventoryService) { }

  ngOnInit(): void {
    this.inventory = this.inventoryService.getInventory();
  }

  // Restock all ingredients
  restockInventory(): void {
    this.inventoryService.restock();
    this.inventory = this.inventoryService.getInventory();
  }

  getInventoryColor(quantity: number): string {
    if (quantity <= 2) {
      return 'warn'; // Red color when inventory is low
    } else if (quantity <= 5) {
      return 'accent'; // Yellow color when inventory is medium
    } else {
      return 'primary'; // Green color when inventory is sufficient
    }
  }

  // Method to restock ingredient
  restockIngredient(ingredient: Ingredient): void {
    ingredient.quantity = 10; // Restock to the full capacity (10 units)
  }
}