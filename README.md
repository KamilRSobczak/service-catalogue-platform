# Setup/and run project

## Installation/and run project

Download or clone this project and then install it localy.

```bash
  git clone <repository-url>
  cd service-catalogue-platform
```

Install service-catalogue-platform app with npm

```bash
  npm install
```

Runs the app in the development mode.

```bash
  npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Explanation of the project structure

## Overview

This project is a prototype for a **Service Catalogue Platform** developed using React. It demonstrates responsive design, dynamic data handling, navigation, and multi-step form functionality.

## 🔗 Deployed preview

https://service-catalogue-platform.netlify.app/

## Features

- Display a list of services with details like name, description, and price.
- View detailed information for a selected service.
- Multi-step order wizard to configure and finalize service orders.
- Data persistence across steps using React Context API.
- Responsive design for desktop, tablet, and mobile.

## Project Structure

## File and Folder Details

### **1. `/components`**

Contains reusable UI components:

#### **`/HeaderNavBar`**

- `HeaderNavBar.js`: Displays header bar navigation with direct link to main service list page "/".
- `serviceList.module.css`: Scoped styles for the HeaderNavBar component.

#### **`/ServiceList`**

- `serviceList.js`: Displays the list of available services.
- `serviceList.module.css`: Scoped styles for the ServiceList component.

#### **`/ServiceDetails`**

- `serviceDetails.js`: Displays detailed information about a selected service.
- `serviceDetails.module.css`: Scoped styles for the ServiceDetails component.

#### **`/ServiceOrderWizard`**

Handles the multi-step order wizard.

- **`/Step1`**:

  - `step1.js`: First step for entering owner details and selecting dates.
  - `step1.module.css`: Styles for the Step1 component.

- **`/Step2`**:

  - `step2.js`: Second step for cost details and additional notes.
  - `step2.module.css`: Styles for the Step2 component.

- **`/Step3`**:

  - `step3.js`: Third step for summarizing and submitting the order.
  - `step3.module.css`: Styles for the Step3 component.

- `serviceOrder.js`: Parent component managing the wizard navigation and state.
- `serviceOrder.module.css`: Styles for the wizard.

---

### **2. `/pages`**

Contains page components rendered based on the routing:

- `homePage.js`: Displays the `ServiceList` and acts as the landing page.
- `serviceDetailsPage.js`: Shows the `ServiceDetails` for a selected service.
- `serviceOrderPage.js`: Displays the `ServiceOrder` for placing an order.

---

### **3. `/data`**

Contains static/mock data:

- `data.js`: Mock data for the services available in the platform.

---

### **4. `/services`**

Handles data-fetching and API interactions:

- `api.js`: Contains functions like fetching the service list, fetching service by ID, and submitting orders.

---

### **5. `/context`**

Manages shared global state:

- `WizardContext.js`: Provides global state for the order wizard, ensuring data persistence between steps.

---

### **6. Root Files**

- **`App.js`**: The root component managing routes and context.
- **`app.module.css`**: Styles for the App.js.
- **`index.js`**: Entry point rendering the `App.js` component.

---

## Routing

The app uses **React Router** for navigation:

| Path                 | Component            | Description                               |
| -------------------- | -------------------- | ----------------------------------------- |
| `/`                  | `HomePage`           | Displays the list of available services.  |
| `/service/:id`       | `ServiceDetailsPage` | Shows details of the selected service.    |
| `/service/:id/order` | `ServiceOrderPage`   | Navigates to the multi-step order wizard. |

---

## State Management

- **Context API** (`WizardContext.js`):
  - Manages shared state for the order wizard.
  - Ensures data persistence across steps.
  - Exposes state and actions to child components.

---

## Mock Data

Example services provided in `/data/data.js`:

```javascript
export const services = [
  {
    id: 1,
    name: "Antivirus as a Service",
    shortDescription: "Cloud-based antivirus solution to protect your systems.",
    detailedDescription:
      "Comprehensive protection against malware, ransomware, and phishing attacks.",
    price: "149 PLN/month",
  },
  {
    id: 2,
    name: "Monitoring as a Service",
    shortDescription: "Proactive monitoring for your IT infrastructure.",
    detailedDescription:
      "24/7 performance tracking and alerts for servers, applications, and network devices.",
    price: "299 PLN/month",
  },
  {
    id: 3,
    name: "Automation as a Service",
    shortDescription: "Streamline your operations with automation.",
    detailedDescription:
      "Automate repetitive tasks, optimize processes, and integrate third-party tools.",
    price: "399 PLN/month",
  },
];
```

## Styling

- **CSS Modules:**
  - Scoped styles for each component to prevent class name collisions.
