import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import '../styles/Order.css';

// ====== Import Images ======
import beefquesadilla from '../assets/beefquesadilla.jpg';
import beeftaco from '../assets/beeftaco.jpg';
import chickennuggets from '../assets/chickennuggets(kidsmeal).jpg';
import chickenplate from '../assets/chickenplate.jpg';
import chickenquesadilla from '../assets/chickenquesadilla.jpg';
import chickensalad from '../assets/chickensalad.jpg';
import chickentaco from '../assets/chickentaco.jpg';
import chickentenders from '../assets/chickentenders(kidsmeal).jpg';
import fajitasplate from '../assets/fajitasplate.jpg';
import falafelplate from '../assets/falafelplate.jpg';
import falafelsandwich from '../assets/falafelsandwich.jpg';
import gyroplate from '../assets/gyroplate.jpg';
import gyrosalad from '../assets/gyrosalad.jpg';
import gyrosandwich from '../assets/gyrosandwich.jpg';
import mixplate from '../assets/mixplate.jpg';
import mixsalad from '../assets/mixsalad.jpg';
import phillysteaksandwich from '../assets/phillysteaksandwich.jpg';
import steakburrito from '../assets/steakburrito.jpg';
import beefburrito from '../assets/beefburrito.jpg';
import chickenburrito from '../assets/chickenburrito.jpg';
import steakquesadilla from '../assets/steakquasadilla.jpg';
import steaktacos from '../assets/steaktacos.jpg';
import wings from '../assets/wings.jpg';
import grilledchickensandwich from '../assets/grilledchickensandwich.jpg';
import burger from '../assets/burger.jpg';

// ====== Menu Items Data ======
const menuItems = [

  //plates
  { id: 1, category: "Plate", name: 'Chicken Plate', price: 10.99, image: chickenplate },
  { id: 2, category: "Plate", name: 'Gyro Plate', price: 10.99, image: gyroplate },
  { id: 3, category: "Plate", name: 'Mix Plate', price: 11.99, image: mixplate },
  { id: 4, category: "Plate", name: 'Falafel Plate', price: 9.99, image: falafelplate },
  { id: 5, category: "Plate", name: 'Fajitas Plate', price: 11.99, image: fajitasplate },
  

  //Quesadilla
  { id: 6, category: "Quesadilla", name: 'Beef Quesadilla', price: 8.99, image: beefquesadilla },
  { id: 7, category: "Quesadilla", name: 'Chicken Quesadilla', price: 8.99, image: chickenquesadilla },
  { id: 8, category: "Quesadilla", name: 'Steak Quesadilla', price: 9.49, image: steakquesadilla },


  //Tacos
  { id: 9, category: "Taco", name: '1 Beef Taco', price: 3.49, image: beeftaco },
  { id: 10, category: "Taco", name: '3 Beef Taco', price: 9.99, image: beeftaco },
  { id: 11, category: "Taco", name: '1 Steak Taco', price: 4.29, image: steaktacos },
  { id: 12, category: "Taco", name: '3 Steak Tacos', price: 9.99, image: steaktacos },
  { id: 13, category: "Taco", name: '1 Chicken Taco', price: 3.99, image: chickentaco },
  { id: 14, category: "Taco", name: '3 Chicken Tacos', price: 9.99, image: steaktacos },


  //Burrito
  { id: 15, category: "Burrito", name: 'Steak Burrito', price: 9.99, image: steakburrito },
  { id: 16, category: "Burrito", name: 'Beef Burrito', price: 9.99, image: beefburrito },
  { id: 17, category: "Burrito", name: 'Chicken Burrito', price: 9.99, image: chickenburrito },


  //Sandwiches
  { id: 18, category: "Sandwich", name: 'Falafel Sandwich', price: 7.99, image: falafelsandwich, subcategory: 'MealEligible' },
  { id: 19, category: "Sandwich", name: 'Gyro Sandwich', price: 8.49, image: gyrosandwich, subcategory: 'MealEligible' },
  { id: 20, category: "Sandwich", name: 'Philly Steak Sandwich', price: 9.99, image: phillysteaksandwich, subcategory: 'MealEligible' },
  { id: 21, category: "Sandwich", name: 'Homemade Burger Sandwich', price: 6.99, image: burger, subcategory: 'MealEligible' },
  { id: 22, category: "Sandwich", name: 'Grilled Chicken Sandwich', price: 6.99, image: grilledchickensandwich, subcategory: 'MealEligible' },


  //kids Meals
  { id: 23, category: "Kids Meal", name: 'Chicken Nuggets (Kids Meal)', price: 5.99, image: chickennuggets },
  { id: 24, category: "Kids Meal", name: 'Chicken Tenders (Kids Meal)', price: 7.99, image: chickentenders },
  { id: 25, category: "Kids Meal", name: 'Cheeseburger (Kids Meal)', price: 7.99, image: burger },


  //Salads
  { id: 26, category: "Salad", name: 'Chicken Salad', price: 7.99, image: chickensalad },
  { id: 27, category: "Salad", name: 'Gyro Salad', price: 8.99, image: gyrosalad },
  { id: 28, category: "Salad", name: 'Mix Salad', price: 8.99, image: mixsalad },


  //Wings
  { id: 29, category: "Wings", name: "5 Pieces Wings", price: 6.99, image: wings },
  { id: 30, category: "Wings", name: "10 Pieces Wings", price: 11.99, image: wings },
  { id: 31, category: "Wings", name: "15 Pieces Wings", price: 16.99, image: wings },
  { id: 32, category: "Wings", name: "20 Pieces Wings", price: 21.99, image: wings },
  { id: 33, category: "Wings", name: "25 Pieces Wings", price: 26.99, image: wings },
  { id: 34, category: "Wings", name: "30 Pieces Wings", price: 31.99, image: wings },


  //Drinks
  { id: 35, category: "Drink", name: "Soft Drink", price: 1.99 },
  { id: 36, category: "Drink", name: "Soda Can", price: 1.99 },
  { id: 37, category: "Drink", name: "Water", price: 1.49 },
  { id: 38, category: "Drink", name: "Jarritos", price: 2.99 },
  { id: 39, category: "Drink", name: "Coconut", price: 2.99 },
  { id: 40, category: "Drink", name: "Gatorade", price: 2.49 },
  { id: 41, category: "Drink", name: "Pepsi Bottle", price: 2.49 },
  { id: 42, category: "Drink", name: "Jumex", price: 1.99 },
  { id: 43, category: "Drink", name: "Monster", price: 3.29 },
  { id: 44, category: "Drink", name: "Redbull", price: 3.99 },
  { id: 45, category: "Drink", name: "Bottle Mexican Drink", price: 2.99 },
  { id: 46, category: "Side", name: "Loaded Fries", price: 6.99 },


  //Sides
  { id: 47, category: "Side", name: "Fries", price: 2.99 },
  { id: 48, category: "Side", name: "Salad", price: 3.49 },
  { id: 49, category: "Side", name: "Rice", price: 2.99 },
  { id: 50, category: "Side", name: "Beans", price: 3.49 },
];

