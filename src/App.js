import React, {useState} from 'react';
import './App.css';
import foodData from './foods.json';

function App() {
  const [food, setFood] = useState(foodData)


  return (
   
    <div className="App">
  
    <h1>Food list</h1>
 
    {food.map(food => {
        return (
          <div>
            <p> {food.name} </p>
            <img src={food.image} alt={food.name} width='150px' />
          </div>
         )
    })}
     </div>
  )
} 

export default App;