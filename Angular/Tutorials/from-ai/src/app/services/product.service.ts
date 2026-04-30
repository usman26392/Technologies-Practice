import { Injectable } from '@angular/core';

// Topic: Creating an injectable service
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getProducts() {
    return [
      { id: 1, name: "Laptop" },
      { id: 2, name: "Mouse" },
      { id: 3, name: "Keyboard" },
      { id: 4, name: "Monitor" },
      { id: 5, name: "Headphones" }]
  }

}




// Real-World Industry-Level Examples
/*

1. 🛒 E-commerce App (Product Service)
- Fetch product list from backend API
- Share cart data across components

2. 🏦 Banking App (Transaction Service)
- Get account balance
- Fetch transaction history
- Handle money transfer API calls

3. 📊 Admin Dashboard (Analytics Service)
- Fetch charts data
- Provide KPIs across multiple dashboard widgets

4. 🔐 Authentication Service
- Login / logout
- Store user token
- Check if user is authenticated

*/