// ====== Order Component ======
function Order() {
  const { addToCart } = useCart();
  const [searchTerm, setSearchTerm] = useState('');
  const [customizations, setCustomizations] = useState({});
  const [makeItMealItems, setMakeItMealItems] = useState({});
  const [sauces, setSauces] = useState({});

  // ====== Add item to cart with customization and meal option ======
  const handleAddToCart = (item) => {
    const isMeal = makeItMealItems[item.name] || false;
    const customization = customizations[item.id] || '';
    const selectedSauce = sauces[item.id] || '';

    const finalItem = {
      ...item,
      name: isMeal ? `${item.name} (Meal)` : item.name,
      price: isMeal ? item.price + 2.99 : item.price,
      customization,
      sauce: item.category === 'Wings' ? selectedSauce : undefined,
    };

    addToCart(finalItem);

    // Clear input fields
    setCustomizations(prev => ({ ...prev, [item.id]: '' }));
    setMakeItMealItems(prev => ({ ...prev, [item.name]: false }));
    setSauces(prev => ({ ...prev, [item.id]: '' }));

    alert(`${finalItem.name} added to cart!`);
  };

  // ====== Filter items based on search ======
  const filteredItems = menuItems.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // ====== Render section for each menu category ======
  const renderSection = (title, category) => (
    <>
      <h2 className="section-title">{title}</h2>
      <div className="menu-items">
        {filteredItems
          .filter(item => item.category === category)
          .map(item => (
            <div key={`${item.id}-${item.name}`} className="menu-item">
              {item.image && <img src={item.image} alt={item.name} className="menu-image" />}
              <h3>{item.name}</h3>
              <p>${item.price.toFixed(2)}</p>

              {/* Show "Make it a Meal" checkbox for eligible items */}
              {item.subcategory === 'MealEligible' && (
                <label>
                  <input
                    type="checkbox"
                    checked={makeItMealItems[item.name] || false}
                    onChange={(e) =>
                      setMakeItMealItems(prev => ({
                        ...prev,
                        [item.name]: e.target.checked
                      }))
                    }
                  />
                  Make it a Meal (+$2.99)
                </label>
              )}

              {/* Customization input */}
              <input
                type="text"
                placeholder="Customization (e.g., No onions)"
                value={customizations[item.id] || ''}
                onChange={(e) =>
                  setCustomizations(prev => ({
                    ...prev,
                    [item.id]: e.target.value
                  }))
                }
                className="customization-input"
              />

              {/* Sauce dropdown for Wings */}
              {item.category === 'Wings' && (
                <select
                  value={sauces[item.id] || ''}
                  onChange={(e) =>
                    setSauces(prev => ({
                      ...prev,
                      [item.id]: e.target.value
                    }))
                  }
                  className="sauce-dropdown"
                >
                  <option value="">Select Sauce</option>
                  <option value="Mango Habanero">Mango Habanero</option>
                  <option value="Barbecue">Barbecue</option>
                  <option value="Buffalo">Buffalo</option>
                  <option value="Garlic">Garlic</option>
                  <option value="Plain">Plain</option>
                </select>
              )}

              {/* Add to Cart button */}
              <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
            </div>
          ))}
      </div>
    </>
  );

  // ====== Render Order Page ======
  return (
    <div className="order-page">
      <h1>Order Now</h1>

      {/* Search input */}
      <input
        type="text"
        placeholder="Search for an item..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />

      {/* Render menu sections */}
      {renderSection('🍽️ Plates', 'Plate')}
      {renderSection('🧀 Quesadillas', 'Quesadilla')}
      {renderSection('🌮 Tacos', 'Taco')}
      {renderSection('🌯 Burritos', 'Burrito')}
      {renderSection('🥪 Sandwiches', 'Sandwich')}
      {renderSection('👶 Kids Meals', 'Kids Meal')}
      {renderSection('🥗 Salads', 'Salad')}
      {renderSection('🍗 Wings', 'Wings')}
      {renderSection('🥤 Drinks', 'Drink')}
      {renderSection('🍟 Sides', 'Side')}
    </div>
  );
}

export default Order;
