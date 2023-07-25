import React from 'react';
import './Menu.css';
import dish1Image from '../assets/dish1.jpg';
import dish2Image from '../assets/dish2.jpg';
import dish3Image from '../assets/dish3.jpg';

function Menu() {
  const dishes = [
    {
      name: 'Greek Salad',
      description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
      price: '$10',
      image: dish1Image,
    },
    {
      name: 'Bruschetta',
      description: 'Our Bruschetta is made from homemade grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Topped with fresh vegetables.',
      price: '$12',
      image: dish2Image,
    },
    {
      name: 'Lemon Cake',
      description: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined. ',
      price: '$8',
      image: dish3Image,
    },
  ];

  return (
    <div className='menu'>
    <div className='menu-cont'>
      <h2 className='menu-heading'>This Week's Special</h2>
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
    </div>
  );
}

export default Menu;
