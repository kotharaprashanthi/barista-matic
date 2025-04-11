// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button'; // Angular Material Button
import { MatSnackBarModule } from '@angular/material/snack-bar'; // For alerts

import { AppComponent } from './app.component';
import { InventoryComponent } from './inventory/inventory.component';
import { MenuComponent } from './menu/menu.component';
import { InventoryService } from './core/services/inventory.service';
import { OrderService } from './core/services/order.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoadingModalComponent } from './shared/loading-modal/loading-modal.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [AppComponent, InventoryComponent, MenuComponent, LoadingModalComponent],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatCardModule
  ],
  providers: [InventoryService, OrderService],
  bootstrap: [AppComponent],
})
export class AppModule { }
