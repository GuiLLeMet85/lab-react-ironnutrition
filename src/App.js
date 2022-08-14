import React, {useState} from 'react';
import './App.css';
import foodData from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [foods, setFood] = useState(foodData)


  const handleDelete = (name) => {
    const foodToRemove = foods.filter (food =>{
      return food.name !== (name)
    }) 
    setFood(foodToRemove)
  }

  const handleSearch = (searchValue) => {
    if (searchValue==='') {
      setFood(foodData)
    }
    else {
      const filtered = foods.filter(elem => elem.name.toLowerCase().includes((searchValue).toLowerCase()))
      setFood(filtered)
    }
  }

  const handleNewFood = (food) => {
    const updateFoods = [...foods];
      updateFoods.push(food);
    setFood(updateFoods);
  } 

 

  return (
   
    <div className="App">
  
    <h1>Food list</h1> 
      <div className='add-search-st'>
        <AddFoodForm newFood = {handleNewFood} />
        <Search onSearch = {handleSearch} />
      </div>  
        <FoodBox onDelete = {handleDelete} food = {foods} />
    </div>
  )
} 

export default App;