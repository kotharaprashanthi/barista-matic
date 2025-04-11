# Barista-matic

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.8.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

# Barista-matic ☕️

An interactive coffee drink dispenser simulator built with **Angular 19** and **TypeScript**. The Barista-matic manages inventory, calculates drink prices, and allows users to order drinks or restock inventory, with a clean and responsive UI.

---

## 🚀 Features

- 📋 Displays drink menu with dynamic pricing
- 📦 Inventory management (deducts/restocks ingredients)
- 🧠 State-aware: disables drinks that can't be made
- 💸 Real-time cost calculation from ingredient unit prices
- 💾 Mocked services (Inventory & Order) for simulation
- 🧪 Unit test coverage for services (Inventory, Drink, Order)
- 🎨 Sleek UI using Angular animations & modern styling
- ⚙️ Production-ready Angular build with CLI

---

## 📂 Project Structure

```
src/
├── app/
│   ├── components/      # UI components
│   ├── services/        # InventoryService, OrderService, DrinkService
│   ├── models/          # Interfaces (if extracted)
│   ├── app.module.ts
│   └── app.component.ts
├── assets/
├── environments/
└── index.html
```

---

## 🛠️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/kotharaprashanthi/barista-matic.git
cd barista-matic
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run in development mode

```bash
ng serve
```

Visit [http://localhost:4200](http://localhost:4200)

---

## 🧪 Running Tests

```bash
ng test
```

> Includes unit tests for:
> - `InventoryService`
> - `DrinkService`
> - `OrderService`

---

## 📦 Building for Production

```bash
ng build --configuration production
```

Output goes to the `dist/` folder and can be deployed with any static server.

---

## 📚 Technologies Used

- Angular 19
- TypeScript
- Jasmine + Karma (Unit Testing)
- SCSS/CSS (with optional Tailwind or Bootstrap)
- Angular Animations (for smooth UX)
- Angular CLI

---



- Added REST API layer (real inventory storage)





