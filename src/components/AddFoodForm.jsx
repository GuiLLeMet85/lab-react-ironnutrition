import React, {useState} from 'react';
import { Input } from 'antd';

function AddFoodForm(props) {

        const {newFood} = props

        const [food, setFood] = useState({
            name: '',
            image: '',
            calories: '',
            servings: ''
        })

        const handleChange = (e) => {
            const conditionalValue = e.target.name === 'calories' ? parseInt(e.target.value) : e.target.value;
            setFood(prev => {
                return {
                    ...prev,
                    [e.target.name]: conditionalValue
                }
            })
        }

        const handleCalories = (e) => {
            setFood(prev => {
                return {
                    ...prev,
                    calories: parseInt(e.target.value)
                }
            })
        }

        const handleServings = (e) => {
            setFood(prev => {
                return {
                    ...prev,
                    servings: parseInt(e.target.value)
                }
            })
        }

        const handleForm = (e) => {
            e.preventDefault();
            newFood(food);
            setFood({
                name: '',
                image: '',
                calories: '',
                servings: '',
              })
        }

    return (
      <form onSubmit={handleForm} className="addfood">
        <label>Name</label>
        <Input value={food.name} name = "name" placeholder="Food name" type="text" onChange={(e) => handleChange(e)} />
  
        <label>Image</label>
        <Input value={food.image} name = "image" placeholder="Image URL" type="text" onChange={(e) => handleChange(e)} />
  
        <label>Calories</label>
        <Input value={food.calories} name = "calories" placeholder="Number of calories" type="number" onChange={(e) => handleCalories(e)}  />
  
        <label>Servings</label>
        <Input value={food.servings} name = "servings" placeholder="Number of servings" type="number" onChange={(e) => handleServings(e)} />
  
        <button type="submit">Save new food!</button>
      </form>
    );
  }
  
  export default AddFoodForm;

