# E-Commerce App

A responsive e-commerce application built to provide a seamless online shopping experience. The app is hosted on Vercel and available [here](https://ecommerce-app-bay-gamma.vercel.app/).

## Features

- Browse products with detailed descriptions.
- Add products to the cart.
- Update quantities in the shopping cart.
- Checkout process to complete purchases.
- Responsive design for all devices.

## Technology Stack

- **Frontend:** React.js
- **Styling:** Tailwind CSS
- **Backend API:** [Fake Store API](https://fakestoreapi.com)
- **Hosting:** Vercel
- 
## API Integration

This application fetches product data using the [Fake Store API](https://fakestoreapi.com). Here's an example of the API endpoint used:

```javascript
fetch(`https://fakestoreapi.com/products/${id}`)
  .then((res) => res.json())
  .then((data) => console.log(data));

To run this project locally, follow these steps:

Clone the repository:
git clone https://github.com/username/repository-name.git
cd repository-name
Install dependencies:
npm install
Start the development server:

npm start
Home Page:
<img width="956" alt="image" src="https://github.com/user-attachments/assets/f4733301-6764-489c-97e7-ccc5232dce4e" />

Single product Page:
<img width="958" alt="image" src="https://github.com/user-attachments/assets/0e8390b8-e74a-430b-9c81-58566b9678d6" />

cart Page:
<img width="947" alt="image" src="https://github.com/user-attachments/assets/50a46092-1f71-42c0-883b-6b48815d5b9a" />

Checkout Page:
<img width="949" alt="image" src="https://github.com/user-attachments/assets/ed93f363-f194-463b-8d6e-3558a47dd8b2" />





