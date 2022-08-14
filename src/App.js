import React, {useState} from 'react';
import './App.css';
import foodData from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';

function App() {
  const [foods, setFood] = useState(foodData)

  const handleDelete = (name) => {
    const foodToRemove = foods.filter (food =>{
      return food.name !== (name)
    }) 
    setFood(foodToRemove)
  }

  const handleNewFood = (food) => {
    const updateFoods = [...foods];
    updateFoods.push(food);
    setFood(updateFoods);
  } 




  return (
   
    <div className="App">
  
    <h1>Food list</h1> 
        <AddFoodForm newFood = {handleNewFood} />
        <FoodBox onDelete = {handleDelete} food = {foods} />
    </div>
  )
} 

export default App;