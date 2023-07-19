import React from 'react';
import './Menu.css';
import dish1Image from '../assets/dish1.jpg';
import dish2Image from '../assets/dish2.jpg';
import dish3Image from '../assets/dish3.jpg';

function Menu() {
  const dishes = [
    {
      name: 'Dish 1',
      description: 'Description of Dish 1',
      price: '$10',
      image: dish1Image,
    },
    {
      name: 'Dish 2',
      description: 'Description of Dish 2',
      price: '$12',
      image: dish2Image,
    },
    {
      name: 'Dish 3',
      description: 'Description of Dish 3',
      price: '$8',
      image: dish3Image,
    },
  ];

  return (
    <div className='menu-cont'>
      <h2>This Week's Special</h2>
      <div className="menu-container">
        {dishes.map((dish, index) => (
          <div className="card" key={index}>
            <img src={dish.image} alt={dish.name} className="dish-image" />
            <div className="dish-details">
              <h2 className="dish-name">{dish.name}</h2>
              <p className="dish-description">{dish.description}</p>
              <p className="dish-price">
                {dish.price}
                <span className="add-to-cart">&#128722;</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
