import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

function FoodDisplay({category}) {
    const{food_list}=useContext(StoreContext)
    console.log(food_list);
    
  return (
    <div className='food-display'>
      <h2>Top Dishes near you </h2>
      <div className='food-display-list'>
   
     { food_list.map((item, index) => {
    console.log("food item path:", item.image);
    if (category === "all" || category === item.category) {
     return <FoodItem key={index}id={item._id}name={item.name}description={item.description}price={item.price}image={item.image}/>
    }
    return null; // Return null if the condition is not met
  }) }
      


      </div>
    </div>
  )
}

export default FoodDisplay
