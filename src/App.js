import React, {useState} from 'react';
import './App.css';
import foodData from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';
import {Divider} from 'antd';

function App() {
  const [foods, setFood] = useState(foodData)
  const [showForm, setShowForm] = useState (true)


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
      <div className='title-sct'> 
        <h1>Food list</h1> 
      </div>
      <div className='add-search-st'>
        <div className='center-divider'>
          <Divider>Add Food Entry</Divider>   
          {showForm && <AddFoodForm newFood = {handleNewFood} />}
          <button className="hide-form-bt" onClick={() => setShowForm(prev => !prev)}>{!showForm ? "▽" : "▲"}</button>
        </div>
        <div className='center-divider'>
          <Divider>Search Food</Divider>  
          <Search onSearch = {handleSearch} />
        </div>

      </div>  
  
             {foods.length > 0 ? (
                  foods.map((food) => {
                    return (
                      <FoodBox key={food.name} onDelete = {handleDelete} food = {foods} />
                    );
                  })
                ) : (
                  <div className='no-result'>
                    <h3>Oops! There is no more content to show </h3>
                    <img src="https://media.giphy.com/media/IRFQYGCokErS0/giphy.gif" alt="cat dancing" />
                  </div>
                )} 

    </div>
  )
} 

export default App;

