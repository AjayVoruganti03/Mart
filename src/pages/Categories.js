import React from 'react';
import './CSS/Categories.css';

const categoriesData = [
  {
    name: 'Appliances',
    image: '/cimages/appliances.jpg',
  },
  {
    name: 'Baby Care',
    image: '/cimages/baby-care.jpg',
  },
  {
    name: 'Bakery',
    image: '/cimages/bakery.jpg',
  },
  {
    name: 'Beverages',
    image: '/cimages/beverages.jpg',
  },
  {
    name: 'Confectionery & Chocolates',
    image: '/cimages/confectionery.jpg',
  },
  {
    name: 'Crockeries',
    image: '/cimages/crockeries.jpg',
  },
  {
    name: 'Dairy & Eggs',
    image: '/cimages/dairy-eggs.jpg',
  },
  {
    name: 'Fresh Fruits & Vegetables',
    image: '/cimages/fruits.jpg',
  },
  {
    name: 'Groceries',
    image: '/cimages/groceries.jpg',
  },
  {
    name: 'Home Care',
    image: '/cimages/home-care.jpg',
  },
  {
    name: 'Gym wear',
    image: '/cimages/gym-wear.jpeg',
  },
  {
    name: 'Sports Items',
    image: '/cimages/sports-items.jpeg',
  },
  {
    name: 'Bags',
    image: '/cimages/bags.jpeg',
  },
  {
    name: 'Gift-Articles',
    image: '/cimages/gift-articles.jpeg',
  },
  {
    name: 'Hair-Care',
    image: '/cimages/hair-care.jpeg',
  },
  {
    name: 'Snacks',
    image: '/cimages/snacks.jpeg',
  },
];

function Categories() {
  return (
    <div className="categories-container">
      <img src="./iramsha/address.JPG" alt="Spoiling You With Options Since 1997" className="banner-image" />
      <h1>Get Global Brand Products at Ramsha Wholesale Mart in Wanaparthy</h1>
      <p className="product-description">
        Ramsha Wholesale Mart offers a wide variety of products at wholesale prices, perfect for families, businesses, and anyone looking to save money on their everyday essentials. We carry a large selection of:
      </p>
      <ul className="product-list">
        <li>Appliances</li>
        <li>Baby Care</li>
        <li>Bakery Items</li>
        <li>Beverages</li>
        <li>Confectionery & Chocolates</li>
        <li>Crockeries</li>
        <li>Dairy & Eggs</li>
        <li>Fresh Fruits & Vegetables</li>
        <li>Groceries (including staples, packaged foods, and household items)</li>
        <li>Home Care Products</li>
        <li>Gym Wear</li>
        <li>Sports Items</li>
        <li>Bags</li>
        <li>Gift-Articles</li>
        <li>Hair-Care</li>
        <li>Snacks</li>
      </ul>
      <div className="categories-grid">
        {categoriesData.map((category, index) => (
          <div className="category-item" key={index}>
            <img src={category.image} alt={category.name} />
            <p>{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